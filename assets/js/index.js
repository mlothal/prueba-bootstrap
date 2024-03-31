
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

$(document).ready(function(){
    $("#enviarCorreo").click(function(){
        alert("El mensaje de contacto fue enviado correctamente...");
    });
});