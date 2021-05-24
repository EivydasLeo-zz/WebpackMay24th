import greet from "./js/greet.js";
// main stilius
import "./css/main.css";
//paveikslelis
import jpgLogo from "./img/sanje8.jpg";

console.log("greet fn", greet("its a monday today"));

function addImageTo(importedImg) {
  const imgEl = document.createElement("img");
  imgEl.src = importedImg;
  document.body.append(imgEl);
}

addImageTo(jpgLogo);
