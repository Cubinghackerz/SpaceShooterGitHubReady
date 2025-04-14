document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'white';
  ctx.font = '24px sans-serif';
  ctx.fillText('🚀 Space Shooter Game Loaded!', 160, 300);
});
