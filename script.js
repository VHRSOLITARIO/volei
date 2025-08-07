// script.js

// Função para mostrar um alerta ao clicar no botão "Saiba Mais"
function mostrarAlerta() {
    alert('Obrigado por visitar!');
  }
  
  // Função para mostrar um alerta ao enviar o formulário
  function enviarFormulario(event) {
    event.preventDefault(); // evita o envio real para fins de teste
    alert('Mensagem enviada!');
    // Aqui você pode adicionar lógica para enviar os dados para um servidor, etc.
  }
  
  // Adiciona os event listeners depois que o DOM estiver carregado
  document.addEventListener('DOMContentLoaded', () => {
    const botaoSaibaMais = document.querySelector('.btn-primary');
    if (botaoSaibaMais) {
      botaoSaibaMais.addEventListener('click', mostrarAlerta);
    }
  
    const formulario = document.querySelector('form');
    if (formulario) {
      formulario.addEventListener('submit', enviarFormulario);
    }
  });
  