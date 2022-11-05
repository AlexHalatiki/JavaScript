const despesasTotais = x => {
    let despesas = 0

    for(let i in x){
        despesas += x[i]['preco']
    }
    
    return despesas
}

console.log(despesasTotais([{nome: "Jornal online", categoria: "Informação", preco: 89.99}, {nome: "Cinema", categoria: "Entretenimento", preco: 150}]))