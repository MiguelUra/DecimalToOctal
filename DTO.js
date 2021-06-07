function OctalConverter(a){
    return Number(a.toString(8));
}
module.exports = OctalConverter

var a = 120
console.log(OctalConverter(a));