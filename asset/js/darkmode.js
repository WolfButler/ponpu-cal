const modeToggle = document.querySelector('.mode-toggle');

    modeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('dark-mode');
    }
);