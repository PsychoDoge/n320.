
//what should allow me to put the json data into my index
// i tried to get the data from JSON, but had to not after trying for about 14 hours of attemps I even tried to install the vue plugin thing, and it still did not work
 new Vue({
  el:'#box1',
data: function (){
  return{
  game: "Halo , 9/10"
}
}});

new Vue({
 el:'#box2',
data: function (){
 return{
 game: "Halo2 , 8/10"
}
}});

new Vue({
 el:'#box3',
data: function (){
 return{
 game: "Halo3, 10/10"
}
}});

new Vue({
 el:'#box4',
data: function (){
 return{
 game: "Halo4, 7/10"
}
}});
new Vue({
 el:'#box5',
data: function (){
 return{
 game: "Halo 5, 5/10"
}
}});
new Vue({
 el:'#box6',
data: function (){
 return{
 game: "Dragon quest 11, 10/10"
}
}});
new Vue({
 el:'#box7',
data: function (){
 return{
 game: "guild wars(CAUTION) ,9/10"
}
}});
new Vue({
 el:'#box8',
data: function (){
 return{
 game: "Guild wars 2 ,9/10"
}
}});
new Vue({
 el:'#box9',
data: function (){
 return{
 game: "cooking mama ds,6/10"
}
}});
new Vue({
 el:'#box10',
data: function (){
 return{
 game: "super mario 64 ,9/10"
}
}});
/*mounted: function() {
fetch("data/data.json")
.then(response => (this.game =  response.game))
}
});
//old code
/*fetch('data/data.json')
           .then(function (response) {
               return response.json();
           })
           .then(function (data) {
               appendData(data);
           })
           .catch(function (err) {
               console.log('error: ' + err);
           });


  function appendData(data) {
  var mainContainer = document.getElementById("box1");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].description + ' ' + data[i].rating;
    mainContainer.appendChild(div);
  }
}
*/
//all the code for my overlays
  function on() {
    document.getElementById("overlay1").style.display = "block";
  }

  function off() {
    document.getElementById("overlay1").style.display = "none";
  }
  function on2() {
    document.getElementById("overlay2").style.display = "block";
  }

  function off2() {
    document.getElementById("overlay2").style.display = "none";
  }
  function on3() {
    document.getElementById("overlay3").style.display = "block";
  }

  function off3() {
    document.getElementById("overlay3").style.display = "none";
  }
  function on4() {
    document.getElementById("overlay4").style.display = "block";
  }

  function off4() {
    document.getElementById("overlay4").style.display = "none";
  }
  function on5() {
    document.getElementById("overlay5").style.display = "block";
  }

  function off5() {
    document.getElementById("overlay5").style.display = "none";
  }
  function on6() {
    document.getElementById("overlay6").style.display = "block";
  }

  function off6() {
    document.getElementById("overlay6").style.display = "none";
  }
  function on7() {
    document.getElementById("overlay7").style.display = "block";
  }

  function off7() {
    document.getElementById("overlay7").style.display = "none";
  }
  function on8() {
    document.getElementById("overlay8").style.display = "block";
  }

  function off8() {
    document.getElementById("overlay8").style.display = "none";
  }
  function on9() {
    document.getElementById("overlay9").style.display = "block";
  }

  function off9() {
    document.getElementById("overlay9").style.display = "none";
  }
  function on10() {
    document.getElementById("overlay10").style.display = "block";
  }

  function off10() {
    document.getElementById("overlay10").style.display = "none";
  }


//old code
/*
function getJSON('data/data.json') {
  return fetch('data/data.json').then(response => response.json());
}
getJSON('config.json').then(info => {
    var title = info.title;
    console.log(title);
    axios
    .get('data/data.json')
    .then(response=>(this.game = response))
*/
