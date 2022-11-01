const objetoParaArray = x => {
    let chaves = Object.keys(x)
    let retorno = []

    for(let i in chaves){
        let aux = []
        aux.push(chaves[i], x[chaves[i]])
        retorno.push(aux)
    }

    return retorno
}

console.log(objetoParaArray({codigo: 11111, preco: 12000}))