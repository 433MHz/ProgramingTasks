function insertDivs(){
    var htmlCode = "";
    var container = document.getElementById("container");
    var counter = 0;
    var alphabet = ['A','B','C','D','E','F','G'];

    for(var i = 0; i < 7; i++){

        htmlCode = htmlCode + "<div class=\"gameDivs alphabetNumbers\">"+alphabet[i]+"</div>";

        for(var x = 0; x < 7; x++){
            counter = counter + 1;
            htmlCode = htmlCode + "<div id=\"gameDiv"+counter+"\" class=\"gameDivs\"></div>";
        }
        htmlCode = htmlCode + "<div style=\"clear: both;\"></div>";
    }

    htmlCode = htmlCode + "<div class=\"gameDivs alphabetNumbers numNumbers\"></div>";

    for(var i = 0; i < 7; i++){
        htmlCode = htmlCode + "<div class=\"gameDivs alphabetNumbers numNumbers\">"+i+"</div>";
    }


    container.innerHTML = htmlCode;
}

window.onload = insertDivs;