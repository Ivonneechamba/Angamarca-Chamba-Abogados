document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
document.getElementById("agendaForm").addEventListener("submit", function(e) {
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
📅 Tipo de cita: ${tipoCita}
⚖️ Área legal: ${areaLegal}

📝 Descripción de la consulta:
${descripcion}

Quedo atento(a) a la confirmación de fecha y hora.`;

    const url = `https://wa.me/593985220503?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
});
