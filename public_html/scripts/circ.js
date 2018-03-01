/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function circleArea() {

    var val = document.getElementById("IN").value;
    if (val < 1 || val > 100) {
            console.log(val + "is invalid");
            document.getElementById("area").innerHTML = "Bad Value; Try Again";
            document.getElementById("IN").value = "";
        }
    console.log("valid data; calculating now");
    let area = Math.PI*(val*val)
        document.getElementById("area").innerHTML = "The area of the circle is: " + area;
    let circumfrence = Math.PI*(val*2);
        document.getElementById("circumfrence").innerHTML = "The circumfrence of the circle is: " + circumfrence;
}

function mOver() {
    console.log("mouse over");
    document.getElementById("area").style.color = "orange";
    document.getElementById("circumfrence").style.color = "pink";
}

function mOut() {
    console.log("mouse out");
    document.getElementById("area").style.color = "black";
    document.getElementById("circumfrence").style.color = "black";    
}