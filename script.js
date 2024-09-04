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
    scale:0.7,
    

},"hi")//hi or any other word is used as id is used to make same thing appear to two different elements at same time
t2.to("#coffeebean5",{
    top:990,
    left:253,
    scale:0.7,
    rotate:142,
    
    

},"hi")

// menu
let t3=gsap.timeline({
    scrollTrigger:{
        trigger:"#menu",
        scroller:"body",
        scrub:2,
        marker:true,
        start:"0% 90%",
        end:"50% 40%"
    }
},"hi")

t3.to("#coffeecan",{
    top:1660,
    left:647,
    scale:0.8


},"hi")

t3.to("#coffeebean5",{
    top:1700,
    left:777,
    scale:0.7,
    rotate:239

},"hi")

t3.from("#fanta",{ //coming from somewhere else to original position
    x:-300,
    duration:1

},"hi")

t3.from("#sprite",{//coming from somewhere else to original position
    x:300,
    duration:1

},"hi")


t3.from("#bean1",{ //coming from somewhere else to original position
    x:-300,
    duration:1,
    rotate:200

},"hi")

t3.from("#bean2",{//coming from somewhere else to original position
    x:300,
    duration:1,
    rotate:200

},"hi")