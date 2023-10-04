// ================================
// GSAP ScrollTrigger
// ================================

gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.defaults({ markers: true });

const heroTimeline = gsap.timeline({
  scrollTrigger: {
    id: "venn",
    trigger: ".section-hero",
    pin: true,
    scrub: true,
  }
});
const isDark = () => document.querySelector("body").classList.toggle("is-dark")
const isPink = () => document.querySelector("body").classList.toggle("is-pink")
const isRed = () => document.querySelector("body").classList.toggle("is-red")
const isBlue = () => document.querySelector("body").classList.toggle("is-blue")
const isDottted = () => document.querySelector(".magic-venn-top-left").classList.toggle("is-dotted")
const removeHover = () => document.querySelectorAll(".magic-venn-circle").forEach(el => el.classList.toggle("has-no-hover"))

heroTimeline
.to(".js-hero-0", { autoAlpha: 0, ease: "back.in(0.5)", duration: 40 })
.set(".theme", { className: "theme is-pink"}, ">")
.from(".js-hero-1", { autoAlpha: 0, duration: 40})
.to(".js-hero-1", { autoAlpha: 0, duration: 40})
.call(removeHover)
.to(".hero-link", { autoAlpha: 0, ease: "back.in(0.5)", duration: 40 })
.from(".back-to-top", { autoAlpha: '0', duration: 40 })
.set(".theme", { className: "theme is-dark"}, "<")

.to(".magic-venn-top-left", { scale: 1.1, ease: "back.in(0.5)", duration: 40 })
.to(".magic-venn-top-right", { autoAlpha: 0.1, ease: "back.in(0.5)", duration: 40 }, "<")
.to(".magic-venn-bottom-left", { autoAlpha: 0.1, ease: "back.in(0.5)", duration: 40 }, "<")
.to(".magic-venn-bottom-right", { autoAlpha: 0.1, ease: "back.in(0.5)", duration: 40 }, "<")
.to(".magic-venn", { scale: 0.25, rotation: -180, ease: "back.in(0.5)", duration: 40 })
.to(".magic-venn-top-left", { autoAlpha: 0.1, ease: "back.in(0.5)", duration: 40 }, "<")
.to(".magic-venn-top-right", { autoAlpha: 0.1, ease: "back.in(0.5)", duration: 40 }, "<")
.to(".magic-venn-bottom-left", { autoAlpha: 0.1, ease: "back.in(0.5)", duration: 40 }, "<")
.to(".magic-venn-bottom-right", { autoAlpha: 1, ease: "back.in(0.5)", duration: 40 }, "<")
.to(".magic-venn", { autoAlpha: 0, y: -50, ease: "back.in(0.5)", duration: 40 }, ">")
// .to(".js-section-builders", {autoAlpha: 1, y: -500, ease: "back.in(0.5)", duration: 40 })
// .from(".value-venn", { autoAlpha: 0, y: 50, ease: "back.in(0.5)", duration: 40 }, "<")
// .to(".value-venn-top-left", { scale: 1.1, ease: "back.in(0.5)", duration: 40 }, "<")
// .to(".value-venn-top-right", { autoAlpha: 0.3, ease: "back.in(0.5)", duration: 40 }, "<")
// .to(".value-venn-bottom-left", { autoAlpha: 0.3, ease: "back.in(0.5)", duration: 40 }, "<")
// .to(".value-venn-bottom-right", { autoAlpha: 0.3, ease: "back.in(0.5)", duration: 40 }, "<")
// .from(".value-header", {autoAlpha: 0, ease: "back.in(0.5)", duration: 40}, ">")
// .to(".value-venn", { scale: 0.25, rotation: -180, ease: "back.in(0.5)", duration: 40 })
// .to(".value-venn-top-left", { autoAlpha: 0.3, ease: "back.in(0.5)", duration: 40 }, "<")
// .to(".value-venn-top-right", { autoAlpha: 0.3, ease: "back.in(0.5)", duration: 40 }, "<")
// .to(".value-venn-bottom-left", { autoAlpha: 0.3, ease: "back.in(0.5)", duration: 40 }, "<")
// .to(".value-venn-bottom-right", { autoAlpha: 1, ease: "back.in(0.5)", duration: 40 }, "<")

