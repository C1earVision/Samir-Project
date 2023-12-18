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
  header.style.backgroundPositionX = progressx+'rem'//-15+event.clientX/100+'rem';
  header.style.backgroundPositionY = progressy+'rem'//-10+event.clientY/100+'rem';
  goalx = -15+event.clientX/100
  goaly = -10+event.clientY/100
  header.style.backgroundPosition.X = -15
  header.style.backgroundSize = '120%'
};

// the function runs 60 times a second
function update(){
  progressx = lerp(progressx,goalx,.5)
  progressy = lerp(progressy,goaly,.5)
  requestAnimationFrame(update)
}

update()

navObserver.observe(top_section)