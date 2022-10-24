function bhaskara(a, b, c){
    let delta = b * b - 4 * a * c;
    if(delta < 0)
        return "Delta é negativo.";
    let x1 =  (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return [x1,x2];
}

