const toggleBtn = document.getElementById('toggleBtn');

// Load preference from localStorage
window.onload = () => {
  const savedMode = localStorage.getItem('theme');
  if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
  }
};

// Toggle dark mode and store preference
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
});
