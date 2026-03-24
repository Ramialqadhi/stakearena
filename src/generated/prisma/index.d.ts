
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
 * Model Challenge
 * 
 */
export type Challenge = $Result.DefaultSelection<Prisma.$ChallengePayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model Evidence
 * 
 */
export type Evidence = $Result.DefaultSelection<Prisma.$EvidencePayload>
/**
 * Model WithdrawalRequest
 * 
 */
export type WithdrawalRequest = $Result.DefaultSelection<Prisma.$WithdrawalRequestPayload>
/**
 * Model MatchmakingQueue
 * 
 */
export type MatchmakingQueue = $Result.DefaultSelection<Prisma.$MatchmakingQueuePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const QueueStatus: {
  WAITING: 'WAITING',
  MATCHED: 'MATCHED',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED'
};

export type QueueStatus = (typeof QueueStatus)[keyof typeof QueueStatus]


export const ChallengeStatus: {
  PENDING: 'PENDING',
  WAITING_FOR_READY: 'WAITING_FOR_READY',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  DISPUTED: 'DISPUTED'
};

export type ChallengeStatus = (typeof ChallengeStatus)[keyof typeof ChallengeStatus]


export const TransactionType: {
  DEPOSIT: 'DEPOSIT',
  WITHDRAWAL: 'WITHDRAWAL',
  STAKE: 'STAKE',
  PAYOUT: 'PAYOUT',
  RAKE: 'RAKE'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]

}

export type QueueStatus = $Enums.QueueStatus

export const QueueStatus: typeof $Enums.QueueStatus

export type ChallengeStatus = $Enums.ChallengeStatus

