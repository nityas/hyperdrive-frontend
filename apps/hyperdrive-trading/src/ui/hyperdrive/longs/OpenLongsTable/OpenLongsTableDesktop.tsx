import { Long } from "@delvtech/hyperdrive-viem";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  AppConfig,
  HyperdriveConfig,
  findBaseToken,
} from "@hyperdrive/appconfig";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import { calculateAnnualizedPercentageChange } from "src/base/calculateAnnualizedPercentageChange";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Pagination } from "src/ui/base/components/Pagination";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { MaturesOnCell } from "src/ui/hyperdrive/MaturesOnCell/MaturesOnCell";
import { CloseLongModalButton } from "src/ui/hyperdrive/longs/CloseLongModalButton/CloseLongModalButton";
import { OpenLongModalButton } from "src/ui/hyperdrive/longs/OpenLongModalButton/OpenLongModalButton";
import { CurrentValueCell } from "src/ui/hyperdrive/longs/OpenLongsTable/CurrentValueCell";
import { FixedRateCell } from "src/ui/hyperdrive/longs/OpenLongsTable/FixedRateCell";
import { useOpenLongs } from "src/ui/hyperdrive/longs/hooks/useOpenLongs";
import { useAccount } from "wagmi";

export function OpenLongsTableDesktop({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const { openLongs, openLongsStatus } = useOpenLongs({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const tableInstance = useReactTable({
    columns: getColumns({ hyperdrive, appConfig }),
    data: openLongs || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (!account) {
    return (
      <div className="my-28">
        <NonIdealState
          heading="No wallet connected"
          text="Connect your wallet to view your Longs"
          action={<ConnectWalletButton />}
        />
      </div>
    );
  }
  if (openLongsStatus === "loading") {
    return (
      <LoadingState
        heading="Loading your Longs..."
        text="Searching for Long events, calculating current value and PnL..."
      />
    );
  }
  if (!openLongs?.length && openLongsStatus === "success") {
    return (
      <div className="my-28">
        <NonIdealState
          heading="You have no open Long positions"
          text="Open a Long, switch wallets, or view your closed Long positions"
          action={
            <OpenLongModalButton modalId="open-long" hyperdrive={hyperdrive} />
          }
        />
      </div>
    );
  }

  return (
    <div className="overflow-x-clip">
      {/* Modal needs to be rendered outside of the table so that dialog can be used. Otherwise react throws a dom nesting error */}
      {tableInstance.getRowModel().rows.map((row) => {
        const modalId = `${row.original.assetId}`;
        return (
          <CloseLongModalButton
            key={modalId}
            hyperdrive={hyperdrive}
            modalId={modalId}
            long={row.original}
          />
        );
      })}
      <table className="daisy-table daisy-table-zebra daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="sticky z-10 text-sm font-normal text-gray-400"
                  key={header.id}
                >
                  <div
                    className={classNames({
                      "flex cursor-pointer select-none items-center gap-2":
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
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {tableInstance.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                className="daisy-hover h-24 cursor-pointer items-center transition duration-300 ease-in-out"
                onClick={() => {
                  const modalId = `${row.original.assetId}`;
                  (window as any)[modalId].showModal();
                }}
              >
                <>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        className="align-top text-xs md:text-md"
                        key={cell.id}
                      >
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
          })}
        </tbody>
      </table>
      {tableInstance.getFilteredRowModel().rows.length > 10 ? (
        <Pagination tableInstance={tableInstance} />
      ) : null}
    </div>
  );
}
const columnHelper = createColumnHelper<Long>();

function getColumns({
  hyperdrive,
  appConfig,
}: {
  hyperdrive: HyperdriveConfig;
  appConfig: AppConfig;
}) {
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  return [
    columnHelper.accessor("assetId", {
      id: "maturationDate",
      header: `Matures On`,
      cell: ({ row }) => {
        return <MaturesOnCell maturity={row.original.maturity} />;
      },
    }),
    columnHelper.accessor("bondAmount", {
      id: "size",
      header: `Size (hy${baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <span>
            {formatBalance({
              balance: row.original.bondAmount,
              decimals: baseToken.decimals,
              places: 2,
            })}
          </span>
        );
      },
    }),
    columnHelper.accessor("baseAmountPaid", {
      id: "valuePaid",
      header: `Value Paid (${baseToken.symbol})`,
      cell: (baseAmountPaid) => {
        const amountPaid = baseAmountPaid.getValue();
        return formatBalance({
          balance: amountPaid,
          decimals: baseToken.decimals,
          places: 2,
        });
      },
    }),
    columnHelper.accessor("assetId", {
      id: "fixedRate",
      header: `Fixed APR`,
      cell: ({ row }) => {
        return (
          <FixedRateCell
            vertical
            hyperdrive={hyperdrive}
            baseAmountPaid={row.original.baseAmountPaid}
            bondAmount={row.original.bondAmount}
          />
        );
      },
      sortingFn: (rowA, rowB) => {
        const aFixedRate = calculateAnnualizedPercentageChange({
          amountBefore: rowA.original.baseAmountPaid,
          amountAfter: rowA.original.bondAmount,
          days: convertMillisecondsToDays(
            Number(hyperdrive.poolConfig.positionDuration * 1000n),
          ),
        });
        const bFixedRate = calculateAnnualizedPercentageChange({
          amountBefore: rowB.original.baseAmountPaid,
          amountAfter: rowB.original.bondAmount,
          days: convertMillisecondsToDays(
            Number(hyperdrive.poolConfig.positionDuration * 1000n),
          ),
        });
        return aFixedRate - bFixedRate;
      },
    }),
    columnHelper.display({
      id: "value",
      header: `Current Value (${baseToken.symbol})`,
      cell: ({ row }) => {
        return <CurrentValueCell hyperdrive={hyperdrive} row={row.original} />;
      },
    }),
    columnHelper.display({
      header: "",
      id: "go-to-market",
      cell: ({ row }) => (
        <button
          className="daisy-btn daisy-btn-ghost rounded-full bg-gray-600 hover:bg-gray-700"
          onClick={() => {
            const modalId = `${row.original.assetId}`;
            (window as any)[modalId].showModal();
          }}
        >
          Close Long
        </button>
      ),
    }),
  ];
}
