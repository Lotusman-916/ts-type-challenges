/**
 * example: 
 *  从联合类型 T 中排除 U 中的类型，来构造一个新的类型。
 *  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
 * idea:
 *  - 实现内置工具方法
 *  利用的ts的类型分发的特性，ts内部会对泛型的类型进行类型的分发
 */
type MyExclude<T, U> = T extends U ? never : T;