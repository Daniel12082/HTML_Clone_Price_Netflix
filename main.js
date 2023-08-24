const path = "config"
let construirEncabezado =async()=>{
    let peticion = await fetch(`${path}.json `);
    let res = await peticion.json();
    let Selecion = document.querySelector("#myjsonSection");
    Selecion.insertAdjacentHTML("beforeend",/*html*/ `
    <h1 class="display-6 fw-normal text-body-emphasis d-flex justify-content-start">${res.section.titulo}</h1>
        ${res.section.parrafo.map((value)=>/*html*/` 
        <p class="fs-6 text-body-secondary d-flex justify-content-start">${value.icon}${value.text}</p>`).join(" ")}
    `)
}
let construirCartas =async()=>{
    let peticion = await fetch(`${path}.json `);
    let res = await peticion.json();
    let Selecion = document.querySelector("#myjsonSection");
    Selecion.insertAdjacentHTML("beforeend",/*html*/ `
    <h1 class="display-6 fw-normal text-body-emphasis d-flex justify-content-start">${res.section.titulo}</h1>
        ${res.section.parrafo.map((value)=>/*html*/` 
        <p class="fs-6 text-body-secondary d-flex justify-content-start">${value.icon}${value.text}</p>`).join(" ")}
    `)
}

construirEncabezado();
