function basquete (string){
    let lista = string.split(" ");
    let record = lista[0];
    let cont = 0;
    let pior = 1;
    
    for(let i in lista){
        if(parseInt(lista[i]) > parseInt(record)){
            cont++;
            record = parseInt(lista[i]);
        }
        if(parseInt(lista[pior-1]) > parseInt(lista[i])){
            pior = parseInt(i) + 1;
        }
    }

    return [cont, pior];
}

console.log(basquete("10 20 20 8 25 3 0 30 1"));