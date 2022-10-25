function frutas(fruta){
    switch(fruta.toUpperCase().trim()){
        case "MAÇÃ":
            return "Não vendemos esta fruta aqui";
        case "KIWI":
            return "Estamos com escassez de kiwis";
        case "MELANCIA":
            return "Aqui está, são 3 reais o quilo";
        default:
            return"Fruta inválida.";
    }
}

console.log(frutas("maçã"));