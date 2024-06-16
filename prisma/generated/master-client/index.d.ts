
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
 * Model item_group
 * 
 */
export type item_group = $Result.DefaultSelection<Prisma.$item_groupPayload>
/**
 * Model item_main
 * 
 */
export type item_main = $Result.DefaultSelection<Prisma.$item_mainPayload>
/**
 * Model lab_main
 * 
 */
export type lab_main = $Result.DefaultSelection<Prisma.$lab_mainPayload>
/**
 * Model drug_free_schedule
 * 
 */
export type drug_free_schedule = $Result.DefaultSelection<Prisma.$drug_free_schedulePayload>
/**
 * Model adp_free_schedule
 * 
 */
export type adp_free_schedule = $Result.DefaultSelection<Prisma.$adp_free_schedulePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Item_groups
 * const item_groups = await prisma.item_group.findMany()
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
   * // Fetch zero or more Item_groups
   * const item_groups = await prisma.item_group.findMany()
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
   * `prisma.item_group`: Exposes CRUD operations for the **item_group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Item_groups
    * const item_groups = await prisma.item_group.findMany()
    * ```
    */
  get item_group(): Prisma.item_groupDelegate<ExtArgs>;

  /**
   * `prisma.item_main`: Exposes CRUD operations for the **item_main** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Item_mains
    * const item_mains = await prisma.item_main.findMany()
    * ```
    */
  get item_main(): Prisma.item_mainDelegate<ExtArgs>;

  /**
   * `prisma.lab_main`: Exposes CRUD operations for the **lab_main** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lab_mains
    * const lab_mains = await prisma.lab_main.findMany()
    * ```
    */
  get lab_main(): Prisma.lab_mainDelegate<ExtArgs>;

  /**
   * `prisma.drug_free_schedule`: Exposes CRUD operations for the **drug_free_schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drug_free_schedules
    * const drug_free_schedules = await prisma.drug_free_schedule.findMany()
    * ```
    */
  get drug_free_schedule(): Prisma.drug_free_scheduleDelegate<ExtArgs>;

  /**
   * `prisma.adp_free_schedule`: Exposes CRUD operations for the **adp_free_schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adp_free_schedules
    * const adp_free_schedules = await prisma.adp_free_schedule.findMany()
    * ```
    */
  get adp_free_schedule(): Prisma.adp_free_scheduleDelegate<ExtArgs>;
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
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
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
    item_group: 'item_group',
    item_main: 'item_main',
    lab_main: 'lab_main',
    drug_free_schedule: 'drug_free_schedule',
    adp_free_schedule: 'adp_free_schedule'
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
      modelProps: 'item_group' | 'item_main' | 'lab_main' | 'drug_free_schedule' | 'adp_free_schedule'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      item_group: {
        payload: Prisma.$item_groupPayload<ExtArgs>
        fields: Prisma.item_groupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.item_groupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_groupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.item_groupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_groupPayload>
          }
          findFirst: {
            args: Prisma.item_groupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_groupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.item_groupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_groupPayload>
          }
          findMany: {
            args: Prisma.item_groupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_groupPayload>[]
          }
          create: {
            args: Prisma.item_groupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_groupPayload>
          }
          createMany: {
            args: Prisma.item_groupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.item_groupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_groupPayload>
          }
          update: {
            args: Prisma.item_groupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_groupPayload>
          }
          deleteMany: {
            args: Prisma.item_groupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.item_groupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.item_groupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_groupPayload>
          }
          aggregate: {
            args: Prisma.Item_groupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItem_group>
          }
          groupBy: {
            args: Prisma.item_groupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Item_groupGroupByOutputType>[]
          }
          count: {
            args: Prisma.item_groupCountArgs<ExtArgs>,
            result: $Utils.Optional<Item_groupCountAggregateOutputType> | number
          }
        }
      }
      item_main: {
        payload: Prisma.$item_mainPayload<ExtArgs>
        fields: Prisma.item_mainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.item_mainFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_mainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.item_mainFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_mainPayload>
          }
          findFirst: {
            args: Prisma.item_mainFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_mainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.item_mainFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_mainPayload>
          }
          findMany: {
            args: Prisma.item_mainFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_mainPayload>[]
          }
          create: {
            args: Prisma.item_mainCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_mainPayload>
          }
          createMany: {
            args: Prisma.item_mainCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.item_mainDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_mainPayload>
          }
          update: {
            args: Prisma.item_mainUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_mainPayload>
          }
          deleteMany: {
            args: Prisma.item_mainDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.item_mainUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.item_mainUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$item_mainPayload>
          }
          aggregate: {
            args: Prisma.Item_mainAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItem_main>
          }
          groupBy: {
            args: Prisma.item_mainGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Item_mainGroupByOutputType>[]
          }
          count: {
            args: Prisma.item_mainCountArgs<ExtArgs>,
            result: $Utils.Optional<Item_mainCountAggregateOutputType> | number
          }
        }
      }
      lab_main: {
        payload: Prisma.$lab_mainPayload<ExtArgs>
        fields: Prisma.lab_mainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lab_mainFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lab_mainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lab_mainFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lab_mainPayload>
          }
          findFirst: {
            args: Prisma.lab_mainFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lab_mainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lab_mainFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lab_mainPayload>
          }
          findMany: {
            args: Prisma.lab_mainFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lab_mainPayload>[]
          }
          create: {
            args: Prisma.lab_mainCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lab_mainPayload>
          }
          createMany: {
            args: Prisma.lab_mainCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.lab_mainDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lab_mainPayload>
          }
          update: {
            args: Prisma.lab_mainUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lab_mainPayload>
          }
          deleteMany: {
            args: Prisma.lab_mainDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.lab_mainUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.lab_mainUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lab_mainPayload>
          }
          aggregate: {
            args: Prisma.Lab_mainAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLab_main>
          }
          groupBy: {
            args: Prisma.lab_mainGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Lab_mainGroupByOutputType>[]
          }
          count: {
            args: Prisma.lab_mainCountArgs<ExtArgs>,
            result: $Utils.Optional<Lab_mainCountAggregateOutputType> | number
          }
        }
      }
      drug_free_schedule: {
        payload: Prisma.$drug_free_schedulePayload<ExtArgs>
        fields: Prisma.drug_free_scheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.drug_free_scheduleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drug_free_schedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.drug_free_scheduleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drug_free_schedulePayload>
          }
          findFirst: {
            args: Prisma.drug_free_scheduleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drug_free_schedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.drug_free_scheduleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drug_free_schedulePayload>
          }
          findMany: {
            args: Prisma.drug_free_scheduleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drug_free_schedulePayload>[]
          }
          create: {
            args: Prisma.drug_free_scheduleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drug_free_schedulePayload>
          }
          createMany: {
            args: Prisma.drug_free_scheduleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.drug_free_scheduleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drug_free_schedulePayload>
          }
          update: {
            args: Prisma.drug_free_scheduleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drug_free_schedulePayload>
          }
          deleteMany: {
            args: Prisma.drug_free_scheduleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.drug_free_scheduleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.drug_free_scheduleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$drug_free_schedulePayload>
          }
          aggregate: {
            args: Prisma.Drug_free_scheduleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDrug_free_schedule>
          }
          groupBy: {
            args: Prisma.drug_free_scheduleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Drug_free_scheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.drug_free_scheduleCountArgs<ExtArgs>,
            result: $Utils.Optional<Drug_free_scheduleCountAggregateOutputType> | number
          }
        }
      }
      adp_free_schedule: {
        payload: Prisma.$adp_free_schedulePayload<ExtArgs>
        fields: Prisma.adp_free_scheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adp_free_scheduleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adp_free_schedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adp_free_scheduleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adp_free_schedulePayload>
          }
          findFirst: {
            args: Prisma.adp_free_scheduleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adp_free_schedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adp_free_scheduleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adp_free_schedulePayload>
          }
          findMany: {
            args: Prisma.adp_free_scheduleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adp_free_schedulePayload>[]
          }
          create: {
            args: Prisma.adp_free_scheduleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adp_free_schedulePayload>
          }
          createMany: {
            args: Prisma.adp_free_scheduleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.adp_free_scheduleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adp_free_schedulePayload>
          }
          update: {
            args: Prisma.adp_free_scheduleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adp_free_schedulePayload>
          }
          deleteMany: {
            args: Prisma.adp_free_scheduleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.adp_free_scheduleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.adp_free_scheduleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adp_free_schedulePayload>
          }
          aggregate: {
            args: Prisma.Adp_free_scheduleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdp_free_schedule>
          }
          groupBy: {
            args: Prisma.adp_free_scheduleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Adp_free_scheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.adp_free_scheduleCountArgs<ExtArgs>,
            result: $Utils.Optional<Adp_free_scheduleCountAggregateOutputType> | number
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
   * Model item_group
   */

  export type AggregateItem_group = {
    _count: Item_groupCountAggregateOutputType | null
    _avg: Item_groupAvgAggregateOutputType | null
    _sum: Item_groupSumAggregateOutputType | null
    _min: Item_groupMinAggregateOutputType | null
    _max: Item_groupMaxAggregateOutputType | null
  }

  export type Item_groupAvgAggregateOutputType = {
    item_group_active: number | null
  }

  export type Item_groupSumAggregateOutputType = {
    item_group_active: number | null
  }

  export type Item_groupMinAggregateOutputType = {
    id: string | null
    item_group_code: string | null
    item_group_name: string | null
    item_group_active: number | null
  }

  export type Item_groupMaxAggregateOutputType = {
    id: string | null
    item_group_code: string | null
    item_group_name: string | null
    item_group_active: number | null
  }

  export type Item_groupCountAggregateOutputType = {
    id: number
    item_group_code: number
    item_group_name: number
    item_group_active: number
    _all: number
  }


  export type Item_groupAvgAggregateInputType = {
    item_group_active?: true
  }

  export type Item_groupSumAggregateInputType = {
    item_group_active?: true
  }

  export type Item_groupMinAggregateInputType = {
    id?: true
    item_group_code?: true
    item_group_name?: true
    item_group_active?: true
  }

  export type Item_groupMaxAggregateInputType = {
    id?: true
    item_group_code?: true
    item_group_name?: true
    item_group_active?: true
  }

  export type Item_groupCountAggregateInputType = {
    id?: true
    item_group_code?: true
    item_group_name?: true
    item_group_active?: true
    _all?: true
  }

  export type Item_groupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item_group to aggregate.
     */
    where?: item_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_groups to fetch.
     */
    orderBy?: item_groupOrderByWithRelationInput | item_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: item_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned item_groups
    **/
    _count?: true | Item_groupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Item_groupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Item_groupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Item_groupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Item_groupMaxAggregateInputType
  }

  export type GetItem_groupAggregateType<T extends Item_groupAggregateArgs> = {
        [P in keyof T & keyof AggregateItem_group]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem_group[P]>
      : GetScalarType<T[P], AggregateItem_group[P]>
  }




  export type item_groupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: item_groupWhereInput
    orderBy?: item_groupOrderByWithAggregationInput | item_groupOrderByWithAggregationInput[]
    by: Item_groupScalarFieldEnum[] | Item_groupScalarFieldEnum
    having?: item_groupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Item_groupCountAggregateInputType | true
    _avg?: Item_groupAvgAggregateInputType
    _sum?: Item_groupSumAggregateInputType
    _min?: Item_groupMinAggregateInputType
    _max?: Item_groupMaxAggregateInputType
  }

  export type Item_groupGroupByOutputType = {
    id: string
    item_group_code: string
    item_group_name: string
    item_group_active: number
    _count: Item_groupCountAggregateOutputType | null
    _avg: Item_groupAvgAggregateOutputType | null
    _sum: Item_groupSumAggregateOutputType | null
    _min: Item_groupMinAggregateOutputType | null
    _max: Item_groupMaxAggregateOutputType | null
  }

  type GetItem_groupGroupByPayload<T extends item_groupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Item_groupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Item_groupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Item_groupGroupByOutputType[P]>
            : GetScalarType<T[P], Item_groupGroupByOutputType[P]>
        }
      >
    >


  export type item_groupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item_group_code?: boolean
    item_group_name?: boolean
    item_group_active?: boolean
  }, ExtArgs["result"]["item_group"]>

  export type item_groupSelectScalar = {
    id?: boolean
    item_group_code?: boolean
    item_group_name?: boolean
    item_group_active?: boolean
  }


  export type $item_groupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "item_group"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      item_group_code: string
      item_group_name: string
      item_group_active: number
    }, ExtArgs["result"]["item_group"]>
    composites: {}
  }


  type item_groupGetPayload<S extends boolean | null | undefined | item_groupDefaultArgs> = $Result.GetResult<Prisma.$item_groupPayload, S>

  type item_groupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<item_groupFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: Item_groupCountAggregateInputType | true
    }

  export interface item_groupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['item_group'], meta: { name: 'item_group' } }
    /**
     * Find zero or one Item_group that matches the filter.
     * @param {item_groupFindUniqueArgs} args - Arguments to find a Item_group
     * @example
     * // Get one Item_group
     * const item_group = await prisma.item_group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends item_groupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, item_groupFindUniqueArgs<ExtArgs>>
    ): Prisma__item_groupClient<$Result.GetResult<Prisma.$item_groupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Item_group that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {item_groupFindUniqueOrThrowArgs} args - Arguments to find a Item_group
     * @example
     * // Get one Item_group
     * const item_group = await prisma.item_group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends item_groupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, item_groupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__item_groupClient<$Result.GetResult<Prisma.$item_groupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Item_group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_groupFindFirstArgs} args - Arguments to find a Item_group
     * @example
     * // Get one Item_group
     * const item_group = await prisma.item_group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends item_groupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, item_groupFindFirstArgs<ExtArgs>>
    ): Prisma__item_groupClient<$Result.GetResult<Prisma.$item_groupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Item_group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_groupFindFirstOrThrowArgs} args - Arguments to find a Item_group
     * @example
     * // Get one Item_group
     * const item_group = await prisma.item_group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends item_groupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, item_groupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__item_groupClient<$Result.GetResult<Prisma.$item_groupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Item_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_groupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Item_groups
     * const item_groups = await prisma.item_group.findMany()
     * 
     * // Get first 10 Item_groups
     * const item_groups = await prisma.item_group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const item_groupWithIdOnly = await prisma.item_group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends item_groupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, item_groupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_groupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Item_group.
     * @param {item_groupCreateArgs} args - Arguments to create a Item_group.
     * @example
     * // Create one Item_group
     * const Item_group = await prisma.item_group.create({
     *   data: {
     *     // ... data to create a Item_group
     *   }
     * })
     * 
    **/
    create<T extends item_groupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, item_groupCreateArgs<ExtArgs>>
    ): Prisma__item_groupClient<$Result.GetResult<Prisma.$item_groupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Item_groups.
     *     @param {item_groupCreateManyArgs} args - Arguments to create many Item_groups.
     *     @example
     *     // Create many Item_groups
     *     const item_group = await prisma.item_group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends item_groupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, item_groupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item_group.
     * @param {item_groupDeleteArgs} args - Arguments to delete one Item_group.
     * @example
     * // Delete one Item_group
     * const Item_group = await prisma.item_group.delete({
     *   where: {
     *     // ... filter to delete one Item_group
     *   }
     * })
     * 
    **/
    delete<T extends item_groupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, item_groupDeleteArgs<ExtArgs>>
    ): Prisma__item_groupClient<$Result.GetResult<Prisma.$item_groupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Item_group.
     * @param {item_groupUpdateArgs} args - Arguments to update one Item_group.
     * @example
     * // Update one Item_group
     * const item_group = await prisma.item_group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends item_groupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, item_groupUpdateArgs<ExtArgs>>
    ): Prisma__item_groupClient<$Result.GetResult<Prisma.$item_groupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Item_groups.
     * @param {item_groupDeleteManyArgs} args - Arguments to filter Item_groups to delete.
     * @example
     * // Delete a few Item_groups
     * const { count } = await prisma.item_group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends item_groupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, item_groupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Item_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_groupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Item_groups
     * const item_group = await prisma.item_group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends item_groupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, item_groupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item_group.
     * @param {item_groupUpsertArgs} args - Arguments to update or create a Item_group.
     * @example
     * // Update or create a Item_group
     * const item_group = await prisma.item_group.upsert({
     *   create: {
     *     // ... data to create a Item_group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item_group we want to update
     *   }
     * })
    **/
    upsert<T extends item_groupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, item_groupUpsertArgs<ExtArgs>>
    ): Prisma__item_groupClient<$Result.GetResult<Prisma.$item_groupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Item_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_groupCountArgs} args - Arguments to filter Item_groups to count.
     * @example
     * // Count the number of Item_groups
     * const count = await prisma.item_group.count({
     *   where: {
     *     // ... the filter for the Item_groups we want to count
     *   }
     * })
    **/
    count<T extends item_groupCountArgs>(
      args?: Subset<T, item_groupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Item_groupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_groupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Item_groupAggregateArgs>(args: Subset<T, Item_groupAggregateArgs>): Prisma.PrismaPromise<GetItem_groupAggregateType<T>>

    /**
     * Group by Item_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_groupGroupByArgs} args - Group by arguments.
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
      T extends item_groupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: item_groupGroupByArgs['orderBy'] }
        : { orderBy?: item_groupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, item_groupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItem_groupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the item_group model
   */
  readonly fields: item_groupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for item_group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__item_groupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the item_group model
   */ 
  interface item_groupFieldRefs {
    readonly id: FieldRef<"item_group", 'String'>
    readonly item_group_code: FieldRef<"item_group", 'String'>
    readonly item_group_name: FieldRef<"item_group", 'String'>
    readonly item_group_active: FieldRef<"item_group", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * item_group findUnique
   */
  export type item_groupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_group
     */
    select?: item_groupSelect<ExtArgs> | null
    /**
     * Filter, which item_group to fetch.
     */
    where: item_groupWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_group findUniqueOrThrow
   */
  export type item_groupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_group
     */
    select?: item_groupSelect<ExtArgs> | null
    /**
     * Filter, which item_group to fetch.
     */
    where: item_groupWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_group findFirst
   */
  export type item_groupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_group
     */
    select?: item_groupSelect<ExtArgs> | null
    /**
     * Filter, which item_group to fetch.
     */
    where?: item_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_groups to fetch.
     */
    orderBy?: item_groupOrderByWithRelationInput | item_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for item_groups.
     */
    cursor?: item_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_groups.
     */
    distinct?: Item_groupScalarFieldEnum | Item_groupScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_group findFirstOrThrow
   */
  export type item_groupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_group
     */
    select?: item_groupSelect<ExtArgs> | null
    /**
     * Filter, which item_group to fetch.
     */
    where?: item_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_groups to fetch.
     */
    orderBy?: item_groupOrderByWithRelationInput | item_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for item_groups.
     */
    cursor?: item_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_groups.
     */
    distinct?: Item_groupScalarFieldEnum | Item_groupScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_group findMany
   */
  export type item_groupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_group
     */
    select?: item_groupSelect<ExtArgs> | null
    /**
     * Filter, which item_groups to fetch.
     */
    where?: item_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_groups to fetch.
     */
    orderBy?: item_groupOrderByWithRelationInput | item_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing item_groups.
     */
    cursor?: item_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_groups.
     */
    skip?: number
    distinct?: Item_groupScalarFieldEnum | Item_groupScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_group create
   */
  export type item_groupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_group
     */
    select?: item_groupSelect<ExtArgs> | null
    /**
     * The data needed to create a item_group.
     */
    data: XOR<item_groupCreateInput, item_groupUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_group createMany
   */
  export type item_groupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many item_groups.
     */
    data: item_groupCreateManyInput | item_groupCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * item_group update
   */
  export type item_groupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_group
     */
    select?: item_groupSelect<ExtArgs> | null
    /**
     * The data needed to update a item_group.
     */
    data: XOR<item_groupUpdateInput, item_groupUncheckedUpdateInput>
    /**
     * Choose, which item_group to update.
     */
    where: item_groupWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_group updateMany
   */
  export type item_groupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update item_groups.
     */
    data: XOR<item_groupUpdateManyMutationInput, item_groupUncheckedUpdateManyInput>
    /**
     * Filter which item_groups to update
     */
    where?: item_groupWhereInput
  }


  /**
   * item_group upsert
   */
  export type item_groupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_group
     */
    select?: item_groupSelect<ExtArgs> | null
    /**
     * The filter to search for the item_group to update in case it exists.
     */
    where: item_groupWhereUniqueInput
    /**
     * In case the item_group found by the `where` argument doesn't exist, create a new item_group with this data.
     */
    create: XOR<item_groupCreateInput, item_groupUncheckedCreateInput>
    /**
     * In case the item_group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<item_groupUpdateInput, item_groupUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_group delete
   */
  export type item_groupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_group
     */
    select?: item_groupSelect<ExtArgs> | null
    /**
     * Filter which item_group to delete.
     */
    where: item_groupWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_group deleteMany
   */
  export type item_groupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item_groups to delete
     */
    where?: item_groupWhereInput
  }


  /**
   * item_group without action
   */
  export type item_groupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_group
     */
    select?: item_groupSelect<ExtArgs> | null
  }



  /**
   * Model item_main
   */

  export type AggregateItem_main = {
    _count: Item_mainCountAggregateOutputType | null
    _min: Item_mainMinAggregateOutputType | null
    _max: Item_mainMaxAggregateOutputType | null
  }

  export type Item_mainMinAggregateOutputType = {
    id: string | null
  }

  export type Item_mainMaxAggregateOutputType = {
    id: string | null
  }

  export type Item_mainCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type Item_mainMinAggregateInputType = {
    id?: true
  }

  export type Item_mainMaxAggregateInputType = {
    id?: true
  }

  export type Item_mainCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type Item_mainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item_main to aggregate.
     */
    where?: item_mainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_mains to fetch.
     */
    orderBy?: item_mainOrderByWithRelationInput | item_mainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: item_mainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_mains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_mains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned item_mains
    **/
    _count?: true | Item_mainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Item_mainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Item_mainMaxAggregateInputType
  }

  export type GetItem_mainAggregateType<T extends Item_mainAggregateArgs> = {
        [P in keyof T & keyof AggregateItem_main]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem_main[P]>
      : GetScalarType<T[P], AggregateItem_main[P]>
  }




  export type item_mainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: item_mainWhereInput
    orderBy?: item_mainOrderByWithAggregationInput | item_mainOrderByWithAggregationInput[]
    by: Item_mainScalarFieldEnum[] | Item_mainScalarFieldEnum
    having?: item_mainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Item_mainCountAggregateInputType | true
    _min?: Item_mainMinAggregateInputType
    _max?: Item_mainMaxAggregateInputType
  }

  export type Item_mainGroupByOutputType = {
    id: string
    _count: Item_mainCountAggregateOutputType | null
    _min: Item_mainMinAggregateOutputType | null
    _max: Item_mainMaxAggregateOutputType | null
  }

  type GetItem_mainGroupByPayload<T extends item_mainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Item_mainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Item_mainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Item_mainGroupByOutputType[P]>
            : GetScalarType<T[P], Item_mainGroupByOutputType[P]>
        }
      >
    >


  export type item_mainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["item_main"]>

  export type item_mainSelectScalar = {
    id?: boolean
  }


  export type $item_mainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "item_main"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["item_main"]>
    composites: {}
  }


  type item_mainGetPayload<S extends boolean | null | undefined | item_mainDefaultArgs> = $Result.GetResult<Prisma.$item_mainPayload, S>

  type item_mainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<item_mainFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: Item_mainCountAggregateInputType | true
    }

  export interface item_mainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['item_main'], meta: { name: 'item_main' } }
    /**
     * Find zero or one Item_main that matches the filter.
     * @param {item_mainFindUniqueArgs} args - Arguments to find a Item_main
     * @example
     * // Get one Item_main
     * const item_main = await prisma.item_main.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends item_mainFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, item_mainFindUniqueArgs<ExtArgs>>
    ): Prisma__item_mainClient<$Result.GetResult<Prisma.$item_mainPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Item_main that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {item_mainFindUniqueOrThrowArgs} args - Arguments to find a Item_main
     * @example
     * // Get one Item_main
     * const item_main = await prisma.item_main.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends item_mainFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, item_mainFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__item_mainClient<$Result.GetResult<Prisma.$item_mainPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Item_main that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_mainFindFirstArgs} args - Arguments to find a Item_main
     * @example
     * // Get one Item_main
     * const item_main = await prisma.item_main.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends item_mainFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, item_mainFindFirstArgs<ExtArgs>>
    ): Prisma__item_mainClient<$Result.GetResult<Prisma.$item_mainPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Item_main that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_mainFindFirstOrThrowArgs} args - Arguments to find a Item_main
     * @example
     * // Get one Item_main
     * const item_main = await prisma.item_main.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends item_mainFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, item_mainFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__item_mainClient<$Result.GetResult<Prisma.$item_mainPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Item_mains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_mainFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Item_mains
     * const item_mains = await prisma.item_main.findMany()
     * 
     * // Get first 10 Item_mains
     * const item_mains = await prisma.item_main.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const item_mainWithIdOnly = await prisma.item_main.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends item_mainFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, item_mainFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_mainPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Item_main.
     * @param {item_mainCreateArgs} args - Arguments to create a Item_main.
     * @example
     * // Create one Item_main
     * const Item_main = await prisma.item_main.create({
     *   data: {
     *     // ... data to create a Item_main
     *   }
     * })
     * 
    **/
    create<T extends item_mainCreateArgs<ExtArgs>>(
      args: SelectSubset<T, item_mainCreateArgs<ExtArgs>>
    ): Prisma__item_mainClient<$Result.GetResult<Prisma.$item_mainPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Item_mains.
     *     @param {item_mainCreateManyArgs} args - Arguments to create many Item_mains.
     *     @example
     *     // Create many Item_mains
     *     const item_main = await prisma.item_main.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends item_mainCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, item_mainCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item_main.
     * @param {item_mainDeleteArgs} args - Arguments to delete one Item_main.
     * @example
     * // Delete one Item_main
     * const Item_main = await prisma.item_main.delete({
     *   where: {
     *     // ... filter to delete one Item_main
     *   }
     * })
     * 
    **/
    delete<T extends item_mainDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, item_mainDeleteArgs<ExtArgs>>
    ): Prisma__item_mainClient<$Result.GetResult<Prisma.$item_mainPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Item_main.
     * @param {item_mainUpdateArgs} args - Arguments to update one Item_main.
     * @example
     * // Update one Item_main
     * const item_main = await prisma.item_main.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends item_mainUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, item_mainUpdateArgs<ExtArgs>>
    ): Prisma__item_mainClient<$Result.GetResult<Prisma.$item_mainPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Item_mains.
     * @param {item_mainDeleteManyArgs} args - Arguments to filter Item_mains to delete.
     * @example
     * // Delete a few Item_mains
     * const { count } = await prisma.item_main.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends item_mainDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, item_mainDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Item_mains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_mainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Item_mains
     * const item_main = await prisma.item_main.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends item_mainUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, item_mainUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item_main.
     * @param {item_mainUpsertArgs} args - Arguments to update or create a Item_main.
     * @example
     * // Update or create a Item_main
     * const item_main = await prisma.item_main.upsert({
     *   create: {
     *     // ... data to create a Item_main
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item_main we want to update
     *   }
     * })
    **/
    upsert<T extends item_mainUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, item_mainUpsertArgs<ExtArgs>>
    ): Prisma__item_mainClient<$Result.GetResult<Prisma.$item_mainPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Item_mains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_mainCountArgs} args - Arguments to filter Item_mains to count.
     * @example
     * // Count the number of Item_mains
     * const count = await prisma.item_main.count({
     *   where: {
     *     // ... the filter for the Item_mains we want to count
     *   }
     * })
    **/
    count<T extends item_mainCountArgs>(
      args?: Subset<T, item_mainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Item_mainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item_main.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_mainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Item_mainAggregateArgs>(args: Subset<T, Item_mainAggregateArgs>): Prisma.PrismaPromise<GetItem_mainAggregateType<T>>

    /**
     * Group by Item_main.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_mainGroupByArgs} args - Group by arguments.
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
      T extends item_mainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: item_mainGroupByArgs['orderBy'] }
        : { orderBy?: item_mainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, item_mainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItem_mainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the item_main model
   */
  readonly fields: item_mainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for item_main.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__item_mainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the item_main model
   */ 
  interface item_mainFieldRefs {
    readonly id: FieldRef<"item_main", 'String'>
  }
    

  // Custom InputTypes

  /**
   * item_main findUnique
   */
  export type item_mainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_main
     */
    select?: item_mainSelect<ExtArgs> | null
    /**
     * Filter, which item_main to fetch.
     */
    where: item_mainWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_main findUniqueOrThrow
   */
  export type item_mainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_main
     */
    select?: item_mainSelect<ExtArgs> | null
    /**
     * Filter, which item_main to fetch.
     */
    where: item_mainWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_main findFirst
   */
  export type item_mainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_main
     */
    select?: item_mainSelect<ExtArgs> | null
    /**
     * Filter, which item_main to fetch.
     */
    where?: item_mainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_mains to fetch.
     */
    orderBy?: item_mainOrderByWithRelationInput | item_mainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for item_mains.
     */
    cursor?: item_mainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_mains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_mains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_mains.
     */
    distinct?: Item_mainScalarFieldEnum | Item_mainScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_main findFirstOrThrow
   */
  export type item_mainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_main
     */
    select?: item_mainSelect<ExtArgs> | null
    /**
     * Filter, which item_main to fetch.
     */
    where?: item_mainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_mains to fetch.
     */
    orderBy?: item_mainOrderByWithRelationInput | item_mainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for item_mains.
     */
    cursor?: item_mainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_mains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_mains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_mains.
     */
    distinct?: Item_mainScalarFieldEnum | Item_mainScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_main findMany
   */
  export type item_mainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_main
     */
    select?: item_mainSelect<ExtArgs> | null
    /**
     * Filter, which item_mains to fetch.
     */
    where?: item_mainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_mains to fetch.
     */
    orderBy?: item_mainOrderByWithRelationInput | item_mainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing item_mains.
     */
    cursor?: item_mainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_mains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_mains.
     */
    skip?: number
    distinct?: Item_mainScalarFieldEnum | Item_mainScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_main create
   */
  export type item_mainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_main
     */
    select?: item_mainSelect<ExtArgs> | null
    /**
     * The data needed to create a item_main.
     */
    data?: XOR<item_mainCreateInput, item_mainUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_main createMany
   */
  export type item_mainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many item_mains.
     */
    data: item_mainCreateManyInput | item_mainCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * item_main update
   */
  export type item_mainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_main
     */
    select?: item_mainSelect<ExtArgs> | null
    /**
     * The data needed to update a item_main.
     */
    data: XOR<item_mainUpdateInput, item_mainUncheckedUpdateInput>
    /**
     * Choose, which item_main to update.
     */
    where: item_mainWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_main updateMany
   */
  export type item_mainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update item_mains.
     */
    data: XOR<item_mainUpdateManyMutationInput, item_mainUncheckedUpdateManyInput>
    /**
     * Filter which item_mains to update
     */
    where?: item_mainWhereInput
  }


  /**
   * item_main upsert
   */
  export type item_mainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_main
     */
    select?: item_mainSelect<ExtArgs> | null
    /**
     * The filter to search for the item_main to update in case it exists.
     */
    where: item_mainWhereUniqueInput
    /**
     * In case the item_main found by the `where` argument doesn't exist, create a new item_main with this data.
     */
    create: XOR<item_mainCreateInput, item_mainUncheckedCreateInput>
    /**
     * In case the item_main was found with the provided `where` argument, update it with this data.
     */
    update: XOR<item_mainUpdateInput, item_mainUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_main delete
   */
  export type item_mainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_main
     */
    select?: item_mainSelect<ExtArgs> | null
    /**
     * Filter which item_main to delete.
     */
    where: item_mainWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * item_main deleteMany
   */
  export type item_mainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item_mains to delete
     */
    where?: item_mainWhereInput
  }


  /**
   * item_main without action
   */
  export type item_mainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_main
     */
    select?: item_mainSelect<ExtArgs> | null
  }



  /**
   * Model lab_main
   */

  export type AggregateLab_main = {
    _count: Lab_mainCountAggregateOutputType | null
    _min: Lab_mainMinAggregateOutputType | null
    _max: Lab_mainMaxAggregateOutputType | null
  }

  export type Lab_mainMinAggregateOutputType = {
    id: string | null
  }

  export type Lab_mainMaxAggregateOutputType = {
    id: string | null
  }

  export type Lab_mainCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type Lab_mainMinAggregateInputType = {
    id?: true
  }

  export type Lab_mainMaxAggregateInputType = {
    id?: true
  }

  export type Lab_mainCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type Lab_mainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lab_main to aggregate.
     */
    where?: lab_mainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lab_mains to fetch.
     */
    orderBy?: lab_mainOrderByWithRelationInput | lab_mainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lab_mainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lab_mains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lab_mains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lab_mains
    **/
    _count?: true | Lab_mainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lab_mainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lab_mainMaxAggregateInputType
  }

  export type GetLab_mainAggregateType<T extends Lab_mainAggregateArgs> = {
        [P in keyof T & keyof AggregateLab_main]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLab_main[P]>
      : GetScalarType<T[P], AggregateLab_main[P]>
  }




  export type lab_mainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lab_mainWhereInput
    orderBy?: lab_mainOrderByWithAggregationInput | lab_mainOrderByWithAggregationInput[]
    by: Lab_mainScalarFieldEnum[] | Lab_mainScalarFieldEnum
    having?: lab_mainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lab_mainCountAggregateInputType | true
    _min?: Lab_mainMinAggregateInputType
    _max?: Lab_mainMaxAggregateInputType
  }

  export type Lab_mainGroupByOutputType = {
    id: string
    _count: Lab_mainCountAggregateOutputType | null
    _min: Lab_mainMinAggregateOutputType | null
    _max: Lab_mainMaxAggregateOutputType | null
  }

  type GetLab_mainGroupByPayload<T extends lab_mainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lab_mainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lab_mainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lab_mainGroupByOutputType[P]>
            : GetScalarType<T[P], Lab_mainGroupByOutputType[P]>
        }
      >
    >


  export type lab_mainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["lab_main"]>

  export type lab_mainSelectScalar = {
    id?: boolean
  }


  export type $lab_mainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lab_main"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["lab_main"]>
    composites: {}
  }


  type lab_mainGetPayload<S extends boolean | null | undefined | lab_mainDefaultArgs> = $Result.GetResult<Prisma.$lab_mainPayload, S>

  type lab_mainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<lab_mainFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: Lab_mainCountAggregateInputType | true
    }

  export interface lab_mainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lab_main'], meta: { name: 'lab_main' } }
    /**
     * Find zero or one Lab_main that matches the filter.
     * @param {lab_mainFindUniqueArgs} args - Arguments to find a Lab_main
     * @example
     * // Get one Lab_main
     * const lab_main = await prisma.lab_main.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends lab_mainFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, lab_mainFindUniqueArgs<ExtArgs>>
    ): Prisma__lab_mainClient<$Result.GetResult<Prisma.$lab_mainPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Lab_main that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {lab_mainFindUniqueOrThrowArgs} args - Arguments to find a Lab_main
     * @example
     * // Get one Lab_main
     * const lab_main = await prisma.lab_main.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends lab_mainFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, lab_mainFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__lab_mainClient<$Result.GetResult<Prisma.$lab_mainPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Lab_main that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lab_mainFindFirstArgs} args - Arguments to find a Lab_main
     * @example
     * // Get one Lab_main
     * const lab_main = await prisma.lab_main.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends lab_mainFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, lab_mainFindFirstArgs<ExtArgs>>
    ): Prisma__lab_mainClient<$Result.GetResult<Prisma.$lab_mainPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Lab_main that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lab_mainFindFirstOrThrowArgs} args - Arguments to find a Lab_main
     * @example
     * // Get one Lab_main
     * const lab_main = await prisma.lab_main.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends lab_mainFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, lab_mainFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__lab_mainClient<$Result.GetResult<Prisma.$lab_mainPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Lab_mains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lab_mainFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lab_mains
     * const lab_mains = await prisma.lab_main.findMany()
     * 
     * // Get first 10 Lab_mains
     * const lab_mains = await prisma.lab_main.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lab_mainWithIdOnly = await prisma.lab_main.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends lab_mainFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lab_mainFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lab_mainPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Lab_main.
     * @param {lab_mainCreateArgs} args - Arguments to create a Lab_main.
     * @example
     * // Create one Lab_main
     * const Lab_main = await prisma.lab_main.create({
     *   data: {
     *     // ... data to create a Lab_main
     *   }
     * })
     * 
    **/
    create<T extends lab_mainCreateArgs<ExtArgs>>(
      args: SelectSubset<T, lab_mainCreateArgs<ExtArgs>>
    ): Prisma__lab_mainClient<$Result.GetResult<Prisma.$lab_mainPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Lab_mains.
     *     @param {lab_mainCreateManyArgs} args - Arguments to create many Lab_mains.
     *     @example
     *     // Create many Lab_mains
     *     const lab_main = await prisma.lab_main.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends lab_mainCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lab_mainCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lab_main.
     * @param {lab_mainDeleteArgs} args - Arguments to delete one Lab_main.
     * @example
     * // Delete one Lab_main
     * const Lab_main = await prisma.lab_main.delete({
     *   where: {
     *     // ... filter to delete one Lab_main
     *   }
     * })
     * 
    **/
    delete<T extends lab_mainDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, lab_mainDeleteArgs<ExtArgs>>
    ): Prisma__lab_mainClient<$Result.GetResult<Prisma.$lab_mainPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Lab_main.
     * @param {lab_mainUpdateArgs} args - Arguments to update one Lab_main.
     * @example
     * // Update one Lab_main
     * const lab_main = await prisma.lab_main.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends lab_mainUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, lab_mainUpdateArgs<ExtArgs>>
    ): Prisma__lab_mainClient<$Result.GetResult<Prisma.$lab_mainPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Lab_mains.
     * @param {lab_mainDeleteManyArgs} args - Arguments to filter Lab_mains to delete.
     * @example
     * // Delete a few Lab_mains
     * const { count } = await prisma.lab_main.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends lab_mainDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lab_mainDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lab_mains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lab_mainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lab_mains
     * const lab_main = await prisma.lab_main.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends lab_mainUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, lab_mainUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lab_main.
     * @param {lab_mainUpsertArgs} args - Arguments to update or create a Lab_main.
     * @example
     * // Update or create a Lab_main
     * const lab_main = await prisma.lab_main.upsert({
     *   create: {
     *     // ... data to create a Lab_main
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lab_main we want to update
     *   }
     * })
    **/
    upsert<T extends lab_mainUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, lab_mainUpsertArgs<ExtArgs>>
    ): Prisma__lab_mainClient<$Result.GetResult<Prisma.$lab_mainPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Lab_mains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lab_mainCountArgs} args - Arguments to filter Lab_mains to count.
     * @example
     * // Count the number of Lab_mains
     * const count = await prisma.lab_main.count({
     *   where: {
     *     // ... the filter for the Lab_mains we want to count
     *   }
     * })
    **/
    count<T extends lab_mainCountArgs>(
      args?: Subset<T, lab_mainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lab_mainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lab_main.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lab_mainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Lab_mainAggregateArgs>(args: Subset<T, Lab_mainAggregateArgs>): Prisma.PrismaPromise<GetLab_mainAggregateType<T>>

    /**
     * Group by Lab_main.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lab_mainGroupByArgs} args - Group by arguments.
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
      T extends lab_mainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lab_mainGroupByArgs['orderBy'] }
        : { orderBy?: lab_mainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lab_mainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLab_mainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lab_main model
   */
  readonly fields: lab_mainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lab_main.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lab_mainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the lab_main model
   */ 
  interface lab_mainFieldRefs {
    readonly id: FieldRef<"lab_main", 'String'>
  }
    

  // Custom InputTypes

  /**
   * lab_main findUnique
   */
  export type lab_mainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab_main
     */
    select?: lab_mainSelect<ExtArgs> | null
    /**
     * Filter, which lab_main to fetch.
     */
    where: lab_mainWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * lab_main findUniqueOrThrow
   */
  export type lab_mainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab_main
     */
    select?: lab_mainSelect<ExtArgs> | null
    /**
     * Filter, which lab_main to fetch.
     */
    where: lab_mainWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * lab_main findFirst
   */
  export type lab_mainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab_main
     */
    select?: lab_mainSelect<ExtArgs> | null
    /**
     * Filter, which lab_main to fetch.
     */
    where?: lab_mainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lab_mains to fetch.
     */
    orderBy?: lab_mainOrderByWithRelationInput | lab_mainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lab_mains.
     */
    cursor?: lab_mainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lab_mains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lab_mains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lab_mains.
     */
    distinct?: Lab_mainScalarFieldEnum | Lab_mainScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * lab_main findFirstOrThrow
   */
  export type lab_mainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab_main
     */
    select?: lab_mainSelect<ExtArgs> | null
    /**
     * Filter, which lab_main to fetch.
     */
    where?: lab_mainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lab_mains to fetch.
     */
    orderBy?: lab_mainOrderByWithRelationInput | lab_mainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lab_mains.
     */
    cursor?: lab_mainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lab_mains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lab_mains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lab_mains.
     */
    distinct?: Lab_mainScalarFieldEnum | Lab_mainScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * lab_main findMany
   */
  export type lab_mainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab_main
     */
    select?: lab_mainSelect<ExtArgs> | null
    /**
     * Filter, which lab_mains to fetch.
     */
    where?: lab_mainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lab_mains to fetch.
     */
    orderBy?: lab_mainOrderByWithRelationInput | lab_mainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lab_mains.
     */
    cursor?: lab_mainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lab_mains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lab_mains.
     */
    skip?: number
    distinct?: Lab_mainScalarFieldEnum | Lab_mainScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * lab_main create
   */
  export type lab_mainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab_main
     */
    select?: lab_mainSelect<ExtArgs> | null
    /**
     * The data needed to create a lab_main.
     */
    data?: XOR<lab_mainCreateInput, lab_mainUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * lab_main createMany
   */
  export type lab_mainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lab_mains.
     */
    data: lab_mainCreateManyInput | lab_mainCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * lab_main update
   */
  export type lab_mainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab_main
     */
    select?: lab_mainSelect<ExtArgs> | null
    /**
     * The data needed to update a lab_main.
     */
    data: XOR<lab_mainUpdateInput, lab_mainUncheckedUpdateInput>
    /**
     * Choose, which lab_main to update.
     */
    where: lab_mainWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * lab_main updateMany
   */
  export type lab_mainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lab_mains.
     */
    data: XOR<lab_mainUpdateManyMutationInput, lab_mainUncheckedUpdateManyInput>
    /**
     * Filter which lab_mains to update
     */
    where?: lab_mainWhereInput
  }


  /**
   * lab_main upsert
   */
  export type lab_mainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab_main
     */
    select?: lab_mainSelect<ExtArgs> | null
    /**
     * The filter to search for the lab_main to update in case it exists.
     */
    where: lab_mainWhereUniqueInput
    /**
     * In case the lab_main found by the `where` argument doesn't exist, create a new lab_main with this data.
     */
    create: XOR<lab_mainCreateInput, lab_mainUncheckedCreateInput>
    /**
     * In case the lab_main was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lab_mainUpdateInput, lab_mainUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * lab_main delete
   */
  export type lab_mainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab_main
     */
    select?: lab_mainSelect<ExtArgs> | null
    /**
     * Filter which lab_main to delete.
     */
    where: lab_mainWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * lab_main deleteMany
   */
  export type lab_mainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lab_mains to delete
     */
    where?: lab_mainWhereInput
  }


  /**
   * lab_main without action
   */
  export type lab_mainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab_main
     */
    select?: lab_mainSelect<ExtArgs> | null
  }



  /**
   * Model drug_free_schedule
   */

  export type AggregateDrug_free_schedule = {
    _count: Drug_free_scheduleCountAggregateOutputType | null
    _min: Drug_free_scheduleMinAggregateOutputType | null
    _max: Drug_free_scheduleMaxAggregateOutputType | null
  }

  export type Drug_free_scheduleMinAggregateOutputType = {
    id: string | null
    gpuid: string | null
    generic_name: string | null
    strength: string | null
    dosageform: string | null
    contvalue: string | null
    contunit: string | null
    disp_unit: string | null
    price: string | null
  }

  export type Drug_free_scheduleMaxAggregateOutputType = {
    id: string | null
    gpuid: string | null
    generic_name: string | null
    strength: string | null
    dosageform: string | null
    contvalue: string | null
    contunit: string | null
    disp_unit: string | null
    price: string | null
  }

  export type Drug_free_scheduleCountAggregateOutputType = {
    id: number
    gpuid: number
    generic_name: number
    strength: number
    dosageform: number
    contvalue: number
    contunit: number
    disp_unit: number
    price: number
    _all: number
  }


  export type Drug_free_scheduleMinAggregateInputType = {
    id?: true
    gpuid?: true
    generic_name?: true
    strength?: true
    dosageform?: true
    contvalue?: true
    contunit?: true
    disp_unit?: true
    price?: true
  }

  export type Drug_free_scheduleMaxAggregateInputType = {
    id?: true
    gpuid?: true
    generic_name?: true
    strength?: true
    dosageform?: true
    contvalue?: true
    contunit?: true
    disp_unit?: true
    price?: true
  }

  export type Drug_free_scheduleCountAggregateInputType = {
    id?: true
    gpuid?: true
    generic_name?: true
    strength?: true
    dosageform?: true
    contvalue?: true
    contunit?: true
    disp_unit?: true
    price?: true
    _all?: true
  }

  export type Drug_free_scheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drug_free_schedule to aggregate.
     */
    where?: drug_free_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drug_free_schedules to fetch.
     */
    orderBy?: drug_free_scheduleOrderByWithRelationInput | drug_free_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: drug_free_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drug_free_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drug_free_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned drug_free_schedules
    **/
    _count?: true | Drug_free_scheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Drug_free_scheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Drug_free_scheduleMaxAggregateInputType
  }

  export type GetDrug_free_scheduleAggregateType<T extends Drug_free_scheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateDrug_free_schedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrug_free_schedule[P]>
      : GetScalarType<T[P], AggregateDrug_free_schedule[P]>
  }




  export type drug_free_scheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: drug_free_scheduleWhereInput
    orderBy?: drug_free_scheduleOrderByWithAggregationInput | drug_free_scheduleOrderByWithAggregationInput[]
    by: Drug_free_scheduleScalarFieldEnum[] | Drug_free_scheduleScalarFieldEnum
    having?: drug_free_scheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Drug_free_scheduleCountAggregateInputType | true
    _min?: Drug_free_scheduleMinAggregateInputType
    _max?: Drug_free_scheduleMaxAggregateInputType
  }

  export type Drug_free_scheduleGroupByOutputType = {
    id: string
    gpuid: string
    generic_name: string
    strength: string
    dosageform: string
    contvalue: string
    contunit: string
    disp_unit: string
    price: string
    _count: Drug_free_scheduleCountAggregateOutputType | null
    _min: Drug_free_scheduleMinAggregateOutputType | null
    _max: Drug_free_scheduleMaxAggregateOutputType | null
  }

  type GetDrug_free_scheduleGroupByPayload<T extends drug_free_scheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Drug_free_scheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Drug_free_scheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Drug_free_scheduleGroupByOutputType[P]>
            : GetScalarType<T[P], Drug_free_scheduleGroupByOutputType[P]>
        }
      >
    >


  export type drug_free_scheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gpuid?: boolean
    generic_name?: boolean
    strength?: boolean
    dosageform?: boolean
    contvalue?: boolean
    contunit?: boolean
    disp_unit?: boolean
    price?: boolean
  }, ExtArgs["result"]["drug_free_schedule"]>

  export type drug_free_scheduleSelectScalar = {
    id?: boolean
    gpuid?: boolean
    generic_name?: boolean
    strength?: boolean
    dosageform?: boolean
    contvalue?: boolean
    contunit?: boolean
    disp_unit?: boolean
    price?: boolean
  }


  export type $drug_free_schedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "drug_free_schedule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gpuid: string
      generic_name: string
      strength: string
      dosageform: string
      contvalue: string
      contunit: string
      disp_unit: string
      price: string
    }, ExtArgs["result"]["drug_free_schedule"]>
    composites: {}
  }


  type drug_free_scheduleGetPayload<S extends boolean | null | undefined | drug_free_scheduleDefaultArgs> = $Result.GetResult<Prisma.$drug_free_schedulePayload, S>

  type drug_free_scheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<drug_free_scheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: Drug_free_scheduleCountAggregateInputType | true
    }

  export interface drug_free_scheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['drug_free_schedule'], meta: { name: 'drug_free_schedule' } }
    /**
     * Find zero or one Drug_free_schedule that matches the filter.
     * @param {drug_free_scheduleFindUniqueArgs} args - Arguments to find a Drug_free_schedule
     * @example
     * // Get one Drug_free_schedule
     * const drug_free_schedule = await prisma.drug_free_schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends drug_free_scheduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, drug_free_scheduleFindUniqueArgs<ExtArgs>>
    ): Prisma__drug_free_scheduleClient<$Result.GetResult<Prisma.$drug_free_schedulePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Drug_free_schedule that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {drug_free_scheduleFindUniqueOrThrowArgs} args - Arguments to find a Drug_free_schedule
     * @example
     * // Get one Drug_free_schedule
     * const drug_free_schedule = await prisma.drug_free_schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends drug_free_scheduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, drug_free_scheduleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__drug_free_scheduleClient<$Result.GetResult<Prisma.$drug_free_schedulePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Drug_free_schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drug_free_scheduleFindFirstArgs} args - Arguments to find a Drug_free_schedule
     * @example
     * // Get one Drug_free_schedule
     * const drug_free_schedule = await prisma.drug_free_schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends drug_free_scheduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, drug_free_scheduleFindFirstArgs<ExtArgs>>
    ): Prisma__drug_free_scheduleClient<$Result.GetResult<Prisma.$drug_free_schedulePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Drug_free_schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drug_free_scheduleFindFirstOrThrowArgs} args - Arguments to find a Drug_free_schedule
     * @example
     * // Get one Drug_free_schedule
     * const drug_free_schedule = await prisma.drug_free_schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends drug_free_scheduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, drug_free_scheduleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__drug_free_scheduleClient<$Result.GetResult<Prisma.$drug_free_schedulePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Drug_free_schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drug_free_scheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drug_free_schedules
     * const drug_free_schedules = await prisma.drug_free_schedule.findMany()
     * 
     * // Get first 10 Drug_free_schedules
     * const drug_free_schedules = await prisma.drug_free_schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drug_free_scheduleWithIdOnly = await prisma.drug_free_schedule.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends drug_free_scheduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, drug_free_scheduleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$drug_free_schedulePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Drug_free_schedule.
     * @param {drug_free_scheduleCreateArgs} args - Arguments to create a Drug_free_schedule.
     * @example
     * // Create one Drug_free_schedule
     * const Drug_free_schedule = await prisma.drug_free_schedule.create({
     *   data: {
     *     // ... data to create a Drug_free_schedule
     *   }
     * })
     * 
    **/
    create<T extends drug_free_scheduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, drug_free_scheduleCreateArgs<ExtArgs>>
    ): Prisma__drug_free_scheduleClient<$Result.GetResult<Prisma.$drug_free_schedulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Drug_free_schedules.
     *     @param {drug_free_scheduleCreateManyArgs} args - Arguments to create many Drug_free_schedules.
     *     @example
     *     // Create many Drug_free_schedules
     *     const drug_free_schedule = await prisma.drug_free_schedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends drug_free_scheduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, drug_free_scheduleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Drug_free_schedule.
     * @param {drug_free_scheduleDeleteArgs} args - Arguments to delete one Drug_free_schedule.
     * @example
     * // Delete one Drug_free_schedule
     * const Drug_free_schedule = await prisma.drug_free_schedule.delete({
     *   where: {
     *     // ... filter to delete one Drug_free_schedule
     *   }
     * })
     * 
    **/
    delete<T extends drug_free_scheduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, drug_free_scheduleDeleteArgs<ExtArgs>>
    ): Prisma__drug_free_scheduleClient<$Result.GetResult<Prisma.$drug_free_schedulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Drug_free_schedule.
     * @param {drug_free_scheduleUpdateArgs} args - Arguments to update one Drug_free_schedule.
     * @example
     * // Update one Drug_free_schedule
     * const drug_free_schedule = await prisma.drug_free_schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends drug_free_scheduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, drug_free_scheduleUpdateArgs<ExtArgs>>
    ): Prisma__drug_free_scheduleClient<$Result.GetResult<Prisma.$drug_free_schedulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Drug_free_schedules.
     * @param {drug_free_scheduleDeleteManyArgs} args - Arguments to filter Drug_free_schedules to delete.
     * @example
     * // Delete a few Drug_free_schedules
     * const { count } = await prisma.drug_free_schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends drug_free_scheduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, drug_free_scheduleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drug_free_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drug_free_scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drug_free_schedules
     * const drug_free_schedule = await prisma.drug_free_schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends drug_free_scheduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, drug_free_scheduleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Drug_free_schedule.
     * @param {drug_free_scheduleUpsertArgs} args - Arguments to update or create a Drug_free_schedule.
     * @example
     * // Update or create a Drug_free_schedule
     * const drug_free_schedule = await prisma.drug_free_schedule.upsert({
     *   create: {
     *     // ... data to create a Drug_free_schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drug_free_schedule we want to update
     *   }
     * })
    **/
    upsert<T extends drug_free_scheduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, drug_free_scheduleUpsertArgs<ExtArgs>>
    ): Prisma__drug_free_scheduleClient<$Result.GetResult<Prisma.$drug_free_schedulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Drug_free_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drug_free_scheduleCountArgs} args - Arguments to filter Drug_free_schedules to count.
     * @example
     * // Count the number of Drug_free_schedules
     * const count = await prisma.drug_free_schedule.count({
     *   where: {
     *     // ... the filter for the Drug_free_schedules we want to count
     *   }
     * })
    **/
    count<T extends drug_free_scheduleCountArgs>(
      args?: Subset<T, drug_free_scheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Drug_free_scheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drug_free_schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drug_free_scheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Drug_free_scheduleAggregateArgs>(args: Subset<T, Drug_free_scheduleAggregateArgs>): Prisma.PrismaPromise<GetDrug_free_scheduleAggregateType<T>>

    /**
     * Group by Drug_free_schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drug_free_scheduleGroupByArgs} args - Group by arguments.
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
      T extends drug_free_scheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: drug_free_scheduleGroupByArgs['orderBy'] }
        : { orderBy?: drug_free_scheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, drug_free_scheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrug_free_scheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the drug_free_schedule model
   */
  readonly fields: drug_free_scheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for drug_free_schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__drug_free_scheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the drug_free_schedule model
   */ 
  interface drug_free_scheduleFieldRefs {
    readonly id: FieldRef<"drug_free_schedule", 'String'>
    readonly gpuid: FieldRef<"drug_free_schedule", 'String'>
    readonly generic_name: FieldRef<"drug_free_schedule", 'String'>
    readonly strength: FieldRef<"drug_free_schedule", 'String'>
    readonly dosageform: FieldRef<"drug_free_schedule", 'String'>
    readonly contvalue: FieldRef<"drug_free_schedule", 'String'>
    readonly contunit: FieldRef<"drug_free_schedule", 'String'>
    readonly disp_unit: FieldRef<"drug_free_schedule", 'String'>
    readonly price: FieldRef<"drug_free_schedule", 'String'>
  }
    

  // Custom InputTypes

  /**
   * drug_free_schedule findUnique
   */
  export type drug_free_scheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drug_free_schedule
     */
    select?: drug_free_scheduleSelect<ExtArgs> | null
    /**
     * Filter, which drug_free_schedule to fetch.
     */
    where: drug_free_scheduleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * drug_free_schedule findUniqueOrThrow
   */
  export type drug_free_scheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drug_free_schedule
     */
    select?: drug_free_scheduleSelect<ExtArgs> | null
    /**
     * Filter, which drug_free_schedule to fetch.
     */
    where: drug_free_scheduleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * drug_free_schedule findFirst
   */
  export type drug_free_scheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drug_free_schedule
     */
    select?: drug_free_scheduleSelect<ExtArgs> | null
    /**
     * Filter, which drug_free_schedule to fetch.
     */
    where?: drug_free_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drug_free_schedules to fetch.
     */
    orderBy?: drug_free_scheduleOrderByWithRelationInput | drug_free_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drug_free_schedules.
     */
    cursor?: drug_free_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drug_free_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drug_free_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drug_free_schedules.
     */
    distinct?: Drug_free_scheduleScalarFieldEnum | Drug_free_scheduleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * drug_free_schedule findFirstOrThrow
   */
  export type drug_free_scheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drug_free_schedule
     */
    select?: drug_free_scheduleSelect<ExtArgs> | null
    /**
     * Filter, which drug_free_schedule to fetch.
     */
    where?: drug_free_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drug_free_schedules to fetch.
     */
    orderBy?: drug_free_scheduleOrderByWithRelationInput | drug_free_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drug_free_schedules.
     */
    cursor?: drug_free_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drug_free_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drug_free_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drug_free_schedules.
     */
    distinct?: Drug_free_scheduleScalarFieldEnum | Drug_free_scheduleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * drug_free_schedule findMany
   */
  export type drug_free_scheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drug_free_schedule
     */
    select?: drug_free_scheduleSelect<ExtArgs> | null
    /**
     * Filter, which drug_free_schedules to fetch.
     */
    where?: drug_free_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drug_free_schedules to fetch.
     */
    orderBy?: drug_free_scheduleOrderByWithRelationInput | drug_free_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing drug_free_schedules.
     */
    cursor?: drug_free_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drug_free_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drug_free_schedules.
     */
    skip?: number
    distinct?: Drug_free_scheduleScalarFieldEnum | Drug_free_scheduleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * drug_free_schedule create
   */
  export type drug_free_scheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drug_free_schedule
     */
    select?: drug_free_scheduleSelect<ExtArgs> | null
    /**
     * The data needed to create a drug_free_schedule.
     */
    data: XOR<drug_free_scheduleCreateInput, drug_free_scheduleUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * drug_free_schedule createMany
   */
  export type drug_free_scheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many drug_free_schedules.
     */
    data: drug_free_scheduleCreateManyInput | drug_free_scheduleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * drug_free_schedule update
   */
  export type drug_free_scheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drug_free_schedule
     */
    select?: drug_free_scheduleSelect<ExtArgs> | null
    /**
     * The data needed to update a drug_free_schedule.
     */
    data: XOR<drug_free_scheduleUpdateInput, drug_free_scheduleUncheckedUpdateInput>
    /**
     * Choose, which drug_free_schedule to update.
     */
    where: drug_free_scheduleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * drug_free_schedule updateMany
   */
  export type drug_free_scheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update drug_free_schedules.
     */
    data: XOR<drug_free_scheduleUpdateManyMutationInput, drug_free_scheduleUncheckedUpdateManyInput>
    /**
     * Filter which drug_free_schedules to update
     */
    where?: drug_free_scheduleWhereInput
  }


  /**
   * drug_free_schedule upsert
   */
  export type drug_free_scheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drug_free_schedule
     */
    select?: drug_free_scheduleSelect<ExtArgs> | null
    /**
     * The filter to search for the drug_free_schedule to update in case it exists.
     */
    where: drug_free_scheduleWhereUniqueInput
    /**
     * In case the drug_free_schedule found by the `where` argument doesn't exist, create a new drug_free_schedule with this data.
     */
    create: XOR<drug_free_scheduleCreateInput, drug_free_scheduleUncheckedCreateInput>
    /**
     * In case the drug_free_schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<drug_free_scheduleUpdateInput, drug_free_scheduleUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * drug_free_schedule delete
   */
  export type drug_free_scheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drug_free_schedule
     */
    select?: drug_free_scheduleSelect<ExtArgs> | null
    /**
     * Filter which drug_free_schedule to delete.
     */
    where: drug_free_scheduleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * drug_free_schedule deleteMany
   */
  export type drug_free_scheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drug_free_schedules to delete
     */
    where?: drug_free_scheduleWhereInput
  }


  /**
   * drug_free_schedule without action
   */
  export type drug_free_scheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drug_free_schedule
     */
    select?: drug_free_scheduleSelect<ExtArgs> | null
  }



  /**
   * Model adp_free_schedule
   */

  export type AggregateAdp_free_schedule = {
    _count: Adp_free_scheduleCountAggregateOutputType | null
    _min: Adp_free_scheduleMinAggregateOutputType | null
    _max: Adp_free_scheduleMaxAggregateOutputType | null
  }

  export type Adp_free_scheduleMinAggregateOutputType = {
    id: string | null
    item_code: string | null
    item_name: string | null
    unit: string | null
    type: string | null
    price: string | null
  }

  export type Adp_free_scheduleMaxAggregateOutputType = {
    id: string | null
    item_code: string | null
    item_name: string | null
    unit: string | null
    type: string | null
    price: string | null
  }

  export type Adp_free_scheduleCountAggregateOutputType = {
    id: number
    item_code: number
    item_name: number
    unit: number
    type: number
    price: number
    _all: number
  }


  export type Adp_free_scheduleMinAggregateInputType = {
    id?: true
    item_code?: true
    item_name?: true
    unit?: true
    type?: true
    price?: true
  }

  export type Adp_free_scheduleMaxAggregateInputType = {
    id?: true
    item_code?: true
    item_name?: true
    unit?: true
    type?: true
    price?: true
  }

  export type Adp_free_scheduleCountAggregateInputType = {
    id?: true
    item_code?: true
    item_name?: true
    unit?: true
    type?: true
    price?: true
    _all?: true
  }

  export type Adp_free_scheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adp_free_schedule to aggregate.
     */
    where?: adp_free_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adp_free_schedules to fetch.
     */
    orderBy?: adp_free_scheduleOrderByWithRelationInput | adp_free_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adp_free_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adp_free_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adp_free_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned adp_free_schedules
    **/
    _count?: true | Adp_free_scheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Adp_free_scheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Adp_free_scheduleMaxAggregateInputType
  }

  export type GetAdp_free_scheduleAggregateType<T extends Adp_free_scheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateAdp_free_schedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdp_free_schedule[P]>
      : GetScalarType<T[P], AggregateAdp_free_schedule[P]>
  }




  export type adp_free_scheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adp_free_scheduleWhereInput
    orderBy?: adp_free_scheduleOrderByWithAggregationInput | adp_free_scheduleOrderByWithAggregationInput[]
    by: Adp_free_scheduleScalarFieldEnum[] | Adp_free_scheduleScalarFieldEnum
    having?: adp_free_scheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Adp_free_scheduleCountAggregateInputType | true
    _min?: Adp_free_scheduleMinAggregateInputType
    _max?: Adp_free_scheduleMaxAggregateInputType
  }

  export type Adp_free_scheduleGroupByOutputType = {
    id: string
    item_code: string
    item_name: string
    unit: string
    type: string
    price: string
    _count: Adp_free_scheduleCountAggregateOutputType | null
    _min: Adp_free_scheduleMinAggregateOutputType | null
    _max: Adp_free_scheduleMaxAggregateOutputType | null
  }

  type GetAdp_free_scheduleGroupByPayload<T extends adp_free_scheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Adp_free_scheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Adp_free_scheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Adp_free_scheduleGroupByOutputType[P]>
            : GetScalarType<T[P], Adp_free_scheduleGroupByOutputType[P]>
        }
      >
    >


  export type adp_free_scheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item_code?: boolean
    item_name?: boolean
    unit?: boolean
    type?: boolean
    price?: boolean
  }, ExtArgs["result"]["adp_free_schedule"]>

  export type adp_free_scheduleSelectScalar = {
    id?: boolean
    item_code?: boolean
    item_name?: boolean
    unit?: boolean
    type?: boolean
    price?: boolean
  }


  export type $adp_free_schedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "adp_free_schedule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      item_code: string
      item_name: string
      unit: string
      type: string
      price: string
    }, ExtArgs["result"]["adp_free_schedule"]>
    composites: {}
  }


  type adp_free_scheduleGetPayload<S extends boolean | null | undefined | adp_free_scheduleDefaultArgs> = $Result.GetResult<Prisma.$adp_free_schedulePayload, S>

  type adp_free_scheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<adp_free_scheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: Adp_free_scheduleCountAggregateInputType | true
    }

  export interface adp_free_scheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['adp_free_schedule'], meta: { name: 'adp_free_schedule' } }
    /**
     * Find zero or one Adp_free_schedule that matches the filter.
     * @param {adp_free_scheduleFindUniqueArgs} args - Arguments to find a Adp_free_schedule
     * @example
     * // Get one Adp_free_schedule
     * const adp_free_schedule = await prisma.adp_free_schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends adp_free_scheduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, adp_free_scheduleFindUniqueArgs<ExtArgs>>
    ): Prisma__adp_free_scheduleClient<$Result.GetResult<Prisma.$adp_free_schedulePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Adp_free_schedule that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {adp_free_scheduleFindUniqueOrThrowArgs} args - Arguments to find a Adp_free_schedule
     * @example
     * // Get one Adp_free_schedule
     * const adp_free_schedule = await prisma.adp_free_schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends adp_free_scheduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adp_free_scheduleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__adp_free_scheduleClient<$Result.GetResult<Prisma.$adp_free_schedulePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Adp_free_schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adp_free_scheduleFindFirstArgs} args - Arguments to find a Adp_free_schedule
     * @example
     * // Get one Adp_free_schedule
     * const adp_free_schedule = await prisma.adp_free_schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends adp_free_scheduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, adp_free_scheduleFindFirstArgs<ExtArgs>>
    ): Prisma__adp_free_scheduleClient<$Result.GetResult<Prisma.$adp_free_schedulePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Adp_free_schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adp_free_scheduleFindFirstOrThrowArgs} args - Arguments to find a Adp_free_schedule
     * @example
     * // Get one Adp_free_schedule
     * const adp_free_schedule = await prisma.adp_free_schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends adp_free_scheduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adp_free_scheduleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__adp_free_scheduleClient<$Result.GetResult<Prisma.$adp_free_schedulePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Adp_free_schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adp_free_scheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adp_free_schedules
     * const adp_free_schedules = await prisma.adp_free_schedule.findMany()
     * 
     * // Get first 10 Adp_free_schedules
     * const adp_free_schedules = await prisma.adp_free_schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adp_free_scheduleWithIdOnly = await prisma.adp_free_schedule.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends adp_free_scheduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adp_free_scheduleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adp_free_schedulePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Adp_free_schedule.
     * @param {adp_free_scheduleCreateArgs} args - Arguments to create a Adp_free_schedule.
     * @example
     * // Create one Adp_free_schedule
     * const Adp_free_schedule = await prisma.adp_free_schedule.create({
     *   data: {
     *     // ... data to create a Adp_free_schedule
     *   }
     * })
     * 
    **/
    create<T extends adp_free_scheduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, adp_free_scheduleCreateArgs<ExtArgs>>
    ): Prisma__adp_free_scheduleClient<$Result.GetResult<Prisma.$adp_free_schedulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Adp_free_schedules.
     *     @param {adp_free_scheduleCreateManyArgs} args - Arguments to create many Adp_free_schedules.
     *     @example
     *     // Create many Adp_free_schedules
     *     const adp_free_schedule = await prisma.adp_free_schedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends adp_free_scheduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adp_free_scheduleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Adp_free_schedule.
     * @param {adp_free_scheduleDeleteArgs} args - Arguments to delete one Adp_free_schedule.
     * @example
     * // Delete one Adp_free_schedule
     * const Adp_free_schedule = await prisma.adp_free_schedule.delete({
     *   where: {
     *     // ... filter to delete one Adp_free_schedule
     *   }
     * })
     * 
    **/
    delete<T extends adp_free_scheduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, adp_free_scheduleDeleteArgs<ExtArgs>>
    ): Prisma__adp_free_scheduleClient<$Result.GetResult<Prisma.$adp_free_schedulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Adp_free_schedule.
     * @param {adp_free_scheduleUpdateArgs} args - Arguments to update one Adp_free_schedule.
     * @example
     * // Update one Adp_free_schedule
     * const adp_free_schedule = await prisma.adp_free_schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends adp_free_scheduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, adp_free_scheduleUpdateArgs<ExtArgs>>
    ): Prisma__adp_free_scheduleClient<$Result.GetResult<Prisma.$adp_free_schedulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Adp_free_schedules.
     * @param {adp_free_scheduleDeleteManyArgs} args - Arguments to filter Adp_free_schedules to delete.
     * @example
     * // Delete a few Adp_free_schedules
     * const { count } = await prisma.adp_free_schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends adp_free_scheduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adp_free_scheduleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adp_free_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adp_free_scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adp_free_schedules
     * const adp_free_schedule = await prisma.adp_free_schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends adp_free_scheduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, adp_free_scheduleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Adp_free_schedule.
     * @param {adp_free_scheduleUpsertArgs} args - Arguments to update or create a Adp_free_schedule.
     * @example
     * // Update or create a Adp_free_schedule
     * const adp_free_schedule = await prisma.adp_free_schedule.upsert({
     *   create: {
     *     // ... data to create a Adp_free_schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adp_free_schedule we want to update
     *   }
     * })
    **/
    upsert<T extends adp_free_scheduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, adp_free_scheduleUpsertArgs<ExtArgs>>
    ): Prisma__adp_free_scheduleClient<$Result.GetResult<Prisma.$adp_free_schedulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Adp_free_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adp_free_scheduleCountArgs} args - Arguments to filter Adp_free_schedules to count.
     * @example
     * // Count the number of Adp_free_schedules
     * const count = await prisma.adp_free_schedule.count({
     *   where: {
     *     // ... the filter for the Adp_free_schedules we want to count
     *   }
     * })
    **/
    count<T extends adp_free_scheduleCountArgs>(
      args?: Subset<T, adp_free_scheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Adp_free_scheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adp_free_schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Adp_free_scheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Adp_free_scheduleAggregateArgs>(args: Subset<T, Adp_free_scheduleAggregateArgs>): Prisma.PrismaPromise<GetAdp_free_scheduleAggregateType<T>>

    /**
     * Group by Adp_free_schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adp_free_scheduleGroupByArgs} args - Group by arguments.
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
      T extends adp_free_scheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adp_free_scheduleGroupByArgs['orderBy'] }
        : { orderBy?: adp_free_scheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adp_free_scheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdp_free_scheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the adp_free_schedule model
   */
  readonly fields: adp_free_scheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for adp_free_schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adp_free_scheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the adp_free_schedule model
   */ 
  interface adp_free_scheduleFieldRefs {
    readonly id: FieldRef<"adp_free_schedule", 'String'>
    readonly item_code: FieldRef<"adp_free_schedule", 'String'>
    readonly item_name: FieldRef<"adp_free_schedule", 'String'>
    readonly unit: FieldRef<"adp_free_schedule", 'String'>
    readonly type: FieldRef<"adp_free_schedule", 'String'>
    readonly price: FieldRef<"adp_free_schedule", 'String'>
  }
    

  // Custom InputTypes

  /**
   * adp_free_schedule findUnique
   */
  export type adp_free_scheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adp_free_schedule
     */
    select?: adp_free_scheduleSelect<ExtArgs> | null
    /**
     * Filter, which adp_free_schedule to fetch.
     */
    where: adp_free_scheduleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * adp_free_schedule findUniqueOrThrow
   */
  export type adp_free_scheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adp_free_schedule
     */
    select?: adp_free_scheduleSelect<ExtArgs> | null
    /**
     * Filter, which adp_free_schedule to fetch.
     */
    where: adp_free_scheduleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * adp_free_schedule findFirst
   */
  export type adp_free_scheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adp_free_schedule
     */
    select?: adp_free_scheduleSelect<ExtArgs> | null
    /**
     * Filter, which adp_free_schedule to fetch.
     */
    where?: adp_free_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adp_free_schedules to fetch.
     */
    orderBy?: adp_free_scheduleOrderByWithRelationInput | adp_free_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adp_free_schedules.
     */
    cursor?: adp_free_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adp_free_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adp_free_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adp_free_schedules.
     */
    distinct?: Adp_free_scheduleScalarFieldEnum | Adp_free_scheduleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * adp_free_schedule findFirstOrThrow
   */
  export type adp_free_scheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adp_free_schedule
     */
    select?: adp_free_scheduleSelect<ExtArgs> | null
    /**
     * Filter, which adp_free_schedule to fetch.
     */
    where?: adp_free_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adp_free_schedules to fetch.
     */
    orderBy?: adp_free_scheduleOrderByWithRelationInput | adp_free_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adp_free_schedules.
     */
    cursor?: adp_free_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adp_free_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adp_free_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adp_free_schedules.
     */
    distinct?: Adp_free_scheduleScalarFieldEnum | Adp_free_scheduleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * adp_free_schedule findMany
   */
  export type adp_free_scheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adp_free_schedule
     */
    select?: adp_free_scheduleSelect<ExtArgs> | null
    /**
     * Filter, which adp_free_schedules to fetch.
     */
    where?: adp_free_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adp_free_schedules to fetch.
     */
    orderBy?: adp_free_scheduleOrderByWithRelationInput | adp_free_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing adp_free_schedules.
     */
    cursor?: adp_free_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adp_free_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adp_free_schedules.
     */
    skip?: number
    distinct?: Adp_free_scheduleScalarFieldEnum | Adp_free_scheduleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * adp_free_schedule create
   */
  export type adp_free_scheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adp_free_schedule
     */
    select?: adp_free_scheduleSelect<ExtArgs> | null
    /**
     * The data needed to create a adp_free_schedule.
     */
    data: XOR<adp_free_scheduleCreateInput, adp_free_scheduleUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * adp_free_schedule createMany
   */
  export type adp_free_scheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many adp_free_schedules.
     */
    data: adp_free_scheduleCreateManyInput | adp_free_scheduleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * adp_free_schedule update
   */
  export type adp_free_scheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adp_free_schedule
     */
    select?: adp_free_scheduleSelect<ExtArgs> | null
    /**
     * The data needed to update a adp_free_schedule.
     */
    data: XOR<adp_free_scheduleUpdateInput, adp_free_scheduleUncheckedUpdateInput>
    /**
     * Choose, which adp_free_schedule to update.
     */
    where: adp_free_scheduleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * adp_free_schedule updateMany
   */
  export type adp_free_scheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update adp_free_schedules.
     */
    data: XOR<adp_free_scheduleUpdateManyMutationInput, adp_free_scheduleUncheckedUpdateManyInput>
    /**
     * Filter which adp_free_schedules to update
     */
    where?: adp_free_scheduleWhereInput
  }


  /**
   * adp_free_schedule upsert
   */
  export type adp_free_scheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adp_free_schedule
     */
    select?: adp_free_scheduleSelect<ExtArgs> | null
    /**
     * The filter to search for the adp_free_schedule to update in case it exists.
     */
    where: adp_free_scheduleWhereUniqueInput
    /**
     * In case the adp_free_schedule found by the `where` argument doesn't exist, create a new adp_free_schedule with this data.
     */
    create: XOR<adp_free_scheduleCreateInput, adp_free_scheduleUncheckedCreateInput>
    /**
     * In case the adp_free_schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adp_free_scheduleUpdateInput, adp_free_scheduleUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * adp_free_schedule delete
   */
  export type adp_free_scheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adp_free_schedule
     */
    select?: adp_free_scheduleSelect<ExtArgs> | null
    /**
     * Filter which adp_free_schedule to delete.
     */
    where: adp_free_scheduleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * adp_free_schedule deleteMany
   */
  export type adp_free_scheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adp_free_schedules to delete
     */
    where?: adp_free_scheduleWhereInput
  }


  /**
   * adp_free_schedule without action
   */
  export type adp_free_scheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adp_free_schedule
     */
    select?: adp_free_scheduleSelect<ExtArgs> | null
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


  export const Item_groupScalarFieldEnum: {
    id: 'id',
    item_group_code: 'item_group_code',
    item_group_name: 'item_group_name',
    item_group_active: 'item_group_active'
  };

  export type Item_groupScalarFieldEnum = (typeof Item_groupScalarFieldEnum)[keyof typeof Item_groupScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const Item_mainScalarFieldEnum: {
    id: 'id'
  };

  export type Item_mainScalarFieldEnum = (typeof Item_mainScalarFieldEnum)[keyof typeof Item_mainScalarFieldEnum]


  export const Lab_mainScalarFieldEnum: {
    id: 'id'
  };

  export type Lab_mainScalarFieldEnum = (typeof Lab_mainScalarFieldEnum)[keyof typeof Lab_mainScalarFieldEnum]


  export const Drug_free_scheduleScalarFieldEnum: {
    id: 'id',
    gpuid: 'gpuid',
    generic_name: 'generic_name',
    strength: 'strength',
    dosageform: 'dosageform',
    contvalue: 'contvalue',
    contunit: 'contunit',
    disp_unit: 'disp_unit',
    price: 'price'
  };

  export type Drug_free_scheduleScalarFieldEnum = (typeof Drug_free_scheduleScalarFieldEnum)[keyof typeof Drug_free_scheduleScalarFieldEnum]


  export const Adp_free_scheduleScalarFieldEnum: {
    id: 'id',
    item_code: 'item_code',
    item_name: 'item_name',
    unit: 'unit',
    type: 'type',
    price: 'price'
  };

  export type Adp_free_scheduleScalarFieldEnum = (typeof Adp_free_scheduleScalarFieldEnum)[keyof typeof Adp_free_scheduleScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type item_groupWhereInput = {
    AND?: item_groupWhereInput | item_groupWhereInput[]
    OR?: item_groupWhereInput[]
    NOT?: item_groupWhereInput | item_groupWhereInput[]
    id?: StringFilter<"item_group"> | string
    item_group_code?: StringFilter<"item_group"> | string
    item_group_name?: StringFilter<"item_group"> | string
    item_group_active?: IntFilter<"item_group"> | number
  }

  export type item_groupOrderByWithRelationInput = {
    id?: SortOrder
    item_group_code?: SortOrder
    item_group_name?: SortOrder
    item_group_active?: SortOrder
  }

  export type item_groupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: item_groupWhereInput | item_groupWhereInput[]
    OR?: item_groupWhereInput[]
    NOT?: item_groupWhereInput | item_groupWhereInput[]
    item_group_code?: StringFilter<"item_group"> | string
    item_group_name?: StringFilter<"item_group"> | string
    item_group_active?: IntFilter<"item_group"> | number
  }, "id">

  export type item_groupOrderByWithAggregationInput = {
    id?: SortOrder
    item_group_code?: SortOrder
    item_group_name?: SortOrder
    item_group_active?: SortOrder
    _count?: item_groupCountOrderByAggregateInput
    _avg?: item_groupAvgOrderByAggregateInput
    _max?: item_groupMaxOrderByAggregateInput
    _min?: item_groupMinOrderByAggregateInput
    _sum?: item_groupSumOrderByAggregateInput
  }

  export type item_groupScalarWhereWithAggregatesInput = {
    AND?: item_groupScalarWhereWithAggregatesInput | item_groupScalarWhereWithAggregatesInput[]
    OR?: item_groupScalarWhereWithAggregatesInput[]
    NOT?: item_groupScalarWhereWithAggregatesInput | item_groupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"item_group"> | string
    item_group_code?: StringWithAggregatesFilter<"item_group"> | string
    item_group_name?: StringWithAggregatesFilter<"item_group"> | string
    item_group_active?: IntWithAggregatesFilter<"item_group"> | number
  }

  export type item_mainWhereInput = {
    AND?: item_mainWhereInput | item_mainWhereInput[]
    OR?: item_mainWhereInput[]
    NOT?: item_mainWhereInput | item_mainWhereInput[]
    id?: StringFilter<"item_main"> | string
  }

  export type item_mainOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type item_mainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: item_mainWhereInput | item_mainWhereInput[]
    OR?: item_mainWhereInput[]
    NOT?: item_mainWhereInput | item_mainWhereInput[]
  }, "id">

  export type item_mainOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: item_mainCountOrderByAggregateInput
    _max?: item_mainMaxOrderByAggregateInput
    _min?: item_mainMinOrderByAggregateInput
  }

  export type item_mainScalarWhereWithAggregatesInput = {
    AND?: item_mainScalarWhereWithAggregatesInput | item_mainScalarWhereWithAggregatesInput[]
    OR?: item_mainScalarWhereWithAggregatesInput[]
    NOT?: item_mainScalarWhereWithAggregatesInput | item_mainScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"item_main"> | string
  }

  export type lab_mainWhereInput = {
    AND?: lab_mainWhereInput | lab_mainWhereInput[]
    OR?: lab_mainWhereInput[]
    NOT?: lab_mainWhereInput | lab_mainWhereInput[]
    id?: StringFilter<"lab_main"> | string
  }

  export type lab_mainOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type lab_mainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: lab_mainWhereInput | lab_mainWhereInput[]
    OR?: lab_mainWhereInput[]
    NOT?: lab_mainWhereInput | lab_mainWhereInput[]
  }, "id">

  export type lab_mainOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: lab_mainCountOrderByAggregateInput
    _max?: lab_mainMaxOrderByAggregateInput
    _min?: lab_mainMinOrderByAggregateInput
  }

  export type lab_mainScalarWhereWithAggregatesInput = {
    AND?: lab_mainScalarWhereWithAggregatesInput | lab_mainScalarWhereWithAggregatesInput[]
    OR?: lab_mainScalarWhereWithAggregatesInput[]
    NOT?: lab_mainScalarWhereWithAggregatesInput | lab_mainScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"lab_main"> | string
  }

  export type drug_free_scheduleWhereInput = {
    AND?: drug_free_scheduleWhereInput | drug_free_scheduleWhereInput[]
    OR?: drug_free_scheduleWhereInput[]
    NOT?: drug_free_scheduleWhereInput | drug_free_scheduleWhereInput[]
    id?: StringFilter<"drug_free_schedule"> | string
    gpuid?: StringFilter<"drug_free_schedule"> | string
    generic_name?: StringFilter<"drug_free_schedule"> | string
    strength?: StringFilter<"drug_free_schedule"> | string
    dosageform?: StringFilter<"drug_free_schedule"> | string
    contvalue?: StringFilter<"drug_free_schedule"> | string
    contunit?: StringFilter<"drug_free_schedule"> | string
    disp_unit?: StringFilter<"drug_free_schedule"> | string
    price?: StringFilter<"drug_free_schedule"> | string
  }

  export type drug_free_scheduleOrderByWithRelationInput = {
    id?: SortOrder
    gpuid?: SortOrder
    generic_name?: SortOrder
    strength?: SortOrder
    dosageform?: SortOrder
    contvalue?: SortOrder
    contunit?: SortOrder
    disp_unit?: SortOrder
    price?: SortOrder
  }

  export type drug_free_scheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: drug_free_scheduleWhereInput | drug_free_scheduleWhereInput[]
    OR?: drug_free_scheduleWhereInput[]
    NOT?: drug_free_scheduleWhereInput | drug_free_scheduleWhereInput[]
    gpuid?: StringFilter<"drug_free_schedule"> | string
    generic_name?: StringFilter<"drug_free_schedule"> | string
    strength?: StringFilter<"drug_free_schedule"> | string
    dosageform?: StringFilter<"drug_free_schedule"> | string
    contvalue?: StringFilter<"drug_free_schedule"> | string
    contunit?: StringFilter<"drug_free_schedule"> | string
    disp_unit?: StringFilter<"drug_free_schedule"> | string
    price?: StringFilter<"drug_free_schedule"> | string
  }, "id">

  export type drug_free_scheduleOrderByWithAggregationInput = {
    id?: SortOrder
    gpuid?: SortOrder
    generic_name?: SortOrder
    strength?: SortOrder
    dosageform?: SortOrder
    contvalue?: SortOrder
    contunit?: SortOrder
    disp_unit?: SortOrder
    price?: SortOrder
    _count?: drug_free_scheduleCountOrderByAggregateInput
    _max?: drug_free_scheduleMaxOrderByAggregateInput
    _min?: drug_free_scheduleMinOrderByAggregateInput
  }

  export type drug_free_scheduleScalarWhereWithAggregatesInput = {
    AND?: drug_free_scheduleScalarWhereWithAggregatesInput | drug_free_scheduleScalarWhereWithAggregatesInput[]
    OR?: drug_free_scheduleScalarWhereWithAggregatesInput[]
    NOT?: drug_free_scheduleScalarWhereWithAggregatesInput | drug_free_scheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"drug_free_schedule"> | string
    gpuid?: StringWithAggregatesFilter<"drug_free_schedule"> | string
    generic_name?: StringWithAggregatesFilter<"drug_free_schedule"> | string
    strength?: StringWithAggregatesFilter<"drug_free_schedule"> | string
    dosageform?: StringWithAggregatesFilter<"drug_free_schedule"> | string
    contvalue?: StringWithAggregatesFilter<"drug_free_schedule"> | string
    contunit?: StringWithAggregatesFilter<"drug_free_schedule"> | string
    disp_unit?: StringWithAggregatesFilter<"drug_free_schedule"> | string
    price?: StringWithAggregatesFilter<"drug_free_schedule"> | string
  }

  export type adp_free_scheduleWhereInput = {
    AND?: adp_free_scheduleWhereInput | adp_free_scheduleWhereInput[]
    OR?: adp_free_scheduleWhereInput[]
    NOT?: adp_free_scheduleWhereInput | adp_free_scheduleWhereInput[]
    id?: StringFilter<"adp_free_schedule"> | string
    item_code?: StringFilter<"adp_free_schedule"> | string
    item_name?: StringFilter<"adp_free_schedule"> | string
    unit?: StringFilter<"adp_free_schedule"> | string
    type?: StringFilter<"adp_free_schedule"> | string
    price?: StringFilter<"adp_free_schedule"> | string
  }

  export type adp_free_scheduleOrderByWithRelationInput = {
    id?: SortOrder
    item_code?: SortOrder
    item_name?: SortOrder
    unit?: SortOrder
    type?: SortOrder
    price?: SortOrder
  }

  export type adp_free_scheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: adp_free_scheduleWhereInput | adp_free_scheduleWhereInput[]
    OR?: adp_free_scheduleWhereInput[]
    NOT?: adp_free_scheduleWhereInput | adp_free_scheduleWhereInput[]
    item_code?: StringFilter<"adp_free_schedule"> | string
    item_name?: StringFilter<"adp_free_schedule"> | string
    unit?: StringFilter<"adp_free_schedule"> | string
    type?: StringFilter<"adp_free_schedule"> | string
    price?: StringFilter<"adp_free_schedule"> | string
  }, "id">

  export type adp_free_scheduleOrderByWithAggregationInput = {
    id?: SortOrder
    item_code?: SortOrder
    item_name?: SortOrder
    unit?: SortOrder
    type?: SortOrder
    price?: SortOrder
    _count?: adp_free_scheduleCountOrderByAggregateInput
    _max?: adp_free_scheduleMaxOrderByAggregateInput
    _min?: adp_free_scheduleMinOrderByAggregateInput
  }

  export type adp_free_scheduleScalarWhereWithAggregatesInput = {
    AND?: adp_free_scheduleScalarWhereWithAggregatesInput | adp_free_scheduleScalarWhereWithAggregatesInput[]
    OR?: adp_free_scheduleScalarWhereWithAggregatesInput[]
    NOT?: adp_free_scheduleScalarWhereWithAggregatesInput | adp_free_scheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"adp_free_schedule"> | string
    item_code?: StringWithAggregatesFilter<"adp_free_schedule"> | string
    item_name?: StringWithAggregatesFilter<"adp_free_schedule"> | string
    unit?: StringWithAggregatesFilter<"adp_free_schedule"> | string
    type?: StringWithAggregatesFilter<"adp_free_schedule"> | string
    price?: StringWithAggregatesFilter<"adp_free_schedule"> | string
  }

  export type item_groupCreateInput = {
    id?: string
    item_group_code: string
    item_group_name: string
    item_group_active?: number
  }

  export type item_groupUncheckedCreateInput = {
    id?: string
    item_group_code: string
    item_group_name: string
    item_group_active?: number
  }

  export type item_groupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_group_code?: StringFieldUpdateOperationsInput | string
    item_group_name?: StringFieldUpdateOperationsInput | string
    item_group_active?: IntFieldUpdateOperationsInput | number
  }

  export type item_groupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_group_code?: StringFieldUpdateOperationsInput | string
    item_group_name?: StringFieldUpdateOperationsInput | string
    item_group_active?: IntFieldUpdateOperationsInput | number
  }

  export type item_groupCreateManyInput = {
    id?: string
    item_group_code: string
    item_group_name: string
    item_group_active?: number
  }

  export type item_groupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_group_code?: StringFieldUpdateOperationsInput | string
    item_group_name?: StringFieldUpdateOperationsInput | string
    item_group_active?: IntFieldUpdateOperationsInput | number
  }

  export type item_groupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_group_code?: StringFieldUpdateOperationsInput | string
    item_group_name?: StringFieldUpdateOperationsInput | string
    item_group_active?: IntFieldUpdateOperationsInput | number
  }

  export type item_mainCreateInput = {
    id?: string
  }

  export type item_mainUncheckedCreateInput = {
    id?: string
  }

  export type item_mainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type item_mainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type item_mainCreateManyInput = {
    id?: string
  }

  export type item_mainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type item_mainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type lab_mainCreateInput = {
    id?: string
  }

  export type lab_mainUncheckedCreateInput = {
    id?: string
  }

  export type lab_mainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type lab_mainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type lab_mainCreateManyInput = {
    id?: string
  }

  export type lab_mainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type lab_mainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type drug_free_scheduleCreateInput = {
    id: string
    gpuid: string
    generic_name: string
    strength: string
    dosageform: string
    contvalue: string
    contunit: string
    disp_unit: string
    price: string
  }

  export type drug_free_scheduleUncheckedCreateInput = {
    id: string
    gpuid: string
    generic_name: string
    strength: string
    dosageform: string
    contvalue: string
    contunit: string
    disp_unit: string
    price: string
  }

  export type drug_free_scheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gpuid?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    strength?: StringFieldUpdateOperationsInput | string
    dosageform?: StringFieldUpdateOperationsInput | string
    contvalue?: StringFieldUpdateOperationsInput | string
    contunit?: StringFieldUpdateOperationsInput | string
    disp_unit?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type drug_free_scheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gpuid?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    strength?: StringFieldUpdateOperationsInput | string
    dosageform?: StringFieldUpdateOperationsInput | string
    contvalue?: StringFieldUpdateOperationsInput | string
    contunit?: StringFieldUpdateOperationsInput | string
    disp_unit?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type drug_free_scheduleCreateManyInput = {
    id: string
    gpuid: string
    generic_name: string
    strength: string
    dosageform: string
    contvalue: string
    contunit: string
    disp_unit: string
    price: string
  }

  export type drug_free_scheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gpuid?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    strength?: StringFieldUpdateOperationsInput | string
    dosageform?: StringFieldUpdateOperationsInput | string
    contvalue?: StringFieldUpdateOperationsInput | string
    contunit?: StringFieldUpdateOperationsInput | string
    disp_unit?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type drug_free_scheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gpuid?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    strength?: StringFieldUpdateOperationsInput | string
    dosageform?: StringFieldUpdateOperationsInput | string
    contvalue?: StringFieldUpdateOperationsInput | string
    contunit?: StringFieldUpdateOperationsInput | string
    disp_unit?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type adp_free_scheduleCreateInput = {
    id: string
    item_code: string
    item_name: string
    unit: string
    type: string
    price: string
  }

  export type adp_free_scheduleUncheckedCreateInput = {
    id: string
    item_code: string
    item_name: string
    unit: string
    type: string
    price: string
  }

  export type adp_free_scheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_code?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type adp_free_scheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_code?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type adp_free_scheduleCreateManyInput = {
    id: string
    item_code: string
    item_name: string
    unit: string
    type: string
    price: string
  }

  export type adp_free_scheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_code?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type adp_free_scheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_code?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type item_groupCountOrderByAggregateInput = {
    id?: SortOrder
    item_group_code?: SortOrder
    item_group_name?: SortOrder
    item_group_active?: SortOrder
  }

  export type item_groupAvgOrderByAggregateInput = {
    item_group_active?: SortOrder
  }

  export type item_groupMaxOrderByAggregateInput = {
    id?: SortOrder
    item_group_code?: SortOrder
    item_group_name?: SortOrder
    item_group_active?: SortOrder
  }

  export type item_groupMinOrderByAggregateInput = {
    id?: SortOrder
    item_group_code?: SortOrder
    item_group_name?: SortOrder
    item_group_active?: SortOrder
  }

  export type item_groupSumOrderByAggregateInput = {
    item_group_active?: SortOrder
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type item_mainCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type item_mainMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type item_mainMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type lab_mainCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type lab_mainMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type lab_mainMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type drug_free_scheduleCountOrderByAggregateInput = {
    id?: SortOrder
    gpuid?: SortOrder
    generic_name?: SortOrder
    strength?: SortOrder
    dosageform?: SortOrder
    contvalue?: SortOrder
    contunit?: SortOrder
    disp_unit?: SortOrder
    price?: SortOrder
  }

  export type drug_free_scheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    gpuid?: SortOrder
    generic_name?: SortOrder
    strength?: SortOrder
    dosageform?: SortOrder
    contvalue?: SortOrder
    contunit?: SortOrder
    disp_unit?: SortOrder
    price?: SortOrder
  }

  export type drug_free_scheduleMinOrderByAggregateInput = {
    id?: SortOrder
    gpuid?: SortOrder
    generic_name?: SortOrder
    strength?: SortOrder
    dosageform?: SortOrder
    contvalue?: SortOrder
    contunit?: SortOrder
    disp_unit?: SortOrder
    price?: SortOrder
  }

  export type adp_free_scheduleCountOrderByAggregateInput = {
    id?: SortOrder
    item_code?: SortOrder
    item_name?: SortOrder
    unit?: SortOrder
    type?: SortOrder
    price?: SortOrder
  }

  export type adp_free_scheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    item_code?: SortOrder
    item_name?: SortOrder
    unit?: SortOrder
    type?: SortOrder
    price?: SortOrder
  }

  export type adp_free_scheduleMinOrderByAggregateInput = {
    id?: SortOrder
    item_code?: SortOrder
    item_name?: SortOrder
    unit?: SortOrder
    type?: SortOrder
    price?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use item_groupDefaultArgs instead
     */
    export type item_groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = item_groupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use item_mainDefaultArgs instead
     */
    export type item_mainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = item_mainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use lab_mainDefaultArgs instead
     */
    export type lab_mainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = lab_mainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use drug_free_scheduleDefaultArgs instead
     */
    export type drug_free_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = drug_free_scheduleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use adp_free_scheduleDefaultArgs instead
     */
    export type adp_free_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = adp_free_scheduleDefaultArgs<ExtArgs>

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