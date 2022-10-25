function salario(plano, salario){
    switch(plano.trim().toUpperCase()){
        case "A":
            console.log(salario + salario * 10 / 100);
            break;
        case "B":
            console.log(salario + salario * 15 / 100);
            break;
        case "C":
            console.log(salario + salario * 20 / 100);
            break;
        default:
            console.log("Plano inválido.");
    }
}