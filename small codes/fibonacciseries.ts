let fibonacci = [0,1];
    
function
 listFibonacci(num) {
    for (let i = 1; i < num; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    }
    console.log(fibonacci);
}

listFibonacci(10);