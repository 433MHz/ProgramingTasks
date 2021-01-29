var minusOne = [4,8,12,16,3,7,11,15,2,6,10,14];
var plusOne = [1,5,9,13,2,6,10,14,3,7,11,15];
var minusFour = [5,9,13,6,10,14,7,11,15,8,12,16];
var plusFour = [1,5,9,2,6,10,3,7,11,4,8,12];
var divs;
var positions = [];



function shuffle(){
    for(var i = 1; i<=16; i++){
        var tempPos = Math.floor(Math.random() * 16) +1;

        for(var x = 0; x < positions.length; x++){
            for(var y = 0; y < positions.length; y++){     
                while(positions[y] == tempPos){
                    tempPos = Math.floor(Math.random() * 16) +1;   
                }
            }
        }
        positions[i-1] = tempPos; 
    }
    console.log(positions);
    putDivs();
}

function putDivs(){
    divs = [div1, div2, div3, div4, div5, div6, div7, div8, div9, div10, div11, div12, div13, div14, div15, div16];

    for(var i = 0; i< 16; i++){
        var divString = "div" + (i+1);
        var tempDiv = document.getElementById(divString);
        divs[i] = tempDiv;
    }

    for(var i = 0; i < divs.length; i++){
        var htmlCode = "<div class=\"puzzle piece" + positions[i] + "\" onclick=\"slide(" +positions[i]+ ")\">";
        divs[i].innerHTML = htmlCode;
    }

    console.log(divs)
}

function slide(number){

}



window.onload = shuffle;