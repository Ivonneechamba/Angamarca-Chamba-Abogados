function enviarWhatsApp() {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const area = document.getElementById("areaConsulta").value;
    const modalidad = document.getElementById("modalidad").value;
    const mensaje = document.getElementById("mensaje").value;

    const texto = `Hola, deseo agendar una consulta jurídica.

Nombre: ${nombre}
Teléfono: ${telefono}
Área de consulta: ${area}
Modalidad: ${modalidad}

Detalle de la consulta:
${mensaje}`;

    const numeroWhatsApp = "593985220503"; // Reemplaza con tu número
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
}
