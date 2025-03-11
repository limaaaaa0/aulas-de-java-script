// LISTAS
// LISTAS DE STRINGS:
// ÌNDICES:         0        1        2          3           4 
const lanches = ["x-egg", "x-ovo", "x-bacon", "x-tudo", "x-frango"];
// LISTAS DE NUMBER:
const precos = [ 12, 15, 15, 20, 12];
console.log(lanches);
console.log(precos);
// ACESSAR UM ITEM ESPECÍFIO DA LISTA: 
// x-egg R$12,00
console.log(lanches[0] + " - R$ " + precos [0]);
// x-ovo R$15,00
console.log(lanches[1] + " - R$ " + precos [1]);
// x-bacon R$15,00
console.log(lanches[2] + " - R$ " + precos [2]);
// x-tudo R$20,00
console.log(lanches[3] + " - R$ " + precos [3]);
// x-frango R$12,00
console.log(lanches[4] + " - R$ " + precos [4]);

// ENCONTRAR TAMANHO DA LISTA:
const tamamnho = lanches.length
console.log(tamamnho);

