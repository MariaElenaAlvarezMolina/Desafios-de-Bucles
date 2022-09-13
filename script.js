//Desafío 1: Imprimir impares 1-20
for(i=1; i<=20; i++) {
    if(i % 2 == 1) {
        console.log(i);
    }
}

//Desafío 2: Disminuir múltiplos de 3
for(i=100; i>=0; i--) {
    if(i % 3 == 0) {
        console.log(i);
    }
}

//Desafío 3: Imprime la secuencia
for(i=4; i>-4; i-=1.5) {
    if(i>-4) {
        console.log(i);
    }
}

//Desafío 4: Sigma
var sum = 0;
for(var i=1; i<101; i++) {
    sum += i;
}
console.log(sum);

//Desafío 5: Factorial
var product = 1;
for(var i=1; i<13; i++) {
    product *= i;
}
console.log(product);