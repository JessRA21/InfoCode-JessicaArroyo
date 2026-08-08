// Alternar giro de tarjeta por clic en su botón
function toggleFlip(button) {
  const flipCard = button.closest('.flip-card');
  if (flipCard) {
    flipCard.classList.toggle('is-flipped');
  }
}

// Abrir modal informativo
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
  }
}

// Cerrar modal informativo
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
}

// Cerrar modal haciendo clic fuera de la caja
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('active');
  }
};