// const builderTimeline = gsap.timeline({
//   scrollTrigger: {
//     id: "builders",
//     trigger: ".js-section-builders",
//     // pin: true,
//     scrub: true,
//     start: "top bottom",
//     duration: 25
//   }
// });

// builderTimeline
//   .from(".value-venn", { autoAlpha: 0, y: 50, ease: "back.in(0.5)", duration: 40 }, "<")
//   .from(".value-header", {autoAlpha: 0, ease: "back.in(0.5)", duration: 40}, ">")
//   .to(".value-venn-top-left", { scale: 1.1, ease: "back.in(0.5)", duration: 40 }, "<")
//   .to(".value-venn-top-right", { autoAlpha: 0.3, ease: "back.in(0.5)", duration: 40 }, "<")
//   .to(".value-venn-bottom-left", { autoAlpha: 0.3, ease: "back.in(0.5)", duration: 40 }, "<")
//   .to(".value-venn-bottom-right", { autoAlpha: 0.3, ease: "back.in(0.5)", duration: 40 }, "<")
//   .to(".value-venn", { scale: 0.25, rotation: -180, ease: "back.in(0.5)", duration: 40 })
//   .to(".value-venn-top-left", { autoAlpha: 0.3, ease: "back.in(0.5)", duration: 40 }, "<")
//   .to(".value-venn-top-right", { autoAlpha: 0.3, ease: "back.in(0.5)", duration: 40 }, "<")
//   .to(".value-venn-bottom-left", { autoAlpha: 0.3, ease: "back.in(0.5)", duration: 40 }, "<")
//   .to(".value-venn-bottom-right", { autoAlpha: 1, ease: "back.in(0.5)", duration: 40 }, "<")
//   .from(".value-right", { autoAlpha: 0, ease: "back.in(0.5)", duration: 40 }, "<")



  // var valuesSections = gsap.utils.toArray('.js-section-values')

  // valuesSections.forEach(function (section, i) {
  //   const randomPosOrNegInteger = () => Math.ceil(Math.random() * 50) * (Math.round(Math.random()) ? 1 : -1);
  //   gsap.timeline()
  //   .fromTo(section.querySelectorAll(".js-values-card"), { 
  //     scale: 0.8, 
  //     autoAlpha: 0, 
  //     y: randomPosOrNegInteger,
  //     x: randomPosOrNegInteger,
  //     rotation: randomPosOrNegInteger,
  //     duration: 4
  //   },{
  //     scale: 1, 
  //     autoAlpha: 1, 
  //     y: 0,
  //     x: 0,
  //     rotation: 0,
  //     ease: "power3.out",
  //     duration: 1,
  //     transformOrigin: "${randomPosOrNegInteger}px ${randomPosOrNegInteger}px", 
  //     stagger: {
  //       amount: 1,
  //       from: "random"
  //     },
  //     scrollTrigger: {
  //       markers: true,
  //       id: `values-${i}`,
  //       trigger: section,
  //       start: "top bottom",
  //       end: () => `+=${section.offsetHeight}`,
  //       onEnter: () => document.querySelector(".theme").className = "theme is-dark",
  //       onLeaveBack: () =>  document.querySelector(".theme").className = "theme is-light",
  //       // pin: true,
  //       scrub: true,
  //     }
  //   })
  // });
  

var twilionSections = gsap.utils.toArray('.js-section-twilion')
twilionSections.forEach(function (section, i) {
  gsap.timeline({
    scrollTrigger: {
      // markers: true,
      id: `twilion-${i}`,
      trigger: section,
      onEnter: () => document.querySelector(".theme").className = "theme is-red",
      onLeaveBack: () => document.querySelector(".theme").className = "theme is-dark",
      onEnterBack: () => document.querySelector(".theme").className = "theme is-red",
      onLeave: () => document.querySelector(".theme").className = "theme is-dark",
      pin: true,
      scrub: true,
    }
  })
  .from(section.querySelectorAll(".twilion-image"), { autoAlpha: 0, scale: 0.9, y: 100, ease: "back.in(0.5)", duration: 40 })
  .from(section.querySelectorAll(".venn-image"), { autoAlpha: 0, x: 100, rotation: 180, ease: "back.in(0.5)", duration: 40 }, "<")
  .from(section.querySelectorAll(".js-twilion-header"), { 
    autoAlpha: 0,
    y: 100,
    ease: "back.in(0.5)", 
    duration: 40,
  }, "<")
  .to(".delay", {autoAlpha: 0, duration: 40})
});

