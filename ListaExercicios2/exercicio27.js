const inverter = x =>{
    let newObj = {}
    for(let [chave, valor] of Object.entries(x))
        newObj[valor] = chave

    return newObj
}

console.log(inverter({a: 1, b: 2, c: 3}))

