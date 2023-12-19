const drop_dwn_button = document.getElementById('drop-dwn-button')
const dropdown = document.getElementById('dropdown')

let clicked = true
drop_dwn_button.addEventListener('click', ()=>{
  clicked ? dropdown.classList.remove('hidden') : dropdown.classList.add('hidden')
  clicked = !clicked
})
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
const img = document.getElementById('rotate')

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
  img.style.transform = `rotate(${-progressx/2-3}deg)`
  
  requestAnimationFrame(update)
}

update()

navObserver.observe(top_section)