const missingTimeline = gsap.timeline(
  {
    scrollTrigger: {
      markers: true,
      id: "missing",
      trigger: ".section-missing",
      pin: true,
      scrub: 0.1,
      onEnter: () => document.querySelector(".theme").className = "theme is-blue",
      onEnterBack: () => document.querySelector(".theme").className = "theme is-bluer",
      onLeave: () => document.querySelector(".theme").className = "theme is-light",
      onLeaveBack: () => document.querySelector(".theme").className = "theme is-dark",
    },
    defaults: { duration: 400000 }
  }
).timeScale(0.025);

missingTimeline
// Header
.from(".js-missing-0", {autoAlpha: '0', y: 50, ease: "back.in(0.5)"})
.to(".js-missing-venn-0", {autoAlpha: '1', ease: "back.in(0.5)"}, "<")

.to(".delay", {autoAlpha: 0, duration: 4000000})

.to(".js-missing-0", {autoAlpha: '0', ease: "back.in(0.5)"})
.to(".js-missing-venn-0", {autoAlpha: '0', ease: "back.in(0.5)"}, "<")


// What happens...
.from(".js-missing-1", {autoAlpha: '0', y: '100px', ease: "back.in(0.5)"})
.to(".js-missing-venn-1", {autoAlpha: '1', ease: "back.in(0.5)"}, "<")


.to(".delay", {autoAlpha: 1, duration: 4000000})

.to(".js-missing-1", {autoAlpha: '0', y: '-100px', ease: "back.in(0.5)"})
.to(".js-missing-venn-1", {autoAlpha: '0', ease: "back.in(0.5)"}, "<")

.set(".theme", { className: "theme is-bluer"}, ">")

// Positron
.from(".js-missing-2", {autoAlpha: '0', ease: "back.in(0.5)"})
.to(".js-missing-venn-2", {autoAlpha: '1', ease: "back.in(0.5)"}, "<")
.to(".missing-venn-bottom-right", {autoAlpha: '0.4', ease: "back.in(0.5)"}, "<")


.to(".delay", {autoAlpha: 0, duration: 4000000})

.to(".js-missing-2", {autoAlpha: '0', ease: "back.in(0.5)"}, ">")
.to(".js-missing-venn-2", {autoAlpha: '0', ease: "back.in(0.5)"}, "<")
.to(".missing-venn-bottom-right", {autoAlpha: '1', ease: "back.in(0.5)"}, "<")

// Curious
.from(".js-missing-3", {autoAlpha: '0', ease: "back.in(0.5)"})
.to(".js-missing-venn-3", {autoAlpha: '1', ease: "back.in(0.5)"}, "<")
.to(".missing-venn-bottom-left", {autoAlpha: '0.4', ease: "back.in(0.5)"}, "<")

.to(".delay", {autoAlpha: 1, duration: 4000000})

.to(".js-missing-3", {autoAlpha: '0', ease: "back.in(0.5)"}, ">")
.to(".js-missing-venn-3", {autoAlpha: '0', ease: "back.in(0.5)"}, "<")
.to(".missing-venn-bottom-left", {autoAlpha: '1', ease: "back.in(0.5)"}, "<")

// Owner
.from(".js-missing-4", {autoAlpha: '0', ease: "back.in(0.5)"})
.to(".js-missing-venn-4", {autoAlpha: '1', ease: "back.in(0.5)"}, "<")
.to(".missing-venn-top-right", {autoAlpha: '0.4', ease: "back.in(0.5)"}, "<")

.to(".delay", {autoAlpha: 0, duration: 4000000})

.to(".js-missing-4", {autoAlpha: '0', ease: "back.in(0.5)"}, ">")
.to(".js-missing-venn-4", {autoAlpha: '0', ease: "back.in(0.5)"}, "<")
.to(".missing-venn-top-right", {autoAlpha: '1', ease: "back.in(0.5)"}, "<")

// Builder
.from(".js-missing-5", {autoAlpha: '0', ease: "back.in(0.5)"})
.to(".js-missing-venn-5", {autoAlpha: '1', ease: "back.in(0.5)"}, "<")
.to(".missing-venn-top-left", {autoAlpha: '0.4', ease: "back.in(0.5)"}, "<")

