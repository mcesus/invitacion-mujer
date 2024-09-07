// script.js

// Función para redirigir a Google Calendar con un evento prellenado
function redirectToGoogleCalendar() {
    // Datos del evento
    const title = 'Cumple de Miranda'; // Título del evento
    const details = 'Festejo de cumpleaños'; // Descripción del evento
    const location = 'Rincon de Ensueños'; // Ubicación del evento
    const startDate = '2024-10-30T09:00:00'; // Fecha y hora de inicio (en formato ISO)
    const endDate = '2024-10-30T10:00:00'; // Fecha y hora de fin (en formato ISO)

    // URL de Google Calendar
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&dates=${startDate}/${endDate}`;

    // Redirigir al usuario a Google Calendar
    window.open(url, '_blank');
}

// Asignar la función al botón
document.getElementById('boton-calendario').addEventListener('click', redirectToGoogleCalendar);


document.getElementById('whatsapp-boton').addEventListener('click', function() {
    const phoneNumber = '3815545723';  // Número de teléfono al que se enviará el mensaje
    const message = 'Hola, quiero confirmar mi asistencia al evento.';  // Mensaje a enviar

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});

document.getElementById('mapsButton').addEventListener('click', function() {
    const address = 'Buenos Aires 338, T4000 San Miguel de Tucumán, Tucumán';  // Dirección del evento

    const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
});

// Fecha objetivo para la cuenta regresiva (por ejemplo, el 31 de diciembre de 2024)
const targetDate = new Date('October 30, 2024 23:59:59').getTime();

const countdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculando días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualizando el HTML con los valores calculados
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // Si la cuenta regresiva ha terminado, mostrar un mensaje
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = '¡El evento ha comenzado!';
    }
};

// Actualizando la cuenta regresiva cada segundo
const interval = setInterval(countdown, 1000);

//Activar desactivar sonido

// document.addEventListener("DOMContentLoaded", function() {
//     const soundImage = document.getElementById("sonido-imagen");
//     const soundText = document.getElementById("sonido-texto");
//     const audio = document.getElementById("audio");
   
//     soundImage.addEventListener("click", function() {
//         if (audio.paused) {
//             audio.play();
//             soundImage.src = "./img/pause.svg";
//             soundText.textContent = "Pausar";
//         } else {
//             audio.pause();
//             soundImage.src = "./img/play.svg";
//             soundText.textContent = "Sonido";
//         }
//     });
// });

document.getElementById('sonido-imagen').addEventListener('click', function() {
    const audioElement = document.getElementById('audio');
    const isPlaying = !audioElement.paused;

    if (isPlaying) {
        audioElement.pause();
        this.src = './img/play.svg'; // Cambia la imagen a "play"
    } else {
        audioElement.play();
        this.src = './img/pause.svg'; // Cambia la imagen a "pause"
    }
});




let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}