
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
 * Model TemplateTest
 * 
 */
export type TemplateTest = $Result.DefaultSelection<Prisma.$TemplateTestPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Alternative
 * 
 */
export type Alternative = $Result.DefaultSelection<Prisma.$AlternativePayload>
/**
 * Model Classification
 * 
 */
export type Classification = $Result.DefaultSelection<Prisma.$ClassificationPayload>
/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TemplateTests
 * const templateTests = await prisma.templateTest.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more TemplateTests
   * const templateTests = await prisma.templateTest.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.templateTest`: Exposes CRUD operations for the **TemplateTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateTests
    * const templateTests = await prisma.templateTest.findMany()
    * ```
    */
  get templateTest(): Prisma.TemplateTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alternative`: Exposes CRUD operations for the **Alternative** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alternatives
    * const alternatives = await prisma.alternative.findMany()
    * ```
    */
  get alternative(): Prisma.AlternativeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classification`: Exposes CRUD operations for the **Classification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classifications
    * const classifications = await prisma.classification.findMany()
    * ```
    */
  get classification(): Prisma.ClassificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    TemplateTest: 'TemplateTest',
    Question: 'Question',
    Alternative: 'Alternative',
    Classification: 'Classification',
    Test: 'Test',
    Answer: 'Answer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "templateTest" | "question" | "alternative" | "classification" | "test" | "answer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TemplateTest: {
        payload: Prisma.$TemplateTestPayload<ExtArgs>
        fields: Prisma.TemplateTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTestPayload>
          }
          findFirst: {
            args: Prisma.TemplateTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTestPayload>
          }
          findMany: {
            args: Prisma.TemplateTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTestPayload>[]
          }
          create: {
            args: Prisma.TemplateTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTestPayload>
          }
          createMany: {
            args: Prisma.TemplateTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTestPayload>[]
          }
          delete: {
            args: Prisma.TemplateTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTestPayload>
          }
          update: {
            args: Prisma.TemplateTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTestPayload>
          }
          deleteMany: {
            args: Prisma.TemplateTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTestPayload>[]
          }
          upsert: {
            args: Prisma.TemplateTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateTestPayload>
          }
          aggregate: {
            args: Prisma.TemplateTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplateTest>
          }
          groupBy: {
            args: Prisma.TemplateTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateTestCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateTestCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Alternative: {
        payload: Prisma.$AlternativePayload<ExtArgs>
        fields: Prisma.AlternativeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlternativeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlternativeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          findFirst: {
            args: Prisma.AlternativeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlternativeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          findMany: {
            args: Prisma.AlternativeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>[]
          }
          create: {
            args: Prisma.AlternativeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          createMany: {
            args: Prisma.AlternativeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlternativeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>[]
          }
          delete: {
            args: Prisma.AlternativeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          update: {
            args: Prisma.AlternativeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          deleteMany: {
            args: Prisma.AlternativeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlternativeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlternativeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>[]
          }
          upsert: {
            args: Prisma.AlternativeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          aggregate: {
            args: Prisma.AlternativeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlternative>
          }
          groupBy: {
            args: Prisma.AlternativeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlternativeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlternativeCountArgs<ExtArgs>
            result: $Utils.Optional<AlternativeCountAggregateOutputType> | number
          }
        }
      }
      Classification: {
        payload: Prisma.$ClassificationPayload<ExtArgs>
        fields: Prisma.ClassificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          findFirst: {
            args: Prisma.ClassificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          findMany: {
            args: Prisma.ClassificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>[]
          }
          create: {
            args: Prisma.ClassificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          createMany: {
            args: Prisma.ClassificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>[]
          }
          delete: {
            args: Prisma.ClassificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          update: {
            args: Prisma.ClassificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          deleteMany: {
            args: Prisma.ClassificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>[]
          }
          upsert: {
            args: Prisma.ClassificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          aggregate: {
            args: Prisma.ClassificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassification>
          }
          groupBy: {
            args: Prisma.ClassificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassificationCountArgs<ExtArgs>
            result: $Utils.Optional<ClassificationCountAggregateOutputType> | number
          }
        }
      }
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    templateTest?: TemplateTestOmit
    question?: QuestionOmit
    alternative?: AlternativeOmit
    classification?: ClassificationOmit
    test?: TestOmit
    answer?: AnswerOmit
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
   * Count Type TemplateTestCountOutputType
   */

  export type TemplateTestCountOutputType = {
    questions: number
    alternatives: number
    classifications: number
    tests: number
  }

  export type TemplateTestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | TemplateTestCountOutputTypeCountQuestionsArgs
    alternatives?: boolean | TemplateTestCountOutputTypeCountAlternativesArgs
    classifications?: boolean | TemplateTestCountOutputTypeCountClassificationsArgs
    tests?: boolean | TemplateTestCountOutputTypeCountTestsArgs
  }

  // Custom InputTypes
  /**
   * TemplateTestCountOutputType without action
   */
  export type TemplateTestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTestCountOutputType
     */
    select?: TemplateTestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateTestCountOutputType without action
   */
  export type TemplateTestCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * TemplateTestCountOutputType without action
   */
  export type TemplateTestCountOutputTypeCountAlternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativeWhereInput
  }

  /**
   * TemplateTestCountOutputType without action
   */
  export type TemplateTestCountOutputTypeCountClassificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassificationWhereInput
  }

  /**
   * TemplateTestCountOutputType without action
   */
  export type TemplateTestCountOutputTypeCountTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type AlternativeCountOutputType
   */

  export type AlternativeCountOutputType = {
    answers: number
  }

  export type AlternativeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | AlternativeCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * AlternativeCountOutputType without action
   */
  export type AlternativeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCountOutputType
     */
    select?: AlternativeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlternativeCountOutputType without action
   */
  export type AlternativeCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type ClassificationCountOutputType
   */

  export type ClassificationCountOutputType = {
    tests: number
  }

  export type ClassificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | ClassificationCountOutputTypeCountTestsArgs
  }

  // Custom InputTypes
  /**
   * ClassificationCountOutputType without action
   */
  export type ClassificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassificationCountOutputType
     */
    select?: ClassificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassificationCountOutputType without action
   */
  export type ClassificationCountOutputTypeCountTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
  }


  /**
   * Count Type TestCountOutputType
   */

  export type TestCountOutputType = {
    answers: number
  }

  export type TestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | TestCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TemplateTest
   */

  export type AggregateTemplateTest = {
    _count: TemplateTestCountAggregateOutputType | null
    _min: TemplateTestMinAggregateOutputType | null
    _max: TemplateTestMaxAggregateOutputType | null
  }

  export type TemplateTestMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    author: string | null
    available: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateTestMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    author: string | null
    available: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateTestCountAggregateOutputType = {
    id: number
    name: number
    description: number
    author: number
    available: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateTestMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    author?: true
    available?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateTestMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    author?: true
    available?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateTestCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    author?: true
    available?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateTest to aggregate.
     */
    where?: TemplateTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateTests to fetch.
     */
    orderBy?: TemplateTestOrderByWithRelationInput | TemplateTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateTests
    **/
    _count?: true | TemplateTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateTestMaxAggregateInputType
  }

  export type GetTemplateTestAggregateType<T extends TemplateTestAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateTest[P]>
      : GetScalarType<T[P], AggregateTemplateTest[P]>
  }




  export type TemplateTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateTestWhereInput
    orderBy?: TemplateTestOrderByWithAggregationInput | TemplateTestOrderByWithAggregationInput[]
    by: TemplateTestScalarFieldEnum[] | TemplateTestScalarFieldEnum
    having?: TemplateTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateTestCountAggregateInputType | true
    _min?: TemplateTestMinAggregateInputType
    _max?: TemplateTestMaxAggregateInputType
  }

  export type TemplateTestGroupByOutputType = {
    id: string
    name: string
    description: string
    author: string
    available: boolean
    createdAt: Date
    updatedAt: Date
    _count: TemplateTestCountAggregateOutputType | null
    _min: TemplateTestMinAggregateOutputType | null
    _max: TemplateTestMaxAggregateOutputType | null
  }

  type GetTemplateTestGroupByPayload<T extends TemplateTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateTestGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateTestGroupByOutputType[P]>
        }
      >
    >


  export type TemplateTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    author?: boolean
    available?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | TemplateTest$questionsArgs<ExtArgs>
    alternatives?: boolean | TemplateTest$alternativesArgs<ExtArgs>
    classifications?: boolean | TemplateTest$classificationsArgs<ExtArgs>
    tests?: boolean | TemplateTest$testsArgs<ExtArgs>
    _count?: boolean | TemplateTestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateTest"]>

  export type TemplateTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    author?: boolean
    available?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["templateTest"]>

  export type TemplateTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    author?: boolean
    available?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["templateTest"]>

  export type TemplateTestSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    author?: boolean
    available?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "author" | "available" | "createdAt" | "updatedAt", ExtArgs["result"]["templateTest"]>
  export type TemplateTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | TemplateTest$questionsArgs<ExtArgs>
    alternatives?: boolean | TemplateTest$alternativesArgs<ExtArgs>
    classifications?: boolean | TemplateTest$classificationsArgs<ExtArgs>
    tests?: boolean | TemplateTest$testsArgs<ExtArgs>
    _count?: boolean | TemplateTestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TemplateTestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TemplateTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateTest"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      alternatives: Prisma.$AlternativePayload<ExtArgs>[]
      classifications: Prisma.$ClassificationPayload<ExtArgs>[]
      tests: Prisma.$TestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      author: string
      available: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["templateTest"]>
    composites: {}
  }

  type TemplateTestGetPayload<S extends boolean | null | undefined | TemplateTestDefaultArgs> = $Result.GetResult<Prisma.$TemplateTestPayload, S>

  type TemplateTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateTestCountAggregateInputType | true
    }

  export interface TemplateTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateTest'], meta: { name: 'TemplateTest' } }
    /**
     * Find zero or one TemplateTest that matches the filter.
     * @param {TemplateTestFindUniqueArgs} args - Arguments to find a TemplateTest
     * @example
     * // Get one TemplateTest
     * const templateTest = await prisma.templateTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateTestFindUniqueArgs>(args: SelectSubset<T, TemplateTestFindUniqueArgs<ExtArgs>>): Prisma__TemplateTestClient<$Result.GetResult<Prisma.$TemplateTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemplateTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateTestFindUniqueOrThrowArgs} args - Arguments to find a TemplateTest
     * @example
     * // Get one TemplateTest
     * const templateTest = await prisma.templateTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateTestFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateTestClient<$Result.GetResult<Prisma.$TemplateTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateTestFindFirstArgs} args - Arguments to find a TemplateTest
     * @example
     * // Get one TemplateTest
     * const templateTest = await prisma.templateTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateTestFindFirstArgs>(args?: SelectSubset<T, TemplateTestFindFirstArgs<ExtArgs>>): Prisma__TemplateTestClient<$Result.GetResult<Prisma.$TemplateTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateTestFindFirstOrThrowArgs} args - Arguments to find a TemplateTest
     * @example
     * // Get one TemplateTest
     * const templateTest = await prisma.templateTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateTestFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateTestClient<$Result.GetResult<Prisma.$TemplateTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemplateTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateTests
     * const templateTests = await prisma.templateTest.findMany()
     * 
     * // Get first 10 TemplateTests
     * const templateTests = await prisma.templateTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateTestWithIdOnly = await prisma.templateTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateTestFindManyArgs>(args?: SelectSubset<T, TemplateTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemplateTest.
     * @param {TemplateTestCreateArgs} args - Arguments to create a TemplateTest.
     * @example
     * // Create one TemplateTest
     * const TemplateTest = await prisma.templateTest.create({
     *   data: {
     *     // ... data to create a TemplateTest
     *   }
     * })
     * 
     */
    create<T extends TemplateTestCreateArgs>(args: SelectSubset<T, TemplateTestCreateArgs<ExtArgs>>): Prisma__TemplateTestClient<$Result.GetResult<Prisma.$TemplateTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemplateTests.
     * @param {TemplateTestCreateManyArgs} args - Arguments to create many TemplateTests.
     * @example
     * // Create many TemplateTests
     * const templateTest = await prisma.templateTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateTestCreateManyArgs>(args?: SelectSubset<T, TemplateTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateTests and returns the data saved in the database.
     * @param {TemplateTestCreateManyAndReturnArgs} args - Arguments to create many TemplateTests.
     * @example
     * // Create many TemplateTests
     * const templateTest = await prisma.templateTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateTests and only return the `id`
     * const templateTestWithIdOnly = await prisma.templateTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateTestCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TemplateTest.
     * @param {TemplateTestDeleteArgs} args - Arguments to delete one TemplateTest.
     * @example
     * // Delete one TemplateTest
     * const TemplateTest = await prisma.templateTest.delete({
     *   where: {
     *     // ... filter to delete one TemplateTest
     *   }
     * })
     * 
     */
    delete<T extends TemplateTestDeleteArgs>(args: SelectSubset<T, TemplateTestDeleteArgs<ExtArgs>>): Prisma__TemplateTestClient<$Result.GetResult<Prisma.$TemplateTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemplateTest.
     * @param {TemplateTestUpdateArgs} args - Arguments to update one TemplateTest.
     * @example
     * // Update one TemplateTest
     * const templateTest = await prisma.templateTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateTestUpdateArgs>(args: SelectSubset<T, TemplateTestUpdateArgs<ExtArgs>>): Prisma__TemplateTestClient<$Result.GetResult<Prisma.$TemplateTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemplateTests.
     * @param {TemplateTestDeleteManyArgs} args - Arguments to filter TemplateTests to delete.
     * @example
     * // Delete a few TemplateTests
     * const { count } = await prisma.templateTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateTestDeleteManyArgs>(args?: SelectSubset<T, TemplateTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateTests
     * const templateTest = await prisma.templateTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateTestUpdateManyArgs>(args: SelectSubset<T, TemplateTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateTests and returns the data updated in the database.
     * @param {TemplateTestUpdateManyAndReturnArgs} args - Arguments to update many TemplateTests.
     * @example
     * // Update many TemplateTests
     * const templateTest = await prisma.templateTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TemplateTests and only return the `id`
     * const templateTestWithIdOnly = await prisma.templateTest.updateManyAndReturn({
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
    updateManyAndReturn<T extends TemplateTestUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TemplateTest.
     * @param {TemplateTestUpsertArgs} args - Arguments to update or create a TemplateTest.
     * @example
     * // Update or create a TemplateTest
     * const templateTest = await prisma.templateTest.upsert({
     *   create: {
     *     // ... data to create a TemplateTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateTest we want to update
     *   }
     * })
     */
    upsert<T extends TemplateTestUpsertArgs>(args: SelectSubset<T, TemplateTestUpsertArgs<ExtArgs>>): Prisma__TemplateTestClient<$Result.GetResult<Prisma.$TemplateTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemplateTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateTestCountArgs} args - Arguments to filter TemplateTests to count.
     * @example
     * // Count the number of TemplateTests
     * const count = await prisma.templateTest.count({
     *   where: {
     *     // ... the filter for the TemplateTests we want to count
     *   }
     * })
    **/
    count<T extends TemplateTestCountArgs>(
      args?: Subset<T, TemplateTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateTestAggregateArgs>(args: Subset<T, TemplateTestAggregateArgs>): Prisma.PrismaPromise<GetTemplateTestAggregateType<T>>

    /**
     * Group by TemplateTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateTestGroupByArgs} args - Group by arguments.
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
      T extends TemplateTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateTestGroupByArgs['orderBy'] }
        : { orderBy?: TemplateTestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateTest model
   */
  readonly fields: TemplateTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends TemplateTest$questionsArgs<ExtArgs> = {}>(args?: Subset<T, TemplateTest$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alternatives<T extends TemplateTest$alternativesArgs<ExtArgs> = {}>(args?: Subset<T, TemplateTest$alternativesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classifications<T extends TemplateTest$classificationsArgs<ExtArgs> = {}>(args?: Subset<T, TemplateTest$classificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tests<T extends TemplateTest$testsArgs<ExtArgs> = {}>(args?: Subset<T, TemplateTest$testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TemplateTest model
   */
  interface TemplateTestFieldRefs {
    readonly id: FieldRef<"TemplateTest", 'String'>
    readonly name: FieldRef<"TemplateTest", 'String'>
    readonly description: FieldRef<"TemplateTest", 'String'>
    readonly author: FieldRef<"TemplateTest", 'String'>
    readonly available: FieldRef<"TemplateTest", 'Boolean'>
    readonly createdAt: FieldRef<"TemplateTest", 'DateTime'>
    readonly updatedAt: FieldRef<"TemplateTest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemplateTest findUnique
   */
  export type TemplateTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTest
     */
    select?: TemplateTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTest
     */
    omit?: TemplateTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTestInclude<ExtArgs> | null
    /**
     * Filter, which TemplateTest to fetch.
     */
    where: TemplateTestWhereUniqueInput
  }

  /**
   * TemplateTest findUniqueOrThrow
   */
  export type TemplateTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTest
     */
    select?: TemplateTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTest
     */
    omit?: TemplateTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTestInclude<ExtArgs> | null
    /**
     * Filter, which TemplateTest to fetch.
     */
    where: TemplateTestWhereUniqueInput
  }

  /**
   * TemplateTest findFirst
   */
  export type TemplateTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTest
     */
    select?: TemplateTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTest
     */
    omit?: TemplateTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTestInclude<ExtArgs> | null
    /**
     * Filter, which TemplateTest to fetch.
     */
    where?: TemplateTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateTests to fetch.
     */
    orderBy?: TemplateTestOrderByWithRelationInput | TemplateTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateTests.
     */
    cursor?: TemplateTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateTests.
     */
    distinct?: TemplateTestScalarFieldEnum | TemplateTestScalarFieldEnum[]
  }

  /**
   * TemplateTest findFirstOrThrow
   */
  export type TemplateTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTest
     */
    select?: TemplateTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTest
     */
    omit?: TemplateTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTestInclude<ExtArgs> | null
    /**
     * Filter, which TemplateTest to fetch.
     */
    where?: TemplateTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateTests to fetch.
     */
    orderBy?: TemplateTestOrderByWithRelationInput | TemplateTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateTests.
     */
    cursor?: TemplateTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateTests.
     */
    distinct?: TemplateTestScalarFieldEnum | TemplateTestScalarFieldEnum[]
  }

  /**
   * TemplateTest findMany
   */
  export type TemplateTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTest
     */
    select?: TemplateTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTest
     */
    omit?: TemplateTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTestInclude<ExtArgs> | null
    /**
     * Filter, which TemplateTests to fetch.
     */
    where?: TemplateTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateTests to fetch.
     */
    orderBy?: TemplateTestOrderByWithRelationInput | TemplateTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateTests.
     */
    cursor?: TemplateTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateTests.
     */
    skip?: number
    distinct?: TemplateTestScalarFieldEnum | TemplateTestScalarFieldEnum[]
  }

  /**
   * TemplateTest create
   */
  export type TemplateTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTest
     */
    select?: TemplateTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTest
     */
    omit?: TemplateTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTestInclude<ExtArgs> | null
    /**
     * The data needed to create a TemplateTest.
     */
    data: XOR<TemplateTestCreateInput, TemplateTestUncheckedCreateInput>
  }

  /**
   * TemplateTest createMany
   */
  export type TemplateTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateTests.
     */
    data: TemplateTestCreateManyInput | TemplateTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateTest createManyAndReturn
   */
  export type TemplateTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTest
     */
    select?: TemplateTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTest
     */
    omit?: TemplateTestOmit<ExtArgs> | null
    /**
     * The data used to create many TemplateTests.
     */
    data: TemplateTestCreateManyInput | TemplateTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateTest update
   */
  export type TemplateTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTest
     */
    select?: TemplateTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTest
     */
    omit?: TemplateTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTestInclude<ExtArgs> | null
    /**
     * The data needed to update a TemplateTest.
     */
    data: XOR<TemplateTestUpdateInput, TemplateTestUncheckedUpdateInput>
    /**
     * Choose, which TemplateTest to update.
     */
    where: TemplateTestWhereUniqueInput
  }

  /**
   * TemplateTest updateMany
   */
  export type TemplateTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateTests.
     */
    data: XOR<TemplateTestUpdateManyMutationInput, TemplateTestUncheckedUpdateManyInput>
    /**
     * Filter which TemplateTests to update
     */
    where?: TemplateTestWhereInput
    /**
     * Limit how many TemplateTests to update.
     */
    limit?: number
  }

  /**
   * TemplateTest updateManyAndReturn
   */
  export type TemplateTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTest
     */
    select?: TemplateTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTest
     */
    omit?: TemplateTestOmit<ExtArgs> | null
    /**
     * The data used to update TemplateTests.
     */
    data: XOR<TemplateTestUpdateManyMutationInput, TemplateTestUncheckedUpdateManyInput>
    /**
     * Filter which TemplateTests to update
     */
    where?: TemplateTestWhereInput
    /**
     * Limit how many TemplateTests to update.
     */
    limit?: number
  }

  /**
   * TemplateTest upsert
   */
  export type TemplateTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTest
     */
    select?: TemplateTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTest
     */
    omit?: TemplateTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTestInclude<ExtArgs> | null
    /**
     * The filter to search for the TemplateTest to update in case it exists.
     */
    where: TemplateTestWhereUniqueInput
    /**
     * In case the TemplateTest found by the `where` argument doesn't exist, create a new TemplateTest with this data.
     */
    create: XOR<TemplateTestCreateInput, TemplateTestUncheckedCreateInput>
    /**
     * In case the TemplateTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateTestUpdateInput, TemplateTestUncheckedUpdateInput>
  }

  /**
   * TemplateTest delete
   */
  export type TemplateTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTest
     */
    select?: TemplateTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTest
     */
    omit?: TemplateTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTestInclude<ExtArgs> | null
    /**
     * Filter which TemplateTest to delete.
     */
    where: TemplateTestWhereUniqueInput
  }

  /**
   * TemplateTest deleteMany
   */
  export type TemplateTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateTests to delete
     */
    where?: TemplateTestWhereInput
    /**
     * Limit how many TemplateTests to delete.
     */
    limit?: number
  }

  /**
   * TemplateTest.questions
   */
  export type TemplateTest$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * TemplateTest.alternatives
   */
  export type TemplateTest$alternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    where?: AlternativeWhereInput
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    cursor?: AlternativeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * TemplateTest.classifications
   */
  export type TemplateTest$classificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    where?: ClassificationWhereInput
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    cursor?: ClassificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassificationScalarFieldEnum | ClassificationScalarFieldEnum[]
  }

  /**
   * TemplateTest.tests
   */
  export type TemplateTest$testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    cursor?: TestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * TemplateTest without action
   */
  export type TemplateTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateTest
     */
    select?: TemplateTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateTest
     */
    omit?: TemplateTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateTestInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    templateTestId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    templateTestId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    templateTestId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    templateTestId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    templateTestId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    templateTestId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    templateTestId: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateTestId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateTestId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateTestId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    templateTestId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateTestId" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      templateTest: Prisma.$TemplateTestPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      templateTestId: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templateTest<T extends TemplateTestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateTestDefaultArgs<ExtArgs>>): Prisma__TemplateTestClient<$Result.GetResult<Prisma.$TemplateTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly templateTestId: FieldRef<"Question", 'String'>
    readonly content: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Alternative
   */

  export type AggregateAlternative = {
    _count: AlternativeCountAggregateOutputType | null
    _avg: AlternativeAvgAggregateOutputType | null
    _sum: AlternativeSumAggregateOutputType | null
    _min: AlternativeMinAggregateOutputType | null
    _max: AlternativeMaxAggregateOutputType | null
  }

  export type AlternativeAvgAggregateOutputType = {
    value: number | null
  }

  export type AlternativeSumAggregateOutputType = {
    value: number | null
  }

  export type AlternativeMinAggregateOutputType = {
    id: string | null
    templateTestId: string | null
    content: string | null
    value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlternativeMaxAggregateOutputType = {
    id: string | null
    templateTestId: string | null
    content: string | null
    value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlternativeCountAggregateOutputType = {
    id: number
    templateTestId: number
    content: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlternativeAvgAggregateInputType = {
    value?: true
  }

  export type AlternativeSumAggregateInputType = {
    value?: true
  }

  export type AlternativeMinAggregateInputType = {
    id?: true
    templateTestId?: true
    content?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlternativeMaxAggregateInputType = {
    id?: true
    templateTestId?: true
    content?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlternativeCountAggregateInputType = {
    id?: true
    templateTestId?: true
    content?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlternativeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alternative to aggregate.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alternatives
    **/
    _count?: true | AlternativeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlternativeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlternativeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlternativeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlternativeMaxAggregateInputType
  }

  export type GetAlternativeAggregateType<T extends AlternativeAggregateArgs> = {
        [P in keyof T & keyof AggregateAlternative]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlternative[P]>
      : GetScalarType<T[P], AggregateAlternative[P]>
  }




  export type AlternativeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativeWhereInput
    orderBy?: AlternativeOrderByWithAggregationInput | AlternativeOrderByWithAggregationInput[]
    by: AlternativeScalarFieldEnum[] | AlternativeScalarFieldEnum
    having?: AlternativeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlternativeCountAggregateInputType | true
    _avg?: AlternativeAvgAggregateInputType
    _sum?: AlternativeSumAggregateInputType
    _min?: AlternativeMinAggregateInputType
    _max?: AlternativeMaxAggregateInputType
  }

  export type AlternativeGroupByOutputType = {
    id: string
    templateTestId: string
    content: string
    value: number
    createdAt: Date
    updatedAt: Date
    _count: AlternativeCountAggregateOutputType | null
    _avg: AlternativeAvgAggregateOutputType | null
    _sum: AlternativeSumAggregateOutputType | null
    _min: AlternativeMinAggregateOutputType | null
    _max: AlternativeMaxAggregateOutputType | null
  }

  type GetAlternativeGroupByPayload<T extends AlternativeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlternativeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlternativeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlternativeGroupByOutputType[P]>
            : GetScalarType<T[P], AlternativeGroupByOutputType[P]>
        }
      >
    >


  export type AlternativeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateTestId?: boolean
    content?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
    answers?: boolean | Alternative$answersArgs<ExtArgs>
    _count?: boolean | AlternativeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternative"]>

  export type AlternativeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateTestId?: boolean
    content?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternative"]>

  export type AlternativeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateTestId?: boolean
    content?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternative"]>

  export type AlternativeSelectScalar = {
    id?: boolean
    templateTestId?: boolean
    content?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlternativeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateTestId" | "content" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["alternative"]>
  export type AlternativeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
    answers?: boolean | Alternative$answersArgs<ExtArgs>
    _count?: boolean | AlternativeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlternativeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
  }
  export type AlternativeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
  }

  export type $AlternativePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alternative"
    objects: {
      templateTest: Prisma.$TemplateTestPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      templateTestId: string
      content: string
      value: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alternative"]>
    composites: {}
  }

  type AlternativeGetPayload<S extends boolean | null | undefined | AlternativeDefaultArgs> = $Result.GetResult<Prisma.$AlternativePayload, S>

  type AlternativeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlternativeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlternativeCountAggregateInputType | true
    }

  export interface AlternativeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alternative'], meta: { name: 'Alternative' } }
    /**
     * Find zero or one Alternative that matches the filter.
     * @param {AlternativeFindUniqueArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlternativeFindUniqueArgs>(args: SelectSubset<T, AlternativeFindUniqueArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alternative that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlternativeFindUniqueOrThrowArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlternativeFindUniqueOrThrowArgs>(args: SelectSubset<T, AlternativeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alternative that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeFindFirstArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlternativeFindFirstArgs>(args?: SelectSubset<T, AlternativeFindFirstArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alternative that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeFindFirstOrThrowArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlternativeFindFirstOrThrowArgs>(args?: SelectSubset<T, AlternativeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alternatives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alternatives
     * const alternatives = await prisma.alternative.findMany()
     * 
     * // Get first 10 Alternatives
     * const alternatives = await prisma.alternative.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alternativeWithIdOnly = await prisma.alternative.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlternativeFindManyArgs>(args?: SelectSubset<T, AlternativeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alternative.
     * @param {AlternativeCreateArgs} args - Arguments to create a Alternative.
     * @example
     * // Create one Alternative
     * const Alternative = await prisma.alternative.create({
     *   data: {
     *     // ... data to create a Alternative
     *   }
     * })
     * 
     */
    create<T extends AlternativeCreateArgs>(args: SelectSubset<T, AlternativeCreateArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alternatives.
     * @param {AlternativeCreateManyArgs} args - Arguments to create many Alternatives.
     * @example
     * // Create many Alternatives
     * const alternative = await prisma.alternative.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlternativeCreateManyArgs>(args?: SelectSubset<T, AlternativeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alternatives and returns the data saved in the database.
     * @param {AlternativeCreateManyAndReturnArgs} args - Arguments to create many Alternatives.
     * @example
     * // Create many Alternatives
     * const alternative = await prisma.alternative.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alternatives and only return the `id`
     * const alternativeWithIdOnly = await prisma.alternative.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlternativeCreateManyAndReturnArgs>(args?: SelectSubset<T, AlternativeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alternative.
     * @param {AlternativeDeleteArgs} args - Arguments to delete one Alternative.
     * @example
     * // Delete one Alternative
     * const Alternative = await prisma.alternative.delete({
     *   where: {
     *     // ... filter to delete one Alternative
     *   }
     * })
     * 
     */
    delete<T extends AlternativeDeleteArgs>(args: SelectSubset<T, AlternativeDeleteArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alternative.
     * @param {AlternativeUpdateArgs} args - Arguments to update one Alternative.
     * @example
     * // Update one Alternative
     * const alternative = await prisma.alternative.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlternativeUpdateArgs>(args: SelectSubset<T, AlternativeUpdateArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alternatives.
     * @param {AlternativeDeleteManyArgs} args - Arguments to filter Alternatives to delete.
     * @example
     * // Delete a few Alternatives
     * const { count } = await prisma.alternative.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlternativeDeleteManyArgs>(args?: SelectSubset<T, AlternativeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alternatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alternatives
     * const alternative = await prisma.alternative.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlternativeUpdateManyArgs>(args: SelectSubset<T, AlternativeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alternatives and returns the data updated in the database.
     * @param {AlternativeUpdateManyAndReturnArgs} args - Arguments to update many Alternatives.
     * @example
     * // Update many Alternatives
     * const alternative = await prisma.alternative.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alternatives and only return the `id`
     * const alternativeWithIdOnly = await prisma.alternative.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlternativeUpdateManyAndReturnArgs>(args: SelectSubset<T, AlternativeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alternative.
     * @param {AlternativeUpsertArgs} args - Arguments to update or create a Alternative.
     * @example
     * // Update or create a Alternative
     * const alternative = await prisma.alternative.upsert({
     *   create: {
     *     // ... data to create a Alternative
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alternative we want to update
     *   }
     * })
     */
    upsert<T extends AlternativeUpsertArgs>(args: SelectSubset<T, AlternativeUpsertArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alternatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeCountArgs} args - Arguments to filter Alternatives to count.
     * @example
     * // Count the number of Alternatives
     * const count = await prisma.alternative.count({
     *   where: {
     *     // ... the filter for the Alternatives we want to count
     *   }
     * })
    **/
    count<T extends AlternativeCountArgs>(
      args?: Subset<T, AlternativeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlternativeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alternative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlternativeAggregateArgs>(args: Subset<T, AlternativeAggregateArgs>): Prisma.PrismaPromise<GetAlternativeAggregateType<T>>

    /**
     * Group by Alternative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeGroupByArgs} args - Group by arguments.
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
      T extends AlternativeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlternativeGroupByArgs['orderBy'] }
        : { orderBy?: AlternativeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlternativeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlternativeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alternative model
   */
  readonly fields: AlternativeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alternative.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlternativeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templateTest<T extends TemplateTestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateTestDefaultArgs<ExtArgs>>): Prisma__TemplateTestClient<$Result.GetResult<Prisma.$TemplateTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Alternative$answersArgs<ExtArgs> = {}>(args?: Subset<T, Alternative$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Alternative model
   */
  interface AlternativeFieldRefs {
    readonly id: FieldRef<"Alternative", 'String'>
    readonly templateTestId: FieldRef<"Alternative", 'String'>
    readonly content: FieldRef<"Alternative", 'String'>
    readonly value: FieldRef<"Alternative", 'Int'>
    readonly createdAt: FieldRef<"Alternative", 'DateTime'>
    readonly updatedAt: FieldRef<"Alternative", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alternative findUnique
   */
  export type AlternativeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative findUniqueOrThrow
   */
  export type AlternativeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative findFirst
   */
  export type AlternativeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alternatives.
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alternatives.
     */
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Alternative findFirstOrThrow
   */
  export type AlternativeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alternatives.
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alternatives.
     */
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Alternative findMany
   */
  export type AlternativeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternatives to fetch.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alternatives.
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Alternative create
   */
  export type AlternativeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * The data needed to create a Alternative.
     */
    data: XOR<AlternativeCreateInput, AlternativeUncheckedCreateInput>
  }

  /**
   * Alternative createMany
   */
  export type AlternativeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alternatives.
     */
    data: AlternativeCreateManyInput | AlternativeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alternative createManyAndReturn
   */
  export type AlternativeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * The data used to create many Alternatives.
     */
    data: AlternativeCreateManyInput | AlternativeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alternative update
   */
  export type AlternativeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * The data needed to update a Alternative.
     */
    data: XOR<AlternativeUpdateInput, AlternativeUncheckedUpdateInput>
    /**
     * Choose, which Alternative to update.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative updateMany
   */
  export type AlternativeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alternatives.
     */
    data: XOR<AlternativeUpdateManyMutationInput, AlternativeUncheckedUpdateManyInput>
    /**
     * Filter which Alternatives to update
     */
    where?: AlternativeWhereInput
    /**
     * Limit how many Alternatives to update.
     */
    limit?: number
  }

  /**
   * Alternative updateManyAndReturn
   */
  export type AlternativeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * The data used to update Alternatives.
     */
    data: XOR<AlternativeUpdateManyMutationInput, AlternativeUncheckedUpdateManyInput>
    /**
     * Filter which Alternatives to update
     */
    where?: AlternativeWhereInput
    /**
     * Limit how many Alternatives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alternative upsert
   */
  export type AlternativeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * The filter to search for the Alternative to update in case it exists.
     */
    where: AlternativeWhereUniqueInput
    /**
     * In case the Alternative found by the `where` argument doesn't exist, create a new Alternative with this data.
     */
    create: XOR<AlternativeCreateInput, AlternativeUncheckedCreateInput>
    /**
     * In case the Alternative was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlternativeUpdateInput, AlternativeUncheckedUpdateInput>
  }

  /**
   * Alternative delete
   */
  export type AlternativeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter which Alternative to delete.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative deleteMany
   */
  export type AlternativeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alternatives to delete
     */
    where?: AlternativeWhereInput
    /**
     * Limit how many Alternatives to delete.
     */
    limit?: number
  }

  /**
   * Alternative.answers
   */
  export type Alternative$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Alternative without action
   */
  export type AlternativeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
  }


  /**
   * Model Classification
   */

  export type AggregateClassification = {
    _count: ClassificationCountAggregateOutputType | null
    _avg: ClassificationAvgAggregateOutputType | null
    _sum: ClassificationSumAggregateOutputType | null
    _min: ClassificationMinAggregateOutputType | null
    _max: ClassificationMaxAggregateOutputType | null
  }

  export type ClassificationAvgAggregateOutputType = {
    minScore: number | null
    maxScore: number | null
  }

  export type ClassificationSumAggregateOutputType = {
    minScore: number | null
    maxScore: number | null
  }

  export type ClassificationMinAggregateOutputType = {
    id: string | null
    templateTestId: string | null
    minScore: number | null
    maxScore: number | null
    interpretation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassificationMaxAggregateOutputType = {
    id: string | null
    templateTestId: string | null
    minScore: number | null
    maxScore: number | null
    interpretation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassificationCountAggregateOutputType = {
    id: number
    templateTestId: number
    minScore: number
    maxScore: number
    interpretation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassificationAvgAggregateInputType = {
    minScore?: true
    maxScore?: true
  }

  export type ClassificationSumAggregateInputType = {
    minScore?: true
    maxScore?: true
  }

  export type ClassificationMinAggregateInputType = {
    id?: true
    templateTestId?: true
    minScore?: true
    maxScore?: true
    interpretation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassificationMaxAggregateInputType = {
    id?: true
    templateTestId?: true
    minScore?: true
    maxScore?: true
    interpretation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassificationCountAggregateInputType = {
    id?: true
    templateTestId?: true
    minScore?: true
    maxScore?: true
    interpretation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classification to aggregate.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classifications
    **/
    _count?: true | ClassificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassificationMaxAggregateInputType
  }

  export type GetClassificationAggregateType<T extends ClassificationAggregateArgs> = {
        [P in keyof T & keyof AggregateClassification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassification[P]>
      : GetScalarType<T[P], AggregateClassification[P]>
  }




  export type ClassificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassificationWhereInput
    orderBy?: ClassificationOrderByWithAggregationInput | ClassificationOrderByWithAggregationInput[]
    by: ClassificationScalarFieldEnum[] | ClassificationScalarFieldEnum
    having?: ClassificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassificationCountAggregateInputType | true
    _avg?: ClassificationAvgAggregateInputType
    _sum?: ClassificationSumAggregateInputType
    _min?: ClassificationMinAggregateInputType
    _max?: ClassificationMaxAggregateInputType
  }

  export type ClassificationGroupByOutputType = {
    id: string
    templateTestId: string
    minScore: number
    maxScore: number
    interpretation: string
    createdAt: Date
    updatedAt: Date
    _count: ClassificationCountAggregateOutputType | null
    _avg: ClassificationAvgAggregateOutputType | null
    _sum: ClassificationSumAggregateOutputType | null
    _min: ClassificationMinAggregateOutputType | null
    _max: ClassificationMaxAggregateOutputType | null
  }

  type GetClassificationGroupByPayload<T extends ClassificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassificationGroupByOutputType[P]>
            : GetScalarType<T[P], ClassificationGroupByOutputType[P]>
        }
      >
    >


  export type ClassificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateTestId?: boolean
    minScore?: boolean
    maxScore?: boolean
    interpretation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
    tests?: boolean | Classification$testsArgs<ExtArgs>
    _count?: boolean | ClassificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classification"]>

  export type ClassificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateTestId?: boolean
    minScore?: boolean
    maxScore?: boolean
    interpretation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classification"]>

  export type ClassificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateTestId?: boolean
    minScore?: boolean
    maxScore?: boolean
    interpretation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classification"]>

  export type ClassificationSelectScalar = {
    id?: boolean
    templateTestId?: boolean
    minScore?: boolean
    maxScore?: boolean
    interpretation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateTestId" | "minScore" | "maxScore" | "interpretation" | "createdAt" | "updatedAt", ExtArgs["result"]["classification"]>
  export type ClassificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
    tests?: boolean | Classification$testsArgs<ExtArgs>
    _count?: boolean | ClassificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
  }
  export type ClassificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
  }

  export type $ClassificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classification"
    objects: {
      templateTest: Prisma.$TemplateTestPayload<ExtArgs>
      tests: Prisma.$TestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      templateTestId: string
      minScore: number
      maxScore: number
      interpretation: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["classification"]>
    composites: {}
  }

  type ClassificationGetPayload<S extends boolean | null | undefined | ClassificationDefaultArgs> = $Result.GetResult<Prisma.$ClassificationPayload, S>

  type ClassificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassificationCountAggregateInputType | true
    }

  export interface ClassificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classification'], meta: { name: 'Classification' } }
    /**
     * Find zero or one Classification that matches the filter.
     * @param {ClassificationFindUniqueArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassificationFindUniqueArgs>(args: SelectSubset<T, ClassificationFindUniqueArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassificationFindUniqueOrThrowArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassificationFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationFindFirstArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassificationFindFirstArgs>(args?: SelectSubset<T, ClassificationFindFirstArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationFindFirstOrThrowArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassificationFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classifications
     * const classifications = await prisma.classification.findMany()
     * 
     * // Get first 10 Classifications
     * const classifications = await prisma.classification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classificationWithIdOnly = await prisma.classification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassificationFindManyArgs>(args?: SelectSubset<T, ClassificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classification.
     * @param {ClassificationCreateArgs} args - Arguments to create a Classification.
     * @example
     * // Create one Classification
     * const Classification = await prisma.classification.create({
     *   data: {
     *     // ... data to create a Classification
     *   }
     * })
     * 
     */
    create<T extends ClassificationCreateArgs>(args: SelectSubset<T, ClassificationCreateArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classifications.
     * @param {ClassificationCreateManyArgs} args - Arguments to create many Classifications.
     * @example
     * // Create many Classifications
     * const classification = await prisma.classification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassificationCreateManyArgs>(args?: SelectSubset<T, ClassificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classifications and returns the data saved in the database.
     * @param {ClassificationCreateManyAndReturnArgs} args - Arguments to create many Classifications.
     * @example
     * // Create many Classifications
     * const classification = await prisma.classification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classifications and only return the `id`
     * const classificationWithIdOnly = await prisma.classification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassificationCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classification.
     * @param {ClassificationDeleteArgs} args - Arguments to delete one Classification.
     * @example
     * // Delete one Classification
     * const Classification = await prisma.classification.delete({
     *   where: {
     *     // ... filter to delete one Classification
     *   }
     * })
     * 
     */
    delete<T extends ClassificationDeleteArgs>(args: SelectSubset<T, ClassificationDeleteArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classification.
     * @param {ClassificationUpdateArgs} args - Arguments to update one Classification.
     * @example
     * // Update one Classification
     * const classification = await prisma.classification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassificationUpdateArgs>(args: SelectSubset<T, ClassificationUpdateArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classifications.
     * @param {ClassificationDeleteManyArgs} args - Arguments to filter Classifications to delete.
     * @example
     * // Delete a few Classifications
     * const { count } = await prisma.classification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassificationDeleteManyArgs>(args?: SelectSubset<T, ClassificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classifications
     * const classification = await prisma.classification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassificationUpdateManyArgs>(args: SelectSubset<T, ClassificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classifications and returns the data updated in the database.
     * @param {ClassificationUpdateManyAndReturnArgs} args - Arguments to update many Classifications.
     * @example
     * // Update many Classifications
     * const classification = await prisma.classification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classifications and only return the `id`
     * const classificationWithIdOnly = await prisma.classification.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassificationUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classification.
     * @param {ClassificationUpsertArgs} args - Arguments to update or create a Classification.
     * @example
     * // Update or create a Classification
     * const classification = await prisma.classification.upsert({
     *   create: {
     *     // ... data to create a Classification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classification we want to update
     *   }
     * })
     */
    upsert<T extends ClassificationUpsertArgs>(args: SelectSubset<T, ClassificationUpsertArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationCountArgs} args - Arguments to filter Classifications to count.
     * @example
     * // Count the number of Classifications
     * const count = await prisma.classification.count({
     *   where: {
     *     // ... the filter for the Classifications we want to count
     *   }
     * })
    **/
    count<T extends ClassificationCountArgs>(
      args?: Subset<T, ClassificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassificationAggregateArgs>(args: Subset<T, ClassificationAggregateArgs>): Prisma.PrismaPromise<GetClassificationAggregateType<T>>

    /**
     * Group by Classification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationGroupByArgs} args - Group by arguments.
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
      T extends ClassificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassificationGroupByArgs['orderBy'] }
        : { orderBy?: ClassificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classification model
   */
  readonly fields: ClassificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templateTest<T extends TemplateTestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateTestDefaultArgs<ExtArgs>>): Prisma__TemplateTestClient<$Result.GetResult<Prisma.$TemplateTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tests<T extends Classification$testsArgs<ExtArgs> = {}>(args?: Subset<T, Classification$testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Classification model
   */
  interface ClassificationFieldRefs {
    readonly id: FieldRef<"Classification", 'String'>
    readonly templateTestId: FieldRef<"Classification", 'String'>
    readonly minScore: FieldRef<"Classification", 'Int'>
    readonly maxScore: FieldRef<"Classification", 'Int'>
    readonly interpretation: FieldRef<"Classification", 'String'>
    readonly createdAt: FieldRef<"Classification", 'DateTime'>
    readonly updatedAt: FieldRef<"Classification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Classification findUnique
   */
  export type ClassificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification findUniqueOrThrow
   */
  export type ClassificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification findFirst
   */
  export type ClassificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classifications.
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classifications.
     */
    distinct?: ClassificationScalarFieldEnum | ClassificationScalarFieldEnum[]
  }

  /**
   * Classification findFirstOrThrow
   */
  export type ClassificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classifications.
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classifications.
     */
    distinct?: ClassificationScalarFieldEnum | ClassificationScalarFieldEnum[]
  }

  /**
   * Classification findMany
   */
  export type ClassificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter, which Classifications to fetch.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classifications.
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    distinct?: ClassificationScalarFieldEnum | ClassificationScalarFieldEnum[]
  }

  /**
   * Classification create
   */
  export type ClassificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Classification.
     */
    data: XOR<ClassificationCreateInput, ClassificationUncheckedCreateInput>
  }

  /**
   * Classification createMany
   */
  export type ClassificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classifications.
     */
    data: ClassificationCreateManyInput | ClassificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classification createManyAndReturn
   */
  export type ClassificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * The data used to create many Classifications.
     */
    data: ClassificationCreateManyInput | ClassificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classification update
   */
  export type ClassificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Classification.
     */
    data: XOR<ClassificationUpdateInput, ClassificationUncheckedUpdateInput>
    /**
     * Choose, which Classification to update.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification updateMany
   */
  export type ClassificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classifications.
     */
    data: XOR<ClassificationUpdateManyMutationInput, ClassificationUncheckedUpdateManyInput>
    /**
     * Filter which Classifications to update
     */
    where?: ClassificationWhereInput
    /**
     * Limit how many Classifications to update.
     */
    limit?: number
  }

  /**
   * Classification updateManyAndReturn
   */
  export type ClassificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * The data used to update Classifications.
     */
    data: XOR<ClassificationUpdateManyMutationInput, ClassificationUncheckedUpdateManyInput>
    /**
     * Filter which Classifications to update
     */
    where?: ClassificationWhereInput
    /**
     * Limit how many Classifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classification upsert
   */
  export type ClassificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Classification to update in case it exists.
     */
    where: ClassificationWhereUniqueInput
    /**
     * In case the Classification found by the `where` argument doesn't exist, create a new Classification with this data.
     */
    create: XOR<ClassificationCreateInput, ClassificationUncheckedCreateInput>
    /**
     * In case the Classification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassificationUpdateInput, ClassificationUncheckedUpdateInput>
  }

  /**
   * Classification delete
   */
  export type ClassificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter which Classification to delete.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification deleteMany
   */
  export type ClassificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classifications to delete
     */
    where?: ClassificationWhereInput
    /**
     * Limit how many Classifications to delete.
     */
    limit?: number
  }

  /**
   * Classification.tests
   */
  export type Classification$testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    cursor?: TestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Classification without action
   */
  export type ClassificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
  }


  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    score: number | null
  }

  export type TestSumAggregateOutputType = {
    score: number | null
  }

  export type TestMinAggregateOutputType = {
    id: string | null
    score: number | null
    classificationId: string | null
    templateTestId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestMaxAggregateOutputType = {
    id: string | null
    score: number | null
    classificationId: string | null
    templateTestId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    score: number
    classificationId: number
    templateTestId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    score?: true
  }

  export type TestSumAggregateInputType = {
    score?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    score?: true
    classificationId?: true
    templateTestId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    score?: true
    classificationId?: true
    templateTestId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    score?: true
    classificationId?: true
    templateTestId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: string
    score: number
    classificationId: string
    templateTestId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    classificationId?: boolean
    templateTestId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
    classification?: boolean | ClassificationDefaultArgs<ExtArgs>
    answers?: boolean | Test$answersArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    classificationId?: boolean
    templateTestId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
    classification?: boolean | ClassificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    classificationId?: boolean
    templateTestId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
    classification?: boolean | ClassificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    id?: boolean
    score?: boolean
    classificationId?: boolean
    templateTestId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "score" | "classificationId" | "templateTestId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["test"]>
  export type TestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
    classification?: boolean | ClassificationDefaultArgs<ExtArgs>
    answers?: boolean | Test$answersArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
    classification?: boolean | ClassificationDefaultArgs<ExtArgs>
  }
  export type TestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateTest?: boolean | TemplateTestDefaultArgs<ExtArgs>
    classification?: boolean | ClassificationDefaultArgs<ExtArgs>
  }

  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {
      templateTest: Prisma.$TemplateTestPayload<ExtArgs>
      classification: Prisma.$ClassificationPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      score: number
      classificationId: string
      templateTestId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestFindUniqueArgs>(args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestFindFirstArgs>(args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestFindManyArgs>(args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends TestCreateArgs>(args: SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {TestCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCreateManyArgs>(args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {TestCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends TestDeleteArgs>(args: SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestUpdateArgs>(args: SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDeleteManyArgs>(args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestUpdateManyArgs>(args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests and returns the data updated in the database.
     * @param {TestUpdateManyAndReturnArgs} args - Arguments to update many Tests.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.updateManyAndReturn({
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
    updateManyAndReturn<T extends TestUpdateManyAndReturnArgs>(args: SelectSubset<T, TestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends TestUpsertArgs>(args: SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
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
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templateTest<T extends TemplateTestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateTestDefaultArgs<ExtArgs>>): Prisma__TemplateTestClient<$Result.GetResult<Prisma.$TemplateTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classification<T extends ClassificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassificationDefaultArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Test$answersArgs<ExtArgs> = {}>(args?: Subset<T, Test$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Test model
   */
  interface TestFieldRefs {
    readonly id: FieldRef<"Test", 'String'>
    readonly score: FieldRef<"Test", 'Int'>
    readonly classificationId: FieldRef<"Test", 'String'>
    readonly templateTestId: FieldRef<"Test", 'String'>
    readonly userId: FieldRef<"Test", 'String'>
    readonly createdAt: FieldRef<"Test", 'DateTime'>
    readonly updatedAt: FieldRef<"Test", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test createManyAndReturn
   */
  export type TestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test updateManyAndReturn
   */
  export type TestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }

  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to delete.
     */
    limit?: number
  }

  /**
   * Test.answers
   */
  export type Test$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    testId: string | null
    questionId: string | null
    alternativeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    testId: string | null
    questionId: string | null
    alternativeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    testId: number
    questionId: number
    alternativeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnswerMinAggregateInputType = {
    id?: true
    testId?: true
    questionId?: true
    alternativeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    testId?: true
    questionId?: true
    alternativeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    testId?: true
    questionId?: true
    alternativeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    testId: string
    questionId: string
    alternativeId: string
    createdAt: Date
    updatedAt: Date
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    questionId?: boolean
    alternativeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    questionId?: boolean
    alternativeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    questionId?: boolean
    alternativeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    testId?: boolean
    questionId?: boolean
    alternativeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "testId" | "questionId" | "alternativeId" | "createdAt" | "updatedAt", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      test: Prisma.$TestPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
      alternative: Prisma.$AlternativePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      testId: string
      questionId: string
      alternativeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test<T extends TestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestDefaultArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alternative<T extends AlternativeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlternativeDefaultArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly testId: FieldRef<"Answer", 'String'>
    readonly questionId: FieldRef<"Answer", 'String'>
    readonly alternativeId: FieldRef<"Answer", 'String'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
    readonly updatedAt: FieldRef<"Answer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
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


  export const TemplateTestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    author: 'author',
    available: 'available',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateTestScalarFieldEnum = (typeof TemplateTestScalarFieldEnum)[keyof typeof TemplateTestScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    templateTestId: 'templateTestId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AlternativeScalarFieldEnum: {
    id: 'id',
    templateTestId: 'templateTestId',
    content: 'content',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlternativeScalarFieldEnum = (typeof AlternativeScalarFieldEnum)[keyof typeof AlternativeScalarFieldEnum]


  export const ClassificationScalarFieldEnum: {
    id: 'id',
    templateTestId: 'templateTestId',
    minScore: 'minScore',
    maxScore: 'maxScore',
    interpretation: 'interpretation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassificationScalarFieldEnum = (typeof ClassificationScalarFieldEnum)[keyof typeof ClassificationScalarFieldEnum]


  export const TestScalarFieldEnum: {
    id: 'id',
    score: 'score',
    classificationId: 'classificationId',
    templateTestId: 'templateTestId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    testId: 'testId',
    questionId: 'questionId',
    alternativeId: 'alternativeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Deep Input Types
   */


  export type TemplateTestWhereInput = {
    AND?: TemplateTestWhereInput | TemplateTestWhereInput[]
    OR?: TemplateTestWhereInput[]
    NOT?: TemplateTestWhereInput | TemplateTestWhereInput[]
    id?: StringFilter<"TemplateTest"> | string
    name?: StringFilter<"TemplateTest"> | string
    description?: StringFilter<"TemplateTest"> | string
    author?: StringFilter<"TemplateTest"> | string
    available?: BoolFilter<"TemplateTest"> | boolean
    createdAt?: DateTimeFilter<"TemplateTest"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateTest"> | Date | string
    questions?: QuestionListRelationFilter
    alternatives?: AlternativeListRelationFilter
    classifications?: ClassificationListRelationFilter
    tests?: TestListRelationFilter
  }

  export type TemplateTestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    author?: SortOrder
    available?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    alternatives?: AlternativeOrderByRelationAggregateInput
    classifications?: ClassificationOrderByRelationAggregateInput
    tests?: TestOrderByRelationAggregateInput
  }

  export type TemplateTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateTestWhereInput | TemplateTestWhereInput[]
    OR?: TemplateTestWhereInput[]
    NOT?: TemplateTestWhereInput | TemplateTestWhereInput[]
    name?: StringFilter<"TemplateTest"> | string
    description?: StringFilter<"TemplateTest"> | string
    author?: StringFilter<"TemplateTest"> | string
    available?: BoolFilter<"TemplateTest"> | boolean
    createdAt?: DateTimeFilter<"TemplateTest"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateTest"> | Date | string
    questions?: QuestionListRelationFilter
    alternatives?: AlternativeListRelationFilter
    classifications?: ClassificationListRelationFilter
    tests?: TestListRelationFilter
  }, "id">

  export type TemplateTestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    author?: SortOrder
    available?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateTestCountOrderByAggregateInput
    _max?: TemplateTestMaxOrderByAggregateInput
    _min?: TemplateTestMinOrderByAggregateInput
  }

  export type TemplateTestScalarWhereWithAggregatesInput = {
    AND?: TemplateTestScalarWhereWithAggregatesInput | TemplateTestScalarWhereWithAggregatesInput[]
    OR?: TemplateTestScalarWhereWithAggregatesInput[]
    NOT?: TemplateTestScalarWhereWithAggregatesInput | TemplateTestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TemplateTest"> | string
    name?: StringWithAggregatesFilter<"TemplateTest"> | string
    description?: StringWithAggregatesFilter<"TemplateTest"> | string
    author?: StringWithAggregatesFilter<"TemplateTest"> | string
    available?: BoolWithAggregatesFilter<"TemplateTest"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TemplateTest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TemplateTest"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    templateTestId?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    templateTest?: XOR<TemplateTestScalarRelationFilter, TemplateTestWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    templateTestId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateTest?: TemplateTestOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    templateTestId?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    templateTest?: XOR<TemplateTestScalarRelationFilter, TemplateTestWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    templateTestId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    templateTestId?: StringWithAggregatesFilter<"Question"> | string
    content?: StringWithAggregatesFilter<"Question"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type AlternativeWhereInput = {
    AND?: AlternativeWhereInput | AlternativeWhereInput[]
    OR?: AlternativeWhereInput[]
    NOT?: AlternativeWhereInput | AlternativeWhereInput[]
    id?: StringFilter<"Alternative"> | string
    templateTestId?: StringFilter<"Alternative"> | string
    content?: StringFilter<"Alternative"> | string
    value?: IntFilter<"Alternative"> | number
    createdAt?: DateTimeFilter<"Alternative"> | Date | string
    updatedAt?: DateTimeFilter<"Alternative"> | Date | string
    templateTest?: XOR<TemplateTestScalarRelationFilter, TemplateTestWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type AlternativeOrderByWithRelationInput = {
    id?: SortOrder
    templateTestId?: SortOrder
    content?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateTest?: TemplateTestOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type AlternativeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlternativeWhereInput | AlternativeWhereInput[]
    OR?: AlternativeWhereInput[]
    NOT?: AlternativeWhereInput | AlternativeWhereInput[]
    templateTestId?: StringFilter<"Alternative"> | string
    content?: StringFilter<"Alternative"> | string
    value?: IntFilter<"Alternative"> | number
    createdAt?: DateTimeFilter<"Alternative"> | Date | string
    updatedAt?: DateTimeFilter<"Alternative"> | Date | string
    templateTest?: XOR<TemplateTestScalarRelationFilter, TemplateTestWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type AlternativeOrderByWithAggregationInput = {
    id?: SortOrder
    templateTestId?: SortOrder
    content?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlternativeCountOrderByAggregateInput
    _avg?: AlternativeAvgOrderByAggregateInput
    _max?: AlternativeMaxOrderByAggregateInput
    _min?: AlternativeMinOrderByAggregateInput
    _sum?: AlternativeSumOrderByAggregateInput
  }

  export type AlternativeScalarWhereWithAggregatesInput = {
    AND?: AlternativeScalarWhereWithAggregatesInput | AlternativeScalarWhereWithAggregatesInput[]
    OR?: AlternativeScalarWhereWithAggregatesInput[]
    NOT?: AlternativeScalarWhereWithAggregatesInput | AlternativeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alternative"> | string
    templateTestId?: StringWithAggregatesFilter<"Alternative"> | string
    content?: StringWithAggregatesFilter<"Alternative"> | string
    value?: IntWithAggregatesFilter<"Alternative"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Alternative"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Alternative"> | Date | string
  }

  export type ClassificationWhereInput = {
    AND?: ClassificationWhereInput | ClassificationWhereInput[]
    OR?: ClassificationWhereInput[]
    NOT?: ClassificationWhereInput | ClassificationWhereInput[]
    id?: StringFilter<"Classification"> | string
    templateTestId?: StringFilter<"Classification"> | string
    minScore?: IntFilter<"Classification"> | number
    maxScore?: IntFilter<"Classification"> | number
    interpretation?: StringFilter<"Classification"> | string
    createdAt?: DateTimeFilter<"Classification"> | Date | string
    updatedAt?: DateTimeFilter<"Classification"> | Date | string
    templateTest?: XOR<TemplateTestScalarRelationFilter, TemplateTestWhereInput>
    tests?: TestListRelationFilter
  }

  export type ClassificationOrderByWithRelationInput = {
    id?: SortOrder
    templateTestId?: SortOrder
    minScore?: SortOrder
    maxScore?: SortOrder
    interpretation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateTest?: TemplateTestOrderByWithRelationInput
    tests?: TestOrderByRelationAggregateInput
  }

  export type ClassificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassificationWhereInput | ClassificationWhereInput[]
    OR?: ClassificationWhereInput[]
    NOT?: ClassificationWhereInput | ClassificationWhereInput[]
    templateTestId?: StringFilter<"Classification"> | string
    minScore?: IntFilter<"Classification"> | number
    maxScore?: IntFilter<"Classification"> | number
    interpretation?: StringFilter<"Classification"> | string
    createdAt?: DateTimeFilter<"Classification"> | Date | string
    updatedAt?: DateTimeFilter<"Classification"> | Date | string
    templateTest?: XOR<TemplateTestScalarRelationFilter, TemplateTestWhereInput>
    tests?: TestListRelationFilter
  }, "id">

  export type ClassificationOrderByWithAggregationInput = {
    id?: SortOrder
    templateTestId?: SortOrder
    minScore?: SortOrder
    maxScore?: SortOrder
    interpretation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassificationCountOrderByAggregateInput
    _avg?: ClassificationAvgOrderByAggregateInput
    _max?: ClassificationMaxOrderByAggregateInput
    _min?: ClassificationMinOrderByAggregateInput
    _sum?: ClassificationSumOrderByAggregateInput
  }

  export type ClassificationScalarWhereWithAggregatesInput = {
    AND?: ClassificationScalarWhereWithAggregatesInput | ClassificationScalarWhereWithAggregatesInput[]
    OR?: ClassificationScalarWhereWithAggregatesInput[]
    NOT?: ClassificationScalarWhereWithAggregatesInput | ClassificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Classification"> | string
    templateTestId?: StringWithAggregatesFilter<"Classification"> | string
    minScore?: IntWithAggregatesFilter<"Classification"> | number
    maxScore?: IntWithAggregatesFilter<"Classification"> | number
    interpretation?: StringWithAggregatesFilter<"Classification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Classification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Classification"> | Date | string
  }

  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    id?: StringFilter<"Test"> | string
    score?: IntFilter<"Test"> | number
    classificationId?: StringFilter<"Test"> | string
    templateTestId?: StringFilter<"Test"> | string
    userId?: StringFilter<"Test"> | string
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
    templateTest?: XOR<TemplateTestScalarRelationFilter, TemplateTestWhereInput>
    classification?: XOR<ClassificationScalarRelationFilter, ClassificationWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    score?: SortOrder
    classificationId?: SortOrder
    templateTestId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateTest?: TemplateTestOrderByWithRelationInput
    classification?: ClassificationOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    score?: IntFilter<"Test"> | number
    classificationId?: StringFilter<"Test"> | string
    templateTestId?: StringFilter<"Test"> | string
    userId?: StringFilter<"Test"> | string
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
    templateTest?: XOR<TemplateTestScalarRelationFilter, TemplateTestWhereInput>
    classification?: XOR<ClassificationScalarRelationFilter, ClassificationWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    score?: SortOrder
    classificationId?: SortOrder
    templateTestId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Test"> | string
    score?: IntWithAggregatesFilter<"Test"> | number
    classificationId?: StringWithAggregatesFilter<"Test"> | string
    templateTestId?: StringWithAggregatesFilter<"Test"> | string
    userId?: StringWithAggregatesFilter<"Test"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    testId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    alternativeId?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    alternative?: XOR<AlternativeScalarRelationFilter, AlternativeWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    testId?: SortOrder
    questionId?: SortOrder
    alternativeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    test?: TestOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    alternative?: AlternativeOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    testId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    alternativeId?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    alternative?: XOR<AlternativeScalarRelationFilter, AlternativeWhereInput>
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    testId?: SortOrder
    questionId?: SortOrder
    alternativeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    testId?: StringWithAggregatesFilter<"Answer"> | string
    questionId?: StringWithAggregatesFilter<"Answer"> | string
    alternativeId?: StringWithAggregatesFilter<"Answer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
  }

  export type TemplateTestCreateInput = {
    id?: string
    name: string
    description: string
    author: string
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutTemplateTestInput
    alternatives?: AlternativeCreateNestedManyWithoutTemplateTestInput
    classifications?: ClassificationCreateNestedManyWithoutTemplateTestInput
    tests?: TestCreateNestedManyWithoutTemplateTestInput
  }

  export type TemplateTestUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    author: string
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutTemplateTestInput
    alternatives?: AlternativeUncheckedCreateNestedManyWithoutTemplateTestInput
    classifications?: ClassificationUncheckedCreateNestedManyWithoutTemplateTestInput
    tests?: TestUncheckedCreateNestedManyWithoutTemplateTestInput
  }

  export type TemplateTestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutTemplateTestNestedInput
    alternatives?: AlternativeUpdateManyWithoutTemplateTestNestedInput
    classifications?: ClassificationUpdateManyWithoutTemplateTestNestedInput
    tests?: TestUpdateManyWithoutTemplateTestNestedInput
  }

  export type TemplateTestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutTemplateTestNestedInput
    alternatives?: AlternativeUncheckedUpdateManyWithoutTemplateTestNestedInput
    classifications?: ClassificationUncheckedUpdateManyWithoutTemplateTestNestedInput
    tests?: TestUncheckedUpdateManyWithoutTemplateTestNestedInput
  }

  export type TemplateTestCreateManyInput = {
    id?: string
    name: string
    description: string
    author: string
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateTestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateTestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    templateTest: TemplateTestCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    templateTestId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateTest?: TemplateTestUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateTestId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    templateTestId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateTestId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlternativeCreateInput = {
    id?: string
    content: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
    templateTest: TemplateTestCreateNestedOneWithoutAlternativesInput
    answers?: AnswerCreateNestedManyWithoutAlternativeInput
  }

  export type AlternativeUncheckedCreateInput = {
    id?: string
    templateTestId: string
    content: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutAlternativeInput
  }

  export type AlternativeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateTest?: TemplateTestUpdateOneRequiredWithoutAlternativesNestedInput
    answers?: AnswerUpdateManyWithoutAlternativeNestedInput
  }

  export type AlternativeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateTestId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutAlternativeNestedInput
  }

  export type AlternativeCreateManyInput = {
    id?: string
    templateTestId: string
    content: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlternativeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlternativeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateTestId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassificationCreateInput = {
    id?: string
    minScore: number
    maxScore: number
    interpretation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    templateTest: TemplateTestCreateNestedOneWithoutClassificationsInput
    tests?: TestCreateNestedManyWithoutClassificationInput
  }

  export type ClassificationUncheckedCreateInput = {
    id?: string
    templateTestId: string
    minScore: number
    maxScore: number
    interpretation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tests?: TestUncheckedCreateNestedManyWithoutClassificationInput
  }

  export type ClassificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    minScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateTest?: TemplateTestUpdateOneRequiredWithoutClassificationsNestedInput
    tests?: TestUpdateManyWithoutClassificationNestedInput
  }

  export type ClassificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateTestId?: StringFieldUpdateOperationsInput | string
    minScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tests?: TestUncheckedUpdateManyWithoutClassificationNestedInput
  }

  export type ClassificationCreateManyInput = {
    id?: string
    templateTestId: string
    minScore: number
    maxScore: number
    interpretation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    minScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateTestId?: StringFieldUpdateOperationsInput | string
    minScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCreateInput = {
    id?: string
    score: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    templateTest: TemplateTestCreateNestedOneWithoutTestsInput
    classification: ClassificationCreateNestedOneWithoutTestsInput
    answers?: AnswerCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateInput = {
    id?: string
    score: number
    classificationId: string
    templateTestId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateTest?: TemplateTestUpdateOneRequiredWithoutTestsNestedInput
    classification?: ClassificationUpdateOneRequiredWithoutTestsNestedInput
    answers?: AnswerUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    classificationId?: StringFieldUpdateOperationsInput | string
    templateTestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestCreateManyInput = {
    id?: string
    score: number
    classificationId: string
    templateTestId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    classificationId?: StringFieldUpdateOperationsInput | string
    templateTestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    test: TestCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswersInput
    alternative: AlternativeCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    testId: string
    questionId: string
    alternativeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    alternative?: AlternativeUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    alternativeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyInput = {
    id?: string
    testId: string
    questionId: string
    alternativeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    alternativeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type AlternativeListRelationFilter = {
    every?: AlternativeWhereInput
    some?: AlternativeWhereInput
    none?: AlternativeWhereInput
  }

  export type ClassificationListRelationFilter = {
    every?: ClassificationWhereInput
    some?: ClassificationWhereInput
    none?: ClassificationWhereInput
  }

  export type TestListRelationFilter = {
    every?: TestWhereInput
    some?: TestWhereInput
    none?: TestWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlternativeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateTestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    author?: SortOrder
    available?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateTestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    author?: SortOrder
    available?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateTestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    author?: SortOrder
    available?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TemplateTestScalarRelationFilter = {
    is?: TemplateTestWhereInput
    isNot?: TemplateTestWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    templateTestId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    templateTestId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    templateTestId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type AlternativeCountOrderByAggregateInput = {
    id?: SortOrder
    templateTestId?: SortOrder
    content?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlternativeAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type AlternativeMaxOrderByAggregateInput = {
    id?: SortOrder
    templateTestId?: SortOrder
    content?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlternativeMinOrderByAggregateInput = {
    id?: SortOrder
    templateTestId?: SortOrder
    content?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlternativeSumOrderByAggregateInput = {
    value?: SortOrder
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

  export type ClassificationCountOrderByAggregateInput = {
    id?: SortOrder
    templateTestId?: SortOrder
    minScore?: SortOrder
    maxScore?: SortOrder
    interpretation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassificationAvgOrderByAggregateInput = {
    minScore?: SortOrder
    maxScore?: SortOrder
  }

  export type ClassificationMaxOrderByAggregateInput = {
    id?: SortOrder
    templateTestId?: SortOrder
    minScore?: SortOrder
    maxScore?: SortOrder
    interpretation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassificationMinOrderByAggregateInput = {
    id?: SortOrder
    templateTestId?: SortOrder
    minScore?: SortOrder
    maxScore?: SortOrder
    interpretation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassificationSumOrderByAggregateInput = {
    minScore?: SortOrder
    maxScore?: SortOrder
  }

  export type ClassificationScalarRelationFilter = {
    is?: ClassificationWhereInput
    isNot?: ClassificationWhereInput
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    classificationId?: SortOrder
    templateTestId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    classificationId?: SortOrder
    templateTestId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    classificationId?: SortOrder
    templateTestId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type TestScalarRelationFilter = {
    is?: TestWhereInput
    isNot?: TestWhereInput
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AlternativeScalarRelationFilter = {
    is?: AlternativeWhereInput
    isNot?: AlternativeWhereInput
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    questionId?: SortOrder
    alternativeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    questionId?: SortOrder
    alternativeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    questionId?: SortOrder
    alternativeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionCreateNestedManyWithoutTemplateTestInput = {
    create?: XOR<QuestionCreateWithoutTemplateTestInput, QuestionUncheckedCreateWithoutTemplateTestInput> | QuestionCreateWithoutTemplateTestInput[] | QuestionUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTemplateTestInput | QuestionCreateOrConnectWithoutTemplateTestInput[]
    createMany?: QuestionCreateManyTemplateTestInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type AlternativeCreateNestedManyWithoutTemplateTestInput = {
    create?: XOR<AlternativeCreateWithoutTemplateTestInput, AlternativeUncheckedCreateWithoutTemplateTestInput> | AlternativeCreateWithoutTemplateTestInput[] | AlternativeUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutTemplateTestInput | AlternativeCreateOrConnectWithoutTemplateTestInput[]
    createMany?: AlternativeCreateManyTemplateTestInputEnvelope
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
  }

  export type ClassificationCreateNestedManyWithoutTemplateTestInput = {
    create?: XOR<ClassificationCreateWithoutTemplateTestInput, ClassificationUncheckedCreateWithoutTemplateTestInput> | ClassificationCreateWithoutTemplateTestInput[] | ClassificationUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: ClassificationCreateOrConnectWithoutTemplateTestInput | ClassificationCreateOrConnectWithoutTemplateTestInput[]
    createMany?: ClassificationCreateManyTemplateTestInputEnvelope
    connect?: ClassificationWhereUniqueInput | ClassificationWhereUniqueInput[]
  }

  export type TestCreateNestedManyWithoutTemplateTestInput = {
    create?: XOR<TestCreateWithoutTemplateTestInput, TestUncheckedCreateWithoutTemplateTestInput> | TestCreateWithoutTemplateTestInput[] | TestUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: TestCreateOrConnectWithoutTemplateTestInput | TestCreateOrConnectWithoutTemplateTestInput[]
    createMany?: TestCreateManyTemplateTestInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutTemplateTestInput = {
    create?: XOR<QuestionCreateWithoutTemplateTestInput, QuestionUncheckedCreateWithoutTemplateTestInput> | QuestionCreateWithoutTemplateTestInput[] | QuestionUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTemplateTestInput | QuestionCreateOrConnectWithoutTemplateTestInput[]
    createMany?: QuestionCreateManyTemplateTestInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type AlternativeUncheckedCreateNestedManyWithoutTemplateTestInput = {
    create?: XOR<AlternativeCreateWithoutTemplateTestInput, AlternativeUncheckedCreateWithoutTemplateTestInput> | AlternativeCreateWithoutTemplateTestInput[] | AlternativeUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutTemplateTestInput | AlternativeCreateOrConnectWithoutTemplateTestInput[]
    createMany?: AlternativeCreateManyTemplateTestInputEnvelope
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
  }

  export type ClassificationUncheckedCreateNestedManyWithoutTemplateTestInput = {
    create?: XOR<ClassificationCreateWithoutTemplateTestInput, ClassificationUncheckedCreateWithoutTemplateTestInput> | ClassificationCreateWithoutTemplateTestInput[] | ClassificationUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: ClassificationCreateOrConnectWithoutTemplateTestInput | ClassificationCreateOrConnectWithoutTemplateTestInput[]
    createMany?: ClassificationCreateManyTemplateTestInputEnvelope
    connect?: ClassificationWhereUniqueInput | ClassificationWhereUniqueInput[]
  }

  export type TestUncheckedCreateNestedManyWithoutTemplateTestInput = {
    create?: XOR<TestCreateWithoutTemplateTestInput, TestUncheckedCreateWithoutTemplateTestInput> | TestCreateWithoutTemplateTestInput[] | TestUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: TestCreateOrConnectWithoutTemplateTestInput | TestCreateOrConnectWithoutTemplateTestInput[]
    createMany?: TestCreateManyTemplateTestInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuestionUpdateManyWithoutTemplateTestNestedInput = {
    create?: XOR<QuestionCreateWithoutTemplateTestInput, QuestionUncheckedCreateWithoutTemplateTestInput> | QuestionCreateWithoutTemplateTestInput[] | QuestionUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTemplateTestInput | QuestionCreateOrConnectWithoutTemplateTestInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTemplateTestInput | QuestionUpsertWithWhereUniqueWithoutTemplateTestInput[]
    createMany?: QuestionCreateManyTemplateTestInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTemplateTestInput | QuestionUpdateWithWhereUniqueWithoutTemplateTestInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTemplateTestInput | QuestionUpdateManyWithWhereWithoutTemplateTestInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type AlternativeUpdateManyWithoutTemplateTestNestedInput = {
    create?: XOR<AlternativeCreateWithoutTemplateTestInput, AlternativeUncheckedCreateWithoutTemplateTestInput> | AlternativeCreateWithoutTemplateTestInput[] | AlternativeUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutTemplateTestInput | AlternativeCreateOrConnectWithoutTemplateTestInput[]
    upsert?: AlternativeUpsertWithWhereUniqueWithoutTemplateTestInput | AlternativeUpsertWithWhereUniqueWithoutTemplateTestInput[]
    createMany?: AlternativeCreateManyTemplateTestInputEnvelope
    set?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    disconnect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    delete?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    update?: AlternativeUpdateWithWhereUniqueWithoutTemplateTestInput | AlternativeUpdateWithWhereUniqueWithoutTemplateTestInput[]
    updateMany?: AlternativeUpdateManyWithWhereWithoutTemplateTestInput | AlternativeUpdateManyWithWhereWithoutTemplateTestInput[]
    deleteMany?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
  }

  export type ClassificationUpdateManyWithoutTemplateTestNestedInput = {
    create?: XOR<ClassificationCreateWithoutTemplateTestInput, ClassificationUncheckedCreateWithoutTemplateTestInput> | ClassificationCreateWithoutTemplateTestInput[] | ClassificationUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: ClassificationCreateOrConnectWithoutTemplateTestInput | ClassificationCreateOrConnectWithoutTemplateTestInput[]
    upsert?: ClassificationUpsertWithWhereUniqueWithoutTemplateTestInput | ClassificationUpsertWithWhereUniqueWithoutTemplateTestInput[]
    createMany?: ClassificationCreateManyTemplateTestInputEnvelope
    set?: ClassificationWhereUniqueInput | ClassificationWhereUniqueInput[]
    disconnect?: ClassificationWhereUniqueInput | ClassificationWhereUniqueInput[]
    delete?: ClassificationWhereUniqueInput | ClassificationWhereUniqueInput[]
    connect?: ClassificationWhereUniqueInput | ClassificationWhereUniqueInput[]
    update?: ClassificationUpdateWithWhereUniqueWithoutTemplateTestInput | ClassificationUpdateWithWhereUniqueWithoutTemplateTestInput[]
    updateMany?: ClassificationUpdateManyWithWhereWithoutTemplateTestInput | ClassificationUpdateManyWithWhereWithoutTemplateTestInput[]
    deleteMany?: ClassificationScalarWhereInput | ClassificationScalarWhereInput[]
  }

  export type TestUpdateManyWithoutTemplateTestNestedInput = {
    create?: XOR<TestCreateWithoutTemplateTestInput, TestUncheckedCreateWithoutTemplateTestInput> | TestCreateWithoutTemplateTestInput[] | TestUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: TestCreateOrConnectWithoutTemplateTestInput | TestCreateOrConnectWithoutTemplateTestInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutTemplateTestInput | TestUpsertWithWhereUniqueWithoutTemplateTestInput[]
    createMany?: TestCreateManyTemplateTestInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutTemplateTestInput | TestUpdateWithWhereUniqueWithoutTemplateTestInput[]
    updateMany?: TestUpdateManyWithWhereWithoutTemplateTestInput | TestUpdateManyWithWhereWithoutTemplateTestInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutTemplateTestNestedInput = {
    create?: XOR<QuestionCreateWithoutTemplateTestInput, QuestionUncheckedCreateWithoutTemplateTestInput> | QuestionCreateWithoutTemplateTestInput[] | QuestionUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTemplateTestInput | QuestionCreateOrConnectWithoutTemplateTestInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTemplateTestInput | QuestionUpsertWithWhereUniqueWithoutTemplateTestInput[]
    createMany?: QuestionCreateManyTemplateTestInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTemplateTestInput | QuestionUpdateWithWhereUniqueWithoutTemplateTestInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTemplateTestInput | QuestionUpdateManyWithWhereWithoutTemplateTestInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type AlternativeUncheckedUpdateManyWithoutTemplateTestNestedInput = {
    create?: XOR<AlternativeCreateWithoutTemplateTestInput, AlternativeUncheckedCreateWithoutTemplateTestInput> | AlternativeCreateWithoutTemplateTestInput[] | AlternativeUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutTemplateTestInput | AlternativeCreateOrConnectWithoutTemplateTestInput[]
    upsert?: AlternativeUpsertWithWhereUniqueWithoutTemplateTestInput | AlternativeUpsertWithWhereUniqueWithoutTemplateTestInput[]
    createMany?: AlternativeCreateManyTemplateTestInputEnvelope
    set?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    disconnect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    delete?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    update?: AlternativeUpdateWithWhereUniqueWithoutTemplateTestInput | AlternativeUpdateWithWhereUniqueWithoutTemplateTestInput[]
    updateMany?: AlternativeUpdateManyWithWhereWithoutTemplateTestInput | AlternativeUpdateManyWithWhereWithoutTemplateTestInput[]
    deleteMany?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
  }

  export type ClassificationUncheckedUpdateManyWithoutTemplateTestNestedInput = {
    create?: XOR<ClassificationCreateWithoutTemplateTestInput, ClassificationUncheckedCreateWithoutTemplateTestInput> | ClassificationCreateWithoutTemplateTestInput[] | ClassificationUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: ClassificationCreateOrConnectWithoutTemplateTestInput | ClassificationCreateOrConnectWithoutTemplateTestInput[]
    upsert?: ClassificationUpsertWithWhereUniqueWithoutTemplateTestInput | ClassificationUpsertWithWhereUniqueWithoutTemplateTestInput[]
    createMany?: ClassificationCreateManyTemplateTestInputEnvelope
    set?: ClassificationWhereUniqueInput | ClassificationWhereUniqueInput[]
    disconnect?: ClassificationWhereUniqueInput | ClassificationWhereUniqueInput[]
    delete?: ClassificationWhereUniqueInput | ClassificationWhereUniqueInput[]
    connect?: ClassificationWhereUniqueInput | ClassificationWhereUniqueInput[]
    update?: ClassificationUpdateWithWhereUniqueWithoutTemplateTestInput | ClassificationUpdateWithWhereUniqueWithoutTemplateTestInput[]
    updateMany?: ClassificationUpdateManyWithWhereWithoutTemplateTestInput | ClassificationUpdateManyWithWhereWithoutTemplateTestInput[]
    deleteMany?: ClassificationScalarWhereInput | ClassificationScalarWhereInput[]
  }

  export type TestUncheckedUpdateManyWithoutTemplateTestNestedInput = {
    create?: XOR<TestCreateWithoutTemplateTestInput, TestUncheckedCreateWithoutTemplateTestInput> | TestCreateWithoutTemplateTestInput[] | TestUncheckedCreateWithoutTemplateTestInput[]
    connectOrCreate?: TestCreateOrConnectWithoutTemplateTestInput | TestCreateOrConnectWithoutTemplateTestInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutTemplateTestInput | TestUpsertWithWhereUniqueWithoutTemplateTestInput[]
    createMany?: TestCreateManyTemplateTestInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutTemplateTestInput | TestUpdateWithWhereUniqueWithoutTemplateTestInput[]
    updateMany?: TestUpdateManyWithWhereWithoutTemplateTestInput | TestUpdateManyWithWhereWithoutTemplateTestInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type TemplateTestCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<TemplateTestCreateWithoutQuestionsInput, TemplateTestUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TemplateTestCreateOrConnectWithoutQuestionsInput
    connect?: TemplateTestWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type TemplateTestUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<TemplateTestCreateWithoutQuestionsInput, TemplateTestUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TemplateTestCreateOrConnectWithoutQuestionsInput
    upsert?: TemplateTestUpsertWithoutQuestionsInput
    connect?: TemplateTestWhereUniqueInput
    update?: XOR<XOR<TemplateTestUpdateToOneWithWhereWithoutQuestionsInput, TemplateTestUpdateWithoutQuestionsInput>, TemplateTestUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type TemplateTestCreateNestedOneWithoutAlternativesInput = {
    create?: XOR<TemplateTestCreateWithoutAlternativesInput, TemplateTestUncheckedCreateWithoutAlternativesInput>
    connectOrCreate?: TemplateTestCreateOrConnectWithoutAlternativesInput
    connect?: TemplateTestWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutAlternativeInput = {
    create?: XOR<AnswerCreateWithoutAlternativeInput, AnswerUncheckedCreateWithoutAlternativeInput> | AnswerCreateWithoutAlternativeInput[] | AnswerUncheckedCreateWithoutAlternativeInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAlternativeInput | AnswerCreateOrConnectWithoutAlternativeInput[]
    createMany?: AnswerCreateManyAlternativeInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutAlternativeInput = {
    create?: XOR<AnswerCreateWithoutAlternativeInput, AnswerUncheckedCreateWithoutAlternativeInput> | AnswerCreateWithoutAlternativeInput[] | AnswerUncheckedCreateWithoutAlternativeInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAlternativeInput | AnswerCreateOrConnectWithoutAlternativeInput[]
    createMany?: AnswerCreateManyAlternativeInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TemplateTestUpdateOneRequiredWithoutAlternativesNestedInput = {
    create?: XOR<TemplateTestCreateWithoutAlternativesInput, TemplateTestUncheckedCreateWithoutAlternativesInput>
    connectOrCreate?: TemplateTestCreateOrConnectWithoutAlternativesInput
    upsert?: TemplateTestUpsertWithoutAlternativesInput
    connect?: TemplateTestWhereUniqueInput
    update?: XOR<XOR<TemplateTestUpdateToOneWithWhereWithoutAlternativesInput, TemplateTestUpdateWithoutAlternativesInput>, TemplateTestUncheckedUpdateWithoutAlternativesInput>
  }

  export type AnswerUpdateManyWithoutAlternativeNestedInput = {
    create?: XOR<AnswerCreateWithoutAlternativeInput, AnswerUncheckedCreateWithoutAlternativeInput> | AnswerCreateWithoutAlternativeInput[] | AnswerUncheckedCreateWithoutAlternativeInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAlternativeInput | AnswerCreateOrConnectWithoutAlternativeInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutAlternativeInput | AnswerUpsertWithWhereUniqueWithoutAlternativeInput[]
    createMany?: AnswerCreateManyAlternativeInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutAlternativeInput | AnswerUpdateWithWhereUniqueWithoutAlternativeInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutAlternativeInput | AnswerUpdateManyWithWhereWithoutAlternativeInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutAlternativeNestedInput = {
    create?: XOR<AnswerCreateWithoutAlternativeInput, AnswerUncheckedCreateWithoutAlternativeInput> | AnswerCreateWithoutAlternativeInput[] | AnswerUncheckedCreateWithoutAlternativeInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAlternativeInput | AnswerCreateOrConnectWithoutAlternativeInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutAlternativeInput | AnswerUpsertWithWhereUniqueWithoutAlternativeInput[]
    createMany?: AnswerCreateManyAlternativeInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutAlternativeInput | AnswerUpdateWithWhereUniqueWithoutAlternativeInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutAlternativeInput | AnswerUpdateManyWithWhereWithoutAlternativeInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type TemplateTestCreateNestedOneWithoutClassificationsInput = {
    create?: XOR<TemplateTestCreateWithoutClassificationsInput, TemplateTestUncheckedCreateWithoutClassificationsInput>
    connectOrCreate?: TemplateTestCreateOrConnectWithoutClassificationsInput
    connect?: TemplateTestWhereUniqueInput
  }

  export type TestCreateNestedManyWithoutClassificationInput = {
    create?: XOR<TestCreateWithoutClassificationInput, TestUncheckedCreateWithoutClassificationInput> | TestCreateWithoutClassificationInput[] | TestUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: TestCreateOrConnectWithoutClassificationInput | TestCreateOrConnectWithoutClassificationInput[]
    createMany?: TestCreateManyClassificationInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type TestUncheckedCreateNestedManyWithoutClassificationInput = {
    create?: XOR<TestCreateWithoutClassificationInput, TestUncheckedCreateWithoutClassificationInput> | TestCreateWithoutClassificationInput[] | TestUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: TestCreateOrConnectWithoutClassificationInput | TestCreateOrConnectWithoutClassificationInput[]
    createMany?: TestCreateManyClassificationInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type TemplateTestUpdateOneRequiredWithoutClassificationsNestedInput = {
    create?: XOR<TemplateTestCreateWithoutClassificationsInput, TemplateTestUncheckedCreateWithoutClassificationsInput>
    connectOrCreate?: TemplateTestCreateOrConnectWithoutClassificationsInput
    upsert?: TemplateTestUpsertWithoutClassificationsInput
    connect?: TemplateTestWhereUniqueInput
    update?: XOR<XOR<TemplateTestUpdateToOneWithWhereWithoutClassificationsInput, TemplateTestUpdateWithoutClassificationsInput>, TemplateTestUncheckedUpdateWithoutClassificationsInput>
  }

  export type TestUpdateManyWithoutClassificationNestedInput = {
    create?: XOR<TestCreateWithoutClassificationInput, TestUncheckedCreateWithoutClassificationInput> | TestCreateWithoutClassificationInput[] | TestUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: TestCreateOrConnectWithoutClassificationInput | TestCreateOrConnectWithoutClassificationInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutClassificationInput | TestUpsertWithWhereUniqueWithoutClassificationInput[]
    createMany?: TestCreateManyClassificationInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutClassificationInput | TestUpdateWithWhereUniqueWithoutClassificationInput[]
    updateMany?: TestUpdateManyWithWhereWithoutClassificationInput | TestUpdateManyWithWhereWithoutClassificationInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type TestUncheckedUpdateManyWithoutClassificationNestedInput = {
    create?: XOR<TestCreateWithoutClassificationInput, TestUncheckedCreateWithoutClassificationInput> | TestCreateWithoutClassificationInput[] | TestUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: TestCreateOrConnectWithoutClassificationInput | TestCreateOrConnectWithoutClassificationInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutClassificationInput | TestUpsertWithWhereUniqueWithoutClassificationInput[]
    createMany?: TestCreateManyClassificationInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutClassificationInput | TestUpdateWithWhereUniqueWithoutClassificationInput[]
    updateMany?: TestUpdateManyWithWhereWithoutClassificationInput | TestUpdateManyWithWhereWithoutClassificationInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type TemplateTestCreateNestedOneWithoutTestsInput = {
    create?: XOR<TemplateTestCreateWithoutTestsInput, TemplateTestUncheckedCreateWithoutTestsInput>
    connectOrCreate?: TemplateTestCreateOrConnectWithoutTestsInput
    connect?: TemplateTestWhereUniqueInput
  }

  export type ClassificationCreateNestedOneWithoutTestsInput = {
    create?: XOR<ClassificationCreateWithoutTestsInput, ClassificationUncheckedCreateWithoutTestsInput>
    connectOrCreate?: ClassificationCreateOrConnectWithoutTestsInput
    connect?: ClassificationWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutTestInput = {
    create?: XOR<AnswerCreateWithoutTestInput, AnswerUncheckedCreateWithoutTestInput> | AnswerCreateWithoutTestInput[] | AnswerUncheckedCreateWithoutTestInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutTestInput | AnswerCreateOrConnectWithoutTestInput[]
    createMany?: AnswerCreateManyTestInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<AnswerCreateWithoutTestInput, AnswerUncheckedCreateWithoutTestInput> | AnswerCreateWithoutTestInput[] | AnswerUncheckedCreateWithoutTestInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutTestInput | AnswerCreateOrConnectWithoutTestInput[]
    createMany?: AnswerCreateManyTestInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type TemplateTestUpdateOneRequiredWithoutTestsNestedInput = {
    create?: XOR<TemplateTestCreateWithoutTestsInput, TemplateTestUncheckedCreateWithoutTestsInput>
    connectOrCreate?: TemplateTestCreateOrConnectWithoutTestsInput
    upsert?: TemplateTestUpsertWithoutTestsInput
    connect?: TemplateTestWhereUniqueInput
    update?: XOR<XOR<TemplateTestUpdateToOneWithWhereWithoutTestsInput, TemplateTestUpdateWithoutTestsInput>, TemplateTestUncheckedUpdateWithoutTestsInput>
  }

  export type ClassificationUpdateOneRequiredWithoutTestsNestedInput = {
    create?: XOR<ClassificationCreateWithoutTestsInput, ClassificationUncheckedCreateWithoutTestsInput>
    connectOrCreate?: ClassificationCreateOrConnectWithoutTestsInput
    upsert?: ClassificationUpsertWithoutTestsInput
    connect?: ClassificationWhereUniqueInput
    update?: XOR<XOR<ClassificationUpdateToOneWithWhereWithoutTestsInput, ClassificationUpdateWithoutTestsInput>, ClassificationUncheckedUpdateWithoutTestsInput>
  }

  export type AnswerUpdateManyWithoutTestNestedInput = {
    create?: XOR<AnswerCreateWithoutTestInput, AnswerUncheckedCreateWithoutTestInput> | AnswerCreateWithoutTestInput[] | AnswerUncheckedCreateWithoutTestInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutTestInput | AnswerCreateOrConnectWithoutTestInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutTestInput | AnswerUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: AnswerCreateManyTestInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutTestInput | AnswerUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutTestInput | AnswerUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<AnswerCreateWithoutTestInput, AnswerUncheckedCreateWithoutTestInput> | AnswerCreateWithoutTestInput[] | AnswerUncheckedCreateWithoutTestInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutTestInput | AnswerCreateOrConnectWithoutTestInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutTestInput | AnswerUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: AnswerCreateManyTestInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutTestInput | AnswerUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutTestInput | AnswerUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type TestCreateNestedOneWithoutAnswersInput = {
    create?: XOR<TestCreateWithoutAnswersInput, TestUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: TestCreateOrConnectWithoutAnswersInput
    connect?: TestWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type AlternativeCreateNestedOneWithoutAnswersInput = {
    create?: XOR<AlternativeCreateWithoutAnswersInput, AlternativeUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AlternativeCreateOrConnectWithoutAnswersInput
    connect?: AlternativeWhereUniqueInput
  }

  export type TestUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<TestCreateWithoutAnswersInput, TestUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: TestCreateOrConnectWithoutAnswersInput
    upsert?: TestUpsertWithoutAnswersInput
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutAnswersInput, TestUpdateWithoutAnswersInput>, TestUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type AlternativeUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<AlternativeCreateWithoutAnswersInput, AlternativeUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AlternativeCreateOrConnectWithoutAnswersInput
    upsert?: AlternativeUpsertWithoutAnswersInput
    connect?: AlternativeWhereUniqueInput
    update?: XOR<XOR<AlternativeUpdateToOneWithWhereWithoutAnswersInput, AlternativeUpdateWithoutAnswersInput>, AlternativeUncheckedUpdateWithoutAnswersInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type QuestionCreateWithoutTemplateTestInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutTemplateTestInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutTemplateTestInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTemplateTestInput, QuestionUncheckedCreateWithoutTemplateTestInput>
  }

  export type QuestionCreateManyTemplateTestInputEnvelope = {
    data: QuestionCreateManyTemplateTestInput | QuestionCreateManyTemplateTestInput[]
    skipDuplicates?: boolean
  }

  export type AlternativeCreateWithoutTemplateTestInput = {
    id?: string
    content: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerCreateNestedManyWithoutAlternativeInput
  }

  export type AlternativeUncheckedCreateWithoutTemplateTestInput = {
    id?: string
    content: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutAlternativeInput
  }

  export type AlternativeCreateOrConnectWithoutTemplateTestInput = {
    where: AlternativeWhereUniqueInput
    create: XOR<AlternativeCreateWithoutTemplateTestInput, AlternativeUncheckedCreateWithoutTemplateTestInput>
  }

  export type AlternativeCreateManyTemplateTestInputEnvelope = {
    data: AlternativeCreateManyTemplateTestInput | AlternativeCreateManyTemplateTestInput[]
    skipDuplicates?: boolean
  }

  export type ClassificationCreateWithoutTemplateTestInput = {
    id?: string
    minScore: number
    maxScore: number
    interpretation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tests?: TestCreateNestedManyWithoutClassificationInput
  }

  export type ClassificationUncheckedCreateWithoutTemplateTestInput = {
    id?: string
    minScore: number
    maxScore: number
    interpretation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tests?: TestUncheckedCreateNestedManyWithoutClassificationInput
  }

  export type ClassificationCreateOrConnectWithoutTemplateTestInput = {
    where: ClassificationWhereUniqueInput
    create: XOR<ClassificationCreateWithoutTemplateTestInput, ClassificationUncheckedCreateWithoutTemplateTestInput>
  }

  export type ClassificationCreateManyTemplateTestInputEnvelope = {
    data: ClassificationCreateManyTemplateTestInput | ClassificationCreateManyTemplateTestInput[]
    skipDuplicates?: boolean
  }

  export type TestCreateWithoutTemplateTestInput = {
    id?: string
    score: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    classification: ClassificationCreateNestedOneWithoutTestsInput
    answers?: AnswerCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutTemplateTestInput = {
    id?: string
    score: number
    classificationId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutTemplateTestInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutTemplateTestInput, TestUncheckedCreateWithoutTemplateTestInput>
  }

  export type TestCreateManyTemplateTestInputEnvelope = {
    data: TestCreateManyTemplateTestInput | TestCreateManyTemplateTestInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutTemplateTestInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutTemplateTestInput, QuestionUncheckedUpdateWithoutTemplateTestInput>
    create: XOR<QuestionCreateWithoutTemplateTestInput, QuestionUncheckedCreateWithoutTemplateTestInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutTemplateTestInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutTemplateTestInput, QuestionUncheckedUpdateWithoutTemplateTestInput>
  }

  export type QuestionUpdateManyWithWhereWithoutTemplateTestInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutTemplateTestInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    templateTestId?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type AlternativeUpsertWithWhereUniqueWithoutTemplateTestInput = {
    where: AlternativeWhereUniqueInput
    update: XOR<AlternativeUpdateWithoutTemplateTestInput, AlternativeUncheckedUpdateWithoutTemplateTestInput>
    create: XOR<AlternativeCreateWithoutTemplateTestInput, AlternativeUncheckedCreateWithoutTemplateTestInput>
  }

  export type AlternativeUpdateWithWhereUniqueWithoutTemplateTestInput = {
    where: AlternativeWhereUniqueInput
    data: XOR<AlternativeUpdateWithoutTemplateTestInput, AlternativeUncheckedUpdateWithoutTemplateTestInput>
  }

  export type AlternativeUpdateManyWithWhereWithoutTemplateTestInput = {
    where: AlternativeScalarWhereInput
    data: XOR<AlternativeUpdateManyMutationInput, AlternativeUncheckedUpdateManyWithoutTemplateTestInput>
  }

  export type AlternativeScalarWhereInput = {
    AND?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
    OR?: AlternativeScalarWhereInput[]
    NOT?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
    id?: StringFilter<"Alternative"> | string
    templateTestId?: StringFilter<"Alternative"> | string
    content?: StringFilter<"Alternative"> | string
    value?: IntFilter<"Alternative"> | number
    createdAt?: DateTimeFilter<"Alternative"> | Date | string
    updatedAt?: DateTimeFilter<"Alternative"> | Date | string
  }

  export type ClassificationUpsertWithWhereUniqueWithoutTemplateTestInput = {
    where: ClassificationWhereUniqueInput
    update: XOR<ClassificationUpdateWithoutTemplateTestInput, ClassificationUncheckedUpdateWithoutTemplateTestInput>
    create: XOR<ClassificationCreateWithoutTemplateTestInput, ClassificationUncheckedCreateWithoutTemplateTestInput>
  }

  export type ClassificationUpdateWithWhereUniqueWithoutTemplateTestInput = {
    where: ClassificationWhereUniqueInput
    data: XOR<ClassificationUpdateWithoutTemplateTestInput, ClassificationUncheckedUpdateWithoutTemplateTestInput>
  }

  export type ClassificationUpdateManyWithWhereWithoutTemplateTestInput = {
    where: ClassificationScalarWhereInput
    data: XOR<ClassificationUpdateManyMutationInput, ClassificationUncheckedUpdateManyWithoutTemplateTestInput>
  }

  export type ClassificationScalarWhereInput = {
    AND?: ClassificationScalarWhereInput | ClassificationScalarWhereInput[]
    OR?: ClassificationScalarWhereInput[]
    NOT?: ClassificationScalarWhereInput | ClassificationScalarWhereInput[]
    id?: StringFilter<"Classification"> | string
    templateTestId?: StringFilter<"Classification"> | string
    minScore?: IntFilter<"Classification"> | number
    maxScore?: IntFilter<"Classification"> | number
    interpretation?: StringFilter<"Classification"> | string
    createdAt?: DateTimeFilter<"Classification"> | Date | string
    updatedAt?: DateTimeFilter<"Classification"> | Date | string
  }

  export type TestUpsertWithWhereUniqueWithoutTemplateTestInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutTemplateTestInput, TestUncheckedUpdateWithoutTemplateTestInput>
    create: XOR<TestCreateWithoutTemplateTestInput, TestUncheckedCreateWithoutTemplateTestInput>
  }

  export type TestUpdateWithWhereUniqueWithoutTemplateTestInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutTemplateTestInput, TestUncheckedUpdateWithoutTemplateTestInput>
  }

  export type TestUpdateManyWithWhereWithoutTemplateTestInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutTemplateTestInput>
  }

  export type TestScalarWhereInput = {
    AND?: TestScalarWhereInput | TestScalarWhereInput[]
    OR?: TestScalarWhereInput[]
    NOT?: TestScalarWhereInput | TestScalarWhereInput[]
    id?: StringFilter<"Test"> | string
    score?: IntFilter<"Test"> | number
    classificationId?: StringFilter<"Test"> | string
    templateTestId?: StringFilter<"Test"> | string
    userId?: StringFilter<"Test"> | string
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
  }

  export type TemplateTestCreateWithoutQuestionsInput = {
    id?: string
    name: string
    description: string
    author: string
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    alternatives?: AlternativeCreateNestedManyWithoutTemplateTestInput
    classifications?: ClassificationCreateNestedManyWithoutTemplateTestInput
    tests?: TestCreateNestedManyWithoutTemplateTestInput
  }

  export type TemplateTestUncheckedCreateWithoutQuestionsInput = {
    id?: string
    name: string
    description: string
    author: string
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    alternatives?: AlternativeUncheckedCreateNestedManyWithoutTemplateTestInput
    classifications?: ClassificationUncheckedCreateNestedManyWithoutTemplateTestInput
    tests?: TestUncheckedCreateNestedManyWithoutTemplateTestInput
  }

  export type TemplateTestCreateOrConnectWithoutQuestionsInput = {
    where: TemplateTestWhereUniqueInput
    create: XOR<TemplateTestCreateWithoutQuestionsInput, TemplateTestUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    test: TestCreateNestedOneWithoutAnswersInput
    alternative: AlternativeCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    testId: string
    alternativeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type TemplateTestUpsertWithoutQuestionsInput = {
    update: XOR<TemplateTestUpdateWithoutQuestionsInput, TemplateTestUncheckedUpdateWithoutQuestionsInput>
    create: XOR<TemplateTestCreateWithoutQuestionsInput, TemplateTestUncheckedCreateWithoutQuestionsInput>
    where?: TemplateTestWhereInput
  }

  export type TemplateTestUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: TemplateTestWhereInput
    data: XOR<TemplateTestUpdateWithoutQuestionsInput, TemplateTestUncheckedUpdateWithoutQuestionsInput>
  }

  export type TemplateTestUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alternatives?: AlternativeUpdateManyWithoutTemplateTestNestedInput
    classifications?: ClassificationUpdateManyWithoutTemplateTestNestedInput
    tests?: TestUpdateManyWithoutTemplateTestNestedInput
  }

  export type TemplateTestUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alternatives?: AlternativeUncheckedUpdateManyWithoutTemplateTestNestedInput
    classifications?: ClassificationUncheckedUpdateManyWithoutTemplateTestNestedInput
    tests?: TestUncheckedUpdateManyWithoutTemplateTestNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    testId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    alternativeId?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
  }

  export type TemplateTestCreateWithoutAlternativesInput = {
    id?: string
    name: string
    description: string
    author: string
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutTemplateTestInput
    classifications?: ClassificationCreateNestedManyWithoutTemplateTestInput
    tests?: TestCreateNestedManyWithoutTemplateTestInput
  }

  export type TemplateTestUncheckedCreateWithoutAlternativesInput = {
    id?: string
    name: string
    description: string
    author: string
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutTemplateTestInput
    classifications?: ClassificationUncheckedCreateNestedManyWithoutTemplateTestInput
    tests?: TestUncheckedCreateNestedManyWithoutTemplateTestInput
  }

  export type TemplateTestCreateOrConnectWithoutAlternativesInput = {
    where: TemplateTestWhereUniqueInput
    create: XOR<TemplateTestCreateWithoutAlternativesInput, TemplateTestUncheckedCreateWithoutAlternativesInput>
  }

  export type AnswerCreateWithoutAlternativeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    test: TestCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutAlternativeInput = {
    id?: string
    testId: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutAlternativeInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAlternativeInput, AnswerUncheckedCreateWithoutAlternativeInput>
  }

  export type AnswerCreateManyAlternativeInputEnvelope = {
    data: AnswerCreateManyAlternativeInput | AnswerCreateManyAlternativeInput[]
    skipDuplicates?: boolean
  }

  export type TemplateTestUpsertWithoutAlternativesInput = {
    update: XOR<TemplateTestUpdateWithoutAlternativesInput, TemplateTestUncheckedUpdateWithoutAlternativesInput>
    create: XOR<TemplateTestCreateWithoutAlternativesInput, TemplateTestUncheckedCreateWithoutAlternativesInput>
    where?: TemplateTestWhereInput
  }

  export type TemplateTestUpdateToOneWithWhereWithoutAlternativesInput = {
    where?: TemplateTestWhereInput
    data: XOR<TemplateTestUpdateWithoutAlternativesInput, TemplateTestUncheckedUpdateWithoutAlternativesInput>
  }

  export type TemplateTestUpdateWithoutAlternativesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutTemplateTestNestedInput
    classifications?: ClassificationUpdateManyWithoutTemplateTestNestedInput
    tests?: TestUpdateManyWithoutTemplateTestNestedInput
  }

  export type TemplateTestUncheckedUpdateWithoutAlternativesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutTemplateTestNestedInput
    classifications?: ClassificationUncheckedUpdateManyWithoutTemplateTestNestedInput
    tests?: TestUncheckedUpdateManyWithoutTemplateTestNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutAlternativeInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutAlternativeInput, AnswerUncheckedUpdateWithoutAlternativeInput>
    create: XOR<AnswerCreateWithoutAlternativeInput, AnswerUncheckedCreateWithoutAlternativeInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutAlternativeInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutAlternativeInput, AnswerUncheckedUpdateWithoutAlternativeInput>
  }

  export type AnswerUpdateManyWithWhereWithoutAlternativeInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutAlternativeInput>
  }

  export type TemplateTestCreateWithoutClassificationsInput = {
    id?: string
    name: string
    description: string
    author: string
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutTemplateTestInput
    alternatives?: AlternativeCreateNestedManyWithoutTemplateTestInput
    tests?: TestCreateNestedManyWithoutTemplateTestInput
  }

  export type TemplateTestUncheckedCreateWithoutClassificationsInput = {
    id?: string
    name: string
    description: string
    author: string
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutTemplateTestInput
    alternatives?: AlternativeUncheckedCreateNestedManyWithoutTemplateTestInput
    tests?: TestUncheckedCreateNestedManyWithoutTemplateTestInput
  }

  export type TemplateTestCreateOrConnectWithoutClassificationsInput = {
    where: TemplateTestWhereUniqueInput
    create: XOR<TemplateTestCreateWithoutClassificationsInput, TemplateTestUncheckedCreateWithoutClassificationsInput>
  }

  export type TestCreateWithoutClassificationInput = {
    id?: string
    score: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    templateTest: TemplateTestCreateNestedOneWithoutTestsInput
    answers?: AnswerCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutClassificationInput = {
    id?: string
    score: number
    templateTestId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutClassificationInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutClassificationInput, TestUncheckedCreateWithoutClassificationInput>
  }

  export type TestCreateManyClassificationInputEnvelope = {
    data: TestCreateManyClassificationInput | TestCreateManyClassificationInput[]
    skipDuplicates?: boolean
  }

  export type TemplateTestUpsertWithoutClassificationsInput = {
    update: XOR<TemplateTestUpdateWithoutClassificationsInput, TemplateTestUncheckedUpdateWithoutClassificationsInput>
    create: XOR<TemplateTestCreateWithoutClassificationsInput, TemplateTestUncheckedCreateWithoutClassificationsInput>
    where?: TemplateTestWhereInput
  }

  export type TemplateTestUpdateToOneWithWhereWithoutClassificationsInput = {
    where?: TemplateTestWhereInput
    data: XOR<TemplateTestUpdateWithoutClassificationsInput, TemplateTestUncheckedUpdateWithoutClassificationsInput>
  }

  export type TemplateTestUpdateWithoutClassificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutTemplateTestNestedInput
    alternatives?: AlternativeUpdateManyWithoutTemplateTestNestedInput
    tests?: TestUpdateManyWithoutTemplateTestNestedInput
  }

  export type TemplateTestUncheckedUpdateWithoutClassificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutTemplateTestNestedInput
    alternatives?: AlternativeUncheckedUpdateManyWithoutTemplateTestNestedInput
    tests?: TestUncheckedUpdateManyWithoutTemplateTestNestedInput
  }

  export type TestUpsertWithWhereUniqueWithoutClassificationInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutClassificationInput, TestUncheckedUpdateWithoutClassificationInput>
    create: XOR<TestCreateWithoutClassificationInput, TestUncheckedCreateWithoutClassificationInput>
  }

  export type TestUpdateWithWhereUniqueWithoutClassificationInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutClassificationInput, TestUncheckedUpdateWithoutClassificationInput>
  }

  export type TestUpdateManyWithWhereWithoutClassificationInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutClassificationInput>
  }

  export type TemplateTestCreateWithoutTestsInput = {
    id?: string
    name: string
    description: string
    author: string
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutTemplateTestInput
    alternatives?: AlternativeCreateNestedManyWithoutTemplateTestInput
    classifications?: ClassificationCreateNestedManyWithoutTemplateTestInput
  }

  export type TemplateTestUncheckedCreateWithoutTestsInput = {
    id?: string
    name: string
    description: string
    author: string
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutTemplateTestInput
    alternatives?: AlternativeUncheckedCreateNestedManyWithoutTemplateTestInput
    classifications?: ClassificationUncheckedCreateNestedManyWithoutTemplateTestInput
  }

  export type TemplateTestCreateOrConnectWithoutTestsInput = {
    where: TemplateTestWhereUniqueInput
    create: XOR<TemplateTestCreateWithoutTestsInput, TemplateTestUncheckedCreateWithoutTestsInput>
  }

  export type ClassificationCreateWithoutTestsInput = {
    id?: string
    minScore: number
    maxScore: number
    interpretation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    templateTest: TemplateTestCreateNestedOneWithoutClassificationsInput
  }

  export type ClassificationUncheckedCreateWithoutTestsInput = {
    id?: string
    templateTestId: string
    minScore: number
    maxScore: number
    interpretation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassificationCreateOrConnectWithoutTestsInput = {
    where: ClassificationWhereUniqueInput
    create: XOR<ClassificationCreateWithoutTestsInput, ClassificationUncheckedCreateWithoutTestsInput>
  }

  export type AnswerCreateWithoutTestInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
    alternative: AlternativeCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutTestInput = {
    id?: string
    questionId: string
    alternativeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutTestInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutTestInput, AnswerUncheckedCreateWithoutTestInput>
  }

  export type AnswerCreateManyTestInputEnvelope = {
    data: AnswerCreateManyTestInput | AnswerCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type TemplateTestUpsertWithoutTestsInput = {
    update: XOR<TemplateTestUpdateWithoutTestsInput, TemplateTestUncheckedUpdateWithoutTestsInput>
    create: XOR<TemplateTestCreateWithoutTestsInput, TemplateTestUncheckedCreateWithoutTestsInput>
    where?: TemplateTestWhereInput
  }

  export type TemplateTestUpdateToOneWithWhereWithoutTestsInput = {
    where?: TemplateTestWhereInput
    data: XOR<TemplateTestUpdateWithoutTestsInput, TemplateTestUncheckedUpdateWithoutTestsInput>
  }

  export type TemplateTestUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutTemplateTestNestedInput
    alternatives?: AlternativeUpdateManyWithoutTemplateTestNestedInput
    classifications?: ClassificationUpdateManyWithoutTemplateTestNestedInput
  }

  export type TemplateTestUncheckedUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutTemplateTestNestedInput
    alternatives?: AlternativeUncheckedUpdateManyWithoutTemplateTestNestedInput
    classifications?: ClassificationUncheckedUpdateManyWithoutTemplateTestNestedInput
  }

  export type ClassificationUpsertWithoutTestsInput = {
    update: XOR<ClassificationUpdateWithoutTestsInput, ClassificationUncheckedUpdateWithoutTestsInput>
    create: XOR<ClassificationCreateWithoutTestsInput, ClassificationUncheckedCreateWithoutTestsInput>
    where?: ClassificationWhereInput
  }

  export type ClassificationUpdateToOneWithWhereWithoutTestsInput = {
    where?: ClassificationWhereInput
    data: XOR<ClassificationUpdateWithoutTestsInput, ClassificationUncheckedUpdateWithoutTestsInput>
  }

  export type ClassificationUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    minScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateTest?: TemplateTestUpdateOneRequiredWithoutClassificationsNestedInput
  }

  export type ClassificationUncheckedUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateTestId?: StringFieldUpdateOperationsInput | string
    minScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUpsertWithWhereUniqueWithoutTestInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutTestInput, AnswerUncheckedUpdateWithoutTestInput>
    create: XOR<AnswerCreateWithoutTestInput, AnswerUncheckedCreateWithoutTestInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutTestInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutTestInput, AnswerUncheckedUpdateWithoutTestInput>
  }

  export type AnswerUpdateManyWithWhereWithoutTestInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutTestInput>
  }

  export type TestCreateWithoutAnswersInput = {
    id?: string
    score: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    templateTest: TemplateTestCreateNestedOneWithoutTestsInput
    classification: ClassificationCreateNestedOneWithoutTestsInput
  }

  export type TestUncheckedCreateWithoutAnswersInput = {
    id?: string
    score: number
    classificationId: string
    templateTestId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCreateOrConnectWithoutAnswersInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutAnswersInput, TestUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    templateTest: TemplateTestCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    templateTestId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type AlternativeCreateWithoutAnswersInput = {
    id?: string
    content: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
    templateTest: TemplateTestCreateNestedOneWithoutAlternativesInput
  }

  export type AlternativeUncheckedCreateWithoutAnswersInput = {
    id?: string
    templateTestId: string
    content: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlternativeCreateOrConnectWithoutAnswersInput = {
    where: AlternativeWhereUniqueInput
    create: XOR<AlternativeCreateWithoutAnswersInput, AlternativeUncheckedCreateWithoutAnswersInput>
  }

  export type TestUpsertWithoutAnswersInput = {
    update: XOR<TestUpdateWithoutAnswersInput, TestUncheckedUpdateWithoutAnswersInput>
    create: XOR<TestCreateWithoutAnswersInput, TestUncheckedCreateWithoutAnswersInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutAnswersInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutAnswersInput, TestUncheckedUpdateWithoutAnswersInput>
  }

  export type TestUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateTest?: TemplateTestUpdateOneRequiredWithoutTestsNestedInput
    classification?: ClassificationUpdateOneRequiredWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    classificationId?: StringFieldUpdateOperationsInput | string
    templateTestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateTest?: TemplateTestUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateTestId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlternativeUpsertWithoutAnswersInput = {
    update: XOR<AlternativeUpdateWithoutAnswersInput, AlternativeUncheckedUpdateWithoutAnswersInput>
    create: XOR<AlternativeCreateWithoutAnswersInput, AlternativeUncheckedCreateWithoutAnswersInput>
    where?: AlternativeWhereInput
  }

  export type AlternativeUpdateToOneWithWhereWithoutAnswersInput = {
    where?: AlternativeWhereInput
    data: XOR<AlternativeUpdateWithoutAnswersInput, AlternativeUncheckedUpdateWithoutAnswersInput>
  }

  export type AlternativeUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateTest?: TemplateTestUpdateOneRequiredWithoutAlternativesNestedInput
  }

  export type AlternativeUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateTestId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyTemplateTestInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlternativeCreateManyTemplateTestInput = {
    id?: string
    content: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassificationCreateManyTemplateTestInput = {
    id?: string
    minScore: number
    maxScore: number
    interpretation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCreateManyTemplateTestInput = {
    id?: string
    score: number
    classificationId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutTemplateTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutTemplateTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutTemplateTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlternativeUpdateWithoutTemplateTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUpdateManyWithoutAlternativeNestedInput
  }

  export type AlternativeUncheckedUpdateWithoutTemplateTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutAlternativeNestedInput
  }

  export type AlternativeUncheckedUpdateManyWithoutTemplateTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassificationUpdateWithoutTemplateTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    minScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tests?: TestUpdateManyWithoutClassificationNestedInput
  }

  export type ClassificationUncheckedUpdateWithoutTemplateTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    minScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tests?: TestUncheckedUpdateManyWithoutClassificationNestedInput
  }

  export type ClassificationUncheckedUpdateManyWithoutTemplateTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    minScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUpdateWithoutTemplateTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: ClassificationUpdateOneRequiredWithoutTestsNestedInput
    answers?: AnswerUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutTemplateTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    classificationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateManyWithoutTemplateTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    classificationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    testId: string
    alternativeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutAnswersNestedInput
    alternative?: AlternativeUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    alternativeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    alternativeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyAlternativeInput = {
    id?: string
    testId: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateWithoutAlternativeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutAlternativeInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyWithoutAlternativeInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCreateManyClassificationInput = {
    id?: string
    score: number
    templateTestId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestUpdateWithoutClassificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateTest?: TemplateTestUpdateOneRequiredWithoutTestsNestedInput
    answers?: AnswerUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutClassificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    templateTestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateManyWithoutClassificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    templateTestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyTestInput = {
    id?: string
    questionId: string
    alternativeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    alternative?: AlternativeUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    alternativeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    alternativeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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