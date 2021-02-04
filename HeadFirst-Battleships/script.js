var shipsOnMap = [];
var attempts = 0;
var hits = 0;
var miss = 0;
var howManyShoots = 0;
var howManyShips = 0;


function mainF(){
    insertDivs();
    var shipsPositions = generatePositions();
    shipsOnMap = shipsPositions;
}



function insertDivs(){
    var htmlCode = "";
    var container = document.getElementById("container");
    var counter = 0;
    var alphabet = ['A','B','C','D','E','F','G'];

    for(var i = 0; i < 7; i++){

        htmlCode = htmlCode + "<div class=\"gameDivs alphabetNumbers\" >"+alphabet[i]+"</div>";

        for(var x = 0; x < 7; x++){
            counter = counter + 1;
            htmlCode = htmlCode + "<div id=\"gameDiv"+counter+"\" class=\"gameDivs bcChange\" onclick=\"putShipsOnMap("+counter+")\">"+counter+"</div>";
        }
        htmlCode = htmlCode + "<div style=\"clear: both;\"></div>";
    }

    htmlCode = htmlCode + "<div class=\"gameDivs alphabetNumbers numNumbers\"></div>";

    for(var i = 0; i < 7; i++){
        htmlCode = htmlCode + "<div class=\"gameDivs alphabetNumbers numNumbers\">"+i+"</div>";
    }
    container.innerHTML = htmlCode;

}

function generatePositions(){           //Generate positions of ships 
    var minimumValueOfShipsOnMap = 1;   //Edit to set minimum amout of ships on map
    var maximumValuesOfShipsOnMap = 5;  //Edit to set maximum amout of ships on map



    var availablePos = [];
    var shipsAmount = 0;
    var shipsPos = [];
    var verticalsPositions;
    var horizontalPositions;

    verticalsPositions = fillVerticalPositions(7,7,3);
    horizontalPositions = fillHorizontalPositions(7,7,3);

    for(var i = 0; i < 49; i++){    //Fill availablePos with 49 true values (0-48)
        availablePos.push(true);
    }

    shipsAmount = getRandomNumber(minimumValueOfShipsOnMap, maximumValuesOfShipsOnMap);
    howManyShips = shipsAmount;

    for(var i = 0; i < shipsAmount; i++){
        switch (getRandomNumber(1,2)) {
            case 1:
                if(true){
                    var pos1 = getRandomNumber(1,49);
                    while(true){
                        if(verticalsPositions.includes(pos1)){break;}
                        else{pos1 = getRandomNumber(1,49);}
                    }
                    var pos2 = pos1 + 1;
                    var pos3 = pos2 + 1;

                    if(availablePos[pos1-1] && availablePos[pos2-1] && availablePos[pos3-1]){
                        for(var x = 0; x < 3; x++){
                            var pos1 = pos1 + 1;
                            shipsPos.push(pos1);
                        }}}
            break;

            case 2:
                if(true){
                    var pos1 = getRandomNumber(1,49);
                    while(true){
                        if(horizontalPositions.includes(pos1)){break;}
                        else{pos1 = getRandomNumber(1,49);}
                    }
                    var pos2 = pos1 + 7;
                    var pos3 = pos2 + 7;

                    if(availablePos[pos1-1] && availablePos[pos2-1] && availablePos[pos3-1]){
                        for(var x = 0; x < 3; x++){
                            var pos1 = pos1 + 7;
                            shipsPos.push(pos1);
                        }}}
            break;
    }}
    attempts = shipsAmount*5;
    updateBarInfo();
    return shipsPos;
}

function putShipsOnMap(num){

    var idNum = "gameDiv" + num;
    var div = document.getElementById(idNum);
    if(shipsOnMap.includes(num)){
        div.style.backgroundImage = "url(png/ship.png)"
        hits++;
    }
    else{
        div.style.backgroundImage = "url(png/miss.png)"
        miss++;
    }

    div.setAttribute('onclick', '');

    if((hits+miss) == attempts){
        alert("Przegrałeś!");
        window.location.reload();
    }
    if(hits == (howManyShips*3)){
        alert("Wygrałeś!");
        window.location.reload();
    }

    updateBarInfo();
}


function updateBarInfo(){
    var nav = document.getElementById("nav");
    var htmlCode = "";

    htmlCode = htmlCode + "Ilość statków na planszy: " + howManyShips + "<br>";
    htmlCode = htmlCode + "Ilość strzałów: " + (hits+miss) +"/"+attempts+" <br>";
    nav.innerHTML = htmlCode; 
}


function getRandomNumber(min, max){
    max = max + 1;
    return Math.floor(Math.random() * (max - min)) + min;
}

function fillHorizontalPositions(width, height, shipLength){    //Generate array list of positions allowed for horizontally oriented ships
    var arrayLength = width*height;
    var lastIndex = width*(shipLength-1);
    lastIndex = arrayLength - lastIndex+1;
    var horizontalPositions = [];
    for(var i = 1; i<= arrayLength; i++){
        if(i == lastIndex){
            break;
        }
        horizontalPositions.push(i);
    }
    return horizontalPositions;
}

function fillVerticalPositions(width, height, shipLength){      //Generate array list of positions allowed for vertically oriented ships
    var arrayLength = width*height;
    var maxNumInWidth = width-shipLength+1;
    var verticalsPositions = [];
    for(var i = 1; i <= arrayLength; i++){
        verticalsPositions.push(i);
        if(i == maxNumInWidth){
            i = i + shipLength-1;
            maxNumInWidth = maxNumInWidth+width;
        }
    }
    return verticalsPositions;
}

window.onload = mainF();