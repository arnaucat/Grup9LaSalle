const body = document.body;
const toggleBtn = document.getElementById('toggleBtn');

// Check localStorage for theme preference
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleBtn.textContent = 'Light Mode';
}

// Toggle dark/light mode and save preference in localStorage
toggleBtn.addEventListener('click', function() {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});