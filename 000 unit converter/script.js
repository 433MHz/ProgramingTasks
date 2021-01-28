function run(option){
    var input = 0;
    var output1 = document.getElementById("input1");
    var output2 = document.getElementById("input2");
    var output3 = document.getElementById("input3");
    var miligrams = 0;

    switch (option) {
        case 11:
            input = document.getElementById("input1").value;
            miligrams = input*1000000;
            break;
        
        case 12:
            input = document.getElementById("input2").value;
            miligrams = input*1000;
            break;

        case 13:
            input = document.getElementById("input3").value;
            miligrams = input;
            break;
    }
    output1.value = null;
    output2.value = null;
    output3.value = null;

    output1.placeholder = miligrams/1000000;
    output2.placeholder = miligrams/1000;
    output3.placeholder = miligrams;
}