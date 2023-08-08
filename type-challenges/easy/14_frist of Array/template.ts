/**
 * example: 获取传入的数组元素的类型参数的第一个元素
 * type arr1 = ['a', 'b', 'c']
 * type arr2 = [3, 2, 1]
 * type head1 = First<arr1> // expected to be 'a'
 * type head2 = First<arr2> // expected to be 3
 *
 * 思路：
 *  方法一： 判断传入的泛型是否继承于空数组，如果是则返回 never 否则返回 数组的第一个元素
 *  方法二： 判断泛型T的length是否为0，为0返回never,否则返回 传入的泛型数组的第一个元素
 *  方法三： infer关键字
 */

// 方法一： 
// type First<T extends any[]> = T extends [] ?  never : T[0];

// 方法二：
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]; 

// 方法三
type First<T extends any[]> = T extends [infer U, ...infer args] ? U : never; 

