var $ = function (id) {
  return document.getElementById(id);
}

var displayMsg = function () {
  var firstName = $("firstname").value;
  var age = parseInt($("age").value);
  var sleep = parseInt($("sleep").value);

  var myText = "Hi " + firstName + ".";

  var mathOutput = age * sleep;

  var mySentence = "You have slept " + mathOutput + " years of your life away."

    $("mymsg").innerHTML = myText + mySentence;
  $("mymsg").setAttribute("class", "bluetext");
}

window.onload = function () {
  $("mybutton").onclick = displayMsg;
}