function compraCarros(modelo){
    switch(modelo.trim().toUpperCase()){
        case "hatch":
            return "Compra efetuada com sucesso.";
        case "sedan":
            return "Tem certeza que não prefere este modelo?";
        case "motocicletas":
            return "Tem certeza que não prefere este modelo?";
        case "caminhonetes":
            return "Tem certeza que não prefere este modelo?";
        default:
            return "Não trabalhamos com este tipo de automóvel aqui.";
    }
}