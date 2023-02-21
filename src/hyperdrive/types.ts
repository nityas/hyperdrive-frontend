import { Address } from "wagmi";

export interface Token {
  name: string;
  symbol: string;
  logoUrl: string;
  address: Address;
  decimals: number;
}

export interface Market {
  baseToken: Token;
  address: Address;
}

export interface MarketData {
  token: Token;
  yieldSource: string;
  fixedApr: number;
  variableApr: number;
  lpApr: number;
  tvl: number;
}
