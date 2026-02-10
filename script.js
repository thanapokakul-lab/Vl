let current = 0;
const scenes = document.querySelectorAll(".scene");

function showScene(index) {
  scenes.forEach(scene => scene.classList.remove("active"));
  scenes[index].classList.add("active");
}

function nextScene() {
  current++;
  showScene(current);
}

function acceptGift() {
  current = scenes.length - 1;
  showScene(current);
}

function rejectGift() {
  current++;
  showScene(current);
}
