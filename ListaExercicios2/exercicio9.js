const repete = (x, y) => {
    let vet = []

    for(let i=0;i<y;i++)
        vet.push(x)

    return vet
}

console.log(repete(7,3))