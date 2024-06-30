let icons = document.querySelectorAll('icon');
icons.forEach(icon => {
    icon.textContent = icon.textContent.replace(/-/g, '_');
});