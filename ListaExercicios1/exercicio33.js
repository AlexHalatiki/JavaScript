let vetorInteiro = [1,2,3];
let vetorString = ["1","2","3"];
let vetorDouble = [1.0,2.0,3.0];

let resultado = vetorInteiro.concat(vetorString).concat(vetorDouble);
let resultado2 = vetorInteiro.concat(vetorString,vetorDouble);

for(x in resultado){
    console.log(resultado[x]);
}

for(x in resultado2){
    console.log(resultado2[x]);
}
