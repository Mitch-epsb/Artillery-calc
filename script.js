// IMPORTANT NOTE - I've been using textContent rather then innerHTML as I've been told
//   innerHTML is a huge code security list to have in my code

let range = document.getElementById("inp-range");
let force = document.getElementById("force");
let mass = document.getElementById("mass");
let barrel = document.getElementById("inp-brl");
let calc = document.getElementById("btn");
let meter = document.getElementById("unit-d");
let scale = document.getElementById("unit-m");
let outA = document.getElementById("outangle");
let outT = document.getElementById("outtime");
let outr = document.getElementById("maxr");
let mag = document.getElementById("mag");
let newton = document.getElementById("unit-n");
let dark = document.getElementById("dark");
let body = document.getElementById("body");

calc.addEventListener("click", runc);
dark.addEventListener("click", rundark);

function runc() {
  let r = Number(range.value);
  let f = Number(force.value);
  let m = Number(mass.value);
  let d = Number(barrel.value);
  let far = Number(meter.value);
  let weight = Number(scale.value);
  let unitf = Number(newton.value);

  // Process

  r = r * 1000;

  if (weight > 1) {
    m = m / 1000;
  }

  if (unitf > 2) {
    f = f * 10 ** 6;
  } else if (unitf > 1) {
    f = f * 1000;
  }

  let a = f / m;
  let vi = Math.sqrt(2 * a * d);

  // Angle Process
  let angle = (1 / 2) * Math.asin((r * 9.81) / vi ** 2);
  angle = angle / (Math.PI / 180);
  angle = 90 - angle;

  // Angle pt. 2

  angle = Math.round(angle);

  // Range Process
  let outputr = vi ** 2 / 9.81;

  if (far > 1) {
    outputr = outputr / 1000;
    mag.textContent = "Km";
  } else {
    mag.textContent = "m";
  }
  outputr = Math.floor(outputr);
  //output
  outA.textContent = angle;

  outr.textContent = outputr;

  console.log(vi);
}

function rundark() {
  body.style.backgroundColor = "rgb(34, 34, 34)";
  body.style.color = "white";
  body.style.borderColor = "grey";
}
