import { data } from "./data.js";
import { Serie } from "./Serie.js";

let seriesTBody: HTMLElement = document.getElementById('Serie')!;

let imagenE:HTMLElement = document.getElementById('imagen')!;
let descripcionE:HTMLElement = document.getElementById('descripcion')!;
let linkE:HTMLElement = document.getElementById('link')!;

function mostrarDetalle(link: string, imagen: string, descripcion: string): void {
  console.log("mostrando detalles");

  imagenE.innerHTML = `<img src="${imagen}" alt="Imagen de la serie" class="img-fluid mb-3"/>`;
  descripcionE.innerText = descripcion;
  linkE.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
}




renderSeriesInTable(data);
function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `
      <td>${serie.posicion}</td>
      <td><a href="#" class="serie-link">${serie.nombre}</a></td>
      <td>${serie.canal}</td>
      <td>${serie.temporadas}</td>
    `;
    const linkElement = trElement.querySelector(".serie-link")!;
    linkElement.addEventListener("click", (e) => {
      e.preventDefault(); 
      mostrarDetalle(serie.link, serie.imagen, serie.descripcion);
    });

    seriesTBody.appendChild(trElement);
  });
}

  let seriesPromedio: HTMLElement = document.getElementById('promedio')!;
  var suma : number =0 ;
  var cont : number = 0;

  promedio(data);
  function promedio (series: Serie[]): void {
  console.log('sacando promedio');
  series.forEach((serie) => { 
    suma += serie.temporadas;
    cont += 1;
  });
  let prom = suma/cont;
  
  seriesPromedio.innerText = "Season Average: " + prom;

}
