<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Happy Valentine 💖</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="scene active">
  <h1>💝 Happy Valentine’s Day 💝</h1>
  <p>ของขวัญวาเลนไทน์ปีนี้สำหรับเบล<br><b>คือมีเกรซอยู่</b> 🥺💗</p>
  <button onclick="nextScene()">ดูเรื่องราวของเรา</button>
</div>

<div class="scene">
  <img src="images/pic1.jpg">
  <p>ตั้งแต่วันที่เราเจอกัน โลกมันหวานขึ้นแบบไม่รู้ตัว</p>
  <button onclick="nextScene()">ถัดไป</button>
</div>

<div class="scene">
  <img src="images/pic2.jpg">
  <p>ขอบคุณที่อยู่ข้างกัน ไม่ว่าเบลจะงอแงแค่ไหน 🥹</p>
  <button onclick="nextScene()">ถัดไป</button>
</div>

<div class="scene">
  <p>ปีนี้มีของขวัญชิ้นหนึ่ง…</p>
  <p><b>เกรซอยากให้เบลรับไว้ไหม 💝</b></p>
  <button onclick="acceptGift()">รับไว้ 💖</button>
  <button onclick="rejectGift()">ไม่รับ 😳</button>
</div>

<div class="scene">
  <p>แน่ใจหรอ… ถ้าไม่รับไว้</p>
  <p><b>เกรซจะขอเมี้ยว 🐱</b></p>
  <button onclick="nextScene()">ให้เมี้ยว 😽</button>
  <button onclick="acceptGift()">ต้องเมี้ยวอยู่แล้ว 💕</button>
</div>

<div class="scene">
  <h2>🎁 ของขวัญคือ…</h2>
  <p>การมีเกรซอยู่ข้างเบลทุกวัน 💖</p>
  <p>สุขก็อยู่ ทุกข์ก็ไม่ไปไหน</p>
  <p>รักนะ วาเลนไทน์นี้และทุกวัน 🌹</p>
</div>

<script src="script.js"></script>
</body>
</html>
