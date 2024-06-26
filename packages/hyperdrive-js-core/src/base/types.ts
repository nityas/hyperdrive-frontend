/**
 * Combines members of an intersection into a readable type.
 * @see https://twitter.com/mattpocockuk/status/1622730173446557697?s=20&t=NdpAcmEFXY01xkqU3KO0Mg
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & unknown;

/**
 * A generic constructor type.
 */
export type Constructor<TInstanceType> = new (...args: any[]) => TInstanceType;

/**
 * Overwrites properties of `T` with properties of `U`.
 */
export type Overwrite<T, U> = Prettify<Omit<T, keyof U> & U>;
