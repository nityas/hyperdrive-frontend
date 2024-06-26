import {
  EmptyExtensions,
  HyperdriveConfig,
  TokenConfig,
  YieldSourceExtensions,
} from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { TokenPicker } from "src/ui/token/TokenPicker";

export function WithdrawTokenPicker({
  sharesToken,
  hyperdrive,
  baseToken,
  activeWithdrawToken,
  onChange,
}: {
  sharesToken: TokenConfig<YieldSourceExtensions>;
  hyperdrive: HyperdriveConfig;
  baseToken: TokenConfig<EmptyExtensions>;
  activeWithdrawToken: TokenConfig<any>;
  onChange: (tokenAddress: string) => void;
}): ReactElement {
  const tokens: TokenConfig<any>[] = [sharesToken];
  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    // base token should be listed first if it's enabled
    tokens.unshift(baseToken);
  }

  return (
    <TokenPicker
      tokens={tokens}
      activeTokenAddress={activeWithdrawToken.address}
      onChange={onChange}
    />
  );
}
