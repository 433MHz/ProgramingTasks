var minusOne = [4,8,12,16,3,7,11,15,2,6,10,14];
var plusOne = [1,5,9,13,2,6,10,14,3,7,11,15];
var minusFour = [5,9,13,6,10,14,7,11,15,8,12,16];
var plusFour = [1,5,9,2,6,10,3,7,11,4,8,12];
var positions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var divs;


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
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
        var htmlCode
        if(positions[i] == 16){
            htmlCode = "<div class=\"puzzle piece" + positions[i] + "\"></div>";
            divs[i].setAttribute('onclick', '');
        }
        else{
            htmlCode = "<div class=\"puzzle piece" + positions[i] + "\">"+positions[i]+"</div>";
        }
        divs[i].innerHTML = htmlCode;
    }
}

function slide(idNumber){
    console.log(idNumber);
}



window.onload = shuffle(positions);