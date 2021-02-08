var object;


function saveIntoDatabase(){
    insertIntoObject();

    var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        var user = xhr.response;
        alert(user);
    }
}
xhr.open('POST', 'http://localhost:8080/get', true);
xhr.responseType = "json";
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(object));
}


function insertIntoObject(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;

    object =
    {
        id: null,
        firstName: fname,
        lastName: lname,
        age: age
    }
}