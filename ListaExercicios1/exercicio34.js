function strings(string1, string2){
    maior = string1
    menor = string2
    if(string2.length > string1.length){
        maior = string2;
        menor = string1;
    }

    for(let i=0;i<maior.length;i++){
        let teste = false;
        for(let c=0;c<menor.length;c++)
            if(maior[i] == menor[c])
                teste = true;
        if(!teste)
            return false;
    }

    return true; 
}
