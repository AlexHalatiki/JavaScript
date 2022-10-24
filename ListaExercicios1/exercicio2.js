function verificaTriangulo(a, b, c){
    if(a == b == c)
        return "Equilátero";
        
    if(a == b || a == c || b == c)
        return "Isósceles";

    return "Escaleno";
}