

type U = { a: 1 } | {
   a: 1,
   b: 1
}
let aa: U = { a: 1, b: 1 }
let k = Object.getOwnPropertyNames<U>(aa)
type Any = any
let ks = Object.getOwnPropertyNames(a)
type AE = { a: 1, b?: 1 }
let ae: AE = { a: 1, b: 1 }
let ks1 = Object.getOwnPropertyNames<AE>(ae)
console.log(ks);
