const buscarPalavrasSemelhantes = (x,y) => {
    let vetor = []

    for(let string of y)
        for(let c=0;c<string.length;c++)
            if(string[c] == x[0]){
                let achou = true;
                let indice = c
                for(let j=0;j<x.length;j++){
                    if(string[indice] != x[j]){
                        achou = false;
                        break;
                    }
                    indice++;
                }
                if(achou){
                    vetor.push(string)
                    break;
                }
            }

    return vetor
}

console.log(buscarPalavrasSemelhantes("python", ["javascript", "java"]))