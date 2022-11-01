const mes = x => {
    const meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]

    return meses[x-1]
}

console.log(mes(1))