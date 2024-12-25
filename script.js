////////////TIMER//////////////////
var xmas = new Date("Dec 25,2024 07:30:00").getTime();
///////////////////////////////////
function animate(id,val){
var elem = document.getElementById(id);
var step1pos = 0;
var step2pos = 50;
var step1opc = 0;
var step2opc = 1;
var w8 = 0;
var id1 = setInterval(frame, 10);
  function frame() {
    if (w8 == 50) {
      if(step2pos == 150) {
document.getElementById(id).innerHTML = edit(val);
        if (step1pos == 50) {
          clearInterval(id1);
        }
        else {
        step1pos=step1pos+2;
        step1opc=step1opc+0.04;
        elem.style.top = step1pos + '%'; 
        elem.style.opacity = step1opc;
        }
      }
      else {        
      step2pos = step2pos + 4;
      step2opc = step2opc - 0.08;
      elem.style.top = step2pos+'%'; 
      elem.style.opacity = step2opc;
      }
    } else {
      w8++;
    }
  }
}
///////////////////////////////////
function edit(val){
  if(val<10){
    return "0"+val.toString();
  }
  else return val.toString();
}
///////////////////////////////////
var TIMER = setInterval(function(){
var now = new Date().getTime();
var remaining = xmas - now;
 
var d = Math.floor(remaining / (1000 * 60 * 60 * 24));
var h = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
var s = Math.floor((remaining % (1000 * 60)) / 1000);

document.getElementById("d").innerHTML = edit(d);
document.getElementById("h").innerHTML = edit(h);
document.getElementById("m").innerHTML = edit(m); 
  
if(h==0 && m==0 && s==0) {
animate("d",d-1);
}
if(m==0 && s==0) {
animate("h",h-1);
}
if(s==0) {
animate("m",m-1);
} 
if(1) {
animate("s",s);
}
if( remaining < 0 ) {
  clearInterval(TIMER);
  document.getElementById("timer").innerHTML = "UNWRAPPING TIME!";
  document.getElementById("text").innerHTML = "";
}
},1000);
//////////BACKGROUND///////////////

////////////STARS//////////////////
var stars = "";
for(let i=0 ; i<50 ; i++){
  stars += "<div id=\"starcon";
  stars += i.toString();
  stars += "\"><div id=\"star";
  stars += i.toString();
  stars += "\"><i class=\"fas fa-star\"></i></div></div>";
}
document.getElementById("stars").innerHTML = stars;
for(let i=0; i<50 ; i++){
var id = "star" + i.toString();
var elem = document.getElementById(id);
var rotate = Math.floor(Math.random() * 180);
elem.style.transform = "translate(-50%,-50%)rotate("+rotate+"deg)";
var size = Math.floor((Math.random() * 8)+ 4);
elem.style.fontSize = size + "px";
switch(Math.floor((Math.random() * 5))){
case 0: elem.style.color = "#f5f6fa"; 
elem.style.textShadow = "0px 0px 12px white"; break;
case 1: elem.style.color = "yellow";  
elem.style.textShadow = "0px 0px 12px yellow"; break;
case 2: elem.style.color = "#74b9ff";  
elem.style.textShadow = "0px 0px 12px #74b9ff"; break;
case 3: elem.style.color = "#6c5ce7";  
elem.style.textShadow = "0px 0px 12px #6c5ce7"; break;
case 4: elem.style.color = "#fdcb6e";  
elem.style.textShadow = "0px 0px 12px #fdcb6e"; break;
}
}
var line = 0;
var col = 0;
for(let i=0 ; i<50 ; i++){
var id = "starcon" + i.toString();
var elem = document.getElementById(id);
elem.style.position = "absolute";
if(i%10==0) {col++; line=0;}
line++;
var positionY = Math.floor((Math.random() *  10)+5)+col*5-7;
elem.style.top = positionY + "%";
var positionX = Math.floor((Math.random() * 10)+5)+line*10-15;
elem.style.left = positionX + "%";
var time = Math.floor((Math.random() * 25) + 10);
elem.style.animation = "stars " + time + "s infinite";
}
///////////////////////////////////
var snow = "";
for(let i=0; i<100 ; i++){
  snow += "<div id=\"snowcon";
  snow += i.toString();
  snow += "\"><div class=\"snow";
  snow += "\"><i class=\"far fa-snowflake\"></i></div></div>";
}
document.getElementById("snowing").innerHTML = snow;
for(let i=0 ; i<100 ; i++){
var id = "snowcon" + i.toString();
var elem = document.getElementById(id);
elem.style.position = "absolute";
var positionY = Math.floor((Math.random() * 50)-100);
elem.style.top = positionY + "%";
var positionX = Math.floor((Math.random() * 94)+2);
elem.style.left = positionX + "%";
var rotate = Math.floor(Math.random() * 180);
elem.style.transform = "rotate("+rotate+"deg)";
var opc = Math.floor(Math.random()*100+20)/100;
elem.style.opacity = opc;
var delay = i/5;
elem.style.animation = "snow 15s infinite -"+delay.toString()+"s";
}