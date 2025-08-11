  const svgPath = document.querySelector("svg path");
  const finalPath = "M 100 100 Q 500 100 990 100";
  document.getElementById("string").addEventListener("mousemove", (e) => {
    let x = e.clientX;  
    let y = e.clientY; 

    // Keep the control point within SVG height
    y = Math.max(0, Math.min(200, y));

    const path = `M 100 100 Q ${x} ${y} 990 100`;

    gsap.to(svgPath, {
      attr: { d: path },
      duration: 0.1,
      ease:"power3.out"
    });
  });
document.getElementById("string").addEventListener("mouseleave", (e) => {
    gsap.to(svgPath, {
      attr: { d: finalPath },
      duration: 1.5,
      ease:"elastic.out(1, 0.2)"
    }); 
})