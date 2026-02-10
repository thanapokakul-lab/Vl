# Vl
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>Valentine for Grace 💖</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body{
  margin:0;
  height:100vh;
  background: linear-gradient(135deg,#ff9a9e,#fad0c4);
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: 'Arial', sans-serif;
  color:#fff;
  text-align:center;
}
.card{
  background:rgba(255,255,255,0.15);
  padding:25px;
  border-radius:20px;
  max-width:360px;
  position:relative;
}
img{
  width:100%;
  border-radius:15px;
  margin-bottom:15px;
}
button{
  padding:12px 22px;
  border:none;
  border-radius:25px;
  background:#ff4d6d;
  color:#fff;
  font-size:1rem;
  margin:8px;
}
.secondary{
  background:#aaa;
}
</style>
</head>
<body>

<div class="card" id="card">
  <div id="content"></div>
  <button id="nextBtn" onclick="nextScene()">ถัดไป 💕</button>
</div>

<script>
let scene = 0;

const scenes = [
  `<h2>Happy Valentine’s Day 💖</h2>
   <p>
   ของขวัญวาเลนไทน์ปีนี้สำหรับเบล<br>
   คือมีเกรซอยู่ข้างๆ
   </p>`,

  `<img src="photo1.jpg">
   <p>
   ทุกอย่างเริ่มจากวันธรรมดา<br>
   ที่หัวใจไม่ธรรมดาอีกต่อไป
   </p>`,

  `<img src="photo2.jpg">
   <p>
   ไม่ว่าจะอยู่ที่ไหน<br>
   ถ้ามีเธออยู่ตรงนั้น…คือบ้าน
   </p>`,

  `<img src="photo3.jpg">
   <p>
   รอยยิ้มของเธอ<br>
   คือสิ่งที่เราอยากเห็นทุกวัน
   </p>`,

  `<img src="photo4.jpg">
   <p>
   บางวันอาจเหนื่อย<br>
   แต่แค่จับมือเธอไว้ก็ไหว
   </p>`,

  `<img src="photo5.jpg">
   <p>
   ขอบคุณที่อยู่ด้วยกัน<br>
   แม้ในวันที่ไม่น่ารัก
   </p>`,

  `<h2>ของขวัญวาเลนไทน์ปีนี้ 💝</h2>
   <p>
   คือหัวใจของเบลทั้งดวง<br>
   เกรซจะรับไว้ไหม
   </p>
   <button onclick="accept()">รับไว้ 💖</button>
   <button class="secondary" onclick="thinkAgain()">ไม่รับ 🙈</button>`
];

document.getElementById("content").innerHTML = scenes[0];

function nextScene(){
  scene++;
  if(scene < scenes.length){
    document.getElementById("content").innerHTML = scenes[scene];
  }
  if(scene === scenes.length - 1){
    document.getElementById("nextBtn").style.display = "none";
  }
}

function accept(){
  document.getElementById("card").innerHTML =
  `<h2>เย้ 💕</h2>
   <p>
   งั้นเบลขออยู่กับเกรซไปทุกวันเลยนะ<br>
   Happy Valentine’s Day 💖
   </p>`;
}

function thinkAgain(){
  document.getElementById("content").innerHTML =
  `<h2>เดี๋ยวก่อน 😼</h2>
   <p>
   แน่ใจหรอ…<br>
   ถ้าไม่รับจริงๆ เบลจะ…<br>
   ขอเมี้ยว
   </p>
   <button onclick="meow()">ให้เมี้ยว 😼</button>
   <button onclick="meow()">ต้องเมี้ยว 😽</button>`;
}

function meow(){
  document.getElementById("card").innerHTML =
  `<h2>เมี้ยววว~ 😽💖</h2>
   <p>
   เบลเมี้ยวใส่หัวใจเกรซแล้วนะ<br>
   งั้นขออยู่ด้วยกันไปนานๆ เลย
   </p>
   <p>Happy Valentine’s Day 💕</p>`;
}
</script>

</body>
</html>
