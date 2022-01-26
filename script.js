document.addEventListener("DOMContentLoaded", function(event) { 
    let controller = new ScrollMagic.Controller();
    //timeline for running different animations at the same time
    let timeline = new TimelineMax();

    //Animations
    timeline
    .fromTo('.iphone13', 3,{y:0}, {y:-300})
    .to('.iphone13', 3, {opacity:0} )
    .to('.iphone13pro', 1, {opacity:1})
    .fromTo('.iphone13pro', 3,{y:0}, {y:-300}, '-=1')
    .fromTo(".text", 5, { opacity:0}, { opacity:1, duration: 3})
    .to('.content', 3, {top:'0%'})

    /*
    ;
    */

    //When we trigger the animations
    let scene = new ScrollMagic.Scene({
        triggerElement: "section",
        duration: "100%",
        //triggerHook - when I decided the animations start
        triggerHook:0,
    })
    .setTween(timeline)
    .setPin("section")
    .addTo(controller);
});
