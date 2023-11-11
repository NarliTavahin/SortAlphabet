
const check = document.getElementById("check");
check.addEventListener("click", function() {
  event.preventDefault();
  let string = document.getElementById("textInput").value;
  let words = string.split(" ");
  words.sort((a, b) => a.localeCompare(b));

  let resultDiv = document.getElementById("result");
 
  resultDiv.innerHTML = "The sorted words are: ";

  for (let element of words) {

    resultDiv.innerHTML += `\n`;
    resultDiv.innerHTML += `${element}`  ;
   
    }
});


