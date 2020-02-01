let t1 = new TimelineMax({paused: true});
const  link = document.querySelectorAll("a");


t1.to(".one", .8, {
    opacity:0,
    x: 100,
    // rotation: 45,
    ease: Expo.easeInOut
});

t1.from(".two", .8, {
    opacity: 0,
    x: 100,
    ease: Expo.easeInOut,
    delay: -0.8
});

t1.to(".menu", 2, {
    top: "0%",
    ease: Expo.easeInOut,
    delay: -1
})

t1.staggerFrom(".menu ul li", 2, {x: -600, oopacity: 0, ease: Expo.easeOut}, 0.3)

t1.reverse();

document.querySelector(".toggle-btn").addEventListener("click", function(){
    t1.reversed(!t1.reversed())
})


for (let index = 0; index < link.length; index++) {
    link[index].addEventListener("click", function(){
        t1.reversed(!t1.reversed())
    });
    
}

