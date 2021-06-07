const { expect } = require("@jest/globals")
const DTO = require("./DTO2")

test('Prueba de Decimal to Octal', () => {
    var a = 184128
    var b = 547500

    expect(DTO(a)).toBe(b)
})