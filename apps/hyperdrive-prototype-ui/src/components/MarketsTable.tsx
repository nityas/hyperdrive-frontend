import { MarketData } from "hyperdrive/types";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { formatBalance } from "utils";

interface MarketsTableProps {
  markets: MarketData[];
}

export function MarketsTable({ markets }: MarketsTableProps): ReactElement {
  return (
    <table className="border-separate border-spacing-y-4 text-left text-white">
      <thead>
        <th>Token</th>
        <th>Yield Source</th>
        <th>Fixed APR</th>
        <th>Variable APR</th>
        <th>LP APR</th>
        <th>TVL</th>
      </thead>

      <tbody>
        {markets.map((market) => (
          <MarketsTableRow
            address={market.address}
            token={market.token}
            yieldSource="Aave"
            fixedApr={5.0}
            variableApr={5.0}
            lpApr={10.0}
            tvl={1_000_000}
            key={market.address}
          />
        ))}
      </tbody>
    </table>
  );
}

function MarketsTableRow({
  address,
  token,
  yieldSource,
  fixedApr,
  variableApr,
  lpApr,
  tvl,
}: MarketData) {
  const push = useNavigate();

  return (
    <tr
      onClick={() =>
        push({
          pathname: `/market/${address}`,
        })
      }
      className="bg-lean font-Retro text-black hover:cursor-pointer hover:bg-racing-green"
    >
      <td>
        <div className="flex items-center gap-x-1">
          <img className="inline" src={token.logoUrl} height={24} width={24} />
          {token.symbol}
        </div>
      </td>
      <td>{yieldSource}</td>
      <td>{fixedApr}%</td>
      <td>{variableApr}%</td>
      <td>{lpApr}%</td>
      <td>${formatBalance(tvl)}</td>
    </tr>
  );
}