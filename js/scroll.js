

var tl = new TimelineMax();
var tlTwo = new TimelineMax();
const controllerTwo = new ScrollMagic.Controller();

tl.from("#bio", .5, {x:200, opacity:0});
tl.from("span", 1, {width: 0}, "=-.5")
tl.from("#bigImg", 1, {x:-200, opacity:0}, "=-1");
tl.from("#smallImg", 1, {x:'100%', opacity:0},"=-.7");



const scene = new ScrollMagic.Scene({
    triggerElement: '#about-title',
    // triggerHook: 'onLeave',
    // duration: '100%'
})

// .setPin("about-title")
.setTween(tl)
.addTo(controllerTwo);

function updatePercentage(){
    tl.progress();

}



tlTwo = new TimelineMax();

tlTwo.from(".music-title", 1, {x:'50%' , opacity:0});
const scene2 = new ScrollMagic.Scene({
    triggerElement: '.listen'
})

.setTween(tlTwo)
.addTo(controllerTwo)

tlThree = new TimelineMax();

tlThree.from(".video-header", 1, {x:-200, opacity: 0});
const scene3 = new ScrollMagic.Scene({
    triggerElement: '.videosub'
})

.setTween(tlThree)
.addTo(controllerTwo)