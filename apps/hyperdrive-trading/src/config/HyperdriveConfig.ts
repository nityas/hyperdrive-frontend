export interface Protocol {
  name: string;
  iconUrl?: string;
}

export interface HyperdriveConfig<
  Protocols extends readonly Protocol[] = readonly Protocol[],
> {
  /**
   * The chain id where the contracts are deployed
   */
  chainId: number;
  markets: HyperdriveMarket<Protocols[number]>[];
}

export interface ContractConfig {
  address: string;
}

/**
 * The supported term lengths in months.
 */
export type SupportedTermLength = number;

/**
 * Token interface TODO
 */
export interface Token {
  // TODO
}

/**
 * Hyperdrive market interface
 */
export interface HyperdriveMarket<P extends Protocol = Protocol>
  extends ContractConfig {
  baseToken: Token;
  name: string;
  protocol: P;
  termLength: number;
}