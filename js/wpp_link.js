function generateWhatsAppLink() {
    var name = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("telefone").value;
    var service = document.getElementById("services-select").value;
    var message = document.getElementById("mensagem").value;
    
    // Formatação dos dados para a URL do WhatsApp
    var formattedMessage = encodeURIComponent("Nome:\n" + name + "\n\nE-mail:\n" + email + "\n\nTelefone:\n" + tel + "\n\nServiço de interesse:\n" + service + "\n\nMensagem:\n" + message);
    
    // Número de telefone para o qual você deseja enviar a mensagem via WhatsApp
    var phoneNumber = "5547988439933";
    
    // Criação da URL do WhatsApp com os dados do formulário
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + formattedMessage;
    
    // Redireciona para o link do WhatsApp
    window.open(whatsappURL, "_blank");
}
