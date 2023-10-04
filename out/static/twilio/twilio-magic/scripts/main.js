gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let firstScreenScrollTriggerl



ScrollTrigger.matchMedia({ 
  "(min-width: 960px)": function() {
		firstMagicScreen();
		missingScrollSnimation();
  }
}); 

function firstMagicScreen(){
	let magicScreenItemsWrapper = document.querySelectorAll(".first-screen-item-wrapper");
	if(!magicScreenItemsWrapper){
		return false;
	}
	function createScrollSectionEl(el, arr){
		arr.map(item=>{
			let createScrollSection = document.createElement("div");
			createScrollSection.setAttribute('data-screen', item) 
			el.appendChild(createScrollSection)
		})
	}

	// Set necessary
	magicScreenItemsWrapper.forEach((magicScreenItemWrapper, index)=>{
		let totalElementWrap = magicScreenItemWrapper.querySelector(".total-sections");
		if(index === 0){
			createScrollSectionEl(totalElementWrap, ["hero-whatis-screen", "magic-screen-1","magic-screen-2","magic-screen-3", "blank"]);
			gsap.timeline({
				scrollTrigger:{
					trigger:magicScreenItemWrapper,
					start:"-=100 top",
					// markers:true,
					onEnter:()=>{ 
						gsap.to(window, {
							scrollTo:magicScreenItemWrapper.offsetTop + 10,
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
		}else{
			createScrollSectionEl(totalElementWrap, ["magic-screen-1", "magic-screen-2", "magic-screen-3", "blank"]);
		}
		// let aniCircleTopLeft = sectionWrapper.querySelector(".magic-venn-top-left");
		// let aniCircleTopRight = sectionWrapper.querySelector(".magic-venn-top-right");
		// let aniCircleBottomLeft = sectionWrapper.querySelector(".magic-venn-bottom-left");
		// let aniCircleBottomRight = sectionWrapper.querySelector(".magic-venn-bottom-right");

		if(index === 1){
			gsap.set([
				magicScreenItemWrapper.querySelector(".magic-venn-top-left"),
				magicScreenItemWrapper.querySelector(".magic-venn-bottom-left"),
				magicScreenItemWrapper.querySelector(".magic-venn-bottom-right"),
			], {
				opacity:0.5,
				scale:0.95, 
			})
		}
		if(index === 2){
			gsap.set([
				magicScreenItemWrapper.querySelector(".magic-venn-top-left"),
				magicScreenItemWrapper.querySelector(".magic-venn-top-right"),
				magicScreenItemWrapper.querySelector(".magic-venn-bottom-right"),
			], {
				opacity:0.5,
				scale:0.95, 
			})
		}
		if(index === 3){
			gsap.set([
				magicScreenItemWrapper.querySelector(".magic-venn-top-left"),
				magicScreenItemWrapper.querySelector(".magic-venn-top-right"),
				magicScreenItemWrapper.querySelector(".magic-venn-bottom-left"),
			], {
				opacity:0.5,
				scale:0.95, 
			})
		}
	})
	// Set Style
	gsap.set(".first-screen-item-wrapper .left-content .screen-item", {
		autoAlpha:0,
	})
	gsap.set(".first-screen-item-wrapper .right-content .magic-venn", {
		"color":"transparent"
	})
	gsap.set(".first-screen-item-wrapper .right-content .circle-bottom-link-1", {
		height:0,
		marginTop:0,
		autoAlpha:0,
		"display":"none"
	})
	gsap.set([".first-screen-item-wrapper .right-content .cards-wrapper",".first-screen-item-wrapper .right-content .user-text-info"], {
		height:0,
		autoAlpha:0,
		"display":"none"
	})

	magicScreenItemsWrapper.forEach((magicScreenItemWrapper, magicScreenItemIndex)=>{ 
		let sectionWrapper = magicScreenItemWrapper.querySelector(".sections-wrapper");
		let totalSections =  magicScreenItemWrapper.querySelectorAll(".total-sections div");
		gsap.set(sectionWrapper.querySelectorAll(".left-content .screen-item")[0], {
			autoAlpha:1,
		})
		if(magicScreenItemIndex === 0){ 
			gsap.set(".first-screen-item-wrapper .left-content .hero-intro-content", {
				autoAlpha:1,
			}) 
			// gsap.set([sectionWrapper.querySelector(".left-content .hero-intro-content"), sectionWrapper.querySelector(".right-content")],{
			// 	paddingBottom:168
			// })
			gsap.set(sectionWrapper.querySelectorAll(".right-content .magic-venn"), { 
				"color":""
			})
			gsap.set(sectionWrapper.querySelector(".right-content .circle-bottom-link-1"), {
				height:"",
				marginTop:"",
				autoAlpha:1, 
				"display":""
			})
		}
		gsap.timeline({  
			scrollTrigger:{
				trigger:sectionWrapper,
				start:"top top",
				end:`+=${totalSections[0].clientHeight * (totalSections.length - 1)}`,
				pin:true,
				// markers:true,
				// pinSpacing:false
			}
		})
		totalSections.forEach((section, index)=>{

			let currentScreen = section.getAttribute("data-screen");
			let AniEl
			let screenAniTl = gsap.timeline({
				scrollTrigger:{
					trigger:section,
					start:"top top",
					end:"bottom top",
					toggleActions: "restart none none reverse",
					// markers:true,
					// scrub:0.3, 
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

			firstScreenScrollTriggerl = screenAniTl; 

			let aniLeftContentWrap = sectionWrapper.querySelector(".left-content");
			let aniRightContentWrap = sectionWrapper.querySelector(".right-content");
			let aniFirstMagicItem = sectionWrapper.querySelector(".left-content .first-magic-item");
			let aniSecondMagicItem = sectionWrapper.querySelector(".left-content .second-magic-item"); 
			let aniBgWrapper = sectionWrapper.querySelector(".bg-wrapper");
			let aniCircleWrapper = sectionWrapper.querySelector(".magic-venn");
			let aniCircleItems = sectionWrapper.querySelectorAll(".magic-venn-circle");
			let aniCircleBottomLink = sectionWrapper.querySelector(".circle-bottom-link-1");
			let aniCircleTopLeft = sectionWrapper.querySelector(".magic-venn-top-left");
			let aniCircleTopRight = sectionWrapper.querySelector(".magic-venn-top-right");
			let aniCircleBottomLeft = sectionWrapper.querySelector(".magic-venn-bottom-left");
			let aniCircleBottomRight = sectionWrapper.querySelector(".magic-venn-bottom-right");
			let aniCardsWrapper = sectionWrapper.querySelector(".cards-wrapper");
			let aniRightUserInfo = sectionWrapper.querySelector(".user-text-info");
			
			if(magicScreenItemIndex === 0){
				let aniHeroIntroContent = sectionWrapper.querySelector(".left-content .hero-intro-content");
				let aniWhatIsContent = sectionWrapper.querySelector(".left-content .hero-whatis-content");

				if(currentScreen === 'hero-whatis-screen'){
					screenAniTl
					// .to([aniHeroIntroContent, sectionWrapper.querySelector(".right-content")],{
					// 	paddingBottom:0,
					// 	duration:0.3,
					// 	ease:'none',
					// })
					// .to(aniHeroIntroContent,{
					// 	y:-168,
					// 	duration:0.4
					// }, "<")
					.to(aniBgWrapper, {
						"--left-bg": "#FEECEC",
						"--right-bg": "#FFFFFF", 
						ease:'none',
					}, "<")
					.to(aniHeroIntroContent, {
						autoAlpha:0,
						duration:0.4
					}, "<")
					.fromTo(aniWhatIsContent, {
						autoAlpha:0,
						y:100
					},{
						autoAlpha:1,
						y:0,
						ease:"back.out(0.3)",
						duration:0.2
					}, "0.3")
				}
				if(currentScreen === 'magic-screen-1'){
					screenAniTl
					.to(aniWhatIsContent, {
						autoAlpha:0,
						scale:0.95,
						duration:0.3,
						ease:"back.out(0.7)"
					})
					.to(aniBgWrapper, {
						"--left-bg": "#030B5D",
						"--right-bg": "#FEF5EE",  
						ease:'none',
					}, "<")
					.fromTo(aniFirstMagicItem, { 
						autoAlpha:0,
						y:100
					},{
						autoAlpha:1,
						y:0,
						ease:"back.out(0.3)",
						duration:0.2
					}, "0.2")
					.to([aniCircleTopRight,aniCircleBottomLeft,aniCircleBottomRight], {
						opacity:0.5,
						scale:0.95, 
						duration:0.3,
						ease:"back.out(0.7)",
					}, "<")
					.to(aniCircleWrapper, {
						"color":"transparent"
					}, "<") 
					.to(aniCircleBottomLink, {
						height:0,
						"margin-top":0,
						autoAlpha:0,
						duration:0.2,
						ease:"back.out(0.3)"
					}, "<")
				}
				firstScreenglobalTl();
				
			}else{
				firstScreenglobalTl();
			}

			function firstScreenglobalTl(){
				if(currentScreen === 'magic-screen-2'){ 
					screenAniTl
					.fromTo(aniCircleWrapper, {
						width:"30vw",
						height:"30vw",
					}, { 
						width:"7vw",
						height:"7vw",
						duration:0.4,
						rotation:-270, 
						ease:"back.out(0.3)"
					})
					.to(aniCircleItems, {
						borderWidth:3,
						duration:0.4
					}, "<")
					.set(aniCardsWrapper, {
						"display":"block"
					}, "<")
					.to(aniCardsWrapper, {
						height:"auto",
					}, "<")
					.to(aniRightContentWrap, {
						paddingTop:60
					}, "<")
					.to(aniCardsWrapper, {
						autoAlpha:1,
						duration:0.4
					}, "-=0.3")

				}
				if(currentScreen === 'magic-screen-3'){ 
					screenAniTl
					.set(aniRightUserInfo, {
						"display":"block"
					})
					.set(aniCardsWrapper, { 
						autoAlpha:1,
					})
					.to(aniCardsWrapper, {
						height:0,
						autoAlpha:0,
					})
					.to(aniRightUserInfo, {  
						height:"auto",
					}, "<")
					.set(aniCardsWrapper, {
						"display":"none" 
					})
					.to(aniFirstMagicItem, {
						autoAlpha:0,
						duration:0.4
					})
					.fromTo(aniSecondMagicItem, { 
						autoAlpha:0,
						scale:0.9,
						y:100
					},{
						autoAlpha:1,
						y:0,
						scale:1,
						ease:"back.out(0.3)",
						duration:0.2
					}, "-=0.3")
					.to(aniBgWrapper, {
						"--left-bg": "#FEF5EE", 
						"--right-bg": "#F22F46",  
						ease:'none',
						duration:0.2
					}, "<")
					.to(aniCircleItems, { 
						borderColor:"#fff",
						duration:0.4
					}, "<")
					.to(aniRightUserInfo, {
						autoAlpha:1,
					}, "<")
					.to(aniCircleWrapper, {
						x:"-17vw",
						rotation:-360,
						duration:0.5,
						ease:"back.out(0.7)"
					},"<")
				}
			}

		})

	})

}

// document.querySelectorAll(".missing-venn-circle, .magic-venn-circle").forEach(circle=>{
// 	circle.addEventListener("click", function(e){
// 		e.preventDefault();
// 		var link = circle.querySelector("a[href]").getAttribute("href");
// 		firstScreenScrollTriggerl.scrollTrigger.refresh(); 
// 		gsap.to(window, { 
// 			scrollTo:{
// 				y:document.querySelector(link),
// 				autoKill:false
// 			},
// 			duration:3
// 		})
// 	}) 
// })

function missingScrollSnimation(){

	let panels = document.querySelectorAll(".missing-ani-section .left-content .content-item");
	let sectionWrap = document.querySelector(".missing-ani-section");
	let leftContent = document.querySelector(".missing-ani-section .left-content");
	let missingVennPartsImg = document.querySelectorAll(".missing-ani-section .missing-venn .missing-venn-parts img");
	let missingVennCircle = document.querySelectorAll(".missing-ani-section .missing-venn .missing-venn-circle");
	gsap.to(missingVennPartsImg[0], { 
		autoAlpha:1
	}) 
	let tween;
    const scrollNav = (e) => {
        e.preventDefault();
        let targetElem = document.querySelector(e.target.getAttribute("href")),
            y = targetElem;
        
        if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {

            let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
                totalMovement = (panels.length - 1) * targetElem.offsetHeight;

            y = Math.round(tween.scrollTrigger.start + (targetElem.offsetTop / totalMovement) * totalScroll);
            console.log(y);
        }
        
        gsap.to(window, {
            scrollTo: {
                y: y,
                autoKill: false
            },
            duration: 0.5,
            ease: Expo.easeInOut
        });
    }

    const _numSections = panels.length - 1;
    const _snapVal = 1 / _numSections;
    let _lastIndex = 0;

    tween = gsap.to(panels, {
		yPercent: -100 * ( panels.length - 1 ),
		ease: "none",
		scrollTrigger: {
			trigger: sectionWrap,
			pin: true,
			start: ()=> "top top",
			scrub: 0.4,
			snap: {
				snapTo: 1 / (panels.length - 1),
				inertia: false,
				duration: {min: 0.1, max: 0.1}
			},
			end: () =>  "+=1500",
			// markers:true,
            onUpdate:(self)=>{ 
                const newIndex = Math.round(self.progress / _snapVal);
                if (newIndex !== _lastIndex) {
                  panels[_lastIndex].classList.remove('is-active');
                  panels[newIndex].classList.add('is-active');
                  
	                if(_lastIndex > 1){  
	                	console.log(panels.length)
	                	gsap.to(leftContent, {
	                		"--left-bg":"#EBF4FF"
	                	})
	                }else{
	                	console.log('No')
	                	gsap.to(leftContent, {
	                		"--left-bg":"#FEF5EE"
	                	})
	                }
					gsap.to(missingVennPartsImg, {
                		autoAlpha:0
                	})
                	gsap.to([missingVennPartsImg[newIndex], missingVennCircle], { 
                		autoAlpha:1
                	})

                	if(newIndex === 2){
	                	gsap.to(missingVennCircle[3], { 
	                		autoAlpha:0.29
	                	})
                	}
                	if(newIndex === 3){
	                	gsap.to(missingVennCircle[2], { 
	                		autoAlpha:0.29
	                	})
                	}
                	if(newIndex === 4){
	                	gsap.to(missingVennCircle[1], { 
	                		autoAlpha:0.29
	                	})
                	}
                	if(newIndex === 5){
	                	gsap.to(missingVennCircle[0], {  
	                		autoAlpha:0.29
	                	})
                	}
                	

	                _lastIndex = newIndex;
                } 
            }
		}
    })
}


const livingTimeline = gsap.timeline();

livingTimeline
.from(".atropos-magic-venn-top-left", { autoAlpha: 0, x: "-200px", y: "-200px", ease: "power3.out", duration: 400 }, "<")
.from(".atropos-magic-venn-top-right", { autoAlpha: 0, x: "200px", y: "-200px", ease: "power3.out", duration: 400 }, "<")
.from(".atropos-magic-venn-bottom-left", { autoAlpha: 0, x: "-200px", y: "200px", ease: "power3.out", duration: 400 }, "<")
.from(".atropos-magic-venn-bottom-right", { autoAlpha: 0, x: "200px", y: "200px", ease: "power3.out", duration: 400 }, "<")
.to(".delay", {autoAlpha: 0, duration: 400})

ScrollTrigger.create({
  id: "living",
  trigger: ".section-living",
  animation: livingTimeline,
  pin: true,
  scrub: 1,
  // markers:true,
  start:"top top",
  end:"bottom +=300",
  onLeave: () => {
  	magicImageToTextTl.play()
  },
  onLeaveBack: () => { 
	setTimeout(function(){
		magicImageToTextTl.reverse()
	}, 120);
  },

});

gsap.set(".section-living .atropos-magic-venn-circle", {
	"--opacity":1
})

let magicImageToTextTl = gsap.timeline({paused:true})
magicImageToTextTl
.to(".section-living .atropos-magic-venn-top-left", { 
	yPercent:50,
	xPercent:50,
	duration:0.4,
	ease:"back.out(0.6)"
 }, "<")
.to(".section-living .atropos-magic-venn-top-right", {
	yPercent:50,
	xPercent:-50,
	duration:0.4,
	ease:"back.out(0.6)"
 }, "<")
.to(".section-living .atropos-magic-venn-bottom-left", { 
	yPercent:-50,
	xPercent:50,
	duration:0.4,
	ease:"back.out(0.6)"
 }, "<")
.to(".section-living .atropos-magic-venn-bottom-right", {  
	yPercent:-50,
	xPercent:-50,
	duration:0.4,
	ease:"back.out(0.6)"
}, "<")
.to(".section-living .atropos-inner", {
	rotation:360,
	ease:"back.out(0.6)"
}, "<")
.to(".section-living .atropos-magic-venn-circle", {
	"--opacity":0,
}, "<")
.to(".section-living .atropos-magic-venn-top-left", { 
	yPercent:0,
	xPercent:0,
	duration:0.4,
	ease:"back.out(0.6)"
 }, "<")
.to(".section-living .atropos-magic-venn-top-right", {
	yPercent:0,
	xPercent:0,
	duration:0.4,
	ease:"back.out(0.6)"
 }, "<")
.to(".section-living .atropos-magic-venn-bottom-left", { 
	yPercent:0,
	xPercent:0,
	duration:0.4,
	ease:"back.out(0.6)"
 }, "<")
.to(".section-living .atropos-magic-venn-bottom-right", {  
	yPercent:0,
	xPercent:0,
	duration:0.4,
	ease:"back.out(0.6)"
}, "<")
.set(".section-living .atropos-inner", {
	rotation:0
}, "<")


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
  start: "top 80%",
  end: "bottom 100%",
  animation: ctasTimeline,
  scrub: 1
});