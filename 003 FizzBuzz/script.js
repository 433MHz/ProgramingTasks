 var divideBy1 = 3;
 var divideBy2 = 5;
 
 
 function show(divide1, divide2){
    var output = "";
    for(var i = 1; i <= 100; i++){
        var message = i;

        if(divide1.includes(i) && divide2.includes(i)){
            message = "FizzBuzz";
        }
        else if(divide2.includes(i)){
            message = "Buzz";
        }
        else if(divide1.includes(i)){
            message = "Fizz";
        }

        output = output + message + "<br>";
    }
    document.getElementById("container").innerHTML = output;
}

function nums(){
    var divide3 = [];
    var divide5 = [];
    var divideArrayNum = 0;

    for(var i = divideBy1; i <= 100; i = i + divideBy1){
        divide3[divideArrayNum] = i;
        divideArrayNum = divideArrayNum + 1;
    }

    divideArrayNum = 0;

    for(var i = divideBy2; i <=100; i = i + divideBy2){
        divide5[divideArrayNum] = i;
        divideArrayNum = divideArrayNum + 1;
    }

    show(divide3, divide5);
}

window.onload = nums;