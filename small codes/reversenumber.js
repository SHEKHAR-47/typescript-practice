function reversenum(n) {
    var rev = 0;
    var rem;
    while (n != 0) {
        rem = n % 10;
        rev = rev * 10 + rem;
        n = n / 10 | 0;
    }
    console.log("reverse no is:", rev);
}
reversenum(1249);
reversenum(8678);
