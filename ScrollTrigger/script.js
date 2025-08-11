// <--- Scroll Trigger --->
gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
})

gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:
    {
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
    }
})

gsap.from("#page3 h1",{
    x:400,
    scale:0,
    delay:1,
    duration:2,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 10%",
        scrub:true
    }
})

gsap.from("#page3 h2",{
    x:-400,
    scale:0,
    delay:1,
    duration:2,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 50%"
    }
})