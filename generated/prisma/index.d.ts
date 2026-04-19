
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model SmmOrder
 * 
 */
export type SmmOrder = $Result.DefaultSelection<Prisma.$SmmOrderPayload>
/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>
/**
 * Model SpecialOffer
 * 
 */
export type SpecialOffer = $Result.DefaultSelection<Prisma.$SpecialOfferPayload>
/**
 * Model Spend
 * 
 */
export type Spend = $Result.DefaultSelection<Prisma.$SpendPayload>
/**
 * Model AdminAccount
 * 
 */
export type AdminAccount = $Result.DefaultSelection<Prisma.$AdminAccountPayload>
/**
 * Model SmmConfig
 * 
 */
export type SmmConfig = $Result.DefaultSelection<Prisma.$SmmConfigPayload>
/**
 * Model ApprovedGroup
 * 
 */
export type ApprovedGroup = $Result.DefaultSelection<Prisma.$ApprovedGroupPayload>
/**
 * Model FailedOrderMessage
 * 
 */
export type FailedOrderMessage = $Result.DefaultSelection<Prisma.$FailedOrderMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  PARTIAL: 'PARTIAL',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  EXPIRED: 'EXPIRED',
  MANUAL_REVIEW: 'MANUAL_REVIEW'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const SmmProvider: {
  SUPPORTIVE: 'SUPPORTIVE',
  IND: 'IND'
};

export type SmmProvider = (typeof SmmProvider)[keyof typeof SmmProvider]


export const AdminRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type AdminRole = (typeof AdminRole)[keyof typeof AdminRole]

}

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type SmmProvider = $Enums.SmmProvider

export const SmmProvider: typeof $Enums.SmmProvider

export type AdminRole = $Enums.AdminRole

