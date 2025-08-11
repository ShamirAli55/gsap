window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    gsap.to(".slider", {
      transform: "translateX(-200%)",
      duration: 5,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".slider img", {
      rotate: 180,
    });
  } else {
    gsap.to(".slider", {
      transform: "translateX(0%)",
      duration: 5,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".slider img", {
      rotate: 0,
    });
  }
});
