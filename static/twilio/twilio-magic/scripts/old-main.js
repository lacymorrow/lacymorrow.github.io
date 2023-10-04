gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let contentSectionWrap = document.querySelector(".content-sections-wrapper");
let totalSectionsWrap = document.querySelector(".content-sections-wrapper .total-sections");
let parentSections = document.querySelectorAll(".content-sections-wrapper .parent-section");
let childSections = document.querySelectorAll(".content-sections-wrapper .parent-section .child-section");
let firstParentSection = parentSections[0];
let firstChildSection = childSections[0]; 

gsap.set(parentSections, {
	autoAlpha:0,
})
gsap.set(firstParentSection, {
	autoAlpha:1,
})
// Fix top
gsap.timeline({
	scrollTrigger:{
		trigger:contentSectionWrap,
		start:"-=100 top",
		onEnter:()=>{ 
			gsap.to(window, {
				scrollTo:contentSectionWrap.offsetTop + 10,
				duration:0.3,
				ease: Expo.easeOut,
			});
			document.querySelector("body").classList.add('active-twlo-slide')
		},
		onLeaveBack:()=>{
			document.querySelector("body").classList.remove('active-twlo-slide')
		}
	}
})
parentSections.forEach((section, index)=>{ 
	if(index != 0){
		let idName = section.getAttribute("id");
		let sectionDiv = document.createElement("div");
		sectionDiv.setAttribute("data-id", idName); 
		totalSectionsWrap.append(sectionDiv);
	}
})
let totalSections = document.querySelectorAll(".content-sections-wrapper .total-sections div");
// Wrapper Section Pining 
gsap.timeline({  
	scrollTrigger:{
		trigger:".sections-wrapper",
		start:"top top",
		end:`+=${totalSections[0].clientHeight * (totalSections.length - 1)}`,
		pin:true,
		// markers:true,
		// pinSpacing:false
	}
})

// Set style
gsap.set(".circle-bottom-text", {
	height:0,
	autoAlpha:0
})
gsap.set(".sections-wrapper .right-col .user-text-info", {
	autoAlpha:0,
	"display":"none" 
})
gsap.set(".sections-wrapper .pepole-image", {
	scale:0.8,
	autoAlpha:0
})


totalSections.forEach((section, index)=>{
	let getSectionId = section.getAttribute("data-id");

	let sectionTl = gsap.timeline({  
		scrollTrigger:{
			trigger:section,
			start:"top top",
			end:"bottom top",
			toggleActions: "restart none none reverse",
			// markers:true,
			// scrub:true,
			onEnter:()=>{
				section.classList.add('is-active')
			},
			onLeave:()=>{ 
				section.classList.remove('is-active')
			},
			onEnterBack:()=>{
				section.classList.add('is-active')
			},
			onLeaveBack:()=>{ 
				section.classList.remove('is-active')
			}
		}
	});
	// Header Section
	if("header-section-1" === getSectionId){ 
		sectionTl.to("#hero-section .left-col", {
			autoAlpha:0,
			duration:0.4
		}) 
		.set("#header-section-1", {
			autoAlpha:1,
		}, "-=0.4")
		.to(".content-sections-wrapper .bg-wrapper", 0.5, {
			"--left-bg": "#FEECEC",
			"--right-bg": "#FFFFFF",
			ease:'none',
		})
		.fromTo("#header-section-1 .left-col", 0.5, {
			yPercent:100,
			autoAlpha:0,
		}, {
			yPercent:0,
			autoAlpha:1,
			ease:"back.out(0.3)",
			duration:0.5
		}, "-=0.4")
	}
	// Section Builder
	if("builder-section-1" === getSectionId){
		sectionTl
		.to("#header-section-1 .left-col", {
			autoAlpha:0,
			duration:0.4
		}) 
		.set("#builder-section-1", {
			autoAlpha:1,
		}, "-=0.4")
		.to(".content-sections-wrapper .bg-wrapper", 0.5, {
			"--left-bg": "#030B5D",
			"--right-bg": "#FEF5EE", 
			ease:'none',
		})
		.fromTo("#builder-section-1 .left-col", 0.5, {
			yPercent:100,
			autoAlpha:0,
		}, {
			yPercent:0,
			autoAlpha:1,
			ease:"back.out(0.3)",
			duration:0.5
		}, "-=0.4")
		.to(["#hero-section .magic-venn-circle", "#hero-section .hero-right .hero-link"], {  
			"color":"transparent",
			duration:0.2
		}, "-=0.5")
		.to("#hero-section .hero-right .circle-bottom-link-1", {
			height:0,
			"margin-top":0,
			duration:0.2
		}, "-=0.7")
		.to(["#hero-section .magic-venn-bottom-right","#hero-section .magic-venn-bottom-left","#hero-section .magic-venn-top-right"], { 
			opacity:0.5,
			scale:0.95, 
			duration:0.1 
		}, "-=0.7")
	}
	// Section Builder 2
	if("builder-section-2" === getSectionId){
		let circleTextHeight = document.querySelector("#hero-section .circle-bottom-text");
		let textCardBoxHeight = circleTextHeight.scrollHeight;
		// sectionTl
		sectionTl 
		.to(circleTextHeight, {
			height:textCardBoxHeight,
			duration:1,
			autoAlpha:1,
			ese:Back.easeinOut
		})
		.to("#hero-section .magic-venn", {
			rotation:-270,
			width:"7vw",
			height:"7vw",
			duration:0.4,
			'margin-top':50,
			ease:Back.easeOut.config(0.1)  
		}, "-=1")
		.to("#hero-section .magic-venn .magic-venn-circle", 0.4, {
			borderWidth:3
		}, "-=1")
		.to("#hero-section .magic-venn .magic-venn-circle", 0.4, {
			borderWidth:3
		}, "-=1")
	}
	if("builder-section-3" === getSectionId){
		sectionTl
		.to(".content-sections-wrapper .bg-wrapper", 0.5, {
			"--left-bg": "#FEF5EE",
			"--right-bg": "#F22F46",  
			ease:'none',
			duration:0.5
		}, "-=0.5")
		.to("#builder-section-1", {
			autoAlpha:0,
			duration:0.5
		})
		.to("#hero-section .circle-bottom-text", {
			autoAlpha:0,
			duration:0.5
		}, "-=0.5")
		.set("#hero-section .circle-bottom-text",{
			"display":"none",
		})
		.set(".sections-wrapper .right-col .user-text-info",{ 
			"display":"block" 
		})
		.set("#builder-section-3 .left-col", {
			"padding-left":0,
			"padding-right":0,
		}) 
		.to("#hero-section .magic-venn-circle", {
			"border-color":"#fff",
			rotation:0,
		}, "-=0.5")
		.fromTo(".sections-wrapper .right-col .user-text-info", {
			autoAlpha:0,
			y:100
		}, {
			autoAlpha:1,
			y:0,
			duration:0.5
		}, "-=0.5")
		.to("#builder-section-3", {
			autoAlpha:1,
			duration:0.5
		}, "-=0.5")
		.to("#builder-section-3 .pepole-image", {
			autoAlpha:1,
			scale:1,
			duration:0.2
		})
	}

})

Hero Timeline Scripts
let getSectionBg = document.querySelector(".content-sections-wrapper .bg-wrapper");
