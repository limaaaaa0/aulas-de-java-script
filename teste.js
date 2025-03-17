let custos = [200, 1400, 720, 450];
let contador = 0;
let somatorio = 0;
while( contador < custos.length){
    somatorio = somatorio + custos[contador];
    contador = contador + 1;
}
console.log("O seu custo mensal é " + somatorio);

let ganhos = [300, 1100, 540, 1715];
let contadorSalario = 0;
let somatorioSalario = 0;
while( contadorSalario < ganhos.length){
    somatorioSalario = somatorioSalario + ganhos[contadorSalario];
    contadorSalario = contadorSalario + 1;
}
console.log("O seu ganho mensal é " + somatorioSalario);

let sub = [2770, 3655];
let contadorSaldo = 3655;
let diminuicao = 2770;
while( contadorSaldo < custos.length){
    diminuicao = diminuicao - custos[contadorSaldo];
    contadorSaldo = contadorSaldo + 1;
}
console.log("O seu custo mensal é " - diminuicao);