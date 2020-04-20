window.addEventListener('DOMContentLoaded', function() {
    var year = document.querySelector('#year');

    var date = new Date();
    year.textContent = date.getFullYear().toString();
});
