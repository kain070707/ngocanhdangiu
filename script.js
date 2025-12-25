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

/* ICON RƠI */
const iconLayer=document.querySelector(".icon-layer");
const icons=["❄️","❄️","⭐","❤️","✨"];
for(let i=0;i<140;i++){
  const s=document.createElement("span");
  s.textContent=icons[Math.floor(Math.random()*icons.length)];
  s.style.left=Math.random()*100+"vw";
  s.style.fontSize=16+Math.random()*20+"px";
  s.style.animationDuration=5+Math.random()*6+"s";
  iconLayer.appendChild(s);
}

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
function createHeart(x, y) {
  const now = Date.now();
  if (now - lastHeartTime < 50) return; // Chỉ tạo tim nếu cách nhau ít nhất 50ms
  lastHeartTime = now;

  const heart = document.createElement('div');
  heart.className = 'heart-click';
  heart.style.backgroundImage = "url('heart.png')";
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  
  // Cố định kích thước nhỏ cho nhẹ
  heart.style.width = '30px';
  heart.style.height = '30px';

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 800); // Biến mất nhanh hơn (1s -> 0.8s)
}

// Giữ các sự kiện touch như cũ nhưng dùng hàm createHeart đã tối ưu này
document.addEventListener('touchmove', (e) => {
  createHeart(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: true });
