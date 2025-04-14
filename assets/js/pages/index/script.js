document.getElementById('newsletter-form').addEventListener('submit',function(event){
    event.preventDefault();// Previne o envio padrão do formulário

    // Obter dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    //Enviar dados para o servidor via fetch ou XMLHttpRequest
    fetch('http://localhost:3000/contatos',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({nome, email})
    })
    .then(response => response.json())
    .then(data => {
        // Aqui você pode manipular a resposta do servidor, se necessário
        console.log('Resposta do servidor:', data)

        // Enviar e-mail de boas-vindas
        const mailOptions = {
            from:'pedrohenri100lima@gmail.com',
            to: email,
            subject: 'Bem vindo ao nosso site!',
            text: `Olá ${nome},\n\nBem-vindo ao nosso site! Agradecemos por se cadastrar.`
        };

        fetch('http://localhost:3000/contatos',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(mailOptions)
        })
        .then(response => response.json())
        .then(data =>{
            console.log('E-mail de boas vindas enviado: ',data);
            alert('Formulário enviado com sucesso! Verifique seu e-mail para as boas-vindas.');
        })
        .catch(error=>{
            console.error('Erro ao enviar e-mail de boas-vindas:', error);
            alert('Erro ao enviar e-mail de boas-vindas. Por favor, tente novamente mais tarde.');
        });



    })
    .catch(error => {
        console.log('Erro ao enviar dados do formulário:', error)
        alert('Erro ao enviar formulário. Por favor, tente novamente mais tarde.')
    });
});