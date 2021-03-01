import flowers from "./data.js";
import { defaultFlower } from "../mudules/config.js";

const photo_flor = document.getElementById("foto");
const name_flor = document.getElementById("name");
const descripcion = document.getElementById("description");
const select = document.getElementById("api-select");

select.addEventListener("change", (event) => {
  const flowerId = parseInt(event.target.value);
  const flower = flowers.find((flower) => flower.id === flowerId);

  pintarFlor(flower);
});

function pintarFlor({ image, name, description } = defaultFlower) {
  photo_flor.src = image;
  name_flor.innerText = name;
  descripcion.innerText = description;
  photo_flor.style = "border-radius: 10px;";
}

function cicloForEach(flowers) {
  select.innerHTML = "";

  flowers.forEach((flower) => {
    const option = document.createElement("option");

    option.value = flower.id;
    option.textContent = flower.name;

    select.appendChild(option);
  });
}

function init(flowers) {
  pintarFlor();
  cicloForEach(flowers)
}

init(flowers);
