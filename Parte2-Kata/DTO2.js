const { Console } = require("console")

function DTO (a){
    return Number(a.toString(8))
}
module.exports = DTO
var a = 1231231
console.log("Su decimal ", a, " en Octal es: ", DTO(a));