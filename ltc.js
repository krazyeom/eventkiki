javascript:(()=>{
if(document.getElementById("__ltc_party__"))return;

const d=document;
const style=d.createElement("style");
style.textContent=`
#__ltc_party__{
position:fixed;
inset:0;
z-index:2147483647;
overflow:hidden;
background:radial-gradient(circle at center,rgba(255,0,150,.25),rgba(0,0,0,.75));
backdrop-filter:blur(5px);
display:flex;
align-items:center;
justify-content:center;
font-family:Arial,sans-serif;
}

#__ltc_party__::before{
content:"";
position:absolute;
inset:-50%;
background:conic-gradient(from 0deg,#ff0080,#00ffff,#ffff00,#ff0080);
animation:ltcAurora 8s linear infinite;
opacity:.18;
filter:blur(70px);
}

@keyframes ltcAurora{
to{transform:rotate(360deg);}
}

#__ltc_logo__{
position:relative;
font-size:min(26vw,150px);
font-weight:900;
letter-spacing:8px;
color:#fff;
text-shadow:
0 0 10px #fff,
0 0 25px #ff2fb3,
0 0 55px #ff2fb3,
0 0 95px #00eaff;
animation:ltcBeat .75s ease-in-out infinite alternate,ltcHue 3s linear infinite;
user-select:none;
}

#__ltc_logo__::before,
#__ltc_logo__::after{
content:"💖";
position:absolute;
top:50%;
font-size:.45em;
animation:ltcWing 1s ease-in-out infinite alternate;
}

#__ltc_logo__::before{
left:-.9em;
}

#__ltc_logo__::after{
right:-.9em;
}

@keyframes ltcBeat{
from{transform:scale(.92) rotate(-2deg);}
to{transform:scale(1.08) rotate(2deg);}
}

@keyframes ltcHue{
to{filter:hue-rotate(360deg);}
}

@keyframes ltcWing{
from{transform:translateY(-50%) scale(.8) rotate(-15deg);}
to{transform:translateY(-50%) scale(1.25) rotate(15deg);}
}

.ltc-heart{
position:absolute;
bottom:-60px;
pointer-events:none;
animation:ltcFloat linear forwards;
filter:drop-shadow(0 0 8px #ff69c9);
}

@keyframes ltcFloat{
0%{transform:translateY(0) scale(.4) rotate(0deg);opacity:0;}
10%{opacity:1;}
100%{transform:translateY(-120vh) scale(1.8) rotate(360deg);opacity:0;}
}

.ltc-spark{
position:absolute;
width:5px;
height:5px;
border-radius:50%;
background:#fff;
box-shadow:0 0 8px #fff,0 0 18px #fff;
animation:ltcSpark 1.5s infinite;
}

@keyframes ltcSpark{
0%,100%{opacity:.2;transform:scale(.5);}
50%{opacity:1;transform:scale(2.4);}
}

.ltc-confetti{
position:absolute;
width:10px;
height:18px;
top:-30px;
animation:ltcDrop linear forwards;
}

@keyframes ltcDrop{
to{transform:translateY(110vh) rotate(720deg);opacity:0;}
}

.ltc-pop{
position:absolute;
pointer-events:none;
animation:ltcPop .9s ease-out forwards;
filter:drop-shadow(0 0 10px currentColor);
}

@keyframes ltcPop{
0%{transform:translate(0,0) scale(.4);opacity:1;}
100%{transform:translate(var(--x),var(--y)) scale(1.6) rotate(360deg);opacity:0;}
}

.ltc-trail{
position:absolute;
pointer-events:none;
font-size:18px;
animation:ltcTrail .8s ease-out forwards;
}

@keyframes ltcTrail{
to{transform:translateY(-40px) scale(0);opacity:0;}
}

#__ltc_close__{
position:absolute;
right:16px;
top:16px;
border:1px solid rgba(255,255,255,.5);
background:rgba(0,0,0,.35);
color:white;
font-size:20px;
border-radius:999px;
width:42px;
height:42px;
cursor:pointer;
}
`;

d.head.appendChild(style);

const wrap=d.createElement("div");
wrap.id="__ltc_party__";

const logo=d.createElement("div");
logo.id="__ltc_logo__";
logo.textContent="LTC";
wrap.appendChild(logo);

const close=d.createElement("button");
close.id="__ltc_close__";
close.textContent="×";
close.onclick=()=>{
wrap.remove();
style.remove();
};
wrap.appendChild(close);

d.body.appendChild(wrap);

const hearts=["❤️","💖","💕","💗","💘","💝","💓","💞","💟"];
const colors=["#ff2fb3","#00eaff","#ffe600","#ff7a00","#8cff00","#b56cff"];

function heart(){
const e=d.createElement("div");
e.className="ltc-heart";
e.textContent=hearts[Math.random()*hearts.length|0];
e.style.left=Math.random()*100+"vw";
e.style.fontSize=18+Math.random()*42+"px";
const dur=3+Math.random()*4;
e.style.animationDuration=dur+"s";
wrap.appendChild(e);
setTimeout(()=>e.remove(),dur*1000);
}

function spark(){
const e=d.createElement("div");
e.className="ltc-spark";
e.style.left=Math.random()*100+"vw";
e.style.top=Math.random()*100+"vh";
e.style.animationDelay=Math.random()*2+"s";
wrap.appendChild(e);
}

function confetti(){
const e=d.createElement("div");
e.className="ltc-confetti";
e.style.left=Math.random()*100+"vw";
e.style.background=colors[Math.random()*colors.length|0];
e.style.animationDuration=2+Math.random()*3+"s";
wrap.appendChild(e);
setTimeout(()=>e.remove(),5000);
}

function pop(x,y){
for(let i=0;i<34;i++){
const e=d.createElement("div");
e.className="ltc-pop";
e.textContent=Math.random()>.35?"💖":"✨";
e.style.left=x+"px";
e.style.top=y+"px";
e.style.color=colors[Math.random()*colors.length|0];
e.style.fontSize=18+Math.random()*24+"px";
const a=Math.random()*Math.PI*2;
const r=60+Math.random()*180;
e.style.setProperty("--x",Math.cos(a)*r+"px");
e.style.setProperty("--y",Math.sin(a)*r+"px");
wrap.appendChild(e);
setTimeout(()=>e.remove(),900);
}
}

function trail(x,y){
const e=d.createElement("div");
e.className="ltc-trail";
e.textContent=Math.random()>.5?"✨":"💗";
e.style.left=x+"px";
e.style.top=y+"px";
wrap.appendChild(e);
setTimeout(()=>e.remove(),800);
}

for(let i=0;i<90;i++)spark();
for(let i=0;i<40;i++)setTimeout(heart,i*80);
for(let i=0;i<80;i++)setTimeout(confetti,i*50);

setInterval(heart,90);
setInterval(confetti,140);
setInterval(()=>pop(Math.random()*innerWidth,Math.random()*innerHeight),1600);

let last=0;
wrap.addEventListener("mousemove",e=>{
const now=Date.now();
if(now-last>45){
last=now;
trail(e.clientX,e.clientY);
}
});

wrap.addEventListener("click",e=>{
if(e.target.id==="__ltc_close__")return;
pop(e.clientX,e.clientY);
});

pop(innerWidth/2,innerHeight/2);
})();