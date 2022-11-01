const copiaObjeto = (x,y) => {
    let obj = {}
    let chaves = Object.keys(x)

    for(let i=0;i<chaves.length;i++)
        if(!(chaves[i] == y))
            obj[chaves[i]] = x[chaves[i]]

    return obj
}

let obj = {id: 20, nome: 'caneta', descricao: "Não preenchido"}
console.log(Object.is(copiaObjeto(obj)))