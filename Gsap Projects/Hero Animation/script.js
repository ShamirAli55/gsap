const TextBreak = () => {
  var h1 = document.querySelector("h1");

  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");
  var halfValue = Math.ceil(splittedText.length / 2);

  var clutter = "";

  splittedText.forEach((element, index) => {
    if (index < halfValue) {
      clutter += `<span class="first_half">${element}</span>`;
    } else {
      clutter += `<span class="second_half">${element}</span>`;
    }
  });

  h1.innerHTML = clutter;
};

TextBreak();

gsap.from("h1 .first_half", {
  y:80,
  opacity: 0,
  duraion: 0.6,
  delay: 0.5,
  stagger: 0.2,
  rotate:360,
  ease: "power3.out",
});

gsap.from("h1 .second_half", {
  x: 70,
  y: 70,
  opacity: 0,
  duraion: 0.8,
  delay: 0.5,
  rotate:-360,
  stagger: -0.2,
  ease: "power3.out",
});
