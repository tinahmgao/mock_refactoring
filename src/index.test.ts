import statement from './index'
import invoices from './invoices.json'
import plays from './plays.json'

test('statement function should return the correct result', () => {
    const expectedOutput = `Statement for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $580.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n`
    const result = statement(invoices[0], plays)
    expect(result).toBe(expectedOutput)
})
