var txtInput = document.querySelector("#txtInput");
var btnTranslate = document.querySelector("#btn-translate");
var output = document.querySelector(".outputDiv");

var serverURl = "https://api.funtranslations.com/translate/dothraki.json";

btnTranslate.addEventListener("click",eventHandler);

function eventHandler(){
    var URL = serverURl+ "?text=" + txtInput.value;

    fetch(URL).then(response => response.json()).then(json => output.innerText = json.contents.translated);
}



