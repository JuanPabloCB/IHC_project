//Alerta para Envío de Formulario - Oliver
document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const requiredFields = this.querySelectorAll('[required]');
        let empty = false;

        requiredFields.forEach(function(field) {
            if (!field.value.trim()) {
                empty = true;
            }
        });

        if (empty) {
            Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor, completa todos los campos requeridos.',
                confirmButtonColor: '#58c3d4'
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado',
            text: 'Gracias por contactarnos, te responderemos pronto.',
            confirmButtonColor: '#58c3d4'
        });

        this.reset();
    });

});
