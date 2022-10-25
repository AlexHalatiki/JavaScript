function fatorial(numero){
    if(numero == 0)
        return 1;
    let fatorial = 1;
    for(let i=1;i<=numero;i++)
        fatorial *= i;
    
    return fatorial;
}

console.log(fatorial(5));