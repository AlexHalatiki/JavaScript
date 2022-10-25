function plano(idade){
    if(idade < 0){
        return "Idade inválida.";
    }
    if(idade < 10){
        return 100 + 80;
    }
    if(idade <= 30){
        return 100 + 50;
    }
    if(idade <= 60){
        return 100 + 95;
    }

    return 100 + 130;
}