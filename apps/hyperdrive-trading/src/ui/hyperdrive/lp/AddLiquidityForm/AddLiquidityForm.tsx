import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { parseUnits } from "src/base/parseUnits";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { AddLiquidityPreview } from "src/ui/hyperdrive/lp/AddLiquidityPreview/AddLiquidityPreview";
import { useAddLiquidity } from "src/ui/hyperdrive/lp/hooks/useAddLiquidity";
import { usePreviewAddLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewAddLP";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenInput } from "src/ui/token/TokenInput";
import { useAccount, useBalance } from "wagmi";

interface AddLiquidityFormProps {
  market: Hyperdrive;
}

export function AddLiquidityForm({
  market,
}: AddLiquidityFormProps): ReactElement {
  const { address: account } = useAccount();
  const { openConnectModal } = useConnectModal();

  const { data: baseTokenBalance } = useBalance({
    address: account,
    token: market.baseToken.address,
  });

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: market.baseToken.decimals,
  });

  const { tokenAllowance } = useTokenAllowance({
    account,
    spender: market.address,
    tokenAddress: market.baseToken.address,
  });

  const { approve } = useTokenApproval({
    tokenAddress: market.baseToken.address,
    spender: market.address,
    amount: ethers.constants.MaxUint256.toBigInt(),
  });

  const needsApproval = tokenAllowance
    ? amountAsBigInt && amountAsBigInt > tokenAllowance
    : true;

  const { lpSharesOut, status: addLiquidityPreviewStatus } =
    usePreviewAddLiquidity({
      market,
      contribution: amountAsBigInt,
      // TODO: Add slippage control
      minAPR: parseUnits("0", market.baseToken.decimals),
      maxAPR: parseUnits("999", market.baseToken.decimals),
      destination: account,
      enabled: !needsApproval,
    });

  const { addLiquidity, addLiquidityTransactionStatus, addLiquidityStatus } =
    useAddLiquidity({
      market,
      contribution: amountAsBigInt,
      // TODO: Add slippage control
      minAPR: parseUnits("0", market.baseToken.decimals),
      maxAPR: parseUnits("999", market.baseToken.decimals),
      destination: account,
      enabled: addLiquidityPreviewStatus === "success" && !needsApproval,
    });

  return (
    <div className="flex flex-col gap-10">
      {/* Amount Section */}
      <div className="space-y-4 text-base-content">
        <h5>Amount to add</h5>
        <TokenInput
          token={market.baseToken}
          value={amount ?? ""}
          maxValue={baseTokenBalance?.formatted}
          onChange={(newAmount) => setAmount(newAmount)}
        />
      </div>

      {/* New Position Section */}
      <div className="space-y-4 text-base-content">
        <h5>Position preview</h5>
        <AddLiquidityPreview
          hyperdrive={market}
          lpPosition={{
            lpShares: lpSharesOut || 0n,
            assetId: 0n,
            hyperdriveAddress: market.address,
          }}
        />
      </div>

      {account ? (
        needsApproval ? (
          // Approval button
          <button
            disabled={!approve}
            className="daisy-btn-warning daisy-btn"
            onClick={() => approve?.()}
          >
            <h5>Approve {market.baseToken.symbol}</h5>
          </button>
        ) : (
          // Trade button
          <button
            disabled={
              !addLiquidity ||
              addLiquidityTransactionStatus === "loading" ||
              addLiquidityStatus === "loading"
            }
            className="daisy-btn-primary daisy-btn"
            onClick={() => addLiquidity?.()}
          >
            <h5>Add Liquidity</h5>
          </button>
        )
      ) : (
        <button
          className="daisy-btn-primary daisy-btn"
          onClick={() => openConnectModal?.()}
        >
          <h5>Connect wallet</h5>
        </button>
      )}
    </div>
  );
}