tl = gsap.timeline();

tl.from("nav #left", {
  duration: 1,
  y: -20,
  opacity: 0,
});
tl.from("nav #right", {
  duration: 1,
  y: -20,
  opacity: 0,
});
tl.from("#page1 #title", {
  duration: 1,
  y: -20,
  opacity: 0,
});
tl.from("#page1 #title2", {
  duration: 1,
  y: -20,
  opacity: 0,
});
tl.from("#page1 #bg-con", {
  duration: 1,
  scale:0.5,
  opacity: 0,
});




gsap.registerPlugin(ScrollTrigger);

const sections = ['#page2', '#page3', '#page4'];

sections.forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%", 
      end: "top 30%",  
      toggleActions: "play none none reverse", 
    },
    opacity: 0,
    y: 80,
    duration: 2,
  });
});
