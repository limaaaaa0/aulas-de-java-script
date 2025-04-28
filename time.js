let Times = require("./dados.json")
function verTimes (){
    Times.forEach((Time) => {
        console.log(Time.nome + "-" +
         Time.goleiro + "(goleiro)," + 
         Time.AlaDireita + "(AlaDireita)," + 
         Time.AlaEsquerda + "(AlaEsquerda)," + 
         Time.pivo + "(pivo)," + 
         Time.fixo + "(fixo)," +
          Time.tecnico + "(tecnico)," + 
          Time.vitorias + "(vitorias)," + 
          Time.derrotas + "(derrotas)")
    });
}
function criarArquivo(){
    let dadosEmTexto = JSON.stringify(Times);
    console.log(dadosEmTexto);
  const fs = require("fs")
  fs.writeFileSync("dados.json", dadosEmTexto);
  console.log("Arquivo criado")
}

function marcarJogos(timeA, timeB, data,horario,estadio, cidade){
    let jogos = require("./jogos.json");
    jogo={
     timeA: timeA,
     timeB: timeB,
     data: data,
     horario: horario,
     estadio: estadio,
     cidade: cidade
    }
    jogos.push(jogo);
    jogosJson = JSON.stringify(jogos);
    const fs = require('fs');
    fs.writeFileSync("jogos.json",jogosJson);
 }

//criarArquivo();

verTimes();
//marcarJogos("Palmeiras", "Santos", "26/5/2025", 16, 'Allians parque', 'São paulo')

function mostrarJogos(){
    let jogos= require("./jogos.json")
    jogos.forEach((jogo )=>{
        console.log (jogo.timeA + " x " + jogo.timeB +  " Dia : " +jogo.data + " Horario : " + jogo.horario + " Estadio : " + jogo.estadio + " Cidade : " + jogo.cidade)
    }
)
}
mostrarJogos();