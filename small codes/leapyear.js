function leapyear(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
        console.log("these is a leapyear", year);
    else
        console.log("these is not a leap year", year);
}
leapyear(1900);
