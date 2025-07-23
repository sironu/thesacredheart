let todaysDates = new Date();
let x = todaysDates.toDateString();
document.getElementById("date").textContent = x;

const textOutput = document.querySelector(".text-output");
let text = textOutput.innerHTML;

let count = 0;

function typeIT() {
  if (count < text.length + 100) {
    textOutput.textContent = text.substring(0, count);
    count++;
  } else count = 0;
  setTimeout(typeIT, 75);
}
typeIT();

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    perPage: 3, // Number of items per row
    perMove: 1, // Moves in sets of 3
    gap: "10px",
    autoplay: true,
    breakpoints: {
      992: { perPage: 1 },
    },
  }).mount();
});

const path = document.querySelector("path");
let darkMode = document.getElementById("darkMode");
darkMode.addEventListener("click", () => {
  if (darkMode.classList.contains("black")) {
    darkMode.setAttribute("fill", "white");
    darkMode.classList.remove("black");
    // path.fill = "white";

    document
      .querySelector("body")
      .classList.remove("bg-[#222]", "text-gray-200");
  } else {
    darkMode.setAttribute("fill", "black");
    // path.fill = "black";
    darkMode.classList.add("black");
    document.querySelector("body").classList.add("bg-[#222]", "text-gray-200");
  }
});

const pTags = document.getElementsByTagName([..."p"]);
const h2s = document.querySelectorAll("h2");

const range = document.querySelector("#range-val");

range.addEventListener("input", () => {
  for (const h2 of h2s) {
    h2.style.fontSize = `${range.value}rem`;
  }
  for (const pTag of pTags) {
    pTag.style.fontSize = `${range.value}rem`;
  }

  // console.log(`${range.value}rem`);
});

const thursdayAdoration = document.querySelector("#thursday-adoration");
const mainPages = document.querySelectorAll(".landing-page");
const thurdayPrayerButton = document.querySelector(".thurday-prayer-button");



  thurdayPrayerButton.addEventListener("click", () => {
    thursdayAdoration.classList.toggle("hidden");
    for (const mainPage of mainPages) mainPage.classList.toggle("hidden");
    scrollTo({ top: 0, behavior: "smooth" });
  });
  document.getElementById("exit").onclick = function toggleMain() {
    thursdayAdoration.classList.toggle("hidden");
    for (const mainPage of mainPages) mainPage.classList.toggle("hidden");
    scrollTo({ top: 0, behavior: "smooth" });
  };

  document.getElementById("finish").onclick = function toggleMain() {
    thursdayAdoration.classList.toggle("hidden");
    for (const mainPage of mainPages) mainPage.classList.toggle("hidden");
    scrollTo({ top: 0, behavior: "smooth" });
  };


const openNav = document.querySelector(".open-nav");
const openSetting = document.querySelector(".open-setting");
const closeSetting = document.querySelector(".close-setting");

closeSetting.addEventListener("click", () => {
  openSetting.classList.toggle("h-[338px]");
});
openNav.addEventListener("click", () => {
  openSetting.classList.toggle("h-[338px]");
});
