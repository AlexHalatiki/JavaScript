const filtrarPorQuantidadeDeDigitos = (x,y) => {
    let vet = []

    x.forEach(element => {
        if(String(element).length == y)
            vet.push(element)
    });

    return vet
}

console.log(filtrarPorQuantidadeDeDigitos([38,2,365,10,125,11],2))