export const ChallengeStatus: typeof $Enums.ChallengeStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

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
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evidence`: Exposes CRUD operations for the **Evidence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evidences
    * const evidences = await prisma.evidence.findMany()
    * ```
    */
  get evidence(): Prisma.EvidenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawalRequest`: Exposes CRUD operations for the **WithdrawalRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WithdrawalRequests
    * const withdrawalRequests = await prisma.withdrawalRequest.findMany()
    * ```
    */
  get withdrawalRequest(): Prisma.WithdrawalRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchmakingQueue`: Exposes CRUD operations for the **MatchmakingQueue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchmakingQueues
    * const matchmakingQueues = await prisma.matchmakingQueue.findMany()
    * ```
    */
  get matchmakingQueue(): Prisma.MatchmakingQueueDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
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
    Challenge: 'Challenge',
    ChatMessage: 'ChatMessage',
    Transaction: 'Transaction',
    Match: 'Match',
    Evidence: 'Evidence',
    WithdrawalRequest: 'WithdrawalRequest',
    MatchmakingQueue: 'MatchmakingQueue'
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
      modelProps: "user" | "challenge" | "chatMessage" | "transaction" | "match" | "evidence" | "withdrawalRequest" | "matchmakingQueue"
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
      Challenge: {
        payload: Prisma.$ChallengePayload<ExtArgs>
        fields: Prisma.ChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findFirst: {
            args: Prisma.ChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findMany: {
            args: Prisma.ChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          create: {
            args: Prisma.ChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          createMany: {
            args: Prisma.ChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          delete: {
            args: Prisma.ChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          update: {
            args: Prisma.ChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          deleteMany: {
            args: Prisma.ChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          upsert: {
            args: Prisma.ChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.ChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      Evidence: {
        payload: Prisma.$EvidencePayload<ExtArgs>
        fields: Prisma.EvidenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvidenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvidenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          findFirst: {
            args: Prisma.EvidenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvidenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          findMany: {
            args: Prisma.EvidenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>[]
          }
          create: {
            args: Prisma.EvidenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          createMany: {
            args: Prisma.EvidenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvidenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>[]
          }
          delete: {
            args: Prisma.EvidenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          update: {
            args: Prisma.EvidenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          deleteMany: {
            args: Prisma.EvidenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvidenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvidenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>[]
          }
          upsert: {
            args: Prisma.EvidenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          aggregate: {
            args: Prisma.EvidenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvidence>
          }
          groupBy: {
            args: Prisma.EvidenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvidenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvidenceCountArgs<ExtArgs>
            result: $Utils.Optional<EvidenceCountAggregateOutputType> | number
          }
        }
      }
      WithdrawalRequest: {
        payload: Prisma.$WithdrawalRequestPayload<ExtArgs>
        fields: Prisma.WithdrawalRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WithdrawalRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WithdrawalRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>
          }
          findFirst: {
            args: Prisma.WithdrawalRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WithdrawalRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>
          }
          findMany: {
            args: Prisma.WithdrawalRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>[]
          }
          create: {
            args: Prisma.WithdrawalRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>
          }
          createMany: {
            args: Prisma.WithdrawalRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WithdrawalRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>[]
          }
          delete: {
            args: Prisma.WithdrawalRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>
          }
          update: {
            args: Prisma.WithdrawalRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>
          }
          deleteMany: {
            args: Prisma.WithdrawalRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WithdrawalRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WithdrawalRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>[]
          }
          upsert: {
            args: Prisma.WithdrawalRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>
          }
          aggregate: {
            args: Prisma.WithdrawalRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawalRequest>
          }
          groupBy: {
            args: Prisma.WithdrawalRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.WithdrawalRequestCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalRequestCountAggregateOutputType> | number
          }
        }
      }
      MatchmakingQueue: {
        payload: Prisma.$MatchmakingQueuePayload<ExtArgs>
        fields: Prisma.MatchmakingQueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchmakingQueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchmakingQueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchmakingQueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchmakingQueuePayload>
          }
          findFirst: {
            args: Prisma.MatchmakingQueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchmakingQueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchmakingQueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchmakingQueuePayload>
          }
          findMany: {
            args: Prisma.MatchmakingQueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchmakingQueuePayload>[]
          }
          create: {
            args: Prisma.MatchmakingQueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchmakingQueuePayload>
          }
          createMany: {
            args: Prisma.MatchmakingQueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchmakingQueueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchmakingQueuePayload>[]
          }
          delete: {
            args: Prisma.MatchmakingQueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchmakingQueuePayload>
          }
          update: {
            args: Prisma.MatchmakingQueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchmakingQueuePayload>
          }
          deleteMany: {
            args: Prisma.MatchmakingQueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchmakingQueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchmakingQueueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchmakingQueuePayload>[]
          }
          upsert: {
            args: Prisma.MatchmakingQueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchmakingQueuePayload>
          }
          aggregate: {
            args: Prisma.MatchmakingQueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchmakingQueue>
          }
          groupBy: {
            args: Prisma.MatchmakingQueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchmakingQueueGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchmakingQueueCountArgs<ExtArgs>
            result: $Utils.Optional<MatchmakingQueueCountAggregateOutputType> | number
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
    challenge?: ChallengeOmit
    chatMessage?: ChatMessageOmit
    transaction?: TransactionOmit
    match?: MatchOmit
    evidence?: EvidenceOmit
    withdrawalRequest?: WithdrawalRequestOmit
    matchmakingQueue?: MatchmakingQueueOmit
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
    challengesCreated: number
    challengesOpponent: number
    wonChallenges: number
    chatMessages: number
    evidence: number
    matches: number
    transactions: number
    withdrawalRequests: number
    matchmakingQueues: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challengesCreated?: boolean | UserCountOutputTypeCountChallengesCreatedArgs
    challengesOpponent?: boolean | UserCountOutputTypeCountChallengesOpponentArgs
    wonChallenges?: boolean | UserCountOutputTypeCountWonChallengesArgs
    chatMessages?: boolean | UserCountOutputTypeCountChatMessagesArgs
    evidence?: boolean | UserCountOutputTypeCountEvidenceArgs
    matches?: boolean | UserCountOutputTypeCountMatchesArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    withdrawalRequests?: boolean | UserCountOutputTypeCountWithdrawalRequestsArgs
    matchmakingQueues?: boolean | UserCountOutputTypeCountMatchmakingQueuesArgs
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
  export type UserCountOutputTypeCountChallengesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChallengesOpponentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWonChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEvidenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvidenceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWithdrawalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchmakingQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchmakingQueueWhereInput
  }


  /**
   * Count Type ChallengeCountOutputType
   */

  export type ChallengeCountOutputType = {
    chatMessages: number
    evidence: number
    transactions: number
  }

  export type ChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessages?: boolean | ChallengeCountOutputTypeCountChatMessagesArgs
    evidence?: boolean | ChallengeCountOutputTypeCountEvidenceArgs
    transactions?: boolean | ChallengeCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCountOutputType
     */
    select?: ChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountEvidenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvidenceWhereInput
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    balance: number | null
    totalWins: number | null
    totalLosses: number | null
    totalEarnings: number | null
    ghostStrikes: number | null
  }

  export type UserSumAggregateOutputType = {
    balance: number | null
    totalWins: number | null
    totalLosses: number | null
    totalEarnings: number | null
    ghostStrikes: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    avatar: string | null
    balance: number | null
    totalWins: number | null
    totalLosses: number | null
    totalEarnings: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isAdmin: boolean | null
    ghostStrikes: number | null
    suspendedUntil: Date | null
    gameCredentials: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    avatar: string | null
    balance: number | null
    totalWins: number | null
    totalLosses: number | null
    totalEarnings: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isAdmin: boolean | null
    ghostStrikes: number | null
    suspendedUntil: Date | null
    gameCredentials: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    avatar: number
    balance: number
    totalWins: number
    totalLosses: number
    totalEarnings: number
    createdAt: number
    updatedAt: number
    isAdmin: number
    ghostStrikes: number
    suspendedUntil: number
    gameCredentials: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    balance?: true
    totalWins?: true
    totalLosses?: true
    totalEarnings?: true
    ghostStrikes?: true
  }

  export type UserSumAggregateInputType = {
    balance?: true
    totalWins?: true
    totalLosses?: true
    totalEarnings?: true
    ghostStrikes?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    avatar?: true
    balance?: true
    totalWins?: true
    totalLosses?: true
    totalEarnings?: true
    createdAt?: true
    updatedAt?: true
    isAdmin?: true
    ghostStrikes?: true
    suspendedUntil?: true
    gameCredentials?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    avatar?: true
    balance?: true
    totalWins?: true
    totalLosses?: true
    totalEarnings?: true
    createdAt?: true
    updatedAt?: true
    isAdmin?: true
    ghostStrikes?: true
    suspendedUntil?: true
    gameCredentials?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    avatar?: true
    balance?: true
    totalWins?: true
    totalLosses?: true
    totalEarnings?: true
    createdAt?: true
    updatedAt?: true
    isAdmin?: true
    ghostStrikes?: true
    suspendedUntil?: true
    gameCredentials?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string
    avatar: string | null
    balance: number
    totalWins: number
    totalLosses: number
    totalEarnings: number
    createdAt: Date
    updatedAt: Date
    isAdmin: boolean
    ghostStrikes: number
    suspendedUntil: Date | null
    gameCredentials: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    balance?: boolean
    totalWins?: boolean
    totalLosses?: boolean
    totalEarnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isAdmin?: boolean
    ghostStrikes?: boolean
    suspendedUntil?: boolean
    gameCredentials?: boolean
    challengesCreated?: boolean | User$challengesCreatedArgs<ExtArgs>
    challengesOpponent?: boolean | User$challengesOpponentArgs<ExtArgs>
    wonChallenges?: boolean | User$wonChallengesArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    evidence?: boolean | User$evidenceArgs<ExtArgs>
    matches?: boolean | User$matchesArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    withdrawalRequests?: boolean | User$withdrawalRequestsArgs<ExtArgs>
    matchmakingQueues?: boolean | User$matchmakingQueuesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    balance?: boolean
    totalWins?: boolean
    totalLosses?: boolean
    totalEarnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isAdmin?: boolean
    ghostStrikes?: boolean
    suspendedUntil?: boolean
    gameCredentials?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    balance?: boolean
    totalWins?: boolean
    totalLosses?: boolean
    totalEarnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isAdmin?: boolean
    ghostStrikes?: boolean
    suspendedUntil?: boolean
    gameCredentials?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    balance?: boolean
    totalWins?: boolean
    totalLosses?: boolean
    totalEarnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isAdmin?: boolean
    ghostStrikes?: boolean
    suspendedUntil?: boolean
    gameCredentials?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "avatar" | "balance" | "totalWins" | "totalLosses" | "totalEarnings" | "createdAt" | "updatedAt" | "isAdmin" | "ghostStrikes" | "suspendedUntil" | "gameCredentials", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challengesCreated?: boolean | User$challengesCreatedArgs<ExtArgs>
    challengesOpponent?: boolean | User$challengesOpponentArgs<ExtArgs>
    wonChallenges?: boolean | User$wonChallengesArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    evidence?: boolean | User$evidenceArgs<ExtArgs>
    matches?: boolean | User$matchesArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    withdrawalRequests?: boolean | User$withdrawalRequestsArgs<ExtArgs>
    matchmakingQueues?: boolean | User$matchmakingQueuesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      challengesCreated: Prisma.$ChallengePayload<ExtArgs>[]
      challengesOpponent: Prisma.$ChallengePayload<ExtArgs>[]
      wonChallenges: Prisma.$ChallengePayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      evidence: Prisma.$EvidencePayload<ExtArgs>[]
      matches: Prisma.$MatchPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      withdrawalRequests: Prisma.$WithdrawalRequestPayload<ExtArgs>[]
      matchmakingQueues: Prisma.$MatchmakingQueuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string
      avatar: string | null
      balance: number
      totalWins: number
      totalLosses: number
      totalEarnings: number
      createdAt: Date
      updatedAt: Date
      isAdmin: boolean
      ghostStrikes: number
      suspendedUntil: Date | null
      gameCredentials: string | null
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
    challengesCreated<T extends User$challengesCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$challengesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    challengesOpponent<T extends User$challengesOpponentArgs<ExtArgs> = {}>(args?: Subset<T, User$challengesOpponentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wonChallenges<T extends User$wonChallengesArgs<ExtArgs> = {}>(args?: Subset<T, User$wonChallengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends User$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evidence<T extends User$evidenceArgs<ExtArgs> = {}>(args?: Subset<T, User$evidenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends User$matchesArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    withdrawalRequests<T extends User$withdrawalRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$withdrawalRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchmakingQueues<T extends User$matchmakingQueuesArgs<ExtArgs> = {}>(args?: Subset<T, User$matchmakingQueuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchmakingQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly balance: FieldRef<"User", 'Float'>
    readonly totalWins: FieldRef<"User", 'Int'>
    readonly totalLosses: FieldRef<"User", 'Int'>
    readonly totalEarnings: FieldRef<"User", 'Float'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly ghostStrikes: FieldRef<"User", 'Int'>
    readonly suspendedUntil: FieldRef<"User", 'DateTime'>
    readonly gameCredentials: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.challengesCreated
   */
  export type User$challengesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    cursor?: ChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * User.challengesOpponent
   */
  export type User$challengesOpponentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    cursor?: ChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * User.wonChallenges
   */
  export type User$wonChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    cursor?: ChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * User.chatMessages
   */
  export type User$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.evidence
   */
  export type User$evidenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    where?: EvidenceWhereInput
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    cursor?: EvidenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * User.matches
   */
  export type User$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.withdrawalRequests
   */
  export type User$withdrawalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    where?: WithdrawalRequestWhereInput
    orderBy?: WithdrawalRequestOrderByWithRelationInput | WithdrawalRequestOrderByWithRelationInput[]
    cursor?: WithdrawalRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalRequestScalarFieldEnum | WithdrawalRequestScalarFieldEnum[]
  }

  /**
   * User.matchmakingQueues
   */
  export type User$matchmakingQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchmakingQueue
     */
    select?: MatchmakingQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchmakingQueue
     */
    omit?: MatchmakingQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchmakingQueueInclude<ExtArgs> | null
    where?: MatchmakingQueueWhereInput
    orderBy?: MatchmakingQueueOrderByWithRelationInput | MatchmakingQueueOrderByWithRelationInput[]
    cursor?: MatchmakingQueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchmakingQueueScalarFieldEnum | MatchmakingQueueScalarFieldEnum[]
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
   * Model Challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeAvgAggregateOutputType = {
    stakeAmount: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    stakeAmount: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: string | null
    creatorId: string | null
    opponentId: string | null
    game: string | null
    stakeAmount: number | null
    status: $Enums.ChallengeStatus | null
    winnerId: string | null
    creatorPaid: boolean | null
    opponentPaid: boolean | null
    shareCode: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    startedAt: Date | null
    isMatchmaking: boolean | null
    creatorCredentials: string | null
    opponentCredentials: string | null
    reminderSentAt: Date | null
    creatorReady: boolean | null
    opponentReady: boolean | null
    readyAt: Date | null
    readyDeadline: Date | null
    readyReminderSentAt: Date | null
    readyUrgentReminderSentAt: Date | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: string | null
    creatorId: string | null
    opponentId: string | null
    game: string | null
    stakeAmount: number | null
    status: $Enums.ChallengeStatus | null
    winnerId: string | null
    creatorPaid: boolean | null
    opponentPaid: boolean | null
    shareCode: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    startedAt: Date | null
    isMatchmaking: boolean | null
    creatorCredentials: string | null
    opponentCredentials: string | null
    reminderSentAt: Date | null
    creatorReady: boolean | null
    opponentReady: boolean | null
    readyAt: Date | null
    readyDeadline: Date | null
    readyReminderSentAt: Date | null
    readyUrgentReminderSentAt: Date | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    creatorId: number
    opponentId: number
    game: number
    stakeAmount: number
    status: number
    winnerId: number
    creatorPaid: number
    opponentPaid: number
    shareCode: number
    notes: number
    createdAt: number
    updatedAt: number
    startedAt: number
    isMatchmaking: number
    creatorCredentials: number
    opponentCredentials: number
    reminderSentAt: number
    creatorReady: number
    opponentReady: number
    readyAt: number
    readyDeadline: number
    readyReminderSentAt: number
    readyUrgentReminderSentAt: number
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    stakeAmount?: true
  }

  export type ChallengeSumAggregateInputType = {
    stakeAmount?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    creatorId?: true
    opponentId?: true
    game?: true
    stakeAmount?: true
    status?: true
    winnerId?: true
    creatorPaid?: true
    opponentPaid?: true
    shareCode?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    startedAt?: true
    isMatchmaking?: true
    creatorCredentials?: true
    opponentCredentials?: true
    reminderSentAt?: true
    creatorReady?: true
    opponentReady?: true
    readyAt?: true
    readyDeadline?: true
    readyReminderSentAt?: true
    readyUrgentReminderSentAt?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    creatorId?: true
    opponentId?: true
    game?: true
    stakeAmount?: true
    status?: true
    winnerId?: true
    creatorPaid?: true
    opponentPaid?: true
    shareCode?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    startedAt?: true
    isMatchmaking?: true
    creatorCredentials?: true
    opponentCredentials?: true
    reminderSentAt?: true
    creatorReady?: true
    opponentReady?: true
    readyAt?: true
    readyDeadline?: true
    readyReminderSentAt?: true
    readyUrgentReminderSentAt?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    creatorId?: true
    opponentId?: true
    game?: true
    stakeAmount?: true
    status?: true
    winnerId?: true
    creatorPaid?: true
    opponentPaid?: true
    shareCode?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    startedAt?: true
    isMatchmaking?: true
    creatorCredentials?: true
    opponentCredentials?: true
    reminderSentAt?: true
    creatorReady?: true
    opponentReady?: true
    readyAt?: true
    readyDeadline?: true
    readyReminderSentAt?: true
    readyUrgentReminderSentAt?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenge to aggregate.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type ChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithAggregationInput | ChallengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: ChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _avg?: ChallengeAvgAggregateInputType
    _sum?: ChallengeSumAggregateInputType
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    id: string
    creatorId: string
    opponentId: string | null
    game: string
    stakeAmount: number
    status: $Enums.ChallengeStatus
    winnerId: string | null
    creatorPaid: boolean
    opponentPaid: boolean
    shareCode: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    startedAt: Date | null
    isMatchmaking: boolean
    creatorCredentials: string | null
    opponentCredentials: string | null
    reminderSentAt: Date | null
    creatorReady: boolean
    opponentReady: boolean
    readyAt: Date | null
    readyDeadline: Date | null
    readyReminderSentAt: Date | null
    readyUrgentReminderSentAt: Date | null
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends ChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    opponentId?: boolean
    game?: boolean
    stakeAmount?: boolean
    status?: boolean
    winnerId?: boolean
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    isMatchmaking?: boolean
    creatorCredentials?: boolean
    opponentCredentials?: boolean
    reminderSentAt?: boolean
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: boolean
    readyDeadline?: boolean
    readyReminderSentAt?: boolean
    readyUrgentReminderSentAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    opponent?: boolean | Challenge$opponentArgs<ExtArgs>
    winner?: boolean | Challenge$winnerArgs<ExtArgs>
    chatMessages?: boolean | Challenge$chatMessagesArgs<ExtArgs>
    evidence?: boolean | Challenge$evidenceArgs<ExtArgs>
    match?: boolean | Challenge$matchArgs<ExtArgs>
    transactions?: boolean | Challenge$transactionsArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    opponentId?: boolean
    game?: boolean
    stakeAmount?: boolean
    status?: boolean
    winnerId?: boolean
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    isMatchmaking?: boolean
    creatorCredentials?: boolean
    opponentCredentials?: boolean
    reminderSentAt?: boolean
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: boolean
    readyDeadline?: boolean
    readyReminderSentAt?: boolean
    readyUrgentReminderSentAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    opponent?: boolean | Challenge$opponentArgs<ExtArgs>
    winner?: boolean | Challenge$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    opponentId?: boolean
    game?: boolean
    stakeAmount?: boolean
    status?: boolean
    winnerId?: boolean
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    isMatchmaking?: boolean
    creatorCredentials?: boolean
    opponentCredentials?: boolean
    reminderSentAt?: boolean
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: boolean
    readyDeadline?: boolean
    readyReminderSentAt?: boolean
    readyUrgentReminderSentAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    opponent?: boolean | Challenge$opponentArgs<ExtArgs>
    winner?: boolean | Challenge$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectScalar = {
    id?: boolean
    creatorId?: boolean
    opponentId?: boolean
    game?: boolean
    stakeAmount?: boolean
    status?: boolean
    winnerId?: boolean
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    isMatchmaking?: boolean
    creatorCredentials?: boolean
    opponentCredentials?: boolean
    reminderSentAt?: boolean
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: boolean
    readyDeadline?: boolean
    readyReminderSentAt?: boolean
    readyUrgentReminderSentAt?: boolean
  }

  export type ChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creatorId" | "opponentId" | "game" | "stakeAmount" | "status" | "winnerId" | "creatorPaid" | "opponentPaid" | "shareCode" | "notes" | "createdAt" | "updatedAt" | "startedAt" | "isMatchmaking" | "creatorCredentials" | "opponentCredentials" | "reminderSentAt" | "creatorReady" | "opponentReady" | "readyAt" | "readyDeadline" | "readyReminderSentAt" | "readyUrgentReminderSentAt", ExtArgs["result"]["challenge"]>
  export type ChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    opponent?: boolean | Challenge$opponentArgs<ExtArgs>
    winner?: boolean | Challenge$winnerArgs<ExtArgs>
    chatMessages?: boolean | Challenge$chatMessagesArgs<ExtArgs>
    evidence?: boolean | Challenge$evidenceArgs<ExtArgs>
    match?: boolean | Challenge$matchArgs<ExtArgs>
    transactions?: boolean | Challenge$transactionsArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    opponent?: boolean | Challenge$opponentArgs<ExtArgs>
    winner?: boolean | Challenge$winnerArgs<ExtArgs>
  }
  export type ChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    opponent?: boolean | Challenge$opponentArgs<ExtArgs>
    winner?: boolean | Challenge$winnerArgs<ExtArgs>
  }

  export type $ChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challenge"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      opponent: Prisma.$UserPayload<ExtArgs> | null
      winner: Prisma.$UserPayload<ExtArgs> | null
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      evidence: Prisma.$EvidencePayload<ExtArgs>[]
      match: Prisma.$MatchPayload<ExtArgs> | null
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creatorId: string
      opponentId: string | null
      game: string
      stakeAmount: number
      status: $Enums.ChallengeStatus
      winnerId: string | null
      creatorPaid: boolean
      opponentPaid: boolean
      shareCode: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
      startedAt: Date | null
      isMatchmaking: boolean
      creatorCredentials: string | null
      opponentCredentials: string | null
      reminderSentAt: Date | null
      creatorReady: boolean
      opponentReady: boolean
      readyAt: Date | null
      readyDeadline: Date | null
      readyReminderSentAt: Date | null
      readyUrgentReminderSentAt: Date | null
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }

  type ChallengeGetPayload<S extends boolean | null | undefined | ChallengeDefaultArgs> = $Result.GetResult<Prisma.$ChallengePayload, S>

  type ChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface ChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challenge'], meta: { name: 'Challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {ChallengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeFindUniqueArgs>(args: SelectSubset<T, ChallengeFindUniqueArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeFindFirstArgs>(args?: SelectSubset<T, ChallengeFindFirstArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeFindManyArgs>(args?: SelectSubset<T, ChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge.
     * @param {ChallengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
     */
    create<T extends ChallengeCreateArgs>(args: SelectSubset<T, ChallengeCreateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenges.
     * @param {ChallengeCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeCreateManyArgs>(args?: SelectSubset<T, ChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenges and returns the data saved in the database.
     * @param {ChallengeCreateManyAndReturnArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Challenge.
     * @param {ChallengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
     */
    delete<T extends ChallengeDeleteArgs>(args: SelectSubset<T, ChallengeDeleteArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge.
     * @param {ChallengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeUpdateArgs>(args: SelectSubset<T, ChallengeUpdateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenges.
     * @param {ChallengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeDeleteManyArgs>(args?: SelectSubset<T, ChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeUpdateManyArgs>(args: SelectSubset<T, ChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges and returns the data updated in the database.
     * @param {ChallengeUpdateManyAndReturnArgs} args - Arguments to update many Challenges.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Challenge.
     * @param {ChallengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeUpsertArgs>(args: SelectSubset<T, ChallengeUpsertArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCountArgs>(
      args?: Subset<T, ChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeGroupByArgs} args - Group by arguments.
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
      T extends ChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challenge model
   */
  readonly fields: ChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opponent<T extends Challenge$opponentArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$opponentArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    winner<T extends Challenge$winnerArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$winnerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chatMessages<T extends Challenge$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evidence<T extends Challenge$evidenceArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$evidenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    match<T extends Challenge$matchArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$matchArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Challenge$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Challenge model
   */
  interface ChallengeFieldRefs {
    readonly id: FieldRef<"Challenge", 'String'>
    readonly creatorId: FieldRef<"Challenge", 'String'>
    readonly opponentId: FieldRef<"Challenge", 'String'>
    readonly game: FieldRef<"Challenge", 'String'>
    readonly stakeAmount: FieldRef<"Challenge", 'Float'>
    readonly status: FieldRef<"Challenge", 'ChallengeStatus'>
    readonly winnerId: FieldRef<"Challenge", 'String'>
    readonly creatorPaid: FieldRef<"Challenge", 'Boolean'>
    readonly opponentPaid: FieldRef<"Challenge", 'Boolean'>
    readonly shareCode: FieldRef<"Challenge", 'String'>
    readonly notes: FieldRef<"Challenge", 'String'>
    readonly createdAt: FieldRef<"Challenge", 'DateTime'>
    readonly updatedAt: FieldRef<"Challenge", 'DateTime'>
    readonly startedAt: FieldRef<"Challenge", 'DateTime'>
    readonly isMatchmaking: FieldRef<"Challenge", 'Boolean'>
    readonly creatorCredentials: FieldRef<"Challenge", 'String'>
    readonly opponentCredentials: FieldRef<"Challenge", 'String'>
    readonly reminderSentAt: FieldRef<"Challenge", 'DateTime'>
    readonly creatorReady: FieldRef<"Challenge", 'Boolean'>
    readonly opponentReady: FieldRef<"Challenge", 'Boolean'>
    readonly readyAt: FieldRef<"Challenge", 'DateTime'>
    readonly readyDeadline: FieldRef<"Challenge", 'DateTime'>
    readonly readyReminderSentAt: FieldRef<"Challenge", 'DateTime'>
    readonly readyUrgentReminderSentAt: FieldRef<"Challenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Challenge findUnique
   */
  export type ChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findUniqueOrThrow
   */
  export type ChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findFirst
   */
  export type ChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findFirstOrThrow
   */
  export type ChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findMany
   */
  export type ChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenges to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge create
   */
  export type ChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a Challenge.
     */
    data: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
  }

  /**
   * Challenge createMany
   */
  export type ChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge createManyAndReturn
   */
  export type ChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Challenge update
   */
  export type ChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a Challenge.
     */
    data: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
    /**
     * Choose, which Challenge to update.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge updateManyAndReturn
   */
  export type ChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Challenge upsert
   */
  export type ChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the Challenge to update in case it exists.
     */
    where: ChallengeWhereUniqueInput
    /**
     * In case the Challenge found by the `where` argument doesn't exist, create a new Challenge with this data.
     */
    create: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
  }

  /**
   * Challenge delete
   */
  export type ChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter which Challenge to delete.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge deleteMany
   */
  export type ChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenges to delete
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to delete.
     */
    limit?: number
  }

  /**
   * Challenge.opponent
   */
  export type Challenge$opponentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Challenge.winner
   */
  export type Challenge$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Challenge.chatMessages
   */
  export type Challenge$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * Challenge.evidence
   */
  export type Challenge$evidenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    where?: EvidenceWhereInput
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    cursor?: EvidenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Challenge.match
   */
  export type Challenge$matchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
  }

  /**
   * Challenge.transactions
   */
  export type Challenge$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Challenge without action
   */
  export type ChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    challengeId: string | null
    userId: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    challengeId: string | null
    userId: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    challengeId: number
    userId: number
    message: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    message?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    message?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    challengeId: string
    userId: string
    message: string
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "challengeId" | "userId" | "message" | "createdAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      challenge: Prisma.$ChallengePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      challengeId: string
      userId: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly challengeId: FieldRef<"ChatMessage", 'String'>
    readonly userId: FieldRef<"ChatMessage", 'String'>
    readonly message: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.TransactionType | null
    amount: number | null
    status: $Enums.TransactionStatus | null
    challengeId: string | null
    description: string | null
    createdAt: Date | null
    stripeSessionId: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.TransactionType | null
    amount: number | null
    status: $Enums.TransactionStatus | null
    challengeId: string | null
    description: string | null
    createdAt: Date | null
    stripeSessionId: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    amount: number
    status: number
    challengeId: number
    description: number
    createdAt: number
    stripeSessionId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    status?: true
    challengeId?: true
    description?: true
    createdAt?: true
    stripeSessionId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    status?: true
    challengeId?: true
    description?: true
    createdAt?: true
    stripeSessionId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    status?: true
    challengeId?: true
    description?: true
    createdAt?: true
    stripeSessionId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.TransactionType
    amount: number
    status: $Enums.TransactionStatus
    challengeId: string | null
    description: string | null
    createdAt: Date
    stripeSessionId: string | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    challengeId?: boolean
    description?: boolean
    createdAt?: boolean
    stripeSessionId?: boolean
    challenge?: boolean | Transaction$challengeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    challengeId?: boolean
    description?: boolean
    createdAt?: boolean
    stripeSessionId?: boolean
    challenge?: boolean | Transaction$challengeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    challengeId?: boolean
    description?: boolean
    createdAt?: boolean
    stripeSessionId?: boolean
    challenge?: boolean | Transaction$challengeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    challengeId?: boolean
    description?: boolean
    createdAt?: boolean
    stripeSessionId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "amount" | "status" | "challengeId" | "description" | "createdAt" | "stripeSessionId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | Transaction$challengeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | Transaction$challengeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | Transaction$challengeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      challenge: Prisma.$ChallengePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.TransactionType
      amount: number
      status: $Enums.TransactionStatus
      challengeId: string | null
      description: string | null
      createdAt: Date
      stripeSessionId: string | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends Transaction$challengeArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$challengeArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly challengeId: FieldRef<"Transaction", 'String'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly stripeSessionId: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.challenge
   */
  export type Transaction$challengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    where?: ChallengeWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    challengeId: string | null
    confirmedById: string | null
    creatorScore: string | null
    opponentScore: string | null
    notes: string | null
    confirmedAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    challengeId: string | null
    confirmedById: string | null
    creatorScore: string | null
    opponentScore: string | null
    notes: string | null
    confirmedAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    challengeId: number
    confirmedById: number
    creatorScore: number
    opponentScore: number
    notes: number
    confirmedAt: number
    _all: number
  }


  export type MatchMinAggregateInputType = {
    id?: true
    challengeId?: true
    confirmedById?: true
    creatorScore?: true
    opponentScore?: true
    notes?: true
    confirmedAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    challengeId?: true
    confirmedById?: true
    creatorScore?: true
    opponentScore?: true
    notes?: true
    confirmedAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    challengeId?: true
    confirmedById?: true
    creatorScore?: true
    opponentScore?: true
    notes?: true
    confirmedAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    challengeId: string
    confirmedById: string
    creatorScore: string | null
    opponentScore: string | null
    notes: string | null
    confirmedAt: Date
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    confirmedById?: boolean
    creatorScore?: boolean
    opponentScore?: boolean
    notes?: boolean
    confirmedAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    confirmedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    confirmedById?: boolean
    creatorScore?: boolean
    opponentScore?: boolean
    notes?: boolean
    confirmedAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    confirmedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    confirmedById?: boolean
    creatorScore?: boolean
    opponentScore?: boolean
    notes?: boolean
    confirmedAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    confirmedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    challengeId?: boolean
    confirmedById?: boolean
    creatorScore?: boolean
    opponentScore?: boolean
    notes?: boolean
    confirmedAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "challengeId" | "confirmedById" | "creatorScore" | "opponentScore" | "notes" | "confirmedAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    confirmedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    confirmedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    confirmedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      challenge: Prisma.$ChallengePayload<ExtArgs>
      confirmedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      challengeId: string
      confirmedById: string
      creatorScore: string | null
      opponentScore: string | null
      notes: string | null
      confirmedAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
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
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    confirmedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly challengeId: FieldRef<"Match", 'String'>
    readonly confirmedById: FieldRef<"Match", 'String'>
    readonly creatorScore: FieldRef<"Match", 'String'>
    readonly opponentScore: FieldRef<"Match", 'String'>
    readonly notes: FieldRef<"Match", 'String'>
    readonly confirmedAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model Evidence
   */

  export type AggregateEvidence = {
    _count: EvidenceCountAggregateOutputType | null
    _min: EvidenceMinAggregateOutputType | null
    _max: EvidenceMaxAggregateOutputType | null
  }

  export type EvidenceMinAggregateOutputType = {
    id: string | null
    challengeId: string | null
    userId: string | null
    fileUrl: string | null
    fileType: string | null
    description: string | null
    createdAt: Date | null
  }

  export type EvidenceMaxAggregateOutputType = {
    id: string | null
    challengeId: string | null
    userId: string | null
    fileUrl: string | null
    fileType: string | null
    description: string | null
    createdAt: Date | null
  }

  export type EvidenceCountAggregateOutputType = {
    id: number
    challengeId: number
    userId: number
    fileUrl: number
    fileType: number
    description: number
    createdAt: number
    _all: number
  }


  export type EvidenceMinAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    fileUrl?: true
    fileType?: true
    description?: true
    createdAt?: true
  }

  export type EvidenceMaxAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    fileUrl?: true
    fileType?: true
    description?: true
    createdAt?: true
  }

  export type EvidenceCountAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    fileUrl?: true
    fileType?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type EvidenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evidence to aggregate.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evidences
    **/
    _count?: true | EvidenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvidenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvidenceMaxAggregateInputType
  }

  export type GetEvidenceAggregateType<T extends EvidenceAggregateArgs> = {
        [P in keyof T & keyof AggregateEvidence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvidence[P]>
      : GetScalarType<T[P], AggregateEvidence[P]>
  }




  export type EvidenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvidenceWhereInput
    orderBy?: EvidenceOrderByWithAggregationInput | EvidenceOrderByWithAggregationInput[]
    by: EvidenceScalarFieldEnum[] | EvidenceScalarFieldEnum
    having?: EvidenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvidenceCountAggregateInputType | true
    _min?: EvidenceMinAggregateInputType
    _max?: EvidenceMaxAggregateInputType
  }

  export type EvidenceGroupByOutputType = {
    id: string
    challengeId: string
    userId: string
    fileUrl: string
    fileType: string
    description: string | null
    createdAt: Date
    _count: EvidenceCountAggregateOutputType | null
    _min: EvidenceMinAggregateOutputType | null
    _max: EvidenceMaxAggregateOutputType | null
  }

  type GetEvidenceGroupByPayload<T extends EvidenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvidenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvidenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvidenceGroupByOutputType[P]>
            : GetScalarType<T[P], EvidenceGroupByOutputType[P]>
        }
      >
    >


  export type EvidenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    fileUrl?: boolean
    fileType?: boolean
    description?: boolean
    createdAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evidence"]>

  export type EvidenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    fileUrl?: boolean
    fileType?: boolean
    description?: boolean
    createdAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evidence"]>

  export type EvidenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    fileUrl?: boolean
    fileType?: boolean
    description?: boolean
    createdAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evidence"]>

  export type EvidenceSelectScalar = {
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    fileUrl?: boolean
    fileType?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type EvidenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "challengeId" | "userId" | "fileUrl" | "fileType" | "description" | "createdAt", ExtArgs["result"]["evidence"]>
  export type EvidenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EvidenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EvidenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EvidencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evidence"
    objects: {
      challenge: Prisma.$ChallengePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      challengeId: string
      userId: string
      fileUrl: string
      fileType: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["evidence"]>
    composites: {}
  }

  type EvidenceGetPayload<S extends boolean | null | undefined | EvidenceDefaultArgs> = $Result.GetResult<Prisma.$EvidencePayload, S>

  type EvidenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvidenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvidenceCountAggregateInputType | true
    }

  export interface EvidenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evidence'], meta: { name: 'Evidence' } }
    /**
     * Find zero or one Evidence that matches the filter.
     * @param {EvidenceFindUniqueArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvidenceFindUniqueArgs>(args: SelectSubset<T, EvidenceFindUniqueArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evidence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvidenceFindUniqueOrThrowArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvidenceFindUniqueOrThrowArgs>(args: SelectSubset<T, EvidenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evidence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceFindFirstArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvidenceFindFirstArgs>(args?: SelectSubset<T, EvidenceFindFirstArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evidence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceFindFirstOrThrowArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvidenceFindFirstOrThrowArgs>(args?: SelectSubset<T, EvidenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evidences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evidences
     * const evidences = await prisma.evidence.findMany()
     * 
     * // Get first 10 Evidences
     * const evidences = await prisma.evidence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evidenceWithIdOnly = await prisma.evidence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvidenceFindManyArgs>(args?: SelectSubset<T, EvidenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evidence.
     * @param {EvidenceCreateArgs} args - Arguments to create a Evidence.
     * @example
     * // Create one Evidence
     * const Evidence = await prisma.evidence.create({
     *   data: {
     *     // ... data to create a Evidence
     *   }
     * })
     * 
     */
    create<T extends EvidenceCreateArgs>(args: SelectSubset<T, EvidenceCreateArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evidences.
     * @param {EvidenceCreateManyArgs} args - Arguments to create many Evidences.
     * @example
     * // Create many Evidences
     * const evidence = await prisma.evidence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvidenceCreateManyArgs>(args?: SelectSubset<T, EvidenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evidences and returns the data saved in the database.
     * @param {EvidenceCreateManyAndReturnArgs} args - Arguments to create many Evidences.
     * @example
     * // Create many Evidences
     * const evidence = await prisma.evidence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evidences and only return the `id`
     * const evidenceWithIdOnly = await prisma.evidence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvidenceCreateManyAndReturnArgs>(args?: SelectSubset<T, EvidenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evidence.
     * @param {EvidenceDeleteArgs} args - Arguments to delete one Evidence.
     * @example
     * // Delete one Evidence
     * const Evidence = await prisma.evidence.delete({
     *   where: {
     *     // ... filter to delete one Evidence
     *   }
     * })
     * 
     */
    delete<T extends EvidenceDeleteArgs>(args: SelectSubset<T, EvidenceDeleteArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evidence.
     * @param {EvidenceUpdateArgs} args - Arguments to update one Evidence.
     * @example
     * // Update one Evidence
     * const evidence = await prisma.evidence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvidenceUpdateArgs>(args: SelectSubset<T, EvidenceUpdateArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evidences.
     * @param {EvidenceDeleteManyArgs} args - Arguments to filter Evidences to delete.
     * @example
     * // Delete a few Evidences
     * const { count } = await prisma.evidence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvidenceDeleteManyArgs>(args?: SelectSubset<T, EvidenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evidences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evidences
     * const evidence = await prisma.evidence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvidenceUpdateManyArgs>(args: SelectSubset<T, EvidenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evidences and returns the data updated in the database.
     * @param {EvidenceUpdateManyAndReturnArgs} args - Arguments to update many Evidences.
     * @example
     * // Update many Evidences
     * const evidence = await prisma.evidence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evidences and only return the `id`
     * const evidenceWithIdOnly = await prisma.evidence.updateManyAndReturn({
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
    updateManyAndReturn<T extends EvidenceUpdateManyAndReturnArgs>(args: SelectSubset<T, EvidenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evidence.
     * @param {EvidenceUpsertArgs} args - Arguments to update or create a Evidence.
     * @example
     * // Update or create a Evidence
     * const evidence = await prisma.evidence.upsert({
     *   create: {
     *     // ... data to create a Evidence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evidence we want to update
     *   }
     * })
     */
    upsert<T extends EvidenceUpsertArgs>(args: SelectSubset<T, EvidenceUpsertArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evidences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceCountArgs} args - Arguments to filter Evidences to count.
     * @example
     * // Count the number of Evidences
     * const count = await prisma.evidence.count({
     *   where: {
     *     // ... the filter for the Evidences we want to count
     *   }
     * })
    **/
    count<T extends EvidenceCountArgs>(
      args?: Subset<T, EvidenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvidenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evidence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvidenceAggregateArgs>(args: Subset<T, EvidenceAggregateArgs>): Prisma.PrismaPromise<GetEvidenceAggregateType<T>>

    /**
     * Group by Evidence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceGroupByArgs} args - Group by arguments.
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
      T extends EvidenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvidenceGroupByArgs['orderBy'] }
        : { orderBy?: EvidenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvidenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvidenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evidence model
   */
  readonly fields: EvidenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evidence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvidenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Evidence model
   */
  interface EvidenceFieldRefs {
    readonly id: FieldRef<"Evidence", 'String'>
    readonly challengeId: FieldRef<"Evidence", 'String'>
    readonly userId: FieldRef<"Evidence", 'String'>
    readonly fileUrl: FieldRef<"Evidence", 'String'>
    readonly fileType: FieldRef<"Evidence", 'String'>
    readonly description: FieldRef<"Evidence", 'String'>
    readonly createdAt: FieldRef<"Evidence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evidence findUnique
   */
  export type EvidenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence findUniqueOrThrow
   */
  export type EvidenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence findFirst
   */
  export type EvidenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evidences.
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evidences.
     */
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Evidence findFirstOrThrow
   */
  export type EvidenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evidences.
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evidences.
     */
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Evidence findMany
   */
  export type EvidenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidences to fetch.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evidences.
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evidences.
     */
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Evidence create
   */
  export type EvidenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Evidence.
     */
    data: XOR<EvidenceCreateInput, EvidenceUncheckedCreateInput>
  }

  /**
   * Evidence createMany
   */
  export type EvidenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evidences.
     */
    data: EvidenceCreateManyInput | EvidenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evidence createManyAndReturn
   */
  export type EvidenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * The data used to create many Evidences.
     */
    data: EvidenceCreateManyInput | EvidenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evidence update
   */
  export type EvidenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Evidence.
     */
    data: XOR<EvidenceUpdateInput, EvidenceUncheckedUpdateInput>
    /**
     * Choose, which Evidence to update.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence updateMany
   */
  export type EvidenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evidences.
     */
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyInput>
    /**
     * Filter which Evidences to update
     */
    where?: EvidenceWhereInput
    /**
     * Limit how many Evidences to update.
     */
    limit?: number
  }

  /**
   * Evidence updateManyAndReturn
   */
  export type EvidenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * The data used to update Evidences.
     */
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyInput>
    /**
     * Filter which Evidences to update
     */
    where?: EvidenceWhereInput
    /**
     * Limit how many Evidences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evidence upsert
   */
  export type EvidenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Evidence to update in case it exists.
     */
    where: EvidenceWhereUniqueInput
    /**
     * In case the Evidence found by the `where` argument doesn't exist, create a new Evidence with this data.
     */
    create: XOR<EvidenceCreateInput, EvidenceUncheckedCreateInput>
    /**
     * In case the Evidence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvidenceUpdateInput, EvidenceUncheckedUpdateInput>
  }

  /**
   * Evidence delete
   */
  export type EvidenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter which Evidence to delete.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence deleteMany
   */
  export type EvidenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evidences to delete
     */
    where?: EvidenceWhereInput
    /**
     * Limit how many Evidences to delete.
     */
    limit?: number
  }

  /**
   * Evidence without action
   */
  export type EvidenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
  }


  /**
   * Model WithdrawalRequest
   */

  export type AggregateWithdrawalRequest = {
    _count: WithdrawalRequestCountAggregateOutputType | null
    _avg: WithdrawalRequestAvgAggregateOutputType | null
    _sum: WithdrawalRequestSumAggregateOutputType | null
    _min: WithdrawalRequestMinAggregateOutputType | null
    _max: WithdrawalRequestMaxAggregateOutputType | null
  }

  export type WithdrawalRequestAvgAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawalRequestSumAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawalRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    method: string | null
    account: string | null
    status: $Enums.TransactionStatus | null
    adminNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WithdrawalRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    method: string | null
    account: string | null
    status: $Enums.TransactionStatus | null
    adminNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WithdrawalRequestCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    method: number
    account: number
    status: number
    adminNote: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WithdrawalRequestAvgAggregateInputType = {
    amount?: true
  }

  export type WithdrawalRequestSumAggregateInputType = {
    amount?: true
  }

  export type WithdrawalRequestMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    method?: true
    account?: true
    status?: true
    adminNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WithdrawalRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    method?: true
    account?: true
    status?: true
    adminNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WithdrawalRequestCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    method?: true
    account?: true
    status?: true
    adminNote?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WithdrawalRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WithdrawalRequest to aggregate.
     */
    where?: WithdrawalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawalRequests to fetch.
     */
    orderBy?: WithdrawalRequestOrderByWithRelationInput | WithdrawalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WithdrawalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WithdrawalRequests
    **/
    _count?: true | WithdrawalRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalRequestMaxAggregateInputType
  }

  export type GetWithdrawalRequestAggregateType<T extends WithdrawalRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawalRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawalRequest[P]>
      : GetScalarType<T[P], AggregateWithdrawalRequest[P]>
  }




  export type WithdrawalRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalRequestWhereInput
    orderBy?: WithdrawalRequestOrderByWithAggregationInput | WithdrawalRequestOrderByWithAggregationInput[]
    by: WithdrawalRequestScalarFieldEnum[] | WithdrawalRequestScalarFieldEnum
    having?: WithdrawalRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalRequestCountAggregateInputType | true
    _avg?: WithdrawalRequestAvgAggregateInputType
    _sum?: WithdrawalRequestSumAggregateInputType
    _min?: WithdrawalRequestMinAggregateInputType
    _max?: WithdrawalRequestMaxAggregateInputType
  }

  export type WithdrawalRequestGroupByOutputType = {
    id: string
    userId: string
    amount: number
    method: string
    account: string
    status: $Enums.TransactionStatus
    adminNote: string | null
    createdAt: Date
    updatedAt: Date
    _count: WithdrawalRequestCountAggregateOutputType | null
    _avg: WithdrawalRequestAvgAggregateOutputType | null
    _sum: WithdrawalRequestSumAggregateOutputType | null
    _min: WithdrawalRequestMinAggregateOutputType | null
    _max: WithdrawalRequestMaxAggregateOutputType | null
  }

  type GetWithdrawalRequestGroupByPayload<T extends WithdrawalRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawalRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalRequestGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalRequestGroupByOutputType[P]>
        }
      >
    >


  export type WithdrawalRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    method?: boolean
    account?: boolean
    status?: boolean
    adminNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawalRequest"]>

  export type WithdrawalRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    method?: boolean
    account?: boolean
    status?: boolean
    adminNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawalRequest"]>

  export type WithdrawalRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    method?: boolean
    account?: boolean
    status?: boolean
    adminNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawalRequest"]>

  export type WithdrawalRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    method?: boolean
    account?: boolean
    status?: boolean
    adminNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WithdrawalRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "method" | "account" | "status" | "adminNote" | "createdAt" | "updatedAt", ExtArgs["result"]["withdrawalRequest"]>
  export type WithdrawalRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WithdrawalRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WithdrawalRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WithdrawalRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WithdrawalRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      method: string
      account: string
      status: $Enums.TransactionStatus
      adminNote: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["withdrawalRequest"]>
    composites: {}
  }

  type WithdrawalRequestGetPayload<S extends boolean | null | undefined | WithdrawalRequestDefaultArgs> = $Result.GetResult<Prisma.$WithdrawalRequestPayload, S>

  type WithdrawalRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WithdrawalRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawalRequestCountAggregateInputType | true
    }

  export interface WithdrawalRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WithdrawalRequest'], meta: { name: 'WithdrawalRequest' } }
    /**
     * Find zero or one WithdrawalRequest that matches the filter.
     * @param {WithdrawalRequestFindUniqueArgs} args - Arguments to find a WithdrawalRequest
     * @example
     * // Get one WithdrawalRequest
     * const withdrawalRequest = await prisma.withdrawalRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WithdrawalRequestFindUniqueArgs>(args: SelectSubset<T, WithdrawalRequestFindUniqueArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WithdrawalRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WithdrawalRequestFindUniqueOrThrowArgs} args - Arguments to find a WithdrawalRequest
     * @example
     * // Get one WithdrawalRequest
     * const withdrawalRequest = await prisma.withdrawalRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WithdrawalRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, WithdrawalRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawalRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalRequestFindFirstArgs} args - Arguments to find a WithdrawalRequest
     * @example
     * // Get one WithdrawalRequest
     * const withdrawalRequest = await prisma.withdrawalRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WithdrawalRequestFindFirstArgs>(args?: SelectSubset<T, WithdrawalRequestFindFirstArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawalRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalRequestFindFirstOrThrowArgs} args - Arguments to find a WithdrawalRequest
     * @example
     * // Get one WithdrawalRequest
     * const withdrawalRequest = await prisma.withdrawalRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WithdrawalRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, WithdrawalRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WithdrawalRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WithdrawalRequests
     * const withdrawalRequests = await prisma.withdrawalRequest.findMany()
     * 
     * // Get first 10 WithdrawalRequests
     * const withdrawalRequests = await prisma.withdrawalRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalRequestWithIdOnly = await prisma.withdrawalRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WithdrawalRequestFindManyArgs>(args?: SelectSubset<T, WithdrawalRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WithdrawalRequest.
     * @param {WithdrawalRequestCreateArgs} args - Arguments to create a WithdrawalRequest.
     * @example
     * // Create one WithdrawalRequest
     * const WithdrawalRequest = await prisma.withdrawalRequest.create({
     *   data: {
     *     // ... data to create a WithdrawalRequest
     *   }
     * })
     * 
     */
    create<T extends WithdrawalRequestCreateArgs>(args: SelectSubset<T, WithdrawalRequestCreateArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WithdrawalRequests.
     * @param {WithdrawalRequestCreateManyArgs} args - Arguments to create many WithdrawalRequests.
     * @example
     * // Create many WithdrawalRequests
     * const withdrawalRequest = await prisma.withdrawalRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WithdrawalRequestCreateManyArgs>(args?: SelectSubset<T, WithdrawalRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WithdrawalRequests and returns the data saved in the database.
     * @param {WithdrawalRequestCreateManyAndReturnArgs} args - Arguments to create many WithdrawalRequests.
     * @example
     * // Create many WithdrawalRequests
     * const withdrawalRequest = await prisma.withdrawalRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WithdrawalRequests and only return the `id`
     * const withdrawalRequestWithIdOnly = await prisma.withdrawalRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WithdrawalRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, WithdrawalRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WithdrawalRequest.
     * @param {WithdrawalRequestDeleteArgs} args - Arguments to delete one WithdrawalRequest.
     * @example
     * // Delete one WithdrawalRequest
     * const WithdrawalRequest = await prisma.withdrawalRequest.delete({
     *   where: {
     *     // ... filter to delete one WithdrawalRequest
     *   }
     * })
     * 
     */
    delete<T extends WithdrawalRequestDeleteArgs>(args: SelectSubset<T, WithdrawalRequestDeleteArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WithdrawalRequest.
     * @param {WithdrawalRequestUpdateArgs} args - Arguments to update one WithdrawalRequest.
     * @example
     * // Update one WithdrawalRequest
     * const withdrawalRequest = await prisma.withdrawalRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WithdrawalRequestUpdateArgs>(args: SelectSubset<T, WithdrawalRequestUpdateArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WithdrawalRequests.
     * @param {WithdrawalRequestDeleteManyArgs} args - Arguments to filter WithdrawalRequests to delete.
     * @example
     * // Delete a few WithdrawalRequests
     * const { count } = await prisma.withdrawalRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WithdrawalRequestDeleteManyArgs>(args?: SelectSubset<T, WithdrawalRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WithdrawalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WithdrawalRequests
     * const withdrawalRequest = await prisma.withdrawalRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WithdrawalRequestUpdateManyArgs>(args: SelectSubset<T, WithdrawalRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WithdrawalRequests and returns the data updated in the database.
     * @param {WithdrawalRequestUpdateManyAndReturnArgs} args - Arguments to update many WithdrawalRequests.
     * @example
     * // Update many WithdrawalRequests
     * const withdrawalRequest = await prisma.withdrawalRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WithdrawalRequests and only return the `id`
     * const withdrawalRequestWithIdOnly = await prisma.withdrawalRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends WithdrawalRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, WithdrawalRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WithdrawalRequest.
     * @param {WithdrawalRequestUpsertArgs} args - Arguments to update or create a WithdrawalRequest.
     * @example
     * // Update or create a WithdrawalRequest
     * const withdrawalRequest = await prisma.withdrawalRequest.upsert({
     *   create: {
     *     // ... data to create a WithdrawalRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WithdrawalRequest we want to update
     *   }
     * })
     */
    upsert<T extends WithdrawalRequestUpsertArgs>(args: SelectSubset<T, WithdrawalRequestUpsertArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WithdrawalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalRequestCountArgs} args - Arguments to filter WithdrawalRequests to count.
     * @example
     * // Count the number of WithdrawalRequests
     * const count = await prisma.withdrawalRequest.count({
     *   where: {
     *     // ... the filter for the WithdrawalRequests we want to count
     *   }
     * })
    **/
    count<T extends WithdrawalRequestCountArgs>(
      args?: Subset<T, WithdrawalRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WithdrawalRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WithdrawalRequestAggregateArgs>(args: Subset<T, WithdrawalRequestAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalRequestAggregateType<T>>

    /**
     * Group by WithdrawalRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalRequestGroupByArgs} args - Group by arguments.
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
      T extends WithdrawalRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawalRequestGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawalRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WithdrawalRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WithdrawalRequest model
   */
  readonly fields: WithdrawalRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WithdrawalRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WithdrawalRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WithdrawalRequest model
   */
  interface WithdrawalRequestFieldRefs {
    readonly id: FieldRef<"WithdrawalRequest", 'String'>
    readonly userId: FieldRef<"WithdrawalRequest", 'String'>
    readonly amount: FieldRef<"WithdrawalRequest", 'Float'>
    readonly method: FieldRef<"WithdrawalRequest", 'String'>
    readonly account: FieldRef<"WithdrawalRequest", 'String'>
    readonly status: FieldRef<"WithdrawalRequest", 'TransactionStatus'>
    readonly adminNote: FieldRef<"WithdrawalRequest", 'String'>
    readonly createdAt: FieldRef<"WithdrawalRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"WithdrawalRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WithdrawalRequest findUnique
   */
  export type WithdrawalRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawalRequest to fetch.
     */
    where: WithdrawalRequestWhereUniqueInput
  }

  /**
   * WithdrawalRequest findUniqueOrThrow
   */
  export type WithdrawalRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawalRequest to fetch.
     */
    where: WithdrawalRequestWhereUniqueInput
  }

  /**
   * WithdrawalRequest findFirst
   */
  export type WithdrawalRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawalRequest to fetch.
     */
    where?: WithdrawalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawalRequests to fetch.
     */
    orderBy?: WithdrawalRequestOrderByWithRelationInput | WithdrawalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WithdrawalRequests.
     */
    cursor?: WithdrawalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawalRequests.
     */
    distinct?: WithdrawalRequestScalarFieldEnum | WithdrawalRequestScalarFieldEnum[]
  }

  /**
   * WithdrawalRequest findFirstOrThrow
   */
  export type WithdrawalRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawalRequest to fetch.
     */
    where?: WithdrawalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawalRequests to fetch.
     */
    orderBy?: WithdrawalRequestOrderByWithRelationInput | WithdrawalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WithdrawalRequests.
     */
    cursor?: WithdrawalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawalRequests.
     */
    distinct?: WithdrawalRequestScalarFieldEnum | WithdrawalRequestScalarFieldEnum[]
  }

  /**
   * WithdrawalRequest findMany
   */
  export type WithdrawalRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawalRequests to fetch.
     */
    where?: WithdrawalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawalRequests to fetch.
     */
    orderBy?: WithdrawalRequestOrderByWithRelationInput | WithdrawalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WithdrawalRequests.
     */
    cursor?: WithdrawalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawalRequests.
     */
    distinct?: WithdrawalRequestScalarFieldEnum | WithdrawalRequestScalarFieldEnum[]
  }

  /**
   * WithdrawalRequest create
   */
  export type WithdrawalRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a WithdrawalRequest.
     */
    data: XOR<WithdrawalRequestCreateInput, WithdrawalRequestUncheckedCreateInput>
  }

  /**
   * WithdrawalRequest createMany
   */
  export type WithdrawalRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WithdrawalRequests.
     */
    data: WithdrawalRequestCreateManyInput | WithdrawalRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WithdrawalRequest createManyAndReturn
   */
  export type WithdrawalRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * The data used to create many WithdrawalRequests.
     */
    data: WithdrawalRequestCreateManyInput | WithdrawalRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WithdrawalRequest update
   */
  export type WithdrawalRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a WithdrawalRequest.
     */
    data: XOR<WithdrawalRequestUpdateInput, WithdrawalRequestUncheckedUpdateInput>
    /**
     * Choose, which WithdrawalRequest to update.
     */
    where: WithdrawalRequestWhereUniqueInput
  }

  /**
   * WithdrawalRequest updateMany
   */
  export type WithdrawalRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WithdrawalRequests.
     */
    data: XOR<WithdrawalRequestUpdateManyMutationInput, WithdrawalRequestUncheckedUpdateManyInput>
    /**
     * Filter which WithdrawalRequests to update
     */
    where?: WithdrawalRequestWhereInput
    /**
     * Limit how many WithdrawalRequests to update.
     */
    limit?: number
  }

  /**
   * WithdrawalRequest updateManyAndReturn
   */
  export type WithdrawalRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * The data used to update WithdrawalRequests.
     */
    data: XOR<WithdrawalRequestUpdateManyMutationInput, WithdrawalRequestUncheckedUpdateManyInput>
    /**
     * Filter which WithdrawalRequests to update
     */
    where?: WithdrawalRequestWhereInput
    /**
     * Limit how many WithdrawalRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WithdrawalRequest upsert
   */
  export type WithdrawalRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the WithdrawalRequest to update in case it exists.
     */
    where: WithdrawalRequestWhereUniqueInput
    /**
     * In case the WithdrawalRequest found by the `where` argument doesn't exist, create a new WithdrawalRequest with this data.
     */
    create: XOR<WithdrawalRequestCreateInput, WithdrawalRequestUncheckedCreateInput>
    /**
     * In case the WithdrawalRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawalRequestUpdateInput, WithdrawalRequestUncheckedUpdateInput>
  }

  /**
   * WithdrawalRequest delete
   */
  export type WithdrawalRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * Filter which WithdrawalRequest to delete.
     */
    where: WithdrawalRequestWhereUniqueInput
  }

  /**
   * WithdrawalRequest deleteMany
   */
  export type WithdrawalRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WithdrawalRequests to delete
     */
    where?: WithdrawalRequestWhereInput
    /**
     * Limit how many WithdrawalRequests to delete.
     */
    limit?: number
  }

  /**
   * WithdrawalRequest without action
   */
  export type WithdrawalRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
  }


  /**
   * Model MatchmakingQueue
   */

  export type AggregateMatchmakingQueue = {
    _count: MatchmakingQueueCountAggregateOutputType | null
    _avg: MatchmakingQueueAvgAggregateOutputType | null
    _sum: MatchmakingQueueSumAggregateOutputType | null
    _min: MatchmakingQueueMinAggregateOutputType | null
    _max: MatchmakingQueueMaxAggregateOutputType | null
  }

  export type MatchmakingQueueAvgAggregateOutputType = {
    stakeAmount: number | null
  }

  export type MatchmakingQueueSumAggregateOutputType = {
    stakeAmount: number | null
  }

  export type MatchmakingQueueMinAggregateOutputType = {
    id: string | null
    userId: string | null
    game: string | null
    stakeAmount: number | null
    credentials: string | null
    status: $Enums.QueueStatus | null
    createdAt: Date | null
    expiresAt: Date | null
    challengeId: string | null
  }

  export type MatchmakingQueueMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    game: string | null
    stakeAmount: number | null
    credentials: string | null
    status: $Enums.QueueStatus | null
    createdAt: Date | null
    expiresAt: Date | null
    challengeId: string | null
  }

  export type MatchmakingQueueCountAggregateOutputType = {
    id: number
    userId: number
    game: number
    stakeAmount: number
    credentials: number
    status: number
    createdAt: number
    expiresAt: number
    challengeId: number
    _all: number
  }


  export type MatchmakingQueueAvgAggregateInputType = {
    stakeAmount?: true
  }

  export type MatchmakingQueueSumAggregateInputType = {
    stakeAmount?: true
  }

  export type MatchmakingQueueMinAggregateInputType = {
    id?: true
    userId?: true
    game?: true
    stakeAmount?: true
    credentials?: true
    status?: true
    createdAt?: true
    expiresAt?: true
    challengeId?: true
  }

  export type MatchmakingQueueMaxAggregateInputType = {
    id?: true
    userId?: true
    game?: true
    stakeAmount?: true
    credentials?: true
    status?: true
    createdAt?: true
    expiresAt?: true
    challengeId?: true
  }

  export type MatchmakingQueueCountAggregateInputType = {
    id?: true
    userId?: true
    game?: true
    stakeAmount?: true
    credentials?: true
    status?: true
    createdAt?: true
    expiresAt?: true
    challengeId?: true
    _all?: true
  }

  export type MatchmakingQueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchmakingQueue to aggregate.
     */
    where?: MatchmakingQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchmakingQueues to fetch.
     */
    orderBy?: MatchmakingQueueOrderByWithRelationInput | MatchmakingQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchmakingQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchmakingQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchmakingQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchmakingQueues
    **/
    _count?: true | MatchmakingQueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchmakingQueueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchmakingQueueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchmakingQueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchmakingQueueMaxAggregateInputType
  }

  export type GetMatchmakingQueueAggregateType<T extends MatchmakingQueueAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchmakingQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchmakingQueue[P]>
      : GetScalarType<T[P], AggregateMatchmakingQueue[P]>
  }




  export type MatchmakingQueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchmakingQueueWhereInput
    orderBy?: MatchmakingQueueOrderByWithAggregationInput | MatchmakingQueueOrderByWithAggregationInput[]
    by: MatchmakingQueueScalarFieldEnum[] | MatchmakingQueueScalarFieldEnum
    having?: MatchmakingQueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchmakingQueueCountAggregateInputType | true
    _avg?: MatchmakingQueueAvgAggregateInputType
    _sum?: MatchmakingQueueSumAggregateInputType
    _min?: MatchmakingQueueMinAggregateInputType
    _max?: MatchmakingQueueMaxAggregateInputType
  }

  export type MatchmakingQueueGroupByOutputType = {
    id: string
    userId: string
    game: string
    stakeAmount: number
    credentials: string
    status: $Enums.QueueStatus
    createdAt: Date
    expiresAt: Date
    challengeId: string | null
    _count: MatchmakingQueueCountAggregateOutputType | null
    _avg: MatchmakingQueueAvgAggregateOutputType | null
    _sum: MatchmakingQueueSumAggregateOutputType | null
    _min: MatchmakingQueueMinAggregateOutputType | null
    _max: MatchmakingQueueMaxAggregateOutputType | null
  }

  type GetMatchmakingQueueGroupByPayload<T extends MatchmakingQueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchmakingQueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchmakingQueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchmakingQueueGroupByOutputType[P]>
            : GetScalarType<T[P], MatchmakingQueueGroupByOutputType[P]>
        }
      >
    >


  export type MatchmakingQueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    game?: boolean
    stakeAmount?: boolean
    credentials?: boolean
    status?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    challengeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchmakingQueue"]>

  export type MatchmakingQueueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    game?: boolean
    stakeAmount?: boolean
    credentials?: boolean
    status?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    challengeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchmakingQueue"]>

  export type MatchmakingQueueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    game?: boolean
    stakeAmount?: boolean
    credentials?: boolean
    status?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    challengeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchmakingQueue"]>

  export type MatchmakingQueueSelectScalar = {
    id?: boolean
    userId?: boolean
    game?: boolean
    stakeAmount?: boolean
    credentials?: boolean
    status?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    challengeId?: boolean
  }

  export type MatchmakingQueueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "game" | "stakeAmount" | "credentials" | "status" | "createdAt" | "expiresAt" | "challengeId", ExtArgs["result"]["matchmakingQueue"]>
  export type MatchmakingQueueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchmakingQueueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchmakingQueueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchmakingQueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchmakingQueue"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      game: string
      stakeAmount: number
      credentials: string
      status: $Enums.QueueStatus
      createdAt: Date
      expiresAt: Date
      challengeId: string | null
    }, ExtArgs["result"]["matchmakingQueue"]>
    composites: {}
  }

  type MatchmakingQueueGetPayload<S extends boolean | null | undefined | MatchmakingQueueDefaultArgs> = $Result.GetResult<Prisma.$MatchmakingQueuePayload, S>

  type MatchmakingQueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchmakingQueueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchmakingQueueCountAggregateInputType | true
    }

  export interface MatchmakingQueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchmakingQueue'], meta: { name: 'MatchmakingQueue' } }
    /**
     * Find zero or one MatchmakingQueue that matches the filter.
     * @param {MatchmakingQueueFindUniqueArgs} args - Arguments to find a MatchmakingQueue
     * @example
     * // Get one MatchmakingQueue
     * const matchmakingQueue = await prisma.matchmakingQueue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchmakingQueueFindUniqueArgs>(args: SelectSubset<T, MatchmakingQueueFindUniqueArgs<ExtArgs>>): Prisma__MatchmakingQueueClient<$Result.GetResult<Prisma.$MatchmakingQueuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchmakingQueue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchmakingQueueFindUniqueOrThrowArgs} args - Arguments to find a MatchmakingQueue
     * @example
     * // Get one MatchmakingQueue
     * const matchmakingQueue = await prisma.matchmakingQueue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchmakingQueueFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchmakingQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchmakingQueueClient<$Result.GetResult<Prisma.$MatchmakingQueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchmakingQueue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchmakingQueueFindFirstArgs} args - Arguments to find a MatchmakingQueue
     * @example
     * // Get one MatchmakingQueue
     * const matchmakingQueue = await prisma.matchmakingQueue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchmakingQueueFindFirstArgs>(args?: SelectSubset<T, MatchmakingQueueFindFirstArgs<ExtArgs>>): Prisma__MatchmakingQueueClient<$Result.GetResult<Prisma.$MatchmakingQueuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchmakingQueue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchmakingQueueFindFirstOrThrowArgs} args - Arguments to find a MatchmakingQueue
     * @example
     * // Get one MatchmakingQueue
     * const matchmakingQueue = await prisma.matchmakingQueue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchmakingQueueFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchmakingQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchmakingQueueClient<$Result.GetResult<Prisma.$MatchmakingQueuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchmakingQueues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchmakingQueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchmakingQueues
     * const matchmakingQueues = await prisma.matchmakingQueue.findMany()
     * 
     * // Get first 10 MatchmakingQueues
     * const matchmakingQueues = await prisma.matchmakingQueue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchmakingQueueWithIdOnly = await prisma.matchmakingQueue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchmakingQueueFindManyArgs>(args?: SelectSubset<T, MatchmakingQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchmakingQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchmakingQueue.
     * @param {MatchmakingQueueCreateArgs} args - Arguments to create a MatchmakingQueue.
     * @example
     * // Create one MatchmakingQueue
     * const MatchmakingQueue = await prisma.matchmakingQueue.create({
     *   data: {
     *     // ... data to create a MatchmakingQueue
     *   }
     * })
     * 
     */
    create<T extends MatchmakingQueueCreateArgs>(args: SelectSubset<T, MatchmakingQueueCreateArgs<ExtArgs>>): Prisma__MatchmakingQueueClient<$Result.GetResult<Prisma.$MatchmakingQueuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchmakingQueues.
     * @param {MatchmakingQueueCreateManyArgs} args - Arguments to create many MatchmakingQueues.
     * @example
     * // Create many MatchmakingQueues
     * const matchmakingQueue = await prisma.matchmakingQueue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchmakingQueueCreateManyArgs>(args?: SelectSubset<T, MatchmakingQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchmakingQueues and returns the data saved in the database.
     * @param {MatchmakingQueueCreateManyAndReturnArgs} args - Arguments to create many MatchmakingQueues.
     * @example
     * // Create many MatchmakingQueues
     * const matchmakingQueue = await prisma.matchmakingQueue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchmakingQueues and only return the `id`
     * const matchmakingQueueWithIdOnly = await prisma.matchmakingQueue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchmakingQueueCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchmakingQueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchmakingQueuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchmakingQueue.
     * @param {MatchmakingQueueDeleteArgs} args - Arguments to delete one MatchmakingQueue.
     * @example
     * // Delete one MatchmakingQueue
     * const MatchmakingQueue = await prisma.matchmakingQueue.delete({
     *   where: {
     *     // ... filter to delete one MatchmakingQueue
     *   }
     * })
     * 
     */
    delete<T extends MatchmakingQueueDeleteArgs>(args: SelectSubset<T, MatchmakingQueueDeleteArgs<ExtArgs>>): Prisma__MatchmakingQueueClient<$Result.GetResult<Prisma.$MatchmakingQueuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchmakingQueue.
     * @param {MatchmakingQueueUpdateArgs} args - Arguments to update one MatchmakingQueue.
     * @example
     * // Update one MatchmakingQueue
     * const matchmakingQueue = await prisma.matchmakingQueue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchmakingQueueUpdateArgs>(args: SelectSubset<T, MatchmakingQueueUpdateArgs<ExtArgs>>): Prisma__MatchmakingQueueClient<$Result.GetResult<Prisma.$MatchmakingQueuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchmakingQueues.
     * @param {MatchmakingQueueDeleteManyArgs} args - Arguments to filter MatchmakingQueues to delete.
     * @example
     * // Delete a few MatchmakingQueues
     * const { count } = await prisma.matchmakingQueue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchmakingQueueDeleteManyArgs>(args?: SelectSubset<T, MatchmakingQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchmakingQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchmakingQueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchmakingQueues
     * const matchmakingQueue = await prisma.matchmakingQueue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchmakingQueueUpdateManyArgs>(args: SelectSubset<T, MatchmakingQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchmakingQueues and returns the data updated in the database.
     * @param {MatchmakingQueueUpdateManyAndReturnArgs} args - Arguments to update many MatchmakingQueues.
     * @example
     * // Update many MatchmakingQueues
     * const matchmakingQueue = await prisma.matchmakingQueue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchmakingQueues and only return the `id`
     * const matchmakingQueueWithIdOnly = await prisma.matchmakingQueue.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchmakingQueueUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchmakingQueueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchmakingQueuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchmakingQueue.
     * @param {MatchmakingQueueUpsertArgs} args - Arguments to update or create a MatchmakingQueue.
     * @example
     * // Update or create a MatchmakingQueue
     * const matchmakingQueue = await prisma.matchmakingQueue.upsert({
     *   create: {
     *     // ... data to create a MatchmakingQueue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchmakingQueue we want to update
     *   }
     * })
     */
    upsert<T extends MatchmakingQueueUpsertArgs>(args: SelectSubset<T, MatchmakingQueueUpsertArgs<ExtArgs>>): Prisma__MatchmakingQueueClient<$Result.GetResult<Prisma.$MatchmakingQueuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchmakingQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchmakingQueueCountArgs} args - Arguments to filter MatchmakingQueues to count.
     * @example
     * // Count the number of MatchmakingQueues
     * const count = await prisma.matchmakingQueue.count({
     *   where: {
     *     // ... the filter for the MatchmakingQueues we want to count
     *   }
     * })
    **/
    count<T extends MatchmakingQueueCountArgs>(
      args?: Subset<T, MatchmakingQueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchmakingQueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchmakingQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchmakingQueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchmakingQueueAggregateArgs>(args: Subset<T, MatchmakingQueueAggregateArgs>): Prisma.PrismaPromise<GetMatchmakingQueueAggregateType<T>>

    /**
     * Group by MatchmakingQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchmakingQueueGroupByArgs} args - Group by arguments.
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
      T extends MatchmakingQueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchmakingQueueGroupByArgs['orderBy'] }
        : { orderBy?: MatchmakingQueueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchmakingQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchmakingQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchmakingQueue model
   */
  readonly fields: MatchmakingQueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchmakingQueue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchmakingQueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MatchmakingQueue model
   */
  interface MatchmakingQueueFieldRefs {
    readonly id: FieldRef<"MatchmakingQueue", 'String'>
    readonly userId: FieldRef<"MatchmakingQueue", 'String'>
    readonly game: FieldRef<"MatchmakingQueue", 'String'>
    readonly stakeAmount: FieldRef<"MatchmakingQueue", 'Float'>
    readonly credentials: FieldRef<"MatchmakingQueue", 'String'>
    readonly status: FieldRef<"MatchmakingQueue", 'QueueStatus'>
    readonly createdAt: FieldRef<"MatchmakingQueue", 'DateTime'>
    readonly expiresAt: FieldRef<"MatchmakingQueue", 'DateTime'>
    readonly challengeId: FieldRef<"MatchmakingQueue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MatchmakingQueue findUnique
   */
  export type MatchmakingQueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchmakingQueue
     */
    select?: MatchmakingQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchmakingQueue
     */
    omit?: MatchmakingQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchmakingQueueInclude<ExtArgs> | null
    /**
     * Filter, which MatchmakingQueue to fetch.
     */
    where: MatchmakingQueueWhereUniqueInput
  }

  /**
   * MatchmakingQueue findUniqueOrThrow
   */
  export type MatchmakingQueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchmakingQueue
     */
    select?: MatchmakingQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchmakingQueue
     */
    omit?: MatchmakingQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchmakingQueueInclude<ExtArgs> | null
    /**
     * Filter, which MatchmakingQueue to fetch.
     */
    where: MatchmakingQueueWhereUniqueInput
  }

  /**
   * MatchmakingQueue findFirst
   */
  export type MatchmakingQueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchmakingQueue
     */
    select?: MatchmakingQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchmakingQueue
     */
    omit?: MatchmakingQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchmakingQueueInclude<ExtArgs> | null
    /**
     * Filter, which MatchmakingQueue to fetch.
     */
    where?: MatchmakingQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchmakingQueues to fetch.
     */
    orderBy?: MatchmakingQueueOrderByWithRelationInput | MatchmakingQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchmakingQueues.
     */
    cursor?: MatchmakingQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchmakingQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchmakingQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchmakingQueues.
     */
    distinct?: MatchmakingQueueScalarFieldEnum | MatchmakingQueueScalarFieldEnum[]
  }

  /**
   * MatchmakingQueue findFirstOrThrow
   */
  export type MatchmakingQueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchmakingQueue
     */
    select?: MatchmakingQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchmakingQueue
     */
    omit?: MatchmakingQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchmakingQueueInclude<ExtArgs> | null
    /**
     * Filter, which MatchmakingQueue to fetch.
     */
    where?: MatchmakingQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchmakingQueues to fetch.
     */
    orderBy?: MatchmakingQueueOrderByWithRelationInput | MatchmakingQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchmakingQueues.
     */
    cursor?: MatchmakingQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchmakingQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchmakingQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchmakingQueues.
     */
    distinct?: MatchmakingQueueScalarFieldEnum | MatchmakingQueueScalarFieldEnum[]
  }

  /**
   * MatchmakingQueue findMany
   */
  export type MatchmakingQueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchmakingQueue
     */
    select?: MatchmakingQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchmakingQueue
     */
    omit?: MatchmakingQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchmakingQueueInclude<ExtArgs> | null
    /**
     * Filter, which MatchmakingQueues to fetch.
     */
    where?: MatchmakingQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchmakingQueues to fetch.
     */
    orderBy?: MatchmakingQueueOrderByWithRelationInput | MatchmakingQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchmakingQueues.
     */
    cursor?: MatchmakingQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchmakingQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchmakingQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchmakingQueues.
     */
    distinct?: MatchmakingQueueScalarFieldEnum | MatchmakingQueueScalarFieldEnum[]
  }

  /**
   * MatchmakingQueue create
   */
  export type MatchmakingQueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchmakingQueue
     */
    select?: MatchmakingQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchmakingQueue
     */
    omit?: MatchmakingQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchmakingQueueInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchmakingQueue.
     */
    data: XOR<MatchmakingQueueCreateInput, MatchmakingQueueUncheckedCreateInput>
  }

  /**
   * MatchmakingQueue createMany
   */
  export type MatchmakingQueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchmakingQueues.
     */
    data: MatchmakingQueueCreateManyInput | MatchmakingQueueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchmakingQueue createManyAndReturn
   */
  export type MatchmakingQueueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchmakingQueue
     */
    select?: MatchmakingQueueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchmakingQueue
     */
    omit?: MatchmakingQueueOmit<ExtArgs> | null
    /**
     * The data used to create many MatchmakingQueues.
     */
    data: MatchmakingQueueCreateManyInput | MatchmakingQueueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchmakingQueueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchmakingQueue update
   */
  export type MatchmakingQueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchmakingQueue
     */
    select?: MatchmakingQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchmakingQueue
     */
    omit?: MatchmakingQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchmakingQueueInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchmakingQueue.
     */
    data: XOR<MatchmakingQueueUpdateInput, MatchmakingQueueUncheckedUpdateInput>
    /**
     * Choose, which MatchmakingQueue to update.
     */
    where: MatchmakingQueueWhereUniqueInput
  }

  /**
   * MatchmakingQueue updateMany
   */
  export type MatchmakingQueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchmakingQueues.
     */
    data: XOR<MatchmakingQueueUpdateManyMutationInput, MatchmakingQueueUncheckedUpdateManyInput>
    /**
     * Filter which MatchmakingQueues to update
     */
    where?: MatchmakingQueueWhereInput
    /**
     * Limit how many MatchmakingQueues to update.
     */
    limit?: number
  }

  /**
   * MatchmakingQueue updateManyAndReturn
   */
  export type MatchmakingQueueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchmakingQueue
     */
    select?: MatchmakingQueueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchmakingQueue
     */
    omit?: MatchmakingQueueOmit<ExtArgs> | null
    /**
     * The data used to update MatchmakingQueues.
     */
    data: XOR<MatchmakingQueueUpdateManyMutationInput, MatchmakingQueueUncheckedUpdateManyInput>
    /**
     * Filter which MatchmakingQueues to update
     */
    where?: MatchmakingQueueWhereInput
    /**
     * Limit how many MatchmakingQueues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchmakingQueueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchmakingQueue upsert
   */
  export type MatchmakingQueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchmakingQueue
     */
    select?: MatchmakingQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchmakingQueue
     */
    omit?: MatchmakingQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchmakingQueueInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchmakingQueue to update in case it exists.
     */
    where: MatchmakingQueueWhereUniqueInput
    /**
     * In case the MatchmakingQueue found by the `where` argument doesn't exist, create a new MatchmakingQueue with this data.
     */
    create: XOR<MatchmakingQueueCreateInput, MatchmakingQueueUncheckedCreateInput>
    /**
     * In case the MatchmakingQueue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchmakingQueueUpdateInput, MatchmakingQueueUncheckedUpdateInput>
  }

  /**
   * MatchmakingQueue delete
   */
  export type MatchmakingQueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchmakingQueue
     */
    select?: MatchmakingQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchmakingQueue
     */
    omit?: MatchmakingQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchmakingQueueInclude<ExtArgs> | null
    /**
     * Filter which MatchmakingQueue to delete.
     */
    where: MatchmakingQueueWhereUniqueInput
  }

  /**
   * MatchmakingQueue deleteMany
   */
  export type MatchmakingQueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchmakingQueues to delete
     */
    where?: MatchmakingQueueWhereInput
    /**
     * Limit how many MatchmakingQueues to delete.
     */
    limit?: number
  }

  /**
   * MatchmakingQueue without action
   */
  export type MatchmakingQueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchmakingQueue
     */
    select?: MatchmakingQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchmakingQueue
     */
    omit?: MatchmakingQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchmakingQueueInclude<ExtArgs> | null
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
    email: 'email',
    username: 'username',
    password: 'password',
    avatar: 'avatar',
    balance: 'balance',
    totalWins: 'totalWins',
    totalLosses: 'totalLosses',
    totalEarnings: 'totalEarnings',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isAdmin: 'isAdmin',
    ghostStrikes: 'ghostStrikes',
    suspendedUntil: 'suspendedUntil',
    gameCredentials: 'gameCredentials'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    opponentId: 'opponentId',
    game: 'game',
    stakeAmount: 'stakeAmount',
    status: 'status',
    winnerId: 'winnerId',
    creatorPaid: 'creatorPaid',
    opponentPaid: 'opponentPaid',
    shareCode: 'shareCode',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    startedAt: 'startedAt',
    isMatchmaking: 'isMatchmaking',
    creatorCredentials: 'creatorCredentials',
    opponentCredentials: 'opponentCredentials',
    reminderSentAt: 'reminderSentAt',
    creatorReady: 'creatorReady',
    opponentReady: 'opponentReady',
    readyAt: 'readyAt',
    readyDeadline: 'readyDeadline',
    readyReminderSentAt: 'readyReminderSentAt',
    readyUrgentReminderSentAt: 'readyUrgentReminderSentAt'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    challengeId: 'challengeId',
    userId: 'userId',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    amount: 'amount',
    status: 'status',
    challengeId: 'challengeId',
    description: 'description',
    createdAt: 'createdAt',
    stripeSessionId: 'stripeSessionId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    challengeId: 'challengeId',
    confirmedById: 'confirmedById',
    creatorScore: 'creatorScore',
    opponentScore: 'opponentScore',
    notes: 'notes',
    confirmedAt: 'confirmedAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const EvidenceScalarFieldEnum: {
    id: 'id',
    challengeId: 'challengeId',
    userId: 'userId',
    fileUrl: 'fileUrl',
    fileType: 'fileType',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type EvidenceScalarFieldEnum = (typeof EvidenceScalarFieldEnum)[keyof typeof EvidenceScalarFieldEnum]


  export const WithdrawalRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    method: 'method',
    account: 'account',
    status: 'status',
    adminNote: 'adminNote',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WithdrawalRequestScalarFieldEnum = (typeof WithdrawalRequestScalarFieldEnum)[keyof typeof WithdrawalRequestScalarFieldEnum]


  export const MatchmakingQueueScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    game: 'game',
    stakeAmount: 'stakeAmount',
    credentials: 'credentials',
    status: 'status',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    challengeId: 'challengeId'
  };

  export type MatchmakingQueueScalarFieldEnum = (typeof MatchmakingQueueScalarFieldEnum)[keyof typeof MatchmakingQueueScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ChallengeStatus'
   */
  export type EnumChallengeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChallengeStatus'>
    


  /**
   * Reference to a field of type 'ChallengeStatus[]'
   */
  export type ListEnumChallengeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChallengeStatus[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'QueueStatus'
   */
  export type EnumQueueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueueStatus'>
    


  /**
   * Reference to a field of type 'QueueStatus[]'
   */
  export type ListEnumQueueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueueStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    balance?: FloatFilter<"User"> | number
    totalWins?: IntFilter<"User"> | number
    totalLosses?: IntFilter<"User"> | number
    totalEarnings?: FloatFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isAdmin?: BoolFilter<"User"> | boolean
    ghostStrikes?: IntFilter<"User"> | number
    suspendedUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    gameCredentials?: StringNullableFilter<"User"> | string | null
    challengesCreated?: ChallengeListRelationFilter
    challengesOpponent?: ChallengeListRelationFilter
    wonChallenges?: ChallengeListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    evidence?: EvidenceListRelationFilter
    matches?: MatchListRelationFilter
    transactions?: TransactionListRelationFilter
    withdrawalRequests?: WithdrawalRequestListRelationFilter
    matchmakingQueues?: MatchmakingQueueListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    balance?: SortOrder
    totalWins?: SortOrder
    totalLosses?: SortOrder
    totalEarnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAdmin?: SortOrder
    ghostStrikes?: SortOrder
    suspendedUntil?: SortOrderInput | SortOrder
    gameCredentials?: SortOrderInput | SortOrder
    challengesCreated?: ChallengeOrderByRelationAggregateInput
    challengesOpponent?: ChallengeOrderByRelationAggregateInput
    wonChallenges?: ChallengeOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    evidence?: EvidenceOrderByRelationAggregateInput
    matches?: MatchOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    withdrawalRequests?: WithdrawalRequestOrderByRelationAggregateInput
    matchmakingQueues?: MatchmakingQueueOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    balance?: FloatFilter<"User"> | number
    totalWins?: IntFilter<"User"> | number
    totalLosses?: IntFilter<"User"> | number
    totalEarnings?: FloatFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isAdmin?: BoolFilter<"User"> | boolean
    ghostStrikes?: IntFilter<"User"> | number
    suspendedUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    gameCredentials?: StringNullableFilter<"User"> | string | null
    challengesCreated?: ChallengeListRelationFilter
    challengesOpponent?: ChallengeListRelationFilter
    wonChallenges?: ChallengeListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    evidence?: EvidenceListRelationFilter
    matches?: MatchListRelationFilter
    transactions?: TransactionListRelationFilter
    withdrawalRequests?: WithdrawalRequestListRelationFilter
    matchmakingQueues?: MatchmakingQueueListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    balance?: SortOrder
    totalWins?: SortOrder
    totalLosses?: SortOrder
    totalEarnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAdmin?: SortOrder
    ghostStrikes?: SortOrder
    suspendedUntil?: SortOrderInput | SortOrder
    gameCredentials?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    balance?: FloatWithAggregatesFilter<"User"> | number
    totalWins?: IntWithAggregatesFilter<"User"> | number
    totalLosses?: IntWithAggregatesFilter<"User"> | number
    totalEarnings?: FloatWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    ghostStrikes?: IntWithAggregatesFilter<"User"> | number
    suspendedUntil?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    gameCredentials?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ChallengeWhereInput = {
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    id?: StringFilter<"Challenge"> | string
    creatorId?: StringFilter<"Challenge"> | string
    opponentId?: StringNullableFilter<"Challenge"> | string | null
    game?: StringFilter<"Challenge"> | string
    stakeAmount?: FloatFilter<"Challenge"> | number
    status?: EnumChallengeStatusFilter<"Challenge"> | $Enums.ChallengeStatus
    winnerId?: StringNullableFilter<"Challenge"> | string | null
    creatorPaid?: BoolFilter<"Challenge"> | boolean
    opponentPaid?: BoolFilter<"Challenge"> | boolean
    shareCode?: StringFilter<"Challenge"> | string
    notes?: StringNullableFilter<"Challenge"> | string | null
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    startedAt?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    isMatchmaking?: BoolFilter<"Challenge"> | boolean
    creatorCredentials?: StringNullableFilter<"Challenge"> | string | null
    opponentCredentials?: StringNullableFilter<"Challenge"> | string | null
    reminderSentAt?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    creatorReady?: BoolFilter<"Challenge"> | boolean
    opponentReady?: BoolFilter<"Challenge"> | boolean
    readyAt?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    readyDeadline?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    readyReminderSentAt?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    readyUrgentReminderSentAt?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    opponent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    chatMessages?: ChatMessageListRelationFilter
    evidence?: EvidenceListRelationFilter
    match?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
    transactions?: TransactionListRelationFilter
  }

  export type ChallengeOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    opponentId?: SortOrderInput | SortOrder
    game?: SortOrder
    stakeAmount?: SortOrder
    status?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    creatorPaid?: SortOrder
    opponentPaid?: SortOrder
    shareCode?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    isMatchmaking?: SortOrder
    creatorCredentials?: SortOrderInput | SortOrder
    opponentCredentials?: SortOrderInput | SortOrder
    reminderSentAt?: SortOrderInput | SortOrder
    creatorReady?: SortOrder
    opponentReady?: SortOrder
    readyAt?: SortOrderInput | SortOrder
    readyDeadline?: SortOrderInput | SortOrder
    readyReminderSentAt?: SortOrderInput | SortOrder
    readyUrgentReminderSentAt?: SortOrderInput | SortOrder
    creator?: UserOrderByWithRelationInput
    opponent?: UserOrderByWithRelationInput
    winner?: UserOrderByWithRelationInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    evidence?: EvidenceOrderByRelationAggregateInput
    match?: MatchOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type ChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shareCode?: string
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    creatorId?: StringFilter<"Challenge"> | string
    opponentId?: StringNullableFilter<"Challenge"> | string | null
    game?: StringFilter<"Challenge"> | string
    stakeAmount?: FloatFilter<"Challenge"> | number
    status?: EnumChallengeStatusFilter<"Challenge"> | $Enums.ChallengeStatus
    winnerId?: StringNullableFilter<"Challenge"> | string | null
    creatorPaid?: BoolFilter<"Challenge"> | boolean
    opponentPaid?: BoolFilter<"Challenge"> | boolean
    notes?: StringNullableFilter<"Challenge"> | string | null
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    startedAt?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    isMatchmaking?: BoolFilter<"Challenge"> | boolean
    creatorCredentials?: StringNullableFilter<"Challenge"> | string | null
    opponentCredentials?: StringNullableFilter<"Challenge"> | string | null
    reminderSentAt?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    creatorReady?: BoolFilter<"Challenge"> | boolean
    opponentReady?: BoolFilter<"Challenge"> | boolean
    readyAt?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    readyDeadline?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    readyReminderSentAt?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    readyUrgentReminderSentAt?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    opponent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    chatMessages?: ChatMessageListRelationFilter
    evidence?: EvidenceListRelationFilter
    match?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
    transactions?: TransactionListRelationFilter
  }, "id" | "shareCode">

  export type ChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    opponentId?: SortOrderInput | SortOrder
    game?: SortOrder
    stakeAmount?: SortOrder
    status?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    creatorPaid?: SortOrder
    opponentPaid?: SortOrder
    shareCode?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    isMatchmaking?: SortOrder
    creatorCredentials?: SortOrderInput | SortOrder
    opponentCredentials?: SortOrderInput | SortOrder
    reminderSentAt?: SortOrderInput | SortOrder
    creatorReady?: SortOrder
    opponentReady?: SortOrder
    readyAt?: SortOrderInput | SortOrder
    readyDeadline?: SortOrderInput | SortOrder
    readyReminderSentAt?: SortOrderInput | SortOrder
    readyUrgentReminderSentAt?: SortOrderInput | SortOrder
    _count?: ChallengeCountOrderByAggregateInput
    _avg?: ChallengeAvgOrderByAggregateInput
    _max?: ChallengeMaxOrderByAggregateInput
    _min?: ChallengeMinOrderByAggregateInput
    _sum?: ChallengeSumOrderByAggregateInput
  }

  export type ChallengeScalarWhereWithAggregatesInput = {
    AND?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    OR?: ChallengeScalarWhereWithAggregatesInput[]
    NOT?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Challenge"> | string
    creatorId?: StringWithAggregatesFilter<"Challenge"> | string
    opponentId?: StringNullableWithAggregatesFilter<"Challenge"> | string | null
    game?: StringWithAggregatesFilter<"Challenge"> | string
    stakeAmount?: FloatWithAggregatesFilter<"Challenge"> | number
    status?: EnumChallengeStatusWithAggregatesFilter<"Challenge"> | $Enums.ChallengeStatus
    winnerId?: StringNullableWithAggregatesFilter<"Challenge"> | string | null
    creatorPaid?: BoolWithAggregatesFilter<"Challenge"> | boolean
    opponentPaid?: BoolWithAggregatesFilter<"Challenge"> | boolean
    shareCode?: StringWithAggregatesFilter<"Challenge"> | string
    notes?: StringNullableWithAggregatesFilter<"Challenge"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"Challenge"> | Date | string | null
    isMatchmaking?: BoolWithAggregatesFilter<"Challenge"> | boolean
    creatorCredentials?: StringNullableWithAggregatesFilter<"Challenge"> | string | null
    opponentCredentials?: StringNullableWithAggregatesFilter<"Challenge"> | string | null
    reminderSentAt?: DateTimeNullableWithAggregatesFilter<"Challenge"> | Date | string | null
    creatorReady?: BoolWithAggregatesFilter<"Challenge"> | boolean
    opponentReady?: BoolWithAggregatesFilter<"Challenge"> | boolean
    readyAt?: DateTimeNullableWithAggregatesFilter<"Challenge"> | Date | string | null
    readyDeadline?: DateTimeNullableWithAggregatesFilter<"Challenge"> | Date | string | null
    readyReminderSentAt?: DateTimeNullableWithAggregatesFilter<"Challenge"> | Date | string | null
    readyUrgentReminderSentAt?: DateTimeNullableWithAggregatesFilter<"Challenge"> | Date | string | null
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    challengeId?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    challenge?: ChallengeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    challengeId?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    challengeId?: StringWithAggregatesFilter<"ChatMessage"> | string
    userId?: StringWithAggregatesFilter<"ChatMessage"> | string
    message?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: FloatFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    challengeId?: StringNullableFilter<"Transaction"> | string | null
    description?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    stripeSessionId?: StringNullableFilter<"Transaction"> | string | null
    challenge?: XOR<ChallengeNullableScalarRelationFilter, ChallengeWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    challengeId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    stripeSessionId?: SortOrderInput | SortOrder
    challenge?: ChallengeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeSessionId?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: FloatFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    challengeId?: StringNullableFilter<"Transaction"> | string | null
    description?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    challenge?: XOR<ChallengeNullableScalarRelationFilter, ChallengeWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "stripeSessionId">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    challengeId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    stripeSessionId?: SortOrderInput | SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    challengeId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    stripeSessionId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    challengeId?: StringFilter<"Match"> | string
    confirmedById?: StringFilter<"Match"> | string
    creatorScore?: StringNullableFilter<"Match"> | string | null
    opponentScore?: StringNullableFilter<"Match"> | string | null
    notes?: StringNullableFilter<"Match"> | string | null
    confirmedAt?: DateTimeFilter<"Match"> | Date | string
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    confirmedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    confirmedById?: SortOrder
    creatorScore?: SortOrderInput | SortOrder
    opponentScore?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    confirmedAt?: SortOrder
    challenge?: ChallengeOrderByWithRelationInput
    confirmedBy?: UserOrderByWithRelationInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    challengeId?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    confirmedById?: StringFilter<"Match"> | string
    creatorScore?: StringNullableFilter<"Match"> | string | null
    opponentScore?: StringNullableFilter<"Match"> | string | null
    notes?: StringNullableFilter<"Match"> | string | null
    confirmedAt?: DateTimeFilter<"Match"> | Date | string
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    confirmedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "challengeId">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    confirmedById?: SortOrder
    creatorScore?: SortOrderInput | SortOrder
    opponentScore?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    confirmedAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    challengeId?: StringWithAggregatesFilter<"Match"> | string
    confirmedById?: StringWithAggregatesFilter<"Match"> | string
    creatorScore?: StringNullableWithAggregatesFilter<"Match"> | string | null
    opponentScore?: StringNullableWithAggregatesFilter<"Match"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Match"> | string | null
    confirmedAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type EvidenceWhereInput = {
    AND?: EvidenceWhereInput | EvidenceWhereInput[]
    OR?: EvidenceWhereInput[]
    NOT?: EvidenceWhereInput | EvidenceWhereInput[]
    id?: StringFilter<"Evidence"> | string
    challengeId?: StringFilter<"Evidence"> | string
    userId?: StringFilter<"Evidence"> | string
    fileUrl?: StringFilter<"Evidence"> | string
    fileType?: StringFilter<"Evidence"> | string
    description?: StringNullableFilter<"Evidence"> | string | null
    createdAt?: DateTimeFilter<"Evidence"> | Date | string
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EvidenceOrderByWithRelationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    challenge?: ChallengeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EvidenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvidenceWhereInput | EvidenceWhereInput[]
    OR?: EvidenceWhereInput[]
    NOT?: EvidenceWhereInput | EvidenceWhereInput[]
    challengeId?: StringFilter<"Evidence"> | string
    userId?: StringFilter<"Evidence"> | string
    fileUrl?: StringFilter<"Evidence"> | string
    fileType?: StringFilter<"Evidence"> | string
    description?: StringNullableFilter<"Evidence"> | string | null
    createdAt?: DateTimeFilter<"Evidence"> | Date | string
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EvidenceOrderByWithAggregationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EvidenceCountOrderByAggregateInput
    _max?: EvidenceMaxOrderByAggregateInput
    _min?: EvidenceMinOrderByAggregateInput
  }

  export type EvidenceScalarWhereWithAggregatesInput = {
    AND?: EvidenceScalarWhereWithAggregatesInput | EvidenceScalarWhereWithAggregatesInput[]
    OR?: EvidenceScalarWhereWithAggregatesInput[]
    NOT?: EvidenceScalarWhereWithAggregatesInput | EvidenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Evidence"> | string
    challengeId?: StringWithAggregatesFilter<"Evidence"> | string
    userId?: StringWithAggregatesFilter<"Evidence"> | string
    fileUrl?: StringWithAggregatesFilter<"Evidence"> | string
    fileType?: StringWithAggregatesFilter<"Evidence"> | string
    description?: StringNullableWithAggregatesFilter<"Evidence"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Evidence"> | Date | string
  }

  export type WithdrawalRequestWhereInput = {
    AND?: WithdrawalRequestWhereInput | WithdrawalRequestWhereInput[]
    OR?: WithdrawalRequestWhereInput[]
    NOT?: WithdrawalRequestWhereInput | WithdrawalRequestWhereInput[]
    id?: StringFilter<"WithdrawalRequest"> | string
    userId?: StringFilter<"WithdrawalRequest"> | string
    amount?: FloatFilter<"WithdrawalRequest"> | number
    method?: StringFilter<"WithdrawalRequest"> | string
    account?: StringFilter<"WithdrawalRequest"> | string
    status?: EnumTransactionStatusFilter<"WithdrawalRequest"> | $Enums.TransactionStatus
    adminNote?: StringNullableFilter<"WithdrawalRequest"> | string | null
    createdAt?: DateTimeFilter<"WithdrawalRequest"> | Date | string
    updatedAt?: DateTimeFilter<"WithdrawalRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WithdrawalRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    account?: SortOrder
    status?: SortOrder
    adminNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WithdrawalRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WithdrawalRequestWhereInput | WithdrawalRequestWhereInput[]
    OR?: WithdrawalRequestWhereInput[]
    NOT?: WithdrawalRequestWhereInput | WithdrawalRequestWhereInput[]
    userId?: StringFilter<"WithdrawalRequest"> | string
    amount?: FloatFilter<"WithdrawalRequest"> | number
    method?: StringFilter<"WithdrawalRequest"> | string
    account?: StringFilter<"WithdrawalRequest"> | string
    status?: EnumTransactionStatusFilter<"WithdrawalRequest"> | $Enums.TransactionStatus
    adminNote?: StringNullableFilter<"WithdrawalRequest"> | string | null
    createdAt?: DateTimeFilter<"WithdrawalRequest"> | Date | string
    updatedAt?: DateTimeFilter<"WithdrawalRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WithdrawalRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    account?: SortOrder
    status?: SortOrder
    adminNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WithdrawalRequestCountOrderByAggregateInput
    _avg?: WithdrawalRequestAvgOrderByAggregateInput
    _max?: WithdrawalRequestMaxOrderByAggregateInput
    _min?: WithdrawalRequestMinOrderByAggregateInput
    _sum?: WithdrawalRequestSumOrderByAggregateInput
  }

  export type WithdrawalRequestScalarWhereWithAggregatesInput = {
    AND?: WithdrawalRequestScalarWhereWithAggregatesInput | WithdrawalRequestScalarWhereWithAggregatesInput[]
    OR?: WithdrawalRequestScalarWhereWithAggregatesInput[]
    NOT?: WithdrawalRequestScalarWhereWithAggregatesInput | WithdrawalRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WithdrawalRequest"> | string
    userId?: StringWithAggregatesFilter<"WithdrawalRequest"> | string
    amount?: FloatWithAggregatesFilter<"WithdrawalRequest"> | number
    method?: StringWithAggregatesFilter<"WithdrawalRequest"> | string
    account?: StringWithAggregatesFilter<"WithdrawalRequest"> | string
    status?: EnumTransactionStatusWithAggregatesFilter<"WithdrawalRequest"> | $Enums.TransactionStatus
    adminNote?: StringNullableWithAggregatesFilter<"WithdrawalRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WithdrawalRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WithdrawalRequest"> | Date | string
  }

  export type MatchmakingQueueWhereInput = {
    AND?: MatchmakingQueueWhereInput | MatchmakingQueueWhereInput[]
    OR?: MatchmakingQueueWhereInput[]
    NOT?: MatchmakingQueueWhereInput | MatchmakingQueueWhereInput[]
    id?: StringFilter<"MatchmakingQueue"> | string
    userId?: StringFilter<"MatchmakingQueue"> | string
    game?: StringFilter<"MatchmakingQueue"> | string
    stakeAmount?: FloatFilter<"MatchmakingQueue"> | number
    credentials?: StringFilter<"MatchmakingQueue"> | string
    status?: EnumQueueStatusFilter<"MatchmakingQueue"> | $Enums.QueueStatus
    createdAt?: DateTimeFilter<"MatchmakingQueue"> | Date | string
    expiresAt?: DateTimeFilter<"MatchmakingQueue"> | Date | string
    challengeId?: StringNullableFilter<"MatchmakingQueue"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchmakingQueueOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    game?: SortOrder
    stakeAmount?: SortOrder
    credentials?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    challengeId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MatchmakingQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchmakingQueueWhereInput | MatchmakingQueueWhereInput[]
    OR?: MatchmakingQueueWhereInput[]
    NOT?: MatchmakingQueueWhereInput | MatchmakingQueueWhereInput[]
    userId?: StringFilter<"MatchmakingQueue"> | string
    game?: StringFilter<"MatchmakingQueue"> | string
    stakeAmount?: FloatFilter<"MatchmakingQueue"> | number
    credentials?: StringFilter<"MatchmakingQueue"> | string
    status?: EnumQueueStatusFilter<"MatchmakingQueue"> | $Enums.QueueStatus
    createdAt?: DateTimeFilter<"MatchmakingQueue"> | Date | string
    expiresAt?: DateTimeFilter<"MatchmakingQueue"> | Date | string
    challengeId?: StringNullableFilter<"MatchmakingQueue"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MatchmakingQueueOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    game?: SortOrder
    stakeAmount?: SortOrder
    credentials?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    challengeId?: SortOrderInput | SortOrder
    _count?: MatchmakingQueueCountOrderByAggregateInput
    _avg?: MatchmakingQueueAvgOrderByAggregateInput
    _max?: MatchmakingQueueMaxOrderByAggregateInput
    _min?: MatchmakingQueueMinOrderByAggregateInput
    _sum?: MatchmakingQueueSumOrderByAggregateInput
  }

  export type MatchmakingQueueScalarWhereWithAggregatesInput = {
    AND?: MatchmakingQueueScalarWhereWithAggregatesInput | MatchmakingQueueScalarWhereWithAggregatesInput[]
    OR?: MatchmakingQueueScalarWhereWithAggregatesInput[]
    NOT?: MatchmakingQueueScalarWhereWithAggregatesInput | MatchmakingQueueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchmakingQueue"> | string
    userId?: StringWithAggregatesFilter<"MatchmakingQueue"> | string
    game?: StringWithAggregatesFilter<"MatchmakingQueue"> | string
    stakeAmount?: FloatWithAggregatesFilter<"MatchmakingQueue"> | number
    credentials?: StringWithAggregatesFilter<"MatchmakingQueue"> | string
    status?: EnumQueueStatusWithAggregatesFilter<"MatchmakingQueue"> | $Enums.QueueStatus
    createdAt?: DateTimeWithAggregatesFilter<"MatchmakingQueue"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"MatchmakingQueue"> | Date | string
    challengeId?: StringNullableWithAggregatesFilter<"MatchmakingQueue"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    evidence?: EvidenceCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeUncheckedCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeUncheckedCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUncheckedUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUncheckedUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChallengeCreateInput = {
    id?: string
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    creator: UserCreateNestedOneWithoutChallengesCreatedInput
    opponent?: UserCreateNestedOneWithoutChallengesOpponentInput
    winner?: UserCreateNestedOneWithoutWonChallengesInput
    chatMessages?: ChatMessageCreateNestedManyWithoutChallengeInput
    evidence?: EvidenceCreateNestedManyWithoutChallengeInput
    match?: MatchCreateNestedOneWithoutChallengeInput
    transactions?: TransactionCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: string
    creatorId: string
    opponentId?: string | null
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    winnerId?: string | null
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutChallengeInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutChallengeInput
    match?: MatchUncheckedCreateNestedOneWithoutChallengeInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneRequiredWithoutChallengesCreatedNestedInput
    opponent?: UserUpdateOneWithoutChallengesOpponentNestedInput
    winner?: UserUpdateOneWithoutWonChallengesNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutChallengeNestedInput
    evidence?: EvidenceUpdateManyWithoutChallengeNestedInput
    match?: MatchUpdateOneWithoutChallengeNestedInput
    transactions?: TransactionUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    opponentId?: NullableStringFieldUpdateOperationsInput | string | null
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutChallengeNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutChallengeNestedInput
    match?: MatchUncheckedUpdateOneWithoutChallengeNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeCreateManyInput = {
    id?: string
    creatorId: string
    opponentId?: string | null
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    winnerId?: string | null
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
  }

  export type ChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    opponentId?: NullableStringFieldUpdateOperationsInput | string | null
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatMessageCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutChatMessagesInput
    user: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    challengeId: string
    userId: string
    message: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutChatMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    challengeId: string
    userId: string
    message: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    description?: string | null
    createdAt?: Date | string
    stripeSessionId?: string | null
    challenge?: ChallengeCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    challengeId?: string | null
    description?: string | null
    createdAt?: Date | string
    stripeSessionId?: string | null
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    challenge?: ChallengeUpdateOneWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    challengeId?: string | null
    description?: string | null
    createdAt?: Date | string
    stripeSessionId?: string | null
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchCreateInput = {
    id?: string
    creatorScore?: string | null
    opponentScore?: string | null
    notes?: string | null
    confirmedAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutMatchInput
    confirmedBy: UserCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    challengeId: string
    confirmedById: string
    creatorScore?: string | null
    opponentScore?: string | null
    notes?: string | null
    confirmedAt?: Date | string
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorScore?: NullableStringFieldUpdateOperationsInput | string | null
    opponentScore?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutMatchNestedInput
    confirmedBy?: UserUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    confirmedById?: StringFieldUpdateOperationsInput | string
    creatorScore?: NullableStringFieldUpdateOperationsInput | string | null
    opponentScore?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManyInput = {
    id?: string
    challengeId: string
    confirmedById: string
    creatorScore?: string | null
    opponentScore?: string | null
    notes?: string | null
    confirmedAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorScore?: NullableStringFieldUpdateOperationsInput | string | null
    opponentScore?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    confirmedById?: StringFieldUpdateOperationsInput | string
    creatorScore?: NullableStringFieldUpdateOperationsInput | string | null
    opponentScore?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceCreateInput = {
    id?: string
    fileUrl: string
    fileType: string
    description?: string | null
    createdAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutEvidenceInput
    user: UserCreateNestedOneWithoutEvidenceInput
  }

  export type EvidenceUncheckedCreateInput = {
    id?: string
    challengeId: string
    userId: string
    fileUrl: string
    fileType: string
    description?: string | null
    createdAt?: Date | string
  }

  export type EvidenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutEvidenceNestedInput
    user?: UserUpdateOneRequiredWithoutEvidenceNestedInput
  }

  export type EvidenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceCreateManyInput = {
    id?: string
    challengeId: string
    userId: string
    fileUrl: string
    fileType: string
    description?: string | null
    createdAt?: Date | string
  }

  export type EvidenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalRequestCreateInput = {
    id?: string
    amount: number
    method: string
    account: string
    status?: $Enums.TransactionStatus
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWithdrawalRequestsInput
  }

  export type WithdrawalRequestUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    method: string
    account: string
    status?: $Enums.TransactionStatus
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWithdrawalRequestsNestedInput
  }

  export type WithdrawalRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalRequestCreateManyInput = {
    id?: string
    userId: string
    amount: number
    method: string
    account: string
    status?: $Enums.TransactionStatus
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchmakingQueueCreateInput = {
    id?: string
    game: string
    stakeAmount: number
    credentials: string
    status?: $Enums.QueueStatus
    createdAt?: Date | string
    expiresAt: Date | string
    challengeId?: string | null
    user: UserCreateNestedOneWithoutMatchmakingQueuesInput
  }

  export type MatchmakingQueueUncheckedCreateInput = {
    id?: string
    userId: string
    game: string
    stakeAmount: number
    credentials: string
    status?: $Enums.QueueStatus
    createdAt?: Date | string
    expiresAt: Date | string
    challengeId?: string | null
  }

  export type MatchmakingQueueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    credentials?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMatchmakingQueuesNestedInput
  }

  export type MatchmakingQueueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    credentials?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchmakingQueueCreateManyInput = {
    id?: string
    userId: string
    game: string
    stakeAmount: number
    credentials: string
    status?: $Enums.QueueStatus
    createdAt?: Date | string
    expiresAt: Date | string
    challengeId?: string | null
  }

  export type MatchmakingQueueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    credentials?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchmakingQueueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    credentials?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ChallengeListRelationFilter = {
    every?: ChallengeWhereInput
    some?: ChallengeWhereInput
    none?: ChallengeWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type EvidenceListRelationFilter = {
    every?: EvidenceWhereInput
    some?: EvidenceWhereInput
    none?: EvidenceWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type WithdrawalRequestListRelationFilter = {
    every?: WithdrawalRequestWhereInput
    some?: WithdrawalRequestWhereInput
    none?: WithdrawalRequestWhereInput
  }

  export type MatchmakingQueueListRelationFilter = {
    every?: MatchmakingQueueWhereInput
    some?: MatchmakingQueueWhereInput
    none?: MatchmakingQueueWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvidenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WithdrawalRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchmakingQueueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    balance?: SortOrder
    totalWins?: SortOrder
    totalLosses?: SortOrder
    totalEarnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAdmin?: SortOrder
    ghostStrikes?: SortOrder
    suspendedUntil?: SortOrder
    gameCredentials?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    balance?: SortOrder
    totalWins?: SortOrder
    totalLosses?: SortOrder
    totalEarnings?: SortOrder
    ghostStrikes?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    balance?: SortOrder
    totalWins?: SortOrder
    totalLosses?: SortOrder
    totalEarnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAdmin?: SortOrder
    ghostStrikes?: SortOrder
    suspendedUntil?: SortOrder
    gameCredentials?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    balance?: SortOrder
    totalWins?: SortOrder
    totalLosses?: SortOrder
    totalEarnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAdmin?: SortOrder
    ghostStrikes?: SortOrder
    suspendedUntil?: SortOrder
    gameCredentials?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    balance?: SortOrder
    totalWins?: SortOrder
    totalLosses?: SortOrder
    totalEarnings?: SortOrder
    ghostStrikes?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumChallengeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeStatus | EnumChallengeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeStatusFilter<$PrismaModel> | $Enums.ChallengeStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MatchNullableScalarRelationFilter = {
    is?: MatchWhereInput | null
    isNot?: MatchWhereInput | null
  }

  export type ChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    opponentId?: SortOrder
    game?: SortOrder
    stakeAmount?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
    creatorPaid?: SortOrder
    opponentPaid?: SortOrder
    shareCode?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    isMatchmaking?: SortOrder
    creatorCredentials?: SortOrder
    opponentCredentials?: SortOrder
    reminderSentAt?: SortOrder
    creatorReady?: SortOrder
    opponentReady?: SortOrder
    readyAt?: SortOrder
    readyDeadline?: SortOrder
    readyReminderSentAt?: SortOrder
    readyUrgentReminderSentAt?: SortOrder
  }

  export type ChallengeAvgOrderByAggregateInput = {
    stakeAmount?: SortOrder
  }

  export type ChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    opponentId?: SortOrder
    game?: SortOrder
    stakeAmount?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
    creatorPaid?: SortOrder
    opponentPaid?: SortOrder
    shareCode?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    isMatchmaking?: SortOrder
    creatorCredentials?: SortOrder
    opponentCredentials?: SortOrder
    reminderSentAt?: SortOrder
    creatorReady?: SortOrder
    opponentReady?: SortOrder
    readyAt?: SortOrder
    readyDeadline?: SortOrder
    readyReminderSentAt?: SortOrder
    readyUrgentReminderSentAt?: SortOrder
  }

  export type ChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    opponentId?: SortOrder
    game?: SortOrder
    stakeAmount?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
    creatorPaid?: SortOrder
    opponentPaid?: SortOrder
    shareCode?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    isMatchmaking?: SortOrder
    creatorCredentials?: SortOrder
    opponentCredentials?: SortOrder
    reminderSentAt?: SortOrder
    creatorReady?: SortOrder
    opponentReady?: SortOrder
    readyAt?: SortOrder
    readyDeadline?: SortOrder
    readyReminderSentAt?: SortOrder
    readyUrgentReminderSentAt?: SortOrder
  }

  export type ChallengeSumOrderByAggregateInput = {
    stakeAmount?: SortOrder
  }

  export type EnumChallengeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeStatus | EnumChallengeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChallengeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChallengeStatusFilter<$PrismaModel>
    _max?: NestedEnumChallengeStatusFilter<$PrismaModel>
  }

  export type ChallengeScalarRelationFilter = {
    is?: ChallengeWhereInput
    isNot?: ChallengeWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type ChallengeNullableScalarRelationFilter = {
    is?: ChallengeWhereInput | null
    isNot?: ChallengeWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    challengeId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    stripeSessionId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    challengeId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    stripeSessionId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    challengeId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    stripeSessionId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    confirmedById?: SortOrder
    creatorScore?: SortOrder
    opponentScore?: SortOrder
    notes?: SortOrder
    confirmedAt?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    confirmedById?: SortOrder
    creatorScore?: SortOrder
    opponentScore?: SortOrder
    notes?: SortOrder
    confirmedAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    confirmedById?: SortOrder
    creatorScore?: SortOrder
    opponentScore?: SortOrder
    notes?: SortOrder
    confirmedAt?: SortOrder
  }

  export type EvidenceCountOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type EvidenceMaxOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type EvidenceMinOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type WithdrawalRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    account?: SortOrder
    status?: SortOrder
    adminNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawalRequestAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WithdrawalRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    account?: SortOrder
    status?: SortOrder
    adminNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawalRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    account?: SortOrder
    status?: SortOrder
    adminNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawalRequestSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumQueueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QueueStatus | EnumQueueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQueueStatusFilter<$PrismaModel> | $Enums.QueueStatus
  }

  export type MatchmakingQueueCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    game?: SortOrder
    stakeAmount?: SortOrder
    credentials?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    challengeId?: SortOrder
  }

  export type MatchmakingQueueAvgOrderByAggregateInput = {
    stakeAmount?: SortOrder
  }

  export type MatchmakingQueueMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    game?: SortOrder
    stakeAmount?: SortOrder
    credentials?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    challengeId?: SortOrder
  }

  export type MatchmakingQueueMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    game?: SortOrder
    stakeAmount?: SortOrder
    credentials?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    challengeId?: SortOrder
  }

  export type MatchmakingQueueSumOrderByAggregateInput = {
    stakeAmount?: SortOrder
  }

  export type EnumQueueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QueueStatus | EnumQueueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQueueStatusWithAggregatesFilter<$PrismaModel> | $Enums.QueueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQueueStatusFilter<$PrismaModel>
    _max?: NestedEnumQueueStatusFilter<$PrismaModel>
  }

  export type ChallengeCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput> | ChallengeCreateWithoutCreatorInput[] | ChallengeUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatorInput | ChallengeCreateOrConnectWithoutCreatorInput[]
    createMany?: ChallengeCreateManyCreatorInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type ChallengeCreateNestedManyWithoutOpponentInput = {
    create?: XOR<ChallengeCreateWithoutOpponentInput, ChallengeUncheckedCreateWithoutOpponentInput> | ChallengeCreateWithoutOpponentInput[] | ChallengeUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutOpponentInput | ChallengeCreateOrConnectWithoutOpponentInput[]
    createMany?: ChallengeCreateManyOpponentInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type ChallengeCreateNestedManyWithoutWinnerInput = {
    create?: XOR<ChallengeCreateWithoutWinnerInput, ChallengeUncheckedCreateWithoutWinnerInput> | ChallengeCreateWithoutWinnerInput[] | ChallengeUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutWinnerInput | ChallengeCreateOrConnectWithoutWinnerInput[]
    createMany?: ChallengeCreateManyWinnerInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type EvidenceCreateNestedManyWithoutUserInput = {
    create?: XOR<EvidenceCreateWithoutUserInput, EvidenceUncheckedCreateWithoutUserInput> | EvidenceCreateWithoutUserInput[] | EvidenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutUserInput | EvidenceCreateOrConnectWithoutUserInput[]
    createMany?: EvidenceCreateManyUserInputEnvelope
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutConfirmedByInput = {
    create?: XOR<MatchCreateWithoutConfirmedByInput, MatchUncheckedCreateWithoutConfirmedByInput> | MatchCreateWithoutConfirmedByInput[] | MatchUncheckedCreateWithoutConfirmedByInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutConfirmedByInput | MatchCreateOrConnectWithoutConfirmedByInput[]
    createMany?: MatchCreateManyConfirmedByInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type WithdrawalRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawalRequestCreateWithoutUserInput, WithdrawalRequestUncheckedCreateWithoutUserInput> | WithdrawalRequestCreateWithoutUserInput[] | WithdrawalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalRequestCreateOrConnectWithoutUserInput | WithdrawalRequestCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawalRequestCreateManyUserInputEnvelope
    connect?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
  }

  export type MatchmakingQueueCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchmakingQueueCreateWithoutUserInput, MatchmakingQueueUncheckedCreateWithoutUserInput> | MatchmakingQueueCreateWithoutUserInput[] | MatchmakingQueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchmakingQueueCreateOrConnectWithoutUserInput | MatchmakingQueueCreateOrConnectWithoutUserInput[]
    createMany?: MatchmakingQueueCreateManyUserInputEnvelope
    connect?: MatchmakingQueueWhereUniqueInput | MatchmakingQueueWhereUniqueInput[]
  }

  export type ChallengeUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput> | ChallengeCreateWithoutCreatorInput[] | ChallengeUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatorInput | ChallengeCreateOrConnectWithoutCreatorInput[]
    createMany?: ChallengeCreateManyCreatorInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type ChallengeUncheckedCreateNestedManyWithoutOpponentInput = {
    create?: XOR<ChallengeCreateWithoutOpponentInput, ChallengeUncheckedCreateWithoutOpponentInput> | ChallengeCreateWithoutOpponentInput[] | ChallengeUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutOpponentInput | ChallengeCreateOrConnectWithoutOpponentInput[]
    createMany?: ChallengeCreateManyOpponentInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type ChallengeUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<ChallengeCreateWithoutWinnerInput, ChallengeUncheckedCreateWithoutWinnerInput> | ChallengeCreateWithoutWinnerInput[] | ChallengeUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutWinnerInput | ChallengeCreateOrConnectWithoutWinnerInput[]
    createMany?: ChallengeCreateManyWinnerInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type EvidenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EvidenceCreateWithoutUserInput, EvidenceUncheckedCreateWithoutUserInput> | EvidenceCreateWithoutUserInput[] | EvidenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutUserInput | EvidenceCreateOrConnectWithoutUserInput[]
    createMany?: EvidenceCreateManyUserInputEnvelope
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutConfirmedByInput = {
    create?: XOR<MatchCreateWithoutConfirmedByInput, MatchUncheckedCreateWithoutConfirmedByInput> | MatchCreateWithoutConfirmedByInput[] | MatchUncheckedCreateWithoutConfirmedByInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutConfirmedByInput | MatchCreateOrConnectWithoutConfirmedByInput[]
    createMany?: MatchCreateManyConfirmedByInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawalRequestCreateWithoutUserInput, WithdrawalRequestUncheckedCreateWithoutUserInput> | WithdrawalRequestCreateWithoutUserInput[] | WithdrawalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalRequestCreateOrConnectWithoutUserInput | WithdrawalRequestCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawalRequestCreateManyUserInputEnvelope
    connect?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
  }

  export type MatchmakingQueueUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchmakingQueueCreateWithoutUserInput, MatchmakingQueueUncheckedCreateWithoutUserInput> | MatchmakingQueueCreateWithoutUserInput[] | MatchmakingQueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchmakingQueueCreateOrConnectWithoutUserInput | MatchmakingQueueCreateOrConnectWithoutUserInput[]
    createMany?: MatchmakingQueueCreateManyUserInputEnvelope
    connect?: MatchmakingQueueWhereUniqueInput | MatchmakingQueueWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ChallengeUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput> | ChallengeCreateWithoutCreatorInput[] | ChallengeUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatorInput | ChallengeCreateOrConnectWithoutCreatorInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutCreatorInput | ChallengeUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChallengeCreateManyCreatorInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutCreatorInput | ChallengeUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutCreatorInput | ChallengeUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type ChallengeUpdateManyWithoutOpponentNestedInput = {
    create?: XOR<ChallengeCreateWithoutOpponentInput, ChallengeUncheckedCreateWithoutOpponentInput> | ChallengeCreateWithoutOpponentInput[] | ChallengeUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutOpponentInput | ChallengeCreateOrConnectWithoutOpponentInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutOpponentInput | ChallengeUpsertWithWhereUniqueWithoutOpponentInput[]
    createMany?: ChallengeCreateManyOpponentInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutOpponentInput | ChallengeUpdateWithWhereUniqueWithoutOpponentInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutOpponentInput | ChallengeUpdateManyWithWhereWithoutOpponentInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type ChallengeUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<ChallengeCreateWithoutWinnerInput, ChallengeUncheckedCreateWithoutWinnerInput> | ChallengeCreateWithoutWinnerInput[] | ChallengeUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutWinnerInput | ChallengeCreateOrConnectWithoutWinnerInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutWinnerInput | ChallengeUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: ChallengeCreateManyWinnerInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutWinnerInput | ChallengeUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutWinnerInput | ChallengeUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type EvidenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<EvidenceCreateWithoutUserInput, EvidenceUncheckedCreateWithoutUserInput> | EvidenceCreateWithoutUserInput[] | EvidenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutUserInput | EvidenceCreateOrConnectWithoutUserInput[]
    upsert?: EvidenceUpsertWithWhereUniqueWithoutUserInput | EvidenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EvidenceCreateManyUserInputEnvelope
    set?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    disconnect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    delete?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    update?: EvidenceUpdateWithWhereUniqueWithoutUserInput | EvidenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EvidenceUpdateManyWithWhereWithoutUserInput | EvidenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutConfirmedByNestedInput = {
    create?: XOR<MatchCreateWithoutConfirmedByInput, MatchUncheckedCreateWithoutConfirmedByInput> | MatchCreateWithoutConfirmedByInput[] | MatchUncheckedCreateWithoutConfirmedByInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutConfirmedByInput | MatchCreateOrConnectWithoutConfirmedByInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutConfirmedByInput | MatchUpsertWithWhereUniqueWithoutConfirmedByInput[]
    createMany?: MatchCreateManyConfirmedByInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutConfirmedByInput | MatchUpdateWithWhereUniqueWithoutConfirmedByInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutConfirmedByInput | MatchUpdateManyWithWhereWithoutConfirmedByInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type WithdrawalRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawalRequestCreateWithoutUserInput, WithdrawalRequestUncheckedCreateWithoutUserInput> | WithdrawalRequestCreateWithoutUserInput[] | WithdrawalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalRequestCreateOrConnectWithoutUserInput | WithdrawalRequestCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput | WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawalRequestCreateManyUserInputEnvelope
    set?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    disconnect?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    delete?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    connect?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    update?: WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput | WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawalRequestUpdateManyWithWhereWithoutUserInput | WithdrawalRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawalRequestScalarWhereInput | WithdrawalRequestScalarWhereInput[]
  }

  export type MatchmakingQueueUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchmakingQueueCreateWithoutUserInput, MatchmakingQueueUncheckedCreateWithoutUserInput> | MatchmakingQueueCreateWithoutUserInput[] | MatchmakingQueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchmakingQueueCreateOrConnectWithoutUserInput | MatchmakingQueueCreateOrConnectWithoutUserInput[]
    upsert?: MatchmakingQueueUpsertWithWhereUniqueWithoutUserInput | MatchmakingQueueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchmakingQueueCreateManyUserInputEnvelope
    set?: MatchmakingQueueWhereUniqueInput | MatchmakingQueueWhereUniqueInput[]
    disconnect?: MatchmakingQueueWhereUniqueInput | MatchmakingQueueWhereUniqueInput[]
    delete?: MatchmakingQueueWhereUniqueInput | MatchmakingQueueWhereUniqueInput[]
    connect?: MatchmakingQueueWhereUniqueInput | MatchmakingQueueWhereUniqueInput[]
    update?: MatchmakingQueueUpdateWithWhereUniqueWithoutUserInput | MatchmakingQueueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchmakingQueueUpdateManyWithWhereWithoutUserInput | MatchmakingQueueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchmakingQueueScalarWhereInput | MatchmakingQueueScalarWhereInput[]
  }

  export type ChallengeUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput> | ChallengeCreateWithoutCreatorInput[] | ChallengeUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatorInput | ChallengeCreateOrConnectWithoutCreatorInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutCreatorInput | ChallengeUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChallengeCreateManyCreatorInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutCreatorInput | ChallengeUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutCreatorInput | ChallengeUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type ChallengeUncheckedUpdateManyWithoutOpponentNestedInput = {
    create?: XOR<ChallengeCreateWithoutOpponentInput, ChallengeUncheckedCreateWithoutOpponentInput> | ChallengeCreateWithoutOpponentInput[] | ChallengeUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutOpponentInput | ChallengeCreateOrConnectWithoutOpponentInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutOpponentInput | ChallengeUpsertWithWhereUniqueWithoutOpponentInput[]
    createMany?: ChallengeCreateManyOpponentInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutOpponentInput | ChallengeUpdateWithWhereUniqueWithoutOpponentInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutOpponentInput | ChallengeUpdateManyWithWhereWithoutOpponentInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type ChallengeUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<ChallengeCreateWithoutWinnerInput, ChallengeUncheckedCreateWithoutWinnerInput> | ChallengeCreateWithoutWinnerInput[] | ChallengeUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutWinnerInput | ChallengeCreateOrConnectWithoutWinnerInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutWinnerInput | ChallengeUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: ChallengeCreateManyWinnerInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutWinnerInput | ChallengeUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutWinnerInput | ChallengeUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type EvidenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EvidenceCreateWithoutUserInput, EvidenceUncheckedCreateWithoutUserInput> | EvidenceCreateWithoutUserInput[] | EvidenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutUserInput | EvidenceCreateOrConnectWithoutUserInput[]
    upsert?: EvidenceUpsertWithWhereUniqueWithoutUserInput | EvidenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EvidenceCreateManyUserInputEnvelope
    set?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    disconnect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    delete?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    update?: EvidenceUpdateWithWhereUniqueWithoutUserInput | EvidenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EvidenceUpdateManyWithWhereWithoutUserInput | EvidenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutConfirmedByNestedInput = {
    create?: XOR<MatchCreateWithoutConfirmedByInput, MatchUncheckedCreateWithoutConfirmedByInput> | MatchCreateWithoutConfirmedByInput[] | MatchUncheckedCreateWithoutConfirmedByInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutConfirmedByInput | MatchCreateOrConnectWithoutConfirmedByInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutConfirmedByInput | MatchUpsertWithWhereUniqueWithoutConfirmedByInput[]
    createMany?: MatchCreateManyConfirmedByInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutConfirmedByInput | MatchUpdateWithWhereUniqueWithoutConfirmedByInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutConfirmedByInput | MatchUpdateManyWithWhereWithoutConfirmedByInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawalRequestCreateWithoutUserInput, WithdrawalRequestUncheckedCreateWithoutUserInput> | WithdrawalRequestCreateWithoutUserInput[] | WithdrawalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalRequestCreateOrConnectWithoutUserInput | WithdrawalRequestCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput | WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawalRequestCreateManyUserInputEnvelope
    set?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    disconnect?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    delete?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    connect?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    update?: WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput | WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawalRequestUpdateManyWithWhereWithoutUserInput | WithdrawalRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawalRequestScalarWhereInput | WithdrawalRequestScalarWhereInput[]
  }

  export type MatchmakingQueueUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchmakingQueueCreateWithoutUserInput, MatchmakingQueueUncheckedCreateWithoutUserInput> | MatchmakingQueueCreateWithoutUserInput[] | MatchmakingQueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchmakingQueueCreateOrConnectWithoutUserInput | MatchmakingQueueCreateOrConnectWithoutUserInput[]
    upsert?: MatchmakingQueueUpsertWithWhereUniqueWithoutUserInput | MatchmakingQueueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchmakingQueueCreateManyUserInputEnvelope
    set?: MatchmakingQueueWhereUniqueInput | MatchmakingQueueWhereUniqueInput[]
    disconnect?: MatchmakingQueueWhereUniqueInput | MatchmakingQueueWhereUniqueInput[]
    delete?: MatchmakingQueueWhereUniqueInput | MatchmakingQueueWhereUniqueInput[]
    connect?: MatchmakingQueueWhereUniqueInput | MatchmakingQueueWhereUniqueInput[]
    update?: MatchmakingQueueUpdateWithWhereUniqueWithoutUserInput | MatchmakingQueueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchmakingQueueUpdateManyWithWhereWithoutUserInput | MatchmakingQueueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchmakingQueueScalarWhereInput | MatchmakingQueueScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChallengesCreatedInput = {
    create?: XOR<UserCreateWithoutChallengesCreatedInput, UserUncheckedCreateWithoutChallengesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengesCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChallengesOpponentInput = {
    create?: XOR<UserCreateWithoutChallengesOpponentInput, UserUncheckedCreateWithoutChallengesOpponentInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengesOpponentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWonChallengesInput = {
    create?: XOR<UserCreateWithoutWonChallengesInput, UserUncheckedCreateWithoutWonChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWonChallengesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChatMessageCreateWithoutChallengeInput, ChatMessageUncheckedCreateWithoutChallengeInput> | ChatMessageCreateWithoutChallengeInput[] | ChatMessageUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChallengeInput | ChatMessageCreateOrConnectWithoutChallengeInput[]
    createMany?: ChatMessageCreateManyChallengeInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type EvidenceCreateNestedManyWithoutChallengeInput = {
    create?: XOR<EvidenceCreateWithoutChallengeInput, EvidenceUncheckedCreateWithoutChallengeInput> | EvidenceCreateWithoutChallengeInput[] | EvidenceUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutChallengeInput | EvidenceCreateOrConnectWithoutChallengeInput[]
    createMany?: EvidenceCreateManyChallengeInputEnvelope
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
  }

  export type MatchCreateNestedOneWithoutChallengeInput = {
    create?: XOR<MatchCreateWithoutChallengeInput, MatchUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: MatchCreateOrConnectWithoutChallengeInput
    connect?: MatchWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutChallengeInput = {
    create?: XOR<TransactionCreateWithoutChallengeInput, TransactionUncheckedCreateWithoutChallengeInput> | TransactionCreateWithoutChallengeInput[] | TransactionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutChallengeInput | TransactionCreateOrConnectWithoutChallengeInput[]
    createMany?: TransactionCreateManyChallengeInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChatMessageCreateWithoutChallengeInput, ChatMessageUncheckedCreateWithoutChallengeInput> | ChatMessageCreateWithoutChallengeInput[] | ChatMessageUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChallengeInput | ChatMessageCreateOrConnectWithoutChallengeInput[]
    createMany?: ChatMessageCreateManyChallengeInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type EvidenceUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<EvidenceCreateWithoutChallengeInput, EvidenceUncheckedCreateWithoutChallengeInput> | EvidenceCreateWithoutChallengeInput[] | EvidenceUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutChallengeInput | EvidenceCreateOrConnectWithoutChallengeInput[]
    createMany?: EvidenceCreateManyChallengeInputEnvelope
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedOneWithoutChallengeInput = {
    create?: XOR<MatchCreateWithoutChallengeInput, MatchUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: MatchCreateOrConnectWithoutChallengeInput
    connect?: MatchWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<TransactionCreateWithoutChallengeInput, TransactionUncheckedCreateWithoutChallengeInput> | TransactionCreateWithoutChallengeInput[] | TransactionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutChallengeInput | TransactionCreateOrConnectWithoutChallengeInput[]
    createMany?: TransactionCreateManyChallengeInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumChallengeStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChallengeStatus
  }

  export type UserUpdateOneRequiredWithoutChallengesCreatedNestedInput = {
    create?: XOR<UserCreateWithoutChallengesCreatedInput, UserUncheckedCreateWithoutChallengesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengesCreatedInput
    upsert?: UserUpsertWithoutChallengesCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChallengesCreatedInput, UserUpdateWithoutChallengesCreatedInput>, UserUncheckedUpdateWithoutChallengesCreatedInput>
  }

  export type UserUpdateOneWithoutChallengesOpponentNestedInput = {
    create?: XOR<UserCreateWithoutChallengesOpponentInput, UserUncheckedCreateWithoutChallengesOpponentInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengesOpponentInput
    upsert?: UserUpsertWithoutChallengesOpponentInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChallengesOpponentInput, UserUpdateWithoutChallengesOpponentInput>, UserUncheckedUpdateWithoutChallengesOpponentInput>
  }

  export type UserUpdateOneWithoutWonChallengesNestedInput = {
    create?: XOR<UserCreateWithoutWonChallengesInput, UserUncheckedCreateWithoutWonChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWonChallengesInput
    upsert?: UserUpsertWithoutWonChallengesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWonChallengesInput, UserUpdateWithoutWonChallengesInput>, UserUncheckedUpdateWithoutWonChallengesInput>
  }

  export type ChatMessageUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChallengeInput, ChatMessageUncheckedCreateWithoutChallengeInput> | ChatMessageCreateWithoutChallengeInput[] | ChatMessageUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChallengeInput | ChatMessageCreateOrConnectWithoutChallengeInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChallengeInput | ChatMessageUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChatMessageCreateManyChallengeInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChallengeInput | ChatMessageUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChallengeInput | ChatMessageUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type EvidenceUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<EvidenceCreateWithoutChallengeInput, EvidenceUncheckedCreateWithoutChallengeInput> | EvidenceCreateWithoutChallengeInput[] | EvidenceUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutChallengeInput | EvidenceCreateOrConnectWithoutChallengeInput[]
    upsert?: EvidenceUpsertWithWhereUniqueWithoutChallengeInput | EvidenceUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: EvidenceCreateManyChallengeInputEnvelope
    set?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    disconnect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    delete?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    update?: EvidenceUpdateWithWhereUniqueWithoutChallengeInput | EvidenceUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: EvidenceUpdateManyWithWhereWithoutChallengeInput | EvidenceUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
  }

  export type MatchUpdateOneWithoutChallengeNestedInput = {
    create?: XOR<MatchCreateWithoutChallengeInput, MatchUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: MatchCreateOrConnectWithoutChallengeInput
    upsert?: MatchUpsertWithoutChallengeInput
    disconnect?: MatchWhereInput | boolean
    delete?: MatchWhereInput | boolean
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutChallengeInput, MatchUpdateWithoutChallengeInput>, MatchUncheckedUpdateWithoutChallengeInput>
  }

  export type TransactionUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<TransactionCreateWithoutChallengeInput, TransactionUncheckedCreateWithoutChallengeInput> | TransactionCreateWithoutChallengeInput[] | TransactionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutChallengeInput | TransactionCreateOrConnectWithoutChallengeInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutChallengeInput | TransactionUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: TransactionCreateManyChallengeInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutChallengeInput | TransactionUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutChallengeInput | TransactionUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChallengeInput, ChatMessageUncheckedCreateWithoutChallengeInput> | ChatMessageCreateWithoutChallengeInput[] | ChatMessageUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChallengeInput | ChatMessageCreateOrConnectWithoutChallengeInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChallengeInput | ChatMessageUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChatMessageCreateManyChallengeInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChallengeInput | ChatMessageUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChallengeInput | ChatMessageUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type EvidenceUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<EvidenceCreateWithoutChallengeInput, EvidenceUncheckedCreateWithoutChallengeInput> | EvidenceCreateWithoutChallengeInput[] | EvidenceUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutChallengeInput | EvidenceCreateOrConnectWithoutChallengeInput[]
    upsert?: EvidenceUpsertWithWhereUniqueWithoutChallengeInput | EvidenceUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: EvidenceCreateManyChallengeInputEnvelope
    set?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    disconnect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    delete?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    update?: EvidenceUpdateWithWhereUniqueWithoutChallengeInput | EvidenceUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: EvidenceUpdateManyWithWhereWithoutChallengeInput | EvidenceUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
  }

  export type MatchUncheckedUpdateOneWithoutChallengeNestedInput = {
    create?: XOR<MatchCreateWithoutChallengeInput, MatchUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: MatchCreateOrConnectWithoutChallengeInput
    upsert?: MatchUpsertWithoutChallengeInput
    disconnect?: MatchWhereInput | boolean
    delete?: MatchWhereInput | boolean
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutChallengeInput, MatchUpdateWithoutChallengeInput>, MatchUncheckedUpdateWithoutChallengeInput>
  }

  export type TransactionUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<TransactionCreateWithoutChallengeInput, TransactionUncheckedCreateWithoutChallengeInput> | TransactionCreateWithoutChallengeInput[] | TransactionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutChallengeInput | TransactionCreateOrConnectWithoutChallengeInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutChallengeInput | TransactionUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: TransactionCreateManyChallengeInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutChallengeInput | TransactionUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutChallengeInput | TransactionUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ChallengeCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<ChallengeCreateWithoutChatMessagesInput, ChallengeUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutChatMessagesInput
    connect?: ChallengeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<ChallengeCreateWithoutChatMessagesInput, ChallengeUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutChatMessagesInput
    upsert?: ChallengeUpsertWithoutChatMessagesInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutChatMessagesInput, ChallengeUpdateWithoutChatMessagesInput>, ChallengeUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    upsert?: UserUpsertWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessagesInput, UserUpdateWithoutChatMessagesInput>, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ChallengeCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ChallengeCreateWithoutTransactionsInput, ChallengeUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutTransactionsInput
    connect?: ChallengeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type ChallengeUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<ChallengeCreateWithoutTransactionsInput, ChallengeUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutTransactionsInput
    upsert?: ChallengeUpsertWithoutTransactionsInput
    disconnect?: ChallengeWhereInput | boolean
    delete?: ChallengeWhereInput | boolean
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutTransactionsInput, ChallengeUpdateWithoutTransactionsInput>, ChallengeUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type ChallengeCreateNestedOneWithoutMatchInput = {
    create?: XOR<ChallengeCreateWithoutMatchInput, ChallengeUncheckedCreateWithoutMatchInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutMatchInput
    connect?: ChallengeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchesInput = {
    create?: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeUpdateOneRequiredWithoutMatchNestedInput = {
    create?: XOR<ChallengeCreateWithoutMatchInput, ChallengeUncheckedCreateWithoutMatchInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutMatchInput
    upsert?: ChallengeUpsertWithoutMatchInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutMatchInput, ChallengeUpdateWithoutMatchInput>, ChallengeUncheckedUpdateWithoutMatchInput>
  }

  export type UserUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInput
    upsert?: UserUpsertWithoutMatchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesInput, UserUpdateWithoutMatchesInput>, UserUncheckedUpdateWithoutMatchesInput>
  }

  export type ChallengeCreateNestedOneWithoutEvidenceInput = {
    create?: XOR<ChallengeCreateWithoutEvidenceInput, ChallengeUncheckedCreateWithoutEvidenceInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutEvidenceInput
    connect?: ChallengeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEvidenceInput = {
    create?: XOR<UserCreateWithoutEvidenceInput, UserUncheckedCreateWithoutEvidenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvidenceInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeUpdateOneRequiredWithoutEvidenceNestedInput = {
    create?: XOR<ChallengeCreateWithoutEvidenceInput, ChallengeUncheckedCreateWithoutEvidenceInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutEvidenceInput
    upsert?: ChallengeUpsertWithoutEvidenceInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutEvidenceInput, ChallengeUpdateWithoutEvidenceInput>, ChallengeUncheckedUpdateWithoutEvidenceInput>
  }

  export type UserUpdateOneRequiredWithoutEvidenceNestedInput = {
    create?: XOR<UserCreateWithoutEvidenceInput, UserUncheckedCreateWithoutEvidenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvidenceInput
    upsert?: UserUpsertWithoutEvidenceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEvidenceInput, UserUpdateWithoutEvidenceInput>, UserUncheckedUpdateWithoutEvidenceInput>
  }

  export type UserCreateNestedOneWithoutWithdrawalRequestsInput = {
    create?: XOR<UserCreateWithoutWithdrawalRequestsInput, UserUncheckedCreateWithoutWithdrawalRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWithdrawalRequestsNestedInput = {
    create?: XOR<UserCreateWithoutWithdrawalRequestsInput, UserUncheckedCreateWithoutWithdrawalRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalRequestsInput
    upsert?: UserUpsertWithoutWithdrawalRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWithdrawalRequestsInput, UserUpdateWithoutWithdrawalRequestsInput>, UserUncheckedUpdateWithoutWithdrawalRequestsInput>
  }

  export type UserCreateNestedOneWithoutMatchmakingQueuesInput = {
    create?: XOR<UserCreateWithoutMatchmakingQueuesInput, UserUncheckedCreateWithoutMatchmakingQueuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchmakingQueuesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumQueueStatusFieldUpdateOperationsInput = {
    set?: $Enums.QueueStatus
  }

  export type UserUpdateOneRequiredWithoutMatchmakingQueuesNestedInput = {
    create?: XOR<UserCreateWithoutMatchmakingQueuesInput, UserUncheckedCreateWithoutMatchmakingQueuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchmakingQueuesInput
    upsert?: UserUpsertWithoutMatchmakingQueuesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchmakingQueuesInput, UserUpdateWithoutMatchmakingQueuesInput>, UserUncheckedUpdateWithoutMatchmakingQueuesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumChallengeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeStatus | EnumChallengeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeStatusFilter<$PrismaModel> | $Enums.ChallengeStatus
  }

  export type NestedEnumChallengeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeStatus | EnumChallengeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChallengeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChallengeStatusFilter<$PrismaModel>
    _max?: NestedEnumChallengeStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedEnumQueueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QueueStatus | EnumQueueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQueueStatusFilter<$PrismaModel> | $Enums.QueueStatus
  }

  export type NestedEnumQueueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QueueStatus | EnumQueueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueueStatus[] | ListEnumQueueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQueueStatusWithAggregatesFilter<$PrismaModel> | $Enums.QueueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQueueStatusFilter<$PrismaModel>
    _max?: NestedEnumQueueStatusFilter<$PrismaModel>
  }

  export type ChallengeCreateWithoutCreatorInput = {
    id?: string
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    opponent?: UserCreateNestedOneWithoutChallengesOpponentInput
    winner?: UserCreateNestedOneWithoutWonChallengesInput
    chatMessages?: ChatMessageCreateNestedManyWithoutChallengeInput
    evidence?: EvidenceCreateNestedManyWithoutChallengeInput
    match?: MatchCreateNestedOneWithoutChallengeInput
    transactions?: TransactionCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutCreatorInput = {
    id?: string
    opponentId?: string | null
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    winnerId?: string | null
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutChallengeInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutChallengeInput
    match?: MatchUncheckedCreateNestedOneWithoutChallengeInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutCreatorInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput>
  }

  export type ChallengeCreateManyCreatorInputEnvelope = {
    data: ChallengeCreateManyCreatorInput | ChallengeCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeCreateWithoutOpponentInput = {
    id?: string
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    creator: UserCreateNestedOneWithoutChallengesCreatedInput
    winner?: UserCreateNestedOneWithoutWonChallengesInput
    chatMessages?: ChatMessageCreateNestedManyWithoutChallengeInput
    evidence?: EvidenceCreateNestedManyWithoutChallengeInput
    match?: MatchCreateNestedOneWithoutChallengeInput
    transactions?: TransactionCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutOpponentInput = {
    id?: string
    creatorId: string
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    winnerId?: string | null
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutChallengeInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutChallengeInput
    match?: MatchUncheckedCreateNestedOneWithoutChallengeInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutOpponentInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutOpponentInput, ChallengeUncheckedCreateWithoutOpponentInput>
  }

  export type ChallengeCreateManyOpponentInputEnvelope = {
    data: ChallengeCreateManyOpponentInput | ChallengeCreateManyOpponentInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeCreateWithoutWinnerInput = {
    id?: string
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    creator: UserCreateNestedOneWithoutChallengesCreatedInput
    opponent?: UserCreateNestedOneWithoutChallengesOpponentInput
    chatMessages?: ChatMessageCreateNestedManyWithoutChallengeInput
    evidence?: EvidenceCreateNestedManyWithoutChallengeInput
    match?: MatchCreateNestedOneWithoutChallengeInput
    transactions?: TransactionCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutWinnerInput = {
    id?: string
    creatorId: string
    opponentId?: string | null
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutChallengeInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutChallengeInput
    match?: MatchUncheckedCreateNestedOneWithoutChallengeInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutWinnerInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutWinnerInput, ChallengeUncheckedCreateWithoutWinnerInput>
  }

  export type ChallengeCreateManyWinnerInputEnvelope = {
    data: ChallengeCreateManyWinnerInput | ChallengeCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutUserInput = {
    id?: string
    message: string
    createdAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutUserInput = {
    id?: string
    challengeId: string
    message: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageCreateManyUserInputEnvelope = {
    data: ChatMessageCreateManyUserInput | ChatMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EvidenceCreateWithoutUserInput = {
    id?: string
    fileUrl: string
    fileType: string
    description?: string | null
    createdAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutEvidenceInput
  }

  export type EvidenceUncheckedCreateWithoutUserInput = {
    id?: string
    challengeId: string
    fileUrl: string
    fileType: string
    description?: string | null
    createdAt?: Date | string
  }

  export type EvidenceCreateOrConnectWithoutUserInput = {
    where: EvidenceWhereUniqueInput
    create: XOR<EvidenceCreateWithoutUserInput, EvidenceUncheckedCreateWithoutUserInput>
  }

  export type EvidenceCreateManyUserInputEnvelope = {
    data: EvidenceCreateManyUserInput | EvidenceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutConfirmedByInput = {
    id?: string
    creatorScore?: string | null
    opponentScore?: string | null
    notes?: string | null
    confirmedAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutConfirmedByInput = {
    id?: string
    challengeId: string
    creatorScore?: string | null
    opponentScore?: string | null
    notes?: string | null
    confirmedAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutConfirmedByInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutConfirmedByInput, MatchUncheckedCreateWithoutConfirmedByInput>
  }

  export type MatchCreateManyConfirmedByInputEnvelope = {
    data: MatchCreateManyConfirmedByInput | MatchCreateManyConfirmedByInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    description?: string | null
    createdAt?: Date | string
    stripeSessionId?: string | null
    challenge?: ChallengeCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    challengeId?: string | null
    description?: string | null
    createdAt?: Date | string
    stripeSessionId?: string | null
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WithdrawalRequestCreateWithoutUserInput = {
    id?: string
    amount: number
    method: string
    account: string
    status?: $Enums.TransactionStatus
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalRequestUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    method: string
    account: string
    status?: $Enums.TransactionStatus
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalRequestCreateOrConnectWithoutUserInput = {
    where: WithdrawalRequestWhereUniqueInput
    create: XOR<WithdrawalRequestCreateWithoutUserInput, WithdrawalRequestUncheckedCreateWithoutUserInput>
  }

  export type WithdrawalRequestCreateManyUserInputEnvelope = {
    data: WithdrawalRequestCreateManyUserInput | WithdrawalRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchmakingQueueCreateWithoutUserInput = {
    id?: string
    game: string
    stakeAmount: number
    credentials: string
    status?: $Enums.QueueStatus
    createdAt?: Date | string
    expiresAt: Date | string
    challengeId?: string | null
  }

  export type MatchmakingQueueUncheckedCreateWithoutUserInput = {
    id?: string
    game: string
    stakeAmount: number
    credentials: string
    status?: $Enums.QueueStatus
    createdAt?: Date | string
    expiresAt: Date | string
    challengeId?: string | null
  }

  export type MatchmakingQueueCreateOrConnectWithoutUserInput = {
    where: MatchmakingQueueWhereUniqueInput
    create: XOR<MatchmakingQueueCreateWithoutUserInput, MatchmakingQueueUncheckedCreateWithoutUserInput>
  }

  export type MatchmakingQueueCreateManyUserInputEnvelope = {
    data: MatchmakingQueueCreateManyUserInput | MatchmakingQueueCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUpdateWithoutCreatorInput, ChallengeUncheckedUpdateWithoutCreatorInput>
    create: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUpdateWithoutCreatorInput, ChallengeUncheckedUpdateWithoutCreatorInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutCreatorInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ChallengeScalarWhereInput = {
    AND?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
    OR?: ChallengeScalarWhereInput[]
    NOT?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
    id?: StringFilter<"Challenge"> | string
    creatorId?: StringFilter<"Challenge"> | string
    opponentId?: StringNullableFilter<"Challenge"> | string | null
    game?: StringFilter<"Challenge"> | string
    stakeAmount?: FloatFilter<"Challenge"> | number
    status?: EnumChallengeStatusFilter<"Challenge"> | $Enums.ChallengeStatus
    winnerId?: StringNullableFilter<"Challenge"> | string | null
    creatorPaid?: BoolFilter<"Challenge"> | boolean
    opponentPaid?: BoolFilter<"Challenge"> | boolean
    shareCode?: StringFilter<"Challenge"> | string
    notes?: StringNullableFilter<"Challenge"> | string | null
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    startedAt?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    isMatchmaking?: BoolFilter<"Challenge"> | boolean
    creatorCredentials?: StringNullableFilter<"Challenge"> | string | null
    opponentCredentials?: StringNullableFilter<"Challenge"> | string | null
    reminderSentAt?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    creatorReady?: BoolFilter<"Challenge"> | boolean
    opponentReady?: BoolFilter<"Challenge"> | boolean
    readyAt?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    readyDeadline?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    readyReminderSentAt?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    readyUrgentReminderSentAt?: DateTimeNullableFilter<"Challenge"> | Date | string | null
  }

  export type ChallengeUpsertWithWhereUniqueWithoutOpponentInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUpdateWithoutOpponentInput, ChallengeUncheckedUpdateWithoutOpponentInput>
    create: XOR<ChallengeCreateWithoutOpponentInput, ChallengeUncheckedCreateWithoutOpponentInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutOpponentInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUpdateWithoutOpponentInput, ChallengeUncheckedUpdateWithoutOpponentInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutOpponentInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyWithoutOpponentInput>
  }

  export type ChallengeUpsertWithWhereUniqueWithoutWinnerInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUpdateWithoutWinnerInput, ChallengeUncheckedUpdateWithoutWinnerInput>
    create: XOR<ChallengeCreateWithoutWinnerInput, ChallengeUncheckedCreateWithoutWinnerInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutWinnerInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUpdateWithoutWinnerInput, ChallengeUncheckedUpdateWithoutWinnerInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutWinnerInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyWithoutWinnerInput>
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutUserInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    challengeId?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type EvidenceUpsertWithWhereUniqueWithoutUserInput = {
    where: EvidenceWhereUniqueInput
    update: XOR<EvidenceUpdateWithoutUserInput, EvidenceUncheckedUpdateWithoutUserInput>
    create: XOR<EvidenceCreateWithoutUserInput, EvidenceUncheckedCreateWithoutUserInput>
  }

  export type EvidenceUpdateWithWhereUniqueWithoutUserInput = {
    where: EvidenceWhereUniqueInput
    data: XOR<EvidenceUpdateWithoutUserInput, EvidenceUncheckedUpdateWithoutUserInput>
  }

  export type EvidenceUpdateManyWithWhereWithoutUserInput = {
    where: EvidenceScalarWhereInput
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyWithoutUserInput>
  }

  export type EvidenceScalarWhereInput = {
    AND?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
    OR?: EvidenceScalarWhereInput[]
    NOT?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
    id?: StringFilter<"Evidence"> | string
    challengeId?: StringFilter<"Evidence"> | string
    userId?: StringFilter<"Evidence"> | string
    fileUrl?: StringFilter<"Evidence"> | string
    fileType?: StringFilter<"Evidence"> | string
    description?: StringNullableFilter<"Evidence"> | string | null
    createdAt?: DateTimeFilter<"Evidence"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutConfirmedByInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutConfirmedByInput, MatchUncheckedUpdateWithoutConfirmedByInput>
    create: XOR<MatchCreateWithoutConfirmedByInput, MatchUncheckedCreateWithoutConfirmedByInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutConfirmedByInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutConfirmedByInput, MatchUncheckedUpdateWithoutConfirmedByInput>
  }

  export type MatchUpdateManyWithWhereWithoutConfirmedByInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutConfirmedByInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    challengeId?: StringFilter<"Match"> | string
    confirmedById?: StringFilter<"Match"> | string
    creatorScore?: StringNullableFilter<"Match"> | string | null
    opponentScore?: StringNullableFilter<"Match"> | string | null
    notes?: StringNullableFilter<"Match"> | string | null
    confirmedAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: FloatFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    challengeId?: StringNullableFilter<"Transaction"> | string | null
    description?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    stripeSessionId?: StringNullableFilter<"Transaction"> | string | null
  }

  export type WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: WithdrawalRequestWhereUniqueInput
    update: XOR<WithdrawalRequestUpdateWithoutUserInput, WithdrawalRequestUncheckedUpdateWithoutUserInput>
    create: XOR<WithdrawalRequestCreateWithoutUserInput, WithdrawalRequestUncheckedCreateWithoutUserInput>
  }

  export type WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: WithdrawalRequestWhereUniqueInput
    data: XOR<WithdrawalRequestUpdateWithoutUserInput, WithdrawalRequestUncheckedUpdateWithoutUserInput>
  }

  export type WithdrawalRequestUpdateManyWithWhereWithoutUserInput = {
    where: WithdrawalRequestScalarWhereInput
    data: XOR<WithdrawalRequestUpdateManyMutationInput, WithdrawalRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type WithdrawalRequestScalarWhereInput = {
    AND?: WithdrawalRequestScalarWhereInput | WithdrawalRequestScalarWhereInput[]
    OR?: WithdrawalRequestScalarWhereInput[]
    NOT?: WithdrawalRequestScalarWhereInput | WithdrawalRequestScalarWhereInput[]
    id?: StringFilter<"WithdrawalRequest"> | string
    userId?: StringFilter<"WithdrawalRequest"> | string
    amount?: FloatFilter<"WithdrawalRequest"> | number
    method?: StringFilter<"WithdrawalRequest"> | string
    account?: StringFilter<"WithdrawalRequest"> | string
    status?: EnumTransactionStatusFilter<"WithdrawalRequest"> | $Enums.TransactionStatus
    adminNote?: StringNullableFilter<"WithdrawalRequest"> | string | null
    createdAt?: DateTimeFilter<"WithdrawalRequest"> | Date | string
    updatedAt?: DateTimeFilter<"WithdrawalRequest"> | Date | string
  }

  export type MatchmakingQueueUpsertWithWhereUniqueWithoutUserInput = {
    where: MatchmakingQueueWhereUniqueInput
    update: XOR<MatchmakingQueueUpdateWithoutUserInput, MatchmakingQueueUncheckedUpdateWithoutUserInput>
    create: XOR<MatchmakingQueueCreateWithoutUserInput, MatchmakingQueueUncheckedCreateWithoutUserInput>
  }

  export type MatchmakingQueueUpdateWithWhereUniqueWithoutUserInput = {
    where: MatchmakingQueueWhereUniqueInput
    data: XOR<MatchmakingQueueUpdateWithoutUserInput, MatchmakingQueueUncheckedUpdateWithoutUserInput>
  }

  export type MatchmakingQueueUpdateManyWithWhereWithoutUserInput = {
    where: MatchmakingQueueScalarWhereInput
    data: XOR<MatchmakingQueueUpdateManyMutationInput, MatchmakingQueueUncheckedUpdateManyWithoutUserInput>
  }

  export type MatchmakingQueueScalarWhereInput = {
    AND?: MatchmakingQueueScalarWhereInput | MatchmakingQueueScalarWhereInput[]
    OR?: MatchmakingQueueScalarWhereInput[]
    NOT?: MatchmakingQueueScalarWhereInput | MatchmakingQueueScalarWhereInput[]
    id?: StringFilter<"MatchmakingQueue"> | string
    userId?: StringFilter<"MatchmakingQueue"> | string
    game?: StringFilter<"MatchmakingQueue"> | string
    stakeAmount?: FloatFilter<"MatchmakingQueue"> | number
    credentials?: StringFilter<"MatchmakingQueue"> | string
    status?: EnumQueueStatusFilter<"MatchmakingQueue"> | $Enums.QueueStatus
    createdAt?: DateTimeFilter<"MatchmakingQueue"> | Date | string
    expiresAt?: DateTimeFilter<"MatchmakingQueue"> | Date | string
    challengeId?: StringNullableFilter<"MatchmakingQueue"> | string | null
  }

  export type UserCreateWithoutChallengesCreatedInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesOpponent?: ChallengeCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    evidence?: EvidenceCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChallengesCreatedInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesOpponent?: ChallengeUncheckedCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeUncheckedCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChallengesCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallengesCreatedInput, UserUncheckedCreateWithoutChallengesCreatedInput>
  }

  export type UserCreateWithoutChallengesOpponentInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeCreateNestedManyWithoutCreatorInput
    wonChallenges?: ChallengeCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    evidence?: EvidenceCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChallengesOpponentInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
    wonChallenges?: ChallengeUncheckedCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChallengesOpponentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallengesOpponentInput, UserUncheckedCreateWithoutChallengesOpponentInput>
  }

  export type UserCreateWithoutWonChallengesInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeCreateNestedManyWithoutOpponentInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    evidence?: EvidenceCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWonChallengesInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeUncheckedCreateNestedManyWithoutOpponentInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWonChallengesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWonChallengesInput, UserUncheckedCreateWithoutWonChallengesInput>
  }

  export type ChatMessageCreateWithoutChallengeInput = {
    id?: string
    message: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutChallengeInput = {
    id?: string
    userId: string
    message: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutChallengeInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutChallengeInput, ChatMessageUncheckedCreateWithoutChallengeInput>
  }

  export type ChatMessageCreateManyChallengeInputEnvelope = {
    data: ChatMessageCreateManyChallengeInput | ChatMessageCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type EvidenceCreateWithoutChallengeInput = {
    id?: string
    fileUrl: string
    fileType: string
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEvidenceInput
  }

  export type EvidenceUncheckedCreateWithoutChallengeInput = {
    id?: string
    userId: string
    fileUrl: string
    fileType: string
    description?: string | null
    createdAt?: Date | string
  }

  export type EvidenceCreateOrConnectWithoutChallengeInput = {
    where: EvidenceWhereUniqueInput
    create: XOR<EvidenceCreateWithoutChallengeInput, EvidenceUncheckedCreateWithoutChallengeInput>
  }

  export type EvidenceCreateManyChallengeInputEnvelope = {
    data: EvidenceCreateManyChallengeInput | EvidenceCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutChallengeInput = {
    id?: string
    creatorScore?: string | null
    opponentScore?: string | null
    notes?: string | null
    confirmedAt?: Date | string
    confirmedBy: UserCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateWithoutChallengeInput = {
    id?: string
    confirmedById: string
    creatorScore?: string | null
    opponentScore?: string | null
    notes?: string | null
    confirmedAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutChallengeInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutChallengeInput, MatchUncheckedCreateWithoutChallengeInput>
  }

  export type TransactionCreateWithoutChallengeInput = {
    id?: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    description?: string | null
    createdAt?: Date | string
    stripeSessionId?: string | null
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutChallengeInput = {
    id?: string
    userId: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    description?: string | null
    createdAt?: Date | string
    stripeSessionId?: string | null
  }

  export type TransactionCreateOrConnectWithoutChallengeInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutChallengeInput, TransactionUncheckedCreateWithoutChallengeInput>
  }

  export type TransactionCreateManyChallengeInputEnvelope = {
    data: TransactionCreateManyChallengeInput | TransactionCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChallengesCreatedInput = {
    update: XOR<UserUpdateWithoutChallengesCreatedInput, UserUncheckedUpdateWithoutChallengesCreatedInput>
    create: XOR<UserCreateWithoutChallengesCreatedInput, UserUncheckedCreateWithoutChallengesCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChallengesCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChallengesCreatedInput, UserUncheckedUpdateWithoutChallengesCreatedInput>
  }

  export type UserUpdateWithoutChallengesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesOpponent?: ChallengeUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChallengesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesOpponent?: ChallengeUncheckedUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUncheckedUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutChallengesOpponentInput = {
    update: XOR<UserUpdateWithoutChallengesOpponentInput, UserUncheckedUpdateWithoutChallengesOpponentInput>
    create: XOR<UserCreateWithoutChallengesOpponentInput, UserUncheckedCreateWithoutChallengesOpponentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChallengesOpponentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChallengesOpponentInput, UserUncheckedUpdateWithoutChallengesOpponentInput>
  }

  export type UserUpdateWithoutChallengesOpponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUpdateManyWithoutCreatorNestedInput
    wonChallenges?: ChallengeUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChallengesOpponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
    wonChallenges?: ChallengeUncheckedUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutWonChallengesInput = {
    update: XOR<UserUpdateWithoutWonChallengesInput, UserUncheckedUpdateWithoutWonChallengesInput>
    create: XOR<UserCreateWithoutWonChallengesInput, UserUncheckedCreateWithoutWonChallengesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWonChallengesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWonChallengesInput, UserUncheckedUpdateWithoutWonChallengesInput>
  }

  export type UserUpdateWithoutWonChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUpdateManyWithoutOpponentNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWonChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUncheckedUpdateManyWithoutOpponentNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutChallengeInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutChallengeInput, ChatMessageUncheckedUpdateWithoutChallengeInput>
    create: XOR<ChatMessageCreateWithoutChallengeInput, ChatMessageUncheckedCreateWithoutChallengeInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutChallengeInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutChallengeInput, ChatMessageUncheckedUpdateWithoutChallengeInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutChallengeInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutChallengeInput>
  }

  export type EvidenceUpsertWithWhereUniqueWithoutChallengeInput = {
    where: EvidenceWhereUniqueInput
    update: XOR<EvidenceUpdateWithoutChallengeInput, EvidenceUncheckedUpdateWithoutChallengeInput>
    create: XOR<EvidenceCreateWithoutChallengeInput, EvidenceUncheckedCreateWithoutChallengeInput>
  }

  export type EvidenceUpdateWithWhereUniqueWithoutChallengeInput = {
    where: EvidenceWhereUniqueInput
    data: XOR<EvidenceUpdateWithoutChallengeInput, EvidenceUncheckedUpdateWithoutChallengeInput>
  }

  export type EvidenceUpdateManyWithWhereWithoutChallengeInput = {
    where: EvidenceScalarWhereInput
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyWithoutChallengeInput>
  }

  export type MatchUpsertWithoutChallengeInput = {
    update: XOR<MatchUpdateWithoutChallengeInput, MatchUncheckedUpdateWithoutChallengeInput>
    create: XOR<MatchCreateWithoutChallengeInput, MatchUncheckedCreateWithoutChallengeInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutChallengeInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutChallengeInput, MatchUncheckedUpdateWithoutChallengeInput>
  }

  export type MatchUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorScore?: NullableStringFieldUpdateOperationsInput | string | null
    opponentScore?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedBy?: UserUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    confirmedById?: StringFieldUpdateOperationsInput | string
    creatorScore?: NullableStringFieldUpdateOperationsInput | string | null
    opponentScore?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutChallengeInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutChallengeInput, TransactionUncheckedUpdateWithoutChallengeInput>
    create: XOR<TransactionCreateWithoutChallengeInput, TransactionUncheckedCreateWithoutChallengeInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutChallengeInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutChallengeInput, TransactionUncheckedUpdateWithoutChallengeInput>
  }

  export type TransactionUpdateManyWithWhereWithoutChallengeInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutChallengeInput>
  }

  export type ChallengeCreateWithoutChatMessagesInput = {
    id?: string
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    creator: UserCreateNestedOneWithoutChallengesCreatedInput
    opponent?: UserCreateNestedOneWithoutChallengesOpponentInput
    winner?: UserCreateNestedOneWithoutWonChallengesInput
    evidence?: EvidenceCreateNestedManyWithoutChallengeInput
    match?: MatchCreateNestedOneWithoutChallengeInput
    transactions?: TransactionCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    creatorId: string
    opponentId?: string | null
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    winnerId?: string | null
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    evidence?: EvidenceUncheckedCreateNestedManyWithoutChallengeInput
    match?: MatchUncheckedCreateNestedOneWithoutChallengeInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutChatMessagesInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutChatMessagesInput, ChallengeUncheckedCreateWithoutChatMessagesInput>
  }

  export type UserCreateWithoutChatMessagesInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeCreateNestedManyWithoutWinnerInput
    evidence?: EvidenceCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeUncheckedCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeUncheckedCreateNestedManyWithoutWinnerInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
  }

  export type ChallengeUpsertWithoutChatMessagesInput = {
    update: XOR<ChallengeUpdateWithoutChatMessagesInput, ChallengeUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<ChallengeCreateWithoutChatMessagesInput, ChallengeUncheckedCreateWithoutChatMessagesInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutChatMessagesInput, ChallengeUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ChallengeUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneRequiredWithoutChallengesCreatedNestedInput
    opponent?: UserUpdateOneWithoutChallengesOpponentNestedInput
    winner?: UserUpdateOneWithoutWonChallengesNestedInput
    evidence?: EvidenceUpdateManyWithoutChallengeNestedInput
    match?: MatchUpdateOneWithoutChallengeNestedInput
    transactions?: TransactionUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    opponentId?: NullableStringFieldUpdateOperationsInput | string | null
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evidence?: EvidenceUncheckedUpdateManyWithoutChallengeNestedInput
    match?: MatchUncheckedUpdateOneWithoutChallengeNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type UserUpsertWithoutChatMessagesInput = {
    update: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUpdateManyWithoutWinnerNestedInput
    evidence?: EvidenceUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUncheckedUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUncheckedUpdateManyWithoutWinnerNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChallengeCreateWithoutTransactionsInput = {
    id?: string
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    creator: UserCreateNestedOneWithoutChallengesCreatedInput
    opponent?: UserCreateNestedOneWithoutChallengesOpponentInput
    winner?: UserCreateNestedOneWithoutWonChallengesInput
    chatMessages?: ChatMessageCreateNestedManyWithoutChallengeInput
    evidence?: EvidenceCreateNestedManyWithoutChallengeInput
    match?: MatchCreateNestedOneWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutTransactionsInput = {
    id?: string
    creatorId: string
    opponentId?: string | null
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    winnerId?: string | null
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutChallengeInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutChallengeInput
    match?: MatchUncheckedCreateNestedOneWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutTransactionsInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutTransactionsInput, ChallengeUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    evidence?: EvidenceCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutConfirmedByInput
    withdrawalRequests?: WithdrawalRequestCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeUncheckedCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeUncheckedCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutConfirmedByInput
    withdrawalRequests?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type ChallengeUpsertWithoutTransactionsInput = {
    update: XOR<ChallengeUpdateWithoutTransactionsInput, ChallengeUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ChallengeCreateWithoutTransactionsInput, ChallengeUncheckedCreateWithoutTransactionsInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutTransactionsInput, ChallengeUncheckedUpdateWithoutTransactionsInput>
  }

  export type ChallengeUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneRequiredWithoutChallengesCreatedNestedInput
    opponent?: UserUpdateOneWithoutChallengesOpponentNestedInput
    winner?: UserUpdateOneWithoutWonChallengesNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutChallengeNestedInput
    evidence?: EvidenceUpdateManyWithoutChallengeNestedInput
    match?: MatchUpdateOneWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    opponentId?: NullableStringFieldUpdateOperationsInput | string | null
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutChallengeNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutChallengeNestedInput
    match?: MatchUncheckedUpdateOneWithoutChallengeNestedInput
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutConfirmedByNestedInput
    withdrawalRequests?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUncheckedUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUncheckedUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutConfirmedByNestedInput
    withdrawalRequests?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChallengeCreateWithoutMatchInput = {
    id?: string
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    creator: UserCreateNestedOneWithoutChallengesCreatedInput
    opponent?: UserCreateNestedOneWithoutChallengesOpponentInput
    winner?: UserCreateNestedOneWithoutWonChallengesInput
    chatMessages?: ChatMessageCreateNestedManyWithoutChallengeInput
    evidence?: EvidenceCreateNestedManyWithoutChallengeInput
    transactions?: TransactionCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutMatchInput = {
    id?: string
    creatorId: string
    opponentId?: string | null
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    winnerId?: string | null
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutChallengeInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutChallengeInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutMatchInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutMatchInput, ChallengeUncheckedCreateWithoutMatchInput>
  }

  export type UserCreateWithoutMatchesInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    evidence?: EvidenceCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchesInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeUncheckedCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeUncheckedCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
  }

  export type ChallengeUpsertWithoutMatchInput = {
    update: XOR<ChallengeUpdateWithoutMatchInput, ChallengeUncheckedUpdateWithoutMatchInput>
    create: XOR<ChallengeCreateWithoutMatchInput, ChallengeUncheckedCreateWithoutMatchInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutMatchInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutMatchInput, ChallengeUncheckedUpdateWithoutMatchInput>
  }

  export type ChallengeUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneRequiredWithoutChallengesCreatedNestedInput
    opponent?: UserUpdateOneWithoutChallengesOpponentNestedInput
    winner?: UserUpdateOneWithoutWonChallengesNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutChallengeNestedInput
    evidence?: EvidenceUpdateManyWithoutChallengeNestedInput
    transactions?: TransactionUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    opponentId?: NullableStringFieldUpdateOperationsInput | string | null
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutChallengeNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutChallengeNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type UserUpsertWithoutMatchesInput = {
    update: XOR<UserUpdateWithoutMatchesInput, UserUncheckedUpdateWithoutMatchesInput>
    create: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesInput, UserUncheckedUpdateWithoutMatchesInput>
  }

  export type UserUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUncheckedUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUncheckedUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChallengeCreateWithoutEvidenceInput = {
    id?: string
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    creator: UserCreateNestedOneWithoutChallengesCreatedInput
    opponent?: UserCreateNestedOneWithoutChallengesOpponentInput
    winner?: UserCreateNestedOneWithoutWonChallengesInput
    chatMessages?: ChatMessageCreateNestedManyWithoutChallengeInput
    match?: MatchCreateNestedOneWithoutChallengeInput
    transactions?: TransactionCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutEvidenceInput = {
    id?: string
    creatorId: string
    opponentId?: string | null
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    winnerId?: string | null
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutChallengeInput
    match?: MatchUncheckedCreateNestedOneWithoutChallengeInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutEvidenceInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutEvidenceInput, ChallengeUncheckedCreateWithoutEvidenceInput>
  }

  export type UserCreateWithoutEvidenceInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEvidenceInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeUncheckedCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeUncheckedCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEvidenceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEvidenceInput, UserUncheckedCreateWithoutEvidenceInput>
  }

  export type ChallengeUpsertWithoutEvidenceInput = {
    update: XOR<ChallengeUpdateWithoutEvidenceInput, ChallengeUncheckedUpdateWithoutEvidenceInput>
    create: XOR<ChallengeCreateWithoutEvidenceInput, ChallengeUncheckedCreateWithoutEvidenceInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutEvidenceInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutEvidenceInput, ChallengeUncheckedUpdateWithoutEvidenceInput>
  }

  export type ChallengeUpdateWithoutEvidenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneRequiredWithoutChallengesCreatedNestedInput
    opponent?: UserUpdateOneWithoutChallengesOpponentNestedInput
    winner?: UserUpdateOneWithoutWonChallengesNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutChallengeNestedInput
    match?: MatchUpdateOneWithoutChallengeNestedInput
    transactions?: TransactionUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutEvidenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    opponentId?: NullableStringFieldUpdateOperationsInput | string | null
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutChallengeNestedInput
    match?: MatchUncheckedUpdateOneWithoutChallengeNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type UserUpsertWithoutEvidenceInput = {
    update: XOR<UserUpdateWithoutEvidenceInput, UserUncheckedUpdateWithoutEvidenceInput>
    create: XOR<UserCreateWithoutEvidenceInput, UserUncheckedCreateWithoutEvidenceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEvidenceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEvidenceInput, UserUncheckedUpdateWithoutEvidenceInput>
  }

  export type UserUpdateWithoutEvidenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEvidenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUncheckedUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUncheckedUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWithdrawalRequestsInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    evidence?: EvidenceCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWithdrawalRequestsInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeUncheckedCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeUncheckedCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    matchmakingQueues?: MatchmakingQueueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWithdrawalRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWithdrawalRequestsInput, UserUncheckedCreateWithoutWithdrawalRequestsInput>
  }

  export type UserUpsertWithoutWithdrawalRequestsInput = {
    update: XOR<UserUpdateWithoutWithdrawalRequestsInput, UserUncheckedUpdateWithoutWithdrawalRequestsInput>
    create: XOR<UserCreateWithoutWithdrawalRequestsInput, UserUncheckedCreateWithoutWithdrawalRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWithdrawalRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWithdrawalRequestsInput, UserUncheckedUpdateWithoutWithdrawalRequestsInput>
  }

  export type UserUpdateWithoutWithdrawalRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWithdrawalRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUncheckedUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUncheckedUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    matchmakingQueues?: MatchmakingQueueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMatchmakingQueuesInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    evidence?: EvidenceCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchmakingQueuesInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    balance?: number
    totalWins?: number
    totalLosses?: number
    totalEarnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    ghostStrikes?: number
    suspendedUntil?: Date | string | null
    gameCredentials?: string | null
    challengesCreated?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
    challengesOpponent?: ChallengeUncheckedCreateNestedManyWithoutOpponentInput
    wonChallenges?: ChallengeUncheckedCreateNestedManyWithoutWinnerInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    evidence?: EvidenceUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutConfirmedByInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawalRequests?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchmakingQueuesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchmakingQueuesInput, UserUncheckedCreateWithoutMatchmakingQueuesInput>
  }

  export type UserUpsertWithoutMatchmakingQueuesInput = {
    update: XOR<UserUpdateWithoutMatchmakingQueuesInput, UserUncheckedUpdateWithoutMatchmakingQueuesInput>
    create: XOR<UserCreateWithoutMatchmakingQueuesInput, UserUncheckedCreateWithoutMatchmakingQueuesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchmakingQueuesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchmakingQueuesInput, UserUncheckedUpdateWithoutMatchmakingQueuesInput>
  }

  export type UserUpdateWithoutMatchmakingQueuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchmakingQueuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalLosses?: IntFieldUpdateOperationsInput | number
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    ghostStrikes?: IntFieldUpdateOperationsInput | number
    suspendedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    challengesCreated?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
    challengesOpponent?: ChallengeUncheckedUpdateManyWithoutOpponentNestedInput
    wonChallenges?: ChallengeUncheckedUpdateManyWithoutWinnerNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutConfirmedByNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawalRequests?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChallengeCreateManyCreatorInput = {
    id?: string
    opponentId?: string | null
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    winnerId?: string | null
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
  }

  export type ChallengeCreateManyOpponentInput = {
    id?: string
    creatorId: string
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    winnerId?: string | null
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
  }

  export type ChallengeCreateManyWinnerInput = {
    id?: string
    creatorId: string
    opponentId?: string | null
    game: string
    stakeAmount: number
    status?: $Enums.ChallengeStatus
    creatorPaid?: boolean
    opponentPaid?: boolean
    shareCode?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    isMatchmaking?: boolean
    creatorCredentials?: string | null
    opponentCredentials?: string | null
    reminderSentAt?: Date | string | null
    creatorReady?: boolean
    opponentReady?: boolean
    readyAt?: Date | string | null
    readyDeadline?: Date | string | null
    readyReminderSentAt?: Date | string | null
    readyUrgentReminderSentAt?: Date | string | null
  }

  export type ChatMessageCreateManyUserInput = {
    id?: string
    challengeId: string
    message: string
    createdAt?: Date | string
  }

  export type EvidenceCreateManyUserInput = {
    id?: string
    challengeId: string
    fileUrl: string
    fileType: string
    description?: string | null
    createdAt?: Date | string
  }

  export type MatchCreateManyConfirmedByInput = {
    id?: string
    challengeId: string
    creatorScore?: string | null
    opponentScore?: string | null
    notes?: string | null
    confirmedAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    challengeId?: string | null
    description?: string | null
    createdAt?: Date | string
    stripeSessionId?: string | null
  }

  export type WithdrawalRequestCreateManyUserInput = {
    id?: string
    amount: number
    method: string
    account: string
    status?: $Enums.TransactionStatus
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchmakingQueueCreateManyUserInput = {
    id?: string
    game: string
    stakeAmount: number
    credentials: string
    status?: $Enums.QueueStatus
    createdAt?: Date | string
    expiresAt: Date | string
    challengeId?: string | null
  }

  export type ChallengeUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opponent?: UserUpdateOneWithoutChallengesOpponentNestedInput
    winner?: UserUpdateOneWithoutWonChallengesNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutChallengeNestedInput
    evidence?: EvidenceUpdateManyWithoutChallengeNestedInput
    match?: MatchUpdateOneWithoutChallengeNestedInput
    transactions?: TransactionUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    opponentId?: NullableStringFieldUpdateOperationsInput | string | null
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutChallengeNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutChallengeNestedInput
    match?: MatchUncheckedUpdateOneWithoutChallengeNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    opponentId?: NullableStringFieldUpdateOperationsInput | string | null
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChallengeUpdateWithoutOpponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneRequiredWithoutChallengesCreatedNestedInput
    winner?: UserUpdateOneWithoutWonChallengesNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutChallengeNestedInput
    evidence?: EvidenceUpdateManyWithoutChallengeNestedInput
    match?: MatchUpdateOneWithoutChallengeNestedInput
    transactions?: TransactionUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutOpponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutChallengeNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutChallengeNestedInput
    match?: MatchUncheckedUpdateOneWithoutChallengeNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateManyWithoutOpponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChallengeUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneRequiredWithoutChallengesCreatedNestedInput
    opponent?: UserUpdateOneWithoutChallengesOpponentNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutChallengeNestedInput
    evidence?: EvidenceUpdateManyWithoutChallengeNestedInput
    match?: MatchUpdateOneWithoutChallengeNestedInput
    transactions?: TransactionUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    opponentId?: NullableStringFieldUpdateOperationsInput | string | null
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutChallengeNestedInput
    evidence?: EvidenceUncheckedUpdateManyWithoutChallengeNestedInput
    match?: MatchUncheckedUpdateOneWithoutChallengeNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    opponentId?: NullableStringFieldUpdateOperationsInput | string | null
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    creatorPaid?: BoolFieldUpdateOperationsInput | boolean
    opponentPaid?: BoolFieldUpdateOperationsInput | boolean
    shareCode?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isMatchmaking?: BoolFieldUpdateOperationsInput | boolean
    creatorCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    opponentCredentials?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorReady?: BoolFieldUpdateOperationsInput | boolean
    opponentReady?: BoolFieldUpdateOperationsInput | boolean
    readyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readyUrgentReminderSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutEvidenceNestedInput
  }

  export type EvidenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutConfirmedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorScore?: NullableStringFieldUpdateOperationsInput | string | null
    opponentScore?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutConfirmedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    creatorScore?: NullableStringFieldUpdateOperationsInput | string | null
    opponentScore?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutConfirmedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    creatorScore?: NullableStringFieldUpdateOperationsInput | string | null
    opponentScore?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    challenge?: ChallengeUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WithdrawalRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchmakingQueueUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    credentials?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchmakingQueueUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    credentials?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchmakingQueueUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    stakeAmount?: FloatFieldUpdateOperationsInput | number
    credentials?: StringFieldUpdateOperationsInput | string
    status?: EnumQueueStatusFieldUpdateOperationsInput | $Enums.QueueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageCreateManyChallengeInput = {
    id?: string
    userId: string
    message: string
    createdAt?: Date | string
  }

  export type EvidenceCreateManyChallengeInput = {
    id?: string
    userId: string
    fileUrl: string
    fileType: string
    description?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateManyChallengeInput = {
    id?: string
    userId: string
    type: $Enums.TransactionType
    amount: number
    status?: $Enums.TransactionStatus
    description?: string | null
    createdAt?: Date | string
    stripeSessionId?: string | null
  }

  export type ChatMessageUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEvidenceNestedInput
  }

  export type EvidenceUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
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