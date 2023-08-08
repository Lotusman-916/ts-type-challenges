/**
 * example: 
 * 创建一个Length泛型，这个泛型接受一个只读的元组，返回这个元组的长度。
 * type tesla = ['tesla', 'model 3', 'model X', 'model Y']
 * type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
 * type teslaLength = Length<tesla>  // expected 4
 * type spaceXLength = Length<spaceX> // expected 5
 * idea: 
 * 方法一： 
 *  - 泛型接收一个只读的元组，readonly修饰，
 *  - 元组：特殊的数组，与数组的区别是元组中可以存放不同类型的元素
 *  ["tesla", 2 , true...]
 *  - 这里我们可以使用 any[] 或者 unknow 来修饰此元组
 *  - 返回改元组的长度，由于元组是特殊的数组，因而它也有length属性
 * 
 * 方法二: 
 * - 通过infer关键字来推断
 */

// 方法一：
// type Length<T extends readonly any[]> = T['length'];

// 方法二： 
type Length<T extends readonly any[]> = T extends { length : infer R } ? R : never;