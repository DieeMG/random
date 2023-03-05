const seasons = document.querySelector('#seasons');
const episodes = document.querySelector('#episodes');
const btn = document.querySelector('#submitbtn');
const form = document.querySelector('#form');
const result = document.querySelector('#result');

btn.addEventListener('click', getEpisode );

function getEpisode() {
   
    if (seasons.value == '' || episodes.value =='' ) {
        showAlert('All fields must be complete');
        return;

    }

   const seasonRandom = getRandomNumber(1, parseInt(seasons.value))
   const episodecapRandom = getRandomNumber(1, parseInt(episodes.value))

    result.innerHTML = `
    <h4>You should watch</h4>
    <p><strong>Season:</strong> ${seasonRandom}<br>
    <strong>Episode:</strong> ${episodecapRandom}</p>`
}


function showAlert(mensaje) {
    const alert = document.querySelector('.bg-red-100');
    if(!alert) {
        const alert = document.createElement('p');

        alert.classList.add('alert', 'alert-danger', 'd-flex', 'align-items-center', 'gap-2' );
    
        alert.innerHTML = `
            <strong>Error!</strong> ${mensaje}
        `;
    
        form.appendChild(alert);
    
        setTimeout(() => {
            alert.remove();
        }, 2000);
    }
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