export const AdminRole: typeof $Enums.AdminRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.smmOrder`: Exposes CRUD operations for the **SmmOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SmmOrders
    * const smmOrders = await prisma.smmOrder.findMany()
    * ```
    */
  get smmOrder(): Prisma.SmmOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialOffer`: Exposes CRUD operations for the **SpecialOffer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpecialOffers
    * const specialOffers = await prisma.specialOffer.findMany()
    * ```
    */
  get specialOffer(): Prisma.SpecialOfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spend`: Exposes CRUD operations for the **Spend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spends
    * const spends = await prisma.spend.findMany()
    * ```
    */
  get spend(): Prisma.SpendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminAccount`: Exposes CRUD operations for the **AdminAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminAccounts
    * const adminAccounts = await prisma.adminAccount.findMany()
    * ```
    */
  get adminAccount(): Prisma.AdminAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.smmConfig`: Exposes CRUD operations for the **SmmConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SmmConfigs
    * const smmConfigs = await prisma.smmConfig.findMany()
    * ```
    */
  get smmConfig(): Prisma.SmmConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.approvedGroup`: Exposes CRUD operations for the **ApprovedGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApprovedGroups
    * const approvedGroups = await prisma.approvedGroup.findMany()
    * ```
    */
  get approvedGroup(): Prisma.ApprovedGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.failedOrderMessage`: Exposes CRUD operations for the **FailedOrderMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FailedOrderMessages
    * const failedOrderMessages = await prisma.failedOrderMessage.findMany()
    * ```
    */
  get failedOrderMessage(): Prisma.FailedOrderMessageDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Order: 'Order',
    Payment: 'Payment',
    SmmOrder: 'SmmOrder',
    Banner: 'Banner',
    SpecialOffer: 'SpecialOffer',
    Spend: 'Spend',
    AdminAccount: 'AdminAccount',
    SmmConfig: 'SmmConfig',
    ApprovedGroup: 'ApprovedGroup',
    FailedOrderMessage: 'FailedOrderMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "order" | "payment" | "smmOrder" | "banner" | "specialOffer" | "spend" | "adminAccount" | "smmConfig" | "approvedGroup" | "failedOrderMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      SmmOrder: {
        payload: Prisma.$SmmOrderPayload<ExtArgs>
        fields: Prisma.SmmOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SmmOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SmmOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmOrderPayload>
          }
          findFirst: {
            args: Prisma.SmmOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SmmOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmOrderPayload>
          }
          findMany: {
            args: Prisma.SmmOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmOrderPayload>[]
          }
          create: {
            args: Prisma.SmmOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmOrderPayload>
          }
          createMany: {
            args: Prisma.SmmOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SmmOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmOrderPayload>[]
          }
          delete: {
            args: Prisma.SmmOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmOrderPayload>
          }
          update: {
            args: Prisma.SmmOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmOrderPayload>
          }
          deleteMany: {
            args: Prisma.SmmOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SmmOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SmmOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmOrderPayload>[]
          }
          upsert: {
            args: Prisma.SmmOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmOrderPayload>
          }
          aggregate: {
            args: Prisma.SmmOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSmmOrder>
          }
          groupBy: {
            args: Prisma.SmmOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<SmmOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.SmmOrderCountArgs<ExtArgs>
            result: $Utils.Optional<SmmOrderCountAggregateOutputType> | number
          }
        }
      }
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      SpecialOffer: {
        payload: Prisma.$SpecialOfferPayload<ExtArgs>
        fields: Prisma.SpecialOfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialOfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialOfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialOfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialOfferPayload>
          }
          findFirst: {
            args: Prisma.SpecialOfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialOfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialOfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialOfferPayload>
          }
          findMany: {
            args: Prisma.SpecialOfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialOfferPayload>[]
          }
          create: {
            args: Prisma.SpecialOfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialOfferPayload>
          }
          createMany: {
            args: Prisma.SpecialOfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialOfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialOfferPayload>[]
          }
          delete: {
            args: Prisma.SpecialOfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialOfferPayload>
          }
          update: {
            args: Prisma.SpecialOfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialOfferPayload>
          }
          deleteMany: {
            args: Prisma.SpecialOfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialOfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialOfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialOfferPayload>[]
          }
          upsert: {
            args: Prisma.SpecialOfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialOfferPayload>
          }
          aggregate: {
            args: Prisma.SpecialOfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialOffer>
          }
          groupBy: {
            args: Prisma.SpecialOfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialOfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialOfferCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialOfferCountAggregateOutputType> | number
          }
        }
      }
      Spend: {
        payload: Prisma.$SpendPayload<ExtArgs>
        fields: Prisma.SpendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendPayload>
          }
          findFirst: {
            args: Prisma.SpendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendPayload>
          }
          findMany: {
            args: Prisma.SpendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendPayload>[]
          }
          create: {
            args: Prisma.SpendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendPayload>
          }
          createMany: {
            args: Prisma.SpendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendPayload>[]
          }
          delete: {
            args: Prisma.SpendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendPayload>
          }
          update: {
            args: Prisma.SpendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendPayload>
          }
          deleteMany: {
            args: Prisma.SpendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendPayload>[]
          }
          upsert: {
            args: Prisma.SpendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendPayload>
          }
          aggregate: {
            args: Prisma.SpendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpend>
          }
          groupBy: {
            args: Prisma.SpendGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpendGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpendCountArgs<ExtArgs>
            result: $Utils.Optional<SpendCountAggregateOutputType> | number
          }
        }
      }
      AdminAccount: {
        payload: Prisma.$AdminAccountPayload<ExtArgs>
        fields: Prisma.AdminAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>
          }
          findFirst: {
            args: Prisma.AdminAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>
          }
          findMany: {
            args: Prisma.AdminAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>[]
          }
          create: {
            args: Prisma.AdminAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>
          }
          createMany: {
            args: Prisma.AdminAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>[]
          }
          delete: {
            args: Prisma.AdminAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>
          }
          update: {
            args: Prisma.AdminAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>
          }
          deleteMany: {
            args: Prisma.AdminAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>[]
          }
          upsert: {
            args: Prisma.AdminAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>
          }
          aggregate: {
            args: Prisma.AdminAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminAccount>
          }
          groupBy: {
            args: Prisma.AdminAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminAccountCountArgs<ExtArgs>
            result: $Utils.Optional<AdminAccountCountAggregateOutputType> | number
          }
        }
      }
      SmmConfig: {
        payload: Prisma.$SmmConfigPayload<ExtArgs>
        fields: Prisma.SmmConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SmmConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SmmConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmConfigPayload>
          }
          findFirst: {
            args: Prisma.SmmConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SmmConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmConfigPayload>
          }
          findMany: {
            args: Prisma.SmmConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmConfigPayload>[]
          }
          create: {
            args: Prisma.SmmConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmConfigPayload>
          }
          createMany: {
            args: Prisma.SmmConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SmmConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmConfigPayload>[]
          }
          delete: {
            args: Prisma.SmmConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmConfigPayload>
          }
          update: {
            args: Prisma.SmmConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmConfigPayload>
          }
          deleteMany: {
            args: Prisma.SmmConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SmmConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SmmConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmConfigPayload>[]
          }
          upsert: {
            args: Prisma.SmmConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmmConfigPayload>
          }
          aggregate: {
            args: Prisma.SmmConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSmmConfig>
          }
          groupBy: {
            args: Prisma.SmmConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SmmConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SmmConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SmmConfigCountAggregateOutputType> | number
          }
        }
      }
      ApprovedGroup: {
        payload: Prisma.$ApprovedGroupPayload<ExtArgs>
        fields: Prisma.ApprovedGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovedGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovedGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedGroupPayload>
          }
          findFirst: {
            args: Prisma.ApprovedGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovedGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedGroupPayload>
          }
          findMany: {
            args: Prisma.ApprovedGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedGroupPayload>[]
          }
          create: {
            args: Prisma.ApprovedGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedGroupPayload>
          }
          createMany: {
            args: Prisma.ApprovedGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApprovedGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedGroupPayload>[]
          }
          delete: {
            args: Prisma.ApprovedGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedGroupPayload>
          }
          update: {
            args: Prisma.ApprovedGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedGroupPayload>
          }
          deleteMany: {
            args: Prisma.ApprovedGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovedGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApprovedGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedGroupPayload>[]
          }
          upsert: {
            args: Prisma.ApprovedGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedGroupPayload>
          }
          aggregate: {
            args: Prisma.ApprovedGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApprovedGroup>
          }
          groupBy: {
            args: Prisma.ApprovedGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovedGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovedGroupCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovedGroupCountAggregateOutputType> | number
          }
        }
      }
      FailedOrderMessage: {
        payload: Prisma.$FailedOrderMessagePayload<ExtArgs>
        fields: Prisma.FailedOrderMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FailedOrderMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedOrderMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FailedOrderMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedOrderMessagePayload>
          }
          findFirst: {
            args: Prisma.FailedOrderMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedOrderMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FailedOrderMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedOrderMessagePayload>
          }
          findMany: {
            args: Prisma.FailedOrderMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedOrderMessagePayload>[]
          }
          create: {
            args: Prisma.FailedOrderMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedOrderMessagePayload>
          }
          createMany: {
            args: Prisma.FailedOrderMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FailedOrderMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedOrderMessagePayload>[]
          }
          delete: {
            args: Prisma.FailedOrderMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedOrderMessagePayload>
          }
          update: {
            args: Prisma.FailedOrderMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedOrderMessagePayload>
          }
          deleteMany: {
            args: Prisma.FailedOrderMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FailedOrderMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FailedOrderMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedOrderMessagePayload>[]
          }
          upsert: {
            args: Prisma.FailedOrderMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedOrderMessagePayload>
          }
          aggregate: {
            args: Prisma.FailedOrderMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFailedOrderMessage>
          }
          groupBy: {
            args: Prisma.FailedOrderMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<FailedOrderMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.FailedOrderMessageCountArgs<ExtArgs>
            result: $Utils.Optional<FailedOrderMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    order?: OrderOmit
    payment?: PaymentOmit
    smmOrder?: SmmOrderOmit
    banner?: BannerOmit
    specialOffer?: SpecialOfferOmit
    spend?: SpendOmit
    adminAccount?: AdminAccountOmit
    smmConfig?: SmmConfigOmit
    approvedGroup?: ApprovedGroupOmit
    failedOrderMessage?: FailedOrderMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    mobile: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    mobile: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    mobile: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    mobile?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    mobile?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    mobile?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    mobile: string | null
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    mobile?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mobile" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mobile: string | null
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    serviceId: number | null
    quantity: number | null
    amount: number | null
  }

  export type OrderSumAggregateOutputType = {
    serviceId: number | null
    quantity: number | null
    amount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    serviceId: number | null
    serviceName: string | null
    link: string | null
    quantity: number | null
    amount: number | null
    status: $Enums.OrderStatus | null
    remark: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    provider: $Enums.SmmProvider | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    serviceId: number | null
    serviceName: string | null
    link: string | null
    quantity: number | null
    amount: number | null
    status: $Enums.OrderStatus | null
    remark: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    provider: $Enums.SmmProvider | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    serviceId: number
    serviceName: number
    link: number
    quantity: number
    amount: number
    status: number
    remark: number
    userId: number
    createdAt: number
    updatedAt: number
    provider: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    serviceId?: true
    quantity?: true
    amount?: true
  }

  export type OrderSumAggregateInputType = {
    serviceId?: true
    quantity?: true
    amount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    serviceId?: true
    serviceName?: true
    link?: true
    quantity?: true
    amount?: true
    status?: true
    remark?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    serviceId?: true
    serviceName?: true
    link?: true
    quantity?: true
    amount?: true
    status?: true
    remark?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    serviceId?: true
    serviceName?: true
    link?: true
    quantity?: true
    amount?: true
    status?: true
    remark?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    serviceId: number
    serviceName: string | null
    link: string
    quantity: number
    amount: number
    status: $Enums.OrderStatus
    remark: string | null
    userId: string | null
    createdAt: Date
    updatedAt: Date
    provider: $Enums.SmmProvider
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    serviceName?: boolean
    link?: boolean
    quantity?: boolean
    amount?: boolean
    status?: boolean
    remark?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    user?: boolean | Order$userArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
    smmOrder?: boolean | Order$smmOrderArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    serviceName?: boolean
    link?: boolean
    quantity?: boolean
    amount?: boolean
    status?: boolean
    remark?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    user?: boolean | Order$userArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    serviceName?: boolean
    link?: boolean
    quantity?: boolean
    amount?: boolean
    status?: boolean
    remark?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    user?: boolean | Order$userArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    serviceId?: boolean
    serviceName?: boolean
    link?: boolean
    quantity?: boolean
    amount?: boolean
    status?: boolean
    remark?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "serviceName" | "link" | "quantity" | "amount" | "status" | "remark" | "userId" | "createdAt" | "updatedAt" | "provider", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Order$userArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
    smmOrder?: boolean | Order$smmOrderArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Order$userArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Order$userArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs> | null
      smmOrder: Prisma.$SmmOrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceId: number
      serviceName: string | null
      link: string
      quantity: number
      amount: number
      status: $Enums.OrderStatus
      remark: string | null
      userId: string | null
      createdAt: Date
      updatedAt: Date
      provider: $Enums.SmmProvider
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Order$userArgs<ExtArgs> = {}>(args?: Subset<T, Order$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends Order$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Order$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    smmOrder<T extends Order$smmOrderArgs<ExtArgs> = {}>(args?: Subset<T, Order$smmOrderArgs<ExtArgs>>): Prisma__SmmOrderClient<$Result.GetResult<Prisma.$SmmOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly serviceId: FieldRef<"Order", 'Int'>
    readonly serviceName: FieldRef<"Order", 'String'>
    readonly link: FieldRef<"Order", 'String'>
    readonly quantity: FieldRef<"Order", 'Int'>
    readonly amount: FieldRef<"Order", 'Float'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly remark: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly provider: FieldRef<"Order", 'SmmProvider'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.user
   */
  export type Order$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order.payment
   */
  export type Order$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Order.smmOrder
   */
  export type Order$smmOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmOrder
     */
    select?: SmmOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmOrder
     */
    omit?: SmmOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmmOrderInclude<ExtArgs> | null
    where?: SmmOrderWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    zapupiOrderId: string | null
    orderId: string | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    paymentUrl: string | null
    utr: string | null
    customerMobile: string | null
    zapupiTxnId: string | null
    failureReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    zapupiOrderId: string | null
    orderId: string | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    paymentUrl: string | null
    utr: string | null
    customerMobile: string | null
    zapupiTxnId: string | null
    failureReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    zapupiOrderId: number
    orderId: number
    amount: number
    status: number
    paymentUrl: number
    utr: number
    customerMobile: number
    zapupiTxnId: number
    failureReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    zapupiOrderId?: true
    orderId?: true
    amount?: true
    status?: true
    paymentUrl?: true
    utr?: true
    customerMobile?: true
    zapupiTxnId?: true
    failureReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    zapupiOrderId?: true
    orderId?: true
    amount?: true
    status?: true
    paymentUrl?: true
    utr?: true
    customerMobile?: true
    zapupiTxnId?: true
    failureReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    zapupiOrderId?: true
    orderId?: true
    amount?: true
    status?: true
    paymentUrl?: true
    utr?: true
    customerMobile?: true
    zapupiTxnId?: true
    failureReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    zapupiOrderId: string
    orderId: string
    amount: number
    status: $Enums.PaymentStatus
    paymentUrl: string | null
    utr: string | null
    customerMobile: string | null
    zapupiTxnId: string | null
    failureReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapupiOrderId?: boolean
    orderId?: boolean
    amount?: boolean
    status?: boolean
    paymentUrl?: boolean
    utr?: boolean
    customerMobile?: boolean
    zapupiTxnId?: boolean
    failureReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapupiOrderId?: boolean
    orderId?: boolean
    amount?: boolean
    status?: boolean
    paymentUrl?: boolean
    utr?: boolean
    customerMobile?: boolean
    zapupiTxnId?: boolean
    failureReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapupiOrderId?: boolean
    orderId?: boolean
    amount?: boolean
    status?: boolean
    paymentUrl?: boolean
    utr?: boolean
    customerMobile?: boolean
    zapupiTxnId?: boolean
    failureReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    zapupiOrderId?: boolean
    orderId?: boolean
    amount?: boolean
    status?: boolean
    paymentUrl?: boolean
    utr?: boolean
    customerMobile?: boolean
    zapupiTxnId?: boolean
    failureReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zapupiOrderId" | "orderId" | "amount" | "status" | "paymentUrl" | "utr" | "customerMobile" | "zapupiTxnId" | "failureReason" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zapupiOrderId: string
      orderId: string
      amount: number
      status: $Enums.PaymentStatus
      paymentUrl: string | null
      utr: string | null
      customerMobile: string | null
      zapupiTxnId: string | null
      failureReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly zapupiOrderId: FieldRef<"Payment", 'String'>
    readonly orderId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly paymentUrl: FieldRef<"Payment", 'String'>
    readonly utr: FieldRef<"Payment", 'String'>
    readonly customerMobile: FieldRef<"Payment", 'String'>
    readonly zapupiTxnId: FieldRef<"Payment", 'String'>
    readonly failureReason: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model SmmOrder
   */

  export type AggregateSmmOrder = {
    _count: SmmOrderCountAggregateOutputType | null
    _avg: SmmOrderAvgAggregateOutputType | null
    _sum: SmmOrderSumAggregateOutputType | null
    _min: SmmOrderMinAggregateOutputType | null
    _max: SmmOrderMaxAggregateOutputType | null
  }

  export type SmmOrderAvgAggregateOutputType = {
    serviceId: number | null
    quantity: number | null
    startCount: number | null
    remains: number | null
    charge: number | null
  }

  export type SmmOrderSumAggregateOutputType = {
    serviceId: number | null
    quantity: number | null
    startCount: number | null
    remains: number | null
    charge: number | null
  }

  export type SmmOrderMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    smmOrderId: string | null
    serviceId: number | null
    provider: $Enums.SmmProvider | null
    link: string | null
    quantity: number | null
    status: $Enums.OrderStatus | null
    startCount: number | null
    remains: number | null
    charge: number | null
    errorMsg: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SmmOrderMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    smmOrderId: string | null
    serviceId: number | null
    provider: $Enums.SmmProvider | null
    link: string | null
    quantity: number | null
    status: $Enums.OrderStatus | null
    startCount: number | null
    remains: number | null
    charge: number | null
    errorMsg: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SmmOrderCountAggregateOutputType = {
    id: number
    orderId: number
    smmOrderId: number
    serviceId: number
    provider: number
    link: number
    quantity: number
    status: number
    startCount: number
    remains: number
    charge: number
    errorMsg: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SmmOrderAvgAggregateInputType = {
    serviceId?: true
    quantity?: true
    startCount?: true
    remains?: true
    charge?: true
  }

  export type SmmOrderSumAggregateInputType = {
    serviceId?: true
    quantity?: true
    startCount?: true
    remains?: true
    charge?: true
  }

  export type SmmOrderMinAggregateInputType = {
    id?: true
    orderId?: true
    smmOrderId?: true
    serviceId?: true
    provider?: true
    link?: true
    quantity?: true
    status?: true
    startCount?: true
    remains?: true
    charge?: true
    errorMsg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SmmOrderMaxAggregateInputType = {
    id?: true
    orderId?: true
    smmOrderId?: true
    serviceId?: true
    provider?: true
    link?: true
    quantity?: true
    status?: true
    startCount?: true
    remains?: true
    charge?: true
    errorMsg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SmmOrderCountAggregateInputType = {
    id?: true
    orderId?: true
    smmOrderId?: true
    serviceId?: true
    provider?: true
    link?: true
    quantity?: true
    status?: true
    startCount?: true
    remains?: true
    charge?: true
    errorMsg?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SmmOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmmOrder to aggregate.
     */
    where?: SmmOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmmOrders to fetch.
     */
    orderBy?: SmmOrderOrderByWithRelationInput | SmmOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SmmOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmmOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmmOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SmmOrders
    **/
    _count?: true | SmmOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SmmOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SmmOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SmmOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SmmOrderMaxAggregateInputType
  }

  export type GetSmmOrderAggregateType<T extends SmmOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateSmmOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSmmOrder[P]>
      : GetScalarType<T[P], AggregateSmmOrder[P]>
  }




  export type SmmOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SmmOrderWhereInput
    orderBy?: SmmOrderOrderByWithAggregationInput | SmmOrderOrderByWithAggregationInput[]
    by: SmmOrderScalarFieldEnum[] | SmmOrderScalarFieldEnum
    having?: SmmOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SmmOrderCountAggregateInputType | true
    _avg?: SmmOrderAvgAggregateInputType
    _sum?: SmmOrderSumAggregateInputType
    _min?: SmmOrderMinAggregateInputType
    _max?: SmmOrderMaxAggregateInputType
  }

  export type SmmOrderGroupByOutputType = {
    id: string
    orderId: string
    smmOrderId: string | null
    serviceId: number
    provider: $Enums.SmmProvider
    link: string
    quantity: number
    status: $Enums.OrderStatus
    startCount: number | null
    remains: number | null
    charge: number | null
    errorMsg: string | null
    createdAt: Date
    updatedAt: Date
    _count: SmmOrderCountAggregateOutputType | null
    _avg: SmmOrderAvgAggregateOutputType | null
    _sum: SmmOrderSumAggregateOutputType | null
    _min: SmmOrderMinAggregateOutputType | null
    _max: SmmOrderMaxAggregateOutputType | null
  }

  type GetSmmOrderGroupByPayload<T extends SmmOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SmmOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SmmOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SmmOrderGroupByOutputType[P]>
            : GetScalarType<T[P], SmmOrderGroupByOutputType[P]>
        }
      >
    >


  export type SmmOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    smmOrderId?: boolean
    serviceId?: boolean
    provider?: boolean
    link?: boolean
    quantity?: boolean
    status?: boolean
    startCount?: boolean
    remains?: boolean
    charge?: boolean
    errorMsg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["smmOrder"]>

  export type SmmOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    smmOrderId?: boolean
    serviceId?: boolean
    provider?: boolean
    link?: boolean
    quantity?: boolean
    status?: boolean
    startCount?: boolean
    remains?: boolean
    charge?: boolean
    errorMsg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["smmOrder"]>

  export type SmmOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    smmOrderId?: boolean
    serviceId?: boolean
    provider?: boolean
    link?: boolean
    quantity?: boolean
    status?: boolean
    startCount?: boolean
    remains?: boolean
    charge?: boolean
    errorMsg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["smmOrder"]>

  export type SmmOrderSelectScalar = {
    id?: boolean
    orderId?: boolean
    smmOrderId?: boolean
    serviceId?: boolean
    provider?: boolean
    link?: boolean
    quantity?: boolean
    status?: boolean
    startCount?: boolean
    remains?: boolean
    charge?: boolean
    errorMsg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SmmOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "smmOrderId" | "serviceId" | "provider" | "link" | "quantity" | "status" | "startCount" | "remains" | "charge" | "errorMsg" | "createdAt" | "updatedAt", ExtArgs["result"]["smmOrder"]>
  export type SmmOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type SmmOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type SmmOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $SmmOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SmmOrder"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      smmOrderId: string | null
      serviceId: number
      provider: $Enums.SmmProvider
      link: string
      quantity: number
      status: $Enums.OrderStatus
      startCount: number | null
      remains: number | null
      charge: number | null
      errorMsg: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["smmOrder"]>
    composites: {}
  }

  type SmmOrderGetPayload<S extends boolean | null | undefined | SmmOrderDefaultArgs> = $Result.GetResult<Prisma.$SmmOrderPayload, S>

  type SmmOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SmmOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SmmOrderCountAggregateInputType | true
    }

  export interface SmmOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SmmOrder'], meta: { name: 'SmmOrder' } }
    /**
     * Find zero or one SmmOrder that matches the filter.
     * @param {SmmOrderFindUniqueArgs} args - Arguments to find a SmmOrder
     * @example
     * // Get one SmmOrder
     * const smmOrder = await prisma.smmOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SmmOrderFindUniqueArgs>(args: SelectSubset<T, SmmOrderFindUniqueArgs<ExtArgs>>): Prisma__SmmOrderClient<$Result.GetResult<Prisma.$SmmOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SmmOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SmmOrderFindUniqueOrThrowArgs} args - Arguments to find a SmmOrder
     * @example
     * // Get one SmmOrder
     * const smmOrder = await prisma.smmOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SmmOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, SmmOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SmmOrderClient<$Result.GetResult<Prisma.$SmmOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SmmOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmmOrderFindFirstArgs} args - Arguments to find a SmmOrder
     * @example
     * // Get one SmmOrder
     * const smmOrder = await prisma.smmOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SmmOrderFindFirstArgs>(args?: SelectSubset<T, SmmOrderFindFirstArgs<ExtArgs>>): Prisma__SmmOrderClient<$Result.GetResult<Prisma.$SmmOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SmmOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmmOrderFindFirstOrThrowArgs} args - Arguments to find a SmmOrder
     * @example
     * // Get one SmmOrder
     * const smmOrder = await prisma.smmOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SmmOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, SmmOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__SmmOrderClient<$Result.GetResult<Prisma.$SmmOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SmmOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmmOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SmmOrders
     * const smmOrders = await prisma.smmOrder.findMany()
     * 
     * // Get first 10 SmmOrders
     * const smmOrders = await prisma.smmOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const smmOrderWithIdOnly = await prisma.smmOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SmmOrderFindManyArgs>(args?: SelectSubset<T, SmmOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmmOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SmmOrder.
     * @param {SmmOrderCreateArgs} args - Arguments to create a SmmOrder.
     * @example
     * // Create one SmmOrder
     * const SmmOrder = await prisma.smmOrder.create({
     *   data: {
     *     // ... data to create a SmmOrder
     *   }
     * })
     * 
     */
    create<T extends SmmOrderCreateArgs>(args: SelectSubset<T, SmmOrderCreateArgs<ExtArgs>>): Prisma__SmmOrderClient<$Result.GetResult<Prisma.$SmmOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SmmOrders.
     * @param {SmmOrderCreateManyArgs} args - Arguments to create many SmmOrders.
     * @example
     * // Create many SmmOrders
     * const smmOrder = await prisma.smmOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SmmOrderCreateManyArgs>(args?: SelectSubset<T, SmmOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SmmOrders and returns the data saved in the database.
     * @param {SmmOrderCreateManyAndReturnArgs} args - Arguments to create many SmmOrders.
     * @example
     * // Create many SmmOrders
     * const smmOrder = await prisma.smmOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SmmOrders and only return the `id`
     * const smmOrderWithIdOnly = await prisma.smmOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SmmOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, SmmOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmmOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SmmOrder.
     * @param {SmmOrderDeleteArgs} args - Arguments to delete one SmmOrder.
     * @example
     * // Delete one SmmOrder
     * const SmmOrder = await prisma.smmOrder.delete({
     *   where: {
     *     // ... filter to delete one SmmOrder
     *   }
     * })
     * 
     */
    delete<T extends SmmOrderDeleteArgs>(args: SelectSubset<T, SmmOrderDeleteArgs<ExtArgs>>): Prisma__SmmOrderClient<$Result.GetResult<Prisma.$SmmOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SmmOrder.
     * @param {SmmOrderUpdateArgs} args - Arguments to update one SmmOrder.
     * @example
     * // Update one SmmOrder
     * const smmOrder = await prisma.smmOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SmmOrderUpdateArgs>(args: SelectSubset<T, SmmOrderUpdateArgs<ExtArgs>>): Prisma__SmmOrderClient<$Result.GetResult<Prisma.$SmmOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SmmOrders.
     * @param {SmmOrderDeleteManyArgs} args - Arguments to filter SmmOrders to delete.
     * @example
     * // Delete a few SmmOrders
     * const { count } = await prisma.smmOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SmmOrderDeleteManyArgs>(args?: SelectSubset<T, SmmOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmmOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmmOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SmmOrders
     * const smmOrder = await prisma.smmOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SmmOrderUpdateManyArgs>(args: SelectSubset<T, SmmOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmmOrders and returns the data updated in the database.
     * @param {SmmOrderUpdateManyAndReturnArgs} args - Arguments to update many SmmOrders.
     * @example
     * // Update many SmmOrders
     * const smmOrder = await prisma.smmOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SmmOrders and only return the `id`
     * const smmOrderWithIdOnly = await prisma.smmOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SmmOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, SmmOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmmOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SmmOrder.
     * @param {SmmOrderUpsertArgs} args - Arguments to update or create a SmmOrder.
     * @example
     * // Update or create a SmmOrder
     * const smmOrder = await prisma.smmOrder.upsert({
     *   create: {
     *     // ... data to create a SmmOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SmmOrder we want to update
     *   }
     * })
     */
    upsert<T extends SmmOrderUpsertArgs>(args: SelectSubset<T, SmmOrderUpsertArgs<ExtArgs>>): Prisma__SmmOrderClient<$Result.GetResult<Prisma.$SmmOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SmmOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmmOrderCountArgs} args - Arguments to filter SmmOrders to count.
     * @example
     * // Count the number of SmmOrders
     * const count = await prisma.smmOrder.count({
     *   where: {
     *     // ... the filter for the SmmOrders we want to count
     *   }
     * })
    **/
    count<T extends SmmOrderCountArgs>(
      args?: Subset<T, SmmOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SmmOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SmmOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmmOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SmmOrderAggregateArgs>(args: Subset<T, SmmOrderAggregateArgs>): Prisma.PrismaPromise<GetSmmOrderAggregateType<T>>

    /**
     * Group by SmmOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmmOrderGroupByArgs} args - Group by arguments.
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
      T extends SmmOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SmmOrderGroupByArgs['orderBy'] }
        : { orderBy?: SmmOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SmmOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmmOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SmmOrder model
   */
  readonly fields: SmmOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SmmOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SmmOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SmmOrder model
   */
  interface SmmOrderFieldRefs {
    readonly id: FieldRef<"SmmOrder", 'String'>
    readonly orderId: FieldRef<"SmmOrder", 'String'>
    readonly smmOrderId: FieldRef<"SmmOrder", 'String'>
    readonly serviceId: FieldRef<"SmmOrder", 'Int'>
    readonly provider: FieldRef<"SmmOrder", 'SmmProvider'>
    readonly link: FieldRef<"SmmOrder", 'String'>
    readonly quantity: FieldRef<"SmmOrder", 'Int'>
    readonly status: FieldRef<"SmmOrder", 'OrderStatus'>
    readonly startCount: FieldRef<"SmmOrder", 'Int'>
    readonly remains: FieldRef<"SmmOrder", 'Int'>
    readonly charge: FieldRef<"SmmOrder", 'Float'>
    readonly errorMsg: FieldRef<"SmmOrder", 'String'>
    readonly createdAt: FieldRef<"SmmOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"SmmOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SmmOrder findUnique
   */
  export type SmmOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmOrder
     */
    select?: SmmOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmOrder
     */
    omit?: SmmOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmmOrderInclude<ExtArgs> | null
    /**
     * Filter, which SmmOrder to fetch.
     */
    where: SmmOrderWhereUniqueInput
  }

  /**
   * SmmOrder findUniqueOrThrow
   */
  export type SmmOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmOrder
     */
    select?: SmmOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmOrder
     */
    omit?: SmmOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmmOrderInclude<ExtArgs> | null
    /**
     * Filter, which SmmOrder to fetch.
     */
    where: SmmOrderWhereUniqueInput
  }

  /**
   * SmmOrder findFirst
   */
  export type SmmOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmOrder
     */
    select?: SmmOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmOrder
     */
    omit?: SmmOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmmOrderInclude<ExtArgs> | null
    /**
     * Filter, which SmmOrder to fetch.
     */
    where?: SmmOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmmOrders to fetch.
     */
    orderBy?: SmmOrderOrderByWithRelationInput | SmmOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmmOrders.
     */
    cursor?: SmmOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmmOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmmOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmmOrders.
     */
    distinct?: SmmOrderScalarFieldEnum | SmmOrderScalarFieldEnum[]
  }

  /**
   * SmmOrder findFirstOrThrow
   */
  export type SmmOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmOrder
     */
    select?: SmmOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmOrder
     */
    omit?: SmmOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmmOrderInclude<ExtArgs> | null
    /**
     * Filter, which SmmOrder to fetch.
     */
    where?: SmmOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmmOrders to fetch.
     */
    orderBy?: SmmOrderOrderByWithRelationInput | SmmOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmmOrders.
     */
    cursor?: SmmOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmmOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmmOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmmOrders.
     */
    distinct?: SmmOrderScalarFieldEnum | SmmOrderScalarFieldEnum[]
  }

  /**
   * SmmOrder findMany
   */
  export type SmmOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmOrder
     */
    select?: SmmOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmOrder
     */
    omit?: SmmOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmmOrderInclude<ExtArgs> | null
    /**
     * Filter, which SmmOrders to fetch.
     */
    where?: SmmOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmmOrders to fetch.
     */
    orderBy?: SmmOrderOrderByWithRelationInput | SmmOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SmmOrders.
     */
    cursor?: SmmOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmmOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmmOrders.
     */
    skip?: number
    distinct?: SmmOrderScalarFieldEnum | SmmOrderScalarFieldEnum[]
  }

  /**
   * SmmOrder create
   */
  export type SmmOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmOrder
     */
    select?: SmmOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmOrder
     */
    omit?: SmmOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmmOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a SmmOrder.
     */
    data: XOR<SmmOrderCreateInput, SmmOrderUncheckedCreateInput>
  }

  /**
   * SmmOrder createMany
   */
  export type SmmOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SmmOrders.
     */
    data: SmmOrderCreateManyInput | SmmOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SmmOrder createManyAndReturn
   */
  export type SmmOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmOrder
     */
    select?: SmmOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SmmOrder
     */
    omit?: SmmOrderOmit<ExtArgs> | null
    /**
     * The data used to create many SmmOrders.
     */
    data: SmmOrderCreateManyInput | SmmOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmmOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SmmOrder update
   */
  export type SmmOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmOrder
     */
    select?: SmmOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmOrder
     */
    omit?: SmmOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmmOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a SmmOrder.
     */
    data: XOR<SmmOrderUpdateInput, SmmOrderUncheckedUpdateInput>
    /**
     * Choose, which SmmOrder to update.
     */
    where: SmmOrderWhereUniqueInput
  }

  /**
   * SmmOrder updateMany
   */
  export type SmmOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SmmOrders.
     */
    data: XOR<SmmOrderUpdateManyMutationInput, SmmOrderUncheckedUpdateManyInput>
    /**
     * Filter which SmmOrders to update
     */
    where?: SmmOrderWhereInput
    /**
     * Limit how many SmmOrders to update.
     */
    limit?: number
  }

  /**
   * SmmOrder updateManyAndReturn
   */
  export type SmmOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmOrder
     */
    select?: SmmOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SmmOrder
     */
    omit?: SmmOrderOmit<ExtArgs> | null
    /**
     * The data used to update SmmOrders.
     */
    data: XOR<SmmOrderUpdateManyMutationInput, SmmOrderUncheckedUpdateManyInput>
    /**
     * Filter which SmmOrders to update
     */
    where?: SmmOrderWhereInput
    /**
     * Limit how many SmmOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmmOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SmmOrder upsert
   */
  export type SmmOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmOrder
     */
    select?: SmmOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmOrder
     */
    omit?: SmmOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmmOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the SmmOrder to update in case it exists.
     */
    where: SmmOrderWhereUniqueInput
    /**
     * In case the SmmOrder found by the `where` argument doesn't exist, create a new SmmOrder with this data.
     */
    create: XOR<SmmOrderCreateInput, SmmOrderUncheckedCreateInput>
    /**
     * In case the SmmOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SmmOrderUpdateInput, SmmOrderUncheckedUpdateInput>
  }

  /**
   * SmmOrder delete
   */
  export type SmmOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmOrder
     */
    select?: SmmOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmOrder
     */
    omit?: SmmOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmmOrderInclude<ExtArgs> | null
    /**
     * Filter which SmmOrder to delete.
     */
    where: SmmOrderWhereUniqueInput
  }

  /**
   * SmmOrder deleteMany
   */
  export type SmmOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmmOrders to delete
     */
    where?: SmmOrderWhereInput
    /**
     * Limit how many SmmOrders to delete.
     */
    limit?: number
  }

  /**
   * SmmOrder without action
   */
  export type SmmOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmOrder
     */
    select?: SmmOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmOrder
     */
    omit?: SmmOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmmOrderInclude<ExtArgs> | null
  }


  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    imageUrl: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BannerMinAggregateInputType = {
    id?: true
    imageUrl?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    imageUrl?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    id: string
    imageUrl: string
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: BannerCountAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["banner"]>

  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerFindManyArgs>(args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends BannerCreateArgs>(args: SelectSubset<T, BannerCreateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerCreateManyArgs>(args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banners and returns the data saved in the database.
     * @param {BannerCreateManyAndReturnArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannerCreateManyAndReturnArgs>(args?: SelectSubset<T, BannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends BannerDeleteArgs>(args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerUpdateArgs>(args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerDeleteManyArgs>(args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerUpdateManyArgs>(args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners and returns the data updated in the database.
     * @param {BannerUpdateManyAndReturnArgs} args - Arguments to update many Banners.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BannerUpdateManyAndReturnArgs>(args: SelectSubset<T, BannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
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
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Banner model
   */
  interface BannerFieldRefs {
    readonly id: FieldRef<"Banner", 'String'>
    readonly imageUrl: FieldRef<"Banner", 'String'>
    readonly active: FieldRef<"Banner", 'Boolean'>
    readonly createdAt: FieldRef<"Banner", 'DateTime'>
    readonly updatedAt: FieldRef<"Banner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner createManyAndReturn
   */
  export type BannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner updateManyAndReturn
   */
  export type BannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to delete.
     */
    limit?: number
  }

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
  }


  /**
   * Model SpecialOffer
   */

  export type AggregateSpecialOffer = {
    _count: SpecialOfferCountAggregateOutputType | null
    _avg: SpecialOfferAvgAggregateOutputType | null
    _sum: SpecialOfferSumAggregateOutputType | null
    _min: SpecialOfferMinAggregateOutputType | null
    _max: SpecialOfferMaxAggregateOutputType | null
  }

  export type SpecialOfferAvgAggregateOutputType = {
    serviceId: number | null
    quantity: number | null
    price: number | null
  }

  export type SpecialOfferSumAggregateOutputType = {
    serviceId: number | null
    quantity: number | null
    price: number | null
  }

  export type SpecialOfferMinAggregateOutputType = {
    id: string | null
    serviceSlug: string | null
    title: string | null
    badge: string | null
    description: string | null
    serviceId: number | null
    quantity: number | null
    price: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecialOfferMaxAggregateOutputType = {
    id: string | null
    serviceSlug: string | null
    title: string | null
    badge: string | null
    description: string | null
    serviceId: number | null
    quantity: number | null
    price: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecialOfferCountAggregateOutputType = {
    id: number
    serviceSlug: number
    title: number
    badge: number
    description: number
    serviceId: number
    quantity: number
    price: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpecialOfferAvgAggregateInputType = {
    serviceId?: true
    quantity?: true
    price?: true
  }

  export type SpecialOfferSumAggregateInputType = {
    serviceId?: true
    quantity?: true
    price?: true
  }

  export type SpecialOfferMinAggregateInputType = {
    id?: true
    serviceSlug?: true
    title?: true
    badge?: true
    description?: true
    serviceId?: true
    quantity?: true
    price?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecialOfferMaxAggregateInputType = {
    id?: true
    serviceSlug?: true
    title?: true
    badge?: true
    description?: true
    serviceId?: true
    quantity?: true
    price?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecialOfferCountAggregateInputType = {
    id?: true
    serviceSlug?: true
    title?: true
    badge?: true
    description?: true
    serviceId?: true
    quantity?: true
    price?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpecialOfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialOffer to aggregate.
     */
    where?: SpecialOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialOffers to fetch.
     */
    orderBy?: SpecialOfferOrderByWithRelationInput | SpecialOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpecialOffers
    **/
    _count?: true | SpecialOfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialOfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialOfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialOfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialOfferMaxAggregateInputType
  }

  export type GetSpecialOfferAggregateType<T extends SpecialOfferAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialOffer[P]>
      : GetScalarType<T[P], AggregateSpecialOffer[P]>
  }




  export type SpecialOfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialOfferWhereInput
    orderBy?: SpecialOfferOrderByWithAggregationInput | SpecialOfferOrderByWithAggregationInput[]
    by: SpecialOfferScalarFieldEnum[] | SpecialOfferScalarFieldEnum
    having?: SpecialOfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialOfferCountAggregateInputType | true
    _avg?: SpecialOfferAvgAggregateInputType
    _sum?: SpecialOfferSumAggregateInputType
    _min?: SpecialOfferMinAggregateInputType
    _max?: SpecialOfferMaxAggregateInputType
  }

  export type SpecialOfferGroupByOutputType = {
    id: string
    serviceSlug: string
    title: string
    badge: string
    description: string | null
    serviceId: number | null
    quantity: number | null
    price: number | null
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: SpecialOfferCountAggregateOutputType | null
    _avg: SpecialOfferAvgAggregateOutputType | null
    _sum: SpecialOfferSumAggregateOutputType | null
    _min: SpecialOfferMinAggregateOutputType | null
    _max: SpecialOfferMaxAggregateOutputType | null
  }

  type GetSpecialOfferGroupByPayload<T extends SpecialOfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialOfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialOfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialOfferGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialOfferGroupByOutputType[P]>
        }
      >
    >


  export type SpecialOfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceSlug?: boolean
    title?: boolean
    badge?: boolean
    description?: boolean
    serviceId?: boolean
    quantity?: boolean
    price?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["specialOffer"]>

  export type SpecialOfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceSlug?: boolean
    title?: boolean
    badge?: boolean
    description?: boolean
    serviceId?: boolean
    quantity?: boolean
    price?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["specialOffer"]>

  export type SpecialOfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceSlug?: boolean
    title?: boolean
    badge?: boolean
    description?: boolean
    serviceId?: boolean
    quantity?: boolean
    price?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["specialOffer"]>

  export type SpecialOfferSelectScalar = {
    id?: boolean
    serviceSlug?: boolean
    title?: boolean
    badge?: boolean
    description?: boolean
    serviceId?: boolean
    quantity?: boolean
    price?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpecialOfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceSlug" | "title" | "badge" | "description" | "serviceId" | "quantity" | "price" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["specialOffer"]>

  export type $SpecialOfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpecialOffer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceSlug: string
      title: string
      badge: string
      description: string | null
      serviceId: number | null
      quantity: number | null
      price: number | null
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["specialOffer"]>
    composites: {}
  }

  type SpecialOfferGetPayload<S extends boolean | null | undefined | SpecialOfferDefaultArgs> = $Result.GetResult<Prisma.$SpecialOfferPayload, S>

  type SpecialOfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialOfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialOfferCountAggregateInputType | true
    }

  export interface SpecialOfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpecialOffer'], meta: { name: 'SpecialOffer' } }
    /**
     * Find zero or one SpecialOffer that matches the filter.
     * @param {SpecialOfferFindUniqueArgs} args - Arguments to find a SpecialOffer
     * @example
     * // Get one SpecialOffer
     * const specialOffer = await prisma.specialOffer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialOfferFindUniqueArgs>(args: SelectSubset<T, SpecialOfferFindUniqueArgs<ExtArgs>>): Prisma__SpecialOfferClient<$Result.GetResult<Prisma.$SpecialOfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpecialOffer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialOfferFindUniqueOrThrowArgs} args - Arguments to find a SpecialOffer
     * @example
     * // Get one SpecialOffer
     * const specialOffer = await prisma.specialOffer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialOfferFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialOfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialOfferClient<$Result.GetResult<Prisma.$SpecialOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialOffer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialOfferFindFirstArgs} args - Arguments to find a SpecialOffer
     * @example
     * // Get one SpecialOffer
     * const specialOffer = await prisma.specialOffer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialOfferFindFirstArgs>(args?: SelectSubset<T, SpecialOfferFindFirstArgs<ExtArgs>>): Prisma__SpecialOfferClient<$Result.GetResult<Prisma.$SpecialOfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialOffer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialOfferFindFirstOrThrowArgs} args - Arguments to find a SpecialOffer
     * @example
     * // Get one SpecialOffer
     * const specialOffer = await prisma.specialOffer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialOfferFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialOfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialOfferClient<$Result.GetResult<Prisma.$SpecialOfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpecialOffers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialOfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpecialOffers
     * const specialOffers = await prisma.specialOffer.findMany()
     * 
     * // Get first 10 SpecialOffers
     * const specialOffers = await prisma.specialOffer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialOfferWithIdOnly = await prisma.specialOffer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialOfferFindManyArgs>(args?: SelectSubset<T, SpecialOfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpecialOffer.
     * @param {SpecialOfferCreateArgs} args - Arguments to create a SpecialOffer.
     * @example
     * // Create one SpecialOffer
     * const SpecialOffer = await prisma.specialOffer.create({
     *   data: {
     *     // ... data to create a SpecialOffer
     *   }
     * })
     * 
     */
    create<T extends SpecialOfferCreateArgs>(args: SelectSubset<T, SpecialOfferCreateArgs<ExtArgs>>): Prisma__SpecialOfferClient<$Result.GetResult<Prisma.$SpecialOfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpecialOffers.
     * @param {SpecialOfferCreateManyArgs} args - Arguments to create many SpecialOffers.
     * @example
     * // Create many SpecialOffers
     * const specialOffer = await prisma.specialOffer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialOfferCreateManyArgs>(args?: SelectSubset<T, SpecialOfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpecialOffers and returns the data saved in the database.
     * @param {SpecialOfferCreateManyAndReturnArgs} args - Arguments to create many SpecialOffers.
     * @example
     * // Create many SpecialOffers
     * const specialOffer = await prisma.specialOffer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpecialOffers and only return the `id`
     * const specialOfferWithIdOnly = await prisma.specialOffer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialOfferCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialOfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialOfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpecialOffer.
     * @param {SpecialOfferDeleteArgs} args - Arguments to delete one SpecialOffer.
     * @example
     * // Delete one SpecialOffer
     * const SpecialOffer = await prisma.specialOffer.delete({
     *   where: {
     *     // ... filter to delete one SpecialOffer
     *   }
     * })
     * 
     */
    delete<T extends SpecialOfferDeleteArgs>(args: SelectSubset<T, SpecialOfferDeleteArgs<ExtArgs>>): Prisma__SpecialOfferClient<$Result.GetResult<Prisma.$SpecialOfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpecialOffer.
     * @param {SpecialOfferUpdateArgs} args - Arguments to update one SpecialOffer.
     * @example
     * // Update one SpecialOffer
     * const specialOffer = await prisma.specialOffer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialOfferUpdateArgs>(args: SelectSubset<T, SpecialOfferUpdateArgs<ExtArgs>>): Prisma__SpecialOfferClient<$Result.GetResult<Prisma.$SpecialOfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpecialOffers.
     * @param {SpecialOfferDeleteManyArgs} args - Arguments to filter SpecialOffers to delete.
     * @example
     * // Delete a few SpecialOffers
     * const { count } = await prisma.specialOffer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialOfferDeleteManyArgs>(args?: SelectSubset<T, SpecialOfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialOfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpecialOffers
     * const specialOffer = await prisma.specialOffer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialOfferUpdateManyArgs>(args: SelectSubset<T, SpecialOfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialOffers and returns the data updated in the database.
     * @param {SpecialOfferUpdateManyAndReturnArgs} args - Arguments to update many SpecialOffers.
     * @example
     * // Update many SpecialOffers
     * const specialOffer = await prisma.specialOffer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpecialOffers and only return the `id`
     * const specialOfferWithIdOnly = await prisma.specialOffer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecialOfferUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialOfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialOfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpecialOffer.
     * @param {SpecialOfferUpsertArgs} args - Arguments to update or create a SpecialOffer.
     * @example
     * // Update or create a SpecialOffer
     * const specialOffer = await prisma.specialOffer.upsert({
     *   create: {
     *     // ... data to create a SpecialOffer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpecialOffer we want to update
     *   }
     * })
     */
    upsert<T extends SpecialOfferUpsertArgs>(args: SelectSubset<T, SpecialOfferUpsertArgs<ExtArgs>>): Prisma__SpecialOfferClient<$Result.GetResult<Prisma.$SpecialOfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpecialOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialOfferCountArgs} args - Arguments to filter SpecialOffers to count.
     * @example
     * // Count the number of SpecialOffers
     * const count = await prisma.specialOffer.count({
     *   where: {
     *     // ... the filter for the SpecialOffers we want to count
     *   }
     * })
    **/
    count<T extends SpecialOfferCountArgs>(
      args?: Subset<T, SpecialOfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialOfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpecialOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialOfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecialOfferAggregateArgs>(args: Subset<T, SpecialOfferAggregateArgs>): Prisma.PrismaPromise<GetSpecialOfferAggregateType<T>>

    /**
     * Group by SpecialOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialOfferGroupByArgs} args - Group by arguments.
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
      T extends SpecialOfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialOfferGroupByArgs['orderBy'] }
        : { orderBy?: SpecialOfferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpecialOfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpecialOffer model
   */
  readonly fields: SpecialOfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpecialOffer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialOfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpecialOffer model
   */
  interface SpecialOfferFieldRefs {
    readonly id: FieldRef<"SpecialOffer", 'String'>
    readonly serviceSlug: FieldRef<"SpecialOffer", 'String'>
    readonly title: FieldRef<"SpecialOffer", 'String'>
    readonly badge: FieldRef<"SpecialOffer", 'String'>
    readonly description: FieldRef<"SpecialOffer", 'String'>
    readonly serviceId: FieldRef<"SpecialOffer", 'Int'>
    readonly quantity: FieldRef<"SpecialOffer", 'Int'>
    readonly price: FieldRef<"SpecialOffer", 'Float'>
    readonly active: FieldRef<"SpecialOffer", 'Boolean'>
    readonly createdAt: FieldRef<"SpecialOffer", 'DateTime'>
    readonly updatedAt: FieldRef<"SpecialOffer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpecialOffer findUnique
   */
  export type SpecialOfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialOffer
     */
    select?: SpecialOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialOffer
     */
    omit?: SpecialOfferOmit<ExtArgs> | null
    /**
     * Filter, which SpecialOffer to fetch.
     */
    where: SpecialOfferWhereUniqueInput
  }

  /**
   * SpecialOffer findUniqueOrThrow
   */
  export type SpecialOfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialOffer
     */
    select?: SpecialOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialOffer
     */
    omit?: SpecialOfferOmit<ExtArgs> | null
    /**
     * Filter, which SpecialOffer to fetch.
     */
    where: SpecialOfferWhereUniqueInput
  }

  /**
   * SpecialOffer findFirst
   */
  export type SpecialOfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialOffer
     */
    select?: SpecialOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialOffer
     */
    omit?: SpecialOfferOmit<ExtArgs> | null
    /**
     * Filter, which SpecialOffer to fetch.
     */
    where?: SpecialOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialOffers to fetch.
     */
    orderBy?: SpecialOfferOrderByWithRelationInput | SpecialOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialOffers.
     */
    cursor?: SpecialOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialOffers.
     */
    distinct?: SpecialOfferScalarFieldEnum | SpecialOfferScalarFieldEnum[]
  }

  /**
   * SpecialOffer findFirstOrThrow
   */
  export type SpecialOfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialOffer
     */
    select?: SpecialOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialOffer
     */
    omit?: SpecialOfferOmit<ExtArgs> | null
    /**
     * Filter, which SpecialOffer to fetch.
     */
    where?: SpecialOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialOffers to fetch.
     */
    orderBy?: SpecialOfferOrderByWithRelationInput | SpecialOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialOffers.
     */
    cursor?: SpecialOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialOffers.
     */
    distinct?: SpecialOfferScalarFieldEnum | SpecialOfferScalarFieldEnum[]
  }

  /**
   * SpecialOffer findMany
   */
  export type SpecialOfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialOffer
     */
    select?: SpecialOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialOffer
     */
    omit?: SpecialOfferOmit<ExtArgs> | null
    /**
     * Filter, which SpecialOffers to fetch.
     */
    where?: SpecialOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialOffers to fetch.
     */
    orderBy?: SpecialOfferOrderByWithRelationInput | SpecialOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpecialOffers.
     */
    cursor?: SpecialOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialOffers.
     */
    skip?: number
    distinct?: SpecialOfferScalarFieldEnum | SpecialOfferScalarFieldEnum[]
  }

  /**
   * SpecialOffer create
   */
  export type SpecialOfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialOffer
     */
    select?: SpecialOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialOffer
     */
    omit?: SpecialOfferOmit<ExtArgs> | null
    /**
     * The data needed to create a SpecialOffer.
     */
    data: XOR<SpecialOfferCreateInput, SpecialOfferUncheckedCreateInput>
  }

  /**
   * SpecialOffer createMany
   */
  export type SpecialOfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpecialOffers.
     */
    data: SpecialOfferCreateManyInput | SpecialOfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpecialOffer createManyAndReturn
   */
  export type SpecialOfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialOffer
     */
    select?: SpecialOfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialOffer
     */
    omit?: SpecialOfferOmit<ExtArgs> | null
    /**
     * The data used to create many SpecialOffers.
     */
    data: SpecialOfferCreateManyInput | SpecialOfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpecialOffer update
   */
  export type SpecialOfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialOffer
     */
    select?: SpecialOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialOffer
     */
    omit?: SpecialOfferOmit<ExtArgs> | null
    /**
     * The data needed to update a SpecialOffer.
     */
    data: XOR<SpecialOfferUpdateInput, SpecialOfferUncheckedUpdateInput>
    /**
     * Choose, which SpecialOffer to update.
     */
    where: SpecialOfferWhereUniqueInput
  }

  /**
   * SpecialOffer updateMany
   */
  export type SpecialOfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpecialOffers.
     */
    data: XOR<SpecialOfferUpdateManyMutationInput, SpecialOfferUncheckedUpdateManyInput>
    /**
     * Filter which SpecialOffers to update
     */
    where?: SpecialOfferWhereInput
    /**
     * Limit how many SpecialOffers to update.
     */
    limit?: number
  }

  /**
   * SpecialOffer updateManyAndReturn
   */
  export type SpecialOfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialOffer
     */
    select?: SpecialOfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialOffer
     */
    omit?: SpecialOfferOmit<ExtArgs> | null
    /**
     * The data used to update SpecialOffers.
     */
    data: XOR<SpecialOfferUpdateManyMutationInput, SpecialOfferUncheckedUpdateManyInput>
    /**
     * Filter which SpecialOffers to update
     */
    where?: SpecialOfferWhereInput
    /**
     * Limit how many SpecialOffers to update.
     */
    limit?: number
  }

  /**
   * SpecialOffer upsert
   */
  export type SpecialOfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialOffer
     */
    select?: SpecialOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialOffer
     */
    omit?: SpecialOfferOmit<ExtArgs> | null
    /**
     * The filter to search for the SpecialOffer to update in case it exists.
     */
    where: SpecialOfferWhereUniqueInput
    /**
     * In case the SpecialOffer found by the `where` argument doesn't exist, create a new SpecialOffer with this data.
     */
    create: XOR<SpecialOfferCreateInput, SpecialOfferUncheckedCreateInput>
    /**
     * In case the SpecialOffer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialOfferUpdateInput, SpecialOfferUncheckedUpdateInput>
  }

  /**
   * SpecialOffer delete
   */
  export type SpecialOfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialOffer
     */
    select?: SpecialOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialOffer
     */
    omit?: SpecialOfferOmit<ExtArgs> | null
    /**
     * Filter which SpecialOffer to delete.
     */
    where: SpecialOfferWhereUniqueInput
  }

  /**
   * SpecialOffer deleteMany
   */
  export type SpecialOfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialOffers to delete
     */
    where?: SpecialOfferWhereInput
    /**
     * Limit how many SpecialOffers to delete.
     */
    limit?: number
  }

  /**
   * SpecialOffer without action
   */
  export type SpecialOfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialOffer
     */
    select?: SpecialOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialOffer
     */
    omit?: SpecialOfferOmit<ExtArgs> | null
  }


  /**
   * Model Spend
   */

  export type AggregateSpend = {
    _count: SpendCountAggregateOutputType | null
    _avg: SpendAvgAggregateOutputType | null
    _sum: SpendSumAggregateOutputType | null
    _min: SpendMinAggregateOutputType | null
    _max: SpendMaxAggregateOutputType | null
  }

  export type SpendAvgAggregateOutputType = {
    amount: number | null
  }

  export type SpendSumAggregateOutputType = {
    amount: number | null
  }

  export type SpendMinAggregateOutputType = {
    id: string | null
    category: string | null
    amount: number | null
    note: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type SpendMaxAggregateOutputType = {
    id: string | null
    category: string | null
    amount: number | null
    note: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type SpendCountAggregateOutputType = {
    id: number
    category: number
    amount: number
    note: number
    date: number
    createdAt: number
    _all: number
  }


  export type SpendAvgAggregateInputType = {
    amount?: true
  }

  export type SpendSumAggregateInputType = {
    amount?: true
  }

  export type SpendMinAggregateInputType = {
    id?: true
    category?: true
    amount?: true
    note?: true
    date?: true
    createdAt?: true
  }

  export type SpendMaxAggregateInputType = {
    id?: true
    category?: true
    amount?: true
    note?: true
    date?: true
    createdAt?: true
  }

  export type SpendCountAggregateInputType = {
    id?: true
    category?: true
    amount?: true
    note?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type SpendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spend to aggregate.
     */
    where?: SpendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spends to fetch.
     */
    orderBy?: SpendOrderByWithRelationInput | SpendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Spends
    **/
    _count?: true | SpendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpendMaxAggregateInputType
  }

  export type GetSpendAggregateType<T extends SpendAggregateArgs> = {
        [P in keyof T & keyof AggregateSpend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpend[P]>
      : GetScalarType<T[P], AggregateSpend[P]>
  }




  export type SpendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpendWhereInput
    orderBy?: SpendOrderByWithAggregationInput | SpendOrderByWithAggregationInput[]
    by: SpendScalarFieldEnum[] | SpendScalarFieldEnum
    having?: SpendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpendCountAggregateInputType | true
    _avg?: SpendAvgAggregateInputType
    _sum?: SpendSumAggregateInputType
    _min?: SpendMinAggregateInputType
    _max?: SpendMaxAggregateInputType
  }

  export type SpendGroupByOutputType = {
    id: string
    category: string
    amount: number
    note: string | null
    date: Date
    createdAt: Date
    _count: SpendCountAggregateOutputType | null
    _avg: SpendAvgAggregateOutputType | null
    _sum: SpendSumAggregateOutputType | null
    _min: SpendMinAggregateOutputType | null
    _max: SpendMaxAggregateOutputType | null
  }

  type GetSpendGroupByPayload<T extends SpendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpendGroupByOutputType[P]>
            : GetScalarType<T[P], SpendGroupByOutputType[P]>
        }
      >
    >


  export type SpendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    amount?: boolean
    note?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["spend"]>

  export type SpendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    amount?: boolean
    note?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["spend"]>

  export type SpendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    amount?: boolean
    note?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["spend"]>

  export type SpendSelectScalar = {
    id?: boolean
    category?: boolean
    amount?: boolean
    note?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type SpendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "amount" | "note" | "date" | "createdAt", ExtArgs["result"]["spend"]>

  export type $SpendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Spend"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: string
      amount: number
      note: string | null
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["spend"]>
    composites: {}
  }

  type SpendGetPayload<S extends boolean | null | undefined | SpendDefaultArgs> = $Result.GetResult<Prisma.$SpendPayload, S>

  type SpendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpendCountAggregateInputType | true
    }

  export interface SpendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Spend'], meta: { name: 'Spend' } }
    /**
     * Find zero or one Spend that matches the filter.
     * @param {SpendFindUniqueArgs} args - Arguments to find a Spend
     * @example
     * // Get one Spend
     * const spend = await prisma.spend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpendFindUniqueArgs>(args: SelectSubset<T, SpendFindUniqueArgs<ExtArgs>>): Prisma__SpendClient<$Result.GetResult<Prisma.$SpendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpendFindUniqueOrThrowArgs} args - Arguments to find a Spend
     * @example
     * // Get one Spend
     * const spend = await prisma.spend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpendFindUniqueOrThrowArgs>(args: SelectSubset<T, SpendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpendClient<$Result.GetResult<Prisma.$SpendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendFindFirstArgs} args - Arguments to find a Spend
     * @example
     * // Get one Spend
     * const spend = await prisma.spend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpendFindFirstArgs>(args?: SelectSubset<T, SpendFindFirstArgs<ExtArgs>>): Prisma__SpendClient<$Result.GetResult<Prisma.$SpendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendFindFirstOrThrowArgs} args - Arguments to find a Spend
     * @example
     * // Get one Spend
     * const spend = await prisma.spend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpendFindFirstOrThrowArgs>(args?: SelectSubset<T, SpendFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpendClient<$Result.GetResult<Prisma.$SpendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spends
     * const spends = await prisma.spend.findMany()
     * 
     * // Get first 10 Spends
     * const spends = await prisma.spend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spendWithIdOnly = await prisma.spend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpendFindManyArgs>(args?: SelectSubset<T, SpendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spend.
     * @param {SpendCreateArgs} args - Arguments to create a Spend.
     * @example
     * // Create one Spend
     * const Spend = await prisma.spend.create({
     *   data: {
     *     // ... data to create a Spend
     *   }
     * })
     * 
     */
    create<T extends SpendCreateArgs>(args: SelectSubset<T, SpendCreateArgs<ExtArgs>>): Prisma__SpendClient<$Result.GetResult<Prisma.$SpendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spends.
     * @param {SpendCreateManyArgs} args - Arguments to create many Spends.
     * @example
     * // Create many Spends
     * const spend = await prisma.spend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpendCreateManyArgs>(args?: SelectSubset<T, SpendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spends and returns the data saved in the database.
     * @param {SpendCreateManyAndReturnArgs} args - Arguments to create many Spends.
     * @example
     * // Create many Spends
     * const spend = await prisma.spend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spends and only return the `id`
     * const spendWithIdOnly = await prisma.spend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpendCreateManyAndReturnArgs>(args?: SelectSubset<T, SpendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Spend.
     * @param {SpendDeleteArgs} args - Arguments to delete one Spend.
     * @example
     * // Delete one Spend
     * const Spend = await prisma.spend.delete({
     *   where: {
     *     // ... filter to delete one Spend
     *   }
     * })
     * 
     */
    delete<T extends SpendDeleteArgs>(args: SelectSubset<T, SpendDeleteArgs<ExtArgs>>): Prisma__SpendClient<$Result.GetResult<Prisma.$SpendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spend.
     * @param {SpendUpdateArgs} args - Arguments to update one Spend.
     * @example
     * // Update one Spend
     * const spend = await prisma.spend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpendUpdateArgs>(args: SelectSubset<T, SpendUpdateArgs<ExtArgs>>): Prisma__SpendClient<$Result.GetResult<Prisma.$SpendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spends.
     * @param {SpendDeleteManyArgs} args - Arguments to filter Spends to delete.
     * @example
     * // Delete a few Spends
     * const { count } = await prisma.spend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpendDeleteManyArgs>(args?: SelectSubset<T, SpendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spends
     * const spend = await prisma.spend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpendUpdateManyArgs>(args: SelectSubset<T, SpendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spends and returns the data updated in the database.
     * @param {SpendUpdateManyAndReturnArgs} args - Arguments to update many Spends.
     * @example
     * // Update many Spends
     * const spend = await prisma.spend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spends and only return the `id`
     * const spendWithIdOnly = await prisma.spend.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpendUpdateManyAndReturnArgs>(args: SelectSubset<T, SpendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Spend.
     * @param {SpendUpsertArgs} args - Arguments to update or create a Spend.
     * @example
     * // Update or create a Spend
     * const spend = await prisma.spend.upsert({
     *   create: {
     *     // ... data to create a Spend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spend we want to update
     *   }
     * })
     */
    upsert<T extends SpendUpsertArgs>(args: SelectSubset<T, SpendUpsertArgs<ExtArgs>>): Prisma__SpendClient<$Result.GetResult<Prisma.$SpendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendCountArgs} args - Arguments to filter Spends to count.
     * @example
     * // Count the number of Spends
     * const count = await prisma.spend.count({
     *   where: {
     *     // ... the filter for the Spends we want to count
     *   }
     * })
    **/
    count<T extends SpendCountArgs>(
      args?: Subset<T, SpendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpendAggregateArgs>(args: Subset<T, SpendAggregateArgs>): Prisma.PrismaPromise<GetSpendAggregateType<T>>

    /**
     * Group by Spend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendGroupByArgs} args - Group by arguments.
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
      T extends SpendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpendGroupByArgs['orderBy'] }
        : { orderBy?: SpendGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Spend model
   */
  readonly fields: SpendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Spend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Spend model
   */
  interface SpendFieldRefs {
    readonly id: FieldRef<"Spend", 'String'>
    readonly category: FieldRef<"Spend", 'String'>
    readonly amount: FieldRef<"Spend", 'Float'>
    readonly note: FieldRef<"Spend", 'String'>
    readonly date: FieldRef<"Spend", 'DateTime'>
    readonly createdAt: FieldRef<"Spend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Spend findUnique
   */
  export type SpendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spend
     */
    select?: SpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spend
     */
    omit?: SpendOmit<ExtArgs> | null
    /**
     * Filter, which Spend to fetch.
     */
    where: SpendWhereUniqueInput
  }

  /**
   * Spend findUniqueOrThrow
   */
  export type SpendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spend
     */
    select?: SpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spend
     */
    omit?: SpendOmit<ExtArgs> | null
    /**
     * Filter, which Spend to fetch.
     */
    where: SpendWhereUniqueInput
  }

  /**
   * Spend findFirst
   */
  export type SpendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spend
     */
    select?: SpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spend
     */
    omit?: SpendOmit<ExtArgs> | null
    /**
     * Filter, which Spend to fetch.
     */
    where?: SpendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spends to fetch.
     */
    orderBy?: SpendOrderByWithRelationInput | SpendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spends.
     */
    cursor?: SpendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spends.
     */
    distinct?: SpendScalarFieldEnum | SpendScalarFieldEnum[]
  }

  /**
   * Spend findFirstOrThrow
   */
  export type SpendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spend
     */
    select?: SpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spend
     */
    omit?: SpendOmit<ExtArgs> | null
    /**
     * Filter, which Spend to fetch.
     */
    where?: SpendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spends to fetch.
     */
    orderBy?: SpendOrderByWithRelationInput | SpendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spends.
     */
    cursor?: SpendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spends.
     */
    distinct?: SpendScalarFieldEnum | SpendScalarFieldEnum[]
  }

  /**
   * Spend findMany
   */
  export type SpendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spend
     */
    select?: SpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spend
     */
    omit?: SpendOmit<ExtArgs> | null
    /**
     * Filter, which Spends to fetch.
     */
    where?: SpendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spends to fetch.
     */
    orderBy?: SpendOrderByWithRelationInput | SpendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Spends.
     */
    cursor?: SpendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spends.
     */
    skip?: number
    distinct?: SpendScalarFieldEnum | SpendScalarFieldEnum[]
  }

  /**
   * Spend create
   */
  export type SpendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spend
     */
    select?: SpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spend
     */
    omit?: SpendOmit<ExtArgs> | null
    /**
     * The data needed to create a Spend.
     */
    data: XOR<SpendCreateInput, SpendUncheckedCreateInput>
  }

  /**
   * Spend createMany
   */
  export type SpendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Spends.
     */
    data: SpendCreateManyInput | SpendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Spend createManyAndReturn
   */
  export type SpendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spend
     */
    select?: SpendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Spend
     */
    omit?: SpendOmit<ExtArgs> | null
    /**
     * The data used to create many Spends.
     */
    data: SpendCreateManyInput | SpendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Spend update
   */
  export type SpendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spend
     */
    select?: SpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spend
     */
    omit?: SpendOmit<ExtArgs> | null
    /**
     * The data needed to update a Spend.
     */
    data: XOR<SpendUpdateInput, SpendUncheckedUpdateInput>
    /**
     * Choose, which Spend to update.
     */
    where: SpendWhereUniqueInput
  }

  /**
   * Spend updateMany
   */
  export type SpendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Spends.
     */
    data: XOR<SpendUpdateManyMutationInput, SpendUncheckedUpdateManyInput>
    /**
     * Filter which Spends to update
     */
    where?: SpendWhereInput
    /**
     * Limit how many Spends to update.
     */
    limit?: number
  }

  /**
   * Spend updateManyAndReturn
   */
  export type SpendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spend
     */
    select?: SpendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Spend
     */
    omit?: SpendOmit<ExtArgs> | null
    /**
     * The data used to update Spends.
     */
    data: XOR<SpendUpdateManyMutationInput, SpendUncheckedUpdateManyInput>
    /**
     * Filter which Spends to update
     */
    where?: SpendWhereInput
    /**
     * Limit how many Spends to update.
     */
    limit?: number
  }

  /**
   * Spend upsert
   */
  export type SpendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spend
     */
    select?: SpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spend
     */
    omit?: SpendOmit<ExtArgs> | null
    /**
     * The filter to search for the Spend to update in case it exists.
     */
    where: SpendWhereUniqueInput
    /**
     * In case the Spend found by the `where` argument doesn't exist, create a new Spend with this data.
     */
    create: XOR<SpendCreateInput, SpendUncheckedCreateInput>
    /**
     * In case the Spend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpendUpdateInput, SpendUncheckedUpdateInput>
  }

  /**
   * Spend delete
   */
  export type SpendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spend
     */
    select?: SpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spend
     */
    omit?: SpendOmit<ExtArgs> | null
    /**
     * Filter which Spend to delete.
     */
    where: SpendWhereUniqueInput
  }

  /**
   * Spend deleteMany
   */
  export type SpendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spends to delete
     */
    where?: SpendWhereInput
    /**
     * Limit how many Spends to delete.
     */
    limit?: number
  }

  /**
   * Spend without action
   */
  export type SpendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spend
     */
    select?: SpendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spend
     */
    omit?: SpendOmit<ExtArgs> | null
  }


  /**
   * Model AdminAccount
   */

  export type AggregateAdminAccount = {
    _count: AdminAccountCountAggregateOutputType | null
    _min: AdminAccountMinAggregateOutputType | null
    _max: AdminAccountMaxAggregateOutputType | null
  }

  export type AdminAccountMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.AdminRole | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminAccountMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.AdminRole | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminAccountCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAccountMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminAccountMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminAccountCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminAccount to aggregate.
     */
    where?: AdminAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAccounts to fetch.
     */
    orderBy?: AdminAccountOrderByWithRelationInput | AdminAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminAccounts
    **/
    _count?: true | AdminAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminAccountMaxAggregateInputType
  }

  export type GetAdminAccountAggregateType<T extends AdminAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminAccount[P]>
      : GetScalarType<T[P], AggregateAdminAccount[P]>
  }




  export type AdminAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminAccountWhereInput
    orderBy?: AdminAccountOrderByWithAggregationInput | AdminAccountOrderByWithAggregationInput[]
    by: AdminAccountScalarFieldEnum[] | AdminAccountScalarFieldEnum
    having?: AdminAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminAccountCountAggregateInputType | true
    _min?: AdminAccountMinAggregateInputType
    _max?: AdminAccountMaxAggregateInputType
  }

  export type AdminAccountGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    role: $Enums.AdminRole
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdminAccountCountAggregateOutputType | null
    _min: AdminAccountMinAggregateOutputType | null
    _max: AdminAccountMaxAggregateOutputType | null
  }

  type GetAdminAccountGroupByPayload<T extends AdminAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminAccountGroupByOutputType[P]>
            : GetScalarType<T[P], AdminAccountGroupByOutputType[P]>
        }
      >
    >


  export type AdminAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminAccount"]>

  export type AdminAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminAccount"]>

  export type AdminAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminAccount"]>

  export type AdminAccountSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["adminAccount"]>

  export type $AdminAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminAccount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      role: $Enums.AdminRole
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminAccount"]>
    composites: {}
  }

  type AdminAccountGetPayload<S extends boolean | null | undefined | AdminAccountDefaultArgs> = $Result.GetResult<Prisma.$AdminAccountPayload, S>

  type AdminAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminAccountCountAggregateInputType | true
    }

  export interface AdminAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminAccount'], meta: { name: 'AdminAccount' } }
    /**
     * Find zero or one AdminAccount that matches the filter.
     * @param {AdminAccountFindUniqueArgs} args - Arguments to find a AdminAccount
     * @example
     * // Get one AdminAccount
     * const adminAccount = await prisma.adminAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminAccountFindUniqueArgs>(args: SelectSubset<T, AdminAccountFindUniqueArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminAccountFindUniqueOrThrowArgs} args - Arguments to find a AdminAccount
     * @example
     * // Get one AdminAccount
     * const adminAccount = await prisma.adminAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAccountFindFirstArgs} args - Arguments to find a AdminAccount
     * @example
     * // Get one AdminAccount
     * const adminAccount = await prisma.adminAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminAccountFindFirstArgs>(args?: SelectSubset<T, AdminAccountFindFirstArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAccountFindFirstOrThrowArgs} args - Arguments to find a AdminAccount
     * @example
     * // Get one AdminAccount
     * const adminAccount = await prisma.adminAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminAccounts
     * const adminAccounts = await prisma.adminAccount.findMany()
     * 
     * // Get first 10 AdminAccounts
     * const adminAccounts = await prisma.adminAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminAccountWithIdOnly = await prisma.adminAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminAccountFindManyArgs>(args?: SelectSubset<T, AdminAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminAccount.
     * @param {AdminAccountCreateArgs} args - Arguments to create a AdminAccount.
     * @example
     * // Create one AdminAccount
     * const AdminAccount = await prisma.adminAccount.create({
     *   data: {
     *     // ... data to create a AdminAccount
     *   }
     * })
     * 
     */
    create<T extends AdminAccountCreateArgs>(args: SelectSubset<T, AdminAccountCreateArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminAccounts.
     * @param {AdminAccountCreateManyArgs} args - Arguments to create many AdminAccounts.
     * @example
     * // Create many AdminAccounts
     * const adminAccount = await prisma.adminAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminAccountCreateManyArgs>(args?: SelectSubset<T, AdminAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminAccounts and returns the data saved in the database.
     * @param {AdminAccountCreateManyAndReturnArgs} args - Arguments to create many AdminAccounts.
     * @example
     * // Create many AdminAccounts
     * const adminAccount = await prisma.adminAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminAccounts and only return the `id`
     * const adminAccountWithIdOnly = await prisma.adminAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminAccount.
     * @param {AdminAccountDeleteArgs} args - Arguments to delete one AdminAccount.
     * @example
     * // Delete one AdminAccount
     * const AdminAccount = await prisma.adminAccount.delete({
     *   where: {
     *     // ... filter to delete one AdminAccount
     *   }
     * })
     * 
     */
    delete<T extends AdminAccountDeleteArgs>(args: SelectSubset<T, AdminAccountDeleteArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminAccount.
     * @param {AdminAccountUpdateArgs} args - Arguments to update one AdminAccount.
     * @example
     * // Update one AdminAccount
     * const adminAccount = await prisma.adminAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminAccountUpdateArgs>(args: SelectSubset<T, AdminAccountUpdateArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminAccounts.
     * @param {AdminAccountDeleteManyArgs} args - Arguments to filter AdminAccounts to delete.
     * @example
     * // Delete a few AdminAccounts
     * const { count } = await prisma.adminAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminAccountDeleteManyArgs>(args?: SelectSubset<T, AdminAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminAccounts
     * const adminAccount = await prisma.adminAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminAccountUpdateManyArgs>(args: SelectSubset<T, AdminAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminAccounts and returns the data updated in the database.
     * @param {AdminAccountUpdateManyAndReturnArgs} args - Arguments to update many AdminAccounts.
     * @example
     * // Update many AdminAccounts
     * const adminAccount = await prisma.adminAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminAccounts and only return the `id`
     * const adminAccountWithIdOnly = await prisma.adminAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminAccount.
     * @param {AdminAccountUpsertArgs} args - Arguments to update or create a AdminAccount.
     * @example
     * // Update or create a AdminAccount
     * const adminAccount = await prisma.adminAccount.upsert({
     *   create: {
     *     // ... data to create a AdminAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminAccount we want to update
     *   }
     * })
     */
    upsert<T extends AdminAccountUpsertArgs>(args: SelectSubset<T, AdminAccountUpsertArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAccountCountArgs} args - Arguments to filter AdminAccounts to count.
     * @example
     * // Count the number of AdminAccounts
     * const count = await prisma.adminAccount.count({
     *   where: {
     *     // ... the filter for the AdminAccounts we want to count
     *   }
     * })
    **/
    count<T extends AdminAccountCountArgs>(
      args?: Subset<T, AdminAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAccountAggregateArgs>(args: Subset<T, AdminAccountAggregateArgs>): Prisma.PrismaPromise<GetAdminAccountAggregateType<T>>

    /**
     * Group by AdminAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAccountGroupByArgs} args - Group by arguments.
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
      T extends AdminAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminAccountGroupByArgs['orderBy'] }
        : { orderBy?: AdminAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminAccount model
   */
  readonly fields: AdminAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminAccount model
   */
  interface AdminAccountFieldRefs {
    readonly id: FieldRef<"AdminAccount", 'String'>
    readonly email: FieldRef<"AdminAccount", 'String'>
    readonly passwordHash: FieldRef<"AdminAccount", 'String'>
    readonly role: FieldRef<"AdminAccount", 'AdminRole'>
    readonly name: FieldRef<"AdminAccount", 'String'>
    readonly createdAt: FieldRef<"AdminAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminAccount findUnique
   */
  export type AdminAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Filter, which AdminAccount to fetch.
     */
    where: AdminAccountWhereUniqueInput
  }

  /**
   * AdminAccount findUniqueOrThrow
   */
  export type AdminAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Filter, which AdminAccount to fetch.
     */
    where: AdminAccountWhereUniqueInput
  }

  /**
   * AdminAccount findFirst
   */
  export type AdminAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Filter, which AdminAccount to fetch.
     */
    where?: AdminAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAccounts to fetch.
     */
    orderBy?: AdminAccountOrderByWithRelationInput | AdminAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminAccounts.
     */
    cursor?: AdminAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminAccounts.
     */
    distinct?: AdminAccountScalarFieldEnum | AdminAccountScalarFieldEnum[]
  }

  /**
   * AdminAccount findFirstOrThrow
   */
  export type AdminAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Filter, which AdminAccount to fetch.
     */
    where?: AdminAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAccounts to fetch.
     */
    orderBy?: AdminAccountOrderByWithRelationInput | AdminAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminAccounts.
     */
    cursor?: AdminAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminAccounts.
     */
    distinct?: AdminAccountScalarFieldEnum | AdminAccountScalarFieldEnum[]
  }

  /**
   * AdminAccount findMany
   */
  export type AdminAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Filter, which AdminAccounts to fetch.
     */
    where?: AdminAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAccounts to fetch.
     */
    orderBy?: AdminAccountOrderByWithRelationInput | AdminAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminAccounts.
     */
    cursor?: AdminAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAccounts.
     */
    skip?: number
    distinct?: AdminAccountScalarFieldEnum | AdminAccountScalarFieldEnum[]
  }

  /**
   * AdminAccount create
   */
  export type AdminAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminAccount.
     */
    data: XOR<AdminAccountCreateInput, AdminAccountUncheckedCreateInput>
  }

  /**
   * AdminAccount createMany
   */
  export type AdminAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminAccounts.
     */
    data: AdminAccountCreateManyInput | AdminAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminAccount createManyAndReturn
   */
  export type AdminAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * The data used to create many AdminAccounts.
     */
    data: AdminAccountCreateManyInput | AdminAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminAccount update
   */
  export type AdminAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminAccount.
     */
    data: XOR<AdminAccountUpdateInput, AdminAccountUncheckedUpdateInput>
    /**
     * Choose, which AdminAccount to update.
     */
    where: AdminAccountWhereUniqueInput
  }

  /**
   * AdminAccount updateMany
   */
  export type AdminAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminAccounts.
     */
    data: XOR<AdminAccountUpdateManyMutationInput, AdminAccountUncheckedUpdateManyInput>
    /**
     * Filter which AdminAccounts to update
     */
    where?: AdminAccountWhereInput
    /**
     * Limit how many AdminAccounts to update.
     */
    limit?: number
  }

  /**
   * AdminAccount updateManyAndReturn
   */
  export type AdminAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * The data used to update AdminAccounts.
     */
    data: XOR<AdminAccountUpdateManyMutationInput, AdminAccountUncheckedUpdateManyInput>
    /**
     * Filter which AdminAccounts to update
     */
    where?: AdminAccountWhereInput
    /**
     * Limit how many AdminAccounts to update.
     */
    limit?: number
  }

  /**
   * AdminAccount upsert
   */
  export type AdminAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminAccount to update in case it exists.
     */
    where: AdminAccountWhereUniqueInput
    /**
     * In case the AdminAccount found by the `where` argument doesn't exist, create a new AdminAccount with this data.
     */
    create: XOR<AdminAccountCreateInput, AdminAccountUncheckedCreateInput>
    /**
     * In case the AdminAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminAccountUpdateInput, AdminAccountUncheckedUpdateInput>
  }

  /**
   * AdminAccount delete
   */
  export type AdminAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Filter which AdminAccount to delete.
     */
    where: AdminAccountWhereUniqueInput
  }

  /**
   * AdminAccount deleteMany
   */
  export type AdminAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminAccounts to delete
     */
    where?: AdminAccountWhereInput
    /**
     * Limit how many AdminAccounts to delete.
     */
    limit?: number
  }

  /**
   * AdminAccount without action
   */
  export type AdminAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
  }


  /**
   * Model SmmConfig
   */

  export type AggregateSmmConfig = {
    _count: SmmConfigCountAggregateOutputType | null
    _min: SmmConfigMinAggregateOutputType | null
    _max: SmmConfigMaxAggregateOutputType | null
  }

  export type SmmConfigMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    url: string | null
    apiKey: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SmmConfigMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    url: string | null
    apiKey: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SmmConfigCountAggregateOutputType = {
    id: number
    name: number
    type: number
    url: number
    apiKey: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SmmConfigMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    url?: true
    apiKey?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SmmConfigMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    url?: true
    apiKey?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SmmConfigCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    url?: true
    apiKey?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SmmConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmmConfig to aggregate.
     */
    where?: SmmConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmmConfigs to fetch.
     */
    orderBy?: SmmConfigOrderByWithRelationInput | SmmConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SmmConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmmConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmmConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SmmConfigs
    **/
    _count?: true | SmmConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SmmConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SmmConfigMaxAggregateInputType
  }

  export type GetSmmConfigAggregateType<T extends SmmConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSmmConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSmmConfig[P]>
      : GetScalarType<T[P], AggregateSmmConfig[P]>
  }




  export type SmmConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SmmConfigWhereInput
    orderBy?: SmmConfigOrderByWithAggregationInput | SmmConfigOrderByWithAggregationInput[]
    by: SmmConfigScalarFieldEnum[] | SmmConfigScalarFieldEnum
    having?: SmmConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SmmConfigCountAggregateInputType | true
    _min?: SmmConfigMinAggregateInputType
    _max?: SmmConfigMaxAggregateInputType
  }

  export type SmmConfigGroupByOutputType = {
    id: string
    name: string
    type: string
    url: string
    apiKey: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SmmConfigCountAggregateOutputType | null
    _min: SmmConfigMinAggregateOutputType | null
    _max: SmmConfigMaxAggregateOutputType | null
  }

  type GetSmmConfigGroupByPayload<T extends SmmConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SmmConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SmmConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SmmConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SmmConfigGroupByOutputType[P]>
        }
      >
    >


  export type SmmConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
    apiKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["smmConfig"]>

  export type SmmConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
    apiKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["smmConfig"]>

  export type SmmConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
    apiKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["smmConfig"]>

  export type SmmConfigSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
    apiKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SmmConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "url" | "apiKey" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["smmConfig"]>

  export type $SmmConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SmmConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      url: string
      apiKey: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["smmConfig"]>
    composites: {}
  }

  type SmmConfigGetPayload<S extends boolean | null | undefined | SmmConfigDefaultArgs> = $Result.GetResult<Prisma.$SmmConfigPayload, S>

  type SmmConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SmmConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SmmConfigCountAggregateInputType | true
    }

  export interface SmmConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SmmConfig'], meta: { name: 'SmmConfig' } }
    /**
     * Find zero or one SmmConfig that matches the filter.
     * @param {SmmConfigFindUniqueArgs} args - Arguments to find a SmmConfig
     * @example
     * // Get one SmmConfig
     * const smmConfig = await prisma.smmConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SmmConfigFindUniqueArgs>(args: SelectSubset<T, SmmConfigFindUniqueArgs<ExtArgs>>): Prisma__SmmConfigClient<$Result.GetResult<Prisma.$SmmConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SmmConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SmmConfigFindUniqueOrThrowArgs} args - Arguments to find a SmmConfig
     * @example
     * // Get one SmmConfig
     * const smmConfig = await prisma.smmConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SmmConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SmmConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SmmConfigClient<$Result.GetResult<Prisma.$SmmConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SmmConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmmConfigFindFirstArgs} args - Arguments to find a SmmConfig
     * @example
     * // Get one SmmConfig
     * const smmConfig = await prisma.smmConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SmmConfigFindFirstArgs>(args?: SelectSubset<T, SmmConfigFindFirstArgs<ExtArgs>>): Prisma__SmmConfigClient<$Result.GetResult<Prisma.$SmmConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SmmConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmmConfigFindFirstOrThrowArgs} args - Arguments to find a SmmConfig
     * @example
     * // Get one SmmConfig
     * const smmConfig = await prisma.smmConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SmmConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SmmConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SmmConfigClient<$Result.GetResult<Prisma.$SmmConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SmmConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmmConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SmmConfigs
     * const smmConfigs = await prisma.smmConfig.findMany()
     * 
     * // Get first 10 SmmConfigs
     * const smmConfigs = await prisma.smmConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const smmConfigWithIdOnly = await prisma.smmConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SmmConfigFindManyArgs>(args?: SelectSubset<T, SmmConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmmConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SmmConfig.
     * @param {SmmConfigCreateArgs} args - Arguments to create a SmmConfig.
     * @example
     * // Create one SmmConfig
     * const SmmConfig = await prisma.smmConfig.create({
     *   data: {
     *     // ... data to create a SmmConfig
     *   }
     * })
     * 
     */
    create<T extends SmmConfigCreateArgs>(args: SelectSubset<T, SmmConfigCreateArgs<ExtArgs>>): Prisma__SmmConfigClient<$Result.GetResult<Prisma.$SmmConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SmmConfigs.
     * @param {SmmConfigCreateManyArgs} args - Arguments to create many SmmConfigs.
     * @example
     * // Create many SmmConfigs
     * const smmConfig = await prisma.smmConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SmmConfigCreateManyArgs>(args?: SelectSubset<T, SmmConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SmmConfigs and returns the data saved in the database.
     * @param {SmmConfigCreateManyAndReturnArgs} args - Arguments to create many SmmConfigs.
     * @example
     * // Create many SmmConfigs
     * const smmConfig = await prisma.smmConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SmmConfigs and only return the `id`
     * const smmConfigWithIdOnly = await prisma.smmConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SmmConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SmmConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmmConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SmmConfig.
     * @param {SmmConfigDeleteArgs} args - Arguments to delete one SmmConfig.
     * @example
     * // Delete one SmmConfig
     * const SmmConfig = await prisma.smmConfig.delete({
     *   where: {
     *     // ... filter to delete one SmmConfig
     *   }
     * })
     * 
     */
    delete<T extends SmmConfigDeleteArgs>(args: SelectSubset<T, SmmConfigDeleteArgs<ExtArgs>>): Prisma__SmmConfigClient<$Result.GetResult<Prisma.$SmmConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SmmConfig.
     * @param {SmmConfigUpdateArgs} args - Arguments to update one SmmConfig.
     * @example
     * // Update one SmmConfig
     * const smmConfig = await prisma.smmConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SmmConfigUpdateArgs>(args: SelectSubset<T, SmmConfigUpdateArgs<ExtArgs>>): Prisma__SmmConfigClient<$Result.GetResult<Prisma.$SmmConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SmmConfigs.
     * @param {SmmConfigDeleteManyArgs} args - Arguments to filter SmmConfigs to delete.
     * @example
     * // Delete a few SmmConfigs
     * const { count } = await prisma.smmConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SmmConfigDeleteManyArgs>(args?: SelectSubset<T, SmmConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmmConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmmConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SmmConfigs
     * const smmConfig = await prisma.smmConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SmmConfigUpdateManyArgs>(args: SelectSubset<T, SmmConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmmConfigs and returns the data updated in the database.
     * @param {SmmConfigUpdateManyAndReturnArgs} args - Arguments to update many SmmConfigs.
     * @example
     * // Update many SmmConfigs
     * const smmConfig = await prisma.smmConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SmmConfigs and only return the `id`
     * const smmConfigWithIdOnly = await prisma.smmConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SmmConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, SmmConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmmConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SmmConfig.
     * @param {SmmConfigUpsertArgs} args - Arguments to update or create a SmmConfig.
     * @example
     * // Update or create a SmmConfig
     * const smmConfig = await prisma.smmConfig.upsert({
     *   create: {
     *     // ... data to create a SmmConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SmmConfig we want to update
     *   }
     * })
     */
    upsert<T extends SmmConfigUpsertArgs>(args: SelectSubset<T, SmmConfigUpsertArgs<ExtArgs>>): Prisma__SmmConfigClient<$Result.GetResult<Prisma.$SmmConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SmmConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmmConfigCountArgs} args - Arguments to filter SmmConfigs to count.
     * @example
     * // Count the number of SmmConfigs
     * const count = await prisma.smmConfig.count({
     *   where: {
     *     // ... the filter for the SmmConfigs we want to count
     *   }
     * })
    **/
    count<T extends SmmConfigCountArgs>(
      args?: Subset<T, SmmConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SmmConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SmmConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmmConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SmmConfigAggregateArgs>(args: Subset<T, SmmConfigAggregateArgs>): Prisma.PrismaPromise<GetSmmConfigAggregateType<T>>

    /**
     * Group by SmmConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmmConfigGroupByArgs} args - Group by arguments.
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
      T extends SmmConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SmmConfigGroupByArgs['orderBy'] }
        : { orderBy?: SmmConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SmmConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmmConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SmmConfig model
   */
  readonly fields: SmmConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SmmConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SmmConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SmmConfig model
   */
  interface SmmConfigFieldRefs {
    readonly id: FieldRef<"SmmConfig", 'String'>
    readonly name: FieldRef<"SmmConfig", 'String'>
    readonly type: FieldRef<"SmmConfig", 'String'>
    readonly url: FieldRef<"SmmConfig", 'String'>
    readonly apiKey: FieldRef<"SmmConfig", 'String'>
    readonly isActive: FieldRef<"SmmConfig", 'Boolean'>
    readonly createdAt: FieldRef<"SmmConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"SmmConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SmmConfig findUnique
   */
  export type SmmConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmConfig
     */
    select?: SmmConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmConfig
     */
    omit?: SmmConfigOmit<ExtArgs> | null
    /**
     * Filter, which SmmConfig to fetch.
     */
    where: SmmConfigWhereUniqueInput
  }

  /**
   * SmmConfig findUniqueOrThrow
   */
  export type SmmConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmConfig
     */
    select?: SmmConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmConfig
     */
    omit?: SmmConfigOmit<ExtArgs> | null
    /**
     * Filter, which SmmConfig to fetch.
     */
    where: SmmConfigWhereUniqueInput
  }

  /**
   * SmmConfig findFirst
   */
  export type SmmConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmConfig
     */
    select?: SmmConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmConfig
     */
    omit?: SmmConfigOmit<ExtArgs> | null
    /**
     * Filter, which SmmConfig to fetch.
     */
    where?: SmmConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmmConfigs to fetch.
     */
    orderBy?: SmmConfigOrderByWithRelationInput | SmmConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmmConfigs.
     */
    cursor?: SmmConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmmConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmmConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmmConfigs.
     */
    distinct?: SmmConfigScalarFieldEnum | SmmConfigScalarFieldEnum[]
  }

  /**
   * SmmConfig findFirstOrThrow
   */
  export type SmmConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmConfig
     */
    select?: SmmConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmConfig
     */
    omit?: SmmConfigOmit<ExtArgs> | null
    /**
     * Filter, which SmmConfig to fetch.
     */
    where?: SmmConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmmConfigs to fetch.
     */
    orderBy?: SmmConfigOrderByWithRelationInput | SmmConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmmConfigs.
     */
    cursor?: SmmConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmmConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmmConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmmConfigs.
     */
    distinct?: SmmConfigScalarFieldEnum | SmmConfigScalarFieldEnum[]
  }

  /**
   * SmmConfig findMany
   */
  export type SmmConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmConfig
     */
    select?: SmmConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmConfig
     */
    omit?: SmmConfigOmit<ExtArgs> | null
    /**
     * Filter, which SmmConfigs to fetch.
     */
    where?: SmmConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmmConfigs to fetch.
     */
    orderBy?: SmmConfigOrderByWithRelationInput | SmmConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SmmConfigs.
     */
    cursor?: SmmConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmmConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmmConfigs.
     */
    skip?: number
    distinct?: SmmConfigScalarFieldEnum | SmmConfigScalarFieldEnum[]
  }

  /**
   * SmmConfig create
   */
  export type SmmConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmConfig
     */
    select?: SmmConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmConfig
     */
    omit?: SmmConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a SmmConfig.
     */
    data: XOR<SmmConfigCreateInput, SmmConfigUncheckedCreateInput>
  }

  /**
   * SmmConfig createMany
   */
  export type SmmConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SmmConfigs.
     */
    data: SmmConfigCreateManyInput | SmmConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SmmConfig createManyAndReturn
   */
  export type SmmConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmConfig
     */
    select?: SmmConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SmmConfig
     */
    omit?: SmmConfigOmit<ExtArgs> | null
    /**
     * The data used to create many SmmConfigs.
     */
    data: SmmConfigCreateManyInput | SmmConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SmmConfig update
   */
  export type SmmConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmConfig
     */
    select?: SmmConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmConfig
     */
    omit?: SmmConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a SmmConfig.
     */
    data: XOR<SmmConfigUpdateInput, SmmConfigUncheckedUpdateInput>
    /**
     * Choose, which SmmConfig to update.
     */
    where: SmmConfigWhereUniqueInput
  }

  /**
   * SmmConfig updateMany
   */
  export type SmmConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SmmConfigs.
     */
    data: XOR<SmmConfigUpdateManyMutationInput, SmmConfigUncheckedUpdateManyInput>
    /**
     * Filter which SmmConfigs to update
     */
    where?: SmmConfigWhereInput
    /**
     * Limit how many SmmConfigs to update.
     */
    limit?: number
  }

  /**
   * SmmConfig updateManyAndReturn
   */
  export type SmmConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmConfig
     */
    select?: SmmConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SmmConfig
     */
    omit?: SmmConfigOmit<ExtArgs> | null
    /**
     * The data used to update SmmConfigs.
     */
    data: XOR<SmmConfigUpdateManyMutationInput, SmmConfigUncheckedUpdateManyInput>
    /**
     * Filter which SmmConfigs to update
     */
    where?: SmmConfigWhereInput
    /**
     * Limit how many SmmConfigs to update.
     */
    limit?: number
  }

  /**
   * SmmConfig upsert
   */
  export type SmmConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmConfig
     */
    select?: SmmConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmConfig
     */
    omit?: SmmConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the SmmConfig to update in case it exists.
     */
    where: SmmConfigWhereUniqueInput
    /**
     * In case the SmmConfig found by the `where` argument doesn't exist, create a new SmmConfig with this data.
     */
    create: XOR<SmmConfigCreateInput, SmmConfigUncheckedCreateInput>
    /**
     * In case the SmmConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SmmConfigUpdateInput, SmmConfigUncheckedUpdateInput>
  }

  /**
   * SmmConfig delete
   */
  export type SmmConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmConfig
     */
    select?: SmmConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmConfig
     */
    omit?: SmmConfigOmit<ExtArgs> | null
    /**
     * Filter which SmmConfig to delete.
     */
    where: SmmConfigWhereUniqueInput
  }

  /**
   * SmmConfig deleteMany
   */
  export type SmmConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmmConfigs to delete
     */
    where?: SmmConfigWhereInput
    /**
     * Limit how many SmmConfigs to delete.
     */
    limit?: number
  }

  /**
   * SmmConfig without action
   */
  export type SmmConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmmConfig
     */
    select?: SmmConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmmConfig
     */
    omit?: SmmConfigOmit<ExtArgs> | null
  }


  /**
   * Model ApprovedGroup
   */

  export type AggregateApprovedGroup = {
    _count: ApprovedGroupCountAggregateOutputType | null
    _min: ApprovedGroupMinAggregateOutputType | null
    _max: ApprovedGroupMaxAggregateOutputType | null
  }

  export type ApprovedGroupMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    title: string | null
    createdAt: Date | null
  }

  export type ApprovedGroupMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    title: string | null
    createdAt: Date | null
  }

  export type ApprovedGroupCountAggregateOutputType = {
    id: number
    chatId: number
    title: number
    createdAt: number
    _all: number
  }


  export type ApprovedGroupMinAggregateInputType = {
    id?: true
    chatId?: true
    title?: true
    createdAt?: true
  }

  export type ApprovedGroupMaxAggregateInputType = {
    id?: true
    chatId?: true
    title?: true
    createdAt?: true
  }

  export type ApprovedGroupCountAggregateInputType = {
    id?: true
    chatId?: true
    title?: true
    createdAt?: true
    _all?: true
  }

  export type ApprovedGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovedGroup to aggregate.
     */
    where?: ApprovedGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovedGroups to fetch.
     */
    orderBy?: ApprovedGroupOrderByWithRelationInput | ApprovedGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovedGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovedGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovedGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApprovedGroups
    **/
    _count?: true | ApprovedGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovedGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovedGroupMaxAggregateInputType
  }

  export type GetApprovedGroupAggregateType<T extends ApprovedGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateApprovedGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApprovedGroup[P]>
      : GetScalarType<T[P], AggregateApprovedGroup[P]>
  }




  export type ApprovedGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovedGroupWhereInput
    orderBy?: ApprovedGroupOrderByWithAggregationInput | ApprovedGroupOrderByWithAggregationInput[]
    by: ApprovedGroupScalarFieldEnum[] | ApprovedGroupScalarFieldEnum
    having?: ApprovedGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovedGroupCountAggregateInputType | true
    _min?: ApprovedGroupMinAggregateInputType
    _max?: ApprovedGroupMaxAggregateInputType
  }

  export type ApprovedGroupGroupByOutputType = {
    id: string
    chatId: string
    title: string | null
    createdAt: Date
    _count: ApprovedGroupCountAggregateOutputType | null
    _min: ApprovedGroupMinAggregateOutputType | null
    _max: ApprovedGroupMaxAggregateOutputType | null
  }

  type GetApprovedGroupGroupByPayload<T extends ApprovedGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovedGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovedGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovedGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovedGroupGroupByOutputType[P]>
        }
      >
    >


  export type ApprovedGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    title?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["approvedGroup"]>

  export type ApprovedGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    title?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["approvedGroup"]>

  export type ApprovedGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    title?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["approvedGroup"]>

  export type ApprovedGroupSelectScalar = {
    id?: boolean
    chatId?: boolean
    title?: boolean
    createdAt?: boolean
  }

  export type ApprovedGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "title" | "createdAt", ExtArgs["result"]["approvedGroup"]>

  export type $ApprovedGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApprovedGroup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatId: string
      title: string | null
      createdAt: Date
    }, ExtArgs["result"]["approvedGroup"]>
    composites: {}
  }

  type ApprovedGroupGetPayload<S extends boolean | null | undefined | ApprovedGroupDefaultArgs> = $Result.GetResult<Prisma.$ApprovedGroupPayload, S>

  type ApprovedGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprovedGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprovedGroupCountAggregateInputType | true
    }

  export interface ApprovedGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApprovedGroup'], meta: { name: 'ApprovedGroup' } }
    /**
     * Find zero or one ApprovedGroup that matches the filter.
     * @param {ApprovedGroupFindUniqueArgs} args - Arguments to find a ApprovedGroup
     * @example
     * // Get one ApprovedGroup
     * const approvedGroup = await prisma.approvedGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovedGroupFindUniqueArgs>(args: SelectSubset<T, ApprovedGroupFindUniqueArgs<ExtArgs>>): Prisma__ApprovedGroupClient<$Result.GetResult<Prisma.$ApprovedGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApprovedGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovedGroupFindUniqueOrThrowArgs} args - Arguments to find a ApprovedGroup
     * @example
     * // Get one ApprovedGroup
     * const approvedGroup = await prisma.approvedGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovedGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovedGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovedGroupClient<$Result.GetResult<Prisma.$ApprovedGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovedGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovedGroupFindFirstArgs} args - Arguments to find a ApprovedGroup
     * @example
     * // Get one ApprovedGroup
     * const approvedGroup = await prisma.approvedGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovedGroupFindFirstArgs>(args?: SelectSubset<T, ApprovedGroupFindFirstArgs<ExtArgs>>): Prisma__ApprovedGroupClient<$Result.GetResult<Prisma.$ApprovedGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovedGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovedGroupFindFirstOrThrowArgs} args - Arguments to find a ApprovedGroup
     * @example
     * // Get one ApprovedGroup
     * const approvedGroup = await prisma.approvedGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovedGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovedGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovedGroupClient<$Result.GetResult<Prisma.$ApprovedGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApprovedGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovedGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApprovedGroups
     * const approvedGroups = await prisma.approvedGroup.findMany()
     * 
     * // Get first 10 ApprovedGroups
     * const approvedGroups = await prisma.approvedGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approvedGroupWithIdOnly = await prisma.approvedGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprovedGroupFindManyArgs>(args?: SelectSubset<T, ApprovedGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovedGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApprovedGroup.
     * @param {ApprovedGroupCreateArgs} args - Arguments to create a ApprovedGroup.
     * @example
     * // Create one ApprovedGroup
     * const ApprovedGroup = await prisma.approvedGroup.create({
     *   data: {
     *     // ... data to create a ApprovedGroup
     *   }
     * })
     * 
     */
    create<T extends ApprovedGroupCreateArgs>(args: SelectSubset<T, ApprovedGroupCreateArgs<ExtArgs>>): Prisma__ApprovedGroupClient<$Result.GetResult<Prisma.$ApprovedGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApprovedGroups.
     * @param {ApprovedGroupCreateManyArgs} args - Arguments to create many ApprovedGroups.
     * @example
     * // Create many ApprovedGroups
     * const approvedGroup = await prisma.approvedGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovedGroupCreateManyArgs>(args?: SelectSubset<T, ApprovedGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApprovedGroups and returns the data saved in the database.
     * @param {ApprovedGroupCreateManyAndReturnArgs} args - Arguments to create many ApprovedGroups.
     * @example
     * // Create many ApprovedGroups
     * const approvedGroup = await prisma.approvedGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApprovedGroups and only return the `id`
     * const approvedGroupWithIdOnly = await prisma.approvedGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApprovedGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, ApprovedGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovedGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApprovedGroup.
     * @param {ApprovedGroupDeleteArgs} args - Arguments to delete one ApprovedGroup.
     * @example
     * // Delete one ApprovedGroup
     * const ApprovedGroup = await prisma.approvedGroup.delete({
     *   where: {
     *     // ... filter to delete one ApprovedGroup
     *   }
     * })
     * 
     */
    delete<T extends ApprovedGroupDeleteArgs>(args: SelectSubset<T, ApprovedGroupDeleteArgs<ExtArgs>>): Prisma__ApprovedGroupClient<$Result.GetResult<Prisma.$ApprovedGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApprovedGroup.
     * @param {ApprovedGroupUpdateArgs} args - Arguments to update one ApprovedGroup.
     * @example
     * // Update one ApprovedGroup
     * const approvedGroup = await prisma.approvedGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovedGroupUpdateArgs>(args: SelectSubset<T, ApprovedGroupUpdateArgs<ExtArgs>>): Prisma__ApprovedGroupClient<$Result.GetResult<Prisma.$ApprovedGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApprovedGroups.
     * @param {ApprovedGroupDeleteManyArgs} args - Arguments to filter ApprovedGroups to delete.
     * @example
     * // Delete a few ApprovedGroups
     * const { count } = await prisma.approvedGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovedGroupDeleteManyArgs>(args?: SelectSubset<T, ApprovedGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovedGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovedGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApprovedGroups
     * const approvedGroup = await prisma.approvedGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovedGroupUpdateManyArgs>(args: SelectSubset<T, ApprovedGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovedGroups and returns the data updated in the database.
     * @param {ApprovedGroupUpdateManyAndReturnArgs} args - Arguments to update many ApprovedGroups.
     * @example
     * // Update many ApprovedGroups
     * const approvedGroup = await prisma.approvedGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApprovedGroups and only return the `id`
     * const approvedGroupWithIdOnly = await prisma.approvedGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApprovedGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, ApprovedGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovedGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApprovedGroup.
     * @param {ApprovedGroupUpsertArgs} args - Arguments to update or create a ApprovedGroup.
     * @example
     * // Update or create a ApprovedGroup
     * const approvedGroup = await prisma.approvedGroup.upsert({
     *   create: {
     *     // ... data to create a ApprovedGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApprovedGroup we want to update
     *   }
     * })
     */
    upsert<T extends ApprovedGroupUpsertArgs>(args: SelectSubset<T, ApprovedGroupUpsertArgs<ExtArgs>>): Prisma__ApprovedGroupClient<$Result.GetResult<Prisma.$ApprovedGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApprovedGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovedGroupCountArgs} args - Arguments to filter ApprovedGroups to count.
     * @example
     * // Count the number of ApprovedGroups
     * const count = await prisma.approvedGroup.count({
     *   where: {
     *     // ... the filter for the ApprovedGroups we want to count
     *   }
     * })
    **/
    count<T extends ApprovedGroupCountArgs>(
      args?: Subset<T, ApprovedGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovedGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApprovedGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovedGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApprovedGroupAggregateArgs>(args: Subset<T, ApprovedGroupAggregateArgs>): Prisma.PrismaPromise<GetApprovedGroupAggregateType<T>>

    /**
     * Group by ApprovedGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovedGroupGroupByArgs} args - Group by arguments.
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
      T extends ApprovedGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovedGroupGroupByArgs['orderBy'] }
        : { orderBy?: ApprovedGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApprovedGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovedGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApprovedGroup model
   */
  readonly fields: ApprovedGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApprovedGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovedGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApprovedGroup model
   */
  interface ApprovedGroupFieldRefs {
    readonly id: FieldRef<"ApprovedGroup", 'String'>
    readonly chatId: FieldRef<"ApprovedGroup", 'String'>
    readonly title: FieldRef<"ApprovedGroup", 'String'>
    readonly createdAt: FieldRef<"ApprovedGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApprovedGroup findUnique
   */
  export type ApprovedGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedGroup
     */
    select?: ApprovedGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedGroup
     */
    omit?: ApprovedGroupOmit<ExtArgs> | null
    /**
     * Filter, which ApprovedGroup to fetch.
     */
    where: ApprovedGroupWhereUniqueInput
  }

  /**
   * ApprovedGroup findUniqueOrThrow
   */
  export type ApprovedGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedGroup
     */
    select?: ApprovedGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedGroup
     */
    omit?: ApprovedGroupOmit<ExtArgs> | null
    /**
     * Filter, which ApprovedGroup to fetch.
     */
    where: ApprovedGroupWhereUniqueInput
  }

  /**
   * ApprovedGroup findFirst
   */
  export type ApprovedGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedGroup
     */
    select?: ApprovedGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedGroup
     */
    omit?: ApprovedGroupOmit<ExtArgs> | null
    /**
     * Filter, which ApprovedGroup to fetch.
     */
    where?: ApprovedGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovedGroups to fetch.
     */
    orderBy?: ApprovedGroupOrderByWithRelationInput | ApprovedGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovedGroups.
     */
    cursor?: ApprovedGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovedGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovedGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovedGroups.
     */
    distinct?: ApprovedGroupScalarFieldEnum | ApprovedGroupScalarFieldEnum[]
  }

  /**
   * ApprovedGroup findFirstOrThrow
   */
  export type ApprovedGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedGroup
     */
    select?: ApprovedGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedGroup
     */
    omit?: ApprovedGroupOmit<ExtArgs> | null
    /**
     * Filter, which ApprovedGroup to fetch.
     */
    where?: ApprovedGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovedGroups to fetch.
     */
    orderBy?: ApprovedGroupOrderByWithRelationInput | ApprovedGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovedGroups.
     */
    cursor?: ApprovedGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovedGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovedGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovedGroups.
     */
    distinct?: ApprovedGroupScalarFieldEnum | ApprovedGroupScalarFieldEnum[]
  }

  /**
   * ApprovedGroup findMany
   */
  export type ApprovedGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedGroup
     */
    select?: ApprovedGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedGroup
     */
    omit?: ApprovedGroupOmit<ExtArgs> | null
    /**
     * Filter, which ApprovedGroups to fetch.
     */
    where?: ApprovedGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovedGroups to fetch.
     */
    orderBy?: ApprovedGroupOrderByWithRelationInput | ApprovedGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApprovedGroups.
     */
    cursor?: ApprovedGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovedGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovedGroups.
     */
    skip?: number
    distinct?: ApprovedGroupScalarFieldEnum | ApprovedGroupScalarFieldEnum[]
  }

  /**
   * ApprovedGroup create
   */
  export type ApprovedGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedGroup
     */
    select?: ApprovedGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedGroup
     */
    omit?: ApprovedGroupOmit<ExtArgs> | null
    /**
     * The data needed to create a ApprovedGroup.
     */
    data: XOR<ApprovedGroupCreateInput, ApprovedGroupUncheckedCreateInput>
  }

  /**
   * ApprovedGroup createMany
   */
  export type ApprovedGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApprovedGroups.
     */
    data: ApprovedGroupCreateManyInput | ApprovedGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApprovedGroup createManyAndReturn
   */
  export type ApprovedGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedGroup
     */
    select?: ApprovedGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedGroup
     */
    omit?: ApprovedGroupOmit<ExtArgs> | null
    /**
     * The data used to create many ApprovedGroups.
     */
    data: ApprovedGroupCreateManyInput | ApprovedGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApprovedGroup update
   */
  export type ApprovedGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedGroup
     */
    select?: ApprovedGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedGroup
     */
    omit?: ApprovedGroupOmit<ExtArgs> | null
    /**
     * The data needed to update a ApprovedGroup.
     */
    data: XOR<ApprovedGroupUpdateInput, ApprovedGroupUncheckedUpdateInput>
    /**
     * Choose, which ApprovedGroup to update.
     */
    where: ApprovedGroupWhereUniqueInput
  }

  /**
   * ApprovedGroup updateMany
   */
  export type ApprovedGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApprovedGroups.
     */
    data: XOR<ApprovedGroupUpdateManyMutationInput, ApprovedGroupUncheckedUpdateManyInput>
    /**
     * Filter which ApprovedGroups to update
     */
    where?: ApprovedGroupWhereInput
    /**
     * Limit how many ApprovedGroups to update.
     */
    limit?: number
  }

  /**
   * ApprovedGroup updateManyAndReturn
   */
  export type ApprovedGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedGroup
     */
    select?: ApprovedGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedGroup
     */
    omit?: ApprovedGroupOmit<ExtArgs> | null
    /**
     * The data used to update ApprovedGroups.
     */
    data: XOR<ApprovedGroupUpdateManyMutationInput, ApprovedGroupUncheckedUpdateManyInput>
    /**
     * Filter which ApprovedGroups to update
     */
    where?: ApprovedGroupWhereInput
    /**
     * Limit how many ApprovedGroups to update.
     */
    limit?: number
  }

  /**
   * ApprovedGroup upsert
   */
  export type ApprovedGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedGroup
     */
    select?: ApprovedGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedGroup
     */
    omit?: ApprovedGroupOmit<ExtArgs> | null
    /**
     * The filter to search for the ApprovedGroup to update in case it exists.
     */
    where: ApprovedGroupWhereUniqueInput
    /**
     * In case the ApprovedGroup found by the `where` argument doesn't exist, create a new ApprovedGroup with this data.
     */
    create: XOR<ApprovedGroupCreateInput, ApprovedGroupUncheckedCreateInput>
    /**
     * In case the ApprovedGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovedGroupUpdateInput, ApprovedGroupUncheckedUpdateInput>
  }

  /**
   * ApprovedGroup delete
   */
  export type ApprovedGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedGroup
     */
    select?: ApprovedGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedGroup
     */
    omit?: ApprovedGroupOmit<ExtArgs> | null
    /**
     * Filter which ApprovedGroup to delete.
     */
    where: ApprovedGroupWhereUniqueInput
  }

  /**
   * ApprovedGroup deleteMany
   */
  export type ApprovedGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovedGroups to delete
     */
    where?: ApprovedGroupWhereInput
    /**
     * Limit how many ApprovedGroups to delete.
     */
    limit?: number
  }

  /**
   * ApprovedGroup without action
   */
  export type ApprovedGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedGroup
     */
    select?: ApprovedGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedGroup
     */
    omit?: ApprovedGroupOmit<ExtArgs> | null
  }


  /**
   * Model FailedOrderMessage
   */

  export type AggregateFailedOrderMessage = {
    _count: FailedOrderMessageCountAggregateOutputType | null
    _avg: FailedOrderMessageAvgAggregateOutputType | null
    _sum: FailedOrderMessageSumAggregateOutputType | null
    _min: FailedOrderMessageMinAggregateOutputType | null
    _max: FailedOrderMessageMaxAggregateOutputType | null
  }

  export type FailedOrderMessageAvgAggregateOutputType = {
    messageId: number | null
  }

  export type FailedOrderMessageSumAggregateOutputType = {
    messageId: number | null
  }

  export type FailedOrderMessageMinAggregateOutputType = {
    messageId: number | null
    orderId: string | null
    createdAt: Date | null
  }

  export type FailedOrderMessageMaxAggregateOutputType = {
    messageId: number | null
    orderId: string | null
    createdAt: Date | null
  }

  export type FailedOrderMessageCountAggregateOutputType = {
    messageId: number
    orderId: number
    createdAt: number
    _all: number
  }


  export type FailedOrderMessageAvgAggregateInputType = {
    messageId?: true
  }

  export type FailedOrderMessageSumAggregateInputType = {
    messageId?: true
  }

  export type FailedOrderMessageMinAggregateInputType = {
    messageId?: true
    orderId?: true
    createdAt?: true
  }

  export type FailedOrderMessageMaxAggregateInputType = {
    messageId?: true
    orderId?: true
    createdAt?: true
  }

  export type FailedOrderMessageCountAggregateInputType = {
    messageId?: true
    orderId?: true
    createdAt?: true
    _all?: true
  }

  export type FailedOrderMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FailedOrderMessage to aggregate.
     */
    where?: FailedOrderMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailedOrderMessages to fetch.
     */
    orderBy?: FailedOrderMessageOrderByWithRelationInput | FailedOrderMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FailedOrderMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailedOrderMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailedOrderMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FailedOrderMessages
    **/
    _count?: true | FailedOrderMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FailedOrderMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FailedOrderMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FailedOrderMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FailedOrderMessageMaxAggregateInputType
  }

  export type GetFailedOrderMessageAggregateType<T extends FailedOrderMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateFailedOrderMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFailedOrderMessage[P]>
      : GetScalarType<T[P], AggregateFailedOrderMessage[P]>
  }




  export type FailedOrderMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FailedOrderMessageWhereInput
    orderBy?: FailedOrderMessageOrderByWithAggregationInput | FailedOrderMessageOrderByWithAggregationInput[]
    by: FailedOrderMessageScalarFieldEnum[] | FailedOrderMessageScalarFieldEnum
    having?: FailedOrderMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FailedOrderMessageCountAggregateInputType | true
    _avg?: FailedOrderMessageAvgAggregateInputType
    _sum?: FailedOrderMessageSumAggregateInputType
    _min?: FailedOrderMessageMinAggregateInputType
    _max?: FailedOrderMessageMaxAggregateInputType
  }

  export type FailedOrderMessageGroupByOutputType = {
    messageId: number
    orderId: string
    createdAt: Date
    _count: FailedOrderMessageCountAggregateOutputType | null
    _avg: FailedOrderMessageAvgAggregateOutputType | null
    _sum: FailedOrderMessageSumAggregateOutputType | null
    _min: FailedOrderMessageMinAggregateOutputType | null
    _max: FailedOrderMessageMaxAggregateOutputType | null
  }

  type GetFailedOrderMessageGroupByPayload<T extends FailedOrderMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FailedOrderMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FailedOrderMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FailedOrderMessageGroupByOutputType[P]>
            : GetScalarType<T[P], FailedOrderMessageGroupByOutputType[P]>
        }
      >
    >


  export type FailedOrderMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    messageId?: boolean
    orderId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["failedOrderMessage"]>

  export type FailedOrderMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    messageId?: boolean
    orderId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["failedOrderMessage"]>

  export type FailedOrderMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    messageId?: boolean
    orderId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["failedOrderMessage"]>

  export type FailedOrderMessageSelectScalar = {
    messageId?: boolean
    orderId?: boolean
    createdAt?: boolean
  }

  export type FailedOrderMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"messageId" | "orderId" | "createdAt", ExtArgs["result"]["failedOrderMessage"]>

  export type $FailedOrderMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FailedOrderMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      messageId: number
      orderId: string
      createdAt: Date
    }, ExtArgs["result"]["failedOrderMessage"]>
    composites: {}
  }

  type FailedOrderMessageGetPayload<S extends boolean | null | undefined | FailedOrderMessageDefaultArgs> = $Result.GetResult<Prisma.$FailedOrderMessagePayload, S>

  type FailedOrderMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FailedOrderMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FailedOrderMessageCountAggregateInputType | true
    }

  export interface FailedOrderMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FailedOrderMessage'], meta: { name: 'FailedOrderMessage' } }
    /**
     * Find zero or one FailedOrderMessage that matches the filter.
     * @param {FailedOrderMessageFindUniqueArgs} args - Arguments to find a FailedOrderMessage
     * @example
     * // Get one FailedOrderMessage
     * const failedOrderMessage = await prisma.failedOrderMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FailedOrderMessageFindUniqueArgs>(args: SelectSubset<T, FailedOrderMessageFindUniqueArgs<ExtArgs>>): Prisma__FailedOrderMessageClient<$Result.GetResult<Prisma.$FailedOrderMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FailedOrderMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FailedOrderMessageFindUniqueOrThrowArgs} args - Arguments to find a FailedOrderMessage
     * @example
     * // Get one FailedOrderMessage
     * const failedOrderMessage = await prisma.failedOrderMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FailedOrderMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, FailedOrderMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FailedOrderMessageClient<$Result.GetResult<Prisma.$FailedOrderMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FailedOrderMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedOrderMessageFindFirstArgs} args - Arguments to find a FailedOrderMessage
     * @example
     * // Get one FailedOrderMessage
     * const failedOrderMessage = await prisma.failedOrderMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FailedOrderMessageFindFirstArgs>(args?: SelectSubset<T, FailedOrderMessageFindFirstArgs<ExtArgs>>): Prisma__FailedOrderMessageClient<$Result.GetResult<Prisma.$FailedOrderMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FailedOrderMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedOrderMessageFindFirstOrThrowArgs} args - Arguments to find a FailedOrderMessage
     * @example
     * // Get one FailedOrderMessage
     * const failedOrderMessage = await prisma.failedOrderMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FailedOrderMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, FailedOrderMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__FailedOrderMessageClient<$Result.GetResult<Prisma.$FailedOrderMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FailedOrderMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedOrderMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FailedOrderMessages
     * const failedOrderMessages = await prisma.failedOrderMessage.findMany()
     * 
     * // Get first 10 FailedOrderMessages
     * const failedOrderMessages = await prisma.failedOrderMessage.findMany({ take: 10 })
     * 
     * // Only select the `messageId`
     * const failedOrderMessageWithMessageIdOnly = await prisma.failedOrderMessage.findMany({ select: { messageId: true } })
     * 
     */
    findMany<T extends FailedOrderMessageFindManyArgs>(args?: SelectSubset<T, FailedOrderMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailedOrderMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FailedOrderMessage.
     * @param {FailedOrderMessageCreateArgs} args - Arguments to create a FailedOrderMessage.
     * @example
     * // Create one FailedOrderMessage
     * const FailedOrderMessage = await prisma.failedOrderMessage.create({
     *   data: {
     *     // ... data to create a FailedOrderMessage
     *   }
     * })
     * 
     */
    create<T extends FailedOrderMessageCreateArgs>(args: SelectSubset<T, FailedOrderMessageCreateArgs<ExtArgs>>): Prisma__FailedOrderMessageClient<$Result.GetResult<Prisma.$FailedOrderMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FailedOrderMessages.
     * @param {FailedOrderMessageCreateManyArgs} args - Arguments to create many FailedOrderMessages.
     * @example
     * // Create many FailedOrderMessages
     * const failedOrderMessage = await prisma.failedOrderMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FailedOrderMessageCreateManyArgs>(args?: SelectSubset<T, FailedOrderMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FailedOrderMessages and returns the data saved in the database.
     * @param {FailedOrderMessageCreateManyAndReturnArgs} args - Arguments to create many FailedOrderMessages.
     * @example
     * // Create many FailedOrderMessages
     * const failedOrderMessage = await prisma.failedOrderMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FailedOrderMessages and only return the `messageId`
     * const failedOrderMessageWithMessageIdOnly = await prisma.failedOrderMessage.createManyAndReturn({
     *   select: { messageId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FailedOrderMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, FailedOrderMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailedOrderMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FailedOrderMessage.
     * @param {FailedOrderMessageDeleteArgs} args - Arguments to delete one FailedOrderMessage.
     * @example
     * // Delete one FailedOrderMessage
     * const FailedOrderMessage = await prisma.failedOrderMessage.delete({
     *   where: {
     *     // ... filter to delete one FailedOrderMessage
     *   }
     * })
     * 
     */
    delete<T extends FailedOrderMessageDeleteArgs>(args: SelectSubset<T, FailedOrderMessageDeleteArgs<ExtArgs>>): Prisma__FailedOrderMessageClient<$Result.GetResult<Prisma.$FailedOrderMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FailedOrderMessage.
     * @param {FailedOrderMessageUpdateArgs} args - Arguments to update one FailedOrderMessage.
     * @example
     * // Update one FailedOrderMessage
     * const failedOrderMessage = await prisma.failedOrderMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FailedOrderMessageUpdateArgs>(args: SelectSubset<T, FailedOrderMessageUpdateArgs<ExtArgs>>): Prisma__FailedOrderMessageClient<$Result.GetResult<Prisma.$FailedOrderMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FailedOrderMessages.
     * @param {FailedOrderMessageDeleteManyArgs} args - Arguments to filter FailedOrderMessages to delete.
     * @example
     * // Delete a few FailedOrderMessages
     * const { count } = await prisma.failedOrderMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FailedOrderMessageDeleteManyArgs>(args?: SelectSubset<T, FailedOrderMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FailedOrderMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedOrderMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FailedOrderMessages
     * const failedOrderMessage = await prisma.failedOrderMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FailedOrderMessageUpdateManyArgs>(args: SelectSubset<T, FailedOrderMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FailedOrderMessages and returns the data updated in the database.
     * @param {FailedOrderMessageUpdateManyAndReturnArgs} args - Arguments to update many FailedOrderMessages.
     * @example
     * // Update many FailedOrderMessages
     * const failedOrderMessage = await prisma.failedOrderMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FailedOrderMessages and only return the `messageId`
     * const failedOrderMessageWithMessageIdOnly = await prisma.failedOrderMessage.updateManyAndReturn({
     *   select: { messageId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FailedOrderMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, FailedOrderMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailedOrderMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FailedOrderMessage.
     * @param {FailedOrderMessageUpsertArgs} args - Arguments to update or create a FailedOrderMessage.
     * @example
     * // Update or create a FailedOrderMessage
     * const failedOrderMessage = await prisma.failedOrderMessage.upsert({
     *   create: {
     *     // ... data to create a FailedOrderMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FailedOrderMessage we want to update
     *   }
     * })
     */
    upsert<T extends FailedOrderMessageUpsertArgs>(args: SelectSubset<T, FailedOrderMessageUpsertArgs<ExtArgs>>): Prisma__FailedOrderMessageClient<$Result.GetResult<Prisma.$FailedOrderMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FailedOrderMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedOrderMessageCountArgs} args - Arguments to filter FailedOrderMessages to count.
     * @example
     * // Count the number of FailedOrderMessages
     * const count = await prisma.failedOrderMessage.count({
     *   where: {
     *     // ... the filter for the FailedOrderMessages we want to count
     *   }
     * })
    **/
    count<T extends FailedOrderMessageCountArgs>(
      args?: Subset<T, FailedOrderMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FailedOrderMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FailedOrderMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedOrderMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FailedOrderMessageAggregateArgs>(args: Subset<T, FailedOrderMessageAggregateArgs>): Prisma.PrismaPromise<GetFailedOrderMessageAggregateType<T>>

    /**
     * Group by FailedOrderMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedOrderMessageGroupByArgs} args - Group by arguments.
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
      T extends FailedOrderMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FailedOrderMessageGroupByArgs['orderBy'] }
        : { orderBy?: FailedOrderMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FailedOrderMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFailedOrderMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FailedOrderMessage model
   */
  readonly fields: FailedOrderMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FailedOrderMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FailedOrderMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FailedOrderMessage model
   */
  interface FailedOrderMessageFieldRefs {
    readonly messageId: FieldRef<"FailedOrderMessage", 'Float'>
    readonly orderId: FieldRef<"FailedOrderMessage", 'String'>
    readonly createdAt: FieldRef<"FailedOrderMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FailedOrderMessage findUnique
   */
  export type FailedOrderMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedOrderMessage
     */
    select?: FailedOrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedOrderMessage
     */
    omit?: FailedOrderMessageOmit<ExtArgs> | null
    /**
     * Filter, which FailedOrderMessage to fetch.
     */
    where: FailedOrderMessageWhereUniqueInput
  }

  /**
   * FailedOrderMessage findUniqueOrThrow
   */
  export type FailedOrderMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedOrderMessage
     */
    select?: FailedOrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedOrderMessage
     */
    omit?: FailedOrderMessageOmit<ExtArgs> | null
    /**
     * Filter, which FailedOrderMessage to fetch.
     */
    where: FailedOrderMessageWhereUniqueInput
  }

  /**
   * FailedOrderMessage findFirst
   */
  export type FailedOrderMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedOrderMessage
     */
    select?: FailedOrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedOrderMessage
     */
    omit?: FailedOrderMessageOmit<ExtArgs> | null
    /**
     * Filter, which FailedOrderMessage to fetch.
     */
    where?: FailedOrderMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailedOrderMessages to fetch.
     */
    orderBy?: FailedOrderMessageOrderByWithRelationInput | FailedOrderMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FailedOrderMessages.
     */
    cursor?: FailedOrderMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailedOrderMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailedOrderMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FailedOrderMessages.
     */
    distinct?: FailedOrderMessageScalarFieldEnum | FailedOrderMessageScalarFieldEnum[]
  }

  /**
   * FailedOrderMessage findFirstOrThrow
   */
  export type FailedOrderMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedOrderMessage
     */
    select?: FailedOrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedOrderMessage
     */
    omit?: FailedOrderMessageOmit<ExtArgs> | null
    /**
     * Filter, which FailedOrderMessage to fetch.
     */
    where?: FailedOrderMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailedOrderMessages to fetch.
     */
    orderBy?: FailedOrderMessageOrderByWithRelationInput | FailedOrderMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FailedOrderMessages.
     */
    cursor?: FailedOrderMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailedOrderMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailedOrderMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FailedOrderMessages.
     */
    distinct?: FailedOrderMessageScalarFieldEnum | FailedOrderMessageScalarFieldEnum[]
  }

  /**
   * FailedOrderMessage findMany
   */
  export type FailedOrderMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedOrderMessage
     */
    select?: FailedOrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedOrderMessage
     */
    omit?: FailedOrderMessageOmit<ExtArgs> | null
    /**
     * Filter, which FailedOrderMessages to fetch.
     */
    where?: FailedOrderMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailedOrderMessages to fetch.
     */
    orderBy?: FailedOrderMessageOrderByWithRelationInput | FailedOrderMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FailedOrderMessages.
     */
    cursor?: FailedOrderMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailedOrderMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailedOrderMessages.
     */
    skip?: number
    distinct?: FailedOrderMessageScalarFieldEnum | FailedOrderMessageScalarFieldEnum[]
  }

  /**
   * FailedOrderMessage create
   */
  export type FailedOrderMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedOrderMessage
     */
    select?: FailedOrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedOrderMessage
     */
    omit?: FailedOrderMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a FailedOrderMessage.
     */
    data: XOR<FailedOrderMessageCreateInput, FailedOrderMessageUncheckedCreateInput>
  }

  /**
   * FailedOrderMessage createMany
   */
  export type FailedOrderMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FailedOrderMessages.
     */
    data: FailedOrderMessageCreateManyInput | FailedOrderMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FailedOrderMessage createManyAndReturn
   */
  export type FailedOrderMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedOrderMessage
     */
    select?: FailedOrderMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FailedOrderMessage
     */
    omit?: FailedOrderMessageOmit<ExtArgs> | null
    /**
     * The data used to create many FailedOrderMessages.
     */
    data: FailedOrderMessageCreateManyInput | FailedOrderMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FailedOrderMessage update
   */
  export type FailedOrderMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedOrderMessage
     */
    select?: FailedOrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedOrderMessage
     */
    omit?: FailedOrderMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a FailedOrderMessage.
     */
    data: XOR<FailedOrderMessageUpdateInput, FailedOrderMessageUncheckedUpdateInput>
    /**
     * Choose, which FailedOrderMessage to update.
     */
    where: FailedOrderMessageWhereUniqueInput
  }

  /**
   * FailedOrderMessage updateMany
   */
  export type FailedOrderMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FailedOrderMessages.
     */
    data: XOR<FailedOrderMessageUpdateManyMutationInput, FailedOrderMessageUncheckedUpdateManyInput>
    /**
     * Filter which FailedOrderMessages to update
     */
    where?: FailedOrderMessageWhereInput
    /**
     * Limit how many FailedOrderMessages to update.
     */
    limit?: number
  }

  /**
   * FailedOrderMessage updateManyAndReturn
   */
  export type FailedOrderMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedOrderMessage
     */
    select?: FailedOrderMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FailedOrderMessage
     */
    omit?: FailedOrderMessageOmit<ExtArgs> | null
    /**
     * The data used to update FailedOrderMessages.
     */
    data: XOR<FailedOrderMessageUpdateManyMutationInput, FailedOrderMessageUncheckedUpdateManyInput>
    /**
     * Filter which FailedOrderMessages to update
     */
    where?: FailedOrderMessageWhereInput
    /**
     * Limit how many FailedOrderMessages to update.
     */
    limit?: number
  }

  /**
   * FailedOrderMessage upsert
   */
  export type FailedOrderMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedOrderMessage
     */
    select?: FailedOrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedOrderMessage
     */
    omit?: FailedOrderMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the FailedOrderMessage to update in case it exists.
     */
    where: FailedOrderMessageWhereUniqueInput
    /**
     * In case the FailedOrderMessage found by the `where` argument doesn't exist, create a new FailedOrderMessage with this data.
     */
    create: XOR<FailedOrderMessageCreateInput, FailedOrderMessageUncheckedCreateInput>
    /**
     * In case the FailedOrderMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FailedOrderMessageUpdateInput, FailedOrderMessageUncheckedUpdateInput>
  }

  /**
   * FailedOrderMessage delete
   */
  export type FailedOrderMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedOrderMessage
     */
    select?: FailedOrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedOrderMessage
     */
    omit?: FailedOrderMessageOmit<ExtArgs> | null
    /**
     * Filter which FailedOrderMessage to delete.
     */
    where: FailedOrderMessageWhereUniqueInput
  }

  /**
   * FailedOrderMessage deleteMany
   */
  export type FailedOrderMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FailedOrderMessages to delete
     */
    where?: FailedOrderMessageWhereInput
    /**
     * Limit how many FailedOrderMessages to delete.
     */
    limit?: number
  }

  /**
   * FailedOrderMessage without action
   */
  export type FailedOrderMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedOrderMessage
     */
    select?: FailedOrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedOrderMessage
     */
    omit?: FailedOrderMessageOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    mobile: 'mobile',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    serviceName: 'serviceName',
    link: 'link',
    quantity: 'quantity',
    amount: 'amount',
    status: 'status',
    remark: 'remark',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    provider: 'provider'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    zapupiOrderId: 'zapupiOrderId',
    orderId: 'orderId',
    amount: 'amount',
    status: 'status',
    paymentUrl: 'paymentUrl',
    utr: 'utr',
    customerMobile: 'customerMobile',
    zapupiTxnId: 'zapupiTxnId',
    failureReason: 'failureReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SmmOrderScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    smmOrderId: 'smmOrderId',
    serviceId: 'serviceId',
    provider: 'provider',
    link: 'link',
    quantity: 'quantity',
    status: 'status',
    startCount: 'startCount',
    remains: 'remains',
    charge: 'charge',
    errorMsg: 'errorMsg',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SmmOrderScalarFieldEnum = (typeof SmmOrderScalarFieldEnum)[keyof typeof SmmOrderScalarFieldEnum]


  export const BannerScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const SpecialOfferScalarFieldEnum: {
    id: 'id',
    serviceSlug: 'serviceSlug',
    title: 'title',
    badge: 'badge',
    description: 'description',
    serviceId: 'serviceId',
    quantity: 'quantity',
    price: 'price',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpecialOfferScalarFieldEnum = (typeof SpecialOfferScalarFieldEnum)[keyof typeof SpecialOfferScalarFieldEnum]


  export const SpendScalarFieldEnum: {
    id: 'id',
    category: 'category',
    amount: 'amount',
    note: 'note',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type SpendScalarFieldEnum = (typeof SpendScalarFieldEnum)[keyof typeof SpendScalarFieldEnum]


  export const AdminAccountScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminAccountScalarFieldEnum = (typeof AdminAccountScalarFieldEnum)[keyof typeof AdminAccountScalarFieldEnum]


  export const SmmConfigScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    url: 'url',
    apiKey: 'apiKey',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SmmConfigScalarFieldEnum = (typeof SmmConfigScalarFieldEnum)[keyof typeof SmmConfigScalarFieldEnum]


  export const ApprovedGroupScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    title: 'title',
    createdAt: 'createdAt'
  };

  export type ApprovedGroupScalarFieldEnum = (typeof ApprovedGroupScalarFieldEnum)[keyof typeof ApprovedGroupScalarFieldEnum]


  export const FailedOrderMessageScalarFieldEnum: {
    messageId: 'messageId',
    orderId: 'orderId',
    createdAt: 'createdAt'
  };

  export type FailedOrderMessageScalarFieldEnum = (typeof FailedOrderMessageScalarFieldEnum)[keyof typeof FailedOrderMessageScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'SmmProvider'
   */
  export type EnumSmmProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SmmProvider'>
    


  /**
   * Reference to a field of type 'SmmProvider[]'
   */
  export type ListEnumSmmProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SmmProvider[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AdminRole'
   */
  export type EnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole'>
    


  /**
   * Reference to a field of type 'AdminRole[]'
   */
  export type ListEnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    mobile?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    mobile?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mobile?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
  }, "id" | "mobile">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    mobile?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    mobile?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    serviceId?: IntFilter<"Order"> | number
    serviceName?: StringNullableFilter<"Order"> | string | null
    link?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    amount?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    remark?: StringNullableFilter<"Order"> | string | null
    userId?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    provider?: EnumSmmProviderFilter<"Order"> | $Enums.SmmProvider
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    smmOrder?: XOR<SmmOrderNullableScalarRelationFilter, SmmOrderWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    serviceName?: SortOrderInput | SortOrder
    link?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    remark?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    user?: UserOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    smmOrder?: SmmOrderOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    serviceId?: IntFilter<"Order"> | number
    serviceName?: StringNullableFilter<"Order"> | string | null
    link?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    amount?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    remark?: StringNullableFilter<"Order"> | string | null
    userId?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    provider?: EnumSmmProviderFilter<"Order"> | $Enums.SmmProvider
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    smmOrder?: XOR<SmmOrderNullableScalarRelationFilter, SmmOrderWhereInput> | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    serviceName?: SortOrderInput | SortOrder
    link?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    remark?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    serviceId?: IntWithAggregatesFilter<"Order"> | number
    serviceName?: StringNullableWithAggregatesFilter<"Order"> | string | null
    link?: StringWithAggregatesFilter<"Order"> | string
    quantity?: IntWithAggregatesFilter<"Order"> | number
    amount?: FloatWithAggregatesFilter<"Order"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    remark?: StringNullableWithAggregatesFilter<"Order"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    provider?: EnumSmmProviderWithAggregatesFilter<"Order"> | $Enums.SmmProvider
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    zapupiOrderId?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentUrl?: StringNullableFilter<"Payment"> | string | null
    utr?: StringNullableFilter<"Payment"> | string | null
    customerMobile?: StringNullableFilter<"Payment"> | string | null
    zapupiTxnId?: StringNullableFilter<"Payment"> | string | null
    failureReason?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    zapupiOrderId?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentUrl?: SortOrderInput | SortOrder
    utr?: SortOrderInput | SortOrder
    customerMobile?: SortOrderInput | SortOrder
    zapupiTxnId?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zapupiOrderId?: string
    orderId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentUrl?: StringNullableFilter<"Payment"> | string | null
    utr?: StringNullableFilter<"Payment"> | string | null
    customerMobile?: StringNullableFilter<"Payment"> | string | null
    zapupiTxnId?: StringNullableFilter<"Payment"> | string | null
    failureReason?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id" | "zapupiOrderId" | "orderId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    zapupiOrderId?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentUrl?: SortOrderInput | SortOrder
    utr?: SortOrderInput | SortOrder
    customerMobile?: SortOrderInput | SortOrder
    zapupiTxnId?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    zapupiOrderId?: StringWithAggregatesFilter<"Payment"> | string
    orderId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    paymentUrl?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    utr?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    customerMobile?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    zapupiTxnId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    failureReason?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type SmmOrderWhereInput = {
    AND?: SmmOrderWhereInput | SmmOrderWhereInput[]
    OR?: SmmOrderWhereInput[]
    NOT?: SmmOrderWhereInput | SmmOrderWhereInput[]
    id?: StringFilter<"SmmOrder"> | string
    orderId?: StringFilter<"SmmOrder"> | string
    smmOrderId?: StringNullableFilter<"SmmOrder"> | string | null
    serviceId?: IntFilter<"SmmOrder"> | number
    provider?: EnumSmmProviderFilter<"SmmOrder"> | $Enums.SmmProvider
    link?: StringFilter<"SmmOrder"> | string
    quantity?: IntFilter<"SmmOrder"> | number
    status?: EnumOrderStatusFilter<"SmmOrder"> | $Enums.OrderStatus
    startCount?: IntNullableFilter<"SmmOrder"> | number | null
    remains?: IntNullableFilter<"SmmOrder"> | number | null
    charge?: FloatNullableFilter<"SmmOrder"> | number | null
    errorMsg?: StringNullableFilter<"SmmOrder"> | string | null
    createdAt?: DateTimeFilter<"SmmOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SmmOrder"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type SmmOrderOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    smmOrderId?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    provider?: SortOrder
    link?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    startCount?: SortOrderInput | SortOrder
    remains?: SortOrderInput | SortOrder
    charge?: SortOrderInput | SortOrder
    errorMsg?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type SmmOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: SmmOrderWhereInput | SmmOrderWhereInput[]
    OR?: SmmOrderWhereInput[]
    NOT?: SmmOrderWhereInput | SmmOrderWhereInput[]
    smmOrderId?: StringNullableFilter<"SmmOrder"> | string | null
    serviceId?: IntFilter<"SmmOrder"> | number
    provider?: EnumSmmProviderFilter<"SmmOrder"> | $Enums.SmmProvider
    link?: StringFilter<"SmmOrder"> | string
    quantity?: IntFilter<"SmmOrder"> | number
    status?: EnumOrderStatusFilter<"SmmOrder"> | $Enums.OrderStatus
    startCount?: IntNullableFilter<"SmmOrder"> | number | null
    remains?: IntNullableFilter<"SmmOrder"> | number | null
    charge?: FloatNullableFilter<"SmmOrder"> | number | null
    errorMsg?: StringNullableFilter<"SmmOrder"> | string | null
    createdAt?: DateTimeFilter<"SmmOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SmmOrder"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id" | "orderId">

  export type SmmOrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    smmOrderId?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    provider?: SortOrder
    link?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    startCount?: SortOrderInput | SortOrder
    remains?: SortOrderInput | SortOrder
    charge?: SortOrderInput | SortOrder
    errorMsg?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SmmOrderCountOrderByAggregateInput
    _avg?: SmmOrderAvgOrderByAggregateInput
    _max?: SmmOrderMaxOrderByAggregateInput
    _min?: SmmOrderMinOrderByAggregateInput
    _sum?: SmmOrderSumOrderByAggregateInput
  }

  export type SmmOrderScalarWhereWithAggregatesInput = {
    AND?: SmmOrderScalarWhereWithAggregatesInput | SmmOrderScalarWhereWithAggregatesInput[]
    OR?: SmmOrderScalarWhereWithAggregatesInput[]
    NOT?: SmmOrderScalarWhereWithAggregatesInput | SmmOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SmmOrder"> | string
    orderId?: StringWithAggregatesFilter<"SmmOrder"> | string
    smmOrderId?: StringNullableWithAggregatesFilter<"SmmOrder"> | string | null
    serviceId?: IntWithAggregatesFilter<"SmmOrder"> | number
    provider?: EnumSmmProviderWithAggregatesFilter<"SmmOrder"> | $Enums.SmmProvider
    link?: StringWithAggregatesFilter<"SmmOrder"> | string
    quantity?: IntWithAggregatesFilter<"SmmOrder"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"SmmOrder"> | $Enums.OrderStatus
    startCount?: IntNullableWithAggregatesFilter<"SmmOrder"> | number | null
    remains?: IntNullableWithAggregatesFilter<"SmmOrder"> | number | null
    charge?: FloatNullableWithAggregatesFilter<"SmmOrder"> | number | null
    errorMsg?: StringNullableWithAggregatesFilter<"SmmOrder"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SmmOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SmmOrder"> | Date | string
  }

  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    id?: StringFilter<"Banner"> | string
    imageUrl?: StringFilter<"Banner"> | string
    active?: BoolFilter<"Banner"> | boolean
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
  }

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    imageUrl?: StringFilter<"Banner"> | string
    active?: BoolFilter<"Banner"> | boolean
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
  }, "id">

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BannerCountOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Banner"> | string
    imageUrl?: StringWithAggregatesFilter<"Banner"> | string
    active?: BoolWithAggregatesFilter<"Banner"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
  }

  export type SpecialOfferWhereInput = {
    AND?: SpecialOfferWhereInput | SpecialOfferWhereInput[]
    OR?: SpecialOfferWhereInput[]
    NOT?: SpecialOfferWhereInput | SpecialOfferWhereInput[]
    id?: StringFilter<"SpecialOffer"> | string
    serviceSlug?: StringFilter<"SpecialOffer"> | string
    title?: StringFilter<"SpecialOffer"> | string
    badge?: StringFilter<"SpecialOffer"> | string
    description?: StringNullableFilter<"SpecialOffer"> | string | null
    serviceId?: IntNullableFilter<"SpecialOffer"> | number | null
    quantity?: IntNullableFilter<"SpecialOffer"> | number | null
    price?: FloatNullableFilter<"SpecialOffer"> | number | null
    active?: BoolFilter<"SpecialOffer"> | boolean
    createdAt?: DateTimeFilter<"SpecialOffer"> | Date | string
    updatedAt?: DateTimeFilter<"SpecialOffer"> | Date | string
  }

  export type SpecialOfferOrderByWithRelationInput = {
    id?: SortOrder
    serviceSlug?: SortOrder
    title?: SortOrder
    badge?: SortOrder
    description?: SortOrderInput | SortOrder
    serviceId?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialOfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpecialOfferWhereInput | SpecialOfferWhereInput[]
    OR?: SpecialOfferWhereInput[]
    NOT?: SpecialOfferWhereInput | SpecialOfferWhereInput[]
    serviceSlug?: StringFilter<"SpecialOffer"> | string
    title?: StringFilter<"SpecialOffer"> | string
    badge?: StringFilter<"SpecialOffer"> | string
    description?: StringNullableFilter<"SpecialOffer"> | string | null
    serviceId?: IntNullableFilter<"SpecialOffer"> | number | null
    quantity?: IntNullableFilter<"SpecialOffer"> | number | null
    price?: FloatNullableFilter<"SpecialOffer"> | number | null
    active?: BoolFilter<"SpecialOffer"> | boolean
    createdAt?: DateTimeFilter<"SpecialOffer"> | Date | string
    updatedAt?: DateTimeFilter<"SpecialOffer"> | Date | string
  }, "id">

  export type SpecialOfferOrderByWithAggregationInput = {
    id?: SortOrder
    serviceSlug?: SortOrder
    title?: SortOrder
    badge?: SortOrder
    description?: SortOrderInput | SortOrder
    serviceId?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpecialOfferCountOrderByAggregateInput
    _avg?: SpecialOfferAvgOrderByAggregateInput
    _max?: SpecialOfferMaxOrderByAggregateInput
    _min?: SpecialOfferMinOrderByAggregateInput
    _sum?: SpecialOfferSumOrderByAggregateInput
  }

  export type SpecialOfferScalarWhereWithAggregatesInput = {
    AND?: SpecialOfferScalarWhereWithAggregatesInput | SpecialOfferScalarWhereWithAggregatesInput[]
    OR?: SpecialOfferScalarWhereWithAggregatesInput[]
    NOT?: SpecialOfferScalarWhereWithAggregatesInput | SpecialOfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpecialOffer"> | string
    serviceSlug?: StringWithAggregatesFilter<"SpecialOffer"> | string
    title?: StringWithAggregatesFilter<"SpecialOffer"> | string
    badge?: StringWithAggregatesFilter<"SpecialOffer"> | string
    description?: StringNullableWithAggregatesFilter<"SpecialOffer"> | string | null
    serviceId?: IntNullableWithAggregatesFilter<"SpecialOffer"> | number | null
    quantity?: IntNullableWithAggregatesFilter<"SpecialOffer"> | number | null
    price?: FloatNullableWithAggregatesFilter<"SpecialOffer"> | number | null
    active?: BoolWithAggregatesFilter<"SpecialOffer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SpecialOffer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SpecialOffer"> | Date | string
  }

  export type SpendWhereInput = {
    AND?: SpendWhereInput | SpendWhereInput[]
    OR?: SpendWhereInput[]
    NOT?: SpendWhereInput | SpendWhereInput[]
    id?: StringFilter<"Spend"> | string
    category?: StringFilter<"Spend"> | string
    amount?: FloatFilter<"Spend"> | number
    note?: StringNullableFilter<"Spend"> | string | null
    date?: DateTimeFilter<"Spend"> | Date | string
    createdAt?: DateTimeFilter<"Spend"> | Date | string
  }

  export type SpendOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type SpendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpendWhereInput | SpendWhereInput[]
    OR?: SpendWhereInput[]
    NOT?: SpendWhereInput | SpendWhereInput[]
    category?: StringFilter<"Spend"> | string
    amount?: FloatFilter<"Spend"> | number
    note?: StringNullableFilter<"Spend"> | string | null
    date?: DateTimeFilter<"Spend"> | Date | string
    createdAt?: DateTimeFilter<"Spend"> | Date | string
  }, "id">

  export type SpendOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: SpendCountOrderByAggregateInput
    _avg?: SpendAvgOrderByAggregateInput
    _max?: SpendMaxOrderByAggregateInput
    _min?: SpendMinOrderByAggregateInput
    _sum?: SpendSumOrderByAggregateInput
  }

  export type SpendScalarWhereWithAggregatesInput = {
    AND?: SpendScalarWhereWithAggregatesInput | SpendScalarWhereWithAggregatesInput[]
    OR?: SpendScalarWhereWithAggregatesInput[]
    NOT?: SpendScalarWhereWithAggregatesInput | SpendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Spend"> | string
    category?: StringWithAggregatesFilter<"Spend"> | string
    amount?: FloatWithAggregatesFilter<"Spend"> | number
    note?: StringNullableWithAggregatesFilter<"Spend"> | string | null
    date?: DateTimeWithAggregatesFilter<"Spend"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Spend"> | Date | string
  }

  export type AdminAccountWhereInput = {
    AND?: AdminAccountWhereInput | AdminAccountWhereInput[]
    OR?: AdminAccountWhereInput[]
    NOT?: AdminAccountWhereInput | AdminAccountWhereInput[]
    id?: StringFilter<"AdminAccount"> | string
    email?: StringFilter<"AdminAccount"> | string
    passwordHash?: StringFilter<"AdminAccount"> | string
    role?: EnumAdminRoleFilter<"AdminAccount"> | $Enums.AdminRole
    name?: StringNullableFilter<"AdminAccount"> | string | null
    createdAt?: DateTimeFilter<"AdminAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AdminAccount"> | Date | string
  }

  export type AdminAccountOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminAccountWhereInput | AdminAccountWhereInput[]
    OR?: AdminAccountWhereInput[]
    NOT?: AdminAccountWhereInput | AdminAccountWhereInput[]
    passwordHash?: StringFilter<"AdminAccount"> | string
    role?: EnumAdminRoleFilter<"AdminAccount"> | $Enums.AdminRole
    name?: StringNullableFilter<"AdminAccount"> | string | null
    createdAt?: DateTimeFilter<"AdminAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AdminAccount"> | Date | string
  }, "id" | "email">

  export type AdminAccountOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminAccountCountOrderByAggregateInput
    _max?: AdminAccountMaxOrderByAggregateInput
    _min?: AdminAccountMinOrderByAggregateInput
  }

  export type AdminAccountScalarWhereWithAggregatesInput = {
    AND?: AdminAccountScalarWhereWithAggregatesInput | AdminAccountScalarWhereWithAggregatesInput[]
    OR?: AdminAccountScalarWhereWithAggregatesInput[]
    NOT?: AdminAccountScalarWhereWithAggregatesInput | AdminAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminAccount"> | string
    email?: StringWithAggregatesFilter<"AdminAccount"> | string
    passwordHash?: StringWithAggregatesFilter<"AdminAccount"> | string
    role?: EnumAdminRoleWithAggregatesFilter<"AdminAccount"> | $Enums.AdminRole
    name?: StringNullableWithAggregatesFilter<"AdminAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdminAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminAccount"> | Date | string
  }

  export type SmmConfigWhereInput = {
    AND?: SmmConfigWhereInput | SmmConfigWhereInput[]
    OR?: SmmConfigWhereInput[]
    NOT?: SmmConfigWhereInput | SmmConfigWhereInput[]
    id?: StringFilter<"SmmConfig"> | string
    name?: StringFilter<"SmmConfig"> | string
    type?: StringFilter<"SmmConfig"> | string
    url?: StringFilter<"SmmConfig"> | string
    apiKey?: StringFilter<"SmmConfig"> | string
    isActive?: BoolFilter<"SmmConfig"> | boolean
    createdAt?: DateTimeFilter<"SmmConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SmmConfig"> | Date | string
  }

  export type SmmConfigOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SmmConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SmmConfigWhereInput | SmmConfigWhereInput[]
    OR?: SmmConfigWhereInput[]
    NOT?: SmmConfigWhereInput | SmmConfigWhereInput[]
    name?: StringFilter<"SmmConfig"> | string
    type?: StringFilter<"SmmConfig"> | string
    url?: StringFilter<"SmmConfig"> | string
    apiKey?: StringFilter<"SmmConfig"> | string
    isActive?: BoolFilter<"SmmConfig"> | boolean
    createdAt?: DateTimeFilter<"SmmConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SmmConfig"> | Date | string
  }, "id">

  export type SmmConfigOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SmmConfigCountOrderByAggregateInput
    _max?: SmmConfigMaxOrderByAggregateInput
    _min?: SmmConfigMinOrderByAggregateInput
  }

  export type SmmConfigScalarWhereWithAggregatesInput = {
    AND?: SmmConfigScalarWhereWithAggregatesInput | SmmConfigScalarWhereWithAggregatesInput[]
    OR?: SmmConfigScalarWhereWithAggregatesInput[]
    NOT?: SmmConfigScalarWhereWithAggregatesInput | SmmConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SmmConfig"> | string
    name?: StringWithAggregatesFilter<"SmmConfig"> | string
    type?: StringWithAggregatesFilter<"SmmConfig"> | string
    url?: StringWithAggregatesFilter<"SmmConfig"> | string
    apiKey?: StringWithAggregatesFilter<"SmmConfig"> | string
    isActive?: BoolWithAggregatesFilter<"SmmConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SmmConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SmmConfig"> | Date | string
  }

  export type ApprovedGroupWhereInput = {
    AND?: ApprovedGroupWhereInput | ApprovedGroupWhereInput[]
    OR?: ApprovedGroupWhereInput[]
    NOT?: ApprovedGroupWhereInput | ApprovedGroupWhereInput[]
    id?: StringFilter<"ApprovedGroup"> | string
    chatId?: StringFilter<"ApprovedGroup"> | string
    title?: StringNullableFilter<"ApprovedGroup"> | string | null
    createdAt?: DateTimeFilter<"ApprovedGroup"> | Date | string
  }

  export type ApprovedGroupOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ApprovedGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chatId?: string
    AND?: ApprovedGroupWhereInput | ApprovedGroupWhereInput[]
    OR?: ApprovedGroupWhereInput[]
    NOT?: ApprovedGroupWhereInput | ApprovedGroupWhereInput[]
    title?: StringNullableFilter<"ApprovedGroup"> | string | null
    createdAt?: DateTimeFilter<"ApprovedGroup"> | Date | string
  }, "id" | "chatId">

  export type ApprovedGroupOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ApprovedGroupCountOrderByAggregateInput
    _max?: ApprovedGroupMaxOrderByAggregateInput
    _min?: ApprovedGroupMinOrderByAggregateInput
  }

  export type ApprovedGroupScalarWhereWithAggregatesInput = {
    AND?: ApprovedGroupScalarWhereWithAggregatesInput | ApprovedGroupScalarWhereWithAggregatesInput[]
    OR?: ApprovedGroupScalarWhereWithAggregatesInput[]
    NOT?: ApprovedGroupScalarWhereWithAggregatesInput | ApprovedGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApprovedGroup"> | string
    chatId?: StringWithAggregatesFilter<"ApprovedGroup"> | string
    title?: StringNullableWithAggregatesFilter<"ApprovedGroup"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApprovedGroup"> | Date | string
  }

  export type FailedOrderMessageWhereInput = {
    AND?: FailedOrderMessageWhereInput | FailedOrderMessageWhereInput[]
    OR?: FailedOrderMessageWhereInput[]
    NOT?: FailedOrderMessageWhereInput | FailedOrderMessageWhereInput[]
    messageId?: FloatFilter<"FailedOrderMessage"> | number
    orderId?: StringFilter<"FailedOrderMessage"> | string
    createdAt?: DateTimeFilter<"FailedOrderMessage"> | Date | string
  }

  export type FailedOrderMessageOrderByWithRelationInput = {
    messageId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
  }

  export type FailedOrderMessageWhereUniqueInput = Prisma.AtLeast<{
    messageId?: number
    AND?: FailedOrderMessageWhereInput | FailedOrderMessageWhereInput[]
    OR?: FailedOrderMessageWhereInput[]
    NOT?: FailedOrderMessageWhereInput | FailedOrderMessageWhereInput[]
    orderId?: StringFilter<"FailedOrderMessage"> | string
    createdAt?: DateTimeFilter<"FailedOrderMessage"> | Date | string
  }, "messageId">

  export type FailedOrderMessageOrderByWithAggregationInput = {
    messageId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    _count?: FailedOrderMessageCountOrderByAggregateInput
    _avg?: FailedOrderMessageAvgOrderByAggregateInput
    _max?: FailedOrderMessageMaxOrderByAggregateInput
    _min?: FailedOrderMessageMinOrderByAggregateInput
    _sum?: FailedOrderMessageSumOrderByAggregateInput
  }

  export type FailedOrderMessageScalarWhereWithAggregatesInput = {
    AND?: FailedOrderMessageScalarWhereWithAggregatesInput | FailedOrderMessageScalarWhereWithAggregatesInput[]
    OR?: FailedOrderMessageScalarWhereWithAggregatesInput[]
    NOT?: FailedOrderMessageScalarWhereWithAggregatesInput | FailedOrderMessageScalarWhereWithAggregatesInput[]
    messageId?: FloatWithAggregatesFilter<"FailedOrderMessage"> | number
    orderId?: StringWithAggregatesFilter<"FailedOrderMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FailedOrderMessage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    mobile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    mobile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    mobile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    serviceId: number
    serviceName?: string | null
    link: string
    quantity: number
    amount: number
    status?: $Enums.OrderStatus
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: $Enums.SmmProvider
    user?: UserCreateNestedOneWithoutOrdersInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
    smmOrder?: SmmOrderCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    serviceId: number
    serviceName?: string | null
    link: string
    quantity: number
    amount: number
    status?: $Enums.OrderStatus
    remark?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: $Enums.SmmProvider
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
    smmOrder?: SmmOrderUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
    user?: UserUpdateOneWithoutOrdersNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
    smmOrder?: SmmOrderUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
    smmOrder?: SmmOrderUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    serviceId: number
    serviceName?: string | null
    link: string
    quantity: number
    amount: number
    status?: $Enums.OrderStatus
    remark?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: $Enums.SmmProvider
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
  }

  export type PaymentCreateInput = {
    id?: string
    zapupiOrderId: string
    amount: number
    status?: $Enums.PaymentStatus
    paymentUrl?: string | null
    utr?: string | null
    customerMobile?: string | null
    zapupiTxnId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    zapupiOrderId: string
    orderId: string
    amount: number
    status?: $Enums.PaymentStatus
    paymentUrl?: string | null
    utr?: string | null
    customerMobile?: string | null
    zapupiTxnId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapupiOrderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    utr?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    zapupiTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapupiOrderId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    utr?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    zapupiTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    zapupiOrderId: string
    orderId: string
    amount: number
    status?: $Enums.PaymentStatus
    paymentUrl?: string | null
    utr?: string | null
    customerMobile?: string | null
    zapupiTxnId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapupiOrderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    utr?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    zapupiTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapupiOrderId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    utr?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    zapupiTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmmOrderCreateInput = {
    id?: string
    smmOrderId?: string | null
    serviceId: number
    provider?: $Enums.SmmProvider
    link: string
    quantity: number
    status?: $Enums.OrderStatus
    startCount?: number | null
    remains?: number | null
    charge?: number | null
    errorMsg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutSmmOrderInput
  }

  export type SmmOrderUncheckedCreateInput = {
    id?: string
    orderId: string
    smmOrderId?: string | null
    serviceId: number
    provider?: $Enums.SmmProvider
    link: string
    quantity: number
    status?: $Enums.OrderStatus
    startCount?: number | null
    remains?: number | null
    charge?: number | null
    errorMsg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmmOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    smmOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: IntFieldUpdateOperationsInput | number
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    startCount?: NullableIntFieldUpdateOperationsInput | number | null
    remains?: NullableIntFieldUpdateOperationsInput | number | null
    charge?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutSmmOrderNestedInput
  }

  export type SmmOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    smmOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: IntFieldUpdateOperationsInput | number
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    startCount?: NullableIntFieldUpdateOperationsInput | number | null
    remains?: NullableIntFieldUpdateOperationsInput | number | null
    charge?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmmOrderCreateManyInput = {
    id?: string
    orderId: string
    smmOrderId?: string | null
    serviceId: number
    provider?: $Enums.SmmProvider
    link: string
    quantity: number
    status?: $Enums.OrderStatus
    startCount?: number | null
    remains?: number | null
    charge?: number | null
    errorMsg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmmOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    smmOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: IntFieldUpdateOperationsInput | number
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    startCount?: NullableIntFieldUpdateOperationsInput | number | null
    remains?: NullableIntFieldUpdateOperationsInput | number | null
    charge?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmmOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    smmOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: IntFieldUpdateOperationsInput | number
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    startCount?: NullableIntFieldUpdateOperationsInput | number | null
    remains?: NullableIntFieldUpdateOperationsInput | number | null
    charge?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateInput = {
    id?: string
    imageUrl: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUncheckedCreateInput = {
    id?: string
    imageUrl: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateManyInput = {
    id?: string
    imageUrl: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialOfferCreateInput = {
    id?: string
    serviceSlug: string
    title: string
    badge?: string
    description?: string | null
    serviceId?: number | null
    quantity?: number | null
    price?: number | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialOfferUncheckedCreateInput = {
    id?: string
    serviceSlug: string
    title: string
    badge?: string
    description?: string | null
    serviceId?: number | null
    quantity?: number | null
    price?: number | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialOfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceSlug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialOfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceSlug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialOfferCreateManyInput = {
    id?: string
    serviceSlug: string
    title: string
    badge?: string
    description?: string | null
    serviceId?: number | null
    quantity?: number | null
    price?: number | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialOfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceSlug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialOfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceSlug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpendCreateInput = {
    id?: string
    category: string
    amount: number
    note?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type SpendUncheckedCreateInput = {
    id?: string
    category: string
    amount: number
    note?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type SpendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpendCreateManyInput = {
    id?: string
    category: string
    amount: number
    note?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type SpendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminAccountCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.AdminRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminAccountUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.AdminRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminAccountCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.AdminRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmmConfigCreateInput = {
    id?: string
    name: string
    type: string
    url: string
    apiKey: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmmConfigUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    url: string
    apiKey: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmmConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmmConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmmConfigCreateManyInput = {
    id?: string
    name: string
    type: string
    url: string
    apiKey: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmmConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmmConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovedGroupCreateInput = {
    id?: string
    chatId: string
    title?: string | null
    createdAt?: Date | string
  }

  export type ApprovedGroupUncheckedCreateInput = {
    id?: string
    chatId: string
    title?: string | null
    createdAt?: Date | string
  }

  export type ApprovedGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovedGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovedGroupCreateManyInput = {
    id?: string
    chatId: string
    title?: string | null
    createdAt?: Date | string
  }

  export type ApprovedGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovedGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailedOrderMessageCreateInput = {
    messageId: number
    orderId: string
    createdAt?: Date | string
  }

  export type FailedOrderMessageUncheckedCreateInput = {
    messageId: number
    orderId: string
    createdAt?: Date | string
  }

  export type FailedOrderMessageUpdateInput = {
    messageId?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailedOrderMessageUncheckedUpdateInput = {
    messageId?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailedOrderMessageCreateManyInput = {
    messageId: number
    orderId: string
    createdAt?: Date | string
  }

  export type FailedOrderMessageUpdateManyMutationInput = {
    messageId?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailedOrderMessageUncheckedUpdateManyInput = {
    messageId?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type EnumSmmProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.SmmProvider | EnumSmmProviderFieldRefInput<$PrismaModel>
    in?: $Enums.SmmProvider[] | ListEnumSmmProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.SmmProvider[] | ListEnumSmmProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumSmmProviderFilter<$PrismaModel> | $Enums.SmmProvider
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type SmmOrderNullableScalarRelationFilter = {
    is?: SmmOrderWhereInput | null
    isNot?: SmmOrderWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    serviceName?: SortOrder
    link?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    serviceId?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    serviceName?: SortOrder
    link?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    serviceName?: SortOrder
    link?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    serviceId?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumSmmProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SmmProvider | EnumSmmProviderFieldRefInput<$PrismaModel>
    in?: $Enums.SmmProvider[] | ListEnumSmmProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.SmmProvider[] | ListEnumSmmProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumSmmProviderWithAggregatesFilter<$PrismaModel> | $Enums.SmmProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSmmProviderFilter<$PrismaModel>
    _max?: NestedEnumSmmProviderFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    zapupiOrderId?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentUrl?: SortOrder
    utr?: SortOrder
    customerMobile?: SortOrder
    zapupiTxnId?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    zapupiOrderId?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentUrl?: SortOrder
    utr?: SortOrder
    customerMobile?: SortOrder
    zapupiTxnId?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    zapupiOrderId?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentUrl?: SortOrder
    utr?: SortOrder
    customerMobile?: SortOrder
    zapupiTxnId?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SmmOrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    smmOrderId?: SortOrder
    serviceId?: SortOrder
    provider?: SortOrder
    link?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    startCount?: SortOrder
    remains?: SortOrder
    charge?: SortOrder
    errorMsg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SmmOrderAvgOrderByAggregateInput = {
    serviceId?: SortOrder
    quantity?: SortOrder
    startCount?: SortOrder
    remains?: SortOrder
    charge?: SortOrder
  }

  export type SmmOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    smmOrderId?: SortOrder
    serviceId?: SortOrder
    provider?: SortOrder
    link?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    startCount?: SortOrder
    remains?: SortOrder
    charge?: SortOrder
    errorMsg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SmmOrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    smmOrderId?: SortOrder
    serviceId?: SortOrder
    provider?: SortOrder
    link?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    startCount?: SortOrder
    remains?: SortOrder
    charge?: SortOrder
    errorMsg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SmmOrderSumOrderByAggregateInput = {
    serviceId?: SortOrder
    quantity?: SortOrder
    startCount?: SortOrder
    remains?: SortOrder
    charge?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SpecialOfferCountOrderByAggregateInput = {
    id?: SortOrder
    serviceSlug?: SortOrder
    title?: SortOrder
    badge?: SortOrder
    description?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialOfferAvgOrderByAggregateInput = {
    serviceId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type SpecialOfferMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceSlug?: SortOrder
    title?: SortOrder
    badge?: SortOrder
    description?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialOfferMinOrderByAggregateInput = {
    id?: SortOrder
    serviceSlug?: SortOrder
    title?: SortOrder
    badge?: SortOrder
    description?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialOfferSumOrderByAggregateInput = {
    serviceId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type SpendCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type SpendAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SpendMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type SpendMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type SpendSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type AdminAccountCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAccountMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type SmmConfigCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SmmConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SmmConfigMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApprovedGroupCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type ApprovedGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type ApprovedGroupMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type FailedOrderMessageCountOrderByAggregateInput = {
    messageId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
  }

  export type FailedOrderMessageAvgOrderByAggregateInput = {
    messageId?: SortOrder
  }

  export type FailedOrderMessageMaxOrderByAggregateInput = {
    messageId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
  }

  export type FailedOrderMessageMinOrderByAggregateInput = {
    messageId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
  }

  export type FailedOrderMessageSumOrderByAggregateInput = {
    messageId?: SortOrder
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
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

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type SmmOrderCreateNestedOneWithoutOrderInput = {
    create?: XOR<SmmOrderCreateWithoutOrderInput, SmmOrderUncheckedCreateWithoutOrderInput>
    connectOrCreate?: SmmOrderCreateOrConnectWithoutOrderInput
    connect?: SmmOrderWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type SmmOrderUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<SmmOrderCreateWithoutOrderInput, SmmOrderUncheckedCreateWithoutOrderInput>
    connectOrCreate?: SmmOrderCreateOrConnectWithoutOrderInput
    connect?: SmmOrderWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type EnumSmmProviderFieldUpdateOperationsInput = {
    set?: $Enums.SmmProvider
  }

  export type UserUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type PaymentUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type SmmOrderUpdateOneWithoutOrderNestedInput = {
    create?: XOR<SmmOrderCreateWithoutOrderInput, SmmOrderUncheckedCreateWithoutOrderInput>
    connectOrCreate?: SmmOrderCreateOrConnectWithoutOrderInput
    upsert?: SmmOrderUpsertWithoutOrderInput
    disconnect?: SmmOrderWhereInput | boolean
    delete?: SmmOrderWhereInput | boolean
    connect?: SmmOrderWhereUniqueInput
    update?: XOR<XOR<SmmOrderUpdateToOneWithWhereWithoutOrderInput, SmmOrderUpdateWithoutOrderInput>, SmmOrderUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type SmmOrderUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<SmmOrderCreateWithoutOrderInput, SmmOrderUncheckedCreateWithoutOrderInput>
    connectOrCreate?: SmmOrderCreateOrConnectWithoutOrderInput
    upsert?: SmmOrderUpsertWithoutOrderInput
    disconnect?: SmmOrderWhereInput | boolean
    delete?: SmmOrderWhereInput | boolean
    connect?: SmmOrderWhereUniqueInput
    update?: XOR<XOR<SmmOrderUpdateToOneWithWhereWithoutOrderInput, SmmOrderUpdateWithoutOrderInput>, SmmOrderUncheckedUpdateWithoutOrderInput>
  }

  export type OrderCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    connect?: OrderWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type OrderUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    upsert?: OrderUpsertWithoutPaymentInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentInput, OrderUpdateWithoutPaymentInput>, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type OrderCreateNestedOneWithoutSmmOrderInput = {
    create?: XOR<OrderCreateWithoutSmmOrderInput, OrderUncheckedCreateWithoutSmmOrderInput>
    connectOrCreate?: OrderCreateOrConnectWithoutSmmOrderInput
    connect?: OrderWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateOneRequiredWithoutSmmOrderNestedInput = {
    create?: XOR<OrderCreateWithoutSmmOrderInput, OrderUncheckedCreateWithoutSmmOrderInput>
    connectOrCreate?: OrderCreateOrConnectWithoutSmmOrderInput
    upsert?: OrderUpsertWithoutSmmOrderInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutSmmOrderInput, OrderUpdateWithoutSmmOrderInput>, OrderUncheckedUpdateWithoutSmmOrderInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAdminRoleFieldUpdateOperationsInput = {
    set?: $Enums.AdminRole
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

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumSmmProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.SmmProvider | EnumSmmProviderFieldRefInput<$PrismaModel>
    in?: $Enums.SmmProvider[] | ListEnumSmmProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.SmmProvider[] | ListEnumSmmProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumSmmProviderFilter<$PrismaModel> | $Enums.SmmProvider
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumSmmProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SmmProvider | EnumSmmProviderFieldRefInput<$PrismaModel>
    in?: $Enums.SmmProvider[] | ListEnumSmmProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.SmmProvider[] | ListEnumSmmProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumSmmProviderWithAggregatesFilter<$PrismaModel> | $Enums.SmmProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSmmProviderFilter<$PrismaModel>
    _max?: NestedEnumSmmProviderFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    serviceId: number
    serviceName?: string | null
    link: string
    quantity: number
    amount: number
    status?: $Enums.OrderStatus
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: $Enums.SmmProvider
    payment?: PaymentCreateNestedOneWithoutOrderInput
    smmOrder?: SmmOrderCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    serviceId: number
    serviceName?: string | null
    link: string
    quantity: number
    amount: number
    status?: $Enums.OrderStatus
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: $Enums.SmmProvider
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
    smmOrder?: SmmOrderUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    serviceId?: IntFilter<"Order"> | number
    serviceName?: StringNullableFilter<"Order"> | string | null
    link?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    amount?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    remark?: StringNullableFilter<"Order"> | string | null
    userId?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    provider?: EnumSmmProviderFilter<"Order"> | $Enums.SmmProvider
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    mobile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    mobile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type PaymentCreateWithoutOrderInput = {
    id?: string
    zapupiOrderId: string
    amount: number
    status?: $Enums.PaymentStatus
    paymentUrl?: string | null
    utr?: string | null
    customerMobile?: string | null
    zapupiTxnId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: string
    zapupiOrderId: string
    amount: number
    status?: $Enums.PaymentStatus
    paymentUrl?: string | null
    utr?: string | null
    customerMobile?: string | null
    zapupiTxnId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type SmmOrderCreateWithoutOrderInput = {
    id?: string
    smmOrderId?: string | null
    serviceId: number
    provider?: $Enums.SmmProvider
    link: string
    quantity: number
    status?: $Enums.OrderStatus
    startCount?: number | null
    remains?: number | null
    charge?: number | null
    errorMsg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmmOrderUncheckedCreateWithoutOrderInput = {
    id?: string
    smmOrderId?: string | null
    serviceId: number
    provider?: $Enums.SmmProvider
    link: string
    quantity: number
    status?: $Enums.OrderStatus
    startCount?: number | null
    remains?: number | null
    charge?: number | null
    errorMsg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmmOrderCreateOrConnectWithoutOrderInput = {
    where: SmmOrderWhereUniqueInput
    create: XOR<SmmOrderCreateWithoutOrderInput, SmmOrderUncheckedCreateWithoutOrderInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithoutOrderInput = {
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutOrderInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapupiOrderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    utr?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    zapupiTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapupiOrderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    utr?: NullableStringFieldUpdateOperationsInput | string | null
    customerMobile?: NullableStringFieldUpdateOperationsInput | string | null
    zapupiTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmmOrderUpsertWithoutOrderInput = {
    update: XOR<SmmOrderUpdateWithoutOrderInput, SmmOrderUncheckedUpdateWithoutOrderInput>
    create: XOR<SmmOrderCreateWithoutOrderInput, SmmOrderUncheckedCreateWithoutOrderInput>
    where?: SmmOrderWhereInput
  }

  export type SmmOrderUpdateToOneWithWhereWithoutOrderInput = {
    where?: SmmOrderWhereInput
    data: XOR<SmmOrderUpdateWithoutOrderInput, SmmOrderUncheckedUpdateWithoutOrderInput>
  }

  export type SmmOrderUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    smmOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: IntFieldUpdateOperationsInput | number
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    startCount?: NullableIntFieldUpdateOperationsInput | number | null
    remains?: NullableIntFieldUpdateOperationsInput | number | null
    charge?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmmOrderUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    smmOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: IntFieldUpdateOperationsInput | number
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    startCount?: NullableIntFieldUpdateOperationsInput | number | null
    remains?: NullableIntFieldUpdateOperationsInput | number | null
    charge?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateWithoutPaymentInput = {
    id?: string
    serviceId: number
    serviceName?: string | null
    link: string
    quantity: number
    amount: number
    status?: $Enums.OrderStatus
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: $Enums.SmmProvider
    user?: UserCreateNestedOneWithoutOrdersInput
    smmOrder?: SmmOrderCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentInput = {
    id?: string
    serviceId: number
    serviceName?: string | null
    link: string
    quantity: number
    amount: number
    status?: $Enums.OrderStatus
    remark?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: $Enums.SmmProvider
    smmOrder?: SmmOrderUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
  }

  export type OrderUpsertWithoutPaymentInput = {
    update: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type OrderUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
    user?: UserUpdateOneWithoutOrdersNestedInput
    smmOrder?: SmmOrderUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
    smmOrder?: SmmOrderUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateWithoutSmmOrderInput = {
    id?: string
    serviceId: number
    serviceName?: string | null
    link: string
    quantity: number
    amount: number
    status?: $Enums.OrderStatus
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: $Enums.SmmProvider
    user?: UserCreateNestedOneWithoutOrdersInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutSmmOrderInput = {
    id?: string
    serviceId: number
    serviceName?: string | null
    link: string
    quantity: number
    amount: number
    status?: $Enums.OrderStatus
    remark?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: $Enums.SmmProvider
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutSmmOrderInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutSmmOrderInput, OrderUncheckedCreateWithoutSmmOrderInput>
  }

  export type OrderUpsertWithoutSmmOrderInput = {
    update: XOR<OrderUpdateWithoutSmmOrderInput, OrderUncheckedUpdateWithoutSmmOrderInput>
    create: XOR<OrderCreateWithoutSmmOrderInput, OrderUncheckedCreateWithoutSmmOrderInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutSmmOrderInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutSmmOrderInput, OrderUncheckedUpdateWithoutSmmOrderInput>
  }

  export type OrderUpdateWithoutSmmOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
    user?: UserUpdateOneWithoutOrdersNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutSmmOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyUserInput = {
    id?: string
    serviceId: number
    serviceName?: string | null
    link: string
    quantity: number
    amount: number
    status?: $Enums.OrderStatus
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: $Enums.SmmProvider
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
    payment?: PaymentUpdateOneWithoutOrderNestedInput
    smmOrder?: SmmOrderUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
    smmOrder?: SmmOrderUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSmmProviderFieldUpdateOperationsInput | $Enums.SmmProvider
  }



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