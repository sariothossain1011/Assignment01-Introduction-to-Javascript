let temperature = 45;

if (30 <= temperature) {
  console.log(`It's a hot day!`);
} else {
  console.log(`It's a normal day!`);
}

let isRaining = false;

if (isRaining === true) {
  console.log(`Don't forget your umbrella!`);
} else {
  console.log(`Enjoy your day!`);
}

var time = new Date().getHours();

if (time >= 6 && time <= 12) {
  console.log("Good morning!");
} else if (time >= 12 && time <= 18) {
  console.log("Good afternoon!");
} else if (time >= 18 && time <= 24) {
  console.log("Good evening!");
} else {
  console.log("Good night!");
}
