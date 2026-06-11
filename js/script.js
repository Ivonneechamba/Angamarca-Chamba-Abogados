function enviarWhatsApp(){
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;
    let modalidad = document.getElementById('modalidad').value;

    let url = "https://wa.me/593985220503?text="
    + "Nombre: " + nombre + "%0A"
    + "Teléfono: " + telefono + "%0A"
    + "Modalidad: " + modalidad + "%0A"
    + "Consulta: " + mensaje;

    window.open(url, '_blank');
}