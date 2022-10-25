function anuidade(mes, valor){
    if(!(mes >= 1 && mes <= 12))
        return "Mês inválido."

    if(mes == 1)
        return valor;
    
    return valor * Math.pow(1 + 5/100,--mes);
}