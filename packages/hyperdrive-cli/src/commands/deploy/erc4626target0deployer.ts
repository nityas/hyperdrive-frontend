import { ERC4626Target0Deployer } from "@hyperdrive/artifacts/dist/ERC4626Target0Deployer";
import signale from "signale";
import { chainOption, requiredChain } from "src/options/chain";
import { requiredRpcUrl, rpcUrlOption } from "src/options/rpc-url";
import { requiredWalletKey, walletKeyOption } from "src/options/wallet-key";
import { createCommandModule } from "src/utils/createCommandModule";
import { DeployedContract, deployContract } from "src/utils/deployContract";
import { Hex, PrivateKeyAccount } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { Chain } from "viem/chains";

export const { command, aliases, describe, builder, handler } =
  createCommandModule({
    command: "erc4626target0deployer [OPTIONS]",
    aliases: ["ERC4626Target0Deployer"],
    describe: "Deploy an ERC4626Target0Deployer contract",

    builder: (yargs) => {
      return yargs.options({
        c: chainOption,
        r: rpcUrlOption,
        w: walletKeyOption,
      });
    },

    handler: async (args) => {
      const chain = await requiredChain(args.chain);
      const rpcUrl = await requiredRpcUrl(args.rpcUrl);
      const walletKey = await requiredWalletKey(args.walletKey);

      const account = privateKeyToAccount(walletKey as Hex);

      signale.pending("Deploying ERC4626Target0Deployer...");

      const { address } = await deployERC4626Target0Deployer({
        account,
        rpcUrl,
        chain,
        onSubmitted: (txHash) => {
          signale.pending(
            `ERC4626Target0Deployer deployment tx submitted: ${txHash}`,
          );
        },
      });

      signale.success(`ERC4626Target0Deployer deployed @ ${address}`);
    },
  });

export interface DeployERC4626Target0DeployerOptions {
  account: PrivateKeyAccount;
  rpcUrl: string;
  chain: Chain;
  onSubmitted?: (txHash: string) => void;
}

export async function deployERC4626Target0Deployer({
  account,
  rpcUrl,
  chain,
  onSubmitted,
}: DeployERC4626Target0DeployerOptions): Promise<DeployedContract> {
  return await deployContract({
    abi: ERC4626Target0Deployer.abi,
    args: [],
    bytecode: ERC4626Target0Deployer.bytecode.object as `0x${string}`,
    account,
    rpcUrl,
    chain,
    onSubmitted,
  });
}