## ts-type-challenges

类型体操

### 关键字

Ts 的型变

- 不变
  不变很好理解，即变量需要什么类型，就给它什么类型，例如：

```ts
const name: string = "卢卡斯";
const height: number = 200;
const isDisabled: boolean = true;

interface userInfo {
  name: string;
  age: number;
}
const user: userInfo = {
  name: "卢卡斯",
  age: 32,
};
```

- 协变
  再了解协变之前，我们需要知道集合的部分概念：
- 逆变
- 双变
