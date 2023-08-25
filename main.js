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

construirEncabezado();
construirCartas();
