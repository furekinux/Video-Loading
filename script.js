let progress = 0;
const targetProgress = 90;
const progressFill = document.getElementById('progressFill');
        
const interval = setInterval(() => {
    if (progress < targetProgress) {
        progress += 1;
        progressFill.style.width = progress + '%';
    } else {
        clearInterval(interval);
    }
}, 15);
