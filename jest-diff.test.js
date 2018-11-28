const diff = require('jest-diff');

const a = {a: {b: {c: 5}}};
const b = {a: {b: {c: 6}}};

const result = diff(a, b);
test("no test", () => {
    expect('').toBeEmpty();
})
// print diff
console.log(`result : ${result}`);