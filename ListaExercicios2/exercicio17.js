const anoBissexto = x => {
    if(x % 4 == 0 && x % 100 == 0 && x % 400 == 0 || x % 4 == 0 && x % 100 != 0)
        return true
    
    return false
}

console.log(anoBissexto(2020))