
function initThemeToggle() {
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            toggleBtn.textContent = document.body.classList.contains('dark-theme') ? 'Light Theme' : 'Dark Theme';
        });
    }
}

function initClock() {
    function updateClock() {
        const clockElement = document.getElementById('clock');
        if (clockElement) {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            clockElement.textContent = timeString;
        }
    }

    setInterval(updateClock, 1000);
    updateClock();
}


document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initClock();
}); 