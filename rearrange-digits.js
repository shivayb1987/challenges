/*
  Given a number of multiple digits,
  write an algorithm to squeeze 0s to the right and all non-zero digits to the left.
  constraint: It should do it in O(n)
  Example: Given 1020030450, output should be 1234500000
*/

const assert = require('assert')
function rearrange (num) {
  let result = 0
  let multilpy = 1
  for (let i = 0; num > 0; i++) {
    let rem = num % 10
    if (rem > 0) {
      result += (rem * multilpy)
    } else {
      result *= 10
    }
    multilpy *= 10
    num = Math.floor(num / 10)
  }
  return result
}

assert.equal(rearrange(1), 1)
assert.equal(rearrange(11), 11)
assert.equal(rearrange(101), 110)
assert.equal(rearrange(1010), 1100)
assert.equal(rearrange(10101), 11100)
assert.equal(rearrange(101010), 111000)
assert.equal(rearrange(111000), 111000)
assert.equal(rearrange(1020030450), 1234500000)
assert.equal(rearrange(1020630405), 1263450000)
