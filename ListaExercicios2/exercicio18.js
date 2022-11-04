const soma = x => {
    let soma = 0;

    for(let i in x)
        soma += x[i]

    return soma;
}

console.log(soma([15,15,15,15]))