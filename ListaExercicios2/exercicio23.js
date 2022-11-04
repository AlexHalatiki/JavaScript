const aleatorio = x =>{
    let random = Math.floor(Math.random() * 10 + 1)

    if(x == random)
        return "Parabéns! O número sorteado foi " + random
    else
        return "Que pena! O número sorteado foi " + random
}

console.log(aleatorio(10))