function watch() {
  var time = new Date();
  const clock = document.querySelector("#watch");
  if (clock) {
    clock.innerHTML = time.toLocaleTimeString();
  }
}

function showDate() {
  var d = new Date();
  const date = document.getElementById("date");
  date.innerHTML = d.toLocaleDateString("pl-PL");
}
watch();
setInterval(watch, 1000);
showDate();

const icon = document.querySelector(".menu-mobile");
const menu = document.querySelector(".navbar-list");

icon.addEventListener("click", function (e) {
  menu.classList.toggle("show");
});

const sudetyList = document.querySelector('.sudety')
const karpatyList = document.querySelector('.karpaty')

if(document.getElementById('map-t')){
  document.querySelector('#area-sudety').addEventListener('click',function(e){
    sudetyList.classList.add('active')
    karpatyList.classList.remove('active')
  
  })
  
  document.querySelector('#area-karpaty').addEventListener('click',function(e){
    karpatyList.classList.add('active')
    sudetyList.classList.remove('active')
   
  })
  
  document.getElementById('map-t').addEventListener('mouseleave',function(){
    karpatyList.classList.remove('active')
    sudetyList.classList.remove('active')
  })
  
}




// logo

const canvas = document.getElementById('logo')
const context = canvas.getContext('2d')
canvas.width = 320;
canvas.height = 150;
context.fillStyle="green";
context.beginPath();

context.strokeStyle = "green"

context.moveTo(0,150);
context.lineTo(105,45);
context.moveTo(105,45);
context.lineTo(160,90);
context.moveTo(160,90);
context.lineTo(270,10);
context.moveTo(270,10);
context.lineTo(320,150)
context.moveTo(0,150);
context.lineTo(320,150);

context.font = "italic bold 26px JOST";
const textMetrics  = context.measureText('KGP').width;

context.fillText("KGP", 160-(textMetrics/2),125);
context.stroke();
