const percentage = () => {

    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    let num3 = document.querySelector("#num3").value;
    let num4 = document.querySelector("#num4").value;
    let grades = " ";

    let totalgrades = parseFloat(num1) + parseFloat(num2) + parseFloat(num3) +parseFloat(num4);
    let percentage = (totalgrades / 400) * 100;

    if (percentage <= 100 && percentage >= 80) {
        grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
        grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
        grades = "C";
    } else {
        grades = "F";
    }

    // Show Please Fill

    if (num1 == " " || num2 == " " || num3 == " " || num4 == " ") {
        document.querySelector("#p1").innerHTML = "Please enter all fields";
    }
    else {
        if (percentage >= 39.5) {
            document.querySelector("#p1").innerHTML = "Out of 400, your total is " + totalgrades + " and percentage is " + percentage + " .00% your garde is " + grades + ". you passed. ";
        }
        else {
            document.querySelector("#p1").innerHTML = "Out of 400, your total is " + totalgrades + " and percentage is " + percentage + " .00% your garde is " + grades + ". you Fail. ";

        }
    }
};