function conceitoNotas(notas){
    for(x in notas){
        if(notas[x] < 0 || notas[x] > 10)
            console.log("Nota inválida.");
        if(notas[x] >= 0 && notas[x] <= 4.9)
            console.log("Nota: " + notas[x] + " Conceito: D.");
        if(notas[x] >= 5 && notas[x] <= 6.9)
            console.log("Nota: " + notas[x] + " Conceito: C.");
        if(notas[x] >= 7 && notas[x] <= 8.9)
            console.log("Nota: " + notas[x] + " Conceito: B.");
        if(notas[x] >= 9 && notas[x] <= 10)
            console.log("Nota: " + notas[x] + " Conceito: A.");
    }
}