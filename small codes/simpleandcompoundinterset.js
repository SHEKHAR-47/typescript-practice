function calculate_simpleinterset(price, rate, time) {
    var simple_intersest = (price * rate * time) / 100;
    console.log("simple intersest is:", simple_intersest);
}
function calculate_compoundinterset(price, rate, time) {
    var compound_intersest = price * Math.pow((1 + rate / 100), time);
    console.log("compound interest is:", compound_intersest);
}
calculate_simpleinterset(5000, 5, 3);
calculate_compoundinterset(5000, 5, 3);
