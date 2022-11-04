const contaPalavras = x => {
    x = x.trim()
    let palavras = 0

    for(let i=0;i<x.length;i++)
        if(x[i] === " ")
            palavras++

    return palavras + 1
}

console.log(contaPalavras("a d e a e"))