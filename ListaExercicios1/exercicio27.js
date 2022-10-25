function alturaUltra(altura1, taxa1, altura2, taxa2){
    if(altura1 == altura2){
        console.log("As alturas são iguais.");
    }

    let menor = altura1;
    let taxamenor = taxa1;
    let maior = altura2;
    if(altura2 < menor){
        menor = altura2;
        taxamenor = taxa2;
        maior = altura1;
    }

    let tempo = (maior - menor) / taxamenor + 1;
    console.log("A criança menor ultrapassará a maior em " + tempo + " anos.");
}