document.getElementById('year').textContent = new Date().getFullYear();

document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const nome = encodeURIComponent(formData.get('nome'));
  const telefone = encodeURIComponent(formData.get('telefone'));
  const mensagem = encodeURIComponent(formData.get('mensagem'));

  const text = `Olá, meu nome é ${nome}. Meu WhatsApp é ${telefone}. Problema: ${mensagem}`;
  window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
});
