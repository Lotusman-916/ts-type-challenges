/**
 * example:
 * 假如我们有一个Promise对象，这个 Promise 对象会返回一个类型。
 * 在TS中,我们用 Promise中的T来描述这个Promise返回的类型。请你实现一个类型，可以获取这个类型。
 * type ExampleType = Promise<string>
 * type Result = MyAwaited<ExampleType> // string
 */

type Thenable<T> = {
  then: (onfulfilled: (arg: T) => unknown) => unknown;
}

type MyAwaited<T extends Thenable<any> | Promise<any>> = T extends Promise<infer Inner>
? Inner extends Promise<any> ? MyAwaited<Inner> : Inner
: T extends Thenable<infer U> ? U : false

//  type test
//  type j = keyof 