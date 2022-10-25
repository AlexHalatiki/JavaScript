function trocaVetores(vetor1, vetor2){

    for(let i=vetor1.length;i>=0;i--){
        vetor2.splice(i+1,0,vetor1[i]);
        vetor1.splice(i+1,0,vetor2[i]);
        vetor2.splice(i,1);
        vetor1.splice(i,1);
    }

    console.log(vetor1);
    console.log(vetor2);
}

trocaVetores([1,2,3,4,5],[6,7,8,9,10])