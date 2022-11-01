const simboloMais = x => {
    let mais = ""

    for(let i=0;i<x;i++)
        mais += "+"

    return mais
}

console.log(simboloMais(4))