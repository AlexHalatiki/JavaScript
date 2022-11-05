const multiplicar = (x, y) => {
    if(x < 0 && y < 0)
        return 'Parâmetros devem ser maior que 0'
    
    let soma = 0

    for(let i=0;i<y;i++)
        soma += x

    return soma
}

console.log(multiplicar(2,7))