.to(".delay", {autoAlpha: 1, duration: 4000000})

.to(".js-missing-5", {autoAlpha: '0', ease: "back.in(0.5)"}, ">")
.to(".js-missing-venn-5", {autoAlpha: '0', ease: "back.in(0.5)"}, "<")
.to(".missing-venn-top-left", {autoAlpha: '1', ease: "back.in(0.5)"}, "<")

.to(".delay", {autoAlpha: 0, duration: 4000000})

.set(".theme", { className: "theme is-light"}, ">")
.to(".missing-venn-bottom-right", { scale: 10, rotation: 50, autoAlpha: 0, ease: "back.in(0.5)" })
.to(".missing-venn-bottom-left", { scale: 10, rotation: 70, autoAlpha: 0, ease: "back.in(0.5)" })
.to(".missing-venn-top-right", { scale: 10, rotation: 110, autoAlpha: 0, ease: "back.in(0.5)" })
.to(".missing-venn-top-left", { scale: 10, rotation: 130, autoAlpha: 0, y: "50vh", ease: "back.in(0.5)" })

// ScrollTrigger.create({
//     animation: missingTimeline,
//     id: 'missing',
//     trigger: ".section-missing",
//     pin: true,
//     scrub: 0.5,
//     onEnter: () => document.querySelector(".theme").className = "theme is-blue",
//     onEnterBack: () => document.querySelector(".theme").className = "theme is-bluer",
//     onLeave: () => document.querySelector(".theme").className = "theme is-light",
//     onLeaveBack: () => document.querySelector(".theme").className = "theme is-dark",
//   });

const livingTimeline = gsap.timeline();
const toggleBackgrounds = () => document.querySelectorAll(".has-image").forEach(el => el.classList.toggle("is-completed"))
const addBackgrounds = () => document.querySelectorAll(".has-image").forEach(el => el.classList.toggle("is-completed"))
const removeBackgrounds = () => document.querySelectorAll(".has-image").forEach(el => el.classList.toggle("is-completed"))

livingTimeline
.call(addBackgrounds)
.set(".theme", { className: "theme is-light"}, "<")
.from(".atropos-magic-venn-top-left", { autoAlpha: 0, x: "-200px", y: "-200px", ease: "power3.out", duration: 400 }, "<")
.from(".atropos-magic-venn-top-right", { autoAlpha: 0, x: "200px", y: "-200px", ease: "power3.out", duration: 400 }, "<")
.from(".atropos-magic-venn-bottom-left", { autoAlpha: 0, x: "-200px", y: "200px", ease: "power3.out", duration: 400 }, "<")
.from(".atropos-magic-venn-bottom-right", { autoAlpha: 0, x: "200px", y: "200px", ease: "power3.out", duration: 400 }, "<")
.call(addBackgrounds)
.to(".delay", {autoAlpha: 0, duration: 400})
.call(removeBackgrounds)

ScrollTrigger.create({
  id: "living",
  trigger: ".section-living",
  animation: livingTimeline,
  pin: true,
  scrub: 1,
  // onEnter: () => document.querySelector(".theme").className = "theme is-blue",
  // onEnterBack: () => document.querySelector(".theme").className = "theme is-bluer",
  // onLeave: () => document.querySelector(".theme").className = "theme is-light",
  // onLeaveBack: () => document.querySelector(".theme").className = "theme is-dark",
});

ScrollTrigger.create({
  id: "menu-toggle",
  trigger: ".twilio-nav",
  end: "bottom 74px",
  toggleClass: { targets: ".js-menu-toggle", className: "is-pinned" },
});

const ctasTimeline = gsap.timeline();
ctasTimeline.from(".slide-up-reveal span", 10, {
  y: "8vmax",
  ease: "power3.out",
  transformOrigin: "bottom left",
  skewY: 10,
  stagger: {
    amount: 2
  }
})
.from(".ctas-content", 5, { autoAlpha: 0 })

ScrollTrigger.create({
  id: "ctas",
  trigger: ".section-ctas",
  start: "top 20%",
  end: "bottom 100%",
  animation: ctasTimeline,
  scrub: 1
});
