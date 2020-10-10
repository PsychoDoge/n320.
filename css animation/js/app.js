var box1 = document.getElementById("sbox1");
var box2 = document.getElementById("sbox2");
var box3 = document.getElementById("sbox3");
var box4 = document.getElementById("sbox4");
var box5 = document.getElementById("sbox5");
var box6 = document.getElementById("sbox6");
var fade1 = document.getElementById("fadeout")

box1.onmouseover = function(){
TweenLite.to(box1, .2, {css:{opacity:.5}});
}
box2.onmouseover = function(){
TweenLite.to(box2, .2, {css:{opacity:.5}});
}
box3.onmouseover = function(){
TweenLite.to(box3, .2, {css:{opacity:.5}});
}
box4.onmouseover = function(){
TweenLite.to(box4, .2, {css:{opacity:.5}});
}
box5.onmouseover = function(){
TweenLite.to(box5, .2, {css:{opacity:.5}});
}
box6.onmouseover = function(){
TweenLite.to(box6, .2, {css:{opacity:.5}});
}
/*box1.mouseIsPressed = function(){
  TweenLite.to(fade1, .2 {css:{opacity:0}});
}*/
