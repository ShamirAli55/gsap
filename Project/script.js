var tl = gsap.timeline();
tl.from("nav h1",{
    y: -100,
    opacity: 0,
    duration:0.5,
    ease: "power1.inOut",
    delay:0.2,
    stagger:0.2,
})
tl.from("nav .tags a",{
    y: -100,
    opacity: 0,
    duration:1,
    ease: "power1.inOut",
    delay:0.5,
    // stagger:0.2,
})
tl.from(".container .left h1",{
    x:-700,
    duration:0.3,
    opacity: 0,
})
tl.from(".container .left p",{
    x:-700,
    duration:0.5,
    opacity: 0,
})
tl.from(".container .left button",{
    opacity: 0,
})
tl.from(".container .right",{
    y:-700,
    duration:0.5,
    opacity: 0,
},"-=1");

tl.from(".top .img_container img",{
    y:30,
    duration:0.5,
    opacity: 0,
    stagger: 0.2,
    ease: "power1.inOut"
},">=0.5");

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".sec-bottom",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        end:"top 10%",
        scrub:1
    }
});

tl2.from(".sec-bottom h1",{
    x:-100,
    opacity: 0,
    duration: 0.5,
    ease: "power1.inOut",
}).from(".sec-bottom p",{
    y:70,
    duration:0.3,
    delay:0.2,
    opacity: 0,
});

tl2.from(".card.line1.lef",{
    x:-300,
    opacity: 0,
    duration: 4,
    delay:0.7,
    ease: "power1.inOut",

},"anim")

tl2.from(".card.line1.righ",{
    x:300,
    opacity: 0,
    duration: 4,
    delay:0.7,
},"anim+=1")

tl2.from(".card.line2.lef",{
    x:-300,
    opacity: 0,
    duration: 1,
})

tl2.from(".card.line2.right",{
    x:300,
    opacity: 0,
    duration: 1,
})