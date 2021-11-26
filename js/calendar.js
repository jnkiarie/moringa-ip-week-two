
    alert("Enter Your date of Birth");
    var DD = parseInt(prompt("Enter the day you were born:"));
    var MM = parseInt(prompt("Enter the month you were born:"));
    var year = (prompt("Enter the year you were born:"))
    var gender = prompt("Enter your Gender M or F");
    var centuryyear = year.split("");
    var YY = parseInt(centuryyear.splice(2).join(''));
    CC = parseInt(centuryyear.join(''));
    
    var d = Math.floor((centuryDigitsCC(CC) + yearDigitsYY(YY) + month(MM) + DD)%7);
    
    
    
    