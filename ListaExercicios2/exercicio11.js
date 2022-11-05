const primeiroEUltimo = x => {
    let vet = []

    vet.push(x[0])
    vet.push(x[x.length-1])

    return vet
}

console.log(primeiroEUltimo([-100, "aplicativo", 16]))