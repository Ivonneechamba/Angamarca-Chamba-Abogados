document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("agendaForm");

    if (!form) {
        console.log("Formulario NO encontrado");
        return;
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const tipoCita = document.getElementById("tipoCita").value;
        const areaLegal = document.getElementById("areaLegal").value;
        const descripcion = document.getElementById("descripcion").value;

        const mensaje =
`Hola, deseo agendar una cita con Angamarca Chamba Abogados.

👤 Nombre: ${nombre}
📞 Teléfono: ${telefono}
📅 Tipo: ${tipoCita}
⚖️ Área: ${areaLegal}

📝 Descripción:
${descripcion}`;

        const url = "https://wa.me/593985220503?text=" + encodeURIComponent(mensaje);

        window.location.href = url; // 👈 MÁS estable que window.open
    });

});
function abrirModal(nombre) {
    const modal = document.getElementById("modal-" + nombre);
    if (modal) {
        modal.style.display = "block";
    } else {
        console.log("No se encontró el modal: modal-" + nombre);
    }
}

function cerrarModal(nombre) {
    const modal = document.getElementById("modal-" + nombre);
    if (modal) {
        modal.style.display = "none";
    }
}

// Cerrar modal al hacer clic fuera
window.addEventListener("click", function(event) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
