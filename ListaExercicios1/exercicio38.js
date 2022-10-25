function impares(inicio = 0, fim = 100){
    let menor = inicio;
    let maior = fim;

    if(fim < menor){
        menor = fim;
        maior = inicio;
    }

    for(let i=menor;i<=maior;i++){
        if(i % 2 != 0)
            console.log(i);
    }
}