var $ = function (id) {
  return document.getElementById(id);
}

displayMsg = function () {
  var myText = "Hi"
  $("mymsg").innerHTML = myText;
}

window.onload = function () {
  $("mybutton").onclick = displayMsg;
}