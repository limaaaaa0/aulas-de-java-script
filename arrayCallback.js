// filter  ->
const numeros = [10, 50, 100, 202, 30]

const filtro = numeros.filter((n) => n < 100)
console.log(filtro)

lista = ["Uno", "Fusca", "Palio", "Celta", "Hb20"]

// sort  ->  ordena a lista em ordem alfabética
const ordenado = lista.sort()
console.log(ordenado)
const numerosordenados = numeros.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
})
console.log(numerosordenados)