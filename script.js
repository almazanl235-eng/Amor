// CONFIGURACIÓN DE CONTRASEÑA
const CLAVE_CORRECTA = "240326"; // Cambiada a la fecha de noviazgo (o mantén la que prefieras)

// FECHA DE INICIO DEL NOVIAZGO: 24 de Marzo de 2026
// En JavaScript los meses van de 0 a 11 (Enero = 0, Febrero = 1, Marzo = 2)
const FECHA_INICIO = new Date(2026, 2, 24, 0, 0, 0); 

// Elementos DOM
const unlockBtn = document.getElementById('unlock-btn');
const passwordInput = document.getElementById('password-input');
const errorMsg = document.getElementById('error-msg');
const lockScreen = document.getElementById('lock-screen');
const contentScreen = document.getElementById('content-screen');

// Función de Desbloqueo
function checkPassword() {
  if (passwordInput.value === CLAVE_CORRECTA) {
    errorMsg.style.display = 'none';
    lockScreen.classList.add('hidden');
    contentScreen.classList.remove('hidden');
    iniciarContador();
  } else {
    errorMsg.style.display = 'block';
    passwordInput.value = '';
  }
}

unlockBtn.addEventListener('click', checkPassword);
passwordInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') checkPassword();
});

// Contador de Tiempo
function iniciarContador() {
  setInterval(() => {
    const ahora = new Date();
    const diferencia = ahora - FECHA_INICIO;

    // Si la fecha actual es posterior al 24 de marzo de 2026, muestra el tiempo transcurrido
    if (diferencia > 0) {
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferencia / 1000 / 60) % 60);
      const segundos = Math.floor((diferencia / 1000) % 60);

      document.getElementById('days').innerText = dias;
      document.getElementById('hours').innerText = horas;
      document.getElementById('minutes').innerText = minutos;
      document.getElementById('seconds').innerText = segundos;
    } else {
      // En caso de probarlo antes de la fecha
      document.getElementById('days').innerText = 0;
      document.getElementById('hours').innerText = 0;
      document.getElementById('minutes').innerText = 0;
      document.getElementById('seconds').innerText = 0;
    }
  }, 1000);
}

// Botón Interactivo de la Sombrilla
const respuestasSombrilla = [
  "Estatus: Te prometo que mañana sí te la llevo",
  "Estatus: Se me volvió a olvidar... perdón jaja",
  "Estatus: Ya es 99% de mi propiedad formalmente ☂️",
  "Estatus: Muy tarde... quien sabe donde quedo jiji",
  "Estatus: Devolución denegada. Intenta el próximo mes."
];

let indiceRespuesta = 0;
const umbrellaBtn = document.getElementById('umbrella-btn');
const umbrellaStatus = document.getElementById('umbrella-status');

umbrellaBtn.addEventListener('click', () => {
  umbrellaStatus.innerHTML = `Estatus actual: <strong>${respuestasSombrilla[indiceRespuesta]}</strong>`;
  indiceRespuesta = (indiceRespuesta + 1) % respuestasSombrilla.length;
});