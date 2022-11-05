const inverso = x => {
    if(typeof x === 'boolean')
        return !x
    
    if(typeof x === 'number')
        return -x
    
    return 'boolean ou número esperados, mas o parâmetro é do tipo ' + typeof x
}

console.log(inverso(-2000))