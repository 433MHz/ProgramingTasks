 var divide3 = [];
 var divide5 = [];
 var output = "";

function show(){
    for(var i = 1; i <= 100; i++){
        var message = i;

        if(divide3.includes(i) && divide5.includes(i)){
            message = "FizzBuzz";
        }
        else if(divide5.includes(i)){
            message = "Buzz";
        }
        else if(divide3.includes(i)){
            message = "Fizz";
        }

        output = output + message + "<br>";
    }
    document.getElementById("container").innerHTML = output;
}

function nums(){
    var divideArrayNum = 0;

    for(var i = 3; i <= 100; i = i + 3){
        divide3[divideArrayNum] = i;
        divideArrayNum = divideArrayNum + 1;
    }

    divideArrayNum = 0;

    for(var i = 5; i <=100; i = i + 5){
        divide5[divideArrayNum] = i;
        divideArrayNum = divideArrayNum + 1;
    }

    show();
}

window.onload = nums;