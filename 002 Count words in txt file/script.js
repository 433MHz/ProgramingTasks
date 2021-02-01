var result;

document.getElementById('txt').addEventListener('change', function() { 
  
var fr=new FileReader(); 
fr.onload=function(){ 
    document.getElementById('output').textContent=fr.result; 
    result = fr.result;
    run();
} 
fr.readAsText(this.files[0]); 
});


var wordsArray = [];
var objectsArray = [];


function run(){
    result = result.toLowerCase();
    wordsArray = result.split(" ");
    wordsArray.sort();

    var iterator = -1;
    var lastWord = "";
    wordsArray.forEach(element => {
        element = element.replace('.','');
        element = element.replace(',','');
        if(element != lastWord){
            iterator = iterator + 1;
            objectsArray[iterator] = {"oName": element, "oCount": 1};
        }
        else{
            objectsArray[iterator].oCount = objectsArray[iterator].oCount+1;
        }
        lastWord = element;
    });

    var message = "";

    objectsArray.forEach(element => {
        message = message + element.oName + " | " + element.oCount + "<br>";
    });

    document.getElementById("nav").innerHTML = message;
}