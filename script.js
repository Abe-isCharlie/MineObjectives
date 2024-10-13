document.querySelectorAll('.task input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        this.parentElement.classList.toggle('completed', this.checked);
    });
});