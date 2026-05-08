// 1.K extends keyof T ensures K is a valid key of T
// [P in k] interates over the union type K
// T[P] gets the value type of the correesponding key
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
