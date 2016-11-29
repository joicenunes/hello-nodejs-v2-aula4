// hello-knex-4.js
// apagando pelo nome
"use strict"
const knex = require("./db");

if(!process.argv[2]){
  console.log("usage: node hello-knex-4.js <nome>");
  process.exit(0);
}

let nome = process.argv[2];

// atualizar convidados
knex("convidado").del().where({
  nomeconvidado:nome
}).then(() => {
  console.log(`convidado ${nome} removido`);
  process.exit(0);
}).catch((err) => {
  console.log(err);
  process.exit(1);
});
