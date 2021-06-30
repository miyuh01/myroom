window.load = function(){
  setWachSize(200);
}

function setWachSize(){
  var obj = document.getElementById('image_body');
  var clockW = obj.width;
  var clockH = obj.height;
}

document.addEventListener('DOMContentLoaded',function(){
  setInterval(moveTimer,1000);
},false);

function moveTimer(){
var date,Yy,Mm,Dd;
date = new  Date();
Yy  =  date.getFullYear();
Mm  = date.getMonth()+1;
Dd  = date.getDate;

var Hou, Min, hDeg, mDeg;

Hou = date.getHours();
Min = date.getMinutes();

hDeg = (Hou % 12)*(360 / 12);
mDeg = Min*(360 / 60);


hDeg += (Min / 60)*(360 / 12);
//hDeg += (Sec / 60)*(360 / 12);


if(Hou < 10)Hou = '0'+Hou;
if(Min < 10)Min = '0'+Min;


var H = document.getElementById('img_hr');
H.style.transform = 'rotate('+hDeg+'deg)';
H.style.MozTransform = 'rotate('+hDeg+'deg)';
H.style.webkitTransform = 'rotate('+hDeg+'deg)';
H.style.msTransform = 'rotate('+hDeg+'deg)';

var M = document.getElementById('img_min');
M.style.transform = 'rotate('+mDeg+'deg)';
M.style.MozTransform = 'rotate('+mDeg+'deg)';
M.style.webkitTransform = 'rotate('+mDeg+'deg)';
M.style.msTransform = 'rotate('+mDeg+'deg)';


}
