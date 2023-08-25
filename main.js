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
let construirCartas = async () => {
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let Selecion = document.querySelector("#cartas");
    Selecion.insertAdjacentHTML("beforeend", /*html*/ `
        ${res.cartas.cardcontent.map((value) => /*html*/ `
            <div class="col">
                ${value.Body.Border.border_red}
                    ${value.Body.Border.background}
                        <h4 class="my-0 fw-normal">${value.header}</h4>
                    </div>
                    <div class="card-body">
                        ${value.Body.precio}
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>${value.Body.servicios.device}</li>
                            <li>${value.Body.servicios.support}</li>
                            <li>${value.Body.servicios.Help}</li>
                        </ul>
                        <button type="button" class=${value.Body.Border.button}>Select</button>
                    </div>
                </div>
            </div>
        `).join(" ")}
    `);
}
let construirTabla =async()=>{
    let peticion = await fetch(`${path}.json `);
    let res = await peticion.json();
    let Selecion = document.querySelector("#mytable");
    Selecion.insertAdjacentHTML("beforeend",/*html*/ `
    <h2 class='display-6 text-center mb-4'>${res.Tabla.titulo}</h2>
    <div class="table-responsive">
        <table class="table text-center">
            <thead>
                <tr>
                    ${res.Tabla.thead.columna1}
                    ${res.Tabla.thead.columna2}
                    ${res.Tabla.thead.columna3}
                    ${res.Tabla.thead.columna4}
                </tr>
            </thead>
            <tbody>
                ${res.Tabla.tbody.map((value)=>/*html*/`
                <tr>
                    <td scope="row" class="text-start">${value.columna1}</td>
                    <td scope="row" class="text-start text-muted ">${value.columna2}</td>
                    <td scope="row" class="text-start text-muted" >${value.columna3}</td>
                    <td scope="row" class="text-start  text-danger">${value.columna4}</td>
                </tr>
                ` ).join(" ")}
            </tbody>
            </table>
        </div>
    `)}
    let construirFooter =async()=>{
        let peticion = await fetch(`${path}.json `);
        let res = await peticion.json();
        let Selecion = document.querySelector("#Footer");
        Selecion.insertAdjacentHTML("beforeend",/*html*/ `
        <div class="row">
            <div class="col-12 col-md">
                <img class="mb-2" src="${res.Footer.copyright.icon}" alt="" width="40" height="50">
                <small class="d-block mb-3 text-body-secondary">&copy;${res.Footer.copyright.text}</small>
            </div>
            ${res.Footer.terms.map((value)=>/*html*/`
            <div class="col-6 col-md">
                <h5>${value.title}</h5>
                <ul class="list-unstyled text-small">
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${value.lista.i1}</a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${value.lista.i2}</a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${value.lista.i3}</a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${value.lista.i4}</a></li>
                <ul>
            </div>
            `).join(" ")}
        </div>
        `)
    }
construirEncabezado();
construirCartas();
construirTabla();
construirFooter();
