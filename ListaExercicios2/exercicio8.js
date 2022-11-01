const entre = (numero, minimo, maximo, inclusivo = false) => {
    if(inclusivo){
        return numero >= minimo && numero <= maximo
    }

    return numero > minimo && numero < maximo
}

console.log(entre(3, 3, 150, true))