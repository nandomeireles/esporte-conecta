document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Função para alternar a visibilidade do dropdown
    function toggleDropdown() {
        dropdownContent.classList.toggle('show');
        dropdownBtn.classList.toggle('active'); // Adiciona/remove classe para girar a seta
    }

    // Adiciona o evento de clique ao botão do dropdown
    dropdownBtn.addEventListener('click', toggleDropdown);

    // Fecha o dropdown se o usuário clicar fora dele
    window.addEventListener('click', function(event) {
        if (!dropdownBtn || !dropdownContent) return;
    if (!event.target.matches('.dropdown-btn') && !event.target.matches('.dropdown-arrow')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
                dropdownBtn.classList.remove('active');
            }
        }
    });
});