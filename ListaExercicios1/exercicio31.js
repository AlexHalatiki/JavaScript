function negativos(vetor){
    let negativos = 0;

    for(let i=0;i<vetor.length;i++)
        if(vetor[i] < 0)
            negativos++;

    console.log("Quantidade de negativos: " + negativos);
}