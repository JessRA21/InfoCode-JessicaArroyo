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

function toggleRoadmapCard(element) {
  const targetCard = element.closest('.roadmap-card');

  document.querySelectorAll('.roadmap-card').forEach(card => {
    if (card !== targetCard) {
      card.classList.remove('open');
    }
  });

  targetCard.classList.toggle('open');
}
