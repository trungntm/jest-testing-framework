const { sum, sub }  = require('./math')

describe("Testing math", () => {
    test("Adding 1 + 1 equals 2", () => {
        expect(sum(1, 1)).toBe(2)
    })
    
    
})
test('Sub 1 - 1 equals 0', () => {
    expect(sub(1, 1)).toBe(0)
})