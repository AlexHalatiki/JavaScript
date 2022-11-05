const contarCaractere = (x,y) => {
    let contador = 0
    for(let i=0;i<y.length;i++)
        if(y[i] == x)
            contador++

    return contador
}

console.log(contarCaractere("r","A sorte favorece os audazes"))