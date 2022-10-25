function calculadora(a,op,b){
    switch(op){
        case "+":
            console.log(a+b);
            break;
        case "-":
            console.log(a-b);
            break;
        case "*":
            console.log(a*b);
            break;
        case "/":
            console.log(a/b);
            break;
        default:            
            console.log("Operação inválida.");
    }
}
