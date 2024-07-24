
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
 * Model ar_internal_metadata
 * 
 */
export type ar_internal_metadata = $Result.DefaultSelection<Prisma.$ar_internal_metadataPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ar_internal_metadata
 * const ar_internal_metadata = await prisma.ar_internal_metadata.findMany()
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
   * // Fetch zero or more Ar_internal_metadata
   * const ar_internal_metadata = await prisma.ar_internal_metadata.findMany()
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
   * `prisma.ar_internal_metadata`: Exposes CRUD operations for the **ar_internal_metadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ar_internal_metadata
    * const ar_internal_metadata = await prisma.ar_internal_metadata.findMany()
    * ```
    */
  get ar_internal_metadata(): Prisma.ar_internal_metadataDelegate<ExtArgs>;
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
    ar_internal_metadata: 'ar_internal_metadata'
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
      modelProps: 'ar_internal_metadata'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      ar_internal_metadata: {
        payload: Prisma.$ar_internal_metadataPayload<ExtArgs>
        fields: Prisma.ar_internal_metadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ar_internal_metadataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ar_internal_metadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ar_internal_metadataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ar_internal_metadataPayload>
          }
          findFirst: {
            args: Prisma.ar_internal_metadataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ar_internal_metadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ar_internal_metadataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ar_internal_metadataPayload>
          }
          findMany: {
            args: Prisma.ar_internal_metadataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ar_internal_metadataPayload>[]
          }
          create: {
            args: Prisma.ar_internal_metadataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ar_internal_metadataPayload>
          }
          createMany: {
            args: Prisma.ar_internal_metadataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ar_internal_metadataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ar_internal_metadataPayload>
          }
          update: {
            args: Prisma.ar_internal_metadataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ar_internal_metadataPayload>
          }
          deleteMany: {
            args: Prisma.ar_internal_metadataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ar_internal_metadataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ar_internal_metadataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ar_internal_metadataPayload>
          }
          aggregate: {
            args: Prisma.Ar_internal_metadataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAr_internal_metadata>
          }
          groupBy: {
            args: Prisma.ar_internal_metadataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Ar_internal_metadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.ar_internal_metadataCountArgs<ExtArgs>,
            result: $Utils.Optional<Ar_internal_metadataCountAggregateOutputType> | number
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
   * Model ar_internal_metadata
   */

  export type AggregateAr_internal_metadata = {
    _count: Ar_internal_metadataCountAggregateOutputType | null
    _min: Ar_internal_metadataMinAggregateOutputType | null
    _max: Ar_internal_metadataMaxAggregateOutputType | null
  }

  export type Ar_internal_metadataMinAggregateOutputType = {
    key: string | null
    value: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Ar_internal_metadataMaxAggregateOutputType = {
    key: string | null
    value: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Ar_internal_metadataCountAggregateOutputType = {
    key: number
    value: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Ar_internal_metadataMinAggregateInputType = {
    key?: true
    value?: true
    created_at?: true
    updated_at?: true
  }

  export type Ar_internal_metadataMaxAggregateInputType = {
    key?: true
    value?: true
    created_at?: true
    updated_at?: true
  }

  export type Ar_internal_metadataCountAggregateInputType = {
    key?: true
    value?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Ar_internal_metadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ar_internal_metadata to aggregate.
     */
    where?: ar_internal_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ar_internal_metadata to fetch.
     */
    orderBy?: ar_internal_metadataOrderByWithRelationInput | ar_internal_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ar_internal_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ar_internal_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ar_internal_metadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ar_internal_metadata
    **/
    _count?: true | Ar_internal_metadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ar_internal_metadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ar_internal_metadataMaxAggregateInputType
  }

  export type GetAr_internal_metadataAggregateType<T extends Ar_internal_metadataAggregateArgs> = {
        [P in keyof T & keyof AggregateAr_internal_metadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAr_internal_metadata[P]>
      : GetScalarType<T[P], AggregateAr_internal_metadata[P]>
  }




  export type ar_internal_metadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ar_internal_metadataWhereInput
    orderBy?: ar_internal_metadataOrderByWithAggregationInput | ar_internal_metadataOrderByWithAggregationInput[]
    by: Ar_internal_metadataScalarFieldEnum[] | Ar_internal_metadataScalarFieldEnum
    having?: ar_internal_metadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ar_internal_metadataCountAggregateInputType | true
    _min?: Ar_internal_metadataMinAggregateInputType
    _max?: Ar_internal_metadataMaxAggregateInputType
  }

  export type Ar_internal_metadataGroupByOutputType = {
    key: string
    value: string | null
    created_at: Date
    updated_at: Date
    _count: Ar_internal_metadataCountAggregateOutputType | null
    _min: Ar_internal_metadataMinAggregateOutputType | null
    _max: Ar_internal_metadataMaxAggregateOutputType | null
  }

  type GetAr_internal_metadataGroupByPayload<T extends ar_internal_metadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ar_internal_metadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ar_internal_metadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ar_internal_metadataGroupByOutputType[P]>
            : GetScalarType<T[P], Ar_internal_metadataGroupByOutputType[P]>
        }
      >
    >


  export type ar_internal_metadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["ar_internal_metadata"]>

  export type ar_internal_metadataSelectScalar = {
    key?: boolean
    value?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $ar_internal_metadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ar_internal_metadata"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["ar_internal_metadata"]>
    composites: {}
  }


  type ar_internal_metadataGetPayload<S extends boolean | null | undefined | ar_internal_metadataDefaultArgs> = $Result.GetResult<Prisma.$ar_internal_metadataPayload, S>

  type ar_internal_metadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ar_internal_metadataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ar_internal_metadataCountAggregateInputType | true
    }

  export interface ar_internal_metadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ar_internal_metadata'], meta: { name: 'ar_internal_metadata' } }
    /**
     * Find zero or one Ar_internal_metadata that matches the filter.
     * @param {ar_internal_metadataFindUniqueArgs} args - Arguments to find a Ar_internal_metadata
     * @example
     * // Get one Ar_internal_metadata
     * const ar_internal_metadata = await prisma.ar_internal_metadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ar_internal_metadataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ar_internal_metadataFindUniqueArgs<ExtArgs>>
    ): Prisma__ar_internal_metadataClient<$Result.GetResult<Prisma.$ar_internal_metadataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ar_internal_metadata that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ar_internal_metadataFindUniqueOrThrowArgs} args - Arguments to find a Ar_internal_metadata
     * @example
     * // Get one Ar_internal_metadata
     * const ar_internal_metadata = await prisma.ar_internal_metadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ar_internal_metadataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ar_internal_metadataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ar_internal_metadataClient<$Result.GetResult<Prisma.$ar_internal_metadataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ar_internal_metadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ar_internal_metadataFindFirstArgs} args - Arguments to find a Ar_internal_metadata
     * @example
     * // Get one Ar_internal_metadata
     * const ar_internal_metadata = await prisma.ar_internal_metadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ar_internal_metadataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ar_internal_metadataFindFirstArgs<ExtArgs>>
    ): Prisma__ar_internal_metadataClient<$Result.GetResult<Prisma.$ar_internal_metadataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ar_internal_metadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ar_internal_metadataFindFirstOrThrowArgs} args - Arguments to find a Ar_internal_metadata
     * @example
     * // Get one Ar_internal_metadata
     * const ar_internal_metadata = await prisma.ar_internal_metadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ar_internal_metadataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ar_internal_metadataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ar_internal_metadataClient<$Result.GetResult<Prisma.$ar_internal_metadataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ar_internal_metadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ar_internal_metadataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ar_internal_metadata
     * const ar_internal_metadata = await prisma.ar_internal_metadata.findMany()
     * 
     * // Get first 10 Ar_internal_metadata
     * const ar_internal_metadata = await prisma.ar_internal_metadata.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const ar_internal_metadataWithKeyOnly = await prisma.ar_internal_metadata.findMany({ select: { key: true } })
     * 
    **/
    findMany<T extends ar_internal_metadataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ar_internal_metadataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ar_internal_metadataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ar_internal_metadata.
     * @param {ar_internal_metadataCreateArgs} args - Arguments to create a Ar_internal_metadata.
     * @example
     * // Create one Ar_internal_metadata
     * const Ar_internal_metadata = await prisma.ar_internal_metadata.create({
     *   data: {
     *     // ... data to create a Ar_internal_metadata
     *   }
     * })
     * 
    **/
    create<T extends ar_internal_metadataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ar_internal_metadataCreateArgs<ExtArgs>>
    ): Prisma__ar_internal_metadataClient<$Result.GetResult<Prisma.$ar_internal_metadataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ar_internal_metadata.
     *     @param {ar_internal_metadataCreateManyArgs} args - Arguments to create many Ar_internal_metadata.
     *     @example
     *     // Create many Ar_internal_metadata
     *     const ar_internal_metadata = await prisma.ar_internal_metadata.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ar_internal_metadataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ar_internal_metadataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ar_internal_metadata.
     * @param {ar_internal_metadataDeleteArgs} args - Arguments to delete one Ar_internal_metadata.
     * @example
     * // Delete one Ar_internal_metadata
     * const Ar_internal_metadata = await prisma.ar_internal_metadata.delete({
     *   where: {
     *     // ... filter to delete one Ar_internal_metadata
     *   }
     * })
     * 
    **/
    delete<T extends ar_internal_metadataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ar_internal_metadataDeleteArgs<ExtArgs>>
    ): Prisma__ar_internal_metadataClient<$Result.GetResult<Prisma.$ar_internal_metadataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ar_internal_metadata.
     * @param {ar_internal_metadataUpdateArgs} args - Arguments to update one Ar_internal_metadata.
     * @example
     * // Update one Ar_internal_metadata
     * const ar_internal_metadata = await prisma.ar_internal_metadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ar_internal_metadataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ar_internal_metadataUpdateArgs<ExtArgs>>
    ): Prisma__ar_internal_metadataClient<$Result.GetResult<Prisma.$ar_internal_metadataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ar_internal_metadata.
     * @param {ar_internal_metadataDeleteManyArgs} args - Arguments to filter Ar_internal_metadata to delete.
     * @example
     * // Delete a few Ar_internal_metadata
     * const { count } = await prisma.ar_internal_metadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ar_internal_metadataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ar_internal_metadataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ar_internal_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ar_internal_metadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ar_internal_metadata
     * const ar_internal_metadata = await prisma.ar_internal_metadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ar_internal_metadataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ar_internal_metadataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ar_internal_metadata.
     * @param {ar_internal_metadataUpsertArgs} args - Arguments to update or create a Ar_internal_metadata.
     * @example
     * // Update or create a Ar_internal_metadata
     * const ar_internal_metadata = await prisma.ar_internal_metadata.upsert({
     *   create: {
     *     // ... data to create a Ar_internal_metadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ar_internal_metadata we want to update
     *   }
     * })
    **/
    upsert<T extends ar_internal_metadataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ar_internal_metadataUpsertArgs<ExtArgs>>
    ): Prisma__ar_internal_metadataClient<$Result.GetResult<Prisma.$ar_internal_metadataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ar_internal_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ar_internal_metadataCountArgs} args - Arguments to filter Ar_internal_metadata to count.
     * @example
     * // Count the number of Ar_internal_metadata
     * const count = await prisma.ar_internal_metadata.count({
     *   where: {
     *     // ... the filter for the Ar_internal_metadata we want to count
     *   }
     * })
    **/
    count<T extends ar_internal_metadataCountArgs>(
      args?: Subset<T, ar_internal_metadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ar_internal_metadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ar_internal_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ar_internal_metadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ar_internal_metadataAggregateArgs>(args: Subset<T, Ar_internal_metadataAggregateArgs>): Prisma.PrismaPromise<GetAr_internal_metadataAggregateType<T>>

    /**
     * Group by Ar_internal_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ar_internal_metadataGroupByArgs} args - Group by arguments.
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
      T extends ar_internal_metadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ar_internal_metadataGroupByArgs['orderBy'] }
        : { orderBy?: ar_internal_metadataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ar_internal_metadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAr_internal_metadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ar_internal_metadata model
   */
  readonly fields: ar_internal_metadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ar_internal_metadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ar_internal_metadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ar_internal_metadata model
   */ 
  interface ar_internal_metadataFieldRefs {
    readonly key: FieldRef<"ar_internal_metadata", 'String'>
    readonly value: FieldRef<"ar_internal_metadata", 'String'>
    readonly created_at: FieldRef<"ar_internal_metadata", 'DateTime'>
    readonly updated_at: FieldRef<"ar_internal_metadata", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ar_internal_metadata findUnique
   */
  export type ar_internal_metadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ar_internal_metadata
     */
    select?: ar_internal_metadataSelect<ExtArgs> | null
    /**
     * Filter, which ar_internal_metadata to fetch.
     */
    where: ar_internal_metadataWhereUniqueInput
  }


  /**
   * ar_internal_metadata findUniqueOrThrow
   */
  export type ar_internal_metadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ar_internal_metadata
     */
    select?: ar_internal_metadataSelect<ExtArgs> | null
    /**
     * Filter, which ar_internal_metadata to fetch.
     */
    where: ar_internal_metadataWhereUniqueInput
  }


  /**
   * ar_internal_metadata findFirst
   */
  export type ar_internal_metadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ar_internal_metadata
     */
    select?: ar_internal_metadataSelect<ExtArgs> | null
    /**
     * Filter, which ar_internal_metadata to fetch.
     */
    where?: ar_internal_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ar_internal_metadata to fetch.
     */
    orderBy?: ar_internal_metadataOrderByWithRelationInput | ar_internal_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ar_internal_metadata.
     */
    cursor?: ar_internal_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ar_internal_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ar_internal_metadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ar_internal_metadata.
     */
    distinct?: Ar_internal_metadataScalarFieldEnum | Ar_internal_metadataScalarFieldEnum[]
  }


  /**
   * ar_internal_metadata findFirstOrThrow
   */
  export type ar_internal_metadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ar_internal_metadata
     */
    select?: ar_internal_metadataSelect<ExtArgs> | null
    /**
     * Filter, which ar_internal_metadata to fetch.
     */
    where?: ar_internal_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ar_internal_metadata to fetch.
     */
    orderBy?: ar_internal_metadataOrderByWithRelationInput | ar_internal_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ar_internal_metadata.
     */
    cursor?: ar_internal_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ar_internal_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ar_internal_metadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ar_internal_metadata.
     */
    distinct?: Ar_internal_metadataScalarFieldEnum | Ar_internal_metadataScalarFieldEnum[]
  }


  /**
   * ar_internal_metadata findMany
   */
  export type ar_internal_metadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ar_internal_metadata
     */
    select?: ar_internal_metadataSelect<ExtArgs> | null
    /**
     * Filter, which ar_internal_metadata to fetch.
     */
    where?: ar_internal_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ar_internal_metadata to fetch.
     */
    orderBy?: ar_internal_metadataOrderByWithRelationInput | ar_internal_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ar_internal_metadata.
     */
    cursor?: ar_internal_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ar_internal_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ar_internal_metadata.
     */
    skip?: number
    distinct?: Ar_internal_metadataScalarFieldEnum | Ar_internal_metadataScalarFieldEnum[]
  }


  /**
   * ar_internal_metadata create
   */
  export type ar_internal_metadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ar_internal_metadata
     */
    select?: ar_internal_metadataSelect<ExtArgs> | null
    /**
     * The data needed to create a ar_internal_metadata.
     */
    data: XOR<ar_internal_metadataCreateInput, ar_internal_metadataUncheckedCreateInput>
  }


  /**
   * ar_internal_metadata createMany
   */
  export type ar_internal_metadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ar_internal_metadata.
     */
    data: ar_internal_metadataCreateManyInput | ar_internal_metadataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ar_internal_metadata update
   */
  export type ar_internal_metadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ar_internal_metadata
     */
    select?: ar_internal_metadataSelect<ExtArgs> | null
    /**
     * The data needed to update a ar_internal_metadata.
     */
    data: XOR<ar_internal_metadataUpdateInput, ar_internal_metadataUncheckedUpdateInput>
    /**
     * Choose, which ar_internal_metadata to update.
     */
    where: ar_internal_metadataWhereUniqueInput
  }


  /**
   * ar_internal_metadata updateMany
   */
  export type ar_internal_metadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ar_internal_metadata.
     */
    data: XOR<ar_internal_metadataUpdateManyMutationInput, ar_internal_metadataUncheckedUpdateManyInput>
    /**
     * Filter which ar_internal_metadata to update
     */
    where?: ar_internal_metadataWhereInput
  }


  /**
   * ar_internal_metadata upsert
   */
  export type ar_internal_metadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ar_internal_metadata
     */
    select?: ar_internal_metadataSelect<ExtArgs> | null
    /**
     * The filter to search for the ar_internal_metadata to update in case it exists.
     */
    where: ar_internal_metadataWhereUniqueInput
    /**
     * In case the ar_internal_metadata found by the `where` argument doesn't exist, create a new ar_internal_metadata with this data.
     */
    create: XOR<ar_internal_metadataCreateInput, ar_internal_metadataUncheckedCreateInput>
    /**
     * In case the ar_internal_metadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ar_internal_metadataUpdateInput, ar_internal_metadataUncheckedUpdateInput>
  }


  /**
   * ar_internal_metadata delete
   */
  export type ar_internal_metadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ar_internal_metadata
     */
    select?: ar_internal_metadataSelect<ExtArgs> | null
    /**
     * Filter which ar_internal_metadata to delete.
     */
    where: ar_internal_metadataWhereUniqueInput
  }


  /**
   * ar_internal_metadata deleteMany
   */
  export type ar_internal_metadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ar_internal_metadata to delete
     */
    where?: ar_internal_metadataWhereInput
  }


  /**
   * ar_internal_metadata without action
   */
  export type ar_internal_metadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ar_internal_metadata
     */
    select?: ar_internal_metadataSelect<ExtArgs> | null
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


  export const Ar_internal_metadataScalarFieldEnum: {
    key: 'key',
    value: 'value',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Ar_internal_metadataScalarFieldEnum = (typeof Ar_internal_metadataScalarFieldEnum)[keyof typeof Ar_internal_metadataScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type ar_internal_metadataWhereInput = {
    AND?: ar_internal_metadataWhereInput | ar_internal_metadataWhereInput[]
    OR?: ar_internal_metadataWhereInput[]
    NOT?: ar_internal_metadataWhereInput | ar_internal_metadataWhereInput[]
    key?: StringFilter<"ar_internal_metadata"> | string
    value?: StringNullableFilter<"ar_internal_metadata"> | string | null
    created_at?: DateTimeFilter<"ar_internal_metadata"> | Date | string
    updated_at?: DateTimeFilter<"ar_internal_metadata"> | Date | string
  }

  export type ar_internal_metadataOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ar_internal_metadataWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: ar_internal_metadataWhereInput | ar_internal_metadataWhereInput[]
    OR?: ar_internal_metadataWhereInput[]
    NOT?: ar_internal_metadataWhereInput | ar_internal_metadataWhereInput[]
    value?: StringNullableFilter<"ar_internal_metadata"> | string | null
    created_at?: DateTimeFilter<"ar_internal_metadata"> | Date | string
    updated_at?: DateTimeFilter<"ar_internal_metadata"> | Date | string
  }, "key">

  export type ar_internal_metadataOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ar_internal_metadataCountOrderByAggregateInput
    _max?: ar_internal_metadataMaxOrderByAggregateInput
    _min?: ar_internal_metadataMinOrderByAggregateInput
  }

  export type ar_internal_metadataScalarWhereWithAggregatesInput = {
    AND?: ar_internal_metadataScalarWhereWithAggregatesInput | ar_internal_metadataScalarWhereWithAggregatesInput[]
    OR?: ar_internal_metadataScalarWhereWithAggregatesInput[]
    NOT?: ar_internal_metadataScalarWhereWithAggregatesInput | ar_internal_metadataScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"ar_internal_metadata"> | string
    value?: StringNullableWithAggregatesFilter<"ar_internal_metadata"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ar_internal_metadata"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ar_internal_metadata"> | Date | string
  }

  export type ar_internal_metadataCreateInput = {
    key: string
    value?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type ar_internal_metadataUncheckedCreateInput = {
    key: string
    value?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type ar_internal_metadataUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ar_internal_metadataUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ar_internal_metadataCreateManyInput = {
    key: string
    value?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type ar_internal_metadataUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ar_internal_metadataUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ar_internal_metadataCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ar_internal_metadataMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ar_internal_metadataMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ar_internal_metadataDefaultArgs instead
     */
    export type ar_internal_metadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ar_internal_metadataDefaultArgs<ExtArgs>

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