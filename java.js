function locomotiveanimation(){
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

gsap.registerPlugin(ScrollTrigger);

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh(); }

function navanimation(){
gsap.to("#nav-part1 svg", {
  transform: "translateY(-100%)",
  scrollTrigger: { 
    trigger: "#page1",
    scroller: "#main",
    start: "top 0",
    end: "top -5%",
    scrub: true
  }
});

gsap.to("#nav-part2 #nav-font", {
  transform: "translateY(-100%)",
  opacity: 0,
  scrollTrigger: { 
    trigger: "#page1",
    scroller: "#main",
    start: "top 0",   
    end: "top -5%",
    scrub: true
  }
}); }

let videoply = document.querySelector("#video-cont")
let play = document.querySelector("#play")

function playVideo() {

videoply.addEventListener("mouseenter", function(){
gsap.to(play,{
   scale: 1,
   opacity: 1, 
});
});

videoply.addEventListener("mouseleave", function(){
gsap.to(play,{
   scale:0 ,
   opacity:0, 
});
}); }

function finallyplay() {
videoply.addEventListener("mousemove", function(e){
gsap.to(play,{
    left:e.clientX,
    top:e.clientY,
    duration:0.5,
    ease: "easeing.out",
});
}); }

function animation(){
gsap.from("#page1 h1",{
y:100,
opacity:0,
duration:0.9,
delay: 0.5,
stagger:0.6
}); }

function cursoranimation(){
document.querySelector("#page3").addEventListener("mousemove",function(dets){
gsap.to("#cursor",{
    left:dets.clientX,
    top:dets.clientY,
})
})

document.querySelectorAll(".child").forEach(function(elem){
elem.addEventListener("mouseenter",function(){
    gsap.to('#cursor',{
        transform: `translate(-50%,-50%) scale(1)`,
    })
})
elem.addEventListener("mouseleave",function(){
    gsap.to('#cursor',{
        transform: `translate(-50%,-50%) scale(0)`,
    })
})
})}

  function buttoneffect(){
  const btn = document.getElementById("btn");
let expand = false;
     
  btn.addEventListener("click", function (e) {
    e.stopPropagation();

    if (!expand) {
      btn.innerHTML += `
        <div class="effect"> 
        <h1>NAME</h1>
          <input class="divbtn" type="text" placeholder="James M">
          <h1>MESSAGE&nbsp;&nbsp;&nbsp;&nbsp;80 CHARACTERS MAX</h1> 
       <textarea name="feedback" id="feedback" placeholder="With every purchase,you have the potential to change the courses of women's life.we're chnaging the course of every homeless women's life for good by selling meals and handcrafted products."></textarea><br>

          </div>
        <div class="output" style="margin-top:5px ;"></div>
      `;

      const input = btn.querySelector("input");
      const output = btn.querySelector(".output");

      input.addEventListener("input", function () {
        output.textContent = input.value;
      });

      expand = true;
    }
  });

document.body.addEventListener("click", function (e) {
  if (expand && !btn.contains(e.target)) {
    const effectDiv = btn.querySelector(".effect");
    const outputDiv = btn.querySelector(".output");

    // ✅ Add animation class
    effectDiv.classList.add("fade-out");
    outputDiv.classList.add("fade-out");

    // ✅ Wait till animation ends
    setTimeout(() => {
      btn.innerHTML = "SEND YOUR OWN MESSAGE";
      expand = false;
    }, 400); 
  }
}); }

locomotiveanimation();
navanimation();
playVideo();
finallyplay();
animation();
cursoranimation();
buttoneffect(); 