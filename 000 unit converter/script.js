var fourInputs = false;
var output1 = document.getElementById("input1");
var output2 = document.getElementById("input2");
var output3 = document.getElementById("input3");
var output4;

var name1 = document.getElementById("name1");
var name2 = document.getElementById("name2");
var name3 = document.getElementById("name3");

function run(option){
    var input = 0;
    var val1 = 0;
    var val2 = 0;
    var val3 = 0;
    var val4 = 0;

    switch (option) {
        case 11:
            input = document.getElementById("input1").value;
            calcKG(input);
            break;
        
        case 12:
            input = document.getElementById("input2").value;
            calcKG(input/1000);
            break;

        case 13:
            input = document.getElementById("input3").value;
            calcKG(input/1000000);
            break;

        case 21:
            input = document.getElementById("input1").value;
            calcKM(input);
            break;

        case 22:
            input = document.getElementById("input2").value;
            calcKM(input/1000);
            break;

        case 23:
            input = document.getElementById("input3").value;
            var calc = 1.6 * input;
            calcKM(calc);
            break;

        case 31:
            input = document.getElementById("input1").value;
            calcMB(input);
            break;

        case 32:
            input = document.getElementById("input2").value;
            calcMB(input/1000);
            break;

        case 33:
            input = document.getElementById("input3").value;
            calcMB(input/8);
            break;

        case 34:
            input = document.getElementById("input4").value;
            calcMB((input/8)/1000);
            break;
    }
    output1.value = null;
    output2.value = null;
    output3.value = null;

    if(fourInputs){
        output4.value = null;
    }

    output1.placeholder = val1;
    output2.placeholder = val2;
    output3.placeholder = val3;

    if(fourInputs){
        output4.placeholder = val4;
    }


    function calcKG(unit){
        val1 = unit;
        val2 = unit*1000;
        val3 = unit*1000000;
    }

    function calcKM(unit){
        val1 = unit;
        val2 = unit*1000;
        val3 = unit/1.6
    }

    function calcMB(unit){
        val1 = unit;
        val2 = unit * 1000;
        val3 = unit*8;
        val4 = (unit*8)*1000;
    }
}


function switchPage(page){
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");


    switch (page) {
        case 1:
            output1.placeholder = "Kilograms";
            output2.placeholder = "Grams";
            output3.placeholder = "Miligrams";

            button1.setAttribute('onclick','run(11)');
            button2.setAttribute('onclick','run(12)');
            button3.setAttribute('onclick','run(13)');

            name1.innerText = "Kilograms";
            name2.innerText = "Grams";
            name3.innerText = "Miligrams";

            document.getElementById("option4").innerHTML = "";
            fourInputs = false
            break;

        case 2:
            output1.placeholder = "Kilimeters";
            output2.placeholder = "Meters";
            output3.placeholder = "Miles";

            button1.setAttribute('onclick','run(21)');
            button2.setAttribute('onclick','run(22)');
            button3.setAttribute('onclick','run(23)');

            name1.innerText = "Kilimeters";
            name2.innerText = "Meters";
            name3.innerText = "Miles";

            document.getElementById("option4").innerHTML = "";
            fourInputs = false
            break;

        case 3:
            var html = "<span id=\"name4\">KiloBits:</span> <input type=\"text\" placeholder=\"KiloBits\" id=\"input4\"><input type=\"button\" value=\"Konwertuj\" id=\"button4\" onclick=\"run(34)\"><br>"
            document.getElementById("option4").innerHTML = html;

            output1.placeholder = "Megabytes";
            output2.placeholder = "Kilobytes";
            output3.placeholder = "MegaBits";

            button1.setAttribute('onclick','run(31)');
            button2.setAttribute('onclick','run(32)');
            button3.setAttribute('onclick','run(33)');

            name1.innerText = "Megabytes";
            name2.innerText = "Kilobytes";
            name3.innerText = "MegaBits";

            fourInputs = true;

            output4 = document.getElementById("input4");

            break;

    
    }
}