var score1 = 50;
var score2 = 43.5;
var score3 = 60;
var score4 = 50;
var score5 = 43.5;
var sum = score1 + score2 + score3 + score4 + score5;
console.log("firstscore: " + score1);
console.log("secondscore: " + score2);
console.log("thirdscore: " + score3);
console.log("fourthscore: " + score4);
console.log("fiiftscore: " + score5);
console.log("sum of 5 scores is: " + sum);
var percentage = sum / 500 * 100;
console.log("percentage of marks is ", percentage);
if (percentage>=90 && percentage<=100)
console.log("grade A")
else if (percentage>=80 && percentage<=90)
console.log("grade B")
else if (percentage>=70 && percentage<=80)
console.log("grade C")
else if (percentage>=60 && percentage<=70)
console.log("grade D")
else if (percentage>=50 && percentage<=60)
console.log("grade E")
else if(percentage<50)
console.log("grade f fail!!!")


