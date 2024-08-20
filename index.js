function printPattern(n){
    let i = 1;
    while( i <= n ){
        let j = 1;
        let line = " ";
        while( j <= n ){
            // line += "*" + " ";
            line += j + " ";
            j = j + 1;
        }
        console.log(line.trim());
        i = i + 1;
    }
    return true;
}

console.log(printPattern(4));
printPattern(4);