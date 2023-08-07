/**
 * 思路: Readonly内置工具：是将传入的泛型参数全部转化为只读
 * - 在属性前通过readonly关键字进行修饰
 * - 通过keyof拿到所传入的泛型参数所有的key
 * - 在通过key去获取到泛型参数所有的属性值
 */

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
