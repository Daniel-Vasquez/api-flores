import flowers from "./data.js";

const apiFlores = document.getElementById("api-flores");
const foto_flor = document.getElementById("foto");
const name_flor = document.getElementById("name");
const descripcion = document.getElementById("description");

function pintarFlores(flowers) {
  apiFlores.innerHTML = "";

  flowers.forEach((flower) => {
    const li = document.createElement("li");
    li.className = "style-li";
    li.style = "margin: 5px; padding: 5px;";
    const button = document.createElement("button");

    button.innerText = "Ver";
    button.className =
      "button-ver";
    button.style =
      "margin-left: 5px; width: 50px; height: 30px; border-radius: 5px; color: white;";

    button.addEventListener("click", () => {
      console.log(flower);
      pintarFlor(flower);
    });

    li.innerHTML = flower.name;
    li.appendChild(button);

    apiFlores.appendChild(li);
  });
}

function pintarFlor(flower) {
  const { image, name, description } = flower || {};

  foto_flor.src =
    image ||
    "https://astelus.com/wp-content/viajes/Pa%C3%ADs-de-origen-de-las-flores-m%C3%A1s-bonitas-del-mundo.jpg";
  name_flor.innerText = name || "Sin nombre...";
  descripcion.innerText = description || "Sin descripción...";
  foto_flor.style = "border-radius: 10px;";
}

function init() {
  pintarFlores(flowers);
  pintarFlor();
}

init();
