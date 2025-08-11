var tl = gsap.timeline();

const menu = document.getElementById("menu");
const close = document.getElementById("cross");

  tl.to(".container",{
    right:0,
    duration:0.3,
    delay:0.1,
    ease:"power3.out"
  })
    tl.from(".container i",{
    x:200,
    duration:0.01,
    opacity:0
  })


tl.pause();
menu.addEventListener("click", () => {
  tl.play();
})
close.addEventListener('click', ()=>
{
  tl.reverse();
})