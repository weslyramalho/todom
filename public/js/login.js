const tfemail = document.getElementById('email');
const tfsenha = document.getElementById('senha');
const btlogar = document.getElementById('btLogar');

const onBtLogarClick = () => {
    if (tfemail.value == '' ||tfsenha == ''){
        alert("Preenchaos campos login e senha");
    }
    login(tfemail.value, tfsenha.value);
};

btlogar.addEventListener('click', onBtLogarClick);

const login = (email,senha) => {
    fetch('/login',{
        method: 'POST',
        body: JSON.stringify({email: email, senha: senha}),
        headers: {'content-Type': 'apllication/json'}
    });
}

