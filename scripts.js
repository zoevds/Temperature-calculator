document.getElementById("celsius").onkeyup = updateFahrenheit;
document.getElementById("fahrenheit").onkeyup = updateCelsius;
document.getElementById("celsius").value = 0;
updateFahrenheit();
function updateFahrenheit() {
  let c = document.getElementById("celsius").value;
  let f;
  if (c == null || c == "" || isNaN(c)) {
    f = "";
  } else {
    f = celsiusToFahrenheit(c);
  }
  document.getElementById("fahrenheit").value = f;
}
function updateCelsius() {
  let f = document.getElementById("fahrenheit").value;
  let c;
  if (f == null || f == "" || isNaN(f)) {
    c = "";
  } else {
    c = fahrenheitToCelsius(f);
  }
  document.getElementById("celsius").value = c;
}
function myround(x) {
  return Math.round(10 * x) / 10;
}
function celsiusToFahrenheit(c) {
  let answer = (c * 9) / 5 + 32;
  return myround(answer);
}
function fahrenheitToCelsius(f) {
  let answer = ((f - 32) * 5) / 9;
  return myround(answer);
}
