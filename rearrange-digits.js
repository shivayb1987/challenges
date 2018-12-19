/* Given a number of multiple digits, write an algorithm to squeeze 0s to the right and all non-zero digits to the left
  For ex: Given 1020030450, output should be 1234500000
*/

const assert = require('assert')
function rearrange (num) {
  let result = 0
  for (let i=0; num > 0; i++) {
    let rem = num % 10
    if (rem > 0) {
      result += (rem * Math.pow(10, i))
    } else {
      result *= 10
    }
    num = Math.floor(num / 10)
  }
  return result
}

assert.equal(rearrange(1020030450), 1234500000)
assert.equal(rearrange(1020630405), 1263450000)
