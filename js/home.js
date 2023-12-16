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
navObserver.observe(top_section)