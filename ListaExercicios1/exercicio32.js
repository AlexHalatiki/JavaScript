function media(vetor){
    let soma = 0;

    for(let i=0;i<vetor.length;i++)
        soma += vetor[i];

    console.log("Média dos valores do vetor: " + soma / vetor.length);
}