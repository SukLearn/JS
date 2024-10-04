let last = document.getElementById("lastProject");
last.addEventListener("click", function () {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});

let inputColor = document.getElementById("color");
let ColorText = document.getElementById("colorValue");
let inputValue = document.getElementById("dynamic");
let dynamicText = document.getElementById("dynamicText");
let body = document.querySelector("body");

ColorText.innerHTML = inputColor.value;
body.style.color = "white";
body.style.background = "black";
inputColor.oninput = () => {
  ColorText.innerHTML = inputColor.value;
  body.style.background = inputColor.value;

  if (ColorText.innerHTML === "#ffffff") {
    body.style.color = "#000000";
  } else {
    body.style.color = "#ffffff";
  }
};
inputValue.oninput = () => (dynamicText.innerHTML = inputValue.value);

// section 3
let username = document.getElementById("UsernameInput");
let showUsername = document.getElementById("username");

// not good approach HTML must be only HTML no js code init
const handleSubmit = () => {
  if (username.value !== "") {
    showUsername.innerHTML = username.value;
  } else {
    console.log("test");
  }
};

// good approach
// good for little codes for complex functions and multiple functions we need to use addEventListeners
let button = (document.getElementById("otherSubmit").onclick = () => {
  showUsername.textContent += username.value;
});
// best approach
let bestUsername = document
  .getElementById("bestSubmit")
  .addEventListener("click", () => {
    showUsername.innerHTML += username.value;
  });
// section 3 END

// section 4

let value4 = document.getElementById("value4");
let plus4 = document
  .getElementById("plus4")
  .addEventListener("click", () => value4.textContent++);
let decrease4 = document
  .getElementById("minus4")
  .addEventListener("click", () => value4.textContent--);
let reset4 = (document.getElementById("reset4").onclick = () => {
  value4.textContent = 0;
});
let showValue4 = () => {
  value4.innerHTML = 0;
};
document.addEventListener("DOMContentLoaded", showValue4);

// section 4 END

// Section 5

let number5 = document.getElementById("number5");
let generatedNumber5 = 0;
let button5 = document.getElementById("generate5");
button5.addEventListener("click", () => {
  generatedNumber5 = Math.floor(Math.random() * 1000000);
  number5.textContent = generatedNumber5;
});
// Section 5 END

// section 6

let works = false;
let answer = Math.floor(Math.random() * 100);
let button6 = document.getElementById("button6");
let guess = document.getElementById("guess6");
let text6 = document.getElementById("guessed6");

button6.addEventListener("click", () => {
  if (guess.value > answer) {
    text6.textContent = "Too high";
  } else if (guess.value < answer) {
    text6.textContent = "Too low";
  } else {
    text6.textContent = "Correct answer was " + answer;
  }
});
// section 6 END

// section 7
let celsius = document.getElementById("Celsius");
let fahrenheit = document.getElementById("fahrenheit");
celsius.oninput = () => {
  fahrenheit.value = celsius.value * 1.8 + 32;
};
fahrenheit.oninput = () => {
  celsius.value = (fahrenheit.value - 32) / 1.8;
};
// section 7 END

// section 8
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const specialChars = "!@#$%^&*()_+-={}:<>?";

let text8 = document.getElementById("password");
let LowerCase = document.getElementById("LowerCase");
let UpperCase = document.getElementById("UpperCase");
let number8 = document.getElementById("number8");
let character8 = document.getElementById("character8");
let passwordLength = 12;
let button8 = document.getElementById("button8");

button8.onclick = () => {
  let includeSpecialChar = character8.checked ? true : false;
  let includeNumber = number8.checked ? true : false;
  let includeUpperCase = UpperCase.checked ? true : false;
  let includeLowerCase = LowerCase.checked ? true : false;
  let password = "";
  let allowedChars = "";
  allowedChars += includeLowerCase ? lowerCaseChars : "";
  allowedChars += includeUpperCase ? upperCaseChars : "";
  allowedChars += includeNumber ? digits : "";
  allowedChars += includeSpecialChar ? specialChars : "";
  if (allowedChars.length == 0) {
    text8.innerHTML = "select at least one";
  } else {
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }

    console.log(password);
    text8.innerHTML = "password: " + password;
  }
};

// section 8 END

// section 9

const clocking = () => {
  let clock = document.getElementById("clock");
  let now = new Date();
  let hour = now.getHours();
  let AMPM = hour >= 12 ? "PM" : "AM";
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  clock.innerHTML = `${hour.toString().padStart(2, 0)}:${minutes
    .toString()
    .padStart(2, 0)}:${seconds.toString().padStart(2, 0)} ${AMPM}`;
};
clocking();

setInterval(clocking, 1000);
// section 9 END
// function run() {
//   console.log(1);
//   setTimeout(() => console.log(2), 3000);
//   setTimeout(() => console.log(3), 0);
//   console.log(4);
// }
// run();

// section 10
let apiValue = document.getElementById("fetchValue");
let apiInfo = document.getElementById("information");
let apiButton = document.getElementById("apiButton");
async function pokemonAPI(value10) {
  console.log(value10);
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${value10}`
    );
    if (!response.ok) throw new Error("Network response not ok");
    const data = await response.json();
    console.log("fetched Data", data);
    apiInfo.textContent = data.name;
  } catch (error) {
    console.error(error);
  }
}
apiButton.addEventListener("click", () => {
  let value10 = apiValue.value;
  pokemonAPI(value10.toLowerCase());
});

// section 10 END
