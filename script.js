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
// Hàm tạo trái tim tại một vị trí (x, y)
function createHeart(x, y) {
  const heart = document.createElement('div');
  heart.className = 'heart-click';
  
  // Đường dẫn ảnh của bạn
  heart.style.backgroundImage = "url('heart.png')"; 
  
  // Vị trí xuất hiện
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  
  // Random một chút kích thước để nhìn tự nhiên hơn
  const size = Math.floor(Math.random() * 20) + 20; // Từ 20px - 40px
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';

  document.body.appendChild(heart);
  
  // Xóa sau khi bay xong
  setTimeout(() => {
    heart.remove();
  }, 3000);
}

// 1. Hiệu ứng khi Bấm (Click/Touch)
document.addEventListener('mousedown', (e) => createHeart(e.clientX, e.clientY));
document.addEventListener('touchstart', (e) => {
  createHeart(e.touches[0].clientX, e.touches[0].clientY);
});

// 2. Hiệu ứng khi Kéo (Move/TouchMove) - Tạo vệt dài
document.addEventListener('mousemove', (e) => {
  if (e.buttons === 1) { // Chỉ tạo khi đang nhấn chuột trái
    createHeart(e.clientX, e.clientY);
  }
});

document.addEventListener('touchmove', (e) => {
  // Tạo trái tim tại vị trí ngón tay đang di chuyển
  createHeart(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: true });