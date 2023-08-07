/**
 * const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
 * type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
 * 思路：TupleToObject需要将元组类型转化为键值相同的对象
 * - keyof any  => string | number | symbol
 * - 通过下标来访问数组中的元素
 */

type TupleToObject<T extends readonly (keyof any)[]> = {
  [P in T[number]]: P
}