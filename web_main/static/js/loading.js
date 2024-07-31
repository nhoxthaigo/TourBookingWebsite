document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('loading-page').classList.add('show');
    });

    setTimeout(function() {
    document.getElementById('loading-page').classList.remove('show');
    }, 3000);