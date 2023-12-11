var tl = gsap.timeline();

tl.to(" #nav #logo", {
    x:50,
    duration: 0.5,
    ease: Expo.EaseInout,
    delay: 0.5,
    opacity:0.8
})
tl.to("#middle ul li", {
    x: 80,
    duration: 1,
    ease: Expo.EaseInout,
    stagger: 0.1,
    opacity: 1

})
tl.to(".ri-search-line", {
    x: 20,
    duration: 1,
    ease: Expo.EaseInout,
    stagger: 0.1,
    opacity: 1

})
tl.to(".ri-shopping-cart-2-fill", {
    x: 20,
    duration: 0.5,
    ease: Expo.EaseInout,
    stagger: 1,
    opacity: 2

})
tl.from("#orange", {
    y: 20,
    delay: 1,
    opacity: 0,
    duration: 0.3, ease: "power3.out"

})
tl.from("#para", {
    y: 20,
    delay: 0.8,
    opacity: 0,
    duration: 0.3, ease: "power2.out"

})
tl.from("#healthy", {
    y: 22,
    delay: 1,
    opacity: 0,
    duration: 0.3, ease: "power2.out"

})
tl.from("button", {
    y: 22,
    delay: 0,
    opacity: 0,
    duration: 0.3, ease: "power2.out"

})
tl.from("#block", {
    y: -1000,
    duration: 0.8
})

tl.from("#pepsi", {
    y: -800,
    duration: 0.3,
    ease: "Expo.easeinout"
})
tl.from("#arrow", {
    y: 22,
    duration: 0.5,
    delay: 0,
    opacity: 0,
    duration: 0.3, ease: "power1.out"

})
