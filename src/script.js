// let todaysDates = new Date();
// let x = todaysDates.toDateString();
// document.getElementById("date").textContent = x;

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

const path = document.querySelector("path");
let darkMode = document.getElementById("darkMode");
darkMode.addEventListener("click", () => {
  if (darkMode.classList.contains("black")) {
    darkMode.setAttribute("fill", "white");
    darkMode.classList.remove("black");
    document
      .querySelector("body")
      .classList.remove("bg-[#222]", "text-gray-200");
  } else {
    darkMode.setAttribute("fill", "black");
    darkMode.classList.add("black");
    document.querySelector("body").classList.add("bg-[#222]", "text-gray-200");
  }
});

const objectArrays = [
  { elements: [...document.getElementsByTagName("p")] },
  { elements: [...document.getElementsByTagName("h2")] },
  { elements: [...document.getElementsByClassName("link")] },
];

const font_size = document.querySelector("#font-size");
font_size.addEventListener("input", () => {
  for (const { elements } of objectArrays) {
    elements.map((element) => (element.style.fontSize = `${font_size.value}rem`));
  }
})
const brightness = document.querySelector("#brightness");
brightness.addEventListener("input", () => {

  document.querySelector("html").style.filter = `brightness(${brightness.value}%)`;
  console.log(" Brightness: ",  document.querySelector("html").style.filter);

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

let initialPosition = 0;

window.addEventListener("scroll", () => {
  if (scrollY > 100) {
    const headerContainer = document.querySelector(".header-container");
    const currentPosition = scrollY;
    if (currentPosition > initialPosition) {
      headerContainer.classList.replace("h-[10vh]", "h-0");
    } else {
      headerContainer.classList.replace("h-0", "h-[10vh]");
    }
    initialPosition = currentPosition;
  }
});

window.addEventListener("scroll", () => {
  const liveChat = document.querySelector(".live-chat");
  scrollY > 300
    ? liveChat.classList.add("w-[52px]")
    : liveChat.classList.remove("w-[52px]");
});


document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "10px",
    autoplay: true,
    breakpoints: {
      768: { perPage: 1 },
      992: { perPage: 2 },
    },
  }).mount();
});
