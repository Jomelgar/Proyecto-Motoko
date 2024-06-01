document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.menu');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetUrl = this.getAttribute('href');
            window.location.href = targetUrl;
        });
    });
});

