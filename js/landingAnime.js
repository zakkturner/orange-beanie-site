
// Enter button Bounce
gsap.from('.enter', 2.5, { ease: Bounce.easeOut, y: -1000 });
gsap.to('.landing-txt', 2, {opacity:1, y:20, stagger: 2, delay: 2})


document.querySelector('.enter').addEventListener('click', animate)

function animate (){
    gsap.to('.enter', .5, {
        borderRadius: 0,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        className:"+=fixed",
        ease: Expo.easeIn
      });

      gsap.to('.landing-txt', .1, {
        opacity: 0,
        y: 50
      })
}