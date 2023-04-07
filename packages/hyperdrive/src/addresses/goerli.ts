// See: https://github.com/element-fi/hyperdrive/blob/main/addresses.json
export const HyperdriveGoerliAddresses = {
  makerDsrHyperdrive: "0xB311B825171AF5A60d69aAD590B857B1E5ed23a2",
  // fixed borrow action is deployed with a reference to the makerDsrHyperdrive
  // https://github.com/element-fi/hyperdrive/blob/main/contracts/src/actions/AaveFixedBorrow.sol
  aaveFixedBorrowAction: "0xdD029B122C15a313B8599348a2c472fe24541ECB",
} as const;
