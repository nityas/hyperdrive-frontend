import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  AppConfig,
  HyperdriveConfig,
  findBaseToken,
} from "@hyperdrive/appconfig";
import {
  ColumnFiltersState,
  Header,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import * as dnum from "dnum";
import { useState } from "react";
import { formatTimeDifference } from "src/base/formatTimeDifference";
import { makeAddressUrl } from "src/blockexplorer/makeAddressUrl";
import { makeTransactionURL } from "src/blockexplorer/makeTransactionUrl";
import { SupportedChainId } from "src/chains/supportedChains";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Pagination } from "src/ui/base/components/Pagination";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import {
  TransactionData,
  useTransactionData,
} from "src/ui/hyperdrive/TransactionTable/useTransactionData";
import { Address, parseUnits } from "viem";
import { useBlock, useChainId } from "wagmi";

export interface Transaction {
  type: string;
  value: string;
  account: Address;
  blockNumber: bigint | undefined;
}

const eventMap = {
  OpenLong: "Open Long",
  OpenShort: "Open Short",
  CloseLong: "Close Long",
  CloseShort: "Close Short",
  AddLiquidity: "Add Liquidity",
  RemoveLiquidity: "Remove Liquidity",
  RedeemWithdrawalShares: "Redeem Withdrawal Shares",
} as const;
type EventName = keyof typeof eventMap;

const columnHelper = createColumnHelper<TransactionData>();

