var factorial = 1
var numero = 10
while (true) {
    factorial *= numero; numero--
    if (numero === 1) 
    break
}
console.log(factorial)