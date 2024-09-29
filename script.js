document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura valores dos inputs
    const placa = document.getElementById('placa').value;
    const proprietario = document.getElementById('proprietario').value;
    const apartamento = document.getElementById('apartamento').value;
    const bloco = document.getElementById('bloco').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const vaga = document.getElementById('vaga').value;

    // Exibe valores no console
    console.log({
        placa,
        proprietario,
        apartamento,
        bloco,
        modelo,
        cor,
        vaga
    });

    // Exibe mensagem de confirmação
    alert('Cadastro realizado com sucesso!');
    
    // Limpa campos do formulário
    this.reset();
});
