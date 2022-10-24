function floatFormatado(a){
    return "R$" + a.toFixed(2).toString().replace(".",",");
}

console.log(floatFormatado(0.30000032));