function percorreVetor(vetor){
    let fora = 0;
    let dentro = 0;

    for(let i=0;i<vetor.length;i++)
        if(vetor[i] < 10 || vetor[i] > 20)
            fora++;
        else
            dentro++;

    console.log("Dentro: " + dentro + "\nFora: " + fora);
}