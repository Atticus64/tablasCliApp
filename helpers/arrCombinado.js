let arr = ['=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=']

let arrCombi = '';

for( let i = 0; i < arr.length; i++ ) `${ i % 2 == 0 ? arrCombi += arr[i] : arrCombi += arr[i].magenta }`

module.exports = arrCombi