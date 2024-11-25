$(document).ready(function (){
    $('#telefone').mask("(00) 00000-0000");
    $('#cpf').mask('000.000.000.00');
    $('cep').mask('00000-000');

    $('#form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14
            },
            cpf : {
                required: true,
                minlength: 4
            },
            endereco: {
                required: true,
                minlength: 10
            },
            cep: {
                required: true,
                minlength:10
            },
            cep: {
                required: true,
                minlength: 7
            }
        },
        messages: {
            nome:{
                required:'Por favor, insira seu nome completo.',
                minlength: 'O nome deve ter pelo menos 3 caracteres.'
            },
            email : {
                required: 'Por favor, insira seu telefone.',
                minlength: 'Insira um telefone válido no formato (XX) XXXXX-XXXX.'
            },
            cpf : {
                required: 'Por favor, insira seu CPF.',
                minlength: 'Insira um CPF válido no formato 000.000.000.00.'
            },
            endereco : {
                required: 'Por favor, insira seu endereço.',
                minlength: 'O endereço deve ter pelo menos 10 caracteres.'
            },
            cep : {
                required: 'Por favor, insira seu CEP. ',
                minlength: 'Insira um CEP válida no formato 00000-000.'
            }
        },
        submitHandler: function (form) {
            alert('Formulário enviado com sucesso!');
            form.submit();
        }
    })
})