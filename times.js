let times = [
    {
        nome: "Brasil",
        goleiro: "Willian",
        alaDireita: "Dyego",
        alaEsquerda: "Keel",
        pivô: "Ferrão",
        fixo: "Rodrigo",
        técnico: "Marquinhos Xavier",
        vitórias: 57,
        derrotas: 4,
    },
{
    nome: "França",
    goleiro: "Francis",
    alaDireita: "Nélson",
    alaEsquerda: "Amim",
    pivô: "Youness",
    fixo: "Thibaut",
    técnico: "Raphael",
    vitórias: 8,
    derrotas: 0,
},
{
    nome: "Argentina",
    goleiro: "Nico",
    alaDireita: "Lucas",
    alaEsquerda: "Andréz",
    pivô: "Matías",
    fixo: "Agustín",
    técnico: "Lucuix", 
    vitórias: 48,
    derrotas: 9,
},
{
    nome: "Alemanha",
    goleiro: "Aykut",
    alaDireita: "Michael",
    alaEsquerda: "Fabian",
    pivô: "Neves",
    fixo: "Gabriel",
    técnico: "Julian",
    vitórias: 66,
    derrotas: 7,
},
{
    nome: "Espanha",
    goleiro: "Juanjo",
    alaDireita: "Torras",
    alaEsquerda: "José",
    pivô: "Ortiz",
    fixo: "Herrero",
    técnico: "Luis",
    vitórias: 24,
    derrotas: 19,
}
];

function verTimes(){
    times.forEach((time) => {
        console.log(time.nome + "-" + time.goleiro + "(goleiro)" + time.alaDireita + "(alaDireita)" + time.alaEsquerda + "(alaEquerda)" + time.pivô + "(pivô)" + time.fixo + "(fixo)" + time.técnico + "(técnico)" + time.vitórias + "(vitórias)" + time.derrotas + "(derrotas)")

    });
}