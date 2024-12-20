document.addEventListener("load", () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    function handleScrollAnimation() {
        fadeInElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();

    // Validación del formulario
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            const nombre = document.getElementById("nombre").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            let errors = [];
            const errorContainer = document.getElementById("form-errors");
            errorContainer.innerHTML = "";

            if (!nombre) errors.push("Por favor, ingresa tu nombre.");
            if (!/^[0-9]+$/.test(telefono)) errors.push("El teléfono debe contener solo números.");
            if (!mensaje) errors.push("Por favor, ingresa tu mensaje.");

            if (errors.length) {
                errors.forEach(err => {
                    const p = document.createElement("p");
                    p.textContent = err;
                    p.style.color = "red";
                    errorContainer.appendChild(p);
                });
            } else {
                errorContainer.innerHTML = "<p style='color:green;'>Formulario enviado correctamente.</p>";
                setTimeout(() => form.submit(), 1000);
            }
        });
    }
});
