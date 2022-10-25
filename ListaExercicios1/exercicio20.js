function notas(valor){
    let vet = []

    vet[0] = Math.floor(valor / 100);
    valor = valor % 100;
    vet[1] = Math.floor(valor / 50);
    valor = valor % 50;
    vet[2] = Math.floor(valor / 10);
    valor = valor % 10;
    vet[3] = Math.floor(valor / 5);
    valor = valor % 5;
    vet[4] = Math.floor(valor / 1);
    valor = valor % 1;

    for(let i in vet){
        if(vet[i] > 0)
            switch(parseInt(i)){
                case 0:
                    console.log(vet[i] + " nota(s) de R$ 100.");
                    break;
                case 1:
                    console.log(vet[i] + " nota(s) de R$ 50.");
                    break;
                case 2:
                    console.log(vet[i] + " nota(s) de R$ 10.");
                    break;
                case 3:
                    console.log(vet[i] + " nota(s) de R$ 5.");
                    break;
                case 4:
                    console.log(vet[i] + " nota(s) de R$ 1.");
                    break;
                default:
                    console.log("Erro interno.");    
            }
    }
}