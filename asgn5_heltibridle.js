var $ = function (id) {
  return document.getElementById(id);
}

var displayMsg = function () {
  var firstName = $("firstname").value;
  var age = $("age").value;
  var sleep = $("sleep").value;

  var myText = "Hi " + firstName + age + sleep;
  $("mymsg").innerHTML = myText;
  $("mymsg").setAttribute("class", "bluetext");
}

window.onload = function () {
  $("mybutton").onclick = displayMsg;
}