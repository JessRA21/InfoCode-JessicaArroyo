// Función para alternar el giro 3D de las tarjetas de clasificación
function toggleFlip(button) {
  const flipCard = button.closest('.flip-card');
  flipCard.classList.toggle('is-flipped');
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('active');
  }
};

// Alterna el detalle de las tarjetas de la hoja de ruta al hacer clic
function toggleRoadmapCard(card) {
  card.classList.toggle('open');
}