function notas(nota){
    if(nota < 38)
        return "Reprovado";
    
    proxMult = nota

    while(proxMult % 5 != 0){
        proxMult++;
    }

    if(proxMult - nota < 3)
        nota = proxMult;

    return nota
}

console.log(notas(84))
