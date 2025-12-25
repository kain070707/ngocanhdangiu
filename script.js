const music = document.getElementById("music");
let musicStarted = false;

/* PHÁT NHẠC CHẮC CHẮN */
function startMusic(){
  if(!musicStarted){
    music.volume = 0.2;
    music.play().catch(()=>{});
    musicStarted = true;
  }
}
["touchstart","mousedown","wheel","click"].forEach(e=>{
  window.addEventListener(e,startMusic,{once:true});
});

/* TUYẾT */
const snowLayer=document.querySelector(".snow-layer");
for(let i=0;i<180;i++){
  const s=document.createElement("span");
  s.textContent="❄";
  s.style.left=Math.random()*100+"vw";
  s.style.fontSize=6+Math.random()*6+"px";
  s.style.opacity=Math.random();
  s.style.animationDuration=4+Math.random()*6+"s";
  snowLayer.appendChild(s);
}

/* GIFT */
function openGift(){
  document.querySelector(".gift").style.display="none";
  document.getElementById("letter").classList.add("show");
}
let lastHeartTime = 0;
function createHeart(x, y) {
  const now = Date.now();
  // Tăng lên 100ms: Nghĩa là 1 giây chỉ tạo tối đa 10 trái tim (rất nhẹ)
  if (now - lastHeartTime < 100) return; 
  lastHeartTime = now;

  const heart = document.createElement('div');
  heart.className = 'heart-click';
  heart.style.backgroundImage = "url('heart.png')";
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  heart.style.width = '25px';
  heart.style.height = '25px';

  document.body.appendChild(heart);
  // Cho biến mất cực nhanh để giải phóng bộ nhớ
  setTimeout(() => heart.remove(), 600);
}


