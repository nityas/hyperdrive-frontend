---
id: "index"
title: "@hyperdrive/sdk"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

# @hyperdrive/sdk

A vanilla TypeScript SDK containing everything you need to start working with
the Hyperdrive AMM.

| Library                    | Description                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------ |
| `@hyperdrive/sdk`          | TypeScript SDK for Hyperdrive. web3 library bindings not included, see options below |
| `@hyperdrive/sdk-viem`     | Viem bindings for the TypeScript SDK                                                 |
| _`@hyperdrive/sdk-ethers`_ | _TODO: Ethers bindings for the TypeScript SDK_                                       |

## Quickstart (Viem)

Install in your project:

```bash
npm i @hyperdrive/sdk @hyperdrive/sdk-viem viem
```

Configure the Hyperdrive SDK and get the current fixed rate:

```ts
import {
  PublicClient,
  createPublicClient,
  createWalletClient,
  custom,
  http,
} from "viem";
import { mainnet } from "viem/chains";
import { HyperdriveSDK } from "@hyperdrive/sdk";
import {
  HyperdriveContract,
  HypedriveMathContract,
} from "@hyperdrive/sdk-viem";

// 1. Set up your viem clients
const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});
const walletClient = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});

// 2. Create Hyperdrive SDK instance
export const hyperdrive = new HyperdriveSdk({
  hyperdriveContract: new HyperdriveContract({
    publicClient,
    walletClient,
    address: "<hyperdrive-address-here>",
  }),
  mathContract: new HyperdriveMathContract({
    publicClient,
    address: "<math-address-here>",
  }),
});

// 3. Use the SDK <3
(async function () {
  console.log(`The current fixed rate is: ${await hyperdrive.getFixedRate()}`);
})();
```