const filtrarNumeros = x => {
    let nums = []

    for(let y in x)
        if(typeof x[y] === 'number')
            nums.push(x[y])

    return nums
}

console.log(filtrarNumeros(["a", "c"]))