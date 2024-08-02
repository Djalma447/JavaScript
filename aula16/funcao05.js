// RECURSIVIDADE
function fatorial(n){
    if (n == 1){
        return 1;
    }
    else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(7))

// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 6! = 6 * 5! = 720
// 7! = 7 * 6! = 5040