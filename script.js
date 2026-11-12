const balloons = document.querySelectorAll(".balloon");
let poppedCount = 0;
const totalBalloons = balloons.length;

const title = document.querySelector("h1");
const collage = document.getElementById("collage");

balloons.forEach(balloon => {
  balloon.addEventListener("click", function () {
    const newSrc = this.getAttribute("data-img");
    const extension = newSrc.split('.').pop().toLowerCase();

    let element;

    if (extension === "mp4") {
      element = document.createElement("video");
      element.src = newSrc;
      element.controls = true;
      element.autoplay = true;
      element.loop = false;
      element.muted = false;

// Video will play as a loop and if it has a sound it will be muted after the first play
      element.addEventListener("ended", () => {
        element.muted = true;
        element.loop = true;
        element.play();
      });

    } else {
      element = document.createElement("img");
      element.src = newSrc;
    }

    element.classList.add("popped");



this.replaceWith(element);

poppedCount++;

if (poppedCount === 1) {
  title.style.transition = "opacity 0.5s";
  title.style.opacity = "0";

  setTimeout(() => {
    title.style.display = "none";
  }, 500);
}

if (poppedCount >= totalBalloons) {
  showEndScreen();
}
  });
});

function showEndScreen() {
  title.style.display = "block";
  title.style.opacity = "1";
  title.innerHTML = "";

  const cake = document.createElement("img");
  cake.src = "./pics/cake.gif";
  cake.style.height = "80px";
  cake.style.verticalAlign = "middle";

  const btn = document.createElement("button");

  btn.textContent = "Puhalla kynttilät! *click* 👈";

  btn.style.marginLeft = "15px";
  btn.style.padding = "10px 15px";
  btn.style.border = "none";
  btn.style.borderRadius = "10px";
  btn.style.cursor = "pointer";
  btn.style.background = "#ff69b4";
  btn.style.color = "white";
  btn.style.fontSize = "1.2rem";
  btn.style.fontFamily = "Indie Flower"

  btn.classList.add("fade-in");

  title.appendChild(cake);
  title.appendChild(btn);

  setTimeout(() => {
    btn.classList.add("show");
  }, 50);

  btn.addEventListener("click", showFinalScreen);
}

function showFinalScreen() {
  collage.style.display = "none";
title.innerHTML = `
  <div style="
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 1.4rem;
  ">
    <img src="./pics/bun.gif" style="height:60px;">
    
    <div style="text-align:center;">
      Hyvää syntymäpäivää!<br>
      ❤:llä Ystäväsi
    </div>

    <img src="./pics/bun.gif" style="height:60px;">
  </div>
`;
title.style.fontSize = "1.6rem";

  const img = document.createElement("img");
  img.src = "./pics/celebration.jpg";
  img.style.width = "90%";
  img.style.maxWidth = "400px";
  img.style.height = "auto";
  img.style.display = "block";
  img.style.margin = "20px auto";
  img.style.borderRadius = "15px";
  img.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";

  document.body.appendChild(img);

  const restartBtn = document.createElement("button");
  restartBtn.classList.add("cute-btn");
restartBtn.textContent = "Takaisin alkuun 🌷";

restartBtn.style.display = "block";
restartBtn.style.margin = "10px auto";
restartBtn.style.padding = "10px 15px";
restartBtn.style.border = "none";
restartBtn.style.borderRadius = "10px";
restartBtn.style.cursor = "pointer";
restartBtn.style.background = "#ff69b4";
restartBtn.style.color = "white";
restartBtn.style.fontSize = "1.2rem";
restartBtn.style.fontFamily = "Indie Flower";

restartBtn.addEventListener("click", () => {
  location.reload();
});

document.body.appendChild(restartBtn);

}