// Declaring the array
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

// create a function that would be called in the HTML file
function outputNames(){

    // Declaring variable intouts
    var date=parseFloat(document.getElementById("Date").value);
    var month=parseFloat(document.getElementById("Month").value);
    var year=parseFloat(document.getElementById("Year").value);
    //Give alert if the input data is outside the range
    if ( year < 0 || year > 2020){
        alert("Enter a valid year")
        return false;
    } else if (month < 0 || month > 12){
        alert("Enter a valid month number");
        return false;
    } else if (date < 0 || date > 31){
        alert("Enter a valid date");
    }

    // This will calculate the specific day of the month
    var century=(year-1)/100+1;
    var dayOfWeek=Math.floor( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
    var theMaleGender=document.getElementById("male");
    var theFemaleGender=document.getElementById("female");
  
    // check  for gender inout
    if(theMaleGender.checked){
        var theMaleValue = theMaleGender.value;
    }else if(theFemaleGender.checked){
        var theFemaleValue = theFemaleGender.value;
    }
    // check if the value returned is correct and then display the matching akan
    if(theMaleValue==="male"){

        document.getElementById("display").innerHTML="Your Akan Name is "+maleNames[dayOfWeek];

    }else{

        document.getElementById("display").innerHTML="Your Akan Name is "+femaleNames[dayOfWeek];
    }
    
}
