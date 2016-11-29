// hello-knex-8.js
"use strict"
const knex = require("./db");

if(!process.argv[2]){
  console.log("usage: node hello-knex-8.js <nome>");
  process.exit(0);
}

let q = "insert into convidado (nomeconvidado) values (:nome)";
let p = {
  nome: process.argv[2]
};

knex.raw(q,p).then(() => {
  // você pode encadear consultas assim
  knex.raw("select * from convidado").then((ret) => {
    let i = ret.length;
    while(i--){
      console.log(ret[i]);
    }
    process.exit(0);
  });
});
