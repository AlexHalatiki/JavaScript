const receberSomenteOsParesDeIndicesPares = x => {
    let vet = []

    for(let i=0;i<x.length;i++)
        if(x[i] % 2 == 0 && i % 2 == 0)
            vet.push(x[i])

    return vet
}

console.log(receberSomenteOsParesDeIndicesPares([10,70,22,43]))