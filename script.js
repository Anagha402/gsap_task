// home
// let tl=gsap.timeline()


// tl.from(".front h1",{
//     y:1000,
//     duration:1

// })

// tl.from("#coffeecan",{
//     y:1000,
//     duration:1,
//     scale:2

// })

// tl.from("#coffeebean1",{
//     y:800,
//     duration:1

// })
// tl.from("#coffeebean2",{
//     y:800,
//     duration:1

// })
// tl.from("#coffeebean3",{
//     y:800,
//     duration:1

// })
// tl.from("#coffeebean4",{
//     y:800,
//     duration:1

// })
// tl.from("#coffeebean5",{
//     y:800,
//     duration:1

// })
// tl.from("#coffeebean6",{
//     y:800,
//     duration:1

// })
// about
let t2=gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        scrub:2,
        marker:true,
        start:"0% 90%",
        end:"50% 40%"
    }
})
t2.to("#coffeecan",{
    top:950,
    left:130,
    scale:0.7

})
t2.to("#coffeebean4",{
    top:950,
    left:130,
    scale:0.7

})