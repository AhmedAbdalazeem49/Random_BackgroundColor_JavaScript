let hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let finalColor = "#";

for (let i = 0; i < 6; i++) {
  finalColor += hexArray[Math.floor(Math.random() * hexArray.length)];
}

console.log(finalColor);

let h3 = document.querySelector("h3");
h3.append(finalColor);

// document.body.append(finalColor);

document.body.style.backgroundColor = finalColor;
