const nav_bar = document.getElementById('nav-bar')
const top_section = document.getElementById('scroll')
const navObserver = new IntersectionObserver((entries, observer)=>{
  const entry = entries[0];
  if(!entry.isIntersecting){
    nav_bar.classList.add('float')
    nav_bar.classList.remove('pt-10')
  }else{
    nav_bar.classList.remove('float')
    nav_bar.classList.add('pt-10')
  }
}, {})

function lerp(a,b,c){
  return a+(b-a)*c; // 
}

let goalx=0;
let goaly=0;

let progressx=0;
let progressy=0;

// I ANIMTED THE BACKGROUND FINALLY!!!
const header = document.getElementsByTagName('header')[0]
header.onmousemove = function(event) {
  goalx = -15+event.clientX/100
  goaly = -10+event.clientY/100
  header.style.backgroundSize = '120%'
};

// the function runs 60 times a second
function update(){
  header.style.backgroundPositionX = progressx+'rem'
  header.style.backgroundPositionY = progressy+'rem'
  progressx = lerp(progressx,goalx,.2)
  progressy = lerp(progressy,goaly,.2)
  requestAnimationFrame(update)
}

update()

navObserver.observe(top_section)