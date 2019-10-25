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

    