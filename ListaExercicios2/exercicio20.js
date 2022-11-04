const media = x => {
    let soma = 0

    for(i in x)
        soma += x[i]

    return soma / x.length
}

console.log(media([0, 10]))