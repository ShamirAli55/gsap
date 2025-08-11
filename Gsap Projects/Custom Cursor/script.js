const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  gsap.to(".cursor",{
    left: e.clientX - 10 + "px",
    top: e.clientY - 10 + "px",
    duration: 0.5,
    ease:"power3.out"
  })
})