export function TransactionTable({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): JSX.Element {
  const { data: transactionData, isLoading } = useTransactionData({
    hyperdriveAddress: hyperdrive.address,
  });
  const appConfig = useAppConfig();
  const isSmallScreenView = useIsTailwindSmallScreen();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const tableInstance = useReactTable({
    columns: isSmallScreenView
      ? getMobileColumns(hyperdrive, appConfig)
      : getColumns(hyperdrive, appConfig),
    data: transactionData || [],
    initialState: {
      sorting: [
        {
          id: "blockNumber",
          desc: true,
        },
      ],
    },
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    enableColumnFilters: true,
    enableFilters: true,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // Loaded but no data to display
  if (!transactionData?.length && !isLoading) {
    return (
      <div className="flex h-52 w-full items-center justify-center">
        <NonIdealState
          heading="There are no transactions to display"
          text="Open a position or add liquidity to see transactions here."
        />
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col">
      <table className="daisy-table daisy-table-zebra daisy-table-lg h-fit">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="sticky top-0 z-10 h-10 bg-base-100 text-sm"
                  key={header.id}
                >
                  <div
                    className={classNames("font-normal text-neutral-content", {
                      "flex cursor-pointer select-none items-center gap-2 ":
                        header.column.getCanSort(),
                    })}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {{
                      asc: <ChevronUpIcon height={15} />,
                      desc: <ChevronDownIcon height={15} />,
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                  {header.column.getCanFilter() ? (
                    <FilterSelect header={header} />
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody
          className={classNames({
            "relative h-52": !tableInstance.getFilteredRowModel().rows.length,
          })}
        >
          {isLoading ? (
            <TableSkeleton numColumns={4} numRows={5} />
          ) : (
            tableInstance.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className="h-20">
                  <>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      );
                    })}
                  </>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {tableInstance.getFilteredRowModel().rows.length && !isLoading ? (
        <Pagination tableInstance={tableInstance} />
      ) : null}
    </div>
  );
}

function getColumns(hyperdrive: HyperdriveConfig, appConfig: AppConfig) {
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  return [
    columnHelper.accessor("eventName", {
      id: "eventName",
      enableSorting: false,
      enableColumnFilter: true,
      header: () => null,
      cell: ({ getValue, row }) => {
        return (
          <EventNameCell
            name={eventMap[getValue() as EventName] || getValue()}
            blockNumber={row.original.blockNumber || 0n}
          />
        );
      },
      filterFn: (row, _, filterValue) => {
        const type = row.getValue("eventName") as string;
        const filters = {
          All: true,
          Longs: ["OpenLong", "CloseLong"].includes(type),
          Shorts: ["OpenShort", "CloseShort"].includes(type),
          LP: [
            "AddLiquidity",
            "RemoveLiquidity",
            "RedeemWithdrawalShares",
          ].includes(type),
        } as const;
        return filters[filterValue as keyof typeof filters];
      },
    }),
    columnHelper.accessor("bondAmount", {
      id: "bondAmount",
      header: `Size`,
      cell: ({ getValue, row }) => {
        const bondAmount = getValue();
        const size = dnum.format(
          [
            row.original.eventName === "OpenShort" ||
            row.original.eventName === "CloseShort"
              ? bondAmount || 0n
              : row.original.baseAmount || 0n,
            18,
          ],
          { digits: 2 },
        );
        const isLpRow =
          row.getValue("eventName") === "AddLiquidity" ||
          row.getValue("eventName") === "RemoveLiquidity" ||
          row.getValue("eventName") === "RedeemWithdrawalShares";

        // show withdrawal shares for remove liquidity
        if (
          row.getValue("eventName") === "RemoveLiquidity" &&
          row.original.withdrawalShares &&
          row.original.lpSharePrice
        ) {
          const baseQueuedForWithdrawal = dnum.multiply(
            [row.original.withdrawalShares, hyperdrive.decimals],
            [row.original.lpSharePrice, hyperdrive.decimals],
          )[0];

          const baseQueuedForWithdrawalLabel =
            formatBaseQueuedForWithdrawalLabel(
              baseQueuedForWithdrawal,
              hyperdrive.decimals,
              baseToken.symbol,
            );

          return (
            <div className="flex flex-col gap-1">
              <span>
                {size} {baseToken.symbol}
              </span>
              <span className="daisy-label-text text-neutral-content ">
                {baseQueuedForWithdrawalLabel}
              </span>
            </div>
          );
        }

        return (
          <span>
            {size} {isLpRow ? baseToken.symbol : `hy${baseToken.symbol}`}
          </span>
        );
      },
      enableColumnFilter: false,
      enableSorting: false,
    }),
    columnHelper.accessor("trader", {
      header: "Account",
      enableColumnFilter: false,
      enableSorting: false,
      cell: (account) => <AccountCell account={account.getValue()} />,
    }),
    columnHelper.accessor("blockNumber", {
      header: "Time",
      enableColumnFilter: false,
      cell: (blockNumber) => <BlockInfo blockNumber={blockNumber.getValue()} />,
    }),
  ];
}

function formatTransactionTableMobileData(
  row: TransactionData,
  hyperdrive: HyperdriveConfig,
  appConfig: AppConfig,
) {
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const size = dnum.format(
    [
      row.eventName === "OpenShort" || row.eventName === "CloseShort"
        ? row.bondAmount || 0n
        : row.baseAmount || 0n,
      18,
    ],
    { digits: 2 },
  );

  let baseQueuedForWithdrawalLabel;
  if (
    row.eventName === "RemoveLiquidity" &&
    row.withdrawalShares &&
    row.lpSharePrice
  ) {
    const baseQueuedForWithdrawal = dnum.multiply(
      [row.withdrawalShares, hyperdrive.decimals],
      [row.lpSharePrice, hyperdrive.decimals],
    )[0];

    baseQueuedForWithdrawalLabel = formatBaseQueuedForWithdrawalLabel(
      baseQueuedForWithdrawal,
      hyperdrive.decimals,
      baseToken.symbol,
    );
  }
  return [
    {
      name: "Event",
      value: (
        <EventNameCell
          name={eventMap[row.eventName as EventName] || row.eventName}
          blockNumber={row.blockNumber || 0n}
        />
      ),
    },
    {
      name: "Size",
      value: (
        <div className="flex flex-col items-end gap-1">
          <span className="flex">
            {size} {baseToken.symbol}
          </span>
          <span className="daisy-label-text text-neutral-content ">
            {baseQueuedForWithdrawalLabel}
          </span>
        </div>
      ),
    },
    {
      name: "Account",
      value: <AccountCell account={row.trader} />,
    },
    {
      name: "Time",
      value: <BlockInfo blockNumber={row.blockNumber} />,
    },
  ];
}

function getMobileColumns(hyperdrive: HyperdriveConfig, appConfig: AppConfig) {
  return [
    columnHelper.accessor("eventName", {
      id: "eventName",
      enableSorting: false,
      enableColumnFilter: true,
      header: () => null,
      cell: ({ row }) => {
        const data = formatTransactionTableMobileData(
          row.original,
          hyperdrive,
          appConfig,
        );
        return (
          <ul className="flex flex-col items-start gap-4 text-neutral-content">
            {data.map((column) => (
              <li key={column.name}>{column.name}</li>
            ))}
          </ul>
        );
      },
      filterFn: (row, _, filterValue) => {
        const type = row.getValue("eventName") as string;
        const filters = {
          All: true,
          Longs: ["OpenLong", "CloseLong"].includes(type),
          Shorts: ["OpenShort", "CloseShort"].includes(type),
          LP: [
            "AddLiquidity",
            "RemoveLiquidity",
            "RedeemWithdrawalShares",
          ].includes(type),
        } as const;
        return filters[filterValue as keyof typeof filters];
      },
    }),
    columnHelper.display({
      id: "ColumnValues",
      cell: ({ row }) => {
        const data = formatTransactionTableMobileData(
          row.original,
          hyperdrive,
          appConfig,
        );
        return (
          <ul className="flex flex-col items-end gap-4">
            {data.map((column) => (
              <li key={column.name}>{column.value}</li>
            ))}
          </ul>
        );
      },
    }),
  ];
}

function formatBaseQueuedForWithdrawalLabel(
  baseQueuedForWithdrawal: bigint,
  decimals: number,
  baseSymbol: string,
) {
  const baseQueuedForWithdrawalLabel = formatBalance({
    balance: baseQueuedForWithdrawal,
    places: 2,
    decimals,
  });
  const floorOrAmount =
    baseQueuedForWithdrawal < parseUnits("0.001", decimals)
      ? "<0.001"
      : baseQueuedForWithdrawalLabel;

  return `+${floorOrAmount} ${baseSymbol} queued for withdrawal`;
}

function FilterSelect({
  header,
}: {
  header: Header<TransactionData, unknown>;
}) {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  if (isTailwindSmallScreen) {
    return (
      <div className="daisy-dropdown flex flex-row rounded border">
        <label tabIndex={0} className="daisy-btn daisy-btn-ghost rounded-btn">
          {(header.column.getFilterValue() as string) || "All"}
          <ChevronDownIcon className="h-4" />
        </label>
        <ul
          tabIndex={0}
          className="daisy-menu daisy-dropdown-content mt-14 rounded-md bg-base-200 p-2 shadow"
        >
          {["All", "Longs", "Shorts", "LP"].map((filter) => (
            <li key={filter} className="daisy-menu-title">
              <a onClick={() => header.column.setFilterValue(filter)}>
                {filter}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap">
      {["All", "Longs", "Shorts", "LP"].map((filter) => (
        <a
          key={filter}
          className={`${
            header.column.getFilterValue() === filter ||
            (!header.column.getFilterValue() && filter === "All")
              ? "daisy-tab daisy-tab-active text-sm md:text-lg"
              : "daisy-tab text-sm  font-normal opacity-80 hover:opacity-100 md:text-lg"
          }`}
          onClick={() => header.column.setFilterValue(filter)}
        >
          {filter}
        </a>
      ))}
    </div>
  );
}

function EventNameCell({
  name,
  blockNumber,
}: {
  name: EventName | string;
  blockNumber: bigint;
}) {
  const { data: transaction } = useBlock({ blockNumber });
  const chainId = useChainId() as SupportedChainId;
  return (
    <a
      href={makeTransactionURL(transaction?.hash || "", chainId)}
      target="_blank"
      rel="noreferrer"
      className="daisy-link-hover daisy-link"
    >
      {name}
    </a>
  );
}

function AccountCell({ account }: { account: Address }) {
  const chainId = useChainId() as SupportedChainId;
  return (
    <a
      href={makeAddressUrl(account, chainId)}
      target="_blank"
      rel="noreferrer"
      className="daisy-link-hover daisy-link"
    >
      {formatAddress(account)}
    </a>
  );
}

function BlockInfo({ blockNumber }: { blockNumber: bigint | undefined }) {
  const { data: transactionBlock } = useBlock({ blockNumber });
  const { data: currentBlock } = useBlock();
  const timeDifference = formatTimeDifference({
    currentTimeStamp: currentBlock?.timestamp || 0n,
    previousTimeStamp: transactionBlock?.timestamp || 0n,
  });
  return <p>{timeDifference}</p>;
}
