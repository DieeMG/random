const seasons = document.querySelector('#seasons');
const caps = document.querySelector('#caps');
const btn = document.querySelector('#randonbtn');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

btn.addEventListener('click', math );

function math() {
   
    if (seasons.value == '' || caps.value =='' ) {
        mostrarAlerta('All fields must be complete');
        return;

    }

   const seasonsRandom = getRandomIntInclusive(1, parseInt(seasons.value))
   const capRandom = getRandomIntInclusive(1, parseInt(caps.value))

    resultado.innerHTML = `
    <h4>You should watch</h4>
    <p><strong>Season:</strong> ${seasonsRandom}<br>
    <strong>Episode:</strong> ${capRandom}</p>`
}

// Muestra una alerta de error o correcto
function mostrarAlerta(mensaje) {
    const alerta = document.querySelector('.bg-red-100');
    if(!alerta) {
        const alerta = document.createElement('p');

        alerta.classList.add('alert', 'alert-danger', 'd-flex', 'align-items-center', 'gap-2' );
    
        alerta.innerHTML = `
            <strong>Error!</strong> ${mensaje}
        `;
    
        formulario.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        }, 2000);
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
