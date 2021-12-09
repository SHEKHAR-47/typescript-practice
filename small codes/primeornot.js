function isprime(num) {
    if (num < 2)
        return false;
    for (var k = 2; k < num; k++) {
        if (num % k == 0) {
            console.log("number is not prime");
            return false;
        }
    }
    console.log("number is prime");
    return true;
}
isprime(8);
