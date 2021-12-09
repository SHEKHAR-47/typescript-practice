function greatest_number(a, b, c) {
    var a;
    var b;
    var c;
    if (a >= b && a >= c)
        console.log(" the greasest number is", a);
    else if (b >= c && b >= a)
        console.log(" the gretest number is", b);
    else
        console.log("the greatest number is", c);
}
greatest_number(10, 5, 3);
