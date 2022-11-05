const segundoMaior = x =>{
    let maior = x[0]

    x.forEach(element => {
        if(element > maior)
            maior = element
    })

    x.forEach((element,index) => {
        if(element == maior)
            x.splice(index,1)
    })

    maior = x[0]

    x.forEach(element => {
        if(element > maior)
            maior = element
    })

    return maior
}

console.log(segundoMaior([12,16,1,5]))