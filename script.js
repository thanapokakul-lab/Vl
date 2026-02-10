let current = 0;
const scenes = document.querySelectorAll(".scene");

function showScene(index) {
  scenes.forEach(scene => scene.classList.remove("active"));
  scenes[index].classList.add("active");
}

function nextScene() {
  if (current < scenes.length - 1) {
    current++;
    showScene(current);
  }
}

function prevScene() {
  if (current > 0) {
    current--;
    showScene(current);
  }
}

function goHome() {
  current = 0;
  showScene(current);
}

function acceptGift() {
  current = scenes.length - 1;
  showScene(current);
}

function rejectGift() {
  nextScene();
}
