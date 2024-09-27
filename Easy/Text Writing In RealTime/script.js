const words = [
  "a Web Developer",
  "a Designer",
  "a Backend Developer",
  "an Instructor",
];
const change = document.querySelector("h1");
let i = 0;
let characterIndex = 0;

const updateText = () => {
  characterIndex++;
  change.textContent = `I am ${words[i].slice(0, characterIndex)}`;
  if (characterIndex > words[i].length) {
    i++;
    characterIndex = 0;
  }
  if (i >= words.length) i = 0;
  setTimeout(updateText, 100);
};

updateText();
