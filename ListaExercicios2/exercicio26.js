const removerVogais = x => {
    let string = ""

    for(let i=0;i<x.length;i++)
        if(x[i] != 'a' && x[i] != 'e' && x[i] != 'i' && x[i] != 'o' && x[i] != 'u')
            string += x[i]

    return string
}

console.log(removerVogais("Fundamentos"))