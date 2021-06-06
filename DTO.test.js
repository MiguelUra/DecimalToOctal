
const OctalConverter = require('./DTO')


test('Probar la conversion de Decimal a Octal', () =>{
    var b = 14
    var c = 170
    expect(OctalConverter(b)).toBe(170)
})