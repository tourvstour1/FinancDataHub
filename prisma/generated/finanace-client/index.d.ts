
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model t_ins
 * 
 */
export type t_ins = $Result.DefaultSelection<Prisma.$t_insPayload>
/**
 * Model t_pat
 * 
 */
export type t_pat = $Result.DefaultSelection<Prisma.$t_patPayload>
/**
 * Model t_opd
 * 
 */
export type t_opd = $Result.DefaultSelection<Prisma.$t_opdPayload>
/**
 * Model t_orf
 * 
 */
export type t_orf = $Result.DefaultSelection<Prisma.$t_orfPayload>
/**
 * Model t_odx
 * 
 */
export type t_odx = $Result.DefaultSelection<Prisma.$t_odxPayload>
/**
 * Model t_oop
 * 
 */
export type t_oop = $Result.DefaultSelection<Prisma.$t_oopPayload>
/**
 * Model t_ipd
 * 
 */
export type t_ipd = $Result.DefaultSelection<Prisma.$t_ipdPayload>
/**
 * Model t_irf
 * 
 */
export type t_irf = $Result.DefaultSelection<Prisma.$t_irfPayload>
/**
 * Model t_idx
 * 
 */
export type t_idx = $Result.DefaultSelection<Prisma.$t_idxPayload>
/**
 * Model t_iop
 * 
 */
export type t_iop = $Result.DefaultSelection<Prisma.$t_iopPayload>
/**
 * Model t_cht
 * 
 */
export type t_cht = $Result.DefaultSelection<Prisma.$t_chtPayload>
/**
 * Model t_cha
 * 
 */
export type t_cha = $Result.DefaultSelection<Prisma.$t_chaPayload>
/**
 * Model t_aer
 * 
 */
export type t_aer = $Result.DefaultSelection<Prisma.$t_aerPayload>
/**
 * Model t_adp
 * 
 */
export type t_adp = $Result.DefaultSelection<Prisma.$t_adpPayload>
/**
 * Model t_lvd
 * 
 */
export type t_lvd = $Result.DefaultSelection<Prisma.$t_lvdPayload>
/**
 * Model t_dru
 * 
 */
export type t_dru = $Result.DefaultSelection<Prisma.$t_druPayload>
/**
 * Model t_labfu
 * 
 */
export type t_labfu = $Result.DefaultSelection<Prisma.$t_labfuPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more T_ins
 * const t_ins = await prisma.t_ins.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more T_ins
   * const t_ins = await prisma.t_ins.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.t_ins`: Exposes CRUD operations for the **t_ins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_ins
    * const t_ins = await prisma.t_ins.findMany()
    * ```
    */
  get t_ins(): Prisma.t_insDelegate<ExtArgs>;

  /**
   * `prisma.t_pat`: Exposes CRUD operations for the **t_pat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_pats
    * const t_pats = await prisma.t_pat.findMany()
    * ```
    */
  get t_pat(): Prisma.t_patDelegate<ExtArgs>;

  /**
   * `prisma.t_opd`: Exposes CRUD operations for the **t_opd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_opds
    * const t_opds = await prisma.t_opd.findMany()
    * ```
    */
  get t_opd(): Prisma.t_opdDelegate<ExtArgs>;

  /**
   * `prisma.t_orf`: Exposes CRUD operations for the **t_orf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_orfs
    * const t_orfs = await prisma.t_orf.findMany()
    * ```
    */
  get t_orf(): Prisma.t_orfDelegate<ExtArgs>;

  /**
   * `prisma.t_odx`: Exposes CRUD operations for the **t_odx** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_odxes
    * const t_odxes = await prisma.t_odx.findMany()
    * ```
    */
  get t_odx(): Prisma.t_odxDelegate<ExtArgs>;

  /**
   * `prisma.t_oop`: Exposes CRUD operations for the **t_oop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_oops
    * const t_oops = await prisma.t_oop.findMany()
    * ```
    */
  get t_oop(): Prisma.t_oopDelegate<ExtArgs>;

  /**
   * `prisma.t_ipd`: Exposes CRUD operations for the **t_ipd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_ipds
    * const t_ipds = await prisma.t_ipd.findMany()
    * ```
    */
  get t_ipd(): Prisma.t_ipdDelegate<ExtArgs>;

  /**
   * `prisma.t_irf`: Exposes CRUD operations for the **t_irf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_irfs
    * const t_irfs = await prisma.t_irf.findMany()
    * ```
    */
  get t_irf(): Prisma.t_irfDelegate<ExtArgs>;

  /**
   * `prisma.t_idx`: Exposes CRUD operations for the **t_idx** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_idxes
    * const t_idxes = await prisma.t_idx.findMany()
    * ```
    */
  get t_idx(): Prisma.t_idxDelegate<ExtArgs>;

  /**
   * `prisma.t_iop`: Exposes CRUD operations for the **t_iop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_iops
    * const t_iops = await prisma.t_iop.findMany()
    * ```
    */
  get t_iop(): Prisma.t_iopDelegate<ExtArgs>;

  /**
   * `prisma.t_cht`: Exposes CRUD operations for the **t_cht** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_chts
    * const t_chts = await prisma.t_cht.findMany()
    * ```
    */
  get t_cht(): Prisma.t_chtDelegate<ExtArgs>;

  /**
   * `prisma.t_cha`: Exposes CRUD operations for the **t_cha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_chas
    * const t_chas = await prisma.t_cha.findMany()
    * ```
    */
  get t_cha(): Prisma.t_chaDelegate<ExtArgs>;

  /**
   * `prisma.t_aer`: Exposes CRUD operations for the **t_aer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_aers
    * const t_aers = await prisma.t_aer.findMany()
    * ```
    */
  get t_aer(): Prisma.t_aerDelegate<ExtArgs>;

  /**
   * `prisma.t_adp`: Exposes CRUD operations for the **t_adp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_adps
    * const t_adps = await prisma.t_adp.findMany()
    * ```
    */
  get t_adp(): Prisma.t_adpDelegate<ExtArgs>;

  /**
   * `prisma.t_lvd`: Exposes CRUD operations for the **t_lvd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_lvds
    * const t_lvds = await prisma.t_lvd.findMany()
    * ```
    */
  get t_lvd(): Prisma.t_lvdDelegate<ExtArgs>;

  /**
   * `prisma.t_dru`: Exposes CRUD operations for the **t_dru** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_drus
    * const t_drus = await prisma.t_dru.findMany()
    * ```
    */
  get t_dru(): Prisma.t_druDelegate<ExtArgs>;

  /**
   * `prisma.t_labfu`: Exposes CRUD operations for the **t_labfu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_labfus
    * const t_labfus = await prisma.t_labfu.findMany()
    * ```
    */
  get t_labfu(): Prisma.t_labfuDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    t_ins: 't_ins',
    t_pat: 't_pat',
    t_opd: 't_opd',
    t_orf: 't_orf',
    t_odx: 't_odx',
    t_oop: 't_oop',
    t_ipd: 't_ipd',
    t_irf: 't_irf',
    t_idx: 't_idx',
    t_iop: 't_iop',
    t_cht: 't_cht',
    t_cha: 't_cha',
    t_aer: 't_aer',
    t_adp: 't_adp',
    t_lvd: 't_lvd',
    t_dru: 't_dru',
    t_labfu: 't_labfu'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 't_ins' | 't_pat' | 't_opd' | 't_orf' | 't_odx' | 't_oop' | 't_ipd' | 't_irf' | 't_idx' | 't_iop' | 't_cht' | 't_cha' | 't_aer' | 't_adp' | 't_lvd' | 't_dru' | 't_labfu'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      t_ins: {
        payload: Prisma.$t_insPayload<ExtArgs>
        fields: Prisma.t_insFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_insFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_insPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_insFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_insPayload>
          }
          findFirst: {
            args: Prisma.t_insFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_insPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_insFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_insPayload>
          }
          findMany: {
            args: Prisma.t_insFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_insPayload>[]
          }
          create: {
            args: Prisma.t_insCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_insPayload>
          }
          createMany: {
            args: Prisma.t_insCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_insDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_insPayload>
          }
          update: {
            args: Prisma.t_insUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_insPayload>
          }
          deleteMany: {
            args: Prisma.t_insDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_insUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_insUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_insPayload>
          }
          aggregate: {
            args: Prisma.T_insAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_ins>
          }
          groupBy: {
            args: Prisma.t_insGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_insGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_insCountArgs<ExtArgs>,
            result: $Utils.Optional<T_insCountAggregateOutputType> | number
          }
        }
      }
      t_pat: {
        payload: Prisma.$t_patPayload<ExtArgs>
        fields: Prisma.t_patFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_patFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_patPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_patFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_patPayload>
          }
          findFirst: {
            args: Prisma.t_patFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_patPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_patFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_patPayload>
          }
          findMany: {
            args: Prisma.t_patFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_patPayload>[]
          }
          create: {
            args: Prisma.t_patCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_patPayload>
          }
          createMany: {
            args: Prisma.t_patCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_patDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_patPayload>
          }
          update: {
            args: Prisma.t_patUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_patPayload>
          }
          deleteMany: {
            args: Prisma.t_patDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_patUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_patUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_patPayload>
          }
          aggregate: {
            args: Prisma.T_patAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_pat>
          }
          groupBy: {
            args: Prisma.t_patGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_patGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_patCountArgs<ExtArgs>,
            result: $Utils.Optional<T_patCountAggregateOutputType> | number
          }
        }
      }
      t_opd: {
        payload: Prisma.$t_opdPayload<ExtArgs>
        fields: Prisma.t_opdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_opdFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_opdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_opdFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_opdPayload>
          }
          findFirst: {
            args: Prisma.t_opdFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_opdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_opdFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_opdPayload>
          }
          findMany: {
            args: Prisma.t_opdFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_opdPayload>[]
          }
          create: {
            args: Prisma.t_opdCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_opdPayload>
          }
          createMany: {
            args: Prisma.t_opdCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_opdDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_opdPayload>
          }
          update: {
            args: Prisma.t_opdUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_opdPayload>
          }
          deleteMany: {
            args: Prisma.t_opdDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_opdUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_opdUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_opdPayload>
          }
          aggregate: {
            args: Prisma.T_opdAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_opd>
          }
          groupBy: {
            args: Prisma.t_opdGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_opdGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_opdCountArgs<ExtArgs>,
            result: $Utils.Optional<T_opdCountAggregateOutputType> | number
          }
        }
      }
      t_orf: {
        payload: Prisma.$t_orfPayload<ExtArgs>
        fields: Prisma.t_orfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_orfFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_orfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_orfFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_orfPayload>
          }
          findFirst: {
            args: Prisma.t_orfFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_orfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_orfFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_orfPayload>
          }
          findMany: {
            args: Prisma.t_orfFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_orfPayload>[]
          }
          create: {
            args: Prisma.t_orfCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_orfPayload>
          }
          createMany: {
            args: Prisma.t_orfCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_orfDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_orfPayload>
          }
          update: {
            args: Prisma.t_orfUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_orfPayload>
          }
          deleteMany: {
            args: Prisma.t_orfDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_orfUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_orfUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_orfPayload>
          }
          aggregate: {
            args: Prisma.T_orfAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_orf>
          }
          groupBy: {
            args: Prisma.t_orfGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_orfGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_orfCountArgs<ExtArgs>,
            result: $Utils.Optional<T_orfCountAggregateOutputType> | number
          }
        }
      }
      t_odx: {
        payload: Prisma.$t_odxPayload<ExtArgs>
        fields: Prisma.t_odxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_odxFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_odxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_odxFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_odxPayload>
          }
          findFirst: {
            args: Prisma.t_odxFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_odxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_odxFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_odxPayload>
          }
          findMany: {
            args: Prisma.t_odxFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_odxPayload>[]
          }
          create: {
            args: Prisma.t_odxCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_odxPayload>
          }
          createMany: {
            args: Prisma.t_odxCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_odxDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_odxPayload>
          }
          update: {
            args: Prisma.t_odxUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_odxPayload>
          }
          deleteMany: {
            args: Prisma.t_odxDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_odxUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_odxUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_odxPayload>
          }
          aggregate: {
            args: Prisma.T_odxAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_odx>
          }
          groupBy: {
            args: Prisma.t_odxGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_odxGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_odxCountArgs<ExtArgs>,
            result: $Utils.Optional<T_odxCountAggregateOutputType> | number
          }
        }
      }
      t_oop: {
        payload: Prisma.$t_oopPayload<ExtArgs>
        fields: Prisma.t_oopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_oopFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_oopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_oopFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_oopPayload>
          }
          findFirst: {
            args: Prisma.t_oopFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_oopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_oopFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_oopPayload>
          }
          findMany: {
            args: Prisma.t_oopFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_oopPayload>[]
          }
          create: {
            args: Prisma.t_oopCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_oopPayload>
          }
          createMany: {
            args: Prisma.t_oopCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_oopDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_oopPayload>
          }
          update: {
            args: Prisma.t_oopUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_oopPayload>
          }
          deleteMany: {
            args: Prisma.t_oopDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_oopUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_oopUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_oopPayload>
          }
          aggregate: {
            args: Prisma.T_oopAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_oop>
          }
          groupBy: {
            args: Prisma.t_oopGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_oopGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_oopCountArgs<ExtArgs>,
            result: $Utils.Optional<T_oopCountAggregateOutputType> | number
          }
        }
      }
      t_ipd: {
        payload: Prisma.$t_ipdPayload<ExtArgs>
        fields: Prisma.t_ipdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_ipdFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_ipdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_ipdFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_ipdPayload>
          }
          findFirst: {
            args: Prisma.t_ipdFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_ipdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_ipdFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_ipdPayload>
          }
          findMany: {
            args: Prisma.t_ipdFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_ipdPayload>[]
          }
          create: {
            args: Prisma.t_ipdCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_ipdPayload>
          }
          createMany: {
            args: Prisma.t_ipdCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_ipdDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_ipdPayload>
          }
          update: {
            args: Prisma.t_ipdUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_ipdPayload>
          }
          deleteMany: {
            args: Prisma.t_ipdDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_ipdUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_ipdUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_ipdPayload>
          }
          aggregate: {
            args: Prisma.T_ipdAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_ipd>
          }
          groupBy: {
            args: Prisma.t_ipdGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_ipdGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_ipdCountArgs<ExtArgs>,
            result: $Utils.Optional<T_ipdCountAggregateOutputType> | number
          }
        }
      }
      t_irf: {
        payload: Prisma.$t_irfPayload<ExtArgs>
        fields: Prisma.t_irfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_irfFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_irfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_irfFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_irfPayload>
          }
          findFirst: {
            args: Prisma.t_irfFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_irfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_irfFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_irfPayload>
          }
          findMany: {
            args: Prisma.t_irfFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_irfPayload>[]
          }
          create: {
            args: Prisma.t_irfCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_irfPayload>
          }
          createMany: {
            args: Prisma.t_irfCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_irfDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_irfPayload>
          }
          update: {
            args: Prisma.t_irfUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_irfPayload>
          }
          deleteMany: {
            args: Prisma.t_irfDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_irfUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_irfUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_irfPayload>
          }
          aggregate: {
            args: Prisma.T_irfAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_irf>
          }
          groupBy: {
            args: Prisma.t_irfGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_irfGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_irfCountArgs<ExtArgs>,
            result: $Utils.Optional<T_irfCountAggregateOutputType> | number
          }
        }
      }
      t_idx: {
        payload: Prisma.$t_idxPayload<ExtArgs>
        fields: Prisma.t_idxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_idxFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_idxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_idxFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_idxPayload>
          }
          findFirst: {
            args: Prisma.t_idxFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_idxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_idxFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_idxPayload>
          }
          findMany: {
            args: Prisma.t_idxFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_idxPayload>[]
          }
          create: {
            args: Prisma.t_idxCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_idxPayload>
          }
          createMany: {
            args: Prisma.t_idxCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_idxDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_idxPayload>
          }
          update: {
            args: Prisma.t_idxUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_idxPayload>
          }
          deleteMany: {
            args: Prisma.t_idxDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_idxUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_idxUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_idxPayload>
          }
          aggregate: {
            args: Prisma.T_idxAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_idx>
          }
          groupBy: {
            args: Prisma.t_idxGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_idxGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_idxCountArgs<ExtArgs>,
            result: $Utils.Optional<T_idxCountAggregateOutputType> | number
          }
        }
      }
      t_iop: {
        payload: Prisma.$t_iopPayload<ExtArgs>
        fields: Prisma.t_iopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_iopFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_iopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_iopFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_iopPayload>
          }
          findFirst: {
            args: Prisma.t_iopFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_iopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_iopFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_iopPayload>
          }
          findMany: {
            args: Prisma.t_iopFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_iopPayload>[]
          }
          create: {
            args: Prisma.t_iopCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_iopPayload>
          }
          createMany: {
            args: Prisma.t_iopCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_iopDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_iopPayload>
          }
          update: {
            args: Prisma.t_iopUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_iopPayload>
          }
          deleteMany: {
            args: Prisma.t_iopDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_iopUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_iopUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_iopPayload>
          }
          aggregate: {
            args: Prisma.T_iopAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_iop>
          }
          groupBy: {
            args: Prisma.t_iopGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_iopGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_iopCountArgs<ExtArgs>,
            result: $Utils.Optional<T_iopCountAggregateOutputType> | number
          }
        }
      }
      t_cht: {
        payload: Prisma.$t_chtPayload<ExtArgs>
        fields: Prisma.t_chtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_chtFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_chtFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chtPayload>
          }
          findFirst: {
            args: Prisma.t_chtFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_chtFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chtPayload>
          }
          findMany: {
            args: Prisma.t_chtFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chtPayload>[]
          }
          create: {
            args: Prisma.t_chtCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chtPayload>
          }
          createMany: {
            args: Prisma.t_chtCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_chtDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chtPayload>
          }
          update: {
            args: Prisma.t_chtUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chtPayload>
          }
          deleteMany: {
            args: Prisma.t_chtDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_chtUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_chtUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chtPayload>
          }
          aggregate: {
            args: Prisma.T_chtAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_cht>
          }
          groupBy: {
            args: Prisma.t_chtGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_chtGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_chtCountArgs<ExtArgs>,
            result: $Utils.Optional<T_chtCountAggregateOutputType> | number
          }
        }
      }
      t_cha: {
        payload: Prisma.$t_chaPayload<ExtArgs>
        fields: Prisma.t_chaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_chaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_chaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chaPayload>
          }
          findFirst: {
            args: Prisma.t_chaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_chaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chaPayload>
          }
          findMany: {
            args: Prisma.t_chaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chaPayload>[]
          }
          create: {
            args: Prisma.t_chaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chaPayload>
          }
          createMany: {
            args: Prisma.t_chaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_chaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chaPayload>
          }
          update: {
            args: Prisma.t_chaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chaPayload>
          }
          deleteMany: {
            args: Prisma.t_chaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_chaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_chaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_chaPayload>
          }
          aggregate: {
            args: Prisma.T_chaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_cha>
          }
          groupBy: {
            args: Prisma.t_chaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_chaGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_chaCountArgs<ExtArgs>,
            result: $Utils.Optional<T_chaCountAggregateOutputType> | number
          }
        }
      }
      t_aer: {
        payload: Prisma.$t_aerPayload<ExtArgs>
        fields: Prisma.t_aerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_aerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_aerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_aerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_aerPayload>
          }
          findFirst: {
            args: Prisma.t_aerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_aerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_aerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_aerPayload>
          }
          findMany: {
            args: Prisma.t_aerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_aerPayload>[]
          }
          create: {
            args: Prisma.t_aerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_aerPayload>
          }
          createMany: {
            args: Prisma.t_aerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_aerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_aerPayload>
          }
          update: {
            args: Prisma.t_aerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_aerPayload>
          }
          deleteMany: {
            args: Prisma.t_aerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_aerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_aerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_aerPayload>
          }
          aggregate: {
            args: Prisma.T_aerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_aer>
          }
          groupBy: {
            args: Prisma.t_aerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_aerGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_aerCountArgs<ExtArgs>,
            result: $Utils.Optional<T_aerCountAggregateOutputType> | number
          }
        }
      }
      t_adp: {
        payload: Prisma.$t_adpPayload<ExtArgs>
        fields: Prisma.t_adpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_adpFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_adpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_adpFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_adpPayload>
          }
          findFirst: {
            args: Prisma.t_adpFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_adpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_adpFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_adpPayload>
          }
          findMany: {
            args: Prisma.t_adpFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_adpPayload>[]
          }
          create: {
            args: Prisma.t_adpCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_adpPayload>
          }
          createMany: {
            args: Prisma.t_adpCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_adpDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_adpPayload>
          }
          update: {
            args: Prisma.t_adpUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_adpPayload>
          }
          deleteMany: {
            args: Prisma.t_adpDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_adpUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_adpUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_adpPayload>
          }
          aggregate: {
            args: Prisma.T_adpAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_adp>
          }
          groupBy: {
            args: Prisma.t_adpGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_adpGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_adpCountArgs<ExtArgs>,
            result: $Utils.Optional<T_adpCountAggregateOutputType> | number
          }
        }
      }
      t_lvd: {
        payload: Prisma.$t_lvdPayload<ExtArgs>
        fields: Prisma.t_lvdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_lvdFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_lvdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_lvdFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_lvdPayload>
          }
          findFirst: {
            args: Prisma.t_lvdFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_lvdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_lvdFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_lvdPayload>
          }
          findMany: {
            args: Prisma.t_lvdFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_lvdPayload>[]
          }
          create: {
            args: Prisma.t_lvdCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_lvdPayload>
          }
          createMany: {
            args: Prisma.t_lvdCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_lvdDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_lvdPayload>
          }
          update: {
            args: Prisma.t_lvdUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_lvdPayload>
          }
          deleteMany: {
            args: Prisma.t_lvdDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_lvdUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_lvdUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_lvdPayload>
          }
          aggregate: {
            args: Prisma.T_lvdAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_lvd>
          }
          groupBy: {
            args: Prisma.t_lvdGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_lvdGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_lvdCountArgs<ExtArgs>,
            result: $Utils.Optional<T_lvdCountAggregateOutputType> | number
          }
        }
      }
      t_dru: {
        payload: Prisma.$t_druPayload<ExtArgs>
        fields: Prisma.t_druFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_druFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_druPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_druFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_druPayload>
          }
          findFirst: {
            args: Prisma.t_druFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_druPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_druFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_druPayload>
          }
          findMany: {
            args: Prisma.t_druFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_druPayload>[]
          }
          create: {
            args: Prisma.t_druCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_druPayload>
          }
          createMany: {
            args: Prisma.t_druCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_druDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_druPayload>
          }
          update: {
            args: Prisma.t_druUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_druPayload>
          }
          deleteMany: {
            args: Prisma.t_druDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_druUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_druUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_druPayload>
          }
          aggregate: {
            args: Prisma.T_druAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_dru>
          }
          groupBy: {
            args: Prisma.t_druGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_druGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_druCountArgs<ExtArgs>,
            result: $Utils.Optional<T_druCountAggregateOutputType> | number
          }
        }
      }
      t_labfu: {
        payload: Prisma.$t_labfuPayload<ExtArgs>
        fields: Prisma.t_labfuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_labfuFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_labfuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_labfuFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_labfuPayload>
          }
          findFirst: {
            args: Prisma.t_labfuFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_labfuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_labfuFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_labfuPayload>
          }
          findMany: {
            args: Prisma.t_labfuFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_labfuPayload>[]
          }
          create: {
            args: Prisma.t_labfuCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_labfuPayload>
          }
          createMany: {
            args: Prisma.t_labfuCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.t_labfuDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_labfuPayload>
          }
          update: {
            args: Prisma.t_labfuUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_labfuPayload>
          }
          deleteMany: {
            args: Prisma.t_labfuDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.t_labfuUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.t_labfuUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$t_labfuPayload>
          }
          aggregate: {
            args: Prisma.T_labfuAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_labfu>
          }
          groupBy: {
            args: Prisma.t_labfuGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_labfuGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_labfuCountArgs<ExtArgs>,
            result: $Utils.Optional<T_labfuCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model t_ins
   */

  export type AggregateT_ins = {
    _count: T_insCountAggregateOutputType | null
    _min: T_insMinAggregateOutputType | null
    _max: T_insMaxAggregateOutputType | null
  }

  export type T_insMinAggregateOutputType = {
    id: string | null
    hn: string | null
    inscl: string | null
    subtype: string | null
    cid: string | null
    hcode: string | null
    dateexp: string | null
    hospmain: string | null
    hospsub: string | null
    govcode: string | null
    govname: string | null
    permitno: string | null
    docno: string | null
    ownrpid: string | null
    ownname: string | null
    an: string | null
    seq: string | null
    subinscl: string | null
    relinscl: string | null
    htype: string | null
  }

  export type T_insMaxAggregateOutputType = {
    id: string | null
    hn: string | null
    inscl: string | null
    subtype: string | null
    cid: string | null
    hcode: string | null
    dateexp: string | null
    hospmain: string | null
    hospsub: string | null
    govcode: string | null
    govname: string | null
    permitno: string | null
    docno: string | null
    ownrpid: string | null
    ownname: string | null
    an: string | null
    seq: string | null
    subinscl: string | null
    relinscl: string | null
    htype: string | null
  }

  export type T_insCountAggregateOutputType = {
    id: number
    hn: number
    inscl: number
    subtype: number
    cid: number
    hcode: number
    dateexp: number
    hospmain: number
    hospsub: number
    govcode: number
    govname: number
    permitno: number
    docno: number
    ownrpid: number
    ownname: number
    an: number
    seq: number
    subinscl: number
    relinscl: number
    htype: number
    _all: number
  }


  export type T_insMinAggregateInputType = {
    id?: true
    hn?: true
    inscl?: true
    subtype?: true
    cid?: true
    hcode?: true
    dateexp?: true
    hospmain?: true
    hospsub?: true
    govcode?: true
    govname?: true
    permitno?: true
    docno?: true
    ownrpid?: true
    ownname?: true
    an?: true
    seq?: true
    subinscl?: true
    relinscl?: true
    htype?: true
  }

  export type T_insMaxAggregateInputType = {
    id?: true
    hn?: true
    inscl?: true
    subtype?: true
    cid?: true
    hcode?: true
    dateexp?: true
    hospmain?: true
    hospsub?: true
    govcode?: true
    govname?: true
    permitno?: true
    docno?: true
    ownrpid?: true
    ownname?: true
    an?: true
    seq?: true
    subinscl?: true
    relinscl?: true
    htype?: true
  }

  export type T_insCountAggregateInputType = {
    id?: true
    hn?: true
    inscl?: true
    subtype?: true
    cid?: true
    hcode?: true
    dateexp?: true
    hospmain?: true
    hospsub?: true
    govcode?: true
    govname?: true
    permitno?: true
    docno?: true
    ownrpid?: true
    ownname?: true
    an?: true
    seq?: true
    subinscl?: true
    relinscl?: true
    htype?: true
    _all?: true
  }

  export type T_insAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_ins to aggregate.
     */
    where?: t_insWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_ins to fetch.
     */
    orderBy?: t_insOrderByWithRelationInput | t_insOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_insWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_ins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_ins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_ins
    **/
    _count?: true | T_insCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_insMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_insMaxAggregateInputType
  }

  export type GetT_insAggregateType<T extends T_insAggregateArgs> = {
        [P in keyof T & keyof AggregateT_ins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_ins[P]>
      : GetScalarType<T[P], AggregateT_ins[P]>
  }




  export type t_insGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_insWhereInput
    orderBy?: t_insOrderByWithAggregationInput | t_insOrderByWithAggregationInput[]
    by: T_insScalarFieldEnum[] | T_insScalarFieldEnum
    having?: t_insScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_insCountAggregateInputType | true
    _min?: T_insMinAggregateInputType
    _max?: T_insMaxAggregateInputType
  }

  export type T_insGroupByOutputType = {
    id: string
    hn: string | null
    inscl: string
    subtype: string | null
    cid: string | null
    hcode: string
    dateexp: string | null
    hospmain: string
    hospsub: string
    govcode: string | null
    govname: string | null
    permitno: string | null
    docno: string | null
    ownrpid: string | null
    ownname: string | null
    an: string
    seq: string
    subinscl: string | null
    relinscl: string | null
    htype: string | null
    _count: T_insCountAggregateOutputType | null
    _min: T_insMinAggregateOutputType | null
    _max: T_insMaxAggregateOutputType | null
  }

  type GetT_insGroupByPayload<T extends t_insGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_insGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_insGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_insGroupByOutputType[P]>
            : GetScalarType<T[P], T_insGroupByOutputType[P]>
        }
      >
    >


  export type t_insSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hn?: boolean
    inscl?: boolean
    subtype?: boolean
    cid?: boolean
    hcode?: boolean
    dateexp?: boolean
    hospmain?: boolean
    hospsub?: boolean
    govcode?: boolean
    govname?: boolean
    permitno?: boolean
    docno?: boolean
    ownrpid?: boolean
    ownname?: boolean
    an?: boolean
    seq?: boolean
    subinscl?: boolean
    relinscl?: boolean
    htype?: boolean
  }, ExtArgs["result"]["t_ins"]>

  export type t_insSelectScalar = {
    id?: boolean
    hn?: boolean
    inscl?: boolean
    subtype?: boolean
    cid?: boolean
    hcode?: boolean
    dateexp?: boolean
    hospmain?: boolean
    hospsub?: boolean
    govcode?: boolean
    govname?: boolean
    permitno?: boolean
    docno?: boolean
    ownrpid?: boolean
    ownname?: boolean
    an?: boolean
    seq?: boolean
    subinscl?: boolean
    relinscl?: boolean
    htype?: boolean
  }


  export type $t_insPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_ins"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hn: string | null
      inscl: string
      subtype: string | null
      cid: string | null
      hcode: string
      dateexp: string | null
      hospmain: string
      hospsub: string
      govcode: string | null
      govname: string | null
      permitno: string | null
      docno: string | null
      ownrpid: string | null
      ownname: string | null
      an: string
      seq: string
      subinscl: string | null
      relinscl: string | null
      htype: string | null
    }, ExtArgs["result"]["t_ins"]>
    composites: {}
  }


  type t_insGetPayload<S extends boolean | null | undefined | t_insDefaultArgs> = $Result.GetResult<Prisma.$t_insPayload, S>

  type t_insCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_insFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_insCountAggregateInputType | true
    }

  export interface t_insDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_ins'], meta: { name: 't_ins' } }
    /**
     * Find zero or one T_ins that matches the filter.
     * @param {t_insFindUniqueArgs} args - Arguments to find a T_ins
     * @example
     * // Get one T_ins
     * const t_ins = await prisma.t_ins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_insFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_insFindUniqueArgs<ExtArgs>>
    ): Prisma__t_insClient<$Result.GetResult<Prisma.$t_insPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_ins that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_insFindUniqueOrThrowArgs} args - Arguments to find a T_ins
     * @example
     * // Get one T_ins
     * const t_ins = await prisma.t_ins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_insFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_insFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_insClient<$Result.GetResult<Prisma.$t_insPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_ins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_insFindFirstArgs} args - Arguments to find a T_ins
     * @example
     * // Get one T_ins
     * const t_ins = await prisma.t_ins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_insFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_insFindFirstArgs<ExtArgs>>
    ): Prisma__t_insClient<$Result.GetResult<Prisma.$t_insPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_ins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_insFindFirstOrThrowArgs} args - Arguments to find a T_ins
     * @example
     * // Get one T_ins
     * const t_ins = await prisma.t_ins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_insFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_insFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_insClient<$Result.GetResult<Prisma.$t_insPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_ins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_insFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_ins
     * const t_ins = await prisma.t_ins.findMany()
     * 
     * // Get first 10 T_ins
     * const t_ins = await prisma.t_ins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_insWithIdOnly = await prisma.t_ins.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_insFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_insFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_insPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_ins.
     * @param {t_insCreateArgs} args - Arguments to create a T_ins.
     * @example
     * // Create one T_ins
     * const T_ins = await prisma.t_ins.create({
     *   data: {
     *     // ... data to create a T_ins
     *   }
     * })
     * 
    **/
    create<T extends t_insCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_insCreateArgs<ExtArgs>>
    ): Prisma__t_insClient<$Result.GetResult<Prisma.$t_insPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_ins.
     *     @param {t_insCreateManyArgs} args - Arguments to create many T_ins.
     *     @example
     *     // Create many T_ins
     *     const t_ins = await prisma.t_ins.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_insCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_insCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_ins.
     * @param {t_insDeleteArgs} args - Arguments to delete one T_ins.
     * @example
     * // Delete one T_ins
     * const T_ins = await prisma.t_ins.delete({
     *   where: {
     *     // ... filter to delete one T_ins
     *   }
     * })
     * 
    **/
    delete<T extends t_insDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_insDeleteArgs<ExtArgs>>
    ): Prisma__t_insClient<$Result.GetResult<Prisma.$t_insPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_ins.
     * @param {t_insUpdateArgs} args - Arguments to update one T_ins.
     * @example
     * // Update one T_ins
     * const t_ins = await prisma.t_ins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_insUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_insUpdateArgs<ExtArgs>>
    ): Prisma__t_insClient<$Result.GetResult<Prisma.$t_insPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_ins.
     * @param {t_insDeleteManyArgs} args - Arguments to filter T_ins to delete.
     * @example
     * // Delete a few T_ins
     * const { count } = await prisma.t_ins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_insDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_insDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_ins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_insUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_ins
     * const t_ins = await prisma.t_ins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_insUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_insUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_ins.
     * @param {t_insUpsertArgs} args - Arguments to update or create a T_ins.
     * @example
     * // Update or create a T_ins
     * const t_ins = await prisma.t_ins.upsert({
     *   create: {
     *     // ... data to create a T_ins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_ins we want to update
     *   }
     * })
    **/
    upsert<T extends t_insUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_insUpsertArgs<ExtArgs>>
    ): Prisma__t_insClient<$Result.GetResult<Prisma.$t_insPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_ins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_insCountArgs} args - Arguments to filter T_ins to count.
     * @example
     * // Count the number of T_ins
     * const count = await prisma.t_ins.count({
     *   where: {
     *     // ... the filter for the T_ins we want to count
     *   }
     * })
    **/
    count<T extends t_insCountArgs>(
      args?: Subset<T, t_insCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_insCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_ins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_insAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_insAggregateArgs>(args: Subset<T, T_insAggregateArgs>): Prisma.PrismaPromise<GetT_insAggregateType<T>>

    /**
     * Group by T_ins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_insGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_insGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_insGroupByArgs['orderBy'] }
        : { orderBy?: t_insGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_insGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_insGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_ins model
   */
  readonly fields: t_insFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_ins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_insClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_ins model
   */ 
  interface t_insFieldRefs {
    readonly id: FieldRef<"t_ins", 'String'>
    readonly hn: FieldRef<"t_ins", 'String'>
    readonly inscl: FieldRef<"t_ins", 'String'>
    readonly subtype: FieldRef<"t_ins", 'String'>
    readonly cid: FieldRef<"t_ins", 'String'>
    readonly hcode: FieldRef<"t_ins", 'String'>
    readonly dateexp: FieldRef<"t_ins", 'String'>
    readonly hospmain: FieldRef<"t_ins", 'String'>
    readonly hospsub: FieldRef<"t_ins", 'String'>
    readonly govcode: FieldRef<"t_ins", 'String'>
    readonly govname: FieldRef<"t_ins", 'String'>
    readonly permitno: FieldRef<"t_ins", 'String'>
    readonly docno: FieldRef<"t_ins", 'String'>
    readonly ownrpid: FieldRef<"t_ins", 'String'>
    readonly ownname: FieldRef<"t_ins", 'String'>
    readonly an: FieldRef<"t_ins", 'String'>
    readonly seq: FieldRef<"t_ins", 'String'>
    readonly subinscl: FieldRef<"t_ins", 'String'>
    readonly relinscl: FieldRef<"t_ins", 'String'>
    readonly htype: FieldRef<"t_ins", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_ins findUnique
   */
  export type t_insFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ins
     */
    select?: t_insSelect<ExtArgs> | null
    /**
     * Filter, which t_ins to fetch.
     */
    where: t_insWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ins findUniqueOrThrow
   */
  export type t_insFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ins
     */
    select?: t_insSelect<ExtArgs> | null
    /**
     * Filter, which t_ins to fetch.
     */
    where: t_insWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ins findFirst
   */
  export type t_insFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ins
     */
    select?: t_insSelect<ExtArgs> | null
    /**
     * Filter, which t_ins to fetch.
     */
    where?: t_insWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_ins to fetch.
     */
    orderBy?: t_insOrderByWithRelationInput | t_insOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_ins.
     */
    cursor?: t_insWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_ins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_ins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_ins.
     */
    distinct?: T_insScalarFieldEnum | T_insScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ins findFirstOrThrow
   */
  export type t_insFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ins
     */
    select?: t_insSelect<ExtArgs> | null
    /**
     * Filter, which t_ins to fetch.
     */
    where?: t_insWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_ins to fetch.
     */
    orderBy?: t_insOrderByWithRelationInput | t_insOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_ins.
     */
    cursor?: t_insWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_ins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_ins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_ins.
     */
    distinct?: T_insScalarFieldEnum | T_insScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ins findMany
   */
  export type t_insFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ins
     */
    select?: t_insSelect<ExtArgs> | null
    /**
     * Filter, which t_ins to fetch.
     */
    where?: t_insWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_ins to fetch.
     */
    orderBy?: t_insOrderByWithRelationInput | t_insOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_ins.
     */
    cursor?: t_insWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_ins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_ins.
     */
    skip?: number
    distinct?: T_insScalarFieldEnum | T_insScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ins create
   */
  export type t_insCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ins
     */
    select?: t_insSelect<ExtArgs> | null
    /**
     * The data needed to create a t_ins.
     */
    data: XOR<t_insCreateInput, t_insUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ins createMany
   */
  export type t_insCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_ins.
     */
    data: t_insCreateManyInput | t_insCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_ins update
   */
  export type t_insUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ins
     */
    select?: t_insSelect<ExtArgs> | null
    /**
     * The data needed to update a t_ins.
     */
    data: XOR<t_insUpdateInput, t_insUncheckedUpdateInput>
    /**
     * Choose, which t_ins to update.
     */
    where: t_insWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ins updateMany
   */
  export type t_insUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_ins.
     */
    data: XOR<t_insUpdateManyMutationInput, t_insUncheckedUpdateManyInput>
    /**
     * Filter which t_ins to update
     */
    where?: t_insWhereInput
  }


  /**
   * t_ins upsert
   */
  export type t_insUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ins
     */
    select?: t_insSelect<ExtArgs> | null
    /**
     * The filter to search for the t_ins to update in case it exists.
     */
    where: t_insWhereUniqueInput
    /**
     * In case the t_ins found by the `where` argument doesn't exist, create a new t_ins with this data.
     */
    create: XOR<t_insCreateInput, t_insUncheckedCreateInput>
    /**
     * In case the t_ins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_insUpdateInput, t_insUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ins delete
   */
  export type t_insDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ins
     */
    select?: t_insSelect<ExtArgs> | null
    /**
     * Filter which t_ins to delete.
     */
    where: t_insWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ins deleteMany
   */
  export type t_insDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_ins to delete
     */
    where?: t_insWhereInput
  }


  /**
   * t_ins without action
   */
  export type t_insDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ins
     */
    select?: t_insSelect<ExtArgs> | null
  }



  /**
   * Model t_pat
   */

  export type AggregateT_pat = {
    _count: T_patCountAggregateOutputType | null
    _min: T_patMinAggregateOutputType | null
    _max: T_patMaxAggregateOutputType | null
  }

  export type T_patMinAggregateOutputType = {
    id: string | null
    hcode: string | null
    hn: string | null
    changwat: string | null
    amphur: string | null
    dob: string | null
    sex: string | null
    marriage: string | null
    occupa: string | null
    nation: string | null
    person_id: string | null
    namepat: string | null
    title: string | null
    fname: string | null
    lname: string | null
    idtype: string | null
  }

  export type T_patMaxAggregateOutputType = {
    id: string | null
    hcode: string | null
    hn: string | null
    changwat: string | null
    amphur: string | null
    dob: string | null
    sex: string | null
    marriage: string | null
    occupa: string | null
    nation: string | null
    person_id: string | null
    namepat: string | null
    title: string | null
    fname: string | null
    lname: string | null
    idtype: string | null
  }

  export type T_patCountAggregateOutputType = {
    id: number
    hcode: number
    hn: number
    changwat: number
    amphur: number
    dob: number
    sex: number
    marriage: number
    occupa: number
    nation: number
    person_id: number
    namepat: number
    title: number
    fname: number
    lname: number
    idtype: number
    _all: number
  }


  export type T_patMinAggregateInputType = {
    id?: true
    hcode?: true
    hn?: true
    changwat?: true
    amphur?: true
    dob?: true
    sex?: true
    marriage?: true
    occupa?: true
    nation?: true
    person_id?: true
    namepat?: true
    title?: true
    fname?: true
    lname?: true
    idtype?: true
  }

  export type T_patMaxAggregateInputType = {
    id?: true
    hcode?: true
    hn?: true
    changwat?: true
    amphur?: true
    dob?: true
    sex?: true
    marriage?: true
    occupa?: true
    nation?: true
    person_id?: true
    namepat?: true
    title?: true
    fname?: true
    lname?: true
    idtype?: true
  }

  export type T_patCountAggregateInputType = {
    id?: true
    hcode?: true
    hn?: true
    changwat?: true
    amphur?: true
    dob?: true
    sex?: true
    marriage?: true
    occupa?: true
    nation?: true
    person_id?: true
    namepat?: true
    title?: true
    fname?: true
    lname?: true
    idtype?: true
    _all?: true
  }

  export type T_patAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_pat to aggregate.
     */
    where?: t_patWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_pats to fetch.
     */
    orderBy?: t_patOrderByWithRelationInput | t_patOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_patWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_pats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_pats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_pats
    **/
    _count?: true | T_patCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_patMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_patMaxAggregateInputType
  }

  export type GetT_patAggregateType<T extends T_patAggregateArgs> = {
        [P in keyof T & keyof AggregateT_pat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_pat[P]>
      : GetScalarType<T[P], AggregateT_pat[P]>
  }




  export type t_patGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_patWhereInput
    orderBy?: t_patOrderByWithAggregationInput | t_patOrderByWithAggregationInput[]
    by: T_patScalarFieldEnum[] | T_patScalarFieldEnum
    having?: t_patScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_patCountAggregateInputType | true
    _min?: T_patMinAggregateInputType
    _max?: T_patMaxAggregateInputType
  }

  export type T_patGroupByOutputType = {
    id: string
    hcode: string
    hn: string
    changwat: string | null
    amphur: string | null
    dob: string
    sex: string
    marriage: string
    occupa: string
    nation: string
    person_id: string
    namepat: string
    title: string
    fname: string
    lname: string
    idtype: string
    _count: T_patCountAggregateOutputType | null
    _min: T_patMinAggregateOutputType | null
    _max: T_patMaxAggregateOutputType | null
  }

  type GetT_patGroupByPayload<T extends t_patGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_patGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_patGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_patGroupByOutputType[P]>
            : GetScalarType<T[P], T_patGroupByOutputType[P]>
        }
      >
    >


  export type t_patSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hcode?: boolean
    hn?: boolean
    changwat?: boolean
    amphur?: boolean
    dob?: boolean
    sex?: boolean
    marriage?: boolean
    occupa?: boolean
    nation?: boolean
    person_id?: boolean
    namepat?: boolean
    title?: boolean
    fname?: boolean
    lname?: boolean
    idtype?: boolean
  }, ExtArgs["result"]["t_pat"]>

  export type t_patSelectScalar = {
    id?: boolean
    hcode?: boolean
    hn?: boolean
    changwat?: boolean
    amphur?: boolean
    dob?: boolean
    sex?: boolean
    marriage?: boolean
    occupa?: boolean
    nation?: boolean
    person_id?: boolean
    namepat?: boolean
    title?: boolean
    fname?: boolean
    lname?: boolean
    idtype?: boolean
  }


  export type $t_patPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_pat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hcode: string
      hn: string
      changwat: string | null
      amphur: string | null
      dob: string
      sex: string
      marriage: string
      occupa: string
      nation: string
      person_id: string
      namepat: string
      title: string
      fname: string
      lname: string
      idtype: string
    }, ExtArgs["result"]["t_pat"]>
    composites: {}
  }


  type t_patGetPayload<S extends boolean | null | undefined | t_patDefaultArgs> = $Result.GetResult<Prisma.$t_patPayload, S>

  type t_patCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_patFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_patCountAggregateInputType | true
    }

  export interface t_patDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_pat'], meta: { name: 't_pat' } }
    /**
     * Find zero or one T_pat that matches the filter.
     * @param {t_patFindUniqueArgs} args - Arguments to find a T_pat
     * @example
     * // Get one T_pat
     * const t_pat = await prisma.t_pat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_patFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_patFindUniqueArgs<ExtArgs>>
    ): Prisma__t_patClient<$Result.GetResult<Prisma.$t_patPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_pat that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_patFindUniqueOrThrowArgs} args - Arguments to find a T_pat
     * @example
     * // Get one T_pat
     * const t_pat = await prisma.t_pat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_patFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_patFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_patClient<$Result.GetResult<Prisma.$t_patPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_pat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_patFindFirstArgs} args - Arguments to find a T_pat
     * @example
     * // Get one T_pat
     * const t_pat = await prisma.t_pat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_patFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_patFindFirstArgs<ExtArgs>>
    ): Prisma__t_patClient<$Result.GetResult<Prisma.$t_patPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_pat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_patFindFirstOrThrowArgs} args - Arguments to find a T_pat
     * @example
     * // Get one T_pat
     * const t_pat = await prisma.t_pat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_patFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_patFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_patClient<$Result.GetResult<Prisma.$t_patPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_pats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_patFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_pats
     * const t_pats = await prisma.t_pat.findMany()
     * 
     * // Get first 10 T_pats
     * const t_pats = await prisma.t_pat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_patWithIdOnly = await prisma.t_pat.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_patFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_patFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_patPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_pat.
     * @param {t_patCreateArgs} args - Arguments to create a T_pat.
     * @example
     * // Create one T_pat
     * const T_pat = await prisma.t_pat.create({
     *   data: {
     *     // ... data to create a T_pat
     *   }
     * })
     * 
    **/
    create<T extends t_patCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_patCreateArgs<ExtArgs>>
    ): Prisma__t_patClient<$Result.GetResult<Prisma.$t_patPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_pats.
     *     @param {t_patCreateManyArgs} args - Arguments to create many T_pats.
     *     @example
     *     // Create many T_pats
     *     const t_pat = await prisma.t_pat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_patCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_patCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_pat.
     * @param {t_patDeleteArgs} args - Arguments to delete one T_pat.
     * @example
     * // Delete one T_pat
     * const T_pat = await prisma.t_pat.delete({
     *   where: {
     *     // ... filter to delete one T_pat
     *   }
     * })
     * 
    **/
    delete<T extends t_patDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_patDeleteArgs<ExtArgs>>
    ): Prisma__t_patClient<$Result.GetResult<Prisma.$t_patPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_pat.
     * @param {t_patUpdateArgs} args - Arguments to update one T_pat.
     * @example
     * // Update one T_pat
     * const t_pat = await prisma.t_pat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_patUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_patUpdateArgs<ExtArgs>>
    ): Prisma__t_patClient<$Result.GetResult<Prisma.$t_patPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_pats.
     * @param {t_patDeleteManyArgs} args - Arguments to filter T_pats to delete.
     * @example
     * // Delete a few T_pats
     * const { count } = await prisma.t_pat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_patDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_patDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_pats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_patUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_pats
     * const t_pat = await prisma.t_pat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_patUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_patUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_pat.
     * @param {t_patUpsertArgs} args - Arguments to update or create a T_pat.
     * @example
     * // Update or create a T_pat
     * const t_pat = await prisma.t_pat.upsert({
     *   create: {
     *     // ... data to create a T_pat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_pat we want to update
     *   }
     * })
    **/
    upsert<T extends t_patUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_patUpsertArgs<ExtArgs>>
    ): Prisma__t_patClient<$Result.GetResult<Prisma.$t_patPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_pats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_patCountArgs} args - Arguments to filter T_pats to count.
     * @example
     * // Count the number of T_pats
     * const count = await prisma.t_pat.count({
     *   where: {
     *     // ... the filter for the T_pats we want to count
     *   }
     * })
    **/
    count<T extends t_patCountArgs>(
      args?: Subset<T, t_patCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_patCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_pat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_patAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_patAggregateArgs>(args: Subset<T, T_patAggregateArgs>): Prisma.PrismaPromise<GetT_patAggregateType<T>>

    /**
     * Group by T_pat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_patGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_patGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_patGroupByArgs['orderBy'] }
        : { orderBy?: t_patGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_patGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_patGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_pat model
   */
  readonly fields: t_patFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_pat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_patClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_pat model
   */ 
  interface t_patFieldRefs {
    readonly id: FieldRef<"t_pat", 'String'>
    readonly hcode: FieldRef<"t_pat", 'String'>
    readonly hn: FieldRef<"t_pat", 'String'>
    readonly changwat: FieldRef<"t_pat", 'String'>
    readonly amphur: FieldRef<"t_pat", 'String'>
    readonly dob: FieldRef<"t_pat", 'String'>
    readonly sex: FieldRef<"t_pat", 'String'>
    readonly marriage: FieldRef<"t_pat", 'String'>
    readonly occupa: FieldRef<"t_pat", 'String'>
    readonly nation: FieldRef<"t_pat", 'String'>
    readonly person_id: FieldRef<"t_pat", 'String'>
    readonly namepat: FieldRef<"t_pat", 'String'>
    readonly title: FieldRef<"t_pat", 'String'>
    readonly fname: FieldRef<"t_pat", 'String'>
    readonly lname: FieldRef<"t_pat", 'String'>
    readonly idtype: FieldRef<"t_pat", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_pat findUnique
   */
  export type t_patFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_pat
     */
    select?: t_patSelect<ExtArgs> | null
    /**
     * Filter, which t_pat to fetch.
     */
    where: t_patWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_pat findUniqueOrThrow
   */
  export type t_patFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_pat
     */
    select?: t_patSelect<ExtArgs> | null
    /**
     * Filter, which t_pat to fetch.
     */
    where: t_patWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_pat findFirst
   */
  export type t_patFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_pat
     */
    select?: t_patSelect<ExtArgs> | null
    /**
     * Filter, which t_pat to fetch.
     */
    where?: t_patWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_pats to fetch.
     */
    orderBy?: t_patOrderByWithRelationInput | t_patOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_pats.
     */
    cursor?: t_patWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_pats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_pats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_pats.
     */
    distinct?: T_patScalarFieldEnum | T_patScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_pat findFirstOrThrow
   */
  export type t_patFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_pat
     */
    select?: t_patSelect<ExtArgs> | null
    /**
     * Filter, which t_pat to fetch.
     */
    where?: t_patWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_pats to fetch.
     */
    orderBy?: t_patOrderByWithRelationInput | t_patOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_pats.
     */
    cursor?: t_patWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_pats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_pats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_pats.
     */
    distinct?: T_patScalarFieldEnum | T_patScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_pat findMany
   */
  export type t_patFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_pat
     */
    select?: t_patSelect<ExtArgs> | null
    /**
     * Filter, which t_pats to fetch.
     */
    where?: t_patWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_pats to fetch.
     */
    orderBy?: t_patOrderByWithRelationInput | t_patOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_pats.
     */
    cursor?: t_patWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_pats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_pats.
     */
    skip?: number
    distinct?: T_patScalarFieldEnum | T_patScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_pat create
   */
  export type t_patCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_pat
     */
    select?: t_patSelect<ExtArgs> | null
    /**
     * The data needed to create a t_pat.
     */
    data: XOR<t_patCreateInput, t_patUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_pat createMany
   */
  export type t_patCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_pats.
     */
    data: t_patCreateManyInput | t_patCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_pat update
   */
  export type t_patUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_pat
     */
    select?: t_patSelect<ExtArgs> | null
    /**
     * The data needed to update a t_pat.
     */
    data: XOR<t_patUpdateInput, t_patUncheckedUpdateInput>
    /**
     * Choose, which t_pat to update.
     */
    where: t_patWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_pat updateMany
   */
  export type t_patUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_pats.
     */
    data: XOR<t_patUpdateManyMutationInput, t_patUncheckedUpdateManyInput>
    /**
     * Filter which t_pats to update
     */
    where?: t_patWhereInput
  }


  /**
   * t_pat upsert
   */
  export type t_patUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_pat
     */
    select?: t_patSelect<ExtArgs> | null
    /**
     * The filter to search for the t_pat to update in case it exists.
     */
    where: t_patWhereUniqueInput
    /**
     * In case the t_pat found by the `where` argument doesn't exist, create a new t_pat with this data.
     */
    create: XOR<t_patCreateInput, t_patUncheckedCreateInput>
    /**
     * In case the t_pat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_patUpdateInput, t_patUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_pat delete
   */
  export type t_patDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_pat
     */
    select?: t_patSelect<ExtArgs> | null
    /**
     * Filter which t_pat to delete.
     */
    where: t_patWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_pat deleteMany
   */
  export type t_patDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_pats to delete
     */
    where?: t_patWhereInput
  }


  /**
   * t_pat without action
   */
  export type t_patDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_pat
     */
    select?: t_patSelect<ExtArgs> | null
  }



  /**
   * Model t_opd
   */

  export type AggregateT_opd = {
    _count: T_opdCountAggregateOutputType | null
    _min: T_opdMinAggregateOutputType | null
    _max: T_opdMaxAggregateOutputType | null
  }

  export type T_opdMinAggregateOutputType = {
    id: string | null
    hn: string | null
    clinic: string | null
    dateopd: string | null
    timeopd: string | null
    seq: string | null
    uuc: string | null
    detail: string | null
    btemp: string | null
    sbp: string | null
    dbp: string | null
    pr: string | null
    rr: string | null
    optype: string | null
    typein: string | null
    typeout: string | null
  }

  export type T_opdMaxAggregateOutputType = {
    id: string | null
    hn: string | null
    clinic: string | null
    dateopd: string | null
    timeopd: string | null
    seq: string | null
    uuc: string | null
    detail: string | null
    btemp: string | null
    sbp: string | null
    dbp: string | null
    pr: string | null
    rr: string | null
    optype: string | null
    typein: string | null
    typeout: string | null
  }

  export type T_opdCountAggregateOutputType = {
    id: number
    hn: number
    clinic: number
    dateopd: number
    timeopd: number
    seq: number
    uuc: number
    detail: number
    btemp: number
    sbp: number
    dbp: number
    pr: number
    rr: number
    optype: number
    typein: number
    typeout: number
    _all: number
  }


  export type T_opdMinAggregateInputType = {
    id?: true
    hn?: true
    clinic?: true
    dateopd?: true
    timeopd?: true
    seq?: true
    uuc?: true
    detail?: true
    btemp?: true
    sbp?: true
    dbp?: true
    pr?: true
    rr?: true
    optype?: true
    typein?: true
    typeout?: true
  }

  export type T_opdMaxAggregateInputType = {
    id?: true
    hn?: true
    clinic?: true
    dateopd?: true
    timeopd?: true
    seq?: true
    uuc?: true
    detail?: true
    btemp?: true
    sbp?: true
    dbp?: true
    pr?: true
    rr?: true
    optype?: true
    typein?: true
    typeout?: true
  }

  export type T_opdCountAggregateInputType = {
    id?: true
    hn?: true
    clinic?: true
    dateopd?: true
    timeopd?: true
    seq?: true
    uuc?: true
    detail?: true
    btemp?: true
    sbp?: true
    dbp?: true
    pr?: true
    rr?: true
    optype?: true
    typein?: true
    typeout?: true
    _all?: true
  }

  export type T_opdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_opd to aggregate.
     */
    where?: t_opdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_opds to fetch.
     */
    orderBy?: t_opdOrderByWithRelationInput | t_opdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_opdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_opds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_opds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_opds
    **/
    _count?: true | T_opdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_opdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_opdMaxAggregateInputType
  }

  export type GetT_opdAggregateType<T extends T_opdAggregateArgs> = {
        [P in keyof T & keyof AggregateT_opd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_opd[P]>
      : GetScalarType<T[P], AggregateT_opd[P]>
  }




  export type t_opdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_opdWhereInput
    orderBy?: t_opdOrderByWithAggregationInput | t_opdOrderByWithAggregationInput[]
    by: T_opdScalarFieldEnum[] | T_opdScalarFieldEnum
    having?: t_opdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_opdCountAggregateInputType | true
    _min?: T_opdMinAggregateInputType
    _max?: T_opdMaxAggregateInputType
  }

  export type T_opdGroupByOutputType = {
    id: string
    hn: string
    clinic: string | null
    dateopd: string
    timeopd: string
    seq: string
    uuc: string
    detail: string
    btemp: string
    sbp: string
    dbp: string
    pr: string
    rr: string
    optype: string
    typein: string | null
    typeout: string | null
    _count: T_opdCountAggregateOutputType | null
    _min: T_opdMinAggregateOutputType | null
    _max: T_opdMaxAggregateOutputType | null
  }

  type GetT_opdGroupByPayload<T extends t_opdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_opdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_opdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_opdGroupByOutputType[P]>
            : GetScalarType<T[P], T_opdGroupByOutputType[P]>
        }
      >
    >


  export type t_opdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hn?: boolean
    clinic?: boolean
    dateopd?: boolean
    timeopd?: boolean
    seq?: boolean
    uuc?: boolean
    detail?: boolean
    btemp?: boolean
    sbp?: boolean
    dbp?: boolean
    pr?: boolean
    rr?: boolean
    optype?: boolean
    typein?: boolean
    typeout?: boolean
  }, ExtArgs["result"]["t_opd"]>

  export type t_opdSelectScalar = {
    id?: boolean
    hn?: boolean
    clinic?: boolean
    dateopd?: boolean
    timeopd?: boolean
    seq?: boolean
    uuc?: boolean
    detail?: boolean
    btemp?: boolean
    sbp?: boolean
    dbp?: boolean
    pr?: boolean
    rr?: boolean
    optype?: boolean
    typein?: boolean
    typeout?: boolean
  }


  export type $t_opdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_opd"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hn: string
      clinic: string | null
      dateopd: string
      timeopd: string
      seq: string
      uuc: string
      detail: string
      btemp: string
      sbp: string
      dbp: string
      pr: string
      rr: string
      optype: string
      typein: string | null
      typeout: string | null
    }, ExtArgs["result"]["t_opd"]>
    composites: {}
  }


  type t_opdGetPayload<S extends boolean | null | undefined | t_opdDefaultArgs> = $Result.GetResult<Prisma.$t_opdPayload, S>

  type t_opdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_opdFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_opdCountAggregateInputType | true
    }

  export interface t_opdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_opd'], meta: { name: 't_opd' } }
    /**
     * Find zero or one T_opd that matches the filter.
     * @param {t_opdFindUniqueArgs} args - Arguments to find a T_opd
     * @example
     * // Get one T_opd
     * const t_opd = await prisma.t_opd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_opdFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_opdFindUniqueArgs<ExtArgs>>
    ): Prisma__t_opdClient<$Result.GetResult<Prisma.$t_opdPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_opd that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_opdFindUniqueOrThrowArgs} args - Arguments to find a T_opd
     * @example
     * // Get one T_opd
     * const t_opd = await prisma.t_opd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_opdFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_opdFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_opdClient<$Result.GetResult<Prisma.$t_opdPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_opd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_opdFindFirstArgs} args - Arguments to find a T_opd
     * @example
     * // Get one T_opd
     * const t_opd = await prisma.t_opd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_opdFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_opdFindFirstArgs<ExtArgs>>
    ): Prisma__t_opdClient<$Result.GetResult<Prisma.$t_opdPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_opd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_opdFindFirstOrThrowArgs} args - Arguments to find a T_opd
     * @example
     * // Get one T_opd
     * const t_opd = await prisma.t_opd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_opdFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_opdFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_opdClient<$Result.GetResult<Prisma.$t_opdPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_opds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_opdFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_opds
     * const t_opds = await prisma.t_opd.findMany()
     * 
     * // Get first 10 T_opds
     * const t_opds = await prisma.t_opd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_opdWithIdOnly = await prisma.t_opd.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_opdFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_opdFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_opdPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_opd.
     * @param {t_opdCreateArgs} args - Arguments to create a T_opd.
     * @example
     * // Create one T_opd
     * const T_opd = await prisma.t_opd.create({
     *   data: {
     *     // ... data to create a T_opd
     *   }
     * })
     * 
    **/
    create<T extends t_opdCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_opdCreateArgs<ExtArgs>>
    ): Prisma__t_opdClient<$Result.GetResult<Prisma.$t_opdPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_opds.
     *     @param {t_opdCreateManyArgs} args - Arguments to create many T_opds.
     *     @example
     *     // Create many T_opds
     *     const t_opd = await prisma.t_opd.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_opdCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_opdCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_opd.
     * @param {t_opdDeleteArgs} args - Arguments to delete one T_opd.
     * @example
     * // Delete one T_opd
     * const T_opd = await prisma.t_opd.delete({
     *   where: {
     *     // ... filter to delete one T_opd
     *   }
     * })
     * 
    **/
    delete<T extends t_opdDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_opdDeleteArgs<ExtArgs>>
    ): Prisma__t_opdClient<$Result.GetResult<Prisma.$t_opdPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_opd.
     * @param {t_opdUpdateArgs} args - Arguments to update one T_opd.
     * @example
     * // Update one T_opd
     * const t_opd = await prisma.t_opd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_opdUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_opdUpdateArgs<ExtArgs>>
    ): Prisma__t_opdClient<$Result.GetResult<Prisma.$t_opdPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_opds.
     * @param {t_opdDeleteManyArgs} args - Arguments to filter T_opds to delete.
     * @example
     * // Delete a few T_opds
     * const { count } = await prisma.t_opd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_opdDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_opdDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_opds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_opdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_opds
     * const t_opd = await prisma.t_opd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_opdUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_opdUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_opd.
     * @param {t_opdUpsertArgs} args - Arguments to update or create a T_opd.
     * @example
     * // Update or create a T_opd
     * const t_opd = await prisma.t_opd.upsert({
     *   create: {
     *     // ... data to create a T_opd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_opd we want to update
     *   }
     * })
    **/
    upsert<T extends t_opdUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_opdUpsertArgs<ExtArgs>>
    ): Prisma__t_opdClient<$Result.GetResult<Prisma.$t_opdPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_opds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_opdCountArgs} args - Arguments to filter T_opds to count.
     * @example
     * // Count the number of T_opds
     * const count = await prisma.t_opd.count({
     *   where: {
     *     // ... the filter for the T_opds we want to count
     *   }
     * })
    **/
    count<T extends t_opdCountArgs>(
      args?: Subset<T, t_opdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_opdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_opd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_opdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_opdAggregateArgs>(args: Subset<T, T_opdAggregateArgs>): Prisma.PrismaPromise<GetT_opdAggregateType<T>>

    /**
     * Group by T_opd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_opdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_opdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_opdGroupByArgs['orderBy'] }
        : { orderBy?: t_opdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_opdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_opdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_opd model
   */
  readonly fields: t_opdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_opd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_opdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_opd model
   */ 
  interface t_opdFieldRefs {
    readonly id: FieldRef<"t_opd", 'String'>
    readonly hn: FieldRef<"t_opd", 'String'>
    readonly clinic: FieldRef<"t_opd", 'String'>
    readonly dateopd: FieldRef<"t_opd", 'String'>
    readonly timeopd: FieldRef<"t_opd", 'String'>
    readonly seq: FieldRef<"t_opd", 'String'>
    readonly uuc: FieldRef<"t_opd", 'String'>
    readonly detail: FieldRef<"t_opd", 'String'>
    readonly btemp: FieldRef<"t_opd", 'String'>
    readonly sbp: FieldRef<"t_opd", 'String'>
    readonly dbp: FieldRef<"t_opd", 'String'>
    readonly pr: FieldRef<"t_opd", 'String'>
    readonly rr: FieldRef<"t_opd", 'String'>
    readonly optype: FieldRef<"t_opd", 'String'>
    readonly typein: FieldRef<"t_opd", 'String'>
    readonly typeout: FieldRef<"t_opd", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_opd findUnique
   */
  export type t_opdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_opd
     */
    select?: t_opdSelect<ExtArgs> | null
    /**
     * Filter, which t_opd to fetch.
     */
    where: t_opdWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_opd findUniqueOrThrow
   */
  export type t_opdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_opd
     */
    select?: t_opdSelect<ExtArgs> | null
    /**
     * Filter, which t_opd to fetch.
     */
    where: t_opdWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_opd findFirst
   */
  export type t_opdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_opd
     */
    select?: t_opdSelect<ExtArgs> | null
    /**
     * Filter, which t_opd to fetch.
     */
    where?: t_opdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_opds to fetch.
     */
    orderBy?: t_opdOrderByWithRelationInput | t_opdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_opds.
     */
    cursor?: t_opdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_opds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_opds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_opds.
     */
    distinct?: T_opdScalarFieldEnum | T_opdScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_opd findFirstOrThrow
   */
  export type t_opdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_opd
     */
    select?: t_opdSelect<ExtArgs> | null
    /**
     * Filter, which t_opd to fetch.
     */
    where?: t_opdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_opds to fetch.
     */
    orderBy?: t_opdOrderByWithRelationInput | t_opdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_opds.
     */
    cursor?: t_opdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_opds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_opds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_opds.
     */
    distinct?: T_opdScalarFieldEnum | T_opdScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_opd findMany
   */
  export type t_opdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_opd
     */
    select?: t_opdSelect<ExtArgs> | null
    /**
     * Filter, which t_opds to fetch.
     */
    where?: t_opdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_opds to fetch.
     */
    orderBy?: t_opdOrderByWithRelationInput | t_opdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_opds.
     */
    cursor?: t_opdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_opds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_opds.
     */
    skip?: number
    distinct?: T_opdScalarFieldEnum | T_opdScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_opd create
   */
  export type t_opdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_opd
     */
    select?: t_opdSelect<ExtArgs> | null
    /**
     * The data needed to create a t_opd.
     */
    data: XOR<t_opdCreateInput, t_opdUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_opd createMany
   */
  export type t_opdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_opds.
     */
    data: t_opdCreateManyInput | t_opdCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_opd update
   */
  export type t_opdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_opd
     */
    select?: t_opdSelect<ExtArgs> | null
    /**
     * The data needed to update a t_opd.
     */
    data: XOR<t_opdUpdateInput, t_opdUncheckedUpdateInput>
    /**
     * Choose, which t_opd to update.
     */
    where: t_opdWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_opd updateMany
   */
  export type t_opdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_opds.
     */
    data: XOR<t_opdUpdateManyMutationInput, t_opdUncheckedUpdateManyInput>
    /**
     * Filter which t_opds to update
     */
    where?: t_opdWhereInput
  }


  /**
   * t_opd upsert
   */
  export type t_opdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_opd
     */
    select?: t_opdSelect<ExtArgs> | null
    /**
     * The filter to search for the t_opd to update in case it exists.
     */
    where: t_opdWhereUniqueInput
    /**
     * In case the t_opd found by the `where` argument doesn't exist, create a new t_opd with this data.
     */
    create: XOR<t_opdCreateInput, t_opdUncheckedCreateInput>
    /**
     * In case the t_opd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_opdUpdateInput, t_opdUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_opd delete
   */
  export type t_opdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_opd
     */
    select?: t_opdSelect<ExtArgs> | null
    /**
     * Filter which t_opd to delete.
     */
    where: t_opdWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_opd deleteMany
   */
  export type t_opdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_opds to delete
     */
    where?: t_opdWhereInput
  }


  /**
   * t_opd without action
   */
  export type t_opdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_opd
     */
    select?: t_opdSelect<ExtArgs> | null
  }



  /**
   * Model t_orf
   */

  export type AggregateT_orf = {
    _count: T_orfCountAggregateOutputType | null
    _min: T_orfMinAggregateOutputType | null
    _max: T_orfMaxAggregateOutputType | null
  }

  export type T_orfMinAggregateOutputType = {
    id: string | null
    hn: string | null
    dateopd: string | null
    clinic: string | null
    refer: string | null
    refertype: string | null
    seq: string | null
    referdate: string | null
  }

  export type T_orfMaxAggregateOutputType = {
    id: string | null
    hn: string | null
    dateopd: string | null
    clinic: string | null
    refer: string | null
    refertype: string | null
    seq: string | null
    referdate: string | null
  }

  export type T_orfCountAggregateOutputType = {
    id: number
    hn: number
    dateopd: number
    clinic: number
    refer: number
    refertype: number
    seq: number
    referdate: number
    _all: number
  }


  export type T_orfMinAggregateInputType = {
    id?: true
    hn?: true
    dateopd?: true
    clinic?: true
    refer?: true
    refertype?: true
    seq?: true
    referdate?: true
  }

  export type T_orfMaxAggregateInputType = {
    id?: true
    hn?: true
    dateopd?: true
    clinic?: true
    refer?: true
    refertype?: true
    seq?: true
    referdate?: true
  }

  export type T_orfCountAggregateInputType = {
    id?: true
    hn?: true
    dateopd?: true
    clinic?: true
    refer?: true
    refertype?: true
    seq?: true
    referdate?: true
    _all?: true
  }

  export type T_orfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_orf to aggregate.
     */
    where?: t_orfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_orfs to fetch.
     */
    orderBy?: t_orfOrderByWithRelationInput | t_orfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_orfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_orfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_orfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_orfs
    **/
    _count?: true | T_orfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_orfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_orfMaxAggregateInputType
  }

  export type GetT_orfAggregateType<T extends T_orfAggregateArgs> = {
        [P in keyof T & keyof AggregateT_orf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_orf[P]>
      : GetScalarType<T[P], AggregateT_orf[P]>
  }




  export type t_orfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_orfWhereInput
    orderBy?: t_orfOrderByWithAggregationInput | t_orfOrderByWithAggregationInput[]
    by: T_orfScalarFieldEnum[] | T_orfScalarFieldEnum
    having?: t_orfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_orfCountAggregateInputType | true
    _min?: T_orfMinAggregateInputType
    _max?: T_orfMaxAggregateInputType
  }

  export type T_orfGroupByOutputType = {
    id: string
    hn: string
    dateopd: string
    clinic: string | null
    refer: string
    refertype: string
    seq: string
    referdate: string
    _count: T_orfCountAggregateOutputType | null
    _min: T_orfMinAggregateOutputType | null
    _max: T_orfMaxAggregateOutputType | null
  }

  type GetT_orfGroupByPayload<T extends t_orfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_orfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_orfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_orfGroupByOutputType[P]>
            : GetScalarType<T[P], T_orfGroupByOutputType[P]>
        }
      >
    >


  export type t_orfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hn?: boolean
    dateopd?: boolean
    clinic?: boolean
    refer?: boolean
    refertype?: boolean
    seq?: boolean
    referdate?: boolean
  }, ExtArgs["result"]["t_orf"]>

  export type t_orfSelectScalar = {
    id?: boolean
    hn?: boolean
    dateopd?: boolean
    clinic?: boolean
    refer?: boolean
    refertype?: boolean
    seq?: boolean
    referdate?: boolean
  }


  export type $t_orfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_orf"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hn: string
      dateopd: string
      clinic: string | null
      refer: string
      refertype: string
      seq: string
      referdate: string
    }, ExtArgs["result"]["t_orf"]>
    composites: {}
  }


  type t_orfGetPayload<S extends boolean | null | undefined | t_orfDefaultArgs> = $Result.GetResult<Prisma.$t_orfPayload, S>

  type t_orfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_orfFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_orfCountAggregateInputType | true
    }

  export interface t_orfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_orf'], meta: { name: 't_orf' } }
    /**
     * Find zero or one T_orf that matches the filter.
     * @param {t_orfFindUniqueArgs} args - Arguments to find a T_orf
     * @example
     * // Get one T_orf
     * const t_orf = await prisma.t_orf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_orfFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_orfFindUniqueArgs<ExtArgs>>
    ): Prisma__t_orfClient<$Result.GetResult<Prisma.$t_orfPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_orf that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_orfFindUniqueOrThrowArgs} args - Arguments to find a T_orf
     * @example
     * // Get one T_orf
     * const t_orf = await prisma.t_orf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_orfFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_orfFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_orfClient<$Result.GetResult<Prisma.$t_orfPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_orf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_orfFindFirstArgs} args - Arguments to find a T_orf
     * @example
     * // Get one T_orf
     * const t_orf = await prisma.t_orf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_orfFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_orfFindFirstArgs<ExtArgs>>
    ): Prisma__t_orfClient<$Result.GetResult<Prisma.$t_orfPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_orf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_orfFindFirstOrThrowArgs} args - Arguments to find a T_orf
     * @example
     * // Get one T_orf
     * const t_orf = await prisma.t_orf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_orfFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_orfFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_orfClient<$Result.GetResult<Prisma.$t_orfPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_orfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_orfFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_orfs
     * const t_orfs = await prisma.t_orf.findMany()
     * 
     * // Get first 10 T_orfs
     * const t_orfs = await prisma.t_orf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_orfWithIdOnly = await prisma.t_orf.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_orfFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_orfFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_orfPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_orf.
     * @param {t_orfCreateArgs} args - Arguments to create a T_orf.
     * @example
     * // Create one T_orf
     * const T_orf = await prisma.t_orf.create({
     *   data: {
     *     // ... data to create a T_orf
     *   }
     * })
     * 
    **/
    create<T extends t_orfCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_orfCreateArgs<ExtArgs>>
    ): Prisma__t_orfClient<$Result.GetResult<Prisma.$t_orfPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_orfs.
     *     @param {t_orfCreateManyArgs} args - Arguments to create many T_orfs.
     *     @example
     *     // Create many T_orfs
     *     const t_orf = await prisma.t_orf.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_orfCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_orfCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_orf.
     * @param {t_orfDeleteArgs} args - Arguments to delete one T_orf.
     * @example
     * // Delete one T_orf
     * const T_orf = await prisma.t_orf.delete({
     *   where: {
     *     // ... filter to delete one T_orf
     *   }
     * })
     * 
    **/
    delete<T extends t_orfDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_orfDeleteArgs<ExtArgs>>
    ): Prisma__t_orfClient<$Result.GetResult<Prisma.$t_orfPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_orf.
     * @param {t_orfUpdateArgs} args - Arguments to update one T_orf.
     * @example
     * // Update one T_orf
     * const t_orf = await prisma.t_orf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_orfUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_orfUpdateArgs<ExtArgs>>
    ): Prisma__t_orfClient<$Result.GetResult<Prisma.$t_orfPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_orfs.
     * @param {t_orfDeleteManyArgs} args - Arguments to filter T_orfs to delete.
     * @example
     * // Delete a few T_orfs
     * const { count } = await prisma.t_orf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_orfDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_orfDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_orfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_orfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_orfs
     * const t_orf = await prisma.t_orf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_orfUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_orfUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_orf.
     * @param {t_orfUpsertArgs} args - Arguments to update or create a T_orf.
     * @example
     * // Update or create a T_orf
     * const t_orf = await prisma.t_orf.upsert({
     *   create: {
     *     // ... data to create a T_orf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_orf we want to update
     *   }
     * })
    **/
    upsert<T extends t_orfUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_orfUpsertArgs<ExtArgs>>
    ): Prisma__t_orfClient<$Result.GetResult<Prisma.$t_orfPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_orfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_orfCountArgs} args - Arguments to filter T_orfs to count.
     * @example
     * // Count the number of T_orfs
     * const count = await prisma.t_orf.count({
     *   where: {
     *     // ... the filter for the T_orfs we want to count
     *   }
     * })
    **/
    count<T extends t_orfCountArgs>(
      args?: Subset<T, t_orfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_orfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_orf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_orfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_orfAggregateArgs>(args: Subset<T, T_orfAggregateArgs>): Prisma.PrismaPromise<GetT_orfAggregateType<T>>

    /**
     * Group by T_orf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_orfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_orfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_orfGroupByArgs['orderBy'] }
        : { orderBy?: t_orfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_orfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_orfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_orf model
   */
  readonly fields: t_orfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_orf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_orfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_orf model
   */ 
  interface t_orfFieldRefs {
    readonly id: FieldRef<"t_orf", 'String'>
    readonly hn: FieldRef<"t_orf", 'String'>
    readonly dateopd: FieldRef<"t_orf", 'String'>
    readonly clinic: FieldRef<"t_orf", 'String'>
    readonly refer: FieldRef<"t_orf", 'String'>
    readonly refertype: FieldRef<"t_orf", 'String'>
    readonly seq: FieldRef<"t_orf", 'String'>
    readonly referdate: FieldRef<"t_orf", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_orf findUnique
   */
  export type t_orfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_orf
     */
    select?: t_orfSelect<ExtArgs> | null
    /**
     * Filter, which t_orf to fetch.
     */
    where: t_orfWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_orf findUniqueOrThrow
   */
  export type t_orfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_orf
     */
    select?: t_orfSelect<ExtArgs> | null
    /**
     * Filter, which t_orf to fetch.
     */
    where: t_orfWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_orf findFirst
   */
  export type t_orfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_orf
     */
    select?: t_orfSelect<ExtArgs> | null
    /**
     * Filter, which t_orf to fetch.
     */
    where?: t_orfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_orfs to fetch.
     */
    orderBy?: t_orfOrderByWithRelationInput | t_orfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_orfs.
     */
    cursor?: t_orfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_orfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_orfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_orfs.
     */
    distinct?: T_orfScalarFieldEnum | T_orfScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_orf findFirstOrThrow
   */
  export type t_orfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_orf
     */
    select?: t_orfSelect<ExtArgs> | null
    /**
     * Filter, which t_orf to fetch.
     */
    where?: t_orfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_orfs to fetch.
     */
    orderBy?: t_orfOrderByWithRelationInput | t_orfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_orfs.
     */
    cursor?: t_orfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_orfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_orfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_orfs.
     */
    distinct?: T_orfScalarFieldEnum | T_orfScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_orf findMany
   */
  export type t_orfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_orf
     */
    select?: t_orfSelect<ExtArgs> | null
    /**
     * Filter, which t_orfs to fetch.
     */
    where?: t_orfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_orfs to fetch.
     */
    orderBy?: t_orfOrderByWithRelationInput | t_orfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_orfs.
     */
    cursor?: t_orfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_orfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_orfs.
     */
    skip?: number
    distinct?: T_orfScalarFieldEnum | T_orfScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_orf create
   */
  export type t_orfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_orf
     */
    select?: t_orfSelect<ExtArgs> | null
    /**
     * The data needed to create a t_orf.
     */
    data: XOR<t_orfCreateInput, t_orfUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_orf createMany
   */
  export type t_orfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_orfs.
     */
    data: t_orfCreateManyInput | t_orfCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_orf update
   */
  export type t_orfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_orf
     */
    select?: t_orfSelect<ExtArgs> | null
    /**
     * The data needed to update a t_orf.
     */
    data: XOR<t_orfUpdateInput, t_orfUncheckedUpdateInput>
    /**
     * Choose, which t_orf to update.
     */
    where: t_orfWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_orf updateMany
   */
  export type t_orfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_orfs.
     */
    data: XOR<t_orfUpdateManyMutationInput, t_orfUncheckedUpdateManyInput>
    /**
     * Filter which t_orfs to update
     */
    where?: t_orfWhereInput
  }


  /**
   * t_orf upsert
   */
  export type t_orfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_orf
     */
    select?: t_orfSelect<ExtArgs> | null
    /**
     * The filter to search for the t_orf to update in case it exists.
     */
    where: t_orfWhereUniqueInput
    /**
     * In case the t_orf found by the `where` argument doesn't exist, create a new t_orf with this data.
     */
    create: XOR<t_orfCreateInput, t_orfUncheckedCreateInput>
    /**
     * In case the t_orf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_orfUpdateInput, t_orfUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_orf delete
   */
  export type t_orfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_orf
     */
    select?: t_orfSelect<ExtArgs> | null
    /**
     * Filter which t_orf to delete.
     */
    where: t_orfWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_orf deleteMany
   */
  export type t_orfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_orfs to delete
     */
    where?: t_orfWhereInput
  }


  /**
   * t_orf without action
   */
  export type t_orfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_orf
     */
    select?: t_orfSelect<ExtArgs> | null
  }



  /**
   * Model t_odx
   */

  export type AggregateT_odx = {
    _count: T_odxCountAggregateOutputType | null
    _min: T_odxMinAggregateOutputType | null
    _max: T_odxMaxAggregateOutputType | null
  }

  export type T_odxMinAggregateOutputType = {
    id: string | null
    hn: string | null
    datedx: string | null
    clinic: string | null
    diag: string | null
    dxtype: string | null
    drdx: string | null
    person_id: string | null
    seq: string | null
  }

  export type T_odxMaxAggregateOutputType = {
    id: string | null
    hn: string | null
    datedx: string | null
    clinic: string | null
    diag: string | null
    dxtype: string | null
    drdx: string | null
    person_id: string | null
    seq: string | null
  }

  export type T_odxCountAggregateOutputType = {
    id: number
    hn: number
    datedx: number
    clinic: number
    diag: number
    dxtype: number
    drdx: number
    person_id: number
    seq: number
    _all: number
  }


  export type T_odxMinAggregateInputType = {
    id?: true
    hn?: true
    datedx?: true
    clinic?: true
    diag?: true
    dxtype?: true
    drdx?: true
    person_id?: true
    seq?: true
  }

  export type T_odxMaxAggregateInputType = {
    id?: true
    hn?: true
    datedx?: true
    clinic?: true
    diag?: true
    dxtype?: true
    drdx?: true
    person_id?: true
    seq?: true
  }

  export type T_odxCountAggregateInputType = {
    id?: true
    hn?: true
    datedx?: true
    clinic?: true
    diag?: true
    dxtype?: true
    drdx?: true
    person_id?: true
    seq?: true
    _all?: true
  }

  export type T_odxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_odx to aggregate.
     */
    where?: t_odxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_odxes to fetch.
     */
    orderBy?: t_odxOrderByWithRelationInput | t_odxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_odxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_odxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_odxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_odxes
    **/
    _count?: true | T_odxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_odxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_odxMaxAggregateInputType
  }

  export type GetT_odxAggregateType<T extends T_odxAggregateArgs> = {
        [P in keyof T & keyof AggregateT_odx]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_odx[P]>
      : GetScalarType<T[P], AggregateT_odx[P]>
  }




  export type t_odxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_odxWhereInput
    orderBy?: t_odxOrderByWithAggregationInput | t_odxOrderByWithAggregationInput[]
    by: T_odxScalarFieldEnum[] | T_odxScalarFieldEnum
    having?: t_odxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_odxCountAggregateInputType | true
    _min?: T_odxMinAggregateInputType
    _max?: T_odxMaxAggregateInputType
  }

  export type T_odxGroupByOutputType = {
    id: string
    hn: string
    datedx: string
    clinic: string | null
    diag: string
    dxtype: string
    drdx: string
    person_id: string
    seq: string
    _count: T_odxCountAggregateOutputType | null
    _min: T_odxMinAggregateOutputType | null
    _max: T_odxMaxAggregateOutputType | null
  }

  type GetT_odxGroupByPayload<T extends t_odxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_odxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_odxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_odxGroupByOutputType[P]>
            : GetScalarType<T[P], T_odxGroupByOutputType[P]>
        }
      >
    >


  export type t_odxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hn?: boolean
    datedx?: boolean
    clinic?: boolean
    diag?: boolean
    dxtype?: boolean
    drdx?: boolean
    person_id?: boolean
    seq?: boolean
  }, ExtArgs["result"]["t_odx"]>

  export type t_odxSelectScalar = {
    id?: boolean
    hn?: boolean
    datedx?: boolean
    clinic?: boolean
    diag?: boolean
    dxtype?: boolean
    drdx?: boolean
    person_id?: boolean
    seq?: boolean
  }


  export type $t_odxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_odx"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hn: string
      datedx: string
      clinic: string | null
      diag: string
      dxtype: string
      drdx: string
      person_id: string
      seq: string
    }, ExtArgs["result"]["t_odx"]>
    composites: {}
  }


  type t_odxGetPayload<S extends boolean | null | undefined | t_odxDefaultArgs> = $Result.GetResult<Prisma.$t_odxPayload, S>

  type t_odxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_odxFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_odxCountAggregateInputType | true
    }

  export interface t_odxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_odx'], meta: { name: 't_odx' } }
    /**
     * Find zero or one T_odx that matches the filter.
     * @param {t_odxFindUniqueArgs} args - Arguments to find a T_odx
     * @example
     * // Get one T_odx
     * const t_odx = await prisma.t_odx.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_odxFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_odxFindUniqueArgs<ExtArgs>>
    ): Prisma__t_odxClient<$Result.GetResult<Prisma.$t_odxPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_odx that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_odxFindUniqueOrThrowArgs} args - Arguments to find a T_odx
     * @example
     * // Get one T_odx
     * const t_odx = await prisma.t_odx.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_odxFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_odxFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_odxClient<$Result.GetResult<Prisma.$t_odxPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_odx that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_odxFindFirstArgs} args - Arguments to find a T_odx
     * @example
     * // Get one T_odx
     * const t_odx = await prisma.t_odx.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_odxFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_odxFindFirstArgs<ExtArgs>>
    ): Prisma__t_odxClient<$Result.GetResult<Prisma.$t_odxPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_odx that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_odxFindFirstOrThrowArgs} args - Arguments to find a T_odx
     * @example
     * // Get one T_odx
     * const t_odx = await prisma.t_odx.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_odxFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_odxFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_odxClient<$Result.GetResult<Prisma.$t_odxPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_odxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_odxFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_odxes
     * const t_odxes = await prisma.t_odx.findMany()
     * 
     * // Get first 10 T_odxes
     * const t_odxes = await prisma.t_odx.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_odxWithIdOnly = await prisma.t_odx.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_odxFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_odxFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_odxPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_odx.
     * @param {t_odxCreateArgs} args - Arguments to create a T_odx.
     * @example
     * // Create one T_odx
     * const T_odx = await prisma.t_odx.create({
     *   data: {
     *     // ... data to create a T_odx
     *   }
     * })
     * 
    **/
    create<T extends t_odxCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_odxCreateArgs<ExtArgs>>
    ): Prisma__t_odxClient<$Result.GetResult<Prisma.$t_odxPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_odxes.
     *     @param {t_odxCreateManyArgs} args - Arguments to create many T_odxes.
     *     @example
     *     // Create many T_odxes
     *     const t_odx = await prisma.t_odx.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_odxCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_odxCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_odx.
     * @param {t_odxDeleteArgs} args - Arguments to delete one T_odx.
     * @example
     * // Delete one T_odx
     * const T_odx = await prisma.t_odx.delete({
     *   where: {
     *     // ... filter to delete one T_odx
     *   }
     * })
     * 
    **/
    delete<T extends t_odxDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_odxDeleteArgs<ExtArgs>>
    ): Prisma__t_odxClient<$Result.GetResult<Prisma.$t_odxPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_odx.
     * @param {t_odxUpdateArgs} args - Arguments to update one T_odx.
     * @example
     * // Update one T_odx
     * const t_odx = await prisma.t_odx.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_odxUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_odxUpdateArgs<ExtArgs>>
    ): Prisma__t_odxClient<$Result.GetResult<Prisma.$t_odxPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_odxes.
     * @param {t_odxDeleteManyArgs} args - Arguments to filter T_odxes to delete.
     * @example
     * // Delete a few T_odxes
     * const { count } = await prisma.t_odx.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_odxDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_odxDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_odxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_odxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_odxes
     * const t_odx = await prisma.t_odx.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_odxUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_odxUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_odx.
     * @param {t_odxUpsertArgs} args - Arguments to update or create a T_odx.
     * @example
     * // Update or create a T_odx
     * const t_odx = await prisma.t_odx.upsert({
     *   create: {
     *     // ... data to create a T_odx
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_odx we want to update
     *   }
     * })
    **/
    upsert<T extends t_odxUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_odxUpsertArgs<ExtArgs>>
    ): Prisma__t_odxClient<$Result.GetResult<Prisma.$t_odxPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_odxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_odxCountArgs} args - Arguments to filter T_odxes to count.
     * @example
     * // Count the number of T_odxes
     * const count = await prisma.t_odx.count({
     *   where: {
     *     // ... the filter for the T_odxes we want to count
     *   }
     * })
    **/
    count<T extends t_odxCountArgs>(
      args?: Subset<T, t_odxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_odxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_odx.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_odxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_odxAggregateArgs>(args: Subset<T, T_odxAggregateArgs>): Prisma.PrismaPromise<GetT_odxAggregateType<T>>

    /**
     * Group by T_odx.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_odxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_odxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_odxGroupByArgs['orderBy'] }
        : { orderBy?: t_odxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_odxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_odxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_odx model
   */
  readonly fields: t_odxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_odx.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_odxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_odx model
   */ 
  interface t_odxFieldRefs {
    readonly id: FieldRef<"t_odx", 'String'>
    readonly hn: FieldRef<"t_odx", 'String'>
    readonly datedx: FieldRef<"t_odx", 'String'>
    readonly clinic: FieldRef<"t_odx", 'String'>
    readonly diag: FieldRef<"t_odx", 'String'>
    readonly dxtype: FieldRef<"t_odx", 'String'>
    readonly drdx: FieldRef<"t_odx", 'String'>
    readonly person_id: FieldRef<"t_odx", 'String'>
    readonly seq: FieldRef<"t_odx", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_odx findUnique
   */
  export type t_odxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_odx
     */
    select?: t_odxSelect<ExtArgs> | null
    /**
     * Filter, which t_odx to fetch.
     */
    where: t_odxWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_odx findUniqueOrThrow
   */
  export type t_odxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_odx
     */
    select?: t_odxSelect<ExtArgs> | null
    /**
     * Filter, which t_odx to fetch.
     */
    where: t_odxWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_odx findFirst
   */
  export type t_odxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_odx
     */
    select?: t_odxSelect<ExtArgs> | null
    /**
     * Filter, which t_odx to fetch.
     */
    where?: t_odxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_odxes to fetch.
     */
    orderBy?: t_odxOrderByWithRelationInput | t_odxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_odxes.
     */
    cursor?: t_odxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_odxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_odxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_odxes.
     */
    distinct?: T_odxScalarFieldEnum | T_odxScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_odx findFirstOrThrow
   */
  export type t_odxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_odx
     */
    select?: t_odxSelect<ExtArgs> | null
    /**
     * Filter, which t_odx to fetch.
     */
    where?: t_odxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_odxes to fetch.
     */
    orderBy?: t_odxOrderByWithRelationInput | t_odxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_odxes.
     */
    cursor?: t_odxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_odxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_odxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_odxes.
     */
    distinct?: T_odxScalarFieldEnum | T_odxScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_odx findMany
   */
  export type t_odxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_odx
     */
    select?: t_odxSelect<ExtArgs> | null
    /**
     * Filter, which t_odxes to fetch.
     */
    where?: t_odxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_odxes to fetch.
     */
    orderBy?: t_odxOrderByWithRelationInput | t_odxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_odxes.
     */
    cursor?: t_odxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_odxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_odxes.
     */
    skip?: number
    distinct?: T_odxScalarFieldEnum | T_odxScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_odx create
   */
  export type t_odxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_odx
     */
    select?: t_odxSelect<ExtArgs> | null
    /**
     * The data needed to create a t_odx.
     */
    data: XOR<t_odxCreateInput, t_odxUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_odx createMany
   */
  export type t_odxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_odxes.
     */
    data: t_odxCreateManyInput | t_odxCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_odx update
   */
  export type t_odxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_odx
     */
    select?: t_odxSelect<ExtArgs> | null
    /**
     * The data needed to update a t_odx.
     */
    data: XOR<t_odxUpdateInput, t_odxUncheckedUpdateInput>
    /**
     * Choose, which t_odx to update.
     */
    where: t_odxWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_odx updateMany
   */
  export type t_odxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_odxes.
     */
    data: XOR<t_odxUpdateManyMutationInput, t_odxUncheckedUpdateManyInput>
    /**
     * Filter which t_odxes to update
     */
    where?: t_odxWhereInput
  }


  /**
   * t_odx upsert
   */
  export type t_odxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_odx
     */
    select?: t_odxSelect<ExtArgs> | null
    /**
     * The filter to search for the t_odx to update in case it exists.
     */
    where: t_odxWhereUniqueInput
    /**
     * In case the t_odx found by the `where` argument doesn't exist, create a new t_odx with this data.
     */
    create: XOR<t_odxCreateInput, t_odxUncheckedCreateInput>
    /**
     * In case the t_odx was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_odxUpdateInput, t_odxUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_odx delete
   */
  export type t_odxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_odx
     */
    select?: t_odxSelect<ExtArgs> | null
    /**
     * Filter which t_odx to delete.
     */
    where: t_odxWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_odx deleteMany
   */
  export type t_odxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_odxes to delete
     */
    where?: t_odxWhereInput
  }


  /**
   * t_odx without action
   */
  export type t_odxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_odx
     */
    select?: t_odxSelect<ExtArgs> | null
  }



  /**
   * Model t_oop
   */

  export type AggregateT_oop = {
    _count: T_oopCountAggregateOutputType | null
    _min: T_oopMinAggregateOutputType | null
    _max: T_oopMaxAggregateOutputType | null
  }

  export type T_oopMinAggregateOutputType = {
    id: string | null
    hn: string | null
    dateopd: string | null
    clinic: string | null
    oper: string | null
    dropid: string | null
    person_id: string | null
    seq: string | null
    servprice: string | null
  }

  export type T_oopMaxAggregateOutputType = {
    id: string | null
    hn: string | null
    dateopd: string | null
    clinic: string | null
    oper: string | null
    dropid: string | null
    person_id: string | null
    seq: string | null
    servprice: string | null
  }

  export type T_oopCountAggregateOutputType = {
    id: number
    hn: number
    dateopd: number
    clinic: number
    oper: number
    dropid: number
    person_id: number
    seq: number
    servprice: number
    _all: number
  }


  export type T_oopMinAggregateInputType = {
    id?: true
    hn?: true
    dateopd?: true
    clinic?: true
    oper?: true
    dropid?: true
    person_id?: true
    seq?: true
    servprice?: true
  }

  export type T_oopMaxAggregateInputType = {
    id?: true
    hn?: true
    dateopd?: true
    clinic?: true
    oper?: true
    dropid?: true
    person_id?: true
    seq?: true
    servprice?: true
  }

  export type T_oopCountAggregateInputType = {
    id?: true
    hn?: true
    dateopd?: true
    clinic?: true
    oper?: true
    dropid?: true
    person_id?: true
    seq?: true
    servprice?: true
    _all?: true
  }

  export type T_oopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_oop to aggregate.
     */
    where?: t_oopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_oops to fetch.
     */
    orderBy?: t_oopOrderByWithRelationInput | t_oopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_oopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_oops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_oops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_oops
    **/
    _count?: true | T_oopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_oopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_oopMaxAggregateInputType
  }

  export type GetT_oopAggregateType<T extends T_oopAggregateArgs> = {
        [P in keyof T & keyof AggregateT_oop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_oop[P]>
      : GetScalarType<T[P], AggregateT_oop[P]>
  }




  export type t_oopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_oopWhereInput
    orderBy?: t_oopOrderByWithAggregationInput | t_oopOrderByWithAggregationInput[]
    by: T_oopScalarFieldEnum[] | T_oopScalarFieldEnum
    having?: t_oopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_oopCountAggregateInputType | true
    _min?: T_oopMinAggregateInputType
    _max?: T_oopMaxAggregateInputType
  }

  export type T_oopGroupByOutputType = {
    id: string
    hn: string
    dateopd: string
    clinic: string | null
    oper: string
    dropid: string
    person_id: string
    seq: string
    servprice: string
    _count: T_oopCountAggregateOutputType | null
    _min: T_oopMinAggregateOutputType | null
    _max: T_oopMaxAggregateOutputType | null
  }

  type GetT_oopGroupByPayload<T extends t_oopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_oopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_oopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_oopGroupByOutputType[P]>
            : GetScalarType<T[P], T_oopGroupByOutputType[P]>
        }
      >
    >


  export type t_oopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hn?: boolean
    dateopd?: boolean
    clinic?: boolean
    oper?: boolean
    dropid?: boolean
    person_id?: boolean
    seq?: boolean
    servprice?: boolean
  }, ExtArgs["result"]["t_oop"]>

  export type t_oopSelectScalar = {
    id?: boolean
    hn?: boolean
    dateopd?: boolean
    clinic?: boolean
    oper?: boolean
    dropid?: boolean
    person_id?: boolean
    seq?: boolean
    servprice?: boolean
  }


  export type $t_oopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_oop"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hn: string
      dateopd: string
      clinic: string | null
      oper: string
      dropid: string
      person_id: string
      seq: string
      servprice: string
    }, ExtArgs["result"]["t_oop"]>
    composites: {}
  }


  type t_oopGetPayload<S extends boolean | null | undefined | t_oopDefaultArgs> = $Result.GetResult<Prisma.$t_oopPayload, S>

  type t_oopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_oopFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_oopCountAggregateInputType | true
    }

  export interface t_oopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_oop'], meta: { name: 't_oop' } }
    /**
     * Find zero or one T_oop that matches the filter.
     * @param {t_oopFindUniqueArgs} args - Arguments to find a T_oop
     * @example
     * // Get one T_oop
     * const t_oop = await prisma.t_oop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_oopFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_oopFindUniqueArgs<ExtArgs>>
    ): Prisma__t_oopClient<$Result.GetResult<Prisma.$t_oopPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_oop that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_oopFindUniqueOrThrowArgs} args - Arguments to find a T_oop
     * @example
     * // Get one T_oop
     * const t_oop = await prisma.t_oop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_oopFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_oopFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_oopClient<$Result.GetResult<Prisma.$t_oopPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_oop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_oopFindFirstArgs} args - Arguments to find a T_oop
     * @example
     * // Get one T_oop
     * const t_oop = await prisma.t_oop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_oopFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_oopFindFirstArgs<ExtArgs>>
    ): Prisma__t_oopClient<$Result.GetResult<Prisma.$t_oopPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_oop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_oopFindFirstOrThrowArgs} args - Arguments to find a T_oop
     * @example
     * // Get one T_oop
     * const t_oop = await prisma.t_oop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_oopFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_oopFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_oopClient<$Result.GetResult<Prisma.$t_oopPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_oops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_oopFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_oops
     * const t_oops = await prisma.t_oop.findMany()
     * 
     * // Get first 10 T_oops
     * const t_oops = await prisma.t_oop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_oopWithIdOnly = await prisma.t_oop.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_oopFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_oopFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_oopPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_oop.
     * @param {t_oopCreateArgs} args - Arguments to create a T_oop.
     * @example
     * // Create one T_oop
     * const T_oop = await prisma.t_oop.create({
     *   data: {
     *     // ... data to create a T_oop
     *   }
     * })
     * 
    **/
    create<T extends t_oopCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_oopCreateArgs<ExtArgs>>
    ): Prisma__t_oopClient<$Result.GetResult<Prisma.$t_oopPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_oops.
     *     @param {t_oopCreateManyArgs} args - Arguments to create many T_oops.
     *     @example
     *     // Create many T_oops
     *     const t_oop = await prisma.t_oop.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_oopCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_oopCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_oop.
     * @param {t_oopDeleteArgs} args - Arguments to delete one T_oop.
     * @example
     * // Delete one T_oop
     * const T_oop = await prisma.t_oop.delete({
     *   where: {
     *     // ... filter to delete one T_oop
     *   }
     * })
     * 
    **/
    delete<T extends t_oopDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_oopDeleteArgs<ExtArgs>>
    ): Prisma__t_oopClient<$Result.GetResult<Prisma.$t_oopPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_oop.
     * @param {t_oopUpdateArgs} args - Arguments to update one T_oop.
     * @example
     * // Update one T_oop
     * const t_oop = await prisma.t_oop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_oopUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_oopUpdateArgs<ExtArgs>>
    ): Prisma__t_oopClient<$Result.GetResult<Prisma.$t_oopPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_oops.
     * @param {t_oopDeleteManyArgs} args - Arguments to filter T_oops to delete.
     * @example
     * // Delete a few T_oops
     * const { count } = await prisma.t_oop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_oopDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_oopDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_oops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_oopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_oops
     * const t_oop = await prisma.t_oop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_oopUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_oopUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_oop.
     * @param {t_oopUpsertArgs} args - Arguments to update or create a T_oop.
     * @example
     * // Update or create a T_oop
     * const t_oop = await prisma.t_oop.upsert({
     *   create: {
     *     // ... data to create a T_oop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_oop we want to update
     *   }
     * })
    **/
    upsert<T extends t_oopUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_oopUpsertArgs<ExtArgs>>
    ): Prisma__t_oopClient<$Result.GetResult<Prisma.$t_oopPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_oops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_oopCountArgs} args - Arguments to filter T_oops to count.
     * @example
     * // Count the number of T_oops
     * const count = await prisma.t_oop.count({
     *   where: {
     *     // ... the filter for the T_oops we want to count
     *   }
     * })
    **/
    count<T extends t_oopCountArgs>(
      args?: Subset<T, t_oopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_oopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_oop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_oopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_oopAggregateArgs>(args: Subset<T, T_oopAggregateArgs>): Prisma.PrismaPromise<GetT_oopAggregateType<T>>

    /**
     * Group by T_oop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_oopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_oopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_oopGroupByArgs['orderBy'] }
        : { orderBy?: t_oopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_oopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_oopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_oop model
   */
  readonly fields: t_oopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_oop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_oopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_oop model
   */ 
  interface t_oopFieldRefs {
    readonly id: FieldRef<"t_oop", 'String'>
    readonly hn: FieldRef<"t_oop", 'String'>
    readonly dateopd: FieldRef<"t_oop", 'String'>
    readonly clinic: FieldRef<"t_oop", 'String'>
    readonly oper: FieldRef<"t_oop", 'String'>
    readonly dropid: FieldRef<"t_oop", 'String'>
    readonly person_id: FieldRef<"t_oop", 'String'>
    readonly seq: FieldRef<"t_oop", 'String'>
    readonly servprice: FieldRef<"t_oop", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_oop findUnique
   */
  export type t_oopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_oop
     */
    select?: t_oopSelect<ExtArgs> | null
    /**
     * Filter, which t_oop to fetch.
     */
    where: t_oopWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_oop findUniqueOrThrow
   */
  export type t_oopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_oop
     */
    select?: t_oopSelect<ExtArgs> | null
    /**
     * Filter, which t_oop to fetch.
     */
    where: t_oopWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_oop findFirst
   */
  export type t_oopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_oop
     */
    select?: t_oopSelect<ExtArgs> | null
    /**
     * Filter, which t_oop to fetch.
     */
    where?: t_oopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_oops to fetch.
     */
    orderBy?: t_oopOrderByWithRelationInput | t_oopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_oops.
     */
    cursor?: t_oopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_oops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_oops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_oops.
     */
    distinct?: T_oopScalarFieldEnum | T_oopScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_oop findFirstOrThrow
   */
  export type t_oopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_oop
     */
    select?: t_oopSelect<ExtArgs> | null
    /**
     * Filter, which t_oop to fetch.
     */
    where?: t_oopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_oops to fetch.
     */
    orderBy?: t_oopOrderByWithRelationInput | t_oopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_oops.
     */
    cursor?: t_oopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_oops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_oops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_oops.
     */
    distinct?: T_oopScalarFieldEnum | T_oopScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_oop findMany
   */
  export type t_oopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_oop
     */
    select?: t_oopSelect<ExtArgs> | null
    /**
     * Filter, which t_oops to fetch.
     */
    where?: t_oopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_oops to fetch.
     */
    orderBy?: t_oopOrderByWithRelationInput | t_oopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_oops.
     */
    cursor?: t_oopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_oops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_oops.
     */
    skip?: number
    distinct?: T_oopScalarFieldEnum | T_oopScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_oop create
   */
  export type t_oopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_oop
     */
    select?: t_oopSelect<ExtArgs> | null
    /**
     * The data needed to create a t_oop.
     */
    data: XOR<t_oopCreateInput, t_oopUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_oop createMany
   */
  export type t_oopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_oops.
     */
    data: t_oopCreateManyInput | t_oopCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_oop update
   */
  export type t_oopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_oop
     */
    select?: t_oopSelect<ExtArgs> | null
    /**
     * The data needed to update a t_oop.
     */
    data: XOR<t_oopUpdateInput, t_oopUncheckedUpdateInput>
    /**
     * Choose, which t_oop to update.
     */
    where: t_oopWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_oop updateMany
   */
  export type t_oopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_oops.
     */
    data: XOR<t_oopUpdateManyMutationInput, t_oopUncheckedUpdateManyInput>
    /**
     * Filter which t_oops to update
     */
    where?: t_oopWhereInput
  }


  /**
   * t_oop upsert
   */
  export type t_oopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_oop
     */
    select?: t_oopSelect<ExtArgs> | null
    /**
     * The filter to search for the t_oop to update in case it exists.
     */
    where: t_oopWhereUniqueInput
    /**
     * In case the t_oop found by the `where` argument doesn't exist, create a new t_oop with this data.
     */
    create: XOR<t_oopCreateInput, t_oopUncheckedCreateInput>
    /**
     * In case the t_oop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_oopUpdateInput, t_oopUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_oop delete
   */
  export type t_oopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_oop
     */
    select?: t_oopSelect<ExtArgs> | null
    /**
     * Filter which t_oop to delete.
     */
    where: t_oopWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_oop deleteMany
   */
  export type t_oopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_oops to delete
     */
    where?: t_oopWhereInput
  }


  /**
   * t_oop without action
   */
  export type t_oopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_oop
     */
    select?: t_oopSelect<ExtArgs> | null
  }



  /**
   * Model t_ipd
   */

  export type AggregateT_ipd = {
    _count: T_ipdCountAggregateOutputType | null
    _min: T_ipdMinAggregateOutputType | null
    _max: T_ipdMaxAggregateOutputType | null
  }

  export type T_ipdMinAggregateOutputType = {
    id: string | null
    hn: string | null
    an: string | null
    dateadm: string | null
    timeadm: string | null
    datedsc: string | null
    timedsc: string | null
    dischs: string | null
    discht: string | null
    warddsc: string | null
    dept: string | null
    adm_w: string | null
    uuc: string | null
    svctype: string | null
  }

  export type T_ipdMaxAggregateOutputType = {
    id: string | null
    hn: string | null
    an: string | null
    dateadm: string | null
    timeadm: string | null
    datedsc: string | null
    timedsc: string | null
    dischs: string | null
    discht: string | null
    warddsc: string | null
    dept: string | null
    adm_w: string | null
    uuc: string | null
    svctype: string | null
  }

  export type T_ipdCountAggregateOutputType = {
    id: number
    hn: number
    an: number
    dateadm: number
    timeadm: number
    datedsc: number
    timedsc: number
    dischs: number
    discht: number
    warddsc: number
    dept: number
    adm_w: number
    uuc: number
    svctype: number
    _all: number
  }


  export type T_ipdMinAggregateInputType = {
    id?: true
    hn?: true
    an?: true
    dateadm?: true
    timeadm?: true
    datedsc?: true
    timedsc?: true
    dischs?: true
    discht?: true
    warddsc?: true
    dept?: true
    adm_w?: true
    uuc?: true
    svctype?: true
  }

  export type T_ipdMaxAggregateInputType = {
    id?: true
    hn?: true
    an?: true
    dateadm?: true
    timeadm?: true
    datedsc?: true
    timedsc?: true
    dischs?: true
    discht?: true
    warddsc?: true
    dept?: true
    adm_w?: true
    uuc?: true
    svctype?: true
  }

  export type T_ipdCountAggregateInputType = {
    id?: true
    hn?: true
    an?: true
    dateadm?: true
    timeadm?: true
    datedsc?: true
    timedsc?: true
    dischs?: true
    discht?: true
    warddsc?: true
    dept?: true
    adm_w?: true
    uuc?: true
    svctype?: true
    _all?: true
  }

  export type T_ipdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_ipd to aggregate.
     */
    where?: t_ipdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_ipds to fetch.
     */
    orderBy?: t_ipdOrderByWithRelationInput | t_ipdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_ipdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_ipds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_ipds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_ipds
    **/
    _count?: true | T_ipdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_ipdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_ipdMaxAggregateInputType
  }

  export type GetT_ipdAggregateType<T extends T_ipdAggregateArgs> = {
        [P in keyof T & keyof AggregateT_ipd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_ipd[P]>
      : GetScalarType<T[P], AggregateT_ipd[P]>
  }




  export type t_ipdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_ipdWhereInput
    orderBy?: t_ipdOrderByWithAggregationInput | t_ipdOrderByWithAggregationInput[]
    by: T_ipdScalarFieldEnum[] | T_ipdScalarFieldEnum
    having?: t_ipdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_ipdCountAggregateInputType | true
    _min?: T_ipdMinAggregateInputType
    _max?: T_ipdMaxAggregateInputType
  }

  export type T_ipdGroupByOutputType = {
    id: string
    hn: string
    an: string
    dateadm: string
    timeadm: string
    datedsc: string
    timedsc: string
    dischs: string
    discht: string
    warddsc: string | null
    dept: string | null
    adm_w: string
    uuc: string
    svctype: string
    _count: T_ipdCountAggregateOutputType | null
    _min: T_ipdMinAggregateOutputType | null
    _max: T_ipdMaxAggregateOutputType | null
  }

  type GetT_ipdGroupByPayload<T extends t_ipdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_ipdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_ipdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_ipdGroupByOutputType[P]>
            : GetScalarType<T[P], T_ipdGroupByOutputType[P]>
        }
      >
    >


  export type t_ipdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hn?: boolean
    an?: boolean
    dateadm?: boolean
    timeadm?: boolean
    datedsc?: boolean
    timedsc?: boolean
    dischs?: boolean
    discht?: boolean
    warddsc?: boolean
    dept?: boolean
    adm_w?: boolean
    uuc?: boolean
    svctype?: boolean
  }, ExtArgs["result"]["t_ipd"]>

  export type t_ipdSelectScalar = {
    id?: boolean
    hn?: boolean
    an?: boolean
    dateadm?: boolean
    timeadm?: boolean
    datedsc?: boolean
    timedsc?: boolean
    dischs?: boolean
    discht?: boolean
    warddsc?: boolean
    dept?: boolean
    adm_w?: boolean
    uuc?: boolean
    svctype?: boolean
  }


  export type $t_ipdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_ipd"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hn: string
      an: string
      dateadm: string
      timeadm: string
      datedsc: string
      timedsc: string
      dischs: string
      discht: string
      warddsc: string | null
      dept: string | null
      adm_w: string
      uuc: string
      svctype: string
    }, ExtArgs["result"]["t_ipd"]>
    composites: {}
  }


  type t_ipdGetPayload<S extends boolean | null | undefined | t_ipdDefaultArgs> = $Result.GetResult<Prisma.$t_ipdPayload, S>

  type t_ipdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_ipdFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_ipdCountAggregateInputType | true
    }

  export interface t_ipdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_ipd'], meta: { name: 't_ipd' } }
    /**
     * Find zero or one T_ipd that matches the filter.
     * @param {t_ipdFindUniqueArgs} args - Arguments to find a T_ipd
     * @example
     * // Get one T_ipd
     * const t_ipd = await prisma.t_ipd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_ipdFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_ipdFindUniqueArgs<ExtArgs>>
    ): Prisma__t_ipdClient<$Result.GetResult<Prisma.$t_ipdPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_ipd that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_ipdFindUniqueOrThrowArgs} args - Arguments to find a T_ipd
     * @example
     * // Get one T_ipd
     * const t_ipd = await prisma.t_ipd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_ipdFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_ipdFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_ipdClient<$Result.GetResult<Prisma.$t_ipdPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_ipd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_ipdFindFirstArgs} args - Arguments to find a T_ipd
     * @example
     * // Get one T_ipd
     * const t_ipd = await prisma.t_ipd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_ipdFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_ipdFindFirstArgs<ExtArgs>>
    ): Prisma__t_ipdClient<$Result.GetResult<Prisma.$t_ipdPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_ipd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_ipdFindFirstOrThrowArgs} args - Arguments to find a T_ipd
     * @example
     * // Get one T_ipd
     * const t_ipd = await prisma.t_ipd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_ipdFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_ipdFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_ipdClient<$Result.GetResult<Prisma.$t_ipdPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_ipds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_ipdFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_ipds
     * const t_ipds = await prisma.t_ipd.findMany()
     * 
     * // Get first 10 T_ipds
     * const t_ipds = await prisma.t_ipd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_ipdWithIdOnly = await prisma.t_ipd.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_ipdFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_ipdFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_ipdPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_ipd.
     * @param {t_ipdCreateArgs} args - Arguments to create a T_ipd.
     * @example
     * // Create one T_ipd
     * const T_ipd = await prisma.t_ipd.create({
     *   data: {
     *     // ... data to create a T_ipd
     *   }
     * })
     * 
    **/
    create<T extends t_ipdCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_ipdCreateArgs<ExtArgs>>
    ): Prisma__t_ipdClient<$Result.GetResult<Prisma.$t_ipdPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_ipds.
     *     @param {t_ipdCreateManyArgs} args - Arguments to create many T_ipds.
     *     @example
     *     // Create many T_ipds
     *     const t_ipd = await prisma.t_ipd.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_ipdCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_ipdCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_ipd.
     * @param {t_ipdDeleteArgs} args - Arguments to delete one T_ipd.
     * @example
     * // Delete one T_ipd
     * const T_ipd = await prisma.t_ipd.delete({
     *   where: {
     *     // ... filter to delete one T_ipd
     *   }
     * })
     * 
    **/
    delete<T extends t_ipdDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_ipdDeleteArgs<ExtArgs>>
    ): Prisma__t_ipdClient<$Result.GetResult<Prisma.$t_ipdPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_ipd.
     * @param {t_ipdUpdateArgs} args - Arguments to update one T_ipd.
     * @example
     * // Update one T_ipd
     * const t_ipd = await prisma.t_ipd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_ipdUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_ipdUpdateArgs<ExtArgs>>
    ): Prisma__t_ipdClient<$Result.GetResult<Prisma.$t_ipdPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_ipds.
     * @param {t_ipdDeleteManyArgs} args - Arguments to filter T_ipds to delete.
     * @example
     * // Delete a few T_ipds
     * const { count } = await prisma.t_ipd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_ipdDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_ipdDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_ipds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_ipdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_ipds
     * const t_ipd = await prisma.t_ipd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_ipdUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_ipdUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_ipd.
     * @param {t_ipdUpsertArgs} args - Arguments to update or create a T_ipd.
     * @example
     * // Update or create a T_ipd
     * const t_ipd = await prisma.t_ipd.upsert({
     *   create: {
     *     // ... data to create a T_ipd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_ipd we want to update
     *   }
     * })
    **/
    upsert<T extends t_ipdUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_ipdUpsertArgs<ExtArgs>>
    ): Prisma__t_ipdClient<$Result.GetResult<Prisma.$t_ipdPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_ipds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_ipdCountArgs} args - Arguments to filter T_ipds to count.
     * @example
     * // Count the number of T_ipds
     * const count = await prisma.t_ipd.count({
     *   where: {
     *     // ... the filter for the T_ipds we want to count
     *   }
     * })
    **/
    count<T extends t_ipdCountArgs>(
      args?: Subset<T, t_ipdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_ipdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_ipd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_ipdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_ipdAggregateArgs>(args: Subset<T, T_ipdAggregateArgs>): Prisma.PrismaPromise<GetT_ipdAggregateType<T>>

    /**
     * Group by T_ipd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_ipdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_ipdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_ipdGroupByArgs['orderBy'] }
        : { orderBy?: t_ipdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_ipdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_ipdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_ipd model
   */
  readonly fields: t_ipdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_ipd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_ipdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_ipd model
   */ 
  interface t_ipdFieldRefs {
    readonly id: FieldRef<"t_ipd", 'String'>
    readonly hn: FieldRef<"t_ipd", 'String'>
    readonly an: FieldRef<"t_ipd", 'String'>
    readonly dateadm: FieldRef<"t_ipd", 'String'>
    readonly timeadm: FieldRef<"t_ipd", 'String'>
    readonly datedsc: FieldRef<"t_ipd", 'String'>
    readonly timedsc: FieldRef<"t_ipd", 'String'>
    readonly dischs: FieldRef<"t_ipd", 'String'>
    readonly discht: FieldRef<"t_ipd", 'String'>
    readonly warddsc: FieldRef<"t_ipd", 'String'>
    readonly dept: FieldRef<"t_ipd", 'String'>
    readonly adm_w: FieldRef<"t_ipd", 'String'>
    readonly uuc: FieldRef<"t_ipd", 'String'>
    readonly svctype: FieldRef<"t_ipd", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_ipd findUnique
   */
  export type t_ipdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ipd
     */
    select?: t_ipdSelect<ExtArgs> | null
    /**
     * Filter, which t_ipd to fetch.
     */
    where: t_ipdWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ipd findUniqueOrThrow
   */
  export type t_ipdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ipd
     */
    select?: t_ipdSelect<ExtArgs> | null
    /**
     * Filter, which t_ipd to fetch.
     */
    where: t_ipdWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ipd findFirst
   */
  export type t_ipdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ipd
     */
    select?: t_ipdSelect<ExtArgs> | null
    /**
     * Filter, which t_ipd to fetch.
     */
    where?: t_ipdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_ipds to fetch.
     */
    orderBy?: t_ipdOrderByWithRelationInput | t_ipdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_ipds.
     */
    cursor?: t_ipdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_ipds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_ipds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_ipds.
     */
    distinct?: T_ipdScalarFieldEnum | T_ipdScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ipd findFirstOrThrow
   */
  export type t_ipdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ipd
     */
    select?: t_ipdSelect<ExtArgs> | null
    /**
     * Filter, which t_ipd to fetch.
     */
    where?: t_ipdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_ipds to fetch.
     */
    orderBy?: t_ipdOrderByWithRelationInput | t_ipdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_ipds.
     */
    cursor?: t_ipdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_ipds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_ipds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_ipds.
     */
    distinct?: T_ipdScalarFieldEnum | T_ipdScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ipd findMany
   */
  export type t_ipdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ipd
     */
    select?: t_ipdSelect<ExtArgs> | null
    /**
     * Filter, which t_ipds to fetch.
     */
    where?: t_ipdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_ipds to fetch.
     */
    orderBy?: t_ipdOrderByWithRelationInput | t_ipdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_ipds.
     */
    cursor?: t_ipdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_ipds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_ipds.
     */
    skip?: number
    distinct?: T_ipdScalarFieldEnum | T_ipdScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ipd create
   */
  export type t_ipdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ipd
     */
    select?: t_ipdSelect<ExtArgs> | null
    /**
     * The data needed to create a t_ipd.
     */
    data: XOR<t_ipdCreateInput, t_ipdUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ipd createMany
   */
  export type t_ipdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_ipds.
     */
    data: t_ipdCreateManyInput | t_ipdCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_ipd update
   */
  export type t_ipdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ipd
     */
    select?: t_ipdSelect<ExtArgs> | null
    /**
     * The data needed to update a t_ipd.
     */
    data: XOR<t_ipdUpdateInput, t_ipdUncheckedUpdateInput>
    /**
     * Choose, which t_ipd to update.
     */
    where: t_ipdWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ipd updateMany
   */
  export type t_ipdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_ipds.
     */
    data: XOR<t_ipdUpdateManyMutationInput, t_ipdUncheckedUpdateManyInput>
    /**
     * Filter which t_ipds to update
     */
    where?: t_ipdWhereInput
  }


  /**
   * t_ipd upsert
   */
  export type t_ipdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ipd
     */
    select?: t_ipdSelect<ExtArgs> | null
    /**
     * The filter to search for the t_ipd to update in case it exists.
     */
    where: t_ipdWhereUniqueInput
    /**
     * In case the t_ipd found by the `where` argument doesn't exist, create a new t_ipd with this data.
     */
    create: XOR<t_ipdCreateInput, t_ipdUncheckedCreateInput>
    /**
     * In case the t_ipd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_ipdUpdateInput, t_ipdUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ipd delete
   */
  export type t_ipdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ipd
     */
    select?: t_ipdSelect<ExtArgs> | null
    /**
     * Filter which t_ipd to delete.
     */
    where: t_ipdWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_ipd deleteMany
   */
  export type t_ipdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_ipds to delete
     */
    where?: t_ipdWhereInput
  }


  /**
   * t_ipd without action
   */
  export type t_ipdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ipd
     */
    select?: t_ipdSelect<ExtArgs> | null
  }



  /**
   * Model t_irf
   */

  export type AggregateT_irf = {
    _count: T_irfCountAggregateOutputType | null
    _min: T_irfMinAggregateOutputType | null
    _max: T_irfMaxAggregateOutputType | null
  }

  export type T_irfMinAggregateOutputType = {
    id: string | null
    an: string | null
    refer: string | null
    refertype: string | null
  }

  export type T_irfMaxAggregateOutputType = {
    id: string | null
    an: string | null
    refer: string | null
    refertype: string | null
  }

  export type T_irfCountAggregateOutputType = {
    id: number
    an: number
    refer: number
    refertype: number
    _all: number
  }


  export type T_irfMinAggregateInputType = {
    id?: true
    an?: true
    refer?: true
    refertype?: true
  }

  export type T_irfMaxAggregateInputType = {
    id?: true
    an?: true
    refer?: true
    refertype?: true
  }

  export type T_irfCountAggregateInputType = {
    id?: true
    an?: true
    refer?: true
    refertype?: true
    _all?: true
  }

  export type T_irfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_irf to aggregate.
     */
    where?: t_irfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_irfs to fetch.
     */
    orderBy?: t_irfOrderByWithRelationInput | t_irfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_irfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_irfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_irfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_irfs
    **/
    _count?: true | T_irfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_irfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_irfMaxAggregateInputType
  }

  export type GetT_irfAggregateType<T extends T_irfAggregateArgs> = {
        [P in keyof T & keyof AggregateT_irf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_irf[P]>
      : GetScalarType<T[P], AggregateT_irf[P]>
  }




  export type t_irfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_irfWhereInput
    orderBy?: t_irfOrderByWithAggregationInput | t_irfOrderByWithAggregationInput[]
    by: T_irfScalarFieldEnum[] | T_irfScalarFieldEnum
    having?: t_irfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_irfCountAggregateInputType | true
    _min?: T_irfMinAggregateInputType
    _max?: T_irfMaxAggregateInputType
  }

  export type T_irfGroupByOutputType = {
    id: string
    an: string
    refer: string
    refertype: string
    _count: T_irfCountAggregateOutputType | null
    _min: T_irfMinAggregateOutputType | null
    _max: T_irfMaxAggregateOutputType | null
  }

  type GetT_irfGroupByPayload<T extends t_irfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_irfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_irfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_irfGroupByOutputType[P]>
            : GetScalarType<T[P], T_irfGroupByOutputType[P]>
        }
      >
    >


  export type t_irfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    an?: boolean
    refer?: boolean
    refertype?: boolean
  }, ExtArgs["result"]["t_irf"]>

  export type t_irfSelectScalar = {
    id?: boolean
    an?: boolean
    refer?: boolean
    refertype?: boolean
  }


  export type $t_irfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_irf"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      an: string
      refer: string
      refertype: string
    }, ExtArgs["result"]["t_irf"]>
    composites: {}
  }


  type t_irfGetPayload<S extends boolean | null | undefined | t_irfDefaultArgs> = $Result.GetResult<Prisma.$t_irfPayload, S>

  type t_irfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_irfFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_irfCountAggregateInputType | true
    }

  export interface t_irfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_irf'], meta: { name: 't_irf' } }
    /**
     * Find zero or one T_irf that matches the filter.
     * @param {t_irfFindUniqueArgs} args - Arguments to find a T_irf
     * @example
     * // Get one T_irf
     * const t_irf = await prisma.t_irf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_irfFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_irfFindUniqueArgs<ExtArgs>>
    ): Prisma__t_irfClient<$Result.GetResult<Prisma.$t_irfPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_irf that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_irfFindUniqueOrThrowArgs} args - Arguments to find a T_irf
     * @example
     * // Get one T_irf
     * const t_irf = await prisma.t_irf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_irfFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_irfFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_irfClient<$Result.GetResult<Prisma.$t_irfPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_irf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_irfFindFirstArgs} args - Arguments to find a T_irf
     * @example
     * // Get one T_irf
     * const t_irf = await prisma.t_irf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_irfFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_irfFindFirstArgs<ExtArgs>>
    ): Prisma__t_irfClient<$Result.GetResult<Prisma.$t_irfPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_irf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_irfFindFirstOrThrowArgs} args - Arguments to find a T_irf
     * @example
     * // Get one T_irf
     * const t_irf = await prisma.t_irf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_irfFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_irfFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_irfClient<$Result.GetResult<Prisma.$t_irfPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_irfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_irfFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_irfs
     * const t_irfs = await prisma.t_irf.findMany()
     * 
     * // Get first 10 T_irfs
     * const t_irfs = await prisma.t_irf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_irfWithIdOnly = await prisma.t_irf.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_irfFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_irfFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_irfPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_irf.
     * @param {t_irfCreateArgs} args - Arguments to create a T_irf.
     * @example
     * // Create one T_irf
     * const T_irf = await prisma.t_irf.create({
     *   data: {
     *     // ... data to create a T_irf
     *   }
     * })
     * 
    **/
    create<T extends t_irfCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_irfCreateArgs<ExtArgs>>
    ): Prisma__t_irfClient<$Result.GetResult<Prisma.$t_irfPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_irfs.
     *     @param {t_irfCreateManyArgs} args - Arguments to create many T_irfs.
     *     @example
     *     // Create many T_irfs
     *     const t_irf = await prisma.t_irf.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_irfCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_irfCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_irf.
     * @param {t_irfDeleteArgs} args - Arguments to delete one T_irf.
     * @example
     * // Delete one T_irf
     * const T_irf = await prisma.t_irf.delete({
     *   where: {
     *     // ... filter to delete one T_irf
     *   }
     * })
     * 
    **/
    delete<T extends t_irfDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_irfDeleteArgs<ExtArgs>>
    ): Prisma__t_irfClient<$Result.GetResult<Prisma.$t_irfPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_irf.
     * @param {t_irfUpdateArgs} args - Arguments to update one T_irf.
     * @example
     * // Update one T_irf
     * const t_irf = await prisma.t_irf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_irfUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_irfUpdateArgs<ExtArgs>>
    ): Prisma__t_irfClient<$Result.GetResult<Prisma.$t_irfPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_irfs.
     * @param {t_irfDeleteManyArgs} args - Arguments to filter T_irfs to delete.
     * @example
     * // Delete a few T_irfs
     * const { count } = await prisma.t_irf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_irfDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_irfDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_irfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_irfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_irfs
     * const t_irf = await prisma.t_irf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_irfUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_irfUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_irf.
     * @param {t_irfUpsertArgs} args - Arguments to update or create a T_irf.
     * @example
     * // Update or create a T_irf
     * const t_irf = await prisma.t_irf.upsert({
     *   create: {
     *     // ... data to create a T_irf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_irf we want to update
     *   }
     * })
    **/
    upsert<T extends t_irfUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_irfUpsertArgs<ExtArgs>>
    ): Prisma__t_irfClient<$Result.GetResult<Prisma.$t_irfPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_irfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_irfCountArgs} args - Arguments to filter T_irfs to count.
     * @example
     * // Count the number of T_irfs
     * const count = await prisma.t_irf.count({
     *   where: {
     *     // ... the filter for the T_irfs we want to count
     *   }
     * })
    **/
    count<T extends t_irfCountArgs>(
      args?: Subset<T, t_irfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_irfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_irf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_irfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_irfAggregateArgs>(args: Subset<T, T_irfAggregateArgs>): Prisma.PrismaPromise<GetT_irfAggregateType<T>>

    /**
     * Group by T_irf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_irfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_irfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_irfGroupByArgs['orderBy'] }
        : { orderBy?: t_irfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_irfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_irfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_irf model
   */
  readonly fields: t_irfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_irf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_irfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_irf model
   */ 
  interface t_irfFieldRefs {
    readonly id: FieldRef<"t_irf", 'String'>
    readonly an: FieldRef<"t_irf", 'String'>
    readonly refer: FieldRef<"t_irf", 'String'>
    readonly refertype: FieldRef<"t_irf", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_irf findUnique
   */
  export type t_irfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_irf
     */
    select?: t_irfSelect<ExtArgs> | null
    /**
     * Filter, which t_irf to fetch.
     */
    where: t_irfWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_irf findUniqueOrThrow
   */
  export type t_irfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_irf
     */
    select?: t_irfSelect<ExtArgs> | null
    /**
     * Filter, which t_irf to fetch.
     */
    where: t_irfWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_irf findFirst
   */
  export type t_irfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_irf
     */
    select?: t_irfSelect<ExtArgs> | null
    /**
     * Filter, which t_irf to fetch.
     */
    where?: t_irfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_irfs to fetch.
     */
    orderBy?: t_irfOrderByWithRelationInput | t_irfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_irfs.
     */
    cursor?: t_irfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_irfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_irfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_irfs.
     */
    distinct?: T_irfScalarFieldEnum | T_irfScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_irf findFirstOrThrow
   */
  export type t_irfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_irf
     */
    select?: t_irfSelect<ExtArgs> | null
    /**
     * Filter, which t_irf to fetch.
     */
    where?: t_irfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_irfs to fetch.
     */
    orderBy?: t_irfOrderByWithRelationInput | t_irfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_irfs.
     */
    cursor?: t_irfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_irfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_irfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_irfs.
     */
    distinct?: T_irfScalarFieldEnum | T_irfScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_irf findMany
   */
  export type t_irfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_irf
     */
    select?: t_irfSelect<ExtArgs> | null
    /**
     * Filter, which t_irfs to fetch.
     */
    where?: t_irfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_irfs to fetch.
     */
    orderBy?: t_irfOrderByWithRelationInput | t_irfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_irfs.
     */
    cursor?: t_irfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_irfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_irfs.
     */
    skip?: number
    distinct?: T_irfScalarFieldEnum | T_irfScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_irf create
   */
  export type t_irfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_irf
     */
    select?: t_irfSelect<ExtArgs> | null
    /**
     * The data needed to create a t_irf.
     */
    data: XOR<t_irfCreateInput, t_irfUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_irf createMany
   */
  export type t_irfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_irfs.
     */
    data: t_irfCreateManyInput | t_irfCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_irf update
   */
  export type t_irfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_irf
     */
    select?: t_irfSelect<ExtArgs> | null
    /**
     * The data needed to update a t_irf.
     */
    data: XOR<t_irfUpdateInput, t_irfUncheckedUpdateInput>
    /**
     * Choose, which t_irf to update.
     */
    where: t_irfWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_irf updateMany
   */
  export type t_irfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_irfs.
     */
    data: XOR<t_irfUpdateManyMutationInput, t_irfUncheckedUpdateManyInput>
    /**
     * Filter which t_irfs to update
     */
    where?: t_irfWhereInput
  }


  /**
   * t_irf upsert
   */
  export type t_irfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_irf
     */
    select?: t_irfSelect<ExtArgs> | null
    /**
     * The filter to search for the t_irf to update in case it exists.
     */
    where: t_irfWhereUniqueInput
    /**
     * In case the t_irf found by the `where` argument doesn't exist, create a new t_irf with this data.
     */
    create: XOR<t_irfCreateInput, t_irfUncheckedCreateInput>
    /**
     * In case the t_irf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_irfUpdateInput, t_irfUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_irf delete
   */
  export type t_irfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_irf
     */
    select?: t_irfSelect<ExtArgs> | null
    /**
     * Filter which t_irf to delete.
     */
    where: t_irfWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_irf deleteMany
   */
  export type t_irfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_irfs to delete
     */
    where?: t_irfWhereInput
  }


  /**
   * t_irf without action
   */
  export type t_irfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_irf
     */
    select?: t_irfSelect<ExtArgs> | null
  }



  /**
   * Model t_idx
   */

  export type AggregateT_idx = {
    _count: T_idxCountAggregateOutputType | null
    _min: T_idxMinAggregateOutputType | null
    _max: T_idxMaxAggregateOutputType | null
  }

  export type T_idxMinAggregateOutputType = {
    id: string | null
    an: string | null
    diag: string | null
    dxtype: string | null
    drdx: string | null
  }

  export type T_idxMaxAggregateOutputType = {
    id: string | null
    an: string | null
    diag: string | null
    dxtype: string | null
    drdx: string | null
  }

  export type T_idxCountAggregateOutputType = {
    id: number
    an: number
    diag: number
    dxtype: number
    drdx: number
    _all: number
  }


  export type T_idxMinAggregateInputType = {
    id?: true
    an?: true
    diag?: true
    dxtype?: true
    drdx?: true
  }

  export type T_idxMaxAggregateInputType = {
    id?: true
    an?: true
    diag?: true
    dxtype?: true
    drdx?: true
  }

  export type T_idxCountAggregateInputType = {
    id?: true
    an?: true
    diag?: true
    dxtype?: true
    drdx?: true
    _all?: true
  }

  export type T_idxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_idx to aggregate.
     */
    where?: t_idxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_idxes to fetch.
     */
    orderBy?: t_idxOrderByWithRelationInput | t_idxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_idxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_idxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_idxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_idxes
    **/
    _count?: true | T_idxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_idxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_idxMaxAggregateInputType
  }

  export type GetT_idxAggregateType<T extends T_idxAggregateArgs> = {
        [P in keyof T & keyof AggregateT_idx]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_idx[P]>
      : GetScalarType<T[P], AggregateT_idx[P]>
  }




  export type t_idxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_idxWhereInput
    orderBy?: t_idxOrderByWithAggregationInput | t_idxOrderByWithAggregationInput[]
    by: T_idxScalarFieldEnum[] | T_idxScalarFieldEnum
    having?: t_idxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_idxCountAggregateInputType | true
    _min?: T_idxMinAggregateInputType
    _max?: T_idxMaxAggregateInputType
  }

  export type T_idxGroupByOutputType = {
    id: string
    an: string
    diag: string
    dxtype: string
    drdx: string
    _count: T_idxCountAggregateOutputType | null
    _min: T_idxMinAggregateOutputType | null
    _max: T_idxMaxAggregateOutputType | null
  }

  type GetT_idxGroupByPayload<T extends t_idxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_idxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_idxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_idxGroupByOutputType[P]>
            : GetScalarType<T[P], T_idxGroupByOutputType[P]>
        }
      >
    >


  export type t_idxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    an?: boolean
    diag?: boolean
    dxtype?: boolean
    drdx?: boolean
  }, ExtArgs["result"]["t_idx"]>

  export type t_idxSelectScalar = {
    id?: boolean
    an?: boolean
    diag?: boolean
    dxtype?: boolean
    drdx?: boolean
  }


  export type $t_idxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_idx"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      an: string
      diag: string
      dxtype: string
      drdx: string
    }, ExtArgs["result"]["t_idx"]>
    composites: {}
  }


  type t_idxGetPayload<S extends boolean | null | undefined | t_idxDefaultArgs> = $Result.GetResult<Prisma.$t_idxPayload, S>

  type t_idxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_idxFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_idxCountAggregateInputType | true
    }

  export interface t_idxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_idx'], meta: { name: 't_idx' } }
    /**
     * Find zero or one T_idx that matches the filter.
     * @param {t_idxFindUniqueArgs} args - Arguments to find a T_idx
     * @example
     * // Get one T_idx
     * const t_idx = await prisma.t_idx.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_idxFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_idxFindUniqueArgs<ExtArgs>>
    ): Prisma__t_idxClient<$Result.GetResult<Prisma.$t_idxPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_idx that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_idxFindUniqueOrThrowArgs} args - Arguments to find a T_idx
     * @example
     * // Get one T_idx
     * const t_idx = await prisma.t_idx.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_idxFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_idxFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_idxClient<$Result.GetResult<Prisma.$t_idxPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_idx that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_idxFindFirstArgs} args - Arguments to find a T_idx
     * @example
     * // Get one T_idx
     * const t_idx = await prisma.t_idx.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_idxFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_idxFindFirstArgs<ExtArgs>>
    ): Prisma__t_idxClient<$Result.GetResult<Prisma.$t_idxPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_idx that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_idxFindFirstOrThrowArgs} args - Arguments to find a T_idx
     * @example
     * // Get one T_idx
     * const t_idx = await prisma.t_idx.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_idxFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_idxFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_idxClient<$Result.GetResult<Prisma.$t_idxPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_idxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_idxFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_idxes
     * const t_idxes = await prisma.t_idx.findMany()
     * 
     * // Get first 10 T_idxes
     * const t_idxes = await prisma.t_idx.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_idxWithIdOnly = await prisma.t_idx.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_idxFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_idxFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_idxPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_idx.
     * @param {t_idxCreateArgs} args - Arguments to create a T_idx.
     * @example
     * // Create one T_idx
     * const T_idx = await prisma.t_idx.create({
     *   data: {
     *     // ... data to create a T_idx
     *   }
     * })
     * 
    **/
    create<T extends t_idxCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_idxCreateArgs<ExtArgs>>
    ): Prisma__t_idxClient<$Result.GetResult<Prisma.$t_idxPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_idxes.
     *     @param {t_idxCreateManyArgs} args - Arguments to create many T_idxes.
     *     @example
     *     // Create many T_idxes
     *     const t_idx = await prisma.t_idx.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_idxCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_idxCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_idx.
     * @param {t_idxDeleteArgs} args - Arguments to delete one T_idx.
     * @example
     * // Delete one T_idx
     * const T_idx = await prisma.t_idx.delete({
     *   where: {
     *     // ... filter to delete one T_idx
     *   }
     * })
     * 
    **/
    delete<T extends t_idxDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_idxDeleteArgs<ExtArgs>>
    ): Prisma__t_idxClient<$Result.GetResult<Prisma.$t_idxPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_idx.
     * @param {t_idxUpdateArgs} args - Arguments to update one T_idx.
     * @example
     * // Update one T_idx
     * const t_idx = await prisma.t_idx.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_idxUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_idxUpdateArgs<ExtArgs>>
    ): Prisma__t_idxClient<$Result.GetResult<Prisma.$t_idxPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_idxes.
     * @param {t_idxDeleteManyArgs} args - Arguments to filter T_idxes to delete.
     * @example
     * // Delete a few T_idxes
     * const { count } = await prisma.t_idx.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_idxDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_idxDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_idxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_idxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_idxes
     * const t_idx = await prisma.t_idx.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_idxUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_idxUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_idx.
     * @param {t_idxUpsertArgs} args - Arguments to update or create a T_idx.
     * @example
     * // Update or create a T_idx
     * const t_idx = await prisma.t_idx.upsert({
     *   create: {
     *     // ... data to create a T_idx
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_idx we want to update
     *   }
     * })
    **/
    upsert<T extends t_idxUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_idxUpsertArgs<ExtArgs>>
    ): Prisma__t_idxClient<$Result.GetResult<Prisma.$t_idxPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_idxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_idxCountArgs} args - Arguments to filter T_idxes to count.
     * @example
     * // Count the number of T_idxes
     * const count = await prisma.t_idx.count({
     *   where: {
     *     // ... the filter for the T_idxes we want to count
     *   }
     * })
    **/
    count<T extends t_idxCountArgs>(
      args?: Subset<T, t_idxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_idxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_idx.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_idxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_idxAggregateArgs>(args: Subset<T, T_idxAggregateArgs>): Prisma.PrismaPromise<GetT_idxAggregateType<T>>

    /**
     * Group by T_idx.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_idxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_idxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_idxGroupByArgs['orderBy'] }
        : { orderBy?: t_idxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_idxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_idxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_idx model
   */
  readonly fields: t_idxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_idx.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_idxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_idx model
   */ 
  interface t_idxFieldRefs {
    readonly id: FieldRef<"t_idx", 'String'>
    readonly an: FieldRef<"t_idx", 'String'>
    readonly diag: FieldRef<"t_idx", 'String'>
    readonly dxtype: FieldRef<"t_idx", 'String'>
    readonly drdx: FieldRef<"t_idx", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_idx findUnique
   */
  export type t_idxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_idx
     */
    select?: t_idxSelect<ExtArgs> | null
    /**
     * Filter, which t_idx to fetch.
     */
    where: t_idxWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_idx findUniqueOrThrow
   */
  export type t_idxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_idx
     */
    select?: t_idxSelect<ExtArgs> | null
    /**
     * Filter, which t_idx to fetch.
     */
    where: t_idxWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_idx findFirst
   */
  export type t_idxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_idx
     */
    select?: t_idxSelect<ExtArgs> | null
    /**
     * Filter, which t_idx to fetch.
     */
    where?: t_idxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_idxes to fetch.
     */
    orderBy?: t_idxOrderByWithRelationInput | t_idxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_idxes.
     */
    cursor?: t_idxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_idxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_idxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_idxes.
     */
    distinct?: T_idxScalarFieldEnum | T_idxScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_idx findFirstOrThrow
   */
  export type t_idxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_idx
     */
    select?: t_idxSelect<ExtArgs> | null
    /**
     * Filter, which t_idx to fetch.
     */
    where?: t_idxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_idxes to fetch.
     */
    orderBy?: t_idxOrderByWithRelationInput | t_idxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_idxes.
     */
    cursor?: t_idxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_idxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_idxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_idxes.
     */
    distinct?: T_idxScalarFieldEnum | T_idxScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_idx findMany
   */
  export type t_idxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_idx
     */
    select?: t_idxSelect<ExtArgs> | null
    /**
     * Filter, which t_idxes to fetch.
     */
    where?: t_idxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_idxes to fetch.
     */
    orderBy?: t_idxOrderByWithRelationInput | t_idxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_idxes.
     */
    cursor?: t_idxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_idxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_idxes.
     */
    skip?: number
    distinct?: T_idxScalarFieldEnum | T_idxScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_idx create
   */
  export type t_idxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_idx
     */
    select?: t_idxSelect<ExtArgs> | null
    /**
     * The data needed to create a t_idx.
     */
    data: XOR<t_idxCreateInput, t_idxUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_idx createMany
   */
  export type t_idxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_idxes.
     */
    data: t_idxCreateManyInput | t_idxCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_idx update
   */
  export type t_idxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_idx
     */
    select?: t_idxSelect<ExtArgs> | null
    /**
     * The data needed to update a t_idx.
     */
    data: XOR<t_idxUpdateInput, t_idxUncheckedUpdateInput>
    /**
     * Choose, which t_idx to update.
     */
    where: t_idxWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_idx updateMany
   */
  export type t_idxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_idxes.
     */
    data: XOR<t_idxUpdateManyMutationInput, t_idxUncheckedUpdateManyInput>
    /**
     * Filter which t_idxes to update
     */
    where?: t_idxWhereInput
  }


  /**
   * t_idx upsert
   */
  export type t_idxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_idx
     */
    select?: t_idxSelect<ExtArgs> | null
    /**
     * The filter to search for the t_idx to update in case it exists.
     */
    where: t_idxWhereUniqueInput
    /**
     * In case the t_idx found by the `where` argument doesn't exist, create a new t_idx with this data.
     */
    create: XOR<t_idxCreateInput, t_idxUncheckedCreateInput>
    /**
     * In case the t_idx was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_idxUpdateInput, t_idxUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_idx delete
   */
  export type t_idxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_idx
     */
    select?: t_idxSelect<ExtArgs> | null
    /**
     * Filter which t_idx to delete.
     */
    where: t_idxWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_idx deleteMany
   */
  export type t_idxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_idxes to delete
     */
    where?: t_idxWhereInput
  }


  /**
   * t_idx without action
   */
  export type t_idxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_idx
     */
    select?: t_idxSelect<ExtArgs> | null
  }



  /**
   * Model t_iop
   */

  export type AggregateT_iop = {
    _count: T_iopCountAggregateOutputType | null
    _min: T_iopMinAggregateOutputType | null
    _max: T_iopMaxAggregateOutputType | null
  }

  export type T_iopMinAggregateOutputType = {
    id: string | null
    an: string | null
    oper: string | null
    optype: string | null
    dropid: string | null
    datein: string | null
    timein: string | null
    dateout: string | null
    timeout: string | null
  }

  export type T_iopMaxAggregateOutputType = {
    id: string | null
    an: string | null
    oper: string | null
    optype: string | null
    dropid: string | null
    datein: string | null
    timein: string | null
    dateout: string | null
    timeout: string | null
  }

  export type T_iopCountAggregateOutputType = {
    id: number
    an: number
    oper: number
    optype: number
    dropid: number
    datein: number
    timein: number
    dateout: number
    timeout: number
    _all: number
  }


  export type T_iopMinAggregateInputType = {
    id?: true
    an?: true
    oper?: true
    optype?: true
    dropid?: true
    datein?: true
    timein?: true
    dateout?: true
    timeout?: true
  }

  export type T_iopMaxAggregateInputType = {
    id?: true
    an?: true
    oper?: true
    optype?: true
    dropid?: true
    datein?: true
    timein?: true
    dateout?: true
    timeout?: true
  }

  export type T_iopCountAggregateInputType = {
    id?: true
    an?: true
    oper?: true
    optype?: true
    dropid?: true
    datein?: true
    timein?: true
    dateout?: true
    timeout?: true
    _all?: true
  }

  export type T_iopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_iop to aggregate.
     */
    where?: t_iopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_iops to fetch.
     */
    orderBy?: t_iopOrderByWithRelationInput | t_iopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_iopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_iops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_iops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_iops
    **/
    _count?: true | T_iopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_iopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_iopMaxAggregateInputType
  }

  export type GetT_iopAggregateType<T extends T_iopAggregateArgs> = {
        [P in keyof T & keyof AggregateT_iop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_iop[P]>
      : GetScalarType<T[P], AggregateT_iop[P]>
  }




  export type t_iopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_iopWhereInput
    orderBy?: t_iopOrderByWithAggregationInput | t_iopOrderByWithAggregationInput[]
    by: T_iopScalarFieldEnum[] | T_iopScalarFieldEnum
    having?: t_iopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_iopCountAggregateInputType | true
    _min?: T_iopMinAggregateInputType
    _max?: T_iopMaxAggregateInputType
  }

  export type T_iopGroupByOutputType = {
    id: string
    an: string
    oper: string
    optype: string | null
    dropid: string
    datein: string
    timein: string
    dateout: string | null
    timeout: string | null
    _count: T_iopCountAggregateOutputType | null
    _min: T_iopMinAggregateOutputType | null
    _max: T_iopMaxAggregateOutputType | null
  }

  type GetT_iopGroupByPayload<T extends t_iopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_iopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_iopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_iopGroupByOutputType[P]>
            : GetScalarType<T[P], T_iopGroupByOutputType[P]>
        }
      >
    >


  export type t_iopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    an?: boolean
    oper?: boolean
    optype?: boolean
    dropid?: boolean
    datein?: boolean
    timein?: boolean
    dateout?: boolean
    timeout?: boolean
  }, ExtArgs["result"]["t_iop"]>

  export type t_iopSelectScalar = {
    id?: boolean
    an?: boolean
    oper?: boolean
    optype?: boolean
    dropid?: boolean
    datein?: boolean
    timein?: boolean
    dateout?: boolean
    timeout?: boolean
  }


  export type $t_iopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_iop"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      an: string
      oper: string
      optype: string | null
      dropid: string
      datein: string
      timein: string
      dateout: string | null
      timeout: string | null
    }, ExtArgs["result"]["t_iop"]>
    composites: {}
  }


  type t_iopGetPayload<S extends boolean | null | undefined | t_iopDefaultArgs> = $Result.GetResult<Prisma.$t_iopPayload, S>

  type t_iopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_iopFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_iopCountAggregateInputType | true
    }

  export interface t_iopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_iop'], meta: { name: 't_iop' } }
    /**
     * Find zero or one T_iop that matches the filter.
     * @param {t_iopFindUniqueArgs} args - Arguments to find a T_iop
     * @example
     * // Get one T_iop
     * const t_iop = await prisma.t_iop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_iopFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_iopFindUniqueArgs<ExtArgs>>
    ): Prisma__t_iopClient<$Result.GetResult<Prisma.$t_iopPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_iop that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_iopFindUniqueOrThrowArgs} args - Arguments to find a T_iop
     * @example
     * // Get one T_iop
     * const t_iop = await prisma.t_iop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_iopFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_iopFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_iopClient<$Result.GetResult<Prisma.$t_iopPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_iop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_iopFindFirstArgs} args - Arguments to find a T_iop
     * @example
     * // Get one T_iop
     * const t_iop = await prisma.t_iop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_iopFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_iopFindFirstArgs<ExtArgs>>
    ): Prisma__t_iopClient<$Result.GetResult<Prisma.$t_iopPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_iop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_iopFindFirstOrThrowArgs} args - Arguments to find a T_iop
     * @example
     * // Get one T_iop
     * const t_iop = await prisma.t_iop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_iopFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_iopFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_iopClient<$Result.GetResult<Prisma.$t_iopPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_iops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_iopFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_iops
     * const t_iops = await prisma.t_iop.findMany()
     * 
     * // Get first 10 T_iops
     * const t_iops = await prisma.t_iop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_iopWithIdOnly = await prisma.t_iop.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_iopFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_iopFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_iopPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_iop.
     * @param {t_iopCreateArgs} args - Arguments to create a T_iop.
     * @example
     * // Create one T_iop
     * const T_iop = await prisma.t_iop.create({
     *   data: {
     *     // ... data to create a T_iop
     *   }
     * })
     * 
    **/
    create<T extends t_iopCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_iopCreateArgs<ExtArgs>>
    ): Prisma__t_iopClient<$Result.GetResult<Prisma.$t_iopPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_iops.
     *     @param {t_iopCreateManyArgs} args - Arguments to create many T_iops.
     *     @example
     *     // Create many T_iops
     *     const t_iop = await prisma.t_iop.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_iopCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_iopCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_iop.
     * @param {t_iopDeleteArgs} args - Arguments to delete one T_iop.
     * @example
     * // Delete one T_iop
     * const T_iop = await prisma.t_iop.delete({
     *   where: {
     *     // ... filter to delete one T_iop
     *   }
     * })
     * 
    **/
    delete<T extends t_iopDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_iopDeleteArgs<ExtArgs>>
    ): Prisma__t_iopClient<$Result.GetResult<Prisma.$t_iopPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_iop.
     * @param {t_iopUpdateArgs} args - Arguments to update one T_iop.
     * @example
     * // Update one T_iop
     * const t_iop = await prisma.t_iop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_iopUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_iopUpdateArgs<ExtArgs>>
    ): Prisma__t_iopClient<$Result.GetResult<Prisma.$t_iopPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_iops.
     * @param {t_iopDeleteManyArgs} args - Arguments to filter T_iops to delete.
     * @example
     * // Delete a few T_iops
     * const { count } = await prisma.t_iop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_iopDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_iopDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_iops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_iopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_iops
     * const t_iop = await prisma.t_iop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_iopUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_iopUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_iop.
     * @param {t_iopUpsertArgs} args - Arguments to update or create a T_iop.
     * @example
     * // Update or create a T_iop
     * const t_iop = await prisma.t_iop.upsert({
     *   create: {
     *     // ... data to create a T_iop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_iop we want to update
     *   }
     * })
    **/
    upsert<T extends t_iopUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_iopUpsertArgs<ExtArgs>>
    ): Prisma__t_iopClient<$Result.GetResult<Prisma.$t_iopPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_iops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_iopCountArgs} args - Arguments to filter T_iops to count.
     * @example
     * // Count the number of T_iops
     * const count = await prisma.t_iop.count({
     *   where: {
     *     // ... the filter for the T_iops we want to count
     *   }
     * })
    **/
    count<T extends t_iopCountArgs>(
      args?: Subset<T, t_iopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_iopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_iop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_iopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_iopAggregateArgs>(args: Subset<T, T_iopAggregateArgs>): Prisma.PrismaPromise<GetT_iopAggregateType<T>>

    /**
     * Group by T_iop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_iopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_iopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_iopGroupByArgs['orderBy'] }
        : { orderBy?: t_iopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_iopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_iopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_iop model
   */
  readonly fields: t_iopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_iop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_iopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_iop model
   */ 
  interface t_iopFieldRefs {
    readonly id: FieldRef<"t_iop", 'String'>
    readonly an: FieldRef<"t_iop", 'String'>
    readonly oper: FieldRef<"t_iop", 'String'>
    readonly optype: FieldRef<"t_iop", 'String'>
    readonly dropid: FieldRef<"t_iop", 'String'>
    readonly datein: FieldRef<"t_iop", 'String'>
    readonly timein: FieldRef<"t_iop", 'String'>
    readonly dateout: FieldRef<"t_iop", 'String'>
    readonly timeout: FieldRef<"t_iop", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_iop findUnique
   */
  export type t_iopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_iop
     */
    select?: t_iopSelect<ExtArgs> | null
    /**
     * Filter, which t_iop to fetch.
     */
    where: t_iopWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_iop findUniqueOrThrow
   */
  export type t_iopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_iop
     */
    select?: t_iopSelect<ExtArgs> | null
    /**
     * Filter, which t_iop to fetch.
     */
    where: t_iopWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_iop findFirst
   */
  export type t_iopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_iop
     */
    select?: t_iopSelect<ExtArgs> | null
    /**
     * Filter, which t_iop to fetch.
     */
    where?: t_iopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_iops to fetch.
     */
    orderBy?: t_iopOrderByWithRelationInput | t_iopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_iops.
     */
    cursor?: t_iopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_iops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_iops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_iops.
     */
    distinct?: T_iopScalarFieldEnum | T_iopScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_iop findFirstOrThrow
   */
  export type t_iopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_iop
     */
    select?: t_iopSelect<ExtArgs> | null
    /**
     * Filter, which t_iop to fetch.
     */
    where?: t_iopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_iops to fetch.
     */
    orderBy?: t_iopOrderByWithRelationInput | t_iopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_iops.
     */
    cursor?: t_iopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_iops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_iops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_iops.
     */
    distinct?: T_iopScalarFieldEnum | T_iopScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_iop findMany
   */
  export type t_iopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_iop
     */
    select?: t_iopSelect<ExtArgs> | null
    /**
     * Filter, which t_iops to fetch.
     */
    where?: t_iopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_iops to fetch.
     */
    orderBy?: t_iopOrderByWithRelationInput | t_iopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_iops.
     */
    cursor?: t_iopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_iops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_iops.
     */
    skip?: number
    distinct?: T_iopScalarFieldEnum | T_iopScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_iop create
   */
  export type t_iopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_iop
     */
    select?: t_iopSelect<ExtArgs> | null
    /**
     * The data needed to create a t_iop.
     */
    data: XOR<t_iopCreateInput, t_iopUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_iop createMany
   */
  export type t_iopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_iops.
     */
    data: t_iopCreateManyInput | t_iopCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_iop update
   */
  export type t_iopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_iop
     */
    select?: t_iopSelect<ExtArgs> | null
    /**
     * The data needed to update a t_iop.
     */
    data: XOR<t_iopUpdateInput, t_iopUncheckedUpdateInput>
    /**
     * Choose, which t_iop to update.
     */
    where: t_iopWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_iop updateMany
   */
  export type t_iopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_iops.
     */
    data: XOR<t_iopUpdateManyMutationInput, t_iopUncheckedUpdateManyInput>
    /**
     * Filter which t_iops to update
     */
    where?: t_iopWhereInput
  }


  /**
   * t_iop upsert
   */
  export type t_iopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_iop
     */
    select?: t_iopSelect<ExtArgs> | null
    /**
     * The filter to search for the t_iop to update in case it exists.
     */
    where: t_iopWhereUniqueInput
    /**
     * In case the t_iop found by the `where` argument doesn't exist, create a new t_iop with this data.
     */
    create: XOR<t_iopCreateInput, t_iopUncheckedCreateInput>
    /**
     * In case the t_iop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_iopUpdateInput, t_iopUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_iop delete
   */
  export type t_iopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_iop
     */
    select?: t_iopSelect<ExtArgs> | null
    /**
     * Filter which t_iop to delete.
     */
    where: t_iopWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_iop deleteMany
   */
  export type t_iopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_iops to delete
     */
    where?: t_iopWhereInput
  }


  /**
   * t_iop without action
   */
  export type t_iopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_iop
     */
    select?: t_iopSelect<ExtArgs> | null
  }



  /**
   * Model t_cht
   */

  export type AggregateT_cht = {
    _count: T_chtCountAggregateOutputType | null
    _min: T_chtMinAggregateOutputType | null
    _max: T_chtMaxAggregateOutputType | null
  }

  export type T_chtMinAggregateOutputType = {
    id: string | null
    hn: string | null
    an: string | null
    date: string | null
    total: string | null
    paid: string | null
    pttype: string | null
    person_id: string | null
    seq: string | null
    opd_memo: string | null
    invoice_no: string | null
    invoice_lt: string | null
  }

  export type T_chtMaxAggregateOutputType = {
    id: string | null
    hn: string | null
    an: string | null
    date: string | null
    total: string | null
    paid: string | null
    pttype: string | null
    person_id: string | null
    seq: string | null
    opd_memo: string | null
    invoice_no: string | null
    invoice_lt: string | null
  }

  export type T_chtCountAggregateOutputType = {
    id: number
    hn: number
    an: number
    date: number
    total: number
    paid: number
    pttype: number
    person_id: number
    seq: number
    opd_memo: number
    invoice_no: number
    invoice_lt: number
    _all: number
  }


  export type T_chtMinAggregateInputType = {
    id?: true
    hn?: true
    an?: true
    date?: true
    total?: true
    paid?: true
    pttype?: true
    person_id?: true
    seq?: true
    opd_memo?: true
    invoice_no?: true
    invoice_lt?: true
  }

  export type T_chtMaxAggregateInputType = {
    id?: true
    hn?: true
    an?: true
    date?: true
    total?: true
    paid?: true
    pttype?: true
    person_id?: true
    seq?: true
    opd_memo?: true
    invoice_no?: true
    invoice_lt?: true
  }

  export type T_chtCountAggregateInputType = {
    id?: true
    hn?: true
    an?: true
    date?: true
    total?: true
    paid?: true
    pttype?: true
    person_id?: true
    seq?: true
    opd_memo?: true
    invoice_no?: true
    invoice_lt?: true
    _all?: true
  }

  export type T_chtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_cht to aggregate.
     */
    where?: t_chtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_chts to fetch.
     */
    orderBy?: t_chtOrderByWithRelationInput | t_chtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_chtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_chts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_chts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_chts
    **/
    _count?: true | T_chtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_chtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_chtMaxAggregateInputType
  }

  export type GetT_chtAggregateType<T extends T_chtAggregateArgs> = {
        [P in keyof T & keyof AggregateT_cht]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_cht[P]>
      : GetScalarType<T[P], AggregateT_cht[P]>
  }




  export type t_chtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_chtWhereInput
    orderBy?: t_chtOrderByWithAggregationInput | t_chtOrderByWithAggregationInput[]
    by: T_chtScalarFieldEnum[] | T_chtScalarFieldEnum
    having?: t_chtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_chtCountAggregateInputType | true
    _min?: T_chtMinAggregateInputType
    _max?: T_chtMaxAggregateInputType
  }

  export type T_chtGroupByOutputType = {
    id: string
    hn: string
    an: string
    date: string
    total: string
    paid: string
    pttype: string | null
    person_id: string
    seq: string
    opd_memo: string
    invoice_no: string
    invoice_lt: string | null
    _count: T_chtCountAggregateOutputType | null
    _min: T_chtMinAggregateOutputType | null
    _max: T_chtMaxAggregateOutputType | null
  }

  type GetT_chtGroupByPayload<T extends t_chtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_chtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_chtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_chtGroupByOutputType[P]>
            : GetScalarType<T[P], T_chtGroupByOutputType[P]>
        }
      >
    >


  export type t_chtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hn?: boolean
    an?: boolean
    date?: boolean
    total?: boolean
    paid?: boolean
    pttype?: boolean
    person_id?: boolean
    seq?: boolean
    opd_memo?: boolean
    invoice_no?: boolean
    invoice_lt?: boolean
  }, ExtArgs["result"]["t_cht"]>

  export type t_chtSelectScalar = {
    id?: boolean
    hn?: boolean
    an?: boolean
    date?: boolean
    total?: boolean
    paid?: boolean
    pttype?: boolean
    person_id?: boolean
    seq?: boolean
    opd_memo?: boolean
    invoice_no?: boolean
    invoice_lt?: boolean
  }


  export type $t_chtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_cht"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hn: string
      an: string
      date: string
      total: string
      paid: string
      pttype: string | null
      person_id: string
      seq: string
      opd_memo: string
      invoice_no: string
      invoice_lt: string | null
    }, ExtArgs["result"]["t_cht"]>
    composites: {}
  }


  type t_chtGetPayload<S extends boolean | null | undefined | t_chtDefaultArgs> = $Result.GetResult<Prisma.$t_chtPayload, S>

  type t_chtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_chtFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_chtCountAggregateInputType | true
    }

  export interface t_chtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_cht'], meta: { name: 't_cht' } }
    /**
     * Find zero or one T_cht that matches the filter.
     * @param {t_chtFindUniqueArgs} args - Arguments to find a T_cht
     * @example
     * // Get one T_cht
     * const t_cht = await prisma.t_cht.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_chtFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_chtFindUniqueArgs<ExtArgs>>
    ): Prisma__t_chtClient<$Result.GetResult<Prisma.$t_chtPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_cht that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_chtFindUniqueOrThrowArgs} args - Arguments to find a T_cht
     * @example
     * // Get one T_cht
     * const t_cht = await prisma.t_cht.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_chtFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_chtFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_chtClient<$Result.GetResult<Prisma.$t_chtPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_cht that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_chtFindFirstArgs} args - Arguments to find a T_cht
     * @example
     * // Get one T_cht
     * const t_cht = await prisma.t_cht.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_chtFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_chtFindFirstArgs<ExtArgs>>
    ): Prisma__t_chtClient<$Result.GetResult<Prisma.$t_chtPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_cht that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_chtFindFirstOrThrowArgs} args - Arguments to find a T_cht
     * @example
     * // Get one T_cht
     * const t_cht = await prisma.t_cht.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_chtFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_chtFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_chtClient<$Result.GetResult<Prisma.$t_chtPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_chts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_chtFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_chts
     * const t_chts = await prisma.t_cht.findMany()
     * 
     * // Get first 10 T_chts
     * const t_chts = await prisma.t_cht.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_chtWithIdOnly = await prisma.t_cht.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_chtFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_chtFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_chtPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_cht.
     * @param {t_chtCreateArgs} args - Arguments to create a T_cht.
     * @example
     * // Create one T_cht
     * const T_cht = await prisma.t_cht.create({
     *   data: {
     *     // ... data to create a T_cht
     *   }
     * })
     * 
    **/
    create<T extends t_chtCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_chtCreateArgs<ExtArgs>>
    ): Prisma__t_chtClient<$Result.GetResult<Prisma.$t_chtPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_chts.
     *     @param {t_chtCreateManyArgs} args - Arguments to create many T_chts.
     *     @example
     *     // Create many T_chts
     *     const t_cht = await prisma.t_cht.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_chtCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_chtCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_cht.
     * @param {t_chtDeleteArgs} args - Arguments to delete one T_cht.
     * @example
     * // Delete one T_cht
     * const T_cht = await prisma.t_cht.delete({
     *   where: {
     *     // ... filter to delete one T_cht
     *   }
     * })
     * 
    **/
    delete<T extends t_chtDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_chtDeleteArgs<ExtArgs>>
    ): Prisma__t_chtClient<$Result.GetResult<Prisma.$t_chtPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_cht.
     * @param {t_chtUpdateArgs} args - Arguments to update one T_cht.
     * @example
     * // Update one T_cht
     * const t_cht = await prisma.t_cht.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_chtUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_chtUpdateArgs<ExtArgs>>
    ): Prisma__t_chtClient<$Result.GetResult<Prisma.$t_chtPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_chts.
     * @param {t_chtDeleteManyArgs} args - Arguments to filter T_chts to delete.
     * @example
     * // Delete a few T_chts
     * const { count } = await prisma.t_cht.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_chtDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_chtDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_chts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_chtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_chts
     * const t_cht = await prisma.t_cht.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_chtUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_chtUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_cht.
     * @param {t_chtUpsertArgs} args - Arguments to update or create a T_cht.
     * @example
     * // Update or create a T_cht
     * const t_cht = await prisma.t_cht.upsert({
     *   create: {
     *     // ... data to create a T_cht
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_cht we want to update
     *   }
     * })
    **/
    upsert<T extends t_chtUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_chtUpsertArgs<ExtArgs>>
    ): Prisma__t_chtClient<$Result.GetResult<Prisma.$t_chtPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_chts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_chtCountArgs} args - Arguments to filter T_chts to count.
     * @example
     * // Count the number of T_chts
     * const count = await prisma.t_cht.count({
     *   where: {
     *     // ... the filter for the T_chts we want to count
     *   }
     * })
    **/
    count<T extends t_chtCountArgs>(
      args?: Subset<T, t_chtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_chtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_cht.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_chtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_chtAggregateArgs>(args: Subset<T, T_chtAggregateArgs>): Prisma.PrismaPromise<GetT_chtAggregateType<T>>

    /**
     * Group by T_cht.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_chtGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_chtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_chtGroupByArgs['orderBy'] }
        : { orderBy?: t_chtGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_chtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_chtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_cht model
   */
  readonly fields: t_chtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_cht.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_chtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_cht model
   */ 
  interface t_chtFieldRefs {
    readonly id: FieldRef<"t_cht", 'String'>
    readonly hn: FieldRef<"t_cht", 'String'>
    readonly an: FieldRef<"t_cht", 'String'>
    readonly date: FieldRef<"t_cht", 'String'>
    readonly total: FieldRef<"t_cht", 'String'>
    readonly paid: FieldRef<"t_cht", 'String'>
    readonly pttype: FieldRef<"t_cht", 'String'>
    readonly person_id: FieldRef<"t_cht", 'String'>
    readonly seq: FieldRef<"t_cht", 'String'>
    readonly opd_memo: FieldRef<"t_cht", 'String'>
    readonly invoice_no: FieldRef<"t_cht", 'String'>
    readonly invoice_lt: FieldRef<"t_cht", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_cht findUnique
   */
  export type t_chtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cht
     */
    select?: t_chtSelect<ExtArgs> | null
    /**
     * Filter, which t_cht to fetch.
     */
    where: t_chtWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cht findUniqueOrThrow
   */
  export type t_chtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cht
     */
    select?: t_chtSelect<ExtArgs> | null
    /**
     * Filter, which t_cht to fetch.
     */
    where: t_chtWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cht findFirst
   */
  export type t_chtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cht
     */
    select?: t_chtSelect<ExtArgs> | null
    /**
     * Filter, which t_cht to fetch.
     */
    where?: t_chtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_chts to fetch.
     */
    orderBy?: t_chtOrderByWithRelationInput | t_chtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_chts.
     */
    cursor?: t_chtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_chts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_chts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_chts.
     */
    distinct?: T_chtScalarFieldEnum | T_chtScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cht findFirstOrThrow
   */
  export type t_chtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cht
     */
    select?: t_chtSelect<ExtArgs> | null
    /**
     * Filter, which t_cht to fetch.
     */
    where?: t_chtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_chts to fetch.
     */
    orderBy?: t_chtOrderByWithRelationInput | t_chtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_chts.
     */
    cursor?: t_chtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_chts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_chts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_chts.
     */
    distinct?: T_chtScalarFieldEnum | T_chtScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cht findMany
   */
  export type t_chtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cht
     */
    select?: t_chtSelect<ExtArgs> | null
    /**
     * Filter, which t_chts to fetch.
     */
    where?: t_chtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_chts to fetch.
     */
    orderBy?: t_chtOrderByWithRelationInput | t_chtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_chts.
     */
    cursor?: t_chtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_chts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_chts.
     */
    skip?: number
    distinct?: T_chtScalarFieldEnum | T_chtScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cht create
   */
  export type t_chtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cht
     */
    select?: t_chtSelect<ExtArgs> | null
    /**
     * The data needed to create a t_cht.
     */
    data: XOR<t_chtCreateInput, t_chtUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cht createMany
   */
  export type t_chtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_chts.
     */
    data: t_chtCreateManyInput | t_chtCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_cht update
   */
  export type t_chtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cht
     */
    select?: t_chtSelect<ExtArgs> | null
    /**
     * The data needed to update a t_cht.
     */
    data: XOR<t_chtUpdateInput, t_chtUncheckedUpdateInput>
    /**
     * Choose, which t_cht to update.
     */
    where: t_chtWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cht updateMany
   */
  export type t_chtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_chts.
     */
    data: XOR<t_chtUpdateManyMutationInput, t_chtUncheckedUpdateManyInput>
    /**
     * Filter which t_chts to update
     */
    where?: t_chtWhereInput
  }


  /**
   * t_cht upsert
   */
  export type t_chtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cht
     */
    select?: t_chtSelect<ExtArgs> | null
    /**
     * The filter to search for the t_cht to update in case it exists.
     */
    where: t_chtWhereUniqueInput
    /**
     * In case the t_cht found by the `where` argument doesn't exist, create a new t_cht with this data.
     */
    create: XOR<t_chtCreateInput, t_chtUncheckedCreateInput>
    /**
     * In case the t_cht was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_chtUpdateInput, t_chtUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cht delete
   */
  export type t_chtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cht
     */
    select?: t_chtSelect<ExtArgs> | null
    /**
     * Filter which t_cht to delete.
     */
    where: t_chtWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cht deleteMany
   */
  export type t_chtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_chts to delete
     */
    where?: t_chtWhereInput
  }


  /**
   * t_cht without action
   */
  export type t_chtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cht
     */
    select?: t_chtSelect<ExtArgs> | null
  }



  /**
   * Model t_cha
   */

  export type AggregateT_cha = {
    _count: T_chaCountAggregateOutputType | null
    _min: T_chaMinAggregateOutputType | null
    _max: T_chaMaxAggregateOutputType | null
  }

  export type T_chaMinAggregateOutputType = {
    id: string | null
    hn: string | null
    an: string | null
    date: string | null
    chrgitem: string | null
    amount: string | null
    person_id: string | null
    seq: string | null
  }

  export type T_chaMaxAggregateOutputType = {
    id: string | null
    hn: string | null
    an: string | null
    date: string | null
    chrgitem: string | null
    amount: string | null
    person_id: string | null
    seq: string | null
  }

  export type T_chaCountAggregateOutputType = {
    id: number
    hn: number
    an: number
    date: number
    chrgitem: number
    amount: number
    person_id: number
    seq: number
    _all: number
  }


  export type T_chaMinAggregateInputType = {
    id?: true
    hn?: true
    an?: true
    date?: true
    chrgitem?: true
    amount?: true
    person_id?: true
    seq?: true
  }

  export type T_chaMaxAggregateInputType = {
    id?: true
    hn?: true
    an?: true
    date?: true
    chrgitem?: true
    amount?: true
    person_id?: true
    seq?: true
  }

  export type T_chaCountAggregateInputType = {
    id?: true
    hn?: true
    an?: true
    date?: true
    chrgitem?: true
    amount?: true
    person_id?: true
    seq?: true
    _all?: true
  }

  export type T_chaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_cha to aggregate.
     */
    where?: t_chaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_chas to fetch.
     */
    orderBy?: t_chaOrderByWithRelationInput | t_chaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_chaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_chas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_chas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_chas
    **/
    _count?: true | T_chaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_chaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_chaMaxAggregateInputType
  }

  export type GetT_chaAggregateType<T extends T_chaAggregateArgs> = {
        [P in keyof T & keyof AggregateT_cha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_cha[P]>
      : GetScalarType<T[P], AggregateT_cha[P]>
  }




  export type t_chaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_chaWhereInput
    orderBy?: t_chaOrderByWithAggregationInput | t_chaOrderByWithAggregationInput[]
    by: T_chaScalarFieldEnum[] | T_chaScalarFieldEnum
    having?: t_chaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_chaCountAggregateInputType | true
    _min?: T_chaMinAggregateInputType
    _max?: T_chaMaxAggregateInputType
  }

  export type T_chaGroupByOutputType = {
    id: string
    hn: string
    an: string
    date: string
    chrgitem: string
    amount: string
    person_id: string
    seq: string
    _count: T_chaCountAggregateOutputType | null
    _min: T_chaMinAggregateOutputType | null
    _max: T_chaMaxAggregateOutputType | null
  }

  type GetT_chaGroupByPayload<T extends t_chaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_chaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_chaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_chaGroupByOutputType[P]>
            : GetScalarType<T[P], T_chaGroupByOutputType[P]>
        }
      >
    >


  export type t_chaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hn?: boolean
    an?: boolean
    date?: boolean
    chrgitem?: boolean
    amount?: boolean
    person_id?: boolean
    seq?: boolean
  }, ExtArgs["result"]["t_cha"]>

  export type t_chaSelectScalar = {
    id?: boolean
    hn?: boolean
    an?: boolean
    date?: boolean
    chrgitem?: boolean
    amount?: boolean
    person_id?: boolean
    seq?: boolean
  }


  export type $t_chaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_cha"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hn: string
      an: string
      date: string
      chrgitem: string
      amount: string
      person_id: string
      seq: string
    }, ExtArgs["result"]["t_cha"]>
    composites: {}
  }


  type t_chaGetPayload<S extends boolean | null | undefined | t_chaDefaultArgs> = $Result.GetResult<Prisma.$t_chaPayload, S>

  type t_chaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_chaFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_chaCountAggregateInputType | true
    }

  export interface t_chaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_cha'], meta: { name: 't_cha' } }
    /**
     * Find zero or one T_cha that matches the filter.
     * @param {t_chaFindUniqueArgs} args - Arguments to find a T_cha
     * @example
     * // Get one T_cha
     * const t_cha = await prisma.t_cha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_chaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_chaFindUniqueArgs<ExtArgs>>
    ): Prisma__t_chaClient<$Result.GetResult<Prisma.$t_chaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_cha that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_chaFindUniqueOrThrowArgs} args - Arguments to find a T_cha
     * @example
     * // Get one T_cha
     * const t_cha = await prisma.t_cha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_chaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_chaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_chaClient<$Result.GetResult<Prisma.$t_chaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_cha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_chaFindFirstArgs} args - Arguments to find a T_cha
     * @example
     * // Get one T_cha
     * const t_cha = await prisma.t_cha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_chaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_chaFindFirstArgs<ExtArgs>>
    ): Prisma__t_chaClient<$Result.GetResult<Prisma.$t_chaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_cha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_chaFindFirstOrThrowArgs} args - Arguments to find a T_cha
     * @example
     * // Get one T_cha
     * const t_cha = await prisma.t_cha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_chaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_chaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_chaClient<$Result.GetResult<Prisma.$t_chaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_chas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_chaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_chas
     * const t_chas = await prisma.t_cha.findMany()
     * 
     * // Get first 10 T_chas
     * const t_chas = await prisma.t_cha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_chaWithIdOnly = await prisma.t_cha.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_chaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_chaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_chaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_cha.
     * @param {t_chaCreateArgs} args - Arguments to create a T_cha.
     * @example
     * // Create one T_cha
     * const T_cha = await prisma.t_cha.create({
     *   data: {
     *     // ... data to create a T_cha
     *   }
     * })
     * 
    **/
    create<T extends t_chaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_chaCreateArgs<ExtArgs>>
    ): Prisma__t_chaClient<$Result.GetResult<Prisma.$t_chaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_chas.
     *     @param {t_chaCreateManyArgs} args - Arguments to create many T_chas.
     *     @example
     *     // Create many T_chas
     *     const t_cha = await prisma.t_cha.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_chaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_chaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_cha.
     * @param {t_chaDeleteArgs} args - Arguments to delete one T_cha.
     * @example
     * // Delete one T_cha
     * const T_cha = await prisma.t_cha.delete({
     *   where: {
     *     // ... filter to delete one T_cha
     *   }
     * })
     * 
    **/
    delete<T extends t_chaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_chaDeleteArgs<ExtArgs>>
    ): Prisma__t_chaClient<$Result.GetResult<Prisma.$t_chaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_cha.
     * @param {t_chaUpdateArgs} args - Arguments to update one T_cha.
     * @example
     * // Update one T_cha
     * const t_cha = await prisma.t_cha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_chaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_chaUpdateArgs<ExtArgs>>
    ): Prisma__t_chaClient<$Result.GetResult<Prisma.$t_chaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_chas.
     * @param {t_chaDeleteManyArgs} args - Arguments to filter T_chas to delete.
     * @example
     * // Delete a few T_chas
     * const { count } = await prisma.t_cha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_chaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_chaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_chas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_chaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_chas
     * const t_cha = await prisma.t_cha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_chaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_chaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_cha.
     * @param {t_chaUpsertArgs} args - Arguments to update or create a T_cha.
     * @example
     * // Update or create a T_cha
     * const t_cha = await prisma.t_cha.upsert({
     *   create: {
     *     // ... data to create a T_cha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_cha we want to update
     *   }
     * })
    **/
    upsert<T extends t_chaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_chaUpsertArgs<ExtArgs>>
    ): Prisma__t_chaClient<$Result.GetResult<Prisma.$t_chaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_chas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_chaCountArgs} args - Arguments to filter T_chas to count.
     * @example
     * // Count the number of T_chas
     * const count = await prisma.t_cha.count({
     *   where: {
     *     // ... the filter for the T_chas we want to count
     *   }
     * })
    **/
    count<T extends t_chaCountArgs>(
      args?: Subset<T, t_chaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_chaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_cha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_chaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_chaAggregateArgs>(args: Subset<T, T_chaAggregateArgs>): Prisma.PrismaPromise<GetT_chaAggregateType<T>>

    /**
     * Group by T_cha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_chaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_chaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_chaGroupByArgs['orderBy'] }
        : { orderBy?: t_chaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_chaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_chaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_cha model
   */
  readonly fields: t_chaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_cha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_chaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_cha model
   */ 
  interface t_chaFieldRefs {
    readonly id: FieldRef<"t_cha", 'String'>
    readonly hn: FieldRef<"t_cha", 'String'>
    readonly an: FieldRef<"t_cha", 'String'>
    readonly date: FieldRef<"t_cha", 'String'>
    readonly chrgitem: FieldRef<"t_cha", 'String'>
    readonly amount: FieldRef<"t_cha", 'String'>
    readonly person_id: FieldRef<"t_cha", 'String'>
    readonly seq: FieldRef<"t_cha", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_cha findUnique
   */
  export type t_chaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cha
     */
    select?: t_chaSelect<ExtArgs> | null
    /**
     * Filter, which t_cha to fetch.
     */
    where: t_chaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cha findUniqueOrThrow
   */
  export type t_chaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cha
     */
    select?: t_chaSelect<ExtArgs> | null
    /**
     * Filter, which t_cha to fetch.
     */
    where: t_chaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cha findFirst
   */
  export type t_chaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cha
     */
    select?: t_chaSelect<ExtArgs> | null
    /**
     * Filter, which t_cha to fetch.
     */
    where?: t_chaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_chas to fetch.
     */
    orderBy?: t_chaOrderByWithRelationInput | t_chaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_chas.
     */
    cursor?: t_chaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_chas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_chas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_chas.
     */
    distinct?: T_chaScalarFieldEnum | T_chaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cha findFirstOrThrow
   */
  export type t_chaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cha
     */
    select?: t_chaSelect<ExtArgs> | null
    /**
     * Filter, which t_cha to fetch.
     */
    where?: t_chaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_chas to fetch.
     */
    orderBy?: t_chaOrderByWithRelationInput | t_chaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_chas.
     */
    cursor?: t_chaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_chas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_chas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_chas.
     */
    distinct?: T_chaScalarFieldEnum | T_chaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cha findMany
   */
  export type t_chaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cha
     */
    select?: t_chaSelect<ExtArgs> | null
    /**
     * Filter, which t_chas to fetch.
     */
    where?: t_chaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_chas to fetch.
     */
    orderBy?: t_chaOrderByWithRelationInput | t_chaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_chas.
     */
    cursor?: t_chaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_chas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_chas.
     */
    skip?: number
    distinct?: T_chaScalarFieldEnum | T_chaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cha create
   */
  export type t_chaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cha
     */
    select?: t_chaSelect<ExtArgs> | null
    /**
     * The data needed to create a t_cha.
     */
    data: XOR<t_chaCreateInput, t_chaUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cha createMany
   */
  export type t_chaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_chas.
     */
    data: t_chaCreateManyInput | t_chaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_cha update
   */
  export type t_chaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cha
     */
    select?: t_chaSelect<ExtArgs> | null
    /**
     * The data needed to update a t_cha.
     */
    data: XOR<t_chaUpdateInput, t_chaUncheckedUpdateInput>
    /**
     * Choose, which t_cha to update.
     */
    where: t_chaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cha updateMany
   */
  export type t_chaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_chas.
     */
    data: XOR<t_chaUpdateManyMutationInput, t_chaUncheckedUpdateManyInput>
    /**
     * Filter which t_chas to update
     */
    where?: t_chaWhereInput
  }


  /**
   * t_cha upsert
   */
  export type t_chaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cha
     */
    select?: t_chaSelect<ExtArgs> | null
    /**
     * The filter to search for the t_cha to update in case it exists.
     */
    where: t_chaWhereUniqueInput
    /**
     * In case the t_cha found by the `where` argument doesn't exist, create a new t_cha with this data.
     */
    create: XOR<t_chaCreateInput, t_chaUncheckedCreateInput>
    /**
     * In case the t_cha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_chaUpdateInput, t_chaUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cha delete
   */
  export type t_chaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cha
     */
    select?: t_chaSelect<ExtArgs> | null
    /**
     * Filter which t_cha to delete.
     */
    where: t_chaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_cha deleteMany
   */
  export type t_chaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_chas to delete
     */
    where?: t_chaWhereInput
  }


  /**
   * t_cha without action
   */
  export type t_chaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_cha
     */
    select?: t_chaSelect<ExtArgs> | null
  }



  /**
   * Model t_aer
   */

  export type AggregateT_aer = {
    _count: T_aerCountAggregateOutputType | null
    _min: T_aerMinAggregateOutputType | null
    _max: T_aerMaxAggregateOutputType | null
  }

  export type T_aerMinAggregateOutputType = {
    id: string | null
    hn: string | null
    an: string | null
    dateopd: string | null
    authae: string | null
    aedate: string | null
    aetime: string | null
    aetype: string | null
    refer_no: string | null
    refmaini: string | null
    ireftype: string | null
    refmaino: string | null
    oreftype: string | null
    ucae: string | null
    emtype: string | null
    seq: string | null
    aestatus: string | null
    dalert: string | null
    talert: string | null
  }

  export type T_aerMaxAggregateOutputType = {
    id: string | null
    hn: string | null
    an: string | null
    dateopd: string | null
    authae: string | null
    aedate: string | null
    aetime: string | null
    aetype: string | null
    refer_no: string | null
    refmaini: string | null
    ireftype: string | null
    refmaino: string | null
    oreftype: string | null
    ucae: string | null
    emtype: string | null
    seq: string | null
    aestatus: string | null
    dalert: string | null
    talert: string | null
  }

  export type T_aerCountAggregateOutputType = {
    id: number
    hn: number
    an: number
    dateopd: number
    authae: number
    aedate: number
    aetime: number
    aetype: number
    refer_no: number
    refmaini: number
    ireftype: number
    refmaino: number
    oreftype: number
    ucae: number
    emtype: number
    seq: number
    aestatus: number
    dalert: number
    talert: number
    _all: number
  }


  export type T_aerMinAggregateInputType = {
    id?: true
    hn?: true
    an?: true
    dateopd?: true
    authae?: true
    aedate?: true
    aetime?: true
    aetype?: true
    refer_no?: true
    refmaini?: true
    ireftype?: true
    refmaino?: true
    oreftype?: true
    ucae?: true
    emtype?: true
    seq?: true
    aestatus?: true
    dalert?: true
    talert?: true
  }

  export type T_aerMaxAggregateInputType = {
    id?: true
    hn?: true
    an?: true
    dateopd?: true
    authae?: true
    aedate?: true
    aetime?: true
    aetype?: true
    refer_no?: true
    refmaini?: true
    ireftype?: true
    refmaino?: true
    oreftype?: true
    ucae?: true
    emtype?: true
    seq?: true
    aestatus?: true
    dalert?: true
    talert?: true
  }

  export type T_aerCountAggregateInputType = {
    id?: true
    hn?: true
    an?: true
    dateopd?: true
    authae?: true
    aedate?: true
    aetime?: true
    aetype?: true
    refer_no?: true
    refmaini?: true
    ireftype?: true
    refmaino?: true
    oreftype?: true
    ucae?: true
    emtype?: true
    seq?: true
    aestatus?: true
    dalert?: true
    talert?: true
    _all?: true
  }

  export type T_aerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_aer to aggregate.
     */
    where?: t_aerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_aers to fetch.
     */
    orderBy?: t_aerOrderByWithRelationInput | t_aerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_aerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_aers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_aers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_aers
    **/
    _count?: true | T_aerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_aerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_aerMaxAggregateInputType
  }

  export type GetT_aerAggregateType<T extends T_aerAggregateArgs> = {
        [P in keyof T & keyof AggregateT_aer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_aer[P]>
      : GetScalarType<T[P], AggregateT_aer[P]>
  }




  export type t_aerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_aerWhereInput
    orderBy?: t_aerOrderByWithAggregationInput | t_aerOrderByWithAggregationInput[]
    by: T_aerScalarFieldEnum[] | T_aerScalarFieldEnum
    having?: t_aerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_aerCountAggregateInputType | true
    _min?: T_aerMinAggregateInputType
    _max?: T_aerMaxAggregateInputType
  }

  export type T_aerGroupByOutputType = {
    id: string
    hn: string
    an: string
    dateopd: string
    authae: string | null
    aedate: string
    aetime: string
    aetype: string
    refer_no: string
    refmaini: string
    ireftype: string
    refmaino: string
    oreftype: string
    ucae: string
    emtype: string
    seq: string
    aestatus: string | null
    dalert: string | null
    talert: string | null
    _count: T_aerCountAggregateOutputType | null
    _min: T_aerMinAggregateOutputType | null
    _max: T_aerMaxAggregateOutputType | null
  }

  type GetT_aerGroupByPayload<T extends t_aerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_aerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_aerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_aerGroupByOutputType[P]>
            : GetScalarType<T[P], T_aerGroupByOutputType[P]>
        }
      >
    >


  export type t_aerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hn?: boolean
    an?: boolean
    dateopd?: boolean
    authae?: boolean
    aedate?: boolean
    aetime?: boolean
    aetype?: boolean
    refer_no?: boolean
    refmaini?: boolean
    ireftype?: boolean
    refmaino?: boolean
    oreftype?: boolean
    ucae?: boolean
    emtype?: boolean
    seq?: boolean
    aestatus?: boolean
    dalert?: boolean
    talert?: boolean
  }, ExtArgs["result"]["t_aer"]>

  export type t_aerSelectScalar = {
    id?: boolean
    hn?: boolean
    an?: boolean
    dateopd?: boolean
    authae?: boolean
    aedate?: boolean
    aetime?: boolean
    aetype?: boolean
    refer_no?: boolean
    refmaini?: boolean
    ireftype?: boolean
    refmaino?: boolean
    oreftype?: boolean
    ucae?: boolean
    emtype?: boolean
    seq?: boolean
    aestatus?: boolean
    dalert?: boolean
    talert?: boolean
  }


  export type $t_aerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_aer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hn: string
      an: string
      dateopd: string
      authae: string | null
      aedate: string
      aetime: string
      aetype: string
      refer_no: string
      refmaini: string
      ireftype: string
      refmaino: string
      oreftype: string
      ucae: string
      emtype: string
      seq: string
      aestatus: string | null
      dalert: string | null
      talert: string | null
    }, ExtArgs["result"]["t_aer"]>
    composites: {}
  }


  type t_aerGetPayload<S extends boolean | null | undefined | t_aerDefaultArgs> = $Result.GetResult<Prisma.$t_aerPayload, S>

  type t_aerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_aerFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_aerCountAggregateInputType | true
    }

  export interface t_aerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_aer'], meta: { name: 't_aer' } }
    /**
     * Find zero or one T_aer that matches the filter.
     * @param {t_aerFindUniqueArgs} args - Arguments to find a T_aer
     * @example
     * // Get one T_aer
     * const t_aer = await prisma.t_aer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_aerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_aerFindUniqueArgs<ExtArgs>>
    ): Prisma__t_aerClient<$Result.GetResult<Prisma.$t_aerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_aer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_aerFindUniqueOrThrowArgs} args - Arguments to find a T_aer
     * @example
     * // Get one T_aer
     * const t_aer = await prisma.t_aer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_aerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_aerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_aerClient<$Result.GetResult<Prisma.$t_aerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_aer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_aerFindFirstArgs} args - Arguments to find a T_aer
     * @example
     * // Get one T_aer
     * const t_aer = await prisma.t_aer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_aerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_aerFindFirstArgs<ExtArgs>>
    ): Prisma__t_aerClient<$Result.GetResult<Prisma.$t_aerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_aer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_aerFindFirstOrThrowArgs} args - Arguments to find a T_aer
     * @example
     * // Get one T_aer
     * const t_aer = await prisma.t_aer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_aerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_aerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_aerClient<$Result.GetResult<Prisma.$t_aerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_aers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_aerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_aers
     * const t_aers = await prisma.t_aer.findMany()
     * 
     * // Get first 10 T_aers
     * const t_aers = await prisma.t_aer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_aerWithIdOnly = await prisma.t_aer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_aerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_aerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_aerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_aer.
     * @param {t_aerCreateArgs} args - Arguments to create a T_aer.
     * @example
     * // Create one T_aer
     * const T_aer = await prisma.t_aer.create({
     *   data: {
     *     // ... data to create a T_aer
     *   }
     * })
     * 
    **/
    create<T extends t_aerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_aerCreateArgs<ExtArgs>>
    ): Prisma__t_aerClient<$Result.GetResult<Prisma.$t_aerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_aers.
     *     @param {t_aerCreateManyArgs} args - Arguments to create many T_aers.
     *     @example
     *     // Create many T_aers
     *     const t_aer = await prisma.t_aer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_aerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_aerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_aer.
     * @param {t_aerDeleteArgs} args - Arguments to delete one T_aer.
     * @example
     * // Delete one T_aer
     * const T_aer = await prisma.t_aer.delete({
     *   where: {
     *     // ... filter to delete one T_aer
     *   }
     * })
     * 
    **/
    delete<T extends t_aerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_aerDeleteArgs<ExtArgs>>
    ): Prisma__t_aerClient<$Result.GetResult<Prisma.$t_aerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_aer.
     * @param {t_aerUpdateArgs} args - Arguments to update one T_aer.
     * @example
     * // Update one T_aer
     * const t_aer = await prisma.t_aer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_aerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_aerUpdateArgs<ExtArgs>>
    ): Prisma__t_aerClient<$Result.GetResult<Prisma.$t_aerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_aers.
     * @param {t_aerDeleteManyArgs} args - Arguments to filter T_aers to delete.
     * @example
     * // Delete a few T_aers
     * const { count } = await prisma.t_aer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_aerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_aerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_aers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_aerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_aers
     * const t_aer = await prisma.t_aer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_aerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_aerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_aer.
     * @param {t_aerUpsertArgs} args - Arguments to update or create a T_aer.
     * @example
     * // Update or create a T_aer
     * const t_aer = await prisma.t_aer.upsert({
     *   create: {
     *     // ... data to create a T_aer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_aer we want to update
     *   }
     * })
    **/
    upsert<T extends t_aerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_aerUpsertArgs<ExtArgs>>
    ): Prisma__t_aerClient<$Result.GetResult<Prisma.$t_aerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_aers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_aerCountArgs} args - Arguments to filter T_aers to count.
     * @example
     * // Count the number of T_aers
     * const count = await prisma.t_aer.count({
     *   where: {
     *     // ... the filter for the T_aers we want to count
     *   }
     * })
    **/
    count<T extends t_aerCountArgs>(
      args?: Subset<T, t_aerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_aerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_aer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_aerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_aerAggregateArgs>(args: Subset<T, T_aerAggregateArgs>): Prisma.PrismaPromise<GetT_aerAggregateType<T>>

    /**
     * Group by T_aer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_aerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_aerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_aerGroupByArgs['orderBy'] }
        : { orderBy?: t_aerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_aerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_aerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_aer model
   */
  readonly fields: t_aerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_aer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_aerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_aer model
   */ 
  interface t_aerFieldRefs {
    readonly id: FieldRef<"t_aer", 'String'>
    readonly hn: FieldRef<"t_aer", 'String'>
    readonly an: FieldRef<"t_aer", 'String'>
    readonly dateopd: FieldRef<"t_aer", 'String'>
    readonly authae: FieldRef<"t_aer", 'String'>
    readonly aedate: FieldRef<"t_aer", 'String'>
    readonly aetime: FieldRef<"t_aer", 'String'>
    readonly aetype: FieldRef<"t_aer", 'String'>
    readonly refer_no: FieldRef<"t_aer", 'String'>
    readonly refmaini: FieldRef<"t_aer", 'String'>
    readonly ireftype: FieldRef<"t_aer", 'String'>
    readonly refmaino: FieldRef<"t_aer", 'String'>
    readonly oreftype: FieldRef<"t_aer", 'String'>
    readonly ucae: FieldRef<"t_aer", 'String'>
    readonly emtype: FieldRef<"t_aer", 'String'>
    readonly seq: FieldRef<"t_aer", 'String'>
    readonly aestatus: FieldRef<"t_aer", 'String'>
    readonly dalert: FieldRef<"t_aer", 'String'>
    readonly talert: FieldRef<"t_aer", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_aer findUnique
   */
  export type t_aerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_aer
     */
    select?: t_aerSelect<ExtArgs> | null
    /**
     * Filter, which t_aer to fetch.
     */
    where: t_aerWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_aer findUniqueOrThrow
   */
  export type t_aerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_aer
     */
    select?: t_aerSelect<ExtArgs> | null
    /**
     * Filter, which t_aer to fetch.
     */
    where: t_aerWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_aer findFirst
   */
  export type t_aerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_aer
     */
    select?: t_aerSelect<ExtArgs> | null
    /**
     * Filter, which t_aer to fetch.
     */
    where?: t_aerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_aers to fetch.
     */
    orderBy?: t_aerOrderByWithRelationInput | t_aerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_aers.
     */
    cursor?: t_aerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_aers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_aers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_aers.
     */
    distinct?: T_aerScalarFieldEnum | T_aerScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_aer findFirstOrThrow
   */
  export type t_aerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_aer
     */
    select?: t_aerSelect<ExtArgs> | null
    /**
     * Filter, which t_aer to fetch.
     */
    where?: t_aerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_aers to fetch.
     */
    orderBy?: t_aerOrderByWithRelationInput | t_aerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_aers.
     */
    cursor?: t_aerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_aers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_aers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_aers.
     */
    distinct?: T_aerScalarFieldEnum | T_aerScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_aer findMany
   */
  export type t_aerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_aer
     */
    select?: t_aerSelect<ExtArgs> | null
    /**
     * Filter, which t_aers to fetch.
     */
    where?: t_aerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_aers to fetch.
     */
    orderBy?: t_aerOrderByWithRelationInput | t_aerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_aers.
     */
    cursor?: t_aerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_aers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_aers.
     */
    skip?: number
    distinct?: T_aerScalarFieldEnum | T_aerScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_aer create
   */
  export type t_aerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_aer
     */
    select?: t_aerSelect<ExtArgs> | null
    /**
     * The data needed to create a t_aer.
     */
    data: XOR<t_aerCreateInput, t_aerUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_aer createMany
   */
  export type t_aerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_aers.
     */
    data: t_aerCreateManyInput | t_aerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_aer update
   */
  export type t_aerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_aer
     */
    select?: t_aerSelect<ExtArgs> | null
    /**
     * The data needed to update a t_aer.
     */
    data: XOR<t_aerUpdateInput, t_aerUncheckedUpdateInput>
    /**
     * Choose, which t_aer to update.
     */
    where: t_aerWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_aer updateMany
   */
  export type t_aerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_aers.
     */
    data: XOR<t_aerUpdateManyMutationInput, t_aerUncheckedUpdateManyInput>
    /**
     * Filter which t_aers to update
     */
    where?: t_aerWhereInput
  }


  /**
   * t_aer upsert
   */
  export type t_aerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_aer
     */
    select?: t_aerSelect<ExtArgs> | null
    /**
     * The filter to search for the t_aer to update in case it exists.
     */
    where: t_aerWhereUniqueInput
    /**
     * In case the t_aer found by the `where` argument doesn't exist, create a new t_aer with this data.
     */
    create: XOR<t_aerCreateInput, t_aerUncheckedCreateInput>
    /**
     * In case the t_aer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_aerUpdateInput, t_aerUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_aer delete
   */
  export type t_aerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_aer
     */
    select?: t_aerSelect<ExtArgs> | null
    /**
     * Filter which t_aer to delete.
     */
    where: t_aerWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_aer deleteMany
   */
  export type t_aerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_aers to delete
     */
    where?: t_aerWhereInput
  }


  /**
   * t_aer without action
   */
  export type t_aerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_aer
     */
    select?: t_aerSelect<ExtArgs> | null
  }



  /**
   * Model t_adp
   */

  export type AggregateT_adp = {
    _count: T_adpCountAggregateOutputType | null
    _min: T_adpMinAggregateOutputType | null
    _max: T_adpMaxAggregateOutputType | null
  }

  export type T_adpMinAggregateOutputType = {
    id: string | null
    hn: string | null
    an: string | null
    dateopd: string | null
    type: string | null
    code: string | null
    qty: string | null
    rate: string | null
    seq: string | null
    cagcode: string | null
    dose: string | null
    ca_type: string | null
    serialno: string | null
    totcopay: string | null
    use_status: string | null
    total: string | null
    tmltcode: string | null
    status1: string | null
    bi: string | null
    clinic: string | null
    itemsrc: string | null
    provider: string | null
    gravida: string | null
    ga_week: string | null
    dcip_e_screen: string | null
    lmp: string | null
  }

  export type T_adpMaxAggregateOutputType = {
    id: string | null
    hn: string | null
    an: string | null
    dateopd: string | null
    type: string | null
    code: string | null
    qty: string | null
    rate: string | null
    seq: string | null
    cagcode: string | null
    dose: string | null
    ca_type: string | null
    serialno: string | null
    totcopay: string | null
    use_status: string | null
    total: string | null
    tmltcode: string | null
    status1: string | null
    bi: string | null
    clinic: string | null
    itemsrc: string | null
    provider: string | null
    gravida: string | null
    ga_week: string | null
    dcip_e_screen: string | null
    lmp: string | null
  }

  export type T_adpCountAggregateOutputType = {
    id: number
    hn: number
    an: number
    dateopd: number
    type: number
    code: number
    qty: number
    rate: number
    seq: number
    cagcode: number
    dose: number
    ca_type: number
    serialno: number
    totcopay: number
    use_status: number
    total: number
    tmltcode: number
    status1: number
    bi: number
    clinic: number
    itemsrc: number
    provider: number
    gravida: number
    ga_week: number
    dcip_e_screen: number
    lmp: number
    _all: number
  }


  export type T_adpMinAggregateInputType = {
    id?: true
    hn?: true
    an?: true
    dateopd?: true
    type?: true
    code?: true
    qty?: true
    rate?: true
    seq?: true
    cagcode?: true
    dose?: true
    ca_type?: true
    serialno?: true
    totcopay?: true
    use_status?: true
    total?: true
    tmltcode?: true
    status1?: true
    bi?: true
    clinic?: true
    itemsrc?: true
    provider?: true
    gravida?: true
    ga_week?: true
    dcip_e_screen?: true
    lmp?: true
  }

  export type T_adpMaxAggregateInputType = {
    id?: true
    hn?: true
    an?: true
    dateopd?: true
    type?: true
    code?: true
    qty?: true
    rate?: true
    seq?: true
    cagcode?: true
    dose?: true
    ca_type?: true
    serialno?: true
    totcopay?: true
    use_status?: true
    total?: true
    tmltcode?: true
    status1?: true
    bi?: true
    clinic?: true
    itemsrc?: true
    provider?: true
    gravida?: true
    ga_week?: true
    dcip_e_screen?: true
    lmp?: true
  }

  export type T_adpCountAggregateInputType = {
    id?: true
    hn?: true
    an?: true
    dateopd?: true
    type?: true
    code?: true
    qty?: true
    rate?: true
    seq?: true
    cagcode?: true
    dose?: true
    ca_type?: true
    serialno?: true
    totcopay?: true
    use_status?: true
    total?: true
    tmltcode?: true
    status1?: true
    bi?: true
    clinic?: true
    itemsrc?: true
    provider?: true
    gravida?: true
    ga_week?: true
    dcip_e_screen?: true
    lmp?: true
    _all?: true
  }

  export type T_adpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_adp to aggregate.
     */
    where?: t_adpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_adps to fetch.
     */
    orderBy?: t_adpOrderByWithRelationInput | t_adpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_adpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_adps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_adps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_adps
    **/
    _count?: true | T_adpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_adpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_adpMaxAggregateInputType
  }

  export type GetT_adpAggregateType<T extends T_adpAggregateArgs> = {
        [P in keyof T & keyof AggregateT_adp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_adp[P]>
      : GetScalarType<T[P], AggregateT_adp[P]>
  }




  export type t_adpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_adpWhereInput
    orderBy?: t_adpOrderByWithAggregationInput | t_adpOrderByWithAggregationInput[]
    by: T_adpScalarFieldEnum[] | T_adpScalarFieldEnum
    having?: t_adpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_adpCountAggregateInputType | true
    _min?: T_adpMinAggregateInputType
    _max?: T_adpMaxAggregateInputType
  }

  export type T_adpGroupByOutputType = {
    id: string
    hn: string
    an: string
    dateopd: string
    type: string
    code: string
    qty: string
    rate: string
    seq: string
    cagcode: string | null
    dose: string | null
    ca_type: string | null
    serialno: string | null
    totcopay: string | null
    use_status: string | null
    total: string | null
    tmltcode: string
    status1: string
    bi: string
    clinic: string | null
    itemsrc: string
    provider: string
    gravida: string | null
    ga_week: string | null
    dcip_e_screen: string | null
    lmp: string | null
    _count: T_adpCountAggregateOutputType | null
    _min: T_adpMinAggregateOutputType | null
    _max: T_adpMaxAggregateOutputType | null
  }

  type GetT_adpGroupByPayload<T extends t_adpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_adpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_adpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_adpGroupByOutputType[P]>
            : GetScalarType<T[P], T_adpGroupByOutputType[P]>
        }
      >
    >


  export type t_adpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hn?: boolean
    an?: boolean
    dateopd?: boolean
    type?: boolean
    code?: boolean
    qty?: boolean
    rate?: boolean
    seq?: boolean
    cagcode?: boolean
    dose?: boolean
    ca_type?: boolean
    serialno?: boolean
    totcopay?: boolean
    use_status?: boolean
    total?: boolean
    tmltcode?: boolean
    status1?: boolean
    bi?: boolean
    clinic?: boolean
    itemsrc?: boolean
    provider?: boolean
    gravida?: boolean
    ga_week?: boolean
    dcip_e_screen?: boolean
    lmp?: boolean
  }, ExtArgs["result"]["t_adp"]>

  export type t_adpSelectScalar = {
    id?: boolean
    hn?: boolean
    an?: boolean
    dateopd?: boolean
    type?: boolean
    code?: boolean
    qty?: boolean
    rate?: boolean
    seq?: boolean
    cagcode?: boolean
    dose?: boolean
    ca_type?: boolean
    serialno?: boolean
    totcopay?: boolean
    use_status?: boolean
    total?: boolean
    tmltcode?: boolean
    status1?: boolean
    bi?: boolean
    clinic?: boolean
    itemsrc?: boolean
    provider?: boolean
    gravida?: boolean
    ga_week?: boolean
    dcip_e_screen?: boolean
    lmp?: boolean
  }


  export type $t_adpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_adp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hn: string
      an: string
      dateopd: string
      type: string
      code: string
      qty: string
      rate: string
      seq: string
      cagcode: string | null
      dose: string | null
      ca_type: string | null
      serialno: string | null
      totcopay: string | null
      use_status: string | null
      total: string | null
      tmltcode: string
      status1: string
      bi: string
      clinic: string | null
      itemsrc: string
      provider: string
      gravida: string | null
      ga_week: string | null
      dcip_e_screen: string | null
      lmp: string | null
    }, ExtArgs["result"]["t_adp"]>
    composites: {}
  }


  type t_adpGetPayload<S extends boolean | null | undefined | t_adpDefaultArgs> = $Result.GetResult<Prisma.$t_adpPayload, S>

  type t_adpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_adpFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_adpCountAggregateInputType | true
    }

  export interface t_adpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_adp'], meta: { name: 't_adp' } }
    /**
     * Find zero or one T_adp that matches the filter.
     * @param {t_adpFindUniqueArgs} args - Arguments to find a T_adp
     * @example
     * // Get one T_adp
     * const t_adp = await prisma.t_adp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_adpFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_adpFindUniqueArgs<ExtArgs>>
    ): Prisma__t_adpClient<$Result.GetResult<Prisma.$t_adpPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_adp that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_adpFindUniqueOrThrowArgs} args - Arguments to find a T_adp
     * @example
     * // Get one T_adp
     * const t_adp = await prisma.t_adp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_adpFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_adpFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_adpClient<$Result.GetResult<Prisma.$t_adpPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_adp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_adpFindFirstArgs} args - Arguments to find a T_adp
     * @example
     * // Get one T_adp
     * const t_adp = await prisma.t_adp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_adpFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_adpFindFirstArgs<ExtArgs>>
    ): Prisma__t_adpClient<$Result.GetResult<Prisma.$t_adpPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_adp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_adpFindFirstOrThrowArgs} args - Arguments to find a T_adp
     * @example
     * // Get one T_adp
     * const t_adp = await prisma.t_adp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_adpFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_adpFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_adpClient<$Result.GetResult<Prisma.$t_adpPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_adps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_adpFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_adps
     * const t_adps = await prisma.t_adp.findMany()
     * 
     * // Get first 10 T_adps
     * const t_adps = await prisma.t_adp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_adpWithIdOnly = await prisma.t_adp.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_adpFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_adpFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_adpPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_adp.
     * @param {t_adpCreateArgs} args - Arguments to create a T_adp.
     * @example
     * // Create one T_adp
     * const T_adp = await prisma.t_adp.create({
     *   data: {
     *     // ... data to create a T_adp
     *   }
     * })
     * 
    **/
    create<T extends t_adpCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_adpCreateArgs<ExtArgs>>
    ): Prisma__t_adpClient<$Result.GetResult<Prisma.$t_adpPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_adps.
     *     @param {t_adpCreateManyArgs} args - Arguments to create many T_adps.
     *     @example
     *     // Create many T_adps
     *     const t_adp = await prisma.t_adp.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_adpCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_adpCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_adp.
     * @param {t_adpDeleteArgs} args - Arguments to delete one T_adp.
     * @example
     * // Delete one T_adp
     * const T_adp = await prisma.t_adp.delete({
     *   where: {
     *     // ... filter to delete one T_adp
     *   }
     * })
     * 
    **/
    delete<T extends t_adpDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_adpDeleteArgs<ExtArgs>>
    ): Prisma__t_adpClient<$Result.GetResult<Prisma.$t_adpPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_adp.
     * @param {t_adpUpdateArgs} args - Arguments to update one T_adp.
     * @example
     * // Update one T_adp
     * const t_adp = await prisma.t_adp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_adpUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_adpUpdateArgs<ExtArgs>>
    ): Prisma__t_adpClient<$Result.GetResult<Prisma.$t_adpPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_adps.
     * @param {t_adpDeleteManyArgs} args - Arguments to filter T_adps to delete.
     * @example
     * // Delete a few T_adps
     * const { count } = await prisma.t_adp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_adpDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_adpDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_adps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_adpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_adps
     * const t_adp = await prisma.t_adp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_adpUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_adpUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_adp.
     * @param {t_adpUpsertArgs} args - Arguments to update or create a T_adp.
     * @example
     * // Update or create a T_adp
     * const t_adp = await prisma.t_adp.upsert({
     *   create: {
     *     // ... data to create a T_adp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_adp we want to update
     *   }
     * })
    **/
    upsert<T extends t_adpUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_adpUpsertArgs<ExtArgs>>
    ): Prisma__t_adpClient<$Result.GetResult<Prisma.$t_adpPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_adps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_adpCountArgs} args - Arguments to filter T_adps to count.
     * @example
     * // Count the number of T_adps
     * const count = await prisma.t_adp.count({
     *   where: {
     *     // ... the filter for the T_adps we want to count
     *   }
     * })
    **/
    count<T extends t_adpCountArgs>(
      args?: Subset<T, t_adpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_adpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_adp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_adpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_adpAggregateArgs>(args: Subset<T, T_adpAggregateArgs>): Prisma.PrismaPromise<GetT_adpAggregateType<T>>

    /**
     * Group by T_adp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_adpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_adpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_adpGroupByArgs['orderBy'] }
        : { orderBy?: t_adpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_adpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_adpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_adp model
   */
  readonly fields: t_adpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_adp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_adpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_adp model
   */ 
  interface t_adpFieldRefs {
    readonly id: FieldRef<"t_adp", 'String'>
    readonly hn: FieldRef<"t_adp", 'String'>
    readonly an: FieldRef<"t_adp", 'String'>
    readonly dateopd: FieldRef<"t_adp", 'String'>
    readonly type: FieldRef<"t_adp", 'String'>
    readonly code: FieldRef<"t_adp", 'String'>
    readonly qty: FieldRef<"t_adp", 'String'>
    readonly rate: FieldRef<"t_adp", 'String'>
    readonly seq: FieldRef<"t_adp", 'String'>
    readonly cagcode: FieldRef<"t_adp", 'String'>
    readonly dose: FieldRef<"t_adp", 'String'>
    readonly ca_type: FieldRef<"t_adp", 'String'>
    readonly serialno: FieldRef<"t_adp", 'String'>
    readonly totcopay: FieldRef<"t_adp", 'String'>
    readonly use_status: FieldRef<"t_adp", 'String'>
    readonly total: FieldRef<"t_adp", 'String'>
    readonly tmltcode: FieldRef<"t_adp", 'String'>
    readonly status1: FieldRef<"t_adp", 'String'>
    readonly bi: FieldRef<"t_adp", 'String'>
    readonly clinic: FieldRef<"t_adp", 'String'>
    readonly itemsrc: FieldRef<"t_adp", 'String'>
    readonly provider: FieldRef<"t_adp", 'String'>
    readonly gravida: FieldRef<"t_adp", 'String'>
    readonly ga_week: FieldRef<"t_adp", 'String'>
    readonly dcip_e_screen: FieldRef<"t_adp", 'String'>
    readonly lmp: FieldRef<"t_adp", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_adp findUnique
   */
  export type t_adpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_adp
     */
    select?: t_adpSelect<ExtArgs> | null
    /**
     * Filter, which t_adp to fetch.
     */
    where: t_adpWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_adp findUniqueOrThrow
   */
  export type t_adpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_adp
     */
    select?: t_adpSelect<ExtArgs> | null
    /**
     * Filter, which t_adp to fetch.
     */
    where: t_adpWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_adp findFirst
   */
  export type t_adpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_adp
     */
    select?: t_adpSelect<ExtArgs> | null
    /**
     * Filter, which t_adp to fetch.
     */
    where?: t_adpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_adps to fetch.
     */
    orderBy?: t_adpOrderByWithRelationInput | t_adpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_adps.
     */
    cursor?: t_adpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_adps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_adps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_adps.
     */
    distinct?: T_adpScalarFieldEnum | T_adpScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_adp findFirstOrThrow
   */
  export type t_adpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_adp
     */
    select?: t_adpSelect<ExtArgs> | null
    /**
     * Filter, which t_adp to fetch.
     */
    where?: t_adpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_adps to fetch.
     */
    orderBy?: t_adpOrderByWithRelationInput | t_adpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_adps.
     */
    cursor?: t_adpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_adps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_adps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_adps.
     */
    distinct?: T_adpScalarFieldEnum | T_adpScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_adp findMany
   */
  export type t_adpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_adp
     */
    select?: t_adpSelect<ExtArgs> | null
    /**
     * Filter, which t_adps to fetch.
     */
    where?: t_adpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_adps to fetch.
     */
    orderBy?: t_adpOrderByWithRelationInput | t_adpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_adps.
     */
    cursor?: t_adpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_adps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_adps.
     */
    skip?: number
    distinct?: T_adpScalarFieldEnum | T_adpScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_adp create
   */
  export type t_adpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_adp
     */
    select?: t_adpSelect<ExtArgs> | null
    /**
     * The data needed to create a t_adp.
     */
    data: XOR<t_adpCreateInput, t_adpUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_adp createMany
   */
  export type t_adpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_adps.
     */
    data: t_adpCreateManyInput | t_adpCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_adp update
   */
  export type t_adpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_adp
     */
    select?: t_adpSelect<ExtArgs> | null
    /**
     * The data needed to update a t_adp.
     */
    data: XOR<t_adpUpdateInput, t_adpUncheckedUpdateInput>
    /**
     * Choose, which t_adp to update.
     */
    where: t_adpWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_adp updateMany
   */
  export type t_adpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_adps.
     */
    data: XOR<t_adpUpdateManyMutationInput, t_adpUncheckedUpdateManyInput>
    /**
     * Filter which t_adps to update
     */
    where?: t_adpWhereInput
  }


  /**
   * t_adp upsert
   */
  export type t_adpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_adp
     */
    select?: t_adpSelect<ExtArgs> | null
    /**
     * The filter to search for the t_adp to update in case it exists.
     */
    where: t_adpWhereUniqueInput
    /**
     * In case the t_adp found by the `where` argument doesn't exist, create a new t_adp with this data.
     */
    create: XOR<t_adpCreateInput, t_adpUncheckedCreateInput>
    /**
     * In case the t_adp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_adpUpdateInput, t_adpUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_adp delete
   */
  export type t_adpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_adp
     */
    select?: t_adpSelect<ExtArgs> | null
    /**
     * Filter which t_adp to delete.
     */
    where: t_adpWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_adp deleteMany
   */
  export type t_adpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_adps to delete
     */
    where?: t_adpWhereInput
  }


  /**
   * t_adp without action
   */
  export type t_adpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_adp
     */
    select?: t_adpSelect<ExtArgs> | null
  }



  /**
   * Model t_lvd
   */

  export type AggregateT_lvd = {
    _count: T_lvdCountAggregateOutputType | null
    _min: T_lvdMinAggregateOutputType | null
    _max: T_lvdMaxAggregateOutputType | null
  }

  export type T_lvdMinAggregateOutputType = {
    id: string | null
    seqlvd: string | null
    an: string | null
    dateout: string | null
    timeout: string | null
    datein: string | null
    timein: string | null
    qtyday: string | null
  }

  export type T_lvdMaxAggregateOutputType = {
    id: string | null
    seqlvd: string | null
    an: string | null
    dateout: string | null
    timeout: string | null
    datein: string | null
    timein: string | null
    qtyday: string | null
  }

  export type T_lvdCountAggregateOutputType = {
    id: number
    seqlvd: number
    an: number
    dateout: number
    timeout: number
    datein: number
    timein: number
    qtyday: number
    _all: number
  }


  export type T_lvdMinAggregateInputType = {
    id?: true
    seqlvd?: true
    an?: true
    dateout?: true
    timeout?: true
    datein?: true
    timein?: true
    qtyday?: true
  }

  export type T_lvdMaxAggregateInputType = {
    id?: true
    seqlvd?: true
    an?: true
    dateout?: true
    timeout?: true
    datein?: true
    timein?: true
    qtyday?: true
  }

  export type T_lvdCountAggregateInputType = {
    id?: true
    seqlvd?: true
    an?: true
    dateout?: true
    timeout?: true
    datein?: true
    timein?: true
    qtyday?: true
    _all?: true
  }

  export type T_lvdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_lvd to aggregate.
     */
    where?: t_lvdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_lvds to fetch.
     */
    orderBy?: t_lvdOrderByWithRelationInput | t_lvdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_lvdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_lvds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_lvds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_lvds
    **/
    _count?: true | T_lvdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_lvdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_lvdMaxAggregateInputType
  }

  export type GetT_lvdAggregateType<T extends T_lvdAggregateArgs> = {
        [P in keyof T & keyof AggregateT_lvd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_lvd[P]>
      : GetScalarType<T[P], AggregateT_lvd[P]>
  }




  export type t_lvdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_lvdWhereInput
    orderBy?: t_lvdOrderByWithAggregationInput | t_lvdOrderByWithAggregationInput[]
    by: T_lvdScalarFieldEnum[] | T_lvdScalarFieldEnum
    having?: t_lvdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_lvdCountAggregateInputType | true
    _min?: T_lvdMinAggregateInputType
    _max?: T_lvdMaxAggregateInputType
  }

  export type T_lvdGroupByOutputType = {
    id: string
    seqlvd: string
    an: string
    dateout: string
    timeout: string
    datein: string
    timein: string
    qtyday: string
    _count: T_lvdCountAggregateOutputType | null
    _min: T_lvdMinAggregateOutputType | null
    _max: T_lvdMaxAggregateOutputType | null
  }

  type GetT_lvdGroupByPayload<T extends t_lvdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_lvdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_lvdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_lvdGroupByOutputType[P]>
            : GetScalarType<T[P], T_lvdGroupByOutputType[P]>
        }
      >
    >


  export type t_lvdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seqlvd?: boolean
    an?: boolean
    dateout?: boolean
    timeout?: boolean
    datein?: boolean
    timein?: boolean
    qtyday?: boolean
  }, ExtArgs["result"]["t_lvd"]>

  export type t_lvdSelectScalar = {
    id?: boolean
    seqlvd?: boolean
    an?: boolean
    dateout?: boolean
    timeout?: boolean
    datein?: boolean
    timein?: boolean
    qtyday?: boolean
  }


  export type $t_lvdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_lvd"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      seqlvd: string
      an: string
      dateout: string
      timeout: string
      datein: string
      timein: string
      qtyday: string
    }, ExtArgs["result"]["t_lvd"]>
    composites: {}
  }


  type t_lvdGetPayload<S extends boolean | null | undefined | t_lvdDefaultArgs> = $Result.GetResult<Prisma.$t_lvdPayload, S>

  type t_lvdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_lvdFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_lvdCountAggregateInputType | true
    }

  export interface t_lvdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_lvd'], meta: { name: 't_lvd' } }
    /**
     * Find zero or one T_lvd that matches the filter.
     * @param {t_lvdFindUniqueArgs} args - Arguments to find a T_lvd
     * @example
     * // Get one T_lvd
     * const t_lvd = await prisma.t_lvd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_lvdFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_lvdFindUniqueArgs<ExtArgs>>
    ): Prisma__t_lvdClient<$Result.GetResult<Prisma.$t_lvdPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_lvd that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_lvdFindUniqueOrThrowArgs} args - Arguments to find a T_lvd
     * @example
     * // Get one T_lvd
     * const t_lvd = await prisma.t_lvd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_lvdFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_lvdFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_lvdClient<$Result.GetResult<Prisma.$t_lvdPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_lvd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_lvdFindFirstArgs} args - Arguments to find a T_lvd
     * @example
     * // Get one T_lvd
     * const t_lvd = await prisma.t_lvd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_lvdFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_lvdFindFirstArgs<ExtArgs>>
    ): Prisma__t_lvdClient<$Result.GetResult<Prisma.$t_lvdPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_lvd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_lvdFindFirstOrThrowArgs} args - Arguments to find a T_lvd
     * @example
     * // Get one T_lvd
     * const t_lvd = await prisma.t_lvd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_lvdFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_lvdFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_lvdClient<$Result.GetResult<Prisma.$t_lvdPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_lvds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_lvdFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_lvds
     * const t_lvds = await prisma.t_lvd.findMany()
     * 
     * // Get first 10 T_lvds
     * const t_lvds = await prisma.t_lvd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_lvdWithIdOnly = await prisma.t_lvd.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_lvdFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_lvdFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_lvdPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_lvd.
     * @param {t_lvdCreateArgs} args - Arguments to create a T_lvd.
     * @example
     * // Create one T_lvd
     * const T_lvd = await prisma.t_lvd.create({
     *   data: {
     *     // ... data to create a T_lvd
     *   }
     * })
     * 
    **/
    create<T extends t_lvdCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_lvdCreateArgs<ExtArgs>>
    ): Prisma__t_lvdClient<$Result.GetResult<Prisma.$t_lvdPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_lvds.
     *     @param {t_lvdCreateManyArgs} args - Arguments to create many T_lvds.
     *     @example
     *     // Create many T_lvds
     *     const t_lvd = await prisma.t_lvd.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_lvdCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_lvdCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_lvd.
     * @param {t_lvdDeleteArgs} args - Arguments to delete one T_lvd.
     * @example
     * // Delete one T_lvd
     * const T_lvd = await prisma.t_lvd.delete({
     *   where: {
     *     // ... filter to delete one T_lvd
     *   }
     * })
     * 
    **/
    delete<T extends t_lvdDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_lvdDeleteArgs<ExtArgs>>
    ): Prisma__t_lvdClient<$Result.GetResult<Prisma.$t_lvdPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_lvd.
     * @param {t_lvdUpdateArgs} args - Arguments to update one T_lvd.
     * @example
     * // Update one T_lvd
     * const t_lvd = await prisma.t_lvd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_lvdUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_lvdUpdateArgs<ExtArgs>>
    ): Prisma__t_lvdClient<$Result.GetResult<Prisma.$t_lvdPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_lvds.
     * @param {t_lvdDeleteManyArgs} args - Arguments to filter T_lvds to delete.
     * @example
     * // Delete a few T_lvds
     * const { count } = await prisma.t_lvd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_lvdDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_lvdDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_lvds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_lvdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_lvds
     * const t_lvd = await prisma.t_lvd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_lvdUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_lvdUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_lvd.
     * @param {t_lvdUpsertArgs} args - Arguments to update or create a T_lvd.
     * @example
     * // Update or create a T_lvd
     * const t_lvd = await prisma.t_lvd.upsert({
     *   create: {
     *     // ... data to create a T_lvd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_lvd we want to update
     *   }
     * })
    **/
    upsert<T extends t_lvdUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_lvdUpsertArgs<ExtArgs>>
    ): Prisma__t_lvdClient<$Result.GetResult<Prisma.$t_lvdPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_lvds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_lvdCountArgs} args - Arguments to filter T_lvds to count.
     * @example
     * // Count the number of T_lvds
     * const count = await prisma.t_lvd.count({
     *   where: {
     *     // ... the filter for the T_lvds we want to count
     *   }
     * })
    **/
    count<T extends t_lvdCountArgs>(
      args?: Subset<T, t_lvdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_lvdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_lvd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_lvdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_lvdAggregateArgs>(args: Subset<T, T_lvdAggregateArgs>): Prisma.PrismaPromise<GetT_lvdAggregateType<T>>

    /**
     * Group by T_lvd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_lvdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_lvdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_lvdGroupByArgs['orderBy'] }
        : { orderBy?: t_lvdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_lvdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_lvdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_lvd model
   */
  readonly fields: t_lvdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_lvd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_lvdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_lvd model
   */ 
  interface t_lvdFieldRefs {
    readonly id: FieldRef<"t_lvd", 'String'>
    readonly seqlvd: FieldRef<"t_lvd", 'String'>
    readonly an: FieldRef<"t_lvd", 'String'>
    readonly dateout: FieldRef<"t_lvd", 'String'>
    readonly timeout: FieldRef<"t_lvd", 'String'>
    readonly datein: FieldRef<"t_lvd", 'String'>
    readonly timein: FieldRef<"t_lvd", 'String'>
    readonly qtyday: FieldRef<"t_lvd", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_lvd findUnique
   */
  export type t_lvdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_lvd
     */
    select?: t_lvdSelect<ExtArgs> | null
    /**
     * Filter, which t_lvd to fetch.
     */
    where: t_lvdWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_lvd findUniqueOrThrow
   */
  export type t_lvdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_lvd
     */
    select?: t_lvdSelect<ExtArgs> | null
    /**
     * Filter, which t_lvd to fetch.
     */
    where: t_lvdWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_lvd findFirst
   */
  export type t_lvdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_lvd
     */
    select?: t_lvdSelect<ExtArgs> | null
    /**
     * Filter, which t_lvd to fetch.
     */
    where?: t_lvdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_lvds to fetch.
     */
    orderBy?: t_lvdOrderByWithRelationInput | t_lvdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_lvds.
     */
    cursor?: t_lvdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_lvds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_lvds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_lvds.
     */
    distinct?: T_lvdScalarFieldEnum | T_lvdScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_lvd findFirstOrThrow
   */
  export type t_lvdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_lvd
     */
    select?: t_lvdSelect<ExtArgs> | null
    /**
     * Filter, which t_lvd to fetch.
     */
    where?: t_lvdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_lvds to fetch.
     */
    orderBy?: t_lvdOrderByWithRelationInput | t_lvdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_lvds.
     */
    cursor?: t_lvdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_lvds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_lvds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_lvds.
     */
    distinct?: T_lvdScalarFieldEnum | T_lvdScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_lvd findMany
   */
  export type t_lvdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_lvd
     */
    select?: t_lvdSelect<ExtArgs> | null
    /**
     * Filter, which t_lvds to fetch.
     */
    where?: t_lvdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_lvds to fetch.
     */
    orderBy?: t_lvdOrderByWithRelationInput | t_lvdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_lvds.
     */
    cursor?: t_lvdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_lvds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_lvds.
     */
    skip?: number
    distinct?: T_lvdScalarFieldEnum | T_lvdScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_lvd create
   */
  export type t_lvdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_lvd
     */
    select?: t_lvdSelect<ExtArgs> | null
    /**
     * The data needed to create a t_lvd.
     */
    data: XOR<t_lvdCreateInput, t_lvdUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_lvd createMany
   */
  export type t_lvdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_lvds.
     */
    data: t_lvdCreateManyInput | t_lvdCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_lvd update
   */
  export type t_lvdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_lvd
     */
    select?: t_lvdSelect<ExtArgs> | null
    /**
     * The data needed to update a t_lvd.
     */
    data: XOR<t_lvdUpdateInput, t_lvdUncheckedUpdateInput>
    /**
     * Choose, which t_lvd to update.
     */
    where: t_lvdWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_lvd updateMany
   */
  export type t_lvdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_lvds.
     */
    data: XOR<t_lvdUpdateManyMutationInput, t_lvdUncheckedUpdateManyInput>
    /**
     * Filter which t_lvds to update
     */
    where?: t_lvdWhereInput
  }


  /**
   * t_lvd upsert
   */
  export type t_lvdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_lvd
     */
    select?: t_lvdSelect<ExtArgs> | null
    /**
     * The filter to search for the t_lvd to update in case it exists.
     */
    where: t_lvdWhereUniqueInput
    /**
     * In case the t_lvd found by the `where` argument doesn't exist, create a new t_lvd with this data.
     */
    create: XOR<t_lvdCreateInput, t_lvdUncheckedCreateInput>
    /**
     * In case the t_lvd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_lvdUpdateInput, t_lvdUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_lvd delete
   */
  export type t_lvdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_lvd
     */
    select?: t_lvdSelect<ExtArgs> | null
    /**
     * Filter which t_lvd to delete.
     */
    where: t_lvdWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_lvd deleteMany
   */
  export type t_lvdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_lvds to delete
     */
    where?: t_lvdWhereInput
  }


  /**
   * t_lvd without action
   */
  export type t_lvdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_lvd
     */
    select?: t_lvdSelect<ExtArgs> | null
  }



  /**
   * Model t_dru
   */

  export type AggregateT_dru = {
    _count: T_druCountAggregateOutputType | null
    _min: T_druMinAggregateOutputType | null
    _max: T_druMaxAggregateOutputType | null
  }

  export type T_druMinAggregateOutputType = {
    id: string | null
    hcode: string | null
    hn: string | null
    an: string | null
    clinic: string | null
    person_id: string | null
    date_serv: string | null
    did: string | null
    didname: string | null
    amount: string | null
    drugprice: string | null
    drugcost: string | null
    didstd: string | null
    unit: string | null
    unit_pack: string | null
    seq: string | null
    drugremark: string | null
    pa_no: string | null
    totcopay: string | null
    use_status: string | null
    total: string | null
    sigcode: string | null
    sigtext: string | null
    provider: string | null
  }

  export type T_druMaxAggregateOutputType = {
    id: string | null
    hcode: string | null
    hn: string | null
    an: string | null
    clinic: string | null
    person_id: string | null
    date_serv: string | null
    did: string | null
    didname: string | null
    amount: string | null
    drugprice: string | null
    drugcost: string | null
    didstd: string | null
    unit: string | null
    unit_pack: string | null
    seq: string | null
    drugremark: string | null
    pa_no: string | null
    totcopay: string | null
    use_status: string | null
    total: string | null
    sigcode: string | null
    sigtext: string | null
    provider: string | null
  }

  export type T_druCountAggregateOutputType = {
    id: number
    hcode: number
    hn: number
    an: number
    clinic: number
    person_id: number
    date_serv: number
    did: number
    didname: number
    amount: number
    drugprice: number
    drugcost: number
    didstd: number
    unit: number
    unit_pack: number
    seq: number
    drugremark: number
    pa_no: number
    totcopay: number
    use_status: number
    total: number
    sigcode: number
    sigtext: number
    provider: number
    _all: number
  }


  export type T_druMinAggregateInputType = {
    id?: true
    hcode?: true
    hn?: true
    an?: true
    clinic?: true
    person_id?: true
    date_serv?: true
    did?: true
    didname?: true
    amount?: true
    drugprice?: true
    drugcost?: true
    didstd?: true
    unit?: true
    unit_pack?: true
    seq?: true
    drugremark?: true
    pa_no?: true
    totcopay?: true
    use_status?: true
    total?: true
    sigcode?: true
    sigtext?: true
    provider?: true
  }

  export type T_druMaxAggregateInputType = {
    id?: true
    hcode?: true
    hn?: true
    an?: true
    clinic?: true
    person_id?: true
    date_serv?: true
    did?: true
    didname?: true
    amount?: true
    drugprice?: true
    drugcost?: true
    didstd?: true
    unit?: true
    unit_pack?: true
    seq?: true
    drugremark?: true
    pa_no?: true
    totcopay?: true
    use_status?: true
    total?: true
    sigcode?: true
    sigtext?: true
    provider?: true
  }

  export type T_druCountAggregateInputType = {
    id?: true
    hcode?: true
    hn?: true
    an?: true
    clinic?: true
    person_id?: true
    date_serv?: true
    did?: true
    didname?: true
    amount?: true
    drugprice?: true
    drugcost?: true
    didstd?: true
    unit?: true
    unit_pack?: true
    seq?: true
    drugremark?: true
    pa_no?: true
    totcopay?: true
    use_status?: true
    total?: true
    sigcode?: true
    sigtext?: true
    provider?: true
    _all?: true
  }

  export type T_druAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_dru to aggregate.
     */
    where?: t_druWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_drus to fetch.
     */
    orderBy?: t_druOrderByWithRelationInput | t_druOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_druWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_drus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_drus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_drus
    **/
    _count?: true | T_druCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_druMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_druMaxAggregateInputType
  }

  export type GetT_druAggregateType<T extends T_druAggregateArgs> = {
        [P in keyof T & keyof AggregateT_dru]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_dru[P]>
      : GetScalarType<T[P], AggregateT_dru[P]>
  }




  export type t_druGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_druWhereInput
    orderBy?: t_druOrderByWithAggregationInput | t_druOrderByWithAggregationInput[]
    by: T_druScalarFieldEnum[] | T_druScalarFieldEnum
    having?: t_druScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_druCountAggregateInputType | true
    _min?: T_druMinAggregateInputType
    _max?: T_druMaxAggregateInputType
  }

  export type T_druGroupByOutputType = {
    id: string
    hcode: string
    hn: string
    an: string
    clinic: string | null
    person_id: string
    date_serv: string
    did: string
    didname: string
    amount: string
    drugprice: string
    drugcost: string | null
    didstd: string
    unit: string
    unit_pack: string | null
    seq: string
    drugremark: string
    pa_no: string
    totcopay: string | null
    use_status: string
    total: string | null
    sigcode: string | null
    sigtext: string | null
    provider: string
    _count: T_druCountAggregateOutputType | null
    _min: T_druMinAggregateOutputType | null
    _max: T_druMaxAggregateOutputType | null
  }

  type GetT_druGroupByPayload<T extends t_druGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_druGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_druGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_druGroupByOutputType[P]>
            : GetScalarType<T[P], T_druGroupByOutputType[P]>
        }
      >
    >


  export type t_druSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hcode?: boolean
    hn?: boolean
    an?: boolean
    clinic?: boolean
    person_id?: boolean
    date_serv?: boolean
    did?: boolean
    didname?: boolean
    amount?: boolean
    drugprice?: boolean
    drugcost?: boolean
    didstd?: boolean
    unit?: boolean
    unit_pack?: boolean
    seq?: boolean
    drugremark?: boolean
    pa_no?: boolean
    totcopay?: boolean
    use_status?: boolean
    total?: boolean
    sigcode?: boolean
    sigtext?: boolean
    provider?: boolean
  }, ExtArgs["result"]["t_dru"]>

  export type t_druSelectScalar = {
    id?: boolean
    hcode?: boolean
    hn?: boolean
    an?: boolean
    clinic?: boolean
    person_id?: boolean
    date_serv?: boolean
    did?: boolean
    didname?: boolean
    amount?: boolean
    drugprice?: boolean
    drugcost?: boolean
    didstd?: boolean
    unit?: boolean
    unit_pack?: boolean
    seq?: boolean
    drugremark?: boolean
    pa_no?: boolean
    totcopay?: boolean
    use_status?: boolean
    total?: boolean
    sigcode?: boolean
    sigtext?: boolean
    provider?: boolean
  }


  export type $t_druPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_dru"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hcode: string
      hn: string
      an: string
      clinic: string | null
      person_id: string
      date_serv: string
      did: string
      didname: string
      amount: string
      drugprice: string
      drugcost: string | null
      didstd: string
      unit: string
      unit_pack: string | null
      seq: string
      drugremark: string
      pa_no: string
      totcopay: string | null
      use_status: string
      total: string | null
      sigcode: string | null
      sigtext: string | null
      provider: string
    }, ExtArgs["result"]["t_dru"]>
    composites: {}
  }


  type t_druGetPayload<S extends boolean | null | undefined | t_druDefaultArgs> = $Result.GetResult<Prisma.$t_druPayload, S>

  type t_druCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_druFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_druCountAggregateInputType | true
    }

  export interface t_druDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_dru'], meta: { name: 't_dru' } }
    /**
     * Find zero or one T_dru that matches the filter.
     * @param {t_druFindUniqueArgs} args - Arguments to find a T_dru
     * @example
     * // Get one T_dru
     * const t_dru = await prisma.t_dru.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_druFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_druFindUniqueArgs<ExtArgs>>
    ): Prisma__t_druClient<$Result.GetResult<Prisma.$t_druPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_dru that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_druFindUniqueOrThrowArgs} args - Arguments to find a T_dru
     * @example
     * // Get one T_dru
     * const t_dru = await prisma.t_dru.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_druFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_druFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_druClient<$Result.GetResult<Prisma.$t_druPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_dru that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_druFindFirstArgs} args - Arguments to find a T_dru
     * @example
     * // Get one T_dru
     * const t_dru = await prisma.t_dru.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_druFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_druFindFirstArgs<ExtArgs>>
    ): Prisma__t_druClient<$Result.GetResult<Prisma.$t_druPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_dru that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_druFindFirstOrThrowArgs} args - Arguments to find a T_dru
     * @example
     * // Get one T_dru
     * const t_dru = await prisma.t_dru.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_druFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_druFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_druClient<$Result.GetResult<Prisma.$t_druPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_drus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_druFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_drus
     * const t_drus = await prisma.t_dru.findMany()
     * 
     * // Get first 10 T_drus
     * const t_drus = await prisma.t_dru.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_druWithIdOnly = await prisma.t_dru.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_druFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_druFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_druPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_dru.
     * @param {t_druCreateArgs} args - Arguments to create a T_dru.
     * @example
     * // Create one T_dru
     * const T_dru = await prisma.t_dru.create({
     *   data: {
     *     // ... data to create a T_dru
     *   }
     * })
     * 
    **/
    create<T extends t_druCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_druCreateArgs<ExtArgs>>
    ): Prisma__t_druClient<$Result.GetResult<Prisma.$t_druPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_drus.
     *     @param {t_druCreateManyArgs} args - Arguments to create many T_drus.
     *     @example
     *     // Create many T_drus
     *     const t_dru = await prisma.t_dru.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_druCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_druCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_dru.
     * @param {t_druDeleteArgs} args - Arguments to delete one T_dru.
     * @example
     * // Delete one T_dru
     * const T_dru = await prisma.t_dru.delete({
     *   where: {
     *     // ... filter to delete one T_dru
     *   }
     * })
     * 
    **/
    delete<T extends t_druDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_druDeleteArgs<ExtArgs>>
    ): Prisma__t_druClient<$Result.GetResult<Prisma.$t_druPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_dru.
     * @param {t_druUpdateArgs} args - Arguments to update one T_dru.
     * @example
     * // Update one T_dru
     * const t_dru = await prisma.t_dru.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_druUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_druUpdateArgs<ExtArgs>>
    ): Prisma__t_druClient<$Result.GetResult<Prisma.$t_druPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_drus.
     * @param {t_druDeleteManyArgs} args - Arguments to filter T_drus to delete.
     * @example
     * // Delete a few T_drus
     * const { count } = await prisma.t_dru.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_druDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_druDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_drus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_druUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_drus
     * const t_dru = await prisma.t_dru.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_druUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_druUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_dru.
     * @param {t_druUpsertArgs} args - Arguments to update or create a T_dru.
     * @example
     * // Update or create a T_dru
     * const t_dru = await prisma.t_dru.upsert({
     *   create: {
     *     // ... data to create a T_dru
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_dru we want to update
     *   }
     * })
    **/
    upsert<T extends t_druUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_druUpsertArgs<ExtArgs>>
    ): Prisma__t_druClient<$Result.GetResult<Prisma.$t_druPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_drus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_druCountArgs} args - Arguments to filter T_drus to count.
     * @example
     * // Count the number of T_drus
     * const count = await prisma.t_dru.count({
     *   where: {
     *     // ... the filter for the T_drus we want to count
     *   }
     * })
    **/
    count<T extends t_druCountArgs>(
      args?: Subset<T, t_druCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_druCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_dru.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_druAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_druAggregateArgs>(args: Subset<T, T_druAggregateArgs>): Prisma.PrismaPromise<GetT_druAggregateType<T>>

    /**
     * Group by T_dru.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_druGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_druGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_druGroupByArgs['orderBy'] }
        : { orderBy?: t_druGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_druGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_druGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_dru model
   */
  readonly fields: t_druFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_dru.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_druClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_dru model
   */ 
  interface t_druFieldRefs {
    readonly id: FieldRef<"t_dru", 'String'>
    readonly hcode: FieldRef<"t_dru", 'String'>
    readonly hn: FieldRef<"t_dru", 'String'>
    readonly an: FieldRef<"t_dru", 'String'>
    readonly clinic: FieldRef<"t_dru", 'String'>
    readonly person_id: FieldRef<"t_dru", 'String'>
    readonly date_serv: FieldRef<"t_dru", 'String'>
    readonly did: FieldRef<"t_dru", 'String'>
    readonly didname: FieldRef<"t_dru", 'String'>
    readonly amount: FieldRef<"t_dru", 'String'>
    readonly drugprice: FieldRef<"t_dru", 'String'>
    readonly drugcost: FieldRef<"t_dru", 'String'>
    readonly didstd: FieldRef<"t_dru", 'String'>
    readonly unit: FieldRef<"t_dru", 'String'>
    readonly unit_pack: FieldRef<"t_dru", 'String'>
    readonly seq: FieldRef<"t_dru", 'String'>
    readonly drugremark: FieldRef<"t_dru", 'String'>
    readonly pa_no: FieldRef<"t_dru", 'String'>
    readonly totcopay: FieldRef<"t_dru", 'String'>
    readonly use_status: FieldRef<"t_dru", 'String'>
    readonly total: FieldRef<"t_dru", 'String'>
    readonly sigcode: FieldRef<"t_dru", 'String'>
    readonly sigtext: FieldRef<"t_dru", 'String'>
    readonly provider: FieldRef<"t_dru", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_dru findUnique
   */
  export type t_druFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dru
     */
    select?: t_druSelect<ExtArgs> | null
    /**
     * Filter, which t_dru to fetch.
     */
    where: t_druWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_dru findUniqueOrThrow
   */
  export type t_druFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dru
     */
    select?: t_druSelect<ExtArgs> | null
    /**
     * Filter, which t_dru to fetch.
     */
    where: t_druWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_dru findFirst
   */
  export type t_druFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dru
     */
    select?: t_druSelect<ExtArgs> | null
    /**
     * Filter, which t_dru to fetch.
     */
    where?: t_druWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_drus to fetch.
     */
    orderBy?: t_druOrderByWithRelationInput | t_druOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_drus.
     */
    cursor?: t_druWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_drus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_drus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_drus.
     */
    distinct?: T_druScalarFieldEnum | T_druScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_dru findFirstOrThrow
   */
  export type t_druFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dru
     */
    select?: t_druSelect<ExtArgs> | null
    /**
     * Filter, which t_dru to fetch.
     */
    where?: t_druWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_drus to fetch.
     */
    orderBy?: t_druOrderByWithRelationInput | t_druOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_drus.
     */
    cursor?: t_druWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_drus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_drus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_drus.
     */
    distinct?: T_druScalarFieldEnum | T_druScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_dru findMany
   */
  export type t_druFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dru
     */
    select?: t_druSelect<ExtArgs> | null
    /**
     * Filter, which t_drus to fetch.
     */
    where?: t_druWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_drus to fetch.
     */
    orderBy?: t_druOrderByWithRelationInput | t_druOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_drus.
     */
    cursor?: t_druWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_drus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_drus.
     */
    skip?: number
    distinct?: T_druScalarFieldEnum | T_druScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_dru create
   */
  export type t_druCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dru
     */
    select?: t_druSelect<ExtArgs> | null
    /**
     * The data needed to create a t_dru.
     */
    data: XOR<t_druCreateInput, t_druUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_dru createMany
   */
  export type t_druCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_drus.
     */
    data: t_druCreateManyInput | t_druCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_dru update
   */
  export type t_druUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dru
     */
    select?: t_druSelect<ExtArgs> | null
    /**
     * The data needed to update a t_dru.
     */
    data: XOR<t_druUpdateInput, t_druUncheckedUpdateInput>
    /**
     * Choose, which t_dru to update.
     */
    where: t_druWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_dru updateMany
   */
  export type t_druUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_drus.
     */
    data: XOR<t_druUpdateManyMutationInput, t_druUncheckedUpdateManyInput>
    /**
     * Filter which t_drus to update
     */
    where?: t_druWhereInput
  }


  /**
   * t_dru upsert
   */
  export type t_druUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dru
     */
    select?: t_druSelect<ExtArgs> | null
    /**
     * The filter to search for the t_dru to update in case it exists.
     */
    where: t_druWhereUniqueInput
    /**
     * In case the t_dru found by the `where` argument doesn't exist, create a new t_dru with this data.
     */
    create: XOR<t_druCreateInput, t_druUncheckedCreateInput>
    /**
     * In case the t_dru was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_druUpdateInput, t_druUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_dru delete
   */
  export type t_druDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dru
     */
    select?: t_druSelect<ExtArgs> | null
    /**
     * Filter which t_dru to delete.
     */
    where: t_druWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_dru deleteMany
   */
  export type t_druDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_drus to delete
     */
    where?: t_druWhereInput
  }


  /**
   * t_dru without action
   */
  export type t_druDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dru
     */
    select?: t_druSelect<ExtArgs> | null
  }



  /**
   * Model t_labfu
   */

  export type AggregateT_labfu = {
    _count: T_labfuCountAggregateOutputType | null
    _min: T_labfuMinAggregateOutputType | null
    _max: T_labfuMaxAggregateOutputType | null
  }

  export type T_labfuMinAggregateOutputType = {
    id: string | null
    hcode: string | null
    hn: string | null
    person_id: string | null
    dateserv: string | null
    seq: string | null
    labtest: string | null
    labresult: string | null
  }

  export type T_labfuMaxAggregateOutputType = {
    id: string | null
    hcode: string | null
    hn: string | null
    person_id: string | null
    dateserv: string | null
    seq: string | null
    labtest: string | null
    labresult: string | null
  }

  export type T_labfuCountAggregateOutputType = {
    id: number
    hcode: number
    hn: number
    person_id: number
    dateserv: number
    seq: number
    labtest: number
    labresult: number
    _all: number
  }


  export type T_labfuMinAggregateInputType = {
    id?: true
    hcode?: true
    hn?: true
    person_id?: true
    dateserv?: true
    seq?: true
    labtest?: true
    labresult?: true
  }

  export type T_labfuMaxAggregateInputType = {
    id?: true
    hcode?: true
    hn?: true
    person_id?: true
    dateserv?: true
    seq?: true
    labtest?: true
    labresult?: true
  }

  export type T_labfuCountAggregateInputType = {
    id?: true
    hcode?: true
    hn?: true
    person_id?: true
    dateserv?: true
    seq?: true
    labtest?: true
    labresult?: true
    _all?: true
  }

  export type T_labfuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_labfu to aggregate.
     */
    where?: t_labfuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_labfus to fetch.
     */
    orderBy?: t_labfuOrderByWithRelationInput | t_labfuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_labfuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_labfus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_labfus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_labfus
    **/
    _count?: true | T_labfuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_labfuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_labfuMaxAggregateInputType
  }

  export type GetT_labfuAggregateType<T extends T_labfuAggregateArgs> = {
        [P in keyof T & keyof AggregateT_labfu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_labfu[P]>
      : GetScalarType<T[P], AggregateT_labfu[P]>
  }




  export type t_labfuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_labfuWhereInput
    orderBy?: t_labfuOrderByWithAggregationInput | t_labfuOrderByWithAggregationInput[]
    by: T_labfuScalarFieldEnum[] | T_labfuScalarFieldEnum
    having?: t_labfuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_labfuCountAggregateInputType | true
    _min?: T_labfuMinAggregateInputType
    _max?: T_labfuMaxAggregateInputType
  }

  export type T_labfuGroupByOutputType = {
    id: string
    hcode: string
    hn: string
    person_id: string
    dateserv: string
    seq: string
    labtest: string
    labresult: string
    _count: T_labfuCountAggregateOutputType | null
    _min: T_labfuMinAggregateOutputType | null
    _max: T_labfuMaxAggregateOutputType | null
  }

  type GetT_labfuGroupByPayload<T extends t_labfuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_labfuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_labfuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_labfuGroupByOutputType[P]>
            : GetScalarType<T[P], T_labfuGroupByOutputType[P]>
        }
      >
    >


  export type t_labfuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hcode?: boolean
    hn?: boolean
    person_id?: boolean
    dateserv?: boolean
    seq?: boolean
    labtest?: boolean
    labresult?: boolean
  }, ExtArgs["result"]["t_labfu"]>

  export type t_labfuSelectScalar = {
    id?: boolean
    hcode?: boolean
    hn?: boolean
    person_id?: boolean
    dateserv?: boolean
    seq?: boolean
    labtest?: boolean
    labresult?: boolean
  }


  export type $t_labfuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_labfu"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hcode: string
      hn: string
      person_id: string
      dateserv: string
      seq: string
      labtest: string
      labresult: string
    }, ExtArgs["result"]["t_labfu"]>
    composites: {}
  }


  type t_labfuGetPayload<S extends boolean | null | undefined | t_labfuDefaultArgs> = $Result.GetResult<Prisma.$t_labfuPayload, S>

  type t_labfuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<t_labfuFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: T_labfuCountAggregateInputType | true
    }

  export interface t_labfuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_labfu'], meta: { name: 't_labfu' } }
    /**
     * Find zero or one T_labfu that matches the filter.
     * @param {t_labfuFindUniqueArgs} args - Arguments to find a T_labfu
     * @example
     * // Get one T_labfu
     * const t_labfu = await prisma.t_labfu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends t_labfuFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, t_labfuFindUniqueArgs<ExtArgs>>
    ): Prisma__t_labfuClient<$Result.GetResult<Prisma.$t_labfuPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_labfu that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {t_labfuFindUniqueOrThrowArgs} args - Arguments to find a T_labfu
     * @example
     * // Get one T_labfu
     * const t_labfu = await prisma.t_labfu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends t_labfuFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_labfuFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__t_labfuClient<$Result.GetResult<Prisma.$t_labfuPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_labfu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_labfuFindFirstArgs} args - Arguments to find a T_labfu
     * @example
     * // Get one T_labfu
     * const t_labfu = await prisma.t_labfu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends t_labfuFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, t_labfuFindFirstArgs<ExtArgs>>
    ): Prisma__t_labfuClient<$Result.GetResult<Prisma.$t_labfuPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_labfu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_labfuFindFirstOrThrowArgs} args - Arguments to find a T_labfu
     * @example
     * // Get one T_labfu
     * const t_labfu = await prisma.t_labfu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends t_labfuFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, t_labfuFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__t_labfuClient<$Result.GetResult<Prisma.$t_labfuPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_labfus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_labfuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_labfus
     * const t_labfus = await prisma.t_labfu.findMany()
     * 
     * // Get first 10 T_labfus
     * const t_labfus = await prisma.t_labfu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_labfuWithIdOnly = await prisma.t_labfu.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends t_labfuFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_labfuFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_labfuPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_labfu.
     * @param {t_labfuCreateArgs} args - Arguments to create a T_labfu.
     * @example
     * // Create one T_labfu
     * const T_labfu = await prisma.t_labfu.create({
     *   data: {
     *     // ... data to create a T_labfu
     *   }
     * })
     * 
    **/
    create<T extends t_labfuCreateArgs<ExtArgs>>(
      args: SelectSubset<T, t_labfuCreateArgs<ExtArgs>>
    ): Prisma__t_labfuClient<$Result.GetResult<Prisma.$t_labfuPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_labfus.
     *     @param {t_labfuCreateManyArgs} args - Arguments to create many T_labfus.
     *     @example
     *     // Create many T_labfus
     *     const t_labfu = await prisma.t_labfu.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends t_labfuCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_labfuCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_labfu.
     * @param {t_labfuDeleteArgs} args - Arguments to delete one T_labfu.
     * @example
     * // Delete one T_labfu
     * const T_labfu = await prisma.t_labfu.delete({
     *   where: {
     *     // ... filter to delete one T_labfu
     *   }
     * })
     * 
    **/
    delete<T extends t_labfuDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, t_labfuDeleteArgs<ExtArgs>>
    ): Prisma__t_labfuClient<$Result.GetResult<Prisma.$t_labfuPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_labfu.
     * @param {t_labfuUpdateArgs} args - Arguments to update one T_labfu.
     * @example
     * // Update one T_labfu
     * const t_labfu = await prisma.t_labfu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends t_labfuUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, t_labfuUpdateArgs<ExtArgs>>
    ): Prisma__t_labfuClient<$Result.GetResult<Prisma.$t_labfuPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_labfus.
     * @param {t_labfuDeleteManyArgs} args - Arguments to filter T_labfus to delete.
     * @example
     * // Delete a few T_labfus
     * const { count } = await prisma.t_labfu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends t_labfuDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, t_labfuDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_labfus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_labfuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_labfus
     * const t_labfu = await prisma.t_labfu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends t_labfuUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, t_labfuUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_labfu.
     * @param {t_labfuUpsertArgs} args - Arguments to update or create a T_labfu.
     * @example
     * // Update or create a T_labfu
     * const t_labfu = await prisma.t_labfu.upsert({
     *   create: {
     *     // ... data to create a T_labfu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_labfu we want to update
     *   }
     * })
    **/
    upsert<T extends t_labfuUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, t_labfuUpsertArgs<ExtArgs>>
    ): Prisma__t_labfuClient<$Result.GetResult<Prisma.$t_labfuPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_labfus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_labfuCountArgs} args - Arguments to filter T_labfus to count.
     * @example
     * // Count the number of T_labfus
     * const count = await prisma.t_labfu.count({
     *   where: {
     *     // ... the filter for the T_labfus we want to count
     *   }
     * })
    **/
    count<T extends t_labfuCountArgs>(
      args?: Subset<T, t_labfuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_labfuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_labfu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_labfuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_labfuAggregateArgs>(args: Subset<T, T_labfuAggregateArgs>): Prisma.PrismaPromise<GetT_labfuAggregateType<T>>

    /**
     * Group by T_labfu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_labfuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends t_labfuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_labfuGroupByArgs['orderBy'] }
        : { orderBy?: t_labfuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, t_labfuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_labfuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_labfu model
   */
  readonly fields: t_labfuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_labfu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_labfuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the t_labfu model
   */ 
  interface t_labfuFieldRefs {
    readonly id: FieldRef<"t_labfu", 'String'>
    readonly hcode: FieldRef<"t_labfu", 'String'>
    readonly hn: FieldRef<"t_labfu", 'String'>
    readonly person_id: FieldRef<"t_labfu", 'String'>
    readonly dateserv: FieldRef<"t_labfu", 'String'>
    readonly seq: FieldRef<"t_labfu", 'String'>
    readonly labtest: FieldRef<"t_labfu", 'String'>
    readonly labresult: FieldRef<"t_labfu", 'String'>
  }
    

  // Custom InputTypes

  /**
   * t_labfu findUnique
   */
  export type t_labfuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_labfu
     */
    select?: t_labfuSelect<ExtArgs> | null
    /**
     * Filter, which t_labfu to fetch.
     */
    where: t_labfuWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_labfu findUniqueOrThrow
   */
  export type t_labfuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_labfu
     */
    select?: t_labfuSelect<ExtArgs> | null
    /**
     * Filter, which t_labfu to fetch.
     */
    where: t_labfuWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_labfu findFirst
   */
  export type t_labfuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_labfu
     */
    select?: t_labfuSelect<ExtArgs> | null
    /**
     * Filter, which t_labfu to fetch.
     */
    where?: t_labfuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_labfus to fetch.
     */
    orderBy?: t_labfuOrderByWithRelationInput | t_labfuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_labfus.
     */
    cursor?: t_labfuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_labfus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_labfus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_labfus.
     */
    distinct?: T_labfuScalarFieldEnum | T_labfuScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_labfu findFirstOrThrow
   */
  export type t_labfuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_labfu
     */
    select?: t_labfuSelect<ExtArgs> | null
    /**
     * Filter, which t_labfu to fetch.
     */
    where?: t_labfuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_labfus to fetch.
     */
    orderBy?: t_labfuOrderByWithRelationInput | t_labfuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_labfus.
     */
    cursor?: t_labfuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_labfus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_labfus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_labfus.
     */
    distinct?: T_labfuScalarFieldEnum | T_labfuScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_labfu findMany
   */
  export type t_labfuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_labfu
     */
    select?: t_labfuSelect<ExtArgs> | null
    /**
     * Filter, which t_labfus to fetch.
     */
    where?: t_labfuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_labfus to fetch.
     */
    orderBy?: t_labfuOrderByWithRelationInput | t_labfuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_labfus.
     */
    cursor?: t_labfuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_labfus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_labfus.
     */
    skip?: number
    distinct?: T_labfuScalarFieldEnum | T_labfuScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_labfu create
   */
  export type t_labfuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_labfu
     */
    select?: t_labfuSelect<ExtArgs> | null
    /**
     * The data needed to create a t_labfu.
     */
    data: XOR<t_labfuCreateInput, t_labfuUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_labfu createMany
   */
  export type t_labfuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_labfus.
     */
    data: t_labfuCreateManyInput | t_labfuCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * t_labfu update
   */
  export type t_labfuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_labfu
     */
    select?: t_labfuSelect<ExtArgs> | null
    /**
     * The data needed to update a t_labfu.
     */
    data: XOR<t_labfuUpdateInput, t_labfuUncheckedUpdateInput>
    /**
     * Choose, which t_labfu to update.
     */
    where: t_labfuWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_labfu updateMany
   */
  export type t_labfuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_labfus.
     */
    data: XOR<t_labfuUpdateManyMutationInput, t_labfuUncheckedUpdateManyInput>
    /**
     * Filter which t_labfus to update
     */
    where?: t_labfuWhereInput
  }


  /**
   * t_labfu upsert
   */
  export type t_labfuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_labfu
     */
    select?: t_labfuSelect<ExtArgs> | null
    /**
     * The filter to search for the t_labfu to update in case it exists.
     */
    where: t_labfuWhereUniqueInput
    /**
     * In case the t_labfu found by the `where` argument doesn't exist, create a new t_labfu with this data.
     */
    create: XOR<t_labfuCreateInput, t_labfuUncheckedCreateInput>
    /**
     * In case the t_labfu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_labfuUpdateInput, t_labfuUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_labfu delete
   */
  export type t_labfuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_labfu
     */
    select?: t_labfuSelect<ExtArgs> | null
    /**
     * Filter which t_labfu to delete.
     */
    where: t_labfuWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * t_labfu deleteMany
   */
  export type t_labfuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_labfus to delete
     */
    where?: t_labfuWhereInput
  }


  /**
   * t_labfu without action
   */
  export type t_labfuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_labfu
     */
    select?: t_labfuSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const T_insScalarFieldEnum: {
    id: 'id',
    hn: 'hn',
    inscl: 'inscl',
    subtype: 'subtype',
    cid: 'cid',
    hcode: 'hcode',
    dateexp: 'dateexp',
    hospmain: 'hospmain',
    hospsub: 'hospsub',
    govcode: 'govcode',
    govname: 'govname',
    permitno: 'permitno',
    docno: 'docno',
    ownrpid: 'ownrpid',
    ownname: 'ownname',
    an: 'an',
    seq: 'seq',
    subinscl: 'subinscl',
    relinscl: 'relinscl',
    htype: 'htype'
  };

  export type T_insScalarFieldEnum = (typeof T_insScalarFieldEnum)[keyof typeof T_insScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const T_patScalarFieldEnum: {
    id: 'id',
    hcode: 'hcode',
    hn: 'hn',
    changwat: 'changwat',
    amphur: 'amphur',
    dob: 'dob',
    sex: 'sex',
    marriage: 'marriage',
    occupa: 'occupa',
    nation: 'nation',
    person_id: 'person_id',
    namepat: 'namepat',
    title: 'title',
    fname: 'fname',
    lname: 'lname',
    idtype: 'idtype'
  };

  export type T_patScalarFieldEnum = (typeof T_patScalarFieldEnum)[keyof typeof T_patScalarFieldEnum]


  export const T_opdScalarFieldEnum: {
    id: 'id',
    hn: 'hn',
    clinic: 'clinic',
    dateopd: 'dateopd',
    timeopd: 'timeopd',
    seq: 'seq',
    uuc: 'uuc',
    detail: 'detail',
    btemp: 'btemp',
    sbp: 'sbp',
    dbp: 'dbp',
    pr: 'pr',
    rr: 'rr',
    optype: 'optype',
    typein: 'typein',
    typeout: 'typeout'
  };

  export type T_opdScalarFieldEnum = (typeof T_opdScalarFieldEnum)[keyof typeof T_opdScalarFieldEnum]


  export const T_orfScalarFieldEnum: {
    id: 'id',
    hn: 'hn',
    dateopd: 'dateopd',
    clinic: 'clinic',
    refer: 'refer',
    refertype: 'refertype',
    seq: 'seq',
    referdate: 'referdate'
  };

  export type T_orfScalarFieldEnum = (typeof T_orfScalarFieldEnum)[keyof typeof T_orfScalarFieldEnum]


  export const T_odxScalarFieldEnum: {
    id: 'id',
    hn: 'hn',
    datedx: 'datedx',
    clinic: 'clinic',
    diag: 'diag',
    dxtype: 'dxtype',
    drdx: 'drdx',
    person_id: 'person_id',
    seq: 'seq'
  };

  export type T_odxScalarFieldEnum = (typeof T_odxScalarFieldEnum)[keyof typeof T_odxScalarFieldEnum]


  export const T_oopScalarFieldEnum: {
    id: 'id',
    hn: 'hn',
    dateopd: 'dateopd',
    clinic: 'clinic',
    oper: 'oper',
    dropid: 'dropid',
    person_id: 'person_id',
    seq: 'seq',
    servprice: 'servprice'
  };

  export type T_oopScalarFieldEnum = (typeof T_oopScalarFieldEnum)[keyof typeof T_oopScalarFieldEnum]


  export const T_ipdScalarFieldEnum: {
    id: 'id',
    hn: 'hn',
    an: 'an',
    dateadm: 'dateadm',
    timeadm: 'timeadm',
    datedsc: 'datedsc',
    timedsc: 'timedsc',
    dischs: 'dischs',
    discht: 'discht',
    warddsc: 'warddsc',
    dept: 'dept',
    adm_w: 'adm_w',
    uuc: 'uuc',
    svctype: 'svctype'
  };

  export type T_ipdScalarFieldEnum = (typeof T_ipdScalarFieldEnum)[keyof typeof T_ipdScalarFieldEnum]


  export const T_irfScalarFieldEnum: {
    id: 'id',
    an: 'an',
    refer: 'refer',
    refertype: 'refertype'
  };

  export type T_irfScalarFieldEnum = (typeof T_irfScalarFieldEnum)[keyof typeof T_irfScalarFieldEnum]


  export const T_idxScalarFieldEnum: {
    id: 'id',
    an: 'an',
    diag: 'diag',
    dxtype: 'dxtype',
    drdx: 'drdx'
  };

  export type T_idxScalarFieldEnum = (typeof T_idxScalarFieldEnum)[keyof typeof T_idxScalarFieldEnum]


  export const T_iopScalarFieldEnum: {
    id: 'id',
    an: 'an',
    oper: 'oper',
    optype: 'optype',
    dropid: 'dropid',
    datein: 'datein',
    timein: 'timein',
    dateout: 'dateout',
    timeout: 'timeout'
  };

  export type T_iopScalarFieldEnum = (typeof T_iopScalarFieldEnum)[keyof typeof T_iopScalarFieldEnum]


  export const T_chtScalarFieldEnum: {
    id: 'id',
    hn: 'hn',
    an: 'an',
    date: 'date',
    total: 'total',
    paid: 'paid',
    pttype: 'pttype',
    person_id: 'person_id',
    seq: 'seq',
    opd_memo: 'opd_memo',
    invoice_no: 'invoice_no',
    invoice_lt: 'invoice_lt'
  };

  export type T_chtScalarFieldEnum = (typeof T_chtScalarFieldEnum)[keyof typeof T_chtScalarFieldEnum]


  export const T_chaScalarFieldEnum: {
    id: 'id',
    hn: 'hn',
    an: 'an',
    date: 'date',
    chrgitem: 'chrgitem',
    amount: 'amount',
    person_id: 'person_id',
    seq: 'seq'
  };

  export type T_chaScalarFieldEnum = (typeof T_chaScalarFieldEnum)[keyof typeof T_chaScalarFieldEnum]


  export const T_aerScalarFieldEnum: {
    id: 'id',
    hn: 'hn',
    an: 'an',
    dateopd: 'dateopd',
    authae: 'authae',
    aedate: 'aedate',
    aetime: 'aetime',
    aetype: 'aetype',
    refer_no: 'refer_no',
    refmaini: 'refmaini',
    ireftype: 'ireftype',
    refmaino: 'refmaino',
    oreftype: 'oreftype',
    ucae: 'ucae',
    emtype: 'emtype',
    seq: 'seq',
    aestatus: 'aestatus',
    dalert: 'dalert',
    talert: 'talert'
  };

  export type T_aerScalarFieldEnum = (typeof T_aerScalarFieldEnum)[keyof typeof T_aerScalarFieldEnum]


  export const T_adpScalarFieldEnum: {
    id: 'id',
    hn: 'hn',
    an: 'an',
    dateopd: 'dateopd',
    type: 'type',
    code: 'code',
    qty: 'qty',
    rate: 'rate',
    seq: 'seq',
    cagcode: 'cagcode',
    dose: 'dose',
    ca_type: 'ca_type',
    serialno: 'serialno',
    totcopay: 'totcopay',
    use_status: 'use_status',
    total: 'total',
    tmltcode: 'tmltcode',
    status1: 'status1',
    bi: 'bi',
    clinic: 'clinic',
    itemsrc: 'itemsrc',
    provider: 'provider',
    gravida: 'gravida',
    ga_week: 'ga_week',
    dcip_e_screen: 'dcip_e_screen',
    lmp: 'lmp'
  };

  export type T_adpScalarFieldEnum = (typeof T_adpScalarFieldEnum)[keyof typeof T_adpScalarFieldEnum]


  export const T_lvdScalarFieldEnum: {
    id: 'id',
    seqlvd: 'seqlvd',
    an: 'an',
    dateout: 'dateout',
    timeout: 'timeout',
    datein: 'datein',
    timein: 'timein',
    qtyday: 'qtyday'
  };

  export type T_lvdScalarFieldEnum = (typeof T_lvdScalarFieldEnum)[keyof typeof T_lvdScalarFieldEnum]


  export const T_druScalarFieldEnum: {
    id: 'id',
    hcode: 'hcode',
    hn: 'hn',
    an: 'an',
    clinic: 'clinic',
    person_id: 'person_id',
    date_serv: 'date_serv',
    did: 'did',
    didname: 'didname',
    amount: 'amount',
    drugprice: 'drugprice',
    drugcost: 'drugcost',
    didstd: 'didstd',
    unit: 'unit',
    unit_pack: 'unit_pack',
    seq: 'seq',
    drugremark: 'drugremark',
    pa_no: 'pa_no',
    totcopay: 'totcopay',
    use_status: 'use_status',
    total: 'total',
    sigcode: 'sigcode',
    sigtext: 'sigtext',
    provider: 'provider'
  };

  export type T_druScalarFieldEnum = (typeof T_druScalarFieldEnum)[keyof typeof T_druScalarFieldEnum]


  export const T_labfuScalarFieldEnum: {
    id: 'id',
    hcode: 'hcode',
    hn: 'hn',
    person_id: 'person_id',
    dateserv: 'dateserv',
    seq: 'seq',
    labtest: 'labtest',
    labresult: 'labresult'
  };

  export type T_labfuScalarFieldEnum = (typeof T_labfuScalarFieldEnum)[keyof typeof T_labfuScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type t_insWhereInput = {
    AND?: t_insWhereInput | t_insWhereInput[]
    OR?: t_insWhereInput[]
    NOT?: t_insWhereInput | t_insWhereInput[]
    id?: StringFilter<"t_ins"> | string
    hn?: StringNullableFilter<"t_ins"> | string | null
    inscl?: StringFilter<"t_ins"> | string
    subtype?: StringNullableFilter<"t_ins"> | string | null
    cid?: StringNullableFilter<"t_ins"> | string | null
    hcode?: StringFilter<"t_ins"> | string
    dateexp?: StringNullableFilter<"t_ins"> | string | null
    hospmain?: StringFilter<"t_ins"> | string
    hospsub?: StringFilter<"t_ins"> | string
    govcode?: StringNullableFilter<"t_ins"> | string | null
    govname?: StringNullableFilter<"t_ins"> | string | null
    permitno?: StringNullableFilter<"t_ins"> | string | null
    docno?: StringNullableFilter<"t_ins"> | string | null
    ownrpid?: StringNullableFilter<"t_ins"> | string | null
    ownname?: StringNullableFilter<"t_ins"> | string | null
    an?: StringFilter<"t_ins"> | string
    seq?: StringFilter<"t_ins"> | string
    subinscl?: StringNullableFilter<"t_ins"> | string | null
    relinscl?: StringNullableFilter<"t_ins"> | string | null
    htype?: StringNullableFilter<"t_ins"> | string | null
  }

  export type t_insOrderByWithRelationInput = {
    id?: SortOrder
    hn?: SortOrderInput | SortOrder
    inscl?: SortOrder
    subtype?: SortOrderInput | SortOrder
    cid?: SortOrderInput | SortOrder
    hcode?: SortOrder
    dateexp?: SortOrderInput | SortOrder
    hospmain?: SortOrder
    hospsub?: SortOrder
    govcode?: SortOrderInput | SortOrder
    govname?: SortOrderInput | SortOrder
    permitno?: SortOrderInput | SortOrder
    docno?: SortOrderInput | SortOrder
    ownrpid?: SortOrderInput | SortOrder
    ownname?: SortOrderInput | SortOrder
    an?: SortOrder
    seq?: SortOrder
    subinscl?: SortOrderInput | SortOrder
    relinscl?: SortOrderInput | SortOrder
    htype?: SortOrderInput | SortOrder
  }

  export type t_insWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_insWhereInput | t_insWhereInput[]
    OR?: t_insWhereInput[]
    NOT?: t_insWhereInput | t_insWhereInput[]
    hn?: StringNullableFilter<"t_ins"> | string | null
    inscl?: StringFilter<"t_ins"> | string
    subtype?: StringNullableFilter<"t_ins"> | string | null
    cid?: StringNullableFilter<"t_ins"> | string | null
    hcode?: StringFilter<"t_ins"> | string
    dateexp?: StringNullableFilter<"t_ins"> | string | null
    hospmain?: StringFilter<"t_ins"> | string
    hospsub?: StringFilter<"t_ins"> | string
    govcode?: StringNullableFilter<"t_ins"> | string | null
    govname?: StringNullableFilter<"t_ins"> | string | null
    permitno?: StringNullableFilter<"t_ins"> | string | null
    docno?: StringNullableFilter<"t_ins"> | string | null
    ownrpid?: StringNullableFilter<"t_ins"> | string | null
    ownname?: StringNullableFilter<"t_ins"> | string | null
    an?: StringFilter<"t_ins"> | string
    seq?: StringFilter<"t_ins"> | string
    subinscl?: StringNullableFilter<"t_ins"> | string | null
    relinscl?: StringNullableFilter<"t_ins"> | string | null
    htype?: StringNullableFilter<"t_ins"> | string | null
  }, "id" | "id">

  export type t_insOrderByWithAggregationInput = {
    id?: SortOrder
    hn?: SortOrderInput | SortOrder
    inscl?: SortOrder
    subtype?: SortOrderInput | SortOrder
    cid?: SortOrderInput | SortOrder
    hcode?: SortOrder
    dateexp?: SortOrderInput | SortOrder
    hospmain?: SortOrder
    hospsub?: SortOrder
    govcode?: SortOrderInput | SortOrder
    govname?: SortOrderInput | SortOrder
    permitno?: SortOrderInput | SortOrder
    docno?: SortOrderInput | SortOrder
    ownrpid?: SortOrderInput | SortOrder
    ownname?: SortOrderInput | SortOrder
    an?: SortOrder
    seq?: SortOrder
    subinscl?: SortOrderInput | SortOrder
    relinscl?: SortOrderInput | SortOrder
    htype?: SortOrderInput | SortOrder
    _count?: t_insCountOrderByAggregateInput
    _max?: t_insMaxOrderByAggregateInput
    _min?: t_insMinOrderByAggregateInput
  }

  export type t_insScalarWhereWithAggregatesInput = {
    AND?: t_insScalarWhereWithAggregatesInput | t_insScalarWhereWithAggregatesInput[]
    OR?: t_insScalarWhereWithAggregatesInput[]
    NOT?: t_insScalarWhereWithAggregatesInput | t_insScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_ins"> | string
    hn?: StringNullableWithAggregatesFilter<"t_ins"> | string | null
    inscl?: StringWithAggregatesFilter<"t_ins"> | string
    subtype?: StringNullableWithAggregatesFilter<"t_ins"> | string | null
    cid?: StringNullableWithAggregatesFilter<"t_ins"> | string | null
    hcode?: StringWithAggregatesFilter<"t_ins"> | string
    dateexp?: StringNullableWithAggregatesFilter<"t_ins"> | string | null
    hospmain?: StringWithAggregatesFilter<"t_ins"> | string
    hospsub?: StringWithAggregatesFilter<"t_ins"> | string
    govcode?: StringNullableWithAggregatesFilter<"t_ins"> | string | null
    govname?: StringNullableWithAggregatesFilter<"t_ins"> | string | null
    permitno?: StringNullableWithAggregatesFilter<"t_ins"> | string | null
    docno?: StringNullableWithAggregatesFilter<"t_ins"> | string | null
    ownrpid?: StringNullableWithAggregatesFilter<"t_ins"> | string | null
    ownname?: StringNullableWithAggregatesFilter<"t_ins"> | string | null
    an?: StringWithAggregatesFilter<"t_ins"> | string
    seq?: StringWithAggregatesFilter<"t_ins"> | string
    subinscl?: StringNullableWithAggregatesFilter<"t_ins"> | string | null
    relinscl?: StringNullableWithAggregatesFilter<"t_ins"> | string | null
    htype?: StringNullableWithAggregatesFilter<"t_ins"> | string | null
  }

  export type t_patWhereInput = {
    AND?: t_patWhereInput | t_patWhereInput[]
    OR?: t_patWhereInput[]
    NOT?: t_patWhereInput | t_patWhereInput[]
    id?: StringFilter<"t_pat"> | string
    hcode?: StringFilter<"t_pat"> | string
    hn?: StringFilter<"t_pat"> | string
    changwat?: StringNullableFilter<"t_pat"> | string | null
    amphur?: StringNullableFilter<"t_pat"> | string | null
    dob?: StringFilter<"t_pat"> | string
    sex?: StringFilter<"t_pat"> | string
    marriage?: StringFilter<"t_pat"> | string
    occupa?: StringFilter<"t_pat"> | string
    nation?: StringFilter<"t_pat"> | string
    person_id?: StringFilter<"t_pat"> | string
    namepat?: StringFilter<"t_pat"> | string
    title?: StringFilter<"t_pat"> | string
    fname?: StringFilter<"t_pat"> | string
    lname?: StringFilter<"t_pat"> | string
    idtype?: StringFilter<"t_pat"> | string
  }

  export type t_patOrderByWithRelationInput = {
    id?: SortOrder
    hcode?: SortOrder
    hn?: SortOrder
    changwat?: SortOrderInput | SortOrder
    amphur?: SortOrderInput | SortOrder
    dob?: SortOrder
    sex?: SortOrder
    marriage?: SortOrder
    occupa?: SortOrder
    nation?: SortOrder
    person_id?: SortOrder
    namepat?: SortOrder
    title?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    idtype?: SortOrder
  }

  export type t_patWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_patWhereInput | t_patWhereInput[]
    OR?: t_patWhereInput[]
    NOT?: t_patWhereInput | t_patWhereInput[]
    hcode?: StringFilter<"t_pat"> | string
    hn?: StringFilter<"t_pat"> | string
    changwat?: StringNullableFilter<"t_pat"> | string | null
    amphur?: StringNullableFilter<"t_pat"> | string | null
    dob?: StringFilter<"t_pat"> | string
    sex?: StringFilter<"t_pat"> | string
    marriage?: StringFilter<"t_pat"> | string
    occupa?: StringFilter<"t_pat"> | string
    nation?: StringFilter<"t_pat"> | string
    person_id?: StringFilter<"t_pat"> | string
    namepat?: StringFilter<"t_pat"> | string
    title?: StringFilter<"t_pat"> | string
    fname?: StringFilter<"t_pat"> | string
    lname?: StringFilter<"t_pat"> | string
    idtype?: StringFilter<"t_pat"> | string
  }, "id">

  export type t_patOrderByWithAggregationInput = {
    id?: SortOrder
    hcode?: SortOrder
    hn?: SortOrder
    changwat?: SortOrderInput | SortOrder
    amphur?: SortOrderInput | SortOrder
    dob?: SortOrder
    sex?: SortOrder
    marriage?: SortOrder
    occupa?: SortOrder
    nation?: SortOrder
    person_id?: SortOrder
    namepat?: SortOrder
    title?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    idtype?: SortOrder
    _count?: t_patCountOrderByAggregateInput
    _max?: t_patMaxOrderByAggregateInput
    _min?: t_patMinOrderByAggregateInput
  }

  export type t_patScalarWhereWithAggregatesInput = {
    AND?: t_patScalarWhereWithAggregatesInput | t_patScalarWhereWithAggregatesInput[]
    OR?: t_patScalarWhereWithAggregatesInput[]
    NOT?: t_patScalarWhereWithAggregatesInput | t_patScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_pat"> | string
    hcode?: StringWithAggregatesFilter<"t_pat"> | string
    hn?: StringWithAggregatesFilter<"t_pat"> | string
    changwat?: StringNullableWithAggregatesFilter<"t_pat"> | string | null
    amphur?: StringNullableWithAggregatesFilter<"t_pat"> | string | null
    dob?: StringWithAggregatesFilter<"t_pat"> | string
    sex?: StringWithAggregatesFilter<"t_pat"> | string
    marriage?: StringWithAggregatesFilter<"t_pat"> | string
    occupa?: StringWithAggregatesFilter<"t_pat"> | string
    nation?: StringWithAggregatesFilter<"t_pat"> | string
    person_id?: StringWithAggregatesFilter<"t_pat"> | string
    namepat?: StringWithAggregatesFilter<"t_pat"> | string
    title?: StringWithAggregatesFilter<"t_pat"> | string
    fname?: StringWithAggregatesFilter<"t_pat"> | string
    lname?: StringWithAggregatesFilter<"t_pat"> | string
    idtype?: StringWithAggregatesFilter<"t_pat"> | string
  }

  export type t_opdWhereInput = {
    AND?: t_opdWhereInput | t_opdWhereInput[]
    OR?: t_opdWhereInput[]
    NOT?: t_opdWhereInput | t_opdWhereInput[]
    id?: StringFilter<"t_opd"> | string
    hn?: StringFilter<"t_opd"> | string
    clinic?: StringNullableFilter<"t_opd"> | string | null
    dateopd?: StringFilter<"t_opd"> | string
    timeopd?: StringFilter<"t_opd"> | string
    seq?: StringFilter<"t_opd"> | string
    uuc?: StringFilter<"t_opd"> | string
    detail?: StringFilter<"t_opd"> | string
    btemp?: StringFilter<"t_opd"> | string
    sbp?: StringFilter<"t_opd"> | string
    dbp?: StringFilter<"t_opd"> | string
    pr?: StringFilter<"t_opd"> | string
    rr?: StringFilter<"t_opd"> | string
    optype?: StringFilter<"t_opd"> | string
    typein?: StringNullableFilter<"t_opd"> | string | null
    typeout?: StringNullableFilter<"t_opd"> | string | null
  }

  export type t_opdOrderByWithRelationInput = {
    id?: SortOrder
    hn?: SortOrder
    clinic?: SortOrderInput | SortOrder
    dateopd?: SortOrder
    timeopd?: SortOrder
    seq?: SortOrder
    uuc?: SortOrder
    detail?: SortOrder
    btemp?: SortOrder
    sbp?: SortOrder
    dbp?: SortOrder
    pr?: SortOrder
    rr?: SortOrder
    optype?: SortOrder
    typein?: SortOrderInput | SortOrder
    typeout?: SortOrderInput | SortOrder
  }

  export type t_opdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_opdWhereInput | t_opdWhereInput[]
    OR?: t_opdWhereInput[]
    NOT?: t_opdWhereInput | t_opdWhereInput[]
    hn?: StringFilter<"t_opd"> | string
    clinic?: StringNullableFilter<"t_opd"> | string | null
    dateopd?: StringFilter<"t_opd"> | string
    timeopd?: StringFilter<"t_opd"> | string
    seq?: StringFilter<"t_opd"> | string
    uuc?: StringFilter<"t_opd"> | string
    detail?: StringFilter<"t_opd"> | string
    btemp?: StringFilter<"t_opd"> | string
    sbp?: StringFilter<"t_opd"> | string
    dbp?: StringFilter<"t_opd"> | string
    pr?: StringFilter<"t_opd"> | string
    rr?: StringFilter<"t_opd"> | string
    optype?: StringFilter<"t_opd"> | string
    typein?: StringNullableFilter<"t_opd"> | string | null
    typeout?: StringNullableFilter<"t_opd"> | string | null
  }, "id">

  export type t_opdOrderByWithAggregationInput = {
    id?: SortOrder
    hn?: SortOrder
    clinic?: SortOrderInput | SortOrder
    dateopd?: SortOrder
    timeopd?: SortOrder
    seq?: SortOrder
    uuc?: SortOrder
    detail?: SortOrder
    btemp?: SortOrder
    sbp?: SortOrder
    dbp?: SortOrder
    pr?: SortOrder
    rr?: SortOrder
    optype?: SortOrder
    typein?: SortOrderInput | SortOrder
    typeout?: SortOrderInput | SortOrder
    _count?: t_opdCountOrderByAggregateInput
    _max?: t_opdMaxOrderByAggregateInput
    _min?: t_opdMinOrderByAggregateInput
  }

  export type t_opdScalarWhereWithAggregatesInput = {
    AND?: t_opdScalarWhereWithAggregatesInput | t_opdScalarWhereWithAggregatesInput[]
    OR?: t_opdScalarWhereWithAggregatesInput[]
    NOT?: t_opdScalarWhereWithAggregatesInput | t_opdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_opd"> | string
    hn?: StringWithAggregatesFilter<"t_opd"> | string
    clinic?: StringNullableWithAggregatesFilter<"t_opd"> | string | null
    dateopd?: StringWithAggregatesFilter<"t_opd"> | string
    timeopd?: StringWithAggregatesFilter<"t_opd"> | string
    seq?: StringWithAggregatesFilter<"t_opd"> | string
    uuc?: StringWithAggregatesFilter<"t_opd"> | string
    detail?: StringWithAggregatesFilter<"t_opd"> | string
    btemp?: StringWithAggregatesFilter<"t_opd"> | string
    sbp?: StringWithAggregatesFilter<"t_opd"> | string
    dbp?: StringWithAggregatesFilter<"t_opd"> | string
    pr?: StringWithAggregatesFilter<"t_opd"> | string
    rr?: StringWithAggregatesFilter<"t_opd"> | string
    optype?: StringWithAggregatesFilter<"t_opd"> | string
    typein?: StringNullableWithAggregatesFilter<"t_opd"> | string | null
    typeout?: StringNullableWithAggregatesFilter<"t_opd"> | string | null
  }

  export type t_orfWhereInput = {
    AND?: t_orfWhereInput | t_orfWhereInput[]
    OR?: t_orfWhereInput[]
    NOT?: t_orfWhereInput | t_orfWhereInput[]
    id?: StringFilter<"t_orf"> | string
    hn?: StringFilter<"t_orf"> | string
    dateopd?: StringFilter<"t_orf"> | string
    clinic?: StringNullableFilter<"t_orf"> | string | null
    refer?: StringFilter<"t_orf"> | string
    refertype?: StringFilter<"t_orf"> | string
    seq?: StringFilter<"t_orf"> | string
    referdate?: StringFilter<"t_orf"> | string
  }

  export type t_orfOrderByWithRelationInput = {
    id?: SortOrder
    hn?: SortOrder
    dateopd?: SortOrder
    clinic?: SortOrderInput | SortOrder
    refer?: SortOrder
    refertype?: SortOrder
    seq?: SortOrder
    referdate?: SortOrder
  }

  export type t_orfWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_orfWhereInput | t_orfWhereInput[]
    OR?: t_orfWhereInput[]
    NOT?: t_orfWhereInput | t_orfWhereInput[]
    hn?: StringFilter<"t_orf"> | string
    dateopd?: StringFilter<"t_orf"> | string
    clinic?: StringNullableFilter<"t_orf"> | string | null
    refer?: StringFilter<"t_orf"> | string
    refertype?: StringFilter<"t_orf"> | string
    seq?: StringFilter<"t_orf"> | string
    referdate?: StringFilter<"t_orf"> | string
  }, "id">

  export type t_orfOrderByWithAggregationInput = {
    id?: SortOrder
    hn?: SortOrder
    dateopd?: SortOrder
    clinic?: SortOrderInput | SortOrder
    refer?: SortOrder
    refertype?: SortOrder
    seq?: SortOrder
    referdate?: SortOrder
    _count?: t_orfCountOrderByAggregateInput
    _max?: t_orfMaxOrderByAggregateInput
    _min?: t_orfMinOrderByAggregateInput
  }

  export type t_orfScalarWhereWithAggregatesInput = {
    AND?: t_orfScalarWhereWithAggregatesInput | t_orfScalarWhereWithAggregatesInput[]
    OR?: t_orfScalarWhereWithAggregatesInput[]
    NOT?: t_orfScalarWhereWithAggregatesInput | t_orfScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_orf"> | string
    hn?: StringWithAggregatesFilter<"t_orf"> | string
    dateopd?: StringWithAggregatesFilter<"t_orf"> | string
    clinic?: StringNullableWithAggregatesFilter<"t_orf"> | string | null
    refer?: StringWithAggregatesFilter<"t_orf"> | string
    refertype?: StringWithAggregatesFilter<"t_orf"> | string
    seq?: StringWithAggregatesFilter<"t_orf"> | string
    referdate?: StringWithAggregatesFilter<"t_orf"> | string
  }

  export type t_odxWhereInput = {
    AND?: t_odxWhereInput | t_odxWhereInput[]
    OR?: t_odxWhereInput[]
    NOT?: t_odxWhereInput | t_odxWhereInput[]
    id?: StringFilter<"t_odx"> | string
    hn?: StringFilter<"t_odx"> | string
    datedx?: StringFilter<"t_odx"> | string
    clinic?: StringNullableFilter<"t_odx"> | string | null
    diag?: StringFilter<"t_odx"> | string
    dxtype?: StringFilter<"t_odx"> | string
    drdx?: StringFilter<"t_odx"> | string
    person_id?: StringFilter<"t_odx"> | string
    seq?: StringFilter<"t_odx"> | string
  }

  export type t_odxOrderByWithRelationInput = {
    id?: SortOrder
    hn?: SortOrder
    datedx?: SortOrder
    clinic?: SortOrderInput | SortOrder
    diag?: SortOrder
    dxtype?: SortOrder
    drdx?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
  }

  export type t_odxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_odxWhereInput | t_odxWhereInput[]
    OR?: t_odxWhereInput[]
    NOT?: t_odxWhereInput | t_odxWhereInput[]
    hn?: StringFilter<"t_odx"> | string
    datedx?: StringFilter<"t_odx"> | string
    clinic?: StringNullableFilter<"t_odx"> | string | null
    diag?: StringFilter<"t_odx"> | string
    dxtype?: StringFilter<"t_odx"> | string
    drdx?: StringFilter<"t_odx"> | string
    person_id?: StringFilter<"t_odx"> | string
    seq?: StringFilter<"t_odx"> | string
  }, "id">

  export type t_odxOrderByWithAggregationInput = {
    id?: SortOrder
    hn?: SortOrder
    datedx?: SortOrder
    clinic?: SortOrderInput | SortOrder
    diag?: SortOrder
    dxtype?: SortOrder
    drdx?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
    _count?: t_odxCountOrderByAggregateInput
    _max?: t_odxMaxOrderByAggregateInput
    _min?: t_odxMinOrderByAggregateInput
  }

  export type t_odxScalarWhereWithAggregatesInput = {
    AND?: t_odxScalarWhereWithAggregatesInput | t_odxScalarWhereWithAggregatesInput[]
    OR?: t_odxScalarWhereWithAggregatesInput[]
    NOT?: t_odxScalarWhereWithAggregatesInput | t_odxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_odx"> | string
    hn?: StringWithAggregatesFilter<"t_odx"> | string
    datedx?: StringWithAggregatesFilter<"t_odx"> | string
    clinic?: StringNullableWithAggregatesFilter<"t_odx"> | string | null
    diag?: StringWithAggregatesFilter<"t_odx"> | string
    dxtype?: StringWithAggregatesFilter<"t_odx"> | string
    drdx?: StringWithAggregatesFilter<"t_odx"> | string
    person_id?: StringWithAggregatesFilter<"t_odx"> | string
    seq?: StringWithAggregatesFilter<"t_odx"> | string
  }

  export type t_oopWhereInput = {
    AND?: t_oopWhereInput | t_oopWhereInput[]
    OR?: t_oopWhereInput[]
    NOT?: t_oopWhereInput | t_oopWhereInput[]
    id?: StringFilter<"t_oop"> | string
    hn?: StringFilter<"t_oop"> | string
    dateopd?: StringFilter<"t_oop"> | string
    clinic?: StringNullableFilter<"t_oop"> | string | null
    oper?: StringFilter<"t_oop"> | string
    dropid?: StringFilter<"t_oop"> | string
    person_id?: StringFilter<"t_oop"> | string
    seq?: StringFilter<"t_oop"> | string
    servprice?: StringFilter<"t_oop"> | string
  }

  export type t_oopOrderByWithRelationInput = {
    id?: SortOrder
    hn?: SortOrder
    dateopd?: SortOrder
    clinic?: SortOrderInput | SortOrder
    oper?: SortOrder
    dropid?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
    servprice?: SortOrder
  }

  export type t_oopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_oopWhereInput | t_oopWhereInput[]
    OR?: t_oopWhereInput[]
    NOT?: t_oopWhereInput | t_oopWhereInput[]
    hn?: StringFilter<"t_oop"> | string
    dateopd?: StringFilter<"t_oop"> | string
    clinic?: StringNullableFilter<"t_oop"> | string | null
    oper?: StringFilter<"t_oop"> | string
    dropid?: StringFilter<"t_oop"> | string
    person_id?: StringFilter<"t_oop"> | string
    seq?: StringFilter<"t_oop"> | string
    servprice?: StringFilter<"t_oop"> | string
  }, "id">

  export type t_oopOrderByWithAggregationInput = {
    id?: SortOrder
    hn?: SortOrder
    dateopd?: SortOrder
    clinic?: SortOrderInput | SortOrder
    oper?: SortOrder
    dropid?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
    servprice?: SortOrder
    _count?: t_oopCountOrderByAggregateInput
    _max?: t_oopMaxOrderByAggregateInput
    _min?: t_oopMinOrderByAggregateInput
  }

  export type t_oopScalarWhereWithAggregatesInput = {
    AND?: t_oopScalarWhereWithAggregatesInput | t_oopScalarWhereWithAggregatesInput[]
    OR?: t_oopScalarWhereWithAggregatesInput[]
    NOT?: t_oopScalarWhereWithAggregatesInput | t_oopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_oop"> | string
    hn?: StringWithAggregatesFilter<"t_oop"> | string
    dateopd?: StringWithAggregatesFilter<"t_oop"> | string
    clinic?: StringNullableWithAggregatesFilter<"t_oop"> | string | null
    oper?: StringWithAggregatesFilter<"t_oop"> | string
    dropid?: StringWithAggregatesFilter<"t_oop"> | string
    person_id?: StringWithAggregatesFilter<"t_oop"> | string
    seq?: StringWithAggregatesFilter<"t_oop"> | string
    servprice?: StringWithAggregatesFilter<"t_oop"> | string
  }

  export type t_ipdWhereInput = {
    AND?: t_ipdWhereInput | t_ipdWhereInput[]
    OR?: t_ipdWhereInput[]
    NOT?: t_ipdWhereInput | t_ipdWhereInput[]
    id?: StringFilter<"t_ipd"> | string
    hn?: StringFilter<"t_ipd"> | string
    an?: StringFilter<"t_ipd"> | string
    dateadm?: StringFilter<"t_ipd"> | string
    timeadm?: StringFilter<"t_ipd"> | string
    datedsc?: StringFilter<"t_ipd"> | string
    timedsc?: StringFilter<"t_ipd"> | string
    dischs?: StringFilter<"t_ipd"> | string
    discht?: StringFilter<"t_ipd"> | string
    warddsc?: StringNullableFilter<"t_ipd"> | string | null
    dept?: StringNullableFilter<"t_ipd"> | string | null
    adm_w?: StringFilter<"t_ipd"> | string
    uuc?: StringFilter<"t_ipd"> | string
    svctype?: StringFilter<"t_ipd"> | string
  }

  export type t_ipdOrderByWithRelationInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    dateadm?: SortOrder
    timeadm?: SortOrder
    datedsc?: SortOrder
    timedsc?: SortOrder
    dischs?: SortOrder
    discht?: SortOrder
    warddsc?: SortOrderInput | SortOrder
    dept?: SortOrderInput | SortOrder
    adm_w?: SortOrder
    uuc?: SortOrder
    svctype?: SortOrder
  }

  export type t_ipdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    an?: string
    AND?: t_ipdWhereInput | t_ipdWhereInput[]
    OR?: t_ipdWhereInput[]
    NOT?: t_ipdWhereInput | t_ipdWhereInput[]
    hn?: StringFilter<"t_ipd"> | string
    dateadm?: StringFilter<"t_ipd"> | string
    timeadm?: StringFilter<"t_ipd"> | string
    datedsc?: StringFilter<"t_ipd"> | string
    timedsc?: StringFilter<"t_ipd"> | string
    dischs?: StringFilter<"t_ipd"> | string
    discht?: StringFilter<"t_ipd"> | string
    warddsc?: StringNullableFilter<"t_ipd"> | string | null
    dept?: StringNullableFilter<"t_ipd"> | string | null
    adm_w?: StringFilter<"t_ipd"> | string
    uuc?: StringFilter<"t_ipd"> | string
    svctype?: StringFilter<"t_ipd"> | string
  }, "id" | "an">

  export type t_ipdOrderByWithAggregationInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    dateadm?: SortOrder
    timeadm?: SortOrder
    datedsc?: SortOrder
    timedsc?: SortOrder
    dischs?: SortOrder
    discht?: SortOrder
    warddsc?: SortOrderInput | SortOrder
    dept?: SortOrderInput | SortOrder
    adm_w?: SortOrder
    uuc?: SortOrder
    svctype?: SortOrder
    _count?: t_ipdCountOrderByAggregateInput
    _max?: t_ipdMaxOrderByAggregateInput
    _min?: t_ipdMinOrderByAggregateInput
  }

  export type t_ipdScalarWhereWithAggregatesInput = {
    AND?: t_ipdScalarWhereWithAggregatesInput | t_ipdScalarWhereWithAggregatesInput[]
    OR?: t_ipdScalarWhereWithAggregatesInput[]
    NOT?: t_ipdScalarWhereWithAggregatesInput | t_ipdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_ipd"> | string
    hn?: StringWithAggregatesFilter<"t_ipd"> | string
    an?: StringWithAggregatesFilter<"t_ipd"> | string
    dateadm?: StringWithAggregatesFilter<"t_ipd"> | string
    timeadm?: StringWithAggregatesFilter<"t_ipd"> | string
    datedsc?: StringWithAggregatesFilter<"t_ipd"> | string
    timedsc?: StringWithAggregatesFilter<"t_ipd"> | string
    dischs?: StringWithAggregatesFilter<"t_ipd"> | string
    discht?: StringWithAggregatesFilter<"t_ipd"> | string
    warddsc?: StringNullableWithAggregatesFilter<"t_ipd"> | string | null
    dept?: StringNullableWithAggregatesFilter<"t_ipd"> | string | null
    adm_w?: StringWithAggregatesFilter<"t_ipd"> | string
    uuc?: StringWithAggregatesFilter<"t_ipd"> | string
    svctype?: StringWithAggregatesFilter<"t_ipd"> | string
  }

  export type t_irfWhereInput = {
    AND?: t_irfWhereInput | t_irfWhereInput[]
    OR?: t_irfWhereInput[]
    NOT?: t_irfWhereInput | t_irfWhereInput[]
    id?: StringFilter<"t_irf"> | string
    an?: StringFilter<"t_irf"> | string
    refer?: StringFilter<"t_irf"> | string
    refertype?: StringFilter<"t_irf"> | string
  }

  export type t_irfOrderByWithRelationInput = {
    id?: SortOrder
    an?: SortOrder
    refer?: SortOrder
    refertype?: SortOrder
  }

  export type t_irfWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_irfWhereInput | t_irfWhereInput[]
    OR?: t_irfWhereInput[]
    NOT?: t_irfWhereInput | t_irfWhereInput[]
    an?: StringFilter<"t_irf"> | string
    refer?: StringFilter<"t_irf"> | string
    refertype?: StringFilter<"t_irf"> | string
  }, "id">

  export type t_irfOrderByWithAggregationInput = {
    id?: SortOrder
    an?: SortOrder
    refer?: SortOrder
    refertype?: SortOrder
    _count?: t_irfCountOrderByAggregateInput
    _max?: t_irfMaxOrderByAggregateInput
    _min?: t_irfMinOrderByAggregateInput
  }

  export type t_irfScalarWhereWithAggregatesInput = {
    AND?: t_irfScalarWhereWithAggregatesInput | t_irfScalarWhereWithAggregatesInput[]
    OR?: t_irfScalarWhereWithAggregatesInput[]
    NOT?: t_irfScalarWhereWithAggregatesInput | t_irfScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_irf"> | string
    an?: StringWithAggregatesFilter<"t_irf"> | string
    refer?: StringWithAggregatesFilter<"t_irf"> | string
    refertype?: StringWithAggregatesFilter<"t_irf"> | string
  }

  export type t_idxWhereInput = {
    AND?: t_idxWhereInput | t_idxWhereInput[]
    OR?: t_idxWhereInput[]
    NOT?: t_idxWhereInput | t_idxWhereInput[]
    id?: StringFilter<"t_idx"> | string
    an?: StringFilter<"t_idx"> | string
    diag?: StringFilter<"t_idx"> | string
    dxtype?: StringFilter<"t_idx"> | string
    drdx?: StringFilter<"t_idx"> | string
  }

  export type t_idxOrderByWithRelationInput = {
    id?: SortOrder
    an?: SortOrder
    diag?: SortOrder
    dxtype?: SortOrder
    drdx?: SortOrder
  }

  export type t_idxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_idxWhereInput | t_idxWhereInput[]
    OR?: t_idxWhereInput[]
    NOT?: t_idxWhereInput | t_idxWhereInput[]
    an?: StringFilter<"t_idx"> | string
    diag?: StringFilter<"t_idx"> | string
    dxtype?: StringFilter<"t_idx"> | string
    drdx?: StringFilter<"t_idx"> | string
  }, "id">

  export type t_idxOrderByWithAggregationInput = {
    id?: SortOrder
    an?: SortOrder
    diag?: SortOrder
    dxtype?: SortOrder
    drdx?: SortOrder
    _count?: t_idxCountOrderByAggregateInput
    _max?: t_idxMaxOrderByAggregateInput
    _min?: t_idxMinOrderByAggregateInput
  }

  export type t_idxScalarWhereWithAggregatesInput = {
    AND?: t_idxScalarWhereWithAggregatesInput | t_idxScalarWhereWithAggregatesInput[]
    OR?: t_idxScalarWhereWithAggregatesInput[]
    NOT?: t_idxScalarWhereWithAggregatesInput | t_idxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_idx"> | string
    an?: StringWithAggregatesFilter<"t_idx"> | string
    diag?: StringWithAggregatesFilter<"t_idx"> | string
    dxtype?: StringWithAggregatesFilter<"t_idx"> | string
    drdx?: StringWithAggregatesFilter<"t_idx"> | string
  }

  export type t_iopWhereInput = {
    AND?: t_iopWhereInput | t_iopWhereInput[]
    OR?: t_iopWhereInput[]
    NOT?: t_iopWhereInput | t_iopWhereInput[]
    id?: StringFilter<"t_iop"> | string
    an?: StringFilter<"t_iop"> | string
    oper?: StringFilter<"t_iop"> | string
    optype?: StringNullableFilter<"t_iop"> | string | null
    dropid?: StringFilter<"t_iop"> | string
    datein?: StringFilter<"t_iop"> | string
    timein?: StringFilter<"t_iop"> | string
    dateout?: StringNullableFilter<"t_iop"> | string | null
    timeout?: StringNullableFilter<"t_iop"> | string | null
  }

  export type t_iopOrderByWithRelationInput = {
    id?: SortOrder
    an?: SortOrder
    oper?: SortOrder
    optype?: SortOrderInput | SortOrder
    dropid?: SortOrder
    datein?: SortOrder
    timein?: SortOrder
    dateout?: SortOrderInput | SortOrder
    timeout?: SortOrderInput | SortOrder
  }

  export type t_iopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_iopWhereInput | t_iopWhereInput[]
    OR?: t_iopWhereInput[]
    NOT?: t_iopWhereInput | t_iopWhereInput[]
    an?: StringFilter<"t_iop"> | string
    oper?: StringFilter<"t_iop"> | string
    optype?: StringNullableFilter<"t_iop"> | string | null
    dropid?: StringFilter<"t_iop"> | string
    datein?: StringFilter<"t_iop"> | string
    timein?: StringFilter<"t_iop"> | string
    dateout?: StringNullableFilter<"t_iop"> | string | null
    timeout?: StringNullableFilter<"t_iop"> | string | null
  }, "id">

  export type t_iopOrderByWithAggregationInput = {
    id?: SortOrder
    an?: SortOrder
    oper?: SortOrder
    optype?: SortOrderInput | SortOrder
    dropid?: SortOrder
    datein?: SortOrder
    timein?: SortOrder
    dateout?: SortOrderInput | SortOrder
    timeout?: SortOrderInput | SortOrder
    _count?: t_iopCountOrderByAggregateInput
    _max?: t_iopMaxOrderByAggregateInput
    _min?: t_iopMinOrderByAggregateInput
  }

  export type t_iopScalarWhereWithAggregatesInput = {
    AND?: t_iopScalarWhereWithAggregatesInput | t_iopScalarWhereWithAggregatesInput[]
    OR?: t_iopScalarWhereWithAggregatesInput[]
    NOT?: t_iopScalarWhereWithAggregatesInput | t_iopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_iop"> | string
    an?: StringWithAggregatesFilter<"t_iop"> | string
    oper?: StringWithAggregatesFilter<"t_iop"> | string
    optype?: StringNullableWithAggregatesFilter<"t_iop"> | string | null
    dropid?: StringWithAggregatesFilter<"t_iop"> | string
    datein?: StringWithAggregatesFilter<"t_iop"> | string
    timein?: StringWithAggregatesFilter<"t_iop"> | string
    dateout?: StringNullableWithAggregatesFilter<"t_iop"> | string | null
    timeout?: StringNullableWithAggregatesFilter<"t_iop"> | string | null
  }

  export type t_chtWhereInput = {
    AND?: t_chtWhereInput | t_chtWhereInput[]
    OR?: t_chtWhereInput[]
    NOT?: t_chtWhereInput | t_chtWhereInput[]
    id?: StringFilter<"t_cht"> | string
    hn?: StringFilter<"t_cht"> | string
    an?: StringFilter<"t_cht"> | string
    date?: StringFilter<"t_cht"> | string
    total?: StringFilter<"t_cht"> | string
    paid?: StringFilter<"t_cht"> | string
    pttype?: StringNullableFilter<"t_cht"> | string | null
    person_id?: StringFilter<"t_cht"> | string
    seq?: StringFilter<"t_cht"> | string
    opd_memo?: StringFilter<"t_cht"> | string
    invoice_no?: StringFilter<"t_cht"> | string
    invoice_lt?: StringNullableFilter<"t_cht"> | string | null
  }

  export type t_chtOrderByWithRelationInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    date?: SortOrder
    total?: SortOrder
    paid?: SortOrder
    pttype?: SortOrderInput | SortOrder
    person_id?: SortOrder
    seq?: SortOrder
    opd_memo?: SortOrder
    invoice_no?: SortOrder
    invoice_lt?: SortOrderInput | SortOrder
  }

  export type t_chtWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_chtWhereInput | t_chtWhereInput[]
    OR?: t_chtWhereInput[]
    NOT?: t_chtWhereInput | t_chtWhereInput[]
    hn?: StringFilter<"t_cht"> | string
    an?: StringFilter<"t_cht"> | string
    date?: StringFilter<"t_cht"> | string
    total?: StringFilter<"t_cht"> | string
    paid?: StringFilter<"t_cht"> | string
    pttype?: StringNullableFilter<"t_cht"> | string | null
    person_id?: StringFilter<"t_cht"> | string
    seq?: StringFilter<"t_cht"> | string
    opd_memo?: StringFilter<"t_cht"> | string
    invoice_no?: StringFilter<"t_cht"> | string
    invoice_lt?: StringNullableFilter<"t_cht"> | string | null
  }, "id">

  export type t_chtOrderByWithAggregationInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    date?: SortOrder
    total?: SortOrder
    paid?: SortOrder
    pttype?: SortOrderInput | SortOrder
    person_id?: SortOrder
    seq?: SortOrder
    opd_memo?: SortOrder
    invoice_no?: SortOrder
    invoice_lt?: SortOrderInput | SortOrder
    _count?: t_chtCountOrderByAggregateInput
    _max?: t_chtMaxOrderByAggregateInput
    _min?: t_chtMinOrderByAggregateInput
  }

  export type t_chtScalarWhereWithAggregatesInput = {
    AND?: t_chtScalarWhereWithAggregatesInput | t_chtScalarWhereWithAggregatesInput[]
    OR?: t_chtScalarWhereWithAggregatesInput[]
    NOT?: t_chtScalarWhereWithAggregatesInput | t_chtScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_cht"> | string
    hn?: StringWithAggregatesFilter<"t_cht"> | string
    an?: StringWithAggregatesFilter<"t_cht"> | string
    date?: StringWithAggregatesFilter<"t_cht"> | string
    total?: StringWithAggregatesFilter<"t_cht"> | string
    paid?: StringWithAggregatesFilter<"t_cht"> | string
    pttype?: StringNullableWithAggregatesFilter<"t_cht"> | string | null
    person_id?: StringWithAggregatesFilter<"t_cht"> | string
    seq?: StringWithAggregatesFilter<"t_cht"> | string
    opd_memo?: StringWithAggregatesFilter<"t_cht"> | string
    invoice_no?: StringWithAggregatesFilter<"t_cht"> | string
    invoice_lt?: StringNullableWithAggregatesFilter<"t_cht"> | string | null
  }

  export type t_chaWhereInput = {
    AND?: t_chaWhereInput | t_chaWhereInput[]
    OR?: t_chaWhereInput[]
    NOT?: t_chaWhereInput | t_chaWhereInput[]
    id?: StringFilter<"t_cha"> | string
    hn?: StringFilter<"t_cha"> | string
    an?: StringFilter<"t_cha"> | string
    date?: StringFilter<"t_cha"> | string
    chrgitem?: StringFilter<"t_cha"> | string
    amount?: StringFilter<"t_cha"> | string
    person_id?: StringFilter<"t_cha"> | string
    seq?: StringFilter<"t_cha"> | string
  }

  export type t_chaOrderByWithRelationInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    date?: SortOrder
    chrgitem?: SortOrder
    amount?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
  }

  export type t_chaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_chaWhereInput | t_chaWhereInput[]
    OR?: t_chaWhereInput[]
    NOT?: t_chaWhereInput | t_chaWhereInput[]
    hn?: StringFilter<"t_cha"> | string
    an?: StringFilter<"t_cha"> | string
    date?: StringFilter<"t_cha"> | string
    chrgitem?: StringFilter<"t_cha"> | string
    amount?: StringFilter<"t_cha"> | string
    person_id?: StringFilter<"t_cha"> | string
    seq?: StringFilter<"t_cha"> | string
  }, "id">

  export type t_chaOrderByWithAggregationInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    date?: SortOrder
    chrgitem?: SortOrder
    amount?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
    _count?: t_chaCountOrderByAggregateInput
    _max?: t_chaMaxOrderByAggregateInput
    _min?: t_chaMinOrderByAggregateInput
  }

  export type t_chaScalarWhereWithAggregatesInput = {
    AND?: t_chaScalarWhereWithAggregatesInput | t_chaScalarWhereWithAggregatesInput[]
    OR?: t_chaScalarWhereWithAggregatesInput[]
    NOT?: t_chaScalarWhereWithAggregatesInput | t_chaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_cha"> | string
    hn?: StringWithAggregatesFilter<"t_cha"> | string
    an?: StringWithAggregatesFilter<"t_cha"> | string
    date?: StringWithAggregatesFilter<"t_cha"> | string
    chrgitem?: StringWithAggregatesFilter<"t_cha"> | string
    amount?: StringWithAggregatesFilter<"t_cha"> | string
    person_id?: StringWithAggregatesFilter<"t_cha"> | string
    seq?: StringWithAggregatesFilter<"t_cha"> | string
  }

  export type t_aerWhereInput = {
    AND?: t_aerWhereInput | t_aerWhereInput[]
    OR?: t_aerWhereInput[]
    NOT?: t_aerWhereInput | t_aerWhereInput[]
    id?: StringFilter<"t_aer"> | string
    hn?: StringFilter<"t_aer"> | string
    an?: StringFilter<"t_aer"> | string
    dateopd?: StringFilter<"t_aer"> | string
    authae?: StringNullableFilter<"t_aer"> | string | null
    aedate?: StringFilter<"t_aer"> | string
    aetime?: StringFilter<"t_aer"> | string
    aetype?: StringFilter<"t_aer"> | string
    refer_no?: StringFilter<"t_aer"> | string
    refmaini?: StringFilter<"t_aer"> | string
    ireftype?: StringFilter<"t_aer"> | string
    refmaino?: StringFilter<"t_aer"> | string
    oreftype?: StringFilter<"t_aer"> | string
    ucae?: StringFilter<"t_aer"> | string
    emtype?: StringFilter<"t_aer"> | string
    seq?: StringFilter<"t_aer"> | string
    aestatus?: StringNullableFilter<"t_aer"> | string | null
    dalert?: StringNullableFilter<"t_aer"> | string | null
    talert?: StringNullableFilter<"t_aer"> | string | null
  }

  export type t_aerOrderByWithRelationInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    dateopd?: SortOrder
    authae?: SortOrderInput | SortOrder
    aedate?: SortOrder
    aetime?: SortOrder
    aetype?: SortOrder
    refer_no?: SortOrder
    refmaini?: SortOrder
    ireftype?: SortOrder
    refmaino?: SortOrder
    oreftype?: SortOrder
    ucae?: SortOrder
    emtype?: SortOrder
    seq?: SortOrder
    aestatus?: SortOrderInput | SortOrder
    dalert?: SortOrderInput | SortOrder
    talert?: SortOrderInput | SortOrder
  }

  export type t_aerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_aerWhereInput | t_aerWhereInput[]
    OR?: t_aerWhereInput[]
    NOT?: t_aerWhereInput | t_aerWhereInput[]
    hn?: StringFilter<"t_aer"> | string
    an?: StringFilter<"t_aer"> | string
    dateopd?: StringFilter<"t_aer"> | string
    authae?: StringNullableFilter<"t_aer"> | string | null
    aedate?: StringFilter<"t_aer"> | string
    aetime?: StringFilter<"t_aer"> | string
    aetype?: StringFilter<"t_aer"> | string
    refer_no?: StringFilter<"t_aer"> | string
    refmaini?: StringFilter<"t_aer"> | string
    ireftype?: StringFilter<"t_aer"> | string
    refmaino?: StringFilter<"t_aer"> | string
    oreftype?: StringFilter<"t_aer"> | string
    ucae?: StringFilter<"t_aer"> | string
    emtype?: StringFilter<"t_aer"> | string
    seq?: StringFilter<"t_aer"> | string
    aestatus?: StringNullableFilter<"t_aer"> | string | null
    dalert?: StringNullableFilter<"t_aer"> | string | null
    talert?: StringNullableFilter<"t_aer"> | string | null
  }, "id">

  export type t_aerOrderByWithAggregationInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    dateopd?: SortOrder
    authae?: SortOrderInput | SortOrder
    aedate?: SortOrder
    aetime?: SortOrder
    aetype?: SortOrder
    refer_no?: SortOrder
    refmaini?: SortOrder
    ireftype?: SortOrder
    refmaino?: SortOrder
    oreftype?: SortOrder
    ucae?: SortOrder
    emtype?: SortOrder
    seq?: SortOrder
    aestatus?: SortOrderInput | SortOrder
    dalert?: SortOrderInput | SortOrder
    talert?: SortOrderInput | SortOrder
    _count?: t_aerCountOrderByAggregateInput
    _max?: t_aerMaxOrderByAggregateInput
    _min?: t_aerMinOrderByAggregateInput
  }

  export type t_aerScalarWhereWithAggregatesInput = {
    AND?: t_aerScalarWhereWithAggregatesInput | t_aerScalarWhereWithAggregatesInput[]
    OR?: t_aerScalarWhereWithAggregatesInput[]
    NOT?: t_aerScalarWhereWithAggregatesInput | t_aerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_aer"> | string
    hn?: StringWithAggregatesFilter<"t_aer"> | string
    an?: StringWithAggregatesFilter<"t_aer"> | string
    dateopd?: StringWithAggregatesFilter<"t_aer"> | string
    authae?: StringNullableWithAggregatesFilter<"t_aer"> | string | null
    aedate?: StringWithAggregatesFilter<"t_aer"> | string
    aetime?: StringWithAggregatesFilter<"t_aer"> | string
    aetype?: StringWithAggregatesFilter<"t_aer"> | string
    refer_no?: StringWithAggregatesFilter<"t_aer"> | string
    refmaini?: StringWithAggregatesFilter<"t_aer"> | string
    ireftype?: StringWithAggregatesFilter<"t_aer"> | string
    refmaino?: StringWithAggregatesFilter<"t_aer"> | string
    oreftype?: StringWithAggregatesFilter<"t_aer"> | string
    ucae?: StringWithAggregatesFilter<"t_aer"> | string
    emtype?: StringWithAggregatesFilter<"t_aer"> | string
    seq?: StringWithAggregatesFilter<"t_aer"> | string
    aestatus?: StringNullableWithAggregatesFilter<"t_aer"> | string | null
    dalert?: StringNullableWithAggregatesFilter<"t_aer"> | string | null
    talert?: StringNullableWithAggregatesFilter<"t_aer"> | string | null
  }

  export type t_adpWhereInput = {
    AND?: t_adpWhereInput | t_adpWhereInput[]
    OR?: t_adpWhereInput[]
    NOT?: t_adpWhereInput | t_adpWhereInput[]
    id?: StringFilter<"t_adp"> | string
    hn?: StringFilter<"t_adp"> | string
    an?: StringFilter<"t_adp"> | string
    dateopd?: StringFilter<"t_adp"> | string
    type?: StringFilter<"t_adp"> | string
    code?: StringFilter<"t_adp"> | string
    qty?: StringFilter<"t_adp"> | string
    rate?: StringFilter<"t_adp"> | string
    seq?: StringFilter<"t_adp"> | string
    cagcode?: StringNullableFilter<"t_adp"> | string | null
    dose?: StringNullableFilter<"t_adp"> | string | null
    ca_type?: StringNullableFilter<"t_adp"> | string | null
    serialno?: StringNullableFilter<"t_adp"> | string | null
    totcopay?: StringNullableFilter<"t_adp"> | string | null
    use_status?: StringNullableFilter<"t_adp"> | string | null
    total?: StringNullableFilter<"t_adp"> | string | null
    tmltcode?: StringFilter<"t_adp"> | string
    status1?: StringFilter<"t_adp"> | string
    bi?: StringFilter<"t_adp"> | string
    clinic?: StringNullableFilter<"t_adp"> | string | null
    itemsrc?: StringFilter<"t_adp"> | string
    provider?: StringFilter<"t_adp"> | string
    gravida?: StringNullableFilter<"t_adp"> | string | null
    ga_week?: StringNullableFilter<"t_adp"> | string | null
    dcip_e_screen?: StringNullableFilter<"t_adp"> | string | null
    lmp?: StringNullableFilter<"t_adp"> | string | null
  }

  export type t_adpOrderByWithRelationInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    dateopd?: SortOrder
    type?: SortOrder
    code?: SortOrder
    qty?: SortOrder
    rate?: SortOrder
    seq?: SortOrder
    cagcode?: SortOrderInput | SortOrder
    dose?: SortOrderInput | SortOrder
    ca_type?: SortOrderInput | SortOrder
    serialno?: SortOrderInput | SortOrder
    totcopay?: SortOrderInput | SortOrder
    use_status?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    tmltcode?: SortOrder
    status1?: SortOrder
    bi?: SortOrder
    clinic?: SortOrderInput | SortOrder
    itemsrc?: SortOrder
    provider?: SortOrder
    gravida?: SortOrderInput | SortOrder
    ga_week?: SortOrderInput | SortOrder
    dcip_e_screen?: SortOrderInput | SortOrder
    lmp?: SortOrderInput | SortOrder
  }

  export type t_adpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_adpWhereInput | t_adpWhereInput[]
    OR?: t_adpWhereInput[]
    NOT?: t_adpWhereInput | t_adpWhereInput[]
    hn?: StringFilter<"t_adp"> | string
    an?: StringFilter<"t_adp"> | string
    dateopd?: StringFilter<"t_adp"> | string
    type?: StringFilter<"t_adp"> | string
    code?: StringFilter<"t_adp"> | string
    qty?: StringFilter<"t_adp"> | string
    rate?: StringFilter<"t_adp"> | string
    seq?: StringFilter<"t_adp"> | string
    cagcode?: StringNullableFilter<"t_adp"> | string | null
    dose?: StringNullableFilter<"t_adp"> | string | null
    ca_type?: StringNullableFilter<"t_adp"> | string | null
    serialno?: StringNullableFilter<"t_adp"> | string | null
    totcopay?: StringNullableFilter<"t_adp"> | string | null
    use_status?: StringNullableFilter<"t_adp"> | string | null
    total?: StringNullableFilter<"t_adp"> | string | null
    tmltcode?: StringFilter<"t_adp"> | string
    status1?: StringFilter<"t_adp"> | string
    bi?: StringFilter<"t_adp"> | string
    clinic?: StringNullableFilter<"t_adp"> | string | null
    itemsrc?: StringFilter<"t_adp"> | string
    provider?: StringFilter<"t_adp"> | string
    gravida?: StringNullableFilter<"t_adp"> | string | null
    ga_week?: StringNullableFilter<"t_adp"> | string | null
    dcip_e_screen?: StringNullableFilter<"t_adp"> | string | null
    lmp?: StringNullableFilter<"t_adp"> | string | null
  }, "id" | "id">

  export type t_adpOrderByWithAggregationInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    dateopd?: SortOrder
    type?: SortOrder
    code?: SortOrder
    qty?: SortOrder
    rate?: SortOrder
    seq?: SortOrder
    cagcode?: SortOrderInput | SortOrder
    dose?: SortOrderInput | SortOrder
    ca_type?: SortOrderInput | SortOrder
    serialno?: SortOrderInput | SortOrder
    totcopay?: SortOrderInput | SortOrder
    use_status?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    tmltcode?: SortOrder
    status1?: SortOrder
    bi?: SortOrder
    clinic?: SortOrderInput | SortOrder
    itemsrc?: SortOrder
    provider?: SortOrder
    gravida?: SortOrderInput | SortOrder
    ga_week?: SortOrderInput | SortOrder
    dcip_e_screen?: SortOrderInput | SortOrder
    lmp?: SortOrderInput | SortOrder
    _count?: t_adpCountOrderByAggregateInput
    _max?: t_adpMaxOrderByAggregateInput
    _min?: t_adpMinOrderByAggregateInput
  }

  export type t_adpScalarWhereWithAggregatesInput = {
    AND?: t_adpScalarWhereWithAggregatesInput | t_adpScalarWhereWithAggregatesInput[]
    OR?: t_adpScalarWhereWithAggregatesInput[]
    NOT?: t_adpScalarWhereWithAggregatesInput | t_adpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_adp"> | string
    hn?: StringWithAggregatesFilter<"t_adp"> | string
    an?: StringWithAggregatesFilter<"t_adp"> | string
    dateopd?: StringWithAggregatesFilter<"t_adp"> | string
    type?: StringWithAggregatesFilter<"t_adp"> | string
    code?: StringWithAggregatesFilter<"t_adp"> | string
    qty?: StringWithAggregatesFilter<"t_adp"> | string
    rate?: StringWithAggregatesFilter<"t_adp"> | string
    seq?: StringWithAggregatesFilter<"t_adp"> | string
    cagcode?: StringNullableWithAggregatesFilter<"t_adp"> | string | null
    dose?: StringNullableWithAggregatesFilter<"t_adp"> | string | null
    ca_type?: StringNullableWithAggregatesFilter<"t_adp"> | string | null
    serialno?: StringNullableWithAggregatesFilter<"t_adp"> | string | null
    totcopay?: StringNullableWithAggregatesFilter<"t_adp"> | string | null
    use_status?: StringNullableWithAggregatesFilter<"t_adp"> | string | null
    total?: StringNullableWithAggregatesFilter<"t_adp"> | string | null
    tmltcode?: StringWithAggregatesFilter<"t_adp"> | string
    status1?: StringWithAggregatesFilter<"t_adp"> | string
    bi?: StringWithAggregatesFilter<"t_adp"> | string
    clinic?: StringNullableWithAggregatesFilter<"t_adp"> | string | null
    itemsrc?: StringWithAggregatesFilter<"t_adp"> | string
    provider?: StringWithAggregatesFilter<"t_adp"> | string
    gravida?: StringNullableWithAggregatesFilter<"t_adp"> | string | null
    ga_week?: StringNullableWithAggregatesFilter<"t_adp"> | string | null
    dcip_e_screen?: StringNullableWithAggregatesFilter<"t_adp"> | string | null
    lmp?: StringNullableWithAggregatesFilter<"t_adp"> | string | null
  }

  export type t_lvdWhereInput = {
    AND?: t_lvdWhereInput | t_lvdWhereInput[]
    OR?: t_lvdWhereInput[]
    NOT?: t_lvdWhereInput | t_lvdWhereInput[]
    id?: StringFilter<"t_lvd"> | string
    seqlvd?: StringFilter<"t_lvd"> | string
    an?: StringFilter<"t_lvd"> | string
    dateout?: StringFilter<"t_lvd"> | string
    timeout?: StringFilter<"t_lvd"> | string
    datein?: StringFilter<"t_lvd"> | string
    timein?: StringFilter<"t_lvd"> | string
    qtyday?: StringFilter<"t_lvd"> | string
  }

  export type t_lvdOrderByWithRelationInput = {
    id?: SortOrder
    seqlvd?: SortOrder
    an?: SortOrder
    dateout?: SortOrder
    timeout?: SortOrder
    datein?: SortOrder
    timein?: SortOrder
    qtyday?: SortOrder
  }

  export type t_lvdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_lvdWhereInput | t_lvdWhereInput[]
    OR?: t_lvdWhereInput[]
    NOT?: t_lvdWhereInput | t_lvdWhereInput[]
    seqlvd?: StringFilter<"t_lvd"> | string
    an?: StringFilter<"t_lvd"> | string
    dateout?: StringFilter<"t_lvd"> | string
    timeout?: StringFilter<"t_lvd"> | string
    datein?: StringFilter<"t_lvd"> | string
    timein?: StringFilter<"t_lvd"> | string
    qtyday?: StringFilter<"t_lvd"> | string
  }, "id">

  export type t_lvdOrderByWithAggregationInput = {
    id?: SortOrder
    seqlvd?: SortOrder
    an?: SortOrder
    dateout?: SortOrder
    timeout?: SortOrder
    datein?: SortOrder
    timein?: SortOrder
    qtyday?: SortOrder
    _count?: t_lvdCountOrderByAggregateInput
    _max?: t_lvdMaxOrderByAggregateInput
    _min?: t_lvdMinOrderByAggregateInput
  }

  export type t_lvdScalarWhereWithAggregatesInput = {
    AND?: t_lvdScalarWhereWithAggregatesInput | t_lvdScalarWhereWithAggregatesInput[]
    OR?: t_lvdScalarWhereWithAggregatesInput[]
    NOT?: t_lvdScalarWhereWithAggregatesInput | t_lvdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_lvd"> | string
    seqlvd?: StringWithAggregatesFilter<"t_lvd"> | string
    an?: StringWithAggregatesFilter<"t_lvd"> | string
    dateout?: StringWithAggregatesFilter<"t_lvd"> | string
    timeout?: StringWithAggregatesFilter<"t_lvd"> | string
    datein?: StringWithAggregatesFilter<"t_lvd"> | string
    timein?: StringWithAggregatesFilter<"t_lvd"> | string
    qtyday?: StringWithAggregatesFilter<"t_lvd"> | string
  }

  export type t_druWhereInput = {
    AND?: t_druWhereInput | t_druWhereInput[]
    OR?: t_druWhereInput[]
    NOT?: t_druWhereInput | t_druWhereInput[]
    id?: StringFilter<"t_dru"> | string
    hcode?: StringFilter<"t_dru"> | string
    hn?: StringFilter<"t_dru"> | string
    an?: StringFilter<"t_dru"> | string
    clinic?: StringNullableFilter<"t_dru"> | string | null
    person_id?: StringFilter<"t_dru"> | string
    date_serv?: StringFilter<"t_dru"> | string
    did?: StringFilter<"t_dru"> | string
    didname?: StringFilter<"t_dru"> | string
    amount?: StringFilter<"t_dru"> | string
    drugprice?: StringFilter<"t_dru"> | string
    drugcost?: StringNullableFilter<"t_dru"> | string | null
    didstd?: StringFilter<"t_dru"> | string
    unit?: StringFilter<"t_dru"> | string
    unit_pack?: StringNullableFilter<"t_dru"> | string | null
    seq?: StringFilter<"t_dru"> | string
    drugremark?: StringFilter<"t_dru"> | string
    pa_no?: StringFilter<"t_dru"> | string
    totcopay?: StringNullableFilter<"t_dru"> | string | null
    use_status?: StringFilter<"t_dru"> | string
    total?: StringNullableFilter<"t_dru"> | string | null
    sigcode?: StringNullableFilter<"t_dru"> | string | null
    sigtext?: StringNullableFilter<"t_dru"> | string | null
    provider?: StringFilter<"t_dru"> | string
  }

  export type t_druOrderByWithRelationInput = {
    id?: SortOrder
    hcode?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    clinic?: SortOrderInput | SortOrder
    person_id?: SortOrder
    date_serv?: SortOrder
    did?: SortOrder
    didname?: SortOrder
    amount?: SortOrder
    drugprice?: SortOrder
    drugcost?: SortOrderInput | SortOrder
    didstd?: SortOrder
    unit?: SortOrder
    unit_pack?: SortOrderInput | SortOrder
    seq?: SortOrder
    drugremark?: SortOrder
    pa_no?: SortOrder
    totcopay?: SortOrderInput | SortOrder
    use_status?: SortOrder
    total?: SortOrderInput | SortOrder
    sigcode?: SortOrderInput | SortOrder
    sigtext?: SortOrderInput | SortOrder
    provider?: SortOrder
  }

  export type t_druWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_druWhereInput | t_druWhereInput[]
    OR?: t_druWhereInput[]
    NOT?: t_druWhereInput | t_druWhereInput[]
    hcode?: StringFilter<"t_dru"> | string
    hn?: StringFilter<"t_dru"> | string
    an?: StringFilter<"t_dru"> | string
    clinic?: StringNullableFilter<"t_dru"> | string | null
    person_id?: StringFilter<"t_dru"> | string
    date_serv?: StringFilter<"t_dru"> | string
    did?: StringFilter<"t_dru"> | string
    didname?: StringFilter<"t_dru"> | string
    amount?: StringFilter<"t_dru"> | string
    drugprice?: StringFilter<"t_dru"> | string
    drugcost?: StringNullableFilter<"t_dru"> | string | null
    didstd?: StringFilter<"t_dru"> | string
    unit?: StringFilter<"t_dru"> | string
    unit_pack?: StringNullableFilter<"t_dru"> | string | null
    seq?: StringFilter<"t_dru"> | string
    drugremark?: StringFilter<"t_dru"> | string
    pa_no?: StringFilter<"t_dru"> | string
    totcopay?: StringNullableFilter<"t_dru"> | string | null
    use_status?: StringFilter<"t_dru"> | string
    total?: StringNullableFilter<"t_dru"> | string | null
    sigcode?: StringNullableFilter<"t_dru"> | string | null
    sigtext?: StringNullableFilter<"t_dru"> | string | null
    provider?: StringFilter<"t_dru"> | string
  }, "id">

  export type t_druOrderByWithAggregationInput = {
    id?: SortOrder
    hcode?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    clinic?: SortOrderInput | SortOrder
    person_id?: SortOrder
    date_serv?: SortOrder
    did?: SortOrder
    didname?: SortOrder
    amount?: SortOrder
    drugprice?: SortOrder
    drugcost?: SortOrderInput | SortOrder
    didstd?: SortOrder
    unit?: SortOrder
    unit_pack?: SortOrderInput | SortOrder
    seq?: SortOrder
    drugremark?: SortOrder
    pa_no?: SortOrder
    totcopay?: SortOrderInput | SortOrder
    use_status?: SortOrder
    total?: SortOrderInput | SortOrder
    sigcode?: SortOrderInput | SortOrder
    sigtext?: SortOrderInput | SortOrder
    provider?: SortOrder
    _count?: t_druCountOrderByAggregateInput
    _max?: t_druMaxOrderByAggregateInput
    _min?: t_druMinOrderByAggregateInput
  }

  export type t_druScalarWhereWithAggregatesInput = {
    AND?: t_druScalarWhereWithAggregatesInput | t_druScalarWhereWithAggregatesInput[]
    OR?: t_druScalarWhereWithAggregatesInput[]
    NOT?: t_druScalarWhereWithAggregatesInput | t_druScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_dru"> | string
    hcode?: StringWithAggregatesFilter<"t_dru"> | string
    hn?: StringWithAggregatesFilter<"t_dru"> | string
    an?: StringWithAggregatesFilter<"t_dru"> | string
    clinic?: StringNullableWithAggregatesFilter<"t_dru"> | string | null
    person_id?: StringWithAggregatesFilter<"t_dru"> | string
    date_serv?: StringWithAggregatesFilter<"t_dru"> | string
    did?: StringWithAggregatesFilter<"t_dru"> | string
    didname?: StringWithAggregatesFilter<"t_dru"> | string
    amount?: StringWithAggregatesFilter<"t_dru"> | string
    drugprice?: StringWithAggregatesFilter<"t_dru"> | string
    drugcost?: StringNullableWithAggregatesFilter<"t_dru"> | string | null
    didstd?: StringWithAggregatesFilter<"t_dru"> | string
    unit?: StringWithAggregatesFilter<"t_dru"> | string
    unit_pack?: StringNullableWithAggregatesFilter<"t_dru"> | string | null
    seq?: StringWithAggregatesFilter<"t_dru"> | string
    drugremark?: StringWithAggregatesFilter<"t_dru"> | string
    pa_no?: StringWithAggregatesFilter<"t_dru"> | string
    totcopay?: StringNullableWithAggregatesFilter<"t_dru"> | string | null
    use_status?: StringWithAggregatesFilter<"t_dru"> | string
    total?: StringNullableWithAggregatesFilter<"t_dru"> | string | null
    sigcode?: StringNullableWithAggregatesFilter<"t_dru"> | string | null
    sigtext?: StringNullableWithAggregatesFilter<"t_dru"> | string | null
    provider?: StringWithAggregatesFilter<"t_dru"> | string
  }

  export type t_labfuWhereInput = {
    AND?: t_labfuWhereInput | t_labfuWhereInput[]
    OR?: t_labfuWhereInput[]
    NOT?: t_labfuWhereInput | t_labfuWhereInput[]
    id?: StringFilter<"t_labfu"> | string
    hcode?: StringFilter<"t_labfu"> | string
    hn?: StringFilter<"t_labfu"> | string
    person_id?: StringFilter<"t_labfu"> | string
    dateserv?: StringFilter<"t_labfu"> | string
    seq?: StringFilter<"t_labfu"> | string
    labtest?: StringFilter<"t_labfu"> | string
    labresult?: StringFilter<"t_labfu"> | string
  }

  export type t_labfuOrderByWithRelationInput = {
    id?: SortOrder
    hcode?: SortOrder
    hn?: SortOrder
    person_id?: SortOrder
    dateserv?: SortOrder
    seq?: SortOrder
    labtest?: SortOrder
    labresult?: SortOrder
  }

  export type t_labfuWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: t_labfuWhereInput | t_labfuWhereInput[]
    OR?: t_labfuWhereInput[]
    NOT?: t_labfuWhereInput | t_labfuWhereInput[]
    hcode?: StringFilter<"t_labfu"> | string
    hn?: StringFilter<"t_labfu"> | string
    person_id?: StringFilter<"t_labfu"> | string
    dateserv?: StringFilter<"t_labfu"> | string
    seq?: StringFilter<"t_labfu"> | string
    labtest?: StringFilter<"t_labfu"> | string
    labresult?: StringFilter<"t_labfu"> | string
  }, "id">

  export type t_labfuOrderByWithAggregationInput = {
    id?: SortOrder
    hcode?: SortOrder
    hn?: SortOrder
    person_id?: SortOrder
    dateserv?: SortOrder
    seq?: SortOrder
    labtest?: SortOrder
    labresult?: SortOrder
    _count?: t_labfuCountOrderByAggregateInput
    _max?: t_labfuMaxOrderByAggregateInput
    _min?: t_labfuMinOrderByAggregateInput
  }

  export type t_labfuScalarWhereWithAggregatesInput = {
    AND?: t_labfuScalarWhereWithAggregatesInput | t_labfuScalarWhereWithAggregatesInput[]
    OR?: t_labfuScalarWhereWithAggregatesInput[]
    NOT?: t_labfuScalarWhereWithAggregatesInput | t_labfuScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_labfu"> | string
    hcode?: StringWithAggregatesFilter<"t_labfu"> | string
    hn?: StringWithAggregatesFilter<"t_labfu"> | string
    person_id?: StringWithAggregatesFilter<"t_labfu"> | string
    dateserv?: StringWithAggregatesFilter<"t_labfu"> | string
    seq?: StringWithAggregatesFilter<"t_labfu"> | string
    labtest?: StringWithAggregatesFilter<"t_labfu"> | string
    labresult?: StringWithAggregatesFilter<"t_labfu"> | string
  }

  export type t_insCreateInput = {
    id?: string
    hn?: string | null
    inscl: string
    subtype?: string | null
    cid?: string | null
    hcode: string
    dateexp?: string | null
    hospmain: string
    hospsub: string
    govcode?: string | null
    govname?: string | null
    permitno?: string | null
    docno?: string | null
    ownrpid?: string | null
    ownname?: string | null
    an: string
    seq: string
    subinscl?: string | null
    relinscl?: string | null
    htype?: string | null
  }

  export type t_insUncheckedCreateInput = {
    id?: string
    hn?: string | null
    inscl: string
    subtype?: string | null
    cid?: string | null
    hcode: string
    dateexp?: string | null
    hospmain: string
    hospsub: string
    govcode?: string | null
    govname?: string | null
    permitno?: string | null
    docno?: string | null
    ownrpid?: string | null
    ownname?: string | null
    an: string
    seq: string
    subinscl?: string | null
    relinscl?: string | null
    htype?: string | null
  }

  export type t_insUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    inscl?: StringFieldUpdateOperationsInput | string
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: NullableStringFieldUpdateOperationsInput | string | null
    hcode?: StringFieldUpdateOperationsInput | string
    dateexp?: NullableStringFieldUpdateOperationsInput | string | null
    hospmain?: StringFieldUpdateOperationsInput | string
    hospsub?: StringFieldUpdateOperationsInput | string
    govcode?: NullableStringFieldUpdateOperationsInput | string | null
    govname?: NullableStringFieldUpdateOperationsInput | string | null
    permitno?: NullableStringFieldUpdateOperationsInput | string | null
    docno?: NullableStringFieldUpdateOperationsInput | string | null
    ownrpid?: NullableStringFieldUpdateOperationsInput | string | null
    ownname?: NullableStringFieldUpdateOperationsInput | string | null
    an?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    subinscl?: NullableStringFieldUpdateOperationsInput | string | null
    relinscl?: NullableStringFieldUpdateOperationsInput | string | null
    htype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_insUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    inscl?: StringFieldUpdateOperationsInput | string
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: NullableStringFieldUpdateOperationsInput | string | null
    hcode?: StringFieldUpdateOperationsInput | string
    dateexp?: NullableStringFieldUpdateOperationsInput | string | null
    hospmain?: StringFieldUpdateOperationsInput | string
    hospsub?: StringFieldUpdateOperationsInput | string
    govcode?: NullableStringFieldUpdateOperationsInput | string | null
    govname?: NullableStringFieldUpdateOperationsInput | string | null
    permitno?: NullableStringFieldUpdateOperationsInput | string | null
    docno?: NullableStringFieldUpdateOperationsInput | string | null
    ownrpid?: NullableStringFieldUpdateOperationsInput | string | null
    ownname?: NullableStringFieldUpdateOperationsInput | string | null
    an?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    subinscl?: NullableStringFieldUpdateOperationsInput | string | null
    relinscl?: NullableStringFieldUpdateOperationsInput | string | null
    htype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_insCreateManyInput = {
    id?: string
    hn?: string | null
    inscl: string
    subtype?: string | null
    cid?: string | null
    hcode: string
    dateexp?: string | null
    hospmain: string
    hospsub: string
    govcode?: string | null
    govname?: string | null
    permitno?: string | null
    docno?: string | null
    ownrpid?: string | null
    ownname?: string | null
    an: string
    seq: string
    subinscl?: string | null
    relinscl?: string | null
    htype?: string | null
  }

  export type t_insUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    inscl?: StringFieldUpdateOperationsInput | string
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: NullableStringFieldUpdateOperationsInput | string | null
    hcode?: StringFieldUpdateOperationsInput | string
    dateexp?: NullableStringFieldUpdateOperationsInput | string | null
    hospmain?: StringFieldUpdateOperationsInput | string
    hospsub?: StringFieldUpdateOperationsInput | string
    govcode?: NullableStringFieldUpdateOperationsInput | string | null
    govname?: NullableStringFieldUpdateOperationsInput | string | null
    permitno?: NullableStringFieldUpdateOperationsInput | string | null
    docno?: NullableStringFieldUpdateOperationsInput | string | null
    ownrpid?: NullableStringFieldUpdateOperationsInput | string | null
    ownname?: NullableStringFieldUpdateOperationsInput | string | null
    an?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    subinscl?: NullableStringFieldUpdateOperationsInput | string | null
    relinscl?: NullableStringFieldUpdateOperationsInput | string | null
    htype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_insUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    inscl?: StringFieldUpdateOperationsInput | string
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: NullableStringFieldUpdateOperationsInput | string | null
    hcode?: StringFieldUpdateOperationsInput | string
    dateexp?: NullableStringFieldUpdateOperationsInput | string | null
    hospmain?: StringFieldUpdateOperationsInput | string
    hospsub?: StringFieldUpdateOperationsInput | string
    govcode?: NullableStringFieldUpdateOperationsInput | string | null
    govname?: NullableStringFieldUpdateOperationsInput | string | null
    permitno?: NullableStringFieldUpdateOperationsInput | string | null
    docno?: NullableStringFieldUpdateOperationsInput | string | null
    ownrpid?: NullableStringFieldUpdateOperationsInput | string | null
    ownname?: NullableStringFieldUpdateOperationsInput | string | null
    an?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    subinscl?: NullableStringFieldUpdateOperationsInput | string | null
    relinscl?: NullableStringFieldUpdateOperationsInput | string | null
    htype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_patCreateInput = {
    id?: string
    hcode: string
    hn: string
    changwat?: string | null
    amphur?: string | null
    dob: string
    sex: string
    marriage: string
    occupa: string
    nation: string
    person_id: string
    namepat: string
    title: string
    fname: string
    lname: string
    idtype: string
  }

  export type t_patUncheckedCreateInput = {
    id?: string
    hcode: string
    hn: string
    changwat?: string | null
    amphur?: string | null
    dob: string
    sex: string
    marriage: string
    occupa: string
    nation: string
    person_id: string
    namepat: string
    title: string
    fname: string
    lname: string
    idtype: string
  }

  export type t_patUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hcode?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    changwat?: NullableStringFieldUpdateOperationsInput | string | null
    amphur?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    marriage?: StringFieldUpdateOperationsInput | string
    occupa?: StringFieldUpdateOperationsInput | string
    nation?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    namepat?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    idtype?: StringFieldUpdateOperationsInput | string
  }

  export type t_patUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hcode?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    changwat?: NullableStringFieldUpdateOperationsInput | string | null
    amphur?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    marriage?: StringFieldUpdateOperationsInput | string
    occupa?: StringFieldUpdateOperationsInput | string
    nation?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    namepat?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    idtype?: StringFieldUpdateOperationsInput | string
  }

  export type t_patCreateManyInput = {
    id?: string
    hcode: string
    hn: string
    changwat?: string | null
    amphur?: string | null
    dob: string
    sex: string
    marriage: string
    occupa: string
    nation: string
    person_id: string
    namepat: string
    title: string
    fname: string
    lname: string
    idtype: string
  }

  export type t_patUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hcode?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    changwat?: NullableStringFieldUpdateOperationsInput | string | null
    amphur?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    marriage?: StringFieldUpdateOperationsInput | string
    occupa?: StringFieldUpdateOperationsInput | string
    nation?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    namepat?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    idtype?: StringFieldUpdateOperationsInput | string
  }

  export type t_patUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hcode?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    changwat?: NullableStringFieldUpdateOperationsInput | string | null
    amphur?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    marriage?: StringFieldUpdateOperationsInput | string
    occupa?: StringFieldUpdateOperationsInput | string
    nation?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    namepat?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    idtype?: StringFieldUpdateOperationsInput | string
  }

  export type t_opdCreateInput = {
    id?: string
    hn: string
    clinic?: string | null
    dateopd: string
    timeopd: string
    seq: string
    uuc: string
    detail: string
    btemp: string
    sbp: string
    dbp: string
    pr: string
    rr: string
    optype: string
    typein?: string | null
    typeout?: string | null
  }

  export type t_opdUncheckedCreateInput = {
    id?: string
    hn: string
    clinic?: string | null
    dateopd: string
    timeopd: string
    seq: string
    uuc: string
    detail: string
    btemp: string
    sbp: string
    dbp: string
    pr: string
    rr: string
    optype: string
    typein?: string | null
    typeout?: string | null
  }

  export type t_opdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    dateopd?: StringFieldUpdateOperationsInput | string
    timeopd?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    uuc?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    btemp?: StringFieldUpdateOperationsInput | string
    sbp?: StringFieldUpdateOperationsInput | string
    dbp?: StringFieldUpdateOperationsInput | string
    pr?: StringFieldUpdateOperationsInput | string
    rr?: StringFieldUpdateOperationsInput | string
    optype?: StringFieldUpdateOperationsInput | string
    typein?: NullableStringFieldUpdateOperationsInput | string | null
    typeout?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_opdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    dateopd?: StringFieldUpdateOperationsInput | string
    timeopd?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    uuc?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    btemp?: StringFieldUpdateOperationsInput | string
    sbp?: StringFieldUpdateOperationsInput | string
    dbp?: StringFieldUpdateOperationsInput | string
    pr?: StringFieldUpdateOperationsInput | string
    rr?: StringFieldUpdateOperationsInput | string
    optype?: StringFieldUpdateOperationsInput | string
    typein?: NullableStringFieldUpdateOperationsInput | string | null
    typeout?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_opdCreateManyInput = {
    id?: string
    hn: string
    clinic?: string | null
    dateopd: string
    timeopd: string
    seq: string
    uuc: string
    detail: string
    btemp: string
    sbp: string
    dbp: string
    pr: string
    rr: string
    optype: string
    typein?: string | null
    typeout?: string | null
  }

  export type t_opdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    dateopd?: StringFieldUpdateOperationsInput | string
    timeopd?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    uuc?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    btemp?: StringFieldUpdateOperationsInput | string
    sbp?: StringFieldUpdateOperationsInput | string
    dbp?: StringFieldUpdateOperationsInput | string
    pr?: StringFieldUpdateOperationsInput | string
    rr?: StringFieldUpdateOperationsInput | string
    optype?: StringFieldUpdateOperationsInput | string
    typein?: NullableStringFieldUpdateOperationsInput | string | null
    typeout?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_opdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    dateopd?: StringFieldUpdateOperationsInput | string
    timeopd?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    uuc?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    btemp?: StringFieldUpdateOperationsInput | string
    sbp?: StringFieldUpdateOperationsInput | string
    dbp?: StringFieldUpdateOperationsInput | string
    pr?: StringFieldUpdateOperationsInput | string
    rr?: StringFieldUpdateOperationsInput | string
    optype?: StringFieldUpdateOperationsInput | string
    typein?: NullableStringFieldUpdateOperationsInput | string | null
    typeout?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_orfCreateInput = {
    id?: string
    hn: string
    dateopd: string
    clinic?: string | null
    refer: string
    refertype: string
    seq: string
    referdate: string
  }

  export type t_orfUncheckedCreateInput = {
    id?: string
    hn: string
    dateopd: string
    clinic?: string | null
    refer: string
    refertype: string
    seq: string
    referdate: string
  }

  export type t_orfUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    refer?: StringFieldUpdateOperationsInput | string
    refertype?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    referdate?: StringFieldUpdateOperationsInput | string
  }

  export type t_orfUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    refer?: StringFieldUpdateOperationsInput | string
    refertype?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    referdate?: StringFieldUpdateOperationsInput | string
  }

  export type t_orfCreateManyInput = {
    id?: string
    hn: string
    dateopd: string
    clinic?: string | null
    refer: string
    refertype: string
    seq: string
    referdate: string
  }

  export type t_orfUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    refer?: StringFieldUpdateOperationsInput | string
    refertype?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    referdate?: StringFieldUpdateOperationsInput | string
  }

  export type t_orfUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    refer?: StringFieldUpdateOperationsInput | string
    refertype?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    referdate?: StringFieldUpdateOperationsInput | string
  }

  export type t_odxCreateInput = {
    id?: string
    hn: string
    datedx: string
    clinic?: string | null
    diag: string
    dxtype: string
    drdx: string
    person_id: string
    seq: string
  }

  export type t_odxUncheckedCreateInput = {
    id?: string
    hn: string
    datedx: string
    clinic?: string | null
    diag: string
    dxtype: string
    drdx: string
    person_id: string
    seq: string
  }

  export type t_odxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    datedx?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    diag?: StringFieldUpdateOperationsInput | string
    dxtype?: StringFieldUpdateOperationsInput | string
    drdx?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
  }

  export type t_odxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    datedx?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    diag?: StringFieldUpdateOperationsInput | string
    dxtype?: StringFieldUpdateOperationsInput | string
    drdx?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
  }

  export type t_odxCreateManyInput = {
    id?: string
    hn: string
    datedx: string
    clinic?: string | null
    diag: string
    dxtype: string
    drdx: string
    person_id: string
    seq: string
  }

  export type t_odxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    datedx?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    diag?: StringFieldUpdateOperationsInput | string
    dxtype?: StringFieldUpdateOperationsInput | string
    drdx?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
  }

  export type t_odxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    datedx?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    diag?: StringFieldUpdateOperationsInput | string
    dxtype?: StringFieldUpdateOperationsInput | string
    drdx?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
  }

  export type t_oopCreateInput = {
    id?: string
    hn: string
    dateopd: string
    clinic?: string | null
    oper: string
    dropid: string
    person_id: string
    seq: string
    servprice: string
  }

  export type t_oopUncheckedCreateInput = {
    id?: string
    hn: string
    dateopd: string
    clinic?: string | null
    oper: string
    dropid: string
    person_id: string
    seq: string
    servprice: string
  }

  export type t_oopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    oper?: StringFieldUpdateOperationsInput | string
    dropid?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    servprice?: StringFieldUpdateOperationsInput | string
  }

  export type t_oopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    oper?: StringFieldUpdateOperationsInput | string
    dropid?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    servprice?: StringFieldUpdateOperationsInput | string
  }

  export type t_oopCreateManyInput = {
    id?: string
    hn: string
    dateopd: string
    clinic?: string | null
    oper: string
    dropid: string
    person_id: string
    seq: string
    servprice: string
  }

  export type t_oopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    oper?: StringFieldUpdateOperationsInput | string
    dropid?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    servprice?: StringFieldUpdateOperationsInput | string
  }

  export type t_oopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    oper?: StringFieldUpdateOperationsInput | string
    dropid?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    servprice?: StringFieldUpdateOperationsInput | string
  }

  export type t_ipdCreateInput = {
    id?: string
    hn: string
    an: string
    dateadm: string
    timeadm: string
    datedsc: string
    timedsc: string
    dischs: string
    discht: string
    warddsc?: string | null
    dept?: string | null
    adm_w: string
    uuc: string
    svctype: string
  }

  export type t_ipdUncheckedCreateInput = {
    id?: string
    hn: string
    an: string
    dateadm: string
    timeadm: string
    datedsc: string
    timedsc: string
    dischs: string
    discht: string
    warddsc?: string | null
    dept?: string | null
    adm_w: string
    uuc: string
    svctype: string
  }

  export type t_ipdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateadm?: StringFieldUpdateOperationsInput | string
    timeadm?: StringFieldUpdateOperationsInput | string
    datedsc?: StringFieldUpdateOperationsInput | string
    timedsc?: StringFieldUpdateOperationsInput | string
    dischs?: StringFieldUpdateOperationsInput | string
    discht?: StringFieldUpdateOperationsInput | string
    warddsc?: NullableStringFieldUpdateOperationsInput | string | null
    dept?: NullableStringFieldUpdateOperationsInput | string | null
    adm_w?: StringFieldUpdateOperationsInput | string
    uuc?: StringFieldUpdateOperationsInput | string
    svctype?: StringFieldUpdateOperationsInput | string
  }

  export type t_ipdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateadm?: StringFieldUpdateOperationsInput | string
    timeadm?: StringFieldUpdateOperationsInput | string
    datedsc?: StringFieldUpdateOperationsInput | string
    timedsc?: StringFieldUpdateOperationsInput | string
    dischs?: StringFieldUpdateOperationsInput | string
    discht?: StringFieldUpdateOperationsInput | string
    warddsc?: NullableStringFieldUpdateOperationsInput | string | null
    dept?: NullableStringFieldUpdateOperationsInput | string | null
    adm_w?: StringFieldUpdateOperationsInput | string
    uuc?: StringFieldUpdateOperationsInput | string
    svctype?: StringFieldUpdateOperationsInput | string
  }

  export type t_ipdCreateManyInput = {
    id?: string
    hn: string
    an: string
    dateadm: string
    timeadm: string
    datedsc: string
    timedsc: string
    dischs: string
    discht: string
    warddsc?: string | null
    dept?: string | null
    adm_w: string
    uuc: string
    svctype: string
  }

  export type t_ipdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateadm?: StringFieldUpdateOperationsInput | string
    timeadm?: StringFieldUpdateOperationsInput | string
    datedsc?: StringFieldUpdateOperationsInput | string
    timedsc?: StringFieldUpdateOperationsInput | string
    dischs?: StringFieldUpdateOperationsInput | string
    discht?: StringFieldUpdateOperationsInput | string
    warddsc?: NullableStringFieldUpdateOperationsInput | string | null
    dept?: NullableStringFieldUpdateOperationsInput | string | null
    adm_w?: StringFieldUpdateOperationsInput | string
    uuc?: StringFieldUpdateOperationsInput | string
    svctype?: StringFieldUpdateOperationsInput | string
  }

  export type t_ipdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateadm?: StringFieldUpdateOperationsInput | string
    timeadm?: StringFieldUpdateOperationsInput | string
    datedsc?: StringFieldUpdateOperationsInput | string
    timedsc?: StringFieldUpdateOperationsInput | string
    dischs?: StringFieldUpdateOperationsInput | string
    discht?: StringFieldUpdateOperationsInput | string
    warddsc?: NullableStringFieldUpdateOperationsInput | string | null
    dept?: NullableStringFieldUpdateOperationsInput | string | null
    adm_w?: StringFieldUpdateOperationsInput | string
    uuc?: StringFieldUpdateOperationsInput | string
    svctype?: StringFieldUpdateOperationsInput | string
  }

  export type t_irfCreateInput = {
    id?: string
    an: string
    refer: string
    refertype: string
  }

  export type t_irfUncheckedCreateInput = {
    id?: string
    an: string
    refer: string
    refertype: string
  }

  export type t_irfUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    refer?: StringFieldUpdateOperationsInput | string
    refertype?: StringFieldUpdateOperationsInput | string
  }

  export type t_irfUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    refer?: StringFieldUpdateOperationsInput | string
    refertype?: StringFieldUpdateOperationsInput | string
  }

  export type t_irfCreateManyInput = {
    id?: string
    an: string
    refer: string
    refertype: string
  }

  export type t_irfUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    refer?: StringFieldUpdateOperationsInput | string
    refertype?: StringFieldUpdateOperationsInput | string
  }

  export type t_irfUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    refer?: StringFieldUpdateOperationsInput | string
    refertype?: StringFieldUpdateOperationsInput | string
  }

  export type t_idxCreateInput = {
    id?: string
    an: string
    diag: string
    dxtype: string
    drdx: string
  }

  export type t_idxUncheckedCreateInput = {
    id?: string
    an: string
    diag: string
    dxtype: string
    drdx: string
  }

  export type t_idxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    diag?: StringFieldUpdateOperationsInput | string
    dxtype?: StringFieldUpdateOperationsInput | string
    drdx?: StringFieldUpdateOperationsInput | string
  }

  export type t_idxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    diag?: StringFieldUpdateOperationsInput | string
    dxtype?: StringFieldUpdateOperationsInput | string
    drdx?: StringFieldUpdateOperationsInput | string
  }

  export type t_idxCreateManyInput = {
    id?: string
    an: string
    diag: string
    dxtype: string
    drdx: string
  }

  export type t_idxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    diag?: StringFieldUpdateOperationsInput | string
    dxtype?: StringFieldUpdateOperationsInput | string
    drdx?: StringFieldUpdateOperationsInput | string
  }

  export type t_idxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    diag?: StringFieldUpdateOperationsInput | string
    dxtype?: StringFieldUpdateOperationsInput | string
    drdx?: StringFieldUpdateOperationsInput | string
  }

  export type t_iopCreateInput = {
    id?: string
    an: string
    oper: string
    optype?: string | null
    dropid: string
    datein: string
    timein: string
    dateout?: string | null
    timeout?: string | null
  }

  export type t_iopUncheckedCreateInput = {
    id?: string
    an: string
    oper: string
    optype?: string | null
    dropid: string
    datein: string
    timein: string
    dateout?: string | null
    timeout?: string | null
  }

  export type t_iopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    oper?: StringFieldUpdateOperationsInput | string
    optype?: NullableStringFieldUpdateOperationsInput | string | null
    dropid?: StringFieldUpdateOperationsInput | string
    datein?: StringFieldUpdateOperationsInput | string
    timein?: StringFieldUpdateOperationsInput | string
    dateout?: NullableStringFieldUpdateOperationsInput | string | null
    timeout?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_iopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    oper?: StringFieldUpdateOperationsInput | string
    optype?: NullableStringFieldUpdateOperationsInput | string | null
    dropid?: StringFieldUpdateOperationsInput | string
    datein?: StringFieldUpdateOperationsInput | string
    timein?: StringFieldUpdateOperationsInput | string
    dateout?: NullableStringFieldUpdateOperationsInput | string | null
    timeout?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_iopCreateManyInput = {
    id?: string
    an: string
    oper: string
    optype?: string | null
    dropid: string
    datein: string
    timein: string
    dateout?: string | null
    timeout?: string | null
  }

  export type t_iopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    oper?: StringFieldUpdateOperationsInput | string
    optype?: NullableStringFieldUpdateOperationsInput | string | null
    dropid?: StringFieldUpdateOperationsInput | string
    datein?: StringFieldUpdateOperationsInput | string
    timein?: StringFieldUpdateOperationsInput | string
    dateout?: NullableStringFieldUpdateOperationsInput | string | null
    timeout?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_iopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    oper?: StringFieldUpdateOperationsInput | string
    optype?: NullableStringFieldUpdateOperationsInput | string | null
    dropid?: StringFieldUpdateOperationsInput | string
    datein?: StringFieldUpdateOperationsInput | string
    timein?: StringFieldUpdateOperationsInput | string
    dateout?: NullableStringFieldUpdateOperationsInput | string | null
    timeout?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_chtCreateInput = {
    id?: string
    hn: string
    an: string
    date: string
    total: string
    paid: string
    pttype?: string | null
    person_id: string
    seq: string
    opd_memo: string
    invoice_no: string
    invoice_lt?: string | null
  }

  export type t_chtUncheckedCreateInput = {
    id?: string
    hn: string
    an: string
    date: string
    total: string
    paid: string
    pttype?: string | null
    person_id: string
    seq: string
    opd_memo: string
    invoice_no: string
    invoice_lt?: string | null
  }

  export type t_chtUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    paid?: StringFieldUpdateOperationsInput | string
    pttype?: NullableStringFieldUpdateOperationsInput | string | null
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    opd_memo?: StringFieldUpdateOperationsInput | string
    invoice_no?: StringFieldUpdateOperationsInput | string
    invoice_lt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_chtUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    paid?: StringFieldUpdateOperationsInput | string
    pttype?: NullableStringFieldUpdateOperationsInput | string | null
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    opd_memo?: StringFieldUpdateOperationsInput | string
    invoice_no?: StringFieldUpdateOperationsInput | string
    invoice_lt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_chtCreateManyInput = {
    id?: string
    hn: string
    an: string
    date: string
    total: string
    paid: string
    pttype?: string | null
    person_id: string
    seq: string
    opd_memo: string
    invoice_no: string
    invoice_lt?: string | null
  }

  export type t_chtUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    paid?: StringFieldUpdateOperationsInput | string
    pttype?: NullableStringFieldUpdateOperationsInput | string | null
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    opd_memo?: StringFieldUpdateOperationsInput | string
    invoice_no?: StringFieldUpdateOperationsInput | string
    invoice_lt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_chtUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    paid?: StringFieldUpdateOperationsInput | string
    pttype?: NullableStringFieldUpdateOperationsInput | string | null
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    opd_memo?: StringFieldUpdateOperationsInput | string
    invoice_no?: StringFieldUpdateOperationsInput | string
    invoice_lt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_chaCreateInput = {
    id?: string
    hn: string
    an: string
    date: string
    chrgitem: string
    amount: string
    person_id: string
    seq: string
  }

  export type t_chaUncheckedCreateInput = {
    id?: string
    hn: string
    an: string
    date: string
    chrgitem: string
    amount: string
    person_id: string
    seq: string
  }

  export type t_chaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    chrgitem?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
  }

  export type t_chaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    chrgitem?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
  }

  export type t_chaCreateManyInput = {
    id?: string
    hn: string
    an: string
    date: string
    chrgitem: string
    amount: string
    person_id: string
    seq: string
  }

  export type t_chaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    chrgitem?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
  }

  export type t_chaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    chrgitem?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
  }

  export type t_aerCreateInput = {
    id?: string
    hn: string
    an: string
    dateopd: string
    authae?: string | null
    aedate: string
    aetime: string
    aetype: string
    refer_no: string
    refmaini: string
    ireftype: string
    refmaino: string
    oreftype: string
    ucae: string
    emtype: string
    seq: string
    aestatus?: string | null
    dalert?: string | null
    talert?: string | null
  }

  export type t_aerUncheckedCreateInput = {
    id?: string
    hn: string
    an: string
    dateopd: string
    authae?: string | null
    aedate: string
    aetime: string
    aetype: string
    refer_no: string
    refmaini: string
    ireftype: string
    refmaino: string
    oreftype: string
    ucae: string
    emtype: string
    seq: string
    aestatus?: string | null
    dalert?: string | null
    talert?: string | null
  }

  export type t_aerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    authae?: NullableStringFieldUpdateOperationsInput | string | null
    aedate?: StringFieldUpdateOperationsInput | string
    aetime?: StringFieldUpdateOperationsInput | string
    aetype?: StringFieldUpdateOperationsInput | string
    refer_no?: StringFieldUpdateOperationsInput | string
    refmaini?: StringFieldUpdateOperationsInput | string
    ireftype?: StringFieldUpdateOperationsInput | string
    refmaino?: StringFieldUpdateOperationsInput | string
    oreftype?: StringFieldUpdateOperationsInput | string
    ucae?: StringFieldUpdateOperationsInput | string
    emtype?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    aestatus?: NullableStringFieldUpdateOperationsInput | string | null
    dalert?: NullableStringFieldUpdateOperationsInput | string | null
    talert?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_aerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    authae?: NullableStringFieldUpdateOperationsInput | string | null
    aedate?: StringFieldUpdateOperationsInput | string
    aetime?: StringFieldUpdateOperationsInput | string
    aetype?: StringFieldUpdateOperationsInput | string
    refer_no?: StringFieldUpdateOperationsInput | string
    refmaini?: StringFieldUpdateOperationsInput | string
    ireftype?: StringFieldUpdateOperationsInput | string
    refmaino?: StringFieldUpdateOperationsInput | string
    oreftype?: StringFieldUpdateOperationsInput | string
    ucae?: StringFieldUpdateOperationsInput | string
    emtype?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    aestatus?: NullableStringFieldUpdateOperationsInput | string | null
    dalert?: NullableStringFieldUpdateOperationsInput | string | null
    talert?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_aerCreateManyInput = {
    id?: string
    hn: string
    an: string
    dateopd: string
    authae?: string | null
    aedate: string
    aetime: string
    aetype: string
    refer_no: string
    refmaini: string
    ireftype: string
    refmaino: string
    oreftype: string
    ucae: string
    emtype: string
    seq: string
    aestatus?: string | null
    dalert?: string | null
    talert?: string | null
  }

  export type t_aerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    authae?: NullableStringFieldUpdateOperationsInput | string | null
    aedate?: StringFieldUpdateOperationsInput | string
    aetime?: StringFieldUpdateOperationsInput | string
    aetype?: StringFieldUpdateOperationsInput | string
    refer_no?: StringFieldUpdateOperationsInput | string
    refmaini?: StringFieldUpdateOperationsInput | string
    ireftype?: StringFieldUpdateOperationsInput | string
    refmaino?: StringFieldUpdateOperationsInput | string
    oreftype?: StringFieldUpdateOperationsInput | string
    ucae?: StringFieldUpdateOperationsInput | string
    emtype?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    aestatus?: NullableStringFieldUpdateOperationsInput | string | null
    dalert?: NullableStringFieldUpdateOperationsInput | string | null
    talert?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_aerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    authae?: NullableStringFieldUpdateOperationsInput | string | null
    aedate?: StringFieldUpdateOperationsInput | string
    aetime?: StringFieldUpdateOperationsInput | string
    aetype?: StringFieldUpdateOperationsInput | string
    refer_no?: StringFieldUpdateOperationsInput | string
    refmaini?: StringFieldUpdateOperationsInput | string
    ireftype?: StringFieldUpdateOperationsInput | string
    refmaino?: StringFieldUpdateOperationsInput | string
    oreftype?: StringFieldUpdateOperationsInput | string
    ucae?: StringFieldUpdateOperationsInput | string
    emtype?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    aestatus?: NullableStringFieldUpdateOperationsInput | string | null
    dalert?: NullableStringFieldUpdateOperationsInput | string | null
    talert?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_adpCreateInput = {
    id?: string
    hn: string
    an: string
    dateopd: string
    type: string
    code: string
    qty: string
    rate: string
    seq: string
    cagcode?: string | null
    dose?: string | null
    ca_type?: string | null
    serialno?: string | null
    totcopay?: string | null
    use_status?: string | null
    total?: string | null
    tmltcode: string
    status1: string
    bi: string
    clinic?: string | null
    itemsrc: string
    provider: string
    gravida?: string | null
    ga_week?: string | null
    dcip_e_screen?: string | null
    lmp?: string | null
  }

  export type t_adpUncheckedCreateInput = {
    id?: string
    hn: string
    an: string
    dateopd: string
    type: string
    code: string
    qty: string
    rate: string
    seq: string
    cagcode?: string | null
    dose?: string | null
    ca_type?: string | null
    serialno?: string | null
    totcopay?: string | null
    use_status?: string | null
    total?: string | null
    tmltcode: string
    status1: string
    bi: string
    clinic?: string | null
    itemsrc: string
    provider: string
    gravida?: string | null
    ga_week?: string | null
    dcip_e_screen?: string | null
    lmp?: string | null
  }

  export type t_adpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    rate?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    cagcode?: NullableStringFieldUpdateOperationsInput | string | null
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    ca_type?: NullableStringFieldUpdateOperationsInput | string | null
    serialno?: NullableStringFieldUpdateOperationsInput | string | null
    totcopay?: NullableStringFieldUpdateOperationsInput | string | null
    use_status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableStringFieldUpdateOperationsInput | string | null
    tmltcode?: StringFieldUpdateOperationsInput | string
    status1?: StringFieldUpdateOperationsInput | string
    bi?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    itemsrc?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    gravida?: NullableStringFieldUpdateOperationsInput | string | null
    ga_week?: NullableStringFieldUpdateOperationsInput | string | null
    dcip_e_screen?: NullableStringFieldUpdateOperationsInput | string | null
    lmp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_adpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    rate?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    cagcode?: NullableStringFieldUpdateOperationsInput | string | null
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    ca_type?: NullableStringFieldUpdateOperationsInput | string | null
    serialno?: NullableStringFieldUpdateOperationsInput | string | null
    totcopay?: NullableStringFieldUpdateOperationsInput | string | null
    use_status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableStringFieldUpdateOperationsInput | string | null
    tmltcode?: StringFieldUpdateOperationsInput | string
    status1?: StringFieldUpdateOperationsInput | string
    bi?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    itemsrc?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    gravida?: NullableStringFieldUpdateOperationsInput | string | null
    ga_week?: NullableStringFieldUpdateOperationsInput | string | null
    dcip_e_screen?: NullableStringFieldUpdateOperationsInput | string | null
    lmp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_adpCreateManyInput = {
    id?: string
    hn: string
    an: string
    dateopd: string
    type: string
    code: string
    qty: string
    rate: string
    seq: string
    cagcode?: string | null
    dose?: string | null
    ca_type?: string | null
    serialno?: string | null
    totcopay?: string | null
    use_status?: string | null
    total?: string | null
    tmltcode: string
    status1: string
    bi: string
    clinic?: string | null
    itemsrc: string
    provider: string
    gravida?: string | null
    ga_week?: string | null
    dcip_e_screen?: string | null
    lmp?: string | null
  }

  export type t_adpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    rate?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    cagcode?: NullableStringFieldUpdateOperationsInput | string | null
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    ca_type?: NullableStringFieldUpdateOperationsInput | string | null
    serialno?: NullableStringFieldUpdateOperationsInput | string | null
    totcopay?: NullableStringFieldUpdateOperationsInput | string | null
    use_status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableStringFieldUpdateOperationsInput | string | null
    tmltcode?: StringFieldUpdateOperationsInput | string
    status1?: StringFieldUpdateOperationsInput | string
    bi?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    itemsrc?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    gravida?: NullableStringFieldUpdateOperationsInput | string | null
    ga_week?: NullableStringFieldUpdateOperationsInput | string | null
    dcip_e_screen?: NullableStringFieldUpdateOperationsInput | string | null
    lmp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_adpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateopd?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    rate?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    cagcode?: NullableStringFieldUpdateOperationsInput | string | null
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    ca_type?: NullableStringFieldUpdateOperationsInput | string | null
    serialno?: NullableStringFieldUpdateOperationsInput | string | null
    totcopay?: NullableStringFieldUpdateOperationsInput | string | null
    use_status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableStringFieldUpdateOperationsInput | string | null
    tmltcode?: StringFieldUpdateOperationsInput | string
    status1?: StringFieldUpdateOperationsInput | string
    bi?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    itemsrc?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    gravida?: NullableStringFieldUpdateOperationsInput | string | null
    ga_week?: NullableStringFieldUpdateOperationsInput | string | null
    dcip_e_screen?: NullableStringFieldUpdateOperationsInput | string | null
    lmp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type t_lvdCreateInput = {
    id?: string
    seqlvd: string
    an: string
    dateout: string
    timeout: string
    datein: string
    timein: string
    qtyday: string
  }

  export type t_lvdUncheckedCreateInput = {
    id?: string
    seqlvd: string
    an: string
    dateout: string
    timeout: string
    datein: string
    timein: string
    qtyday: string
  }

  export type t_lvdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seqlvd?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateout?: StringFieldUpdateOperationsInput | string
    timeout?: StringFieldUpdateOperationsInput | string
    datein?: StringFieldUpdateOperationsInput | string
    timein?: StringFieldUpdateOperationsInput | string
    qtyday?: StringFieldUpdateOperationsInput | string
  }

  export type t_lvdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seqlvd?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateout?: StringFieldUpdateOperationsInput | string
    timeout?: StringFieldUpdateOperationsInput | string
    datein?: StringFieldUpdateOperationsInput | string
    timein?: StringFieldUpdateOperationsInput | string
    qtyday?: StringFieldUpdateOperationsInput | string
  }

  export type t_lvdCreateManyInput = {
    id?: string
    seqlvd: string
    an: string
    dateout: string
    timeout: string
    datein: string
    timein: string
    qtyday: string
  }

  export type t_lvdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seqlvd?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateout?: StringFieldUpdateOperationsInput | string
    timeout?: StringFieldUpdateOperationsInput | string
    datein?: StringFieldUpdateOperationsInput | string
    timein?: StringFieldUpdateOperationsInput | string
    qtyday?: StringFieldUpdateOperationsInput | string
  }

  export type t_lvdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    seqlvd?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    dateout?: StringFieldUpdateOperationsInput | string
    timeout?: StringFieldUpdateOperationsInput | string
    datein?: StringFieldUpdateOperationsInput | string
    timein?: StringFieldUpdateOperationsInput | string
    qtyday?: StringFieldUpdateOperationsInput | string
  }

  export type t_druCreateInput = {
    id?: string
    hcode: string
    hn: string
    an: string
    clinic?: string | null
    person_id: string
    date_serv: string
    did: string
    didname: string
    amount: string
    drugprice: string
    drugcost?: string | null
    didstd: string
    unit: string
    unit_pack?: string | null
    seq: string
    drugremark: string
    pa_no: string
    totcopay?: string | null
    use_status: string
    total?: string | null
    sigcode?: string | null
    sigtext?: string | null
    provider: string
  }

  export type t_druUncheckedCreateInput = {
    id?: string
    hcode: string
    hn: string
    an: string
    clinic?: string | null
    person_id: string
    date_serv: string
    did: string
    didname: string
    amount: string
    drugprice: string
    drugcost?: string | null
    didstd: string
    unit: string
    unit_pack?: string | null
    seq: string
    drugremark: string
    pa_no: string
    totcopay?: string | null
    use_status: string
    total?: string | null
    sigcode?: string | null
    sigtext?: string | null
    provider: string
  }

  export type t_druUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hcode?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    person_id?: StringFieldUpdateOperationsInput | string
    date_serv?: StringFieldUpdateOperationsInput | string
    did?: StringFieldUpdateOperationsInput | string
    didname?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    drugprice?: StringFieldUpdateOperationsInput | string
    drugcost?: NullableStringFieldUpdateOperationsInput | string | null
    didstd?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unit_pack?: NullableStringFieldUpdateOperationsInput | string | null
    seq?: StringFieldUpdateOperationsInput | string
    drugremark?: StringFieldUpdateOperationsInput | string
    pa_no?: StringFieldUpdateOperationsInput | string
    totcopay?: NullableStringFieldUpdateOperationsInput | string | null
    use_status?: StringFieldUpdateOperationsInput | string
    total?: NullableStringFieldUpdateOperationsInput | string | null
    sigcode?: NullableStringFieldUpdateOperationsInput | string | null
    sigtext?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
  }

  export type t_druUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hcode?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    person_id?: StringFieldUpdateOperationsInput | string
    date_serv?: StringFieldUpdateOperationsInput | string
    did?: StringFieldUpdateOperationsInput | string
    didname?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    drugprice?: StringFieldUpdateOperationsInput | string
    drugcost?: NullableStringFieldUpdateOperationsInput | string | null
    didstd?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unit_pack?: NullableStringFieldUpdateOperationsInput | string | null
    seq?: StringFieldUpdateOperationsInput | string
    drugremark?: StringFieldUpdateOperationsInput | string
    pa_no?: StringFieldUpdateOperationsInput | string
    totcopay?: NullableStringFieldUpdateOperationsInput | string | null
    use_status?: StringFieldUpdateOperationsInput | string
    total?: NullableStringFieldUpdateOperationsInput | string | null
    sigcode?: NullableStringFieldUpdateOperationsInput | string | null
    sigtext?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
  }

  export type t_druCreateManyInput = {
    id?: string
    hcode: string
    hn: string
    an: string
    clinic?: string | null
    person_id: string
    date_serv: string
    did: string
    didname: string
    amount: string
    drugprice: string
    drugcost?: string | null
    didstd: string
    unit: string
    unit_pack?: string | null
    seq: string
    drugremark: string
    pa_no: string
    totcopay?: string | null
    use_status: string
    total?: string | null
    sigcode?: string | null
    sigtext?: string | null
    provider: string
  }

  export type t_druUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hcode?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    person_id?: StringFieldUpdateOperationsInput | string
    date_serv?: StringFieldUpdateOperationsInput | string
    did?: StringFieldUpdateOperationsInput | string
    didname?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    drugprice?: StringFieldUpdateOperationsInput | string
    drugcost?: NullableStringFieldUpdateOperationsInput | string | null
    didstd?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unit_pack?: NullableStringFieldUpdateOperationsInput | string | null
    seq?: StringFieldUpdateOperationsInput | string
    drugremark?: StringFieldUpdateOperationsInput | string
    pa_no?: StringFieldUpdateOperationsInput | string
    totcopay?: NullableStringFieldUpdateOperationsInput | string | null
    use_status?: StringFieldUpdateOperationsInput | string
    total?: NullableStringFieldUpdateOperationsInput | string | null
    sigcode?: NullableStringFieldUpdateOperationsInput | string | null
    sigtext?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
  }

  export type t_druUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hcode?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    an?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    person_id?: StringFieldUpdateOperationsInput | string
    date_serv?: StringFieldUpdateOperationsInput | string
    did?: StringFieldUpdateOperationsInput | string
    didname?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    drugprice?: StringFieldUpdateOperationsInput | string
    drugcost?: NullableStringFieldUpdateOperationsInput | string | null
    didstd?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unit_pack?: NullableStringFieldUpdateOperationsInput | string | null
    seq?: StringFieldUpdateOperationsInput | string
    drugremark?: StringFieldUpdateOperationsInput | string
    pa_no?: StringFieldUpdateOperationsInput | string
    totcopay?: NullableStringFieldUpdateOperationsInput | string | null
    use_status?: StringFieldUpdateOperationsInput | string
    total?: NullableStringFieldUpdateOperationsInput | string | null
    sigcode?: NullableStringFieldUpdateOperationsInput | string | null
    sigtext?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
  }

  export type t_labfuCreateInput = {
    id?: string
    hcode: string
    hn: string
    person_id: string
    dateserv: string
    seq: string
    labtest: string
    labresult: string
  }

  export type t_labfuUncheckedCreateInput = {
    id?: string
    hcode: string
    hn: string
    person_id: string
    dateserv: string
    seq: string
    labtest: string
    labresult: string
  }

  export type t_labfuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hcode?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    dateserv?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    labtest?: StringFieldUpdateOperationsInput | string
    labresult?: StringFieldUpdateOperationsInput | string
  }

  export type t_labfuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hcode?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    dateserv?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    labtest?: StringFieldUpdateOperationsInput | string
    labresult?: StringFieldUpdateOperationsInput | string
  }

  export type t_labfuCreateManyInput = {
    id?: string
    hcode: string
    hn: string
    person_id: string
    dateserv: string
    seq: string
    labtest: string
    labresult: string
  }

  export type t_labfuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hcode?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    dateserv?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    labtest?: StringFieldUpdateOperationsInput | string
    labresult?: StringFieldUpdateOperationsInput | string
  }

  export type t_labfuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hcode?: StringFieldUpdateOperationsInput | string
    hn?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
    dateserv?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    labtest?: StringFieldUpdateOperationsInput | string
    labresult?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type t_insCountOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    inscl?: SortOrder
    subtype?: SortOrder
    cid?: SortOrder
    hcode?: SortOrder
    dateexp?: SortOrder
    hospmain?: SortOrder
    hospsub?: SortOrder
    govcode?: SortOrder
    govname?: SortOrder
    permitno?: SortOrder
    docno?: SortOrder
    ownrpid?: SortOrder
    ownname?: SortOrder
    an?: SortOrder
    seq?: SortOrder
    subinscl?: SortOrder
    relinscl?: SortOrder
    htype?: SortOrder
  }

  export type t_insMaxOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    inscl?: SortOrder
    subtype?: SortOrder
    cid?: SortOrder
    hcode?: SortOrder
    dateexp?: SortOrder
    hospmain?: SortOrder
    hospsub?: SortOrder
    govcode?: SortOrder
    govname?: SortOrder
    permitno?: SortOrder
    docno?: SortOrder
    ownrpid?: SortOrder
    ownname?: SortOrder
    an?: SortOrder
    seq?: SortOrder
    subinscl?: SortOrder
    relinscl?: SortOrder
    htype?: SortOrder
  }

  export type t_insMinOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    inscl?: SortOrder
    subtype?: SortOrder
    cid?: SortOrder
    hcode?: SortOrder
    dateexp?: SortOrder
    hospmain?: SortOrder
    hospsub?: SortOrder
    govcode?: SortOrder
    govname?: SortOrder
    permitno?: SortOrder
    docno?: SortOrder
    ownrpid?: SortOrder
    ownname?: SortOrder
    an?: SortOrder
    seq?: SortOrder
    subinscl?: SortOrder
    relinscl?: SortOrder
    htype?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type t_patCountOrderByAggregateInput = {
    id?: SortOrder
    hcode?: SortOrder
    hn?: SortOrder
    changwat?: SortOrder
    amphur?: SortOrder
    dob?: SortOrder
    sex?: SortOrder
    marriage?: SortOrder
    occupa?: SortOrder
    nation?: SortOrder
    person_id?: SortOrder
    namepat?: SortOrder
    title?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    idtype?: SortOrder
  }

  export type t_patMaxOrderByAggregateInput = {
    id?: SortOrder
    hcode?: SortOrder
    hn?: SortOrder
    changwat?: SortOrder
    amphur?: SortOrder
    dob?: SortOrder
    sex?: SortOrder
    marriage?: SortOrder
    occupa?: SortOrder
    nation?: SortOrder
    person_id?: SortOrder
    namepat?: SortOrder
    title?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    idtype?: SortOrder
  }

  export type t_patMinOrderByAggregateInput = {
    id?: SortOrder
    hcode?: SortOrder
    hn?: SortOrder
    changwat?: SortOrder
    amphur?: SortOrder
    dob?: SortOrder
    sex?: SortOrder
    marriage?: SortOrder
    occupa?: SortOrder
    nation?: SortOrder
    person_id?: SortOrder
    namepat?: SortOrder
    title?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    idtype?: SortOrder
  }

  export type t_opdCountOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    clinic?: SortOrder
    dateopd?: SortOrder
    timeopd?: SortOrder
    seq?: SortOrder
    uuc?: SortOrder
    detail?: SortOrder
    btemp?: SortOrder
    sbp?: SortOrder
    dbp?: SortOrder
    pr?: SortOrder
    rr?: SortOrder
    optype?: SortOrder
    typein?: SortOrder
    typeout?: SortOrder
  }

  export type t_opdMaxOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    clinic?: SortOrder
    dateopd?: SortOrder
    timeopd?: SortOrder
    seq?: SortOrder
    uuc?: SortOrder
    detail?: SortOrder
    btemp?: SortOrder
    sbp?: SortOrder
    dbp?: SortOrder
    pr?: SortOrder
    rr?: SortOrder
    optype?: SortOrder
    typein?: SortOrder
    typeout?: SortOrder
  }

  export type t_opdMinOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    clinic?: SortOrder
    dateopd?: SortOrder
    timeopd?: SortOrder
    seq?: SortOrder
    uuc?: SortOrder
    detail?: SortOrder
    btemp?: SortOrder
    sbp?: SortOrder
    dbp?: SortOrder
    pr?: SortOrder
    rr?: SortOrder
    optype?: SortOrder
    typein?: SortOrder
    typeout?: SortOrder
  }

  export type t_orfCountOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    dateopd?: SortOrder
    clinic?: SortOrder
    refer?: SortOrder
    refertype?: SortOrder
    seq?: SortOrder
    referdate?: SortOrder
  }

  export type t_orfMaxOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    dateopd?: SortOrder
    clinic?: SortOrder
    refer?: SortOrder
    refertype?: SortOrder
    seq?: SortOrder
    referdate?: SortOrder
  }

  export type t_orfMinOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    dateopd?: SortOrder
    clinic?: SortOrder
    refer?: SortOrder
    refertype?: SortOrder
    seq?: SortOrder
    referdate?: SortOrder
  }

  export type t_odxCountOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    datedx?: SortOrder
    clinic?: SortOrder
    diag?: SortOrder
    dxtype?: SortOrder
    drdx?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
  }

  export type t_odxMaxOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    datedx?: SortOrder
    clinic?: SortOrder
    diag?: SortOrder
    dxtype?: SortOrder
    drdx?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
  }

  export type t_odxMinOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    datedx?: SortOrder
    clinic?: SortOrder
    diag?: SortOrder
    dxtype?: SortOrder
    drdx?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
  }

  export type t_oopCountOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    dateopd?: SortOrder
    clinic?: SortOrder
    oper?: SortOrder
    dropid?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
    servprice?: SortOrder
  }

  export type t_oopMaxOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    dateopd?: SortOrder
    clinic?: SortOrder
    oper?: SortOrder
    dropid?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
    servprice?: SortOrder
  }

  export type t_oopMinOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    dateopd?: SortOrder
    clinic?: SortOrder
    oper?: SortOrder
    dropid?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
    servprice?: SortOrder
  }

  export type t_ipdCountOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    dateadm?: SortOrder
    timeadm?: SortOrder
    datedsc?: SortOrder
    timedsc?: SortOrder
    dischs?: SortOrder
    discht?: SortOrder
    warddsc?: SortOrder
    dept?: SortOrder
    adm_w?: SortOrder
    uuc?: SortOrder
    svctype?: SortOrder
  }

  export type t_ipdMaxOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    dateadm?: SortOrder
    timeadm?: SortOrder
    datedsc?: SortOrder
    timedsc?: SortOrder
    dischs?: SortOrder
    discht?: SortOrder
    warddsc?: SortOrder
    dept?: SortOrder
    adm_w?: SortOrder
    uuc?: SortOrder
    svctype?: SortOrder
  }

  export type t_ipdMinOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    dateadm?: SortOrder
    timeadm?: SortOrder
    datedsc?: SortOrder
    timedsc?: SortOrder
    dischs?: SortOrder
    discht?: SortOrder
    warddsc?: SortOrder
    dept?: SortOrder
    adm_w?: SortOrder
    uuc?: SortOrder
    svctype?: SortOrder
  }

  export type t_irfCountOrderByAggregateInput = {
    id?: SortOrder
    an?: SortOrder
    refer?: SortOrder
    refertype?: SortOrder
  }

  export type t_irfMaxOrderByAggregateInput = {
    id?: SortOrder
    an?: SortOrder
    refer?: SortOrder
    refertype?: SortOrder
  }

  export type t_irfMinOrderByAggregateInput = {
    id?: SortOrder
    an?: SortOrder
    refer?: SortOrder
    refertype?: SortOrder
  }

  export type t_idxCountOrderByAggregateInput = {
    id?: SortOrder
    an?: SortOrder
    diag?: SortOrder
    dxtype?: SortOrder
    drdx?: SortOrder
  }

  export type t_idxMaxOrderByAggregateInput = {
    id?: SortOrder
    an?: SortOrder
    diag?: SortOrder
    dxtype?: SortOrder
    drdx?: SortOrder
  }

  export type t_idxMinOrderByAggregateInput = {
    id?: SortOrder
    an?: SortOrder
    diag?: SortOrder
    dxtype?: SortOrder
    drdx?: SortOrder
  }

  export type t_iopCountOrderByAggregateInput = {
    id?: SortOrder
    an?: SortOrder
    oper?: SortOrder
    optype?: SortOrder
    dropid?: SortOrder
    datein?: SortOrder
    timein?: SortOrder
    dateout?: SortOrder
    timeout?: SortOrder
  }

  export type t_iopMaxOrderByAggregateInput = {
    id?: SortOrder
    an?: SortOrder
    oper?: SortOrder
    optype?: SortOrder
    dropid?: SortOrder
    datein?: SortOrder
    timein?: SortOrder
    dateout?: SortOrder
    timeout?: SortOrder
  }

  export type t_iopMinOrderByAggregateInput = {
    id?: SortOrder
    an?: SortOrder
    oper?: SortOrder
    optype?: SortOrder
    dropid?: SortOrder
    datein?: SortOrder
    timein?: SortOrder
    dateout?: SortOrder
    timeout?: SortOrder
  }

  export type t_chtCountOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    date?: SortOrder
    total?: SortOrder
    paid?: SortOrder
    pttype?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
    opd_memo?: SortOrder
    invoice_no?: SortOrder
    invoice_lt?: SortOrder
  }

  export type t_chtMaxOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    date?: SortOrder
    total?: SortOrder
    paid?: SortOrder
    pttype?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
    opd_memo?: SortOrder
    invoice_no?: SortOrder
    invoice_lt?: SortOrder
  }

  export type t_chtMinOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    date?: SortOrder
    total?: SortOrder
    paid?: SortOrder
    pttype?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
    opd_memo?: SortOrder
    invoice_no?: SortOrder
    invoice_lt?: SortOrder
  }

  export type t_chaCountOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    date?: SortOrder
    chrgitem?: SortOrder
    amount?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
  }

  export type t_chaMaxOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    date?: SortOrder
    chrgitem?: SortOrder
    amount?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
  }

  export type t_chaMinOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    date?: SortOrder
    chrgitem?: SortOrder
    amount?: SortOrder
    person_id?: SortOrder
    seq?: SortOrder
  }

  export type t_aerCountOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    dateopd?: SortOrder
    authae?: SortOrder
    aedate?: SortOrder
    aetime?: SortOrder
    aetype?: SortOrder
    refer_no?: SortOrder
    refmaini?: SortOrder
    ireftype?: SortOrder
    refmaino?: SortOrder
    oreftype?: SortOrder
    ucae?: SortOrder
    emtype?: SortOrder
    seq?: SortOrder
    aestatus?: SortOrder
    dalert?: SortOrder
    talert?: SortOrder
  }

  export type t_aerMaxOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    dateopd?: SortOrder
    authae?: SortOrder
    aedate?: SortOrder
    aetime?: SortOrder
    aetype?: SortOrder
    refer_no?: SortOrder
    refmaini?: SortOrder
    ireftype?: SortOrder
    refmaino?: SortOrder
    oreftype?: SortOrder
    ucae?: SortOrder
    emtype?: SortOrder
    seq?: SortOrder
    aestatus?: SortOrder
    dalert?: SortOrder
    talert?: SortOrder
  }

  export type t_aerMinOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    dateopd?: SortOrder
    authae?: SortOrder
    aedate?: SortOrder
    aetime?: SortOrder
    aetype?: SortOrder
    refer_no?: SortOrder
    refmaini?: SortOrder
    ireftype?: SortOrder
    refmaino?: SortOrder
    oreftype?: SortOrder
    ucae?: SortOrder
    emtype?: SortOrder
    seq?: SortOrder
    aestatus?: SortOrder
    dalert?: SortOrder
    talert?: SortOrder
  }

  export type t_adpCountOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    dateopd?: SortOrder
    type?: SortOrder
    code?: SortOrder
    qty?: SortOrder
    rate?: SortOrder
    seq?: SortOrder
    cagcode?: SortOrder
    dose?: SortOrder
    ca_type?: SortOrder
    serialno?: SortOrder
    totcopay?: SortOrder
    use_status?: SortOrder
    total?: SortOrder
    tmltcode?: SortOrder
    status1?: SortOrder
    bi?: SortOrder
    clinic?: SortOrder
    itemsrc?: SortOrder
    provider?: SortOrder
    gravida?: SortOrder
    ga_week?: SortOrder
    dcip_e_screen?: SortOrder
    lmp?: SortOrder
  }

  export type t_adpMaxOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    dateopd?: SortOrder
    type?: SortOrder
    code?: SortOrder
    qty?: SortOrder
    rate?: SortOrder
    seq?: SortOrder
    cagcode?: SortOrder
    dose?: SortOrder
    ca_type?: SortOrder
    serialno?: SortOrder
    totcopay?: SortOrder
    use_status?: SortOrder
    total?: SortOrder
    tmltcode?: SortOrder
    status1?: SortOrder
    bi?: SortOrder
    clinic?: SortOrder
    itemsrc?: SortOrder
    provider?: SortOrder
    gravida?: SortOrder
    ga_week?: SortOrder
    dcip_e_screen?: SortOrder
    lmp?: SortOrder
  }

  export type t_adpMinOrderByAggregateInput = {
    id?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    dateopd?: SortOrder
    type?: SortOrder
    code?: SortOrder
    qty?: SortOrder
    rate?: SortOrder
    seq?: SortOrder
    cagcode?: SortOrder
    dose?: SortOrder
    ca_type?: SortOrder
    serialno?: SortOrder
    totcopay?: SortOrder
    use_status?: SortOrder
    total?: SortOrder
    tmltcode?: SortOrder
    status1?: SortOrder
    bi?: SortOrder
    clinic?: SortOrder
    itemsrc?: SortOrder
    provider?: SortOrder
    gravida?: SortOrder
    ga_week?: SortOrder
    dcip_e_screen?: SortOrder
    lmp?: SortOrder
  }

  export type t_lvdCountOrderByAggregateInput = {
    id?: SortOrder
    seqlvd?: SortOrder
    an?: SortOrder
    dateout?: SortOrder
    timeout?: SortOrder
    datein?: SortOrder
    timein?: SortOrder
    qtyday?: SortOrder
  }

  export type t_lvdMaxOrderByAggregateInput = {
    id?: SortOrder
    seqlvd?: SortOrder
    an?: SortOrder
    dateout?: SortOrder
    timeout?: SortOrder
    datein?: SortOrder
    timein?: SortOrder
    qtyday?: SortOrder
  }

  export type t_lvdMinOrderByAggregateInput = {
    id?: SortOrder
    seqlvd?: SortOrder
    an?: SortOrder
    dateout?: SortOrder
    timeout?: SortOrder
    datein?: SortOrder
    timein?: SortOrder
    qtyday?: SortOrder
  }

  export type t_druCountOrderByAggregateInput = {
    id?: SortOrder
    hcode?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    clinic?: SortOrder
    person_id?: SortOrder
    date_serv?: SortOrder
    did?: SortOrder
    didname?: SortOrder
    amount?: SortOrder
    drugprice?: SortOrder
    drugcost?: SortOrder
    didstd?: SortOrder
    unit?: SortOrder
    unit_pack?: SortOrder
    seq?: SortOrder
    drugremark?: SortOrder
    pa_no?: SortOrder
    totcopay?: SortOrder
    use_status?: SortOrder
    total?: SortOrder
    sigcode?: SortOrder
    sigtext?: SortOrder
    provider?: SortOrder
  }

  export type t_druMaxOrderByAggregateInput = {
    id?: SortOrder
    hcode?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    clinic?: SortOrder
    person_id?: SortOrder
    date_serv?: SortOrder
    did?: SortOrder
    didname?: SortOrder
    amount?: SortOrder
    drugprice?: SortOrder
    drugcost?: SortOrder
    didstd?: SortOrder
    unit?: SortOrder
    unit_pack?: SortOrder
    seq?: SortOrder
    drugremark?: SortOrder
    pa_no?: SortOrder
    totcopay?: SortOrder
    use_status?: SortOrder
    total?: SortOrder
    sigcode?: SortOrder
    sigtext?: SortOrder
    provider?: SortOrder
  }

  export type t_druMinOrderByAggregateInput = {
    id?: SortOrder
    hcode?: SortOrder
    hn?: SortOrder
    an?: SortOrder
    clinic?: SortOrder
    person_id?: SortOrder
    date_serv?: SortOrder
    did?: SortOrder
    didname?: SortOrder
    amount?: SortOrder
    drugprice?: SortOrder
    drugcost?: SortOrder
    didstd?: SortOrder
    unit?: SortOrder
    unit_pack?: SortOrder
    seq?: SortOrder
    drugremark?: SortOrder
    pa_no?: SortOrder
    totcopay?: SortOrder
    use_status?: SortOrder
    total?: SortOrder
    sigcode?: SortOrder
    sigtext?: SortOrder
    provider?: SortOrder
  }

  export type t_labfuCountOrderByAggregateInput = {
    id?: SortOrder
    hcode?: SortOrder
    hn?: SortOrder
    person_id?: SortOrder
    dateserv?: SortOrder
    seq?: SortOrder
    labtest?: SortOrder
    labresult?: SortOrder
  }

  export type t_labfuMaxOrderByAggregateInput = {
    id?: SortOrder
    hcode?: SortOrder
    hn?: SortOrder
    person_id?: SortOrder
    dateserv?: SortOrder
    seq?: SortOrder
    labtest?: SortOrder
    labresult?: SortOrder
  }

  export type t_labfuMinOrderByAggregateInput = {
    id?: SortOrder
    hcode?: SortOrder
    hn?: SortOrder
    person_id?: SortOrder
    dateserv?: SortOrder
    seq?: SortOrder
    labtest?: SortOrder
    labresult?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use t_insDefaultArgs instead
     */
    export type t_insArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_insDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_patDefaultArgs instead
     */
    export type t_patArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_patDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_opdDefaultArgs instead
     */
    export type t_opdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_opdDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_orfDefaultArgs instead
     */
    export type t_orfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_orfDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_odxDefaultArgs instead
     */
    export type t_odxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_odxDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_oopDefaultArgs instead
     */
    export type t_oopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_oopDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_ipdDefaultArgs instead
     */
    export type t_ipdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_ipdDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_irfDefaultArgs instead
     */
    export type t_irfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_irfDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_idxDefaultArgs instead
     */
    export type t_idxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_idxDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_iopDefaultArgs instead
     */
    export type t_iopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_iopDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_chtDefaultArgs instead
     */
    export type t_chtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_chtDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_chaDefaultArgs instead
     */
    export type t_chaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_chaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_aerDefaultArgs instead
     */
    export type t_aerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_aerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_adpDefaultArgs instead
     */
    export type t_adpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_adpDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_lvdDefaultArgs instead
     */
    export type t_lvdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_lvdDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_druDefaultArgs instead
     */
    export type t_druArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_druDefaultArgs<ExtArgs>
    /**
     * @deprecated Use t_labfuDefaultArgs instead
     */
    export type t_labfuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = t_labfuDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}