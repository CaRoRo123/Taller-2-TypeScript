import { data } from "./data.js";
let seriesTBody = document.getElementById('Serie');
let imagenE = document.getElementById('imagen');
let descripcionE = document.getElementById('descripcion');
let linkE = document.getElementById('link');
function mostrarDetalle(link, imagen, descripcion) {
    console.log("mostrando detalles");
    imagenE.innerHTML = `<img src="${imagen}" alt="Imagen de la serie" class="img-fluid mb-3"/>`;
    descripcionE.innerText = descripcion;
    linkE.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
}
renderSeriesInTable(data);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
      <td>${serie.posicion}</td>
      <td><a href="#" class="serie-link">${serie.nombre}</a></td>
      <td>${serie.canal}</td>
      <td>${serie.temporadas}</td>
    `;
        const linkElement = trElement.querySelector(".serie-link");
        linkElement.addEventListener("click", (e) => {
            e.preventDefault();
            mostrarDetalle(serie.link, serie.imagen, serie.descripcion);
        });
        seriesTBody.appendChild(trElement);
    });
}
let seriesPromedio = document.getElementById('promedio');
var suma = 0;
var cont = 0;
promedio(data);
function promedio(series) {
    console.log('sacando promedio');
    series.forEach((serie) => {
        suma += serie.temporadas;
        cont += 1;
    });
    let prom = suma / cont;
    seriesPromedio.innerText = "Season Average: " + prom;
}
