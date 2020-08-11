var name = "Varun Jindal";
var i = 0;

function typeName() {
  var nameBlock = document.getElementById("nametag");
  nameBlock.innerHTML += name.charAt(i);
  i += 1;
  setTimeout(typeName, 100);
}

document.body.onload = typeName;
