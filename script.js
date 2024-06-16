document.addEventListener('DOMContentLoaded', function () {
    const services = document.querySelectorAll('.service');

    services.forEach(service => {
        const learnMore = service.querySelector('.learn-more');
        learnMore.addEventListener('click', function (e) {
            e.preventDefault();
            const isActive = service.classList.contains('active');
            services.forEach(s => {
                s.classList.remove('active');
                s.style.maxHeight = '150px';
            }); // Rimuove 'active' dagli altri blocchi e resetta l'altezza
            if (!isActive) {
                service.classList.add('active'); // Aggiunge 'active' solo al blocco cliccato
                service.style.maxHeight = service.scrollHeight + 'px'; // Imposta l'altezza del blocco cliccato per mostrare il contenuto
            }
        });

        service.addEventListener('mouseover', function () {
            service.classList.add('hover');
        });

        service.addEventListener('mouseout', function () {
            service.classList.remove('hover');
        });
    });
});
