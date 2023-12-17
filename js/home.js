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

// I ANIMTED THE BACKGROUND FINALLY!!!
const header = document.getElementsByTagName('header')[0]
header.onmousemove = function(event) {
  header.style.backgroundPositionX = -15+event.clientX/100+'rem';
  header.style.backgroundPositionY = -10+event.clientY/100+'rem';
  header.style.backgroundSize = '120%';
};

navObserver.observe(top_section)