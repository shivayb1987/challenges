/* Given a number, reverse the number without using array or string APIs.
  Ex: Given 123, output should be 321
*/

const assert = require('assert')

function reverse (num) {
  return recurse(num % 10, Math.floor(num / 10))
}

function recurse (result, num) {
  if (num === 0) {
    return result
  }
  return recurse((result * 10) + num % 10, Math.floor(num / 10))
}

assert.equal(reverse(1), 1)
assert.equal(reverse(12), 21)
assert.equal(reverse(123), 321)
assert.equal(reverse(1234), 4321)
assert.equal(reverse(12345), 54321)
assert.equal(reverse(123456), 654321)
assert.equal(reverse(123456789), 987654321)
