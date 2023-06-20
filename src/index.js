import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!


// MouseOver
document.getElementById("logo-heading").addEventListener("mouseover", mouseOver);
document.getElementById("logo-heading").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("logo-heading").style.color = "red";
  document.getElementById("logo-heading").style.cursor = "pointer";
}

function mouseOut() {
  document.getElementById("logo-heading").style.color = "black";
}

// MouseOver


// wheel



document.getElementById("paragraph").addEventListener("wheel", myFunction);

function myFunction() {
  this.style.fontSize = "1.7rem";
}

// wheel

// resize
window.addEventListener("resize", myFunction2);

var x = 0;
function myFunction2() {
  var txt = x += 1;
  console.log(txt);
}
// resize


//scroll

window.onscroll = function() {myFunction3()};

function myFunction3() {
  if (document.documentElement.scrollTop > 300) {
    document.querySelector(".text-content p").className = "test";
  } else {
    document.querySelector(".text-content p").className = "";
  }
}
//scroll

//dblclick
document.getElementById("content-image").addEventListener("dblclick", myFunction4);

function myFunction4() {
  document.getElementById("content-image").width = "300";
  document.getElementById("content-image").width = "400";
}
//dblclick