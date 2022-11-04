const menorDoArray = x => {
    let menor = x[0]

    x.forEach(numero => {
        if(numero < menor)
            menor = numero
    })

    return menor
}

console.log(menorDoArray([10,5,35,65]))