function progAritm(numTermos, primeiro, razao){
    let atual = primeiro;
    let soma = primeiro;
    let termos = [primeiro]

    for(let i=1;i<numTermos;i++){
        atual = termos[termos.length-1] + razao;
        soma += atual;
        termos.push(atual);
    }

    console.log("Termos: " + termos + "\nSoma: " + soma);
}

function progGeo(numTermos, primeiro, razao){
    let atual = primeiro;
    let soma = primeiro;
    let termos = [primeiro]

    for(let i=1;i<numTermos;i++){
        atual = termos[termos.length-1] * razao;
        soma += atual;
        termos.push(atual);
    }

    console.log("Termos: " + termos + "\nSoma: " + soma);
}