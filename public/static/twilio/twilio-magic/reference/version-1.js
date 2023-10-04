// ================================
// GSAP ScrollTrigger
// ================================

gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.defaults({ markers: true });

const heroTimeline = gsap.timeline();
const isDottted = () => document.querySelector(".magic-venn-top-left").classList.toggle("is-dotted")
const removeHover = () => document.querySelectorAll(".magic-venn-circle").forEach(el => el.classList.toggle("has-no-hover"))

heroTimeline
.to(".hero-left", { scale: 5, autoAlpha: 0, rotation: 80, x: "-50vw", y: "-50vh", ease: "back.in(0.5)", duration: 40 })
.call(removeHover)
.to(".magic-venn-bottom-right", { scale: 10, rotation: 50, autoAlpha: 0, ease: "back.in(0.5)", duration: 20 }, "-=15")
.to(".magic-venn-bottom-left", { scale: 10, rotation: 70, autoAlpha: 0, ease: "back.in(0.5)", duration: 20 }, "-=15")
.call(isDottted)
.to(".hero-link", { autoAlpha: 0, ease: "back.in(0.5)", duration: 20 }, "-=15")
.to(".magic-venn-top-right", { scale: 10, rotation: 110, autoAlpha: 0, ease: "back.in(0.5)", duration: 20 }, "-=15")
.to(".magic-venn-top-left", { scale: 10, rotation: 130, autoAlpha: 0.3, y: "50vh", ease: "back.in(0.5)", duration: 40 }, "-=15")
.set(".theme", { className: "theme is-dark"}, "<")

ScrollTrigger.create({
  id: "venn",
  trigger: ".section-hero",
  animation: heroTimeline,
  pin: true,
  scrub: 2,
});

const valuesTimeline = gsap.timeline();
const valuesCard = gsap.utils.toArray(".js-values-card");
console.log(valuesCard)


valuesTimeline
.from(valuesSections.querySelectorAll(".js-values-card"), { 
  stagger: {
    amount: 1,
    from: "random"
  },
  scale: 0.8, 
  autoAlpha: 0, 
  y: randomPosOrNegInteger,
  x: randomPosOrNegInteger,
  rotation: randomPosOrNegInteger,
  transformOrigin: "${randomPosOrNegInteger}px ${randomPosOrNegInteger}px",
  ease: "back.out(1.3)",
  duration: 1,
})

valuesSections.forEach((section, i) => {
  console.log(section)
  ScrollTrigger.create({
    id: `values-${i}`,
    markers: true,
    trigger: section,
    animation: valuesTimeline,
    start: "top 10%",
    end: "bottom -=100vh",
    pin: true,
    scrub: 0.5,
  });
});

const twilionTimeline = gsap.timeline();
const twilionHeader = gsap.utils.toArray(".js-twilion-header");
twilionTimeline.fromTo(twilionHeader, { scale: 0.8, autoAlpha: 0 }, {  scale: 1, autoAlpha: 1, ease: "power3.out", duration: 1 })

twilionSections.forEach((section, i) => {
  // console.log(section)
  ScrollTrigger.create({
    markers: true,
    id: `twilion-${i}`,
    trigger: section,
    pin: true,
    animation: twilionTimeline,
    scrub: 1,
    onEnter: () => document.querySelector(".theme").className = "theme is-light",
    onLeaveBack: () =>  document.querySelector(".theme").className = "theme is-dark",
  });
});

const livingTimeline = gsap.timeline();
const toggleBackgrounds = () => document.querySelectorAll(".has-image").forEach(el => el.classList.toggle("is-completed"))

livingTimeline
.from(".atropos-magic-venn-top-left", { autoAlpha: 0, x: "-50px", y: "-50px", ease: "power3.out", duration: 4 })
.from(".atropos-magic-venn-top-right", { autoAlpha: 0, x: "50px", y: "-50px", ease: "power3.out", duration: 4 })
.from(".atropos-magic-venn-bottom-left", { autoAlpha: 0, x: "-50px", y: "50px", ease: "power3.out", duration: 4 })
.call(toggleBackgrounds)
.from(".atropos-magic-venn-bottom-right", { autoAlpha: 0, x: "50px", y: "50px", ease: "power3.out", duration: 4 })

ScrollTrigger.create({
  id: "living",
  trigger: ".section-living",
  animation: livingTimeline,
  pin: true,
  scrub: 1,
});

ScrollTrigger.create({
  id: "menu-toggle",
  trigger: ".twilio-nav",
  end: "bottom 74px",
  toggleClass: { targets: ".js-menu-toggle", className: "is-pinned" },
});

const ctasTimeline = gsap.timeline();

ctasTimeline.from(".slide-up-reveal span", 5, {
  y: "8vmax",
  ease: "power3.out",
  transformOrigin: "bottom left",
  skewY: 10,
  stagger: {
    amount: 0.5
  }
})
.from(".ctas-content", 1.5, { autoAlpha: 0 })

ScrollTrigger.create({
  id: "ctas",
  trigger: ".section-ctas",
  start: "top 20%",
  end: "bottom 100%",
  animation: ctasTimeline,
  scrub: 1
});
