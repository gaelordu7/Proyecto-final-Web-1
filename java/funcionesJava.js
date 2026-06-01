function mostrarFechaHora() {
    const ahora = new Date();
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    };
    const fechaTexto = ahora.toLocaleDateString('es-MX', opciones);
    
    document.getElementById('datetime').innerHTML = fechaTexto;
}
setInterval(mostrarFechaHora, 1000);
mostrarFechaHora();