function funcao1(vetor, valor){
    let retorno = []

    for(x in vetor)
        retorno.push(vetor[x] * valor);

    return retorno;
}

function funcao2(vetor, valor){
    let retorno = []

    for(x in vetor)
        if(vetor[x] > 5)
            retorno.push(vetor[x] * valor);

    return retorno;
}