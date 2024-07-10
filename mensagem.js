document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('messageForm');
    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Simular envio da mensagem 
            setTimeout(function() {
                const modal = document.getElementById('myModal');
                if (modal) {
                    modal.style.display = 'block'; // Mostra o modal
                } else {
                    console.error('Elemento #myModal não encontrado no documento.');
                }

                // Limpar campos do formulário após envio
                messageForm.reset();

            }, 1000); // Simular um atraso de 1 segundo para mostrar o modal
        
            // Esconder o modal após alguns segundos
            setTimeout(function() {
                const modal = document.getElementById('myModal');
                if (modal) {
                    modal.style.display = 'none';
                } else {
                    console.error('Elemento #myModal não encontrado no documento.');
                }
            }, 5000); // Esconder após 5 segundos
        });
    } else {
        console.error('Elemento #messageForm não encontrado no documento.');
    }
});

