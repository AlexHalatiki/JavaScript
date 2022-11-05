const receberMelhorEstudante = x => {
    let medias = []
    let aluno = {}

    for([chave,valor] of Object.entries(x)){
        let soma = 0
        valor.forEach(element => {
            soma += element
        });
        medias.push(soma / valor.length)
    }

    let maiorMedia = Math.max(...medias)

    for([chave,valor] of Object.entries(x)){
        let soma = 0
        valor.forEach(element => {
            soma += element
        });
        if(soma / valor.length == maiorMedia){
            aluno.nome = chave
            aluno.media = maiorMedia
        }
    }

    return aluno
}

console.log(receberMelhorEstudante({Joao: [8,7.6,8.9,6], Mariana: [9,6.6,7.9,8], Carla: [7,7,8,9]}))