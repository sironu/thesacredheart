let todaysDates = new Date();
let x = todaysDates.toDateString();
document.getElementById("date").textContent = x;


const textOutput = document.querySelector(".text-output");
let text  = textOutput.innerHTML

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

const fonts = document.querySelector(".incFont");
const range = document.querySelector("#range-val");
// const pTags = document.getElementsByTagName([..."p"]);


range.addEventListener("input", () => {
  // (fonts.style.fontSize = `${range.value}rem`);
  console.log(`${range.value}rem`);
});

const openNav = document.querySelector(".open-nav");
const openSetting = document.querySelector(".open-setting");
const closeSetting = document.querySelector(".close-setting");

closeSetting.addEventListener("click", () => {
  openSetting.classList.toggle("h-[338px]");
});
openNav.addEventListener("click", () => {
  openSetting.classList.toggle("h-[338px]");
});


