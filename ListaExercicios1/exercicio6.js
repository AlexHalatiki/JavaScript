function jurosSimples(capital, taxa, tempo){
    return capital * taxa * tempo;
}

function jurosCompostos(capital, taxa, tempo){
    montante = capital * Math.pow(1  + taxa,tempo);
    return montante - capital;
}
