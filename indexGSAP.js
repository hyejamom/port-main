$(()=>{

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.addEventListener("refresh", () => {})

    let footerTxt = gsap.timeline({
        scrollTrigger: {
            trigger : '#footer',
            start : 'top bottom',
            scrub : true,
            end: "+=300px"
        }
    })


    
    footerTxt.to('.thanks-box',{ 'transform':'translateX(0)', duration:1 })



})