function sendMessage(){
    (function(){
        emailjs.init("fAweNiH4KlMDQ-Zbz");//Acount public key
    })();

    var serviceID = "service_w4xwhtd";//Email Serice ID
    var templateID = "template_942uikl";//Email Template ID
    
    var params = {
        sendername: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        sendersubject: document.querySelector("#subject").value,
        sendermessage: document.querySelector("#message")
    };

    emailjs.send(serviceID, templateID, params)
    .then( res=>{
        alert('Thank you, '+params['sendername']+'! Your message has been sent.')
    })
    .catch()
}