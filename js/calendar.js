var centuryDigitsCC = CC => {
    return ((CC / 4) - 2 * CC - 1);
  }

  var yearDigitsYY = YY => {
    return ((5 * YY / 4));
  }

var month = MM => { 
    if (MM < 0 || MM > 31) {
        alert("Enter a Valid month!!")
      }  
    return (26 * (MM + 1) / 10);
  }
  //alert("Enter Your date of Birth");
  var DD = parseInt(prompt("Enter the day you were born:"));
  var MM = parseInt(prompt("Enter the month you were born:"));
  var year = (prompt("Enter the year you were born:"))
  var gender = prompt("Enter your Gender M or F");
  var centuryyear = year.split("");
  var YY = parseInt(centuryyear.splice(2).join(''));
  CC = parseInt(centuryyear.join(''));
  
  var d = Math.floor((centuryDigitsCC(CC) + yearDigitsYY(YY) + month(MM) + DD) % 7);
  
  
  const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  let akanName = "";
  
  if (gender == "m" || "M") {
    akanName = maleNames[d];
    alert("Your Akan Name is: " + akanName);
  } else if (gender == "f" || "F") {
    akanName = femaleNames[d];
    alert("Your Akan Name is: " + akanName);
  } else {
    alert("Enter a Valid Gender M or F");
  }
  