document.addEventListener('DOMContentLoaded', () => {
    const passwordOutput = document.getElementById('passwordOutput');
    const copyButton = document.getElementById('copyButton');
    const passwordLength = document.getElementById('passwordLength');
    const lengthValue = document.getElementById('lengthValue');
    const includeUppercase = document.getElementById('includeUppercase');
    const includeLowercase = document.getElementById('includeLowercase');
    const includeNumbers = document.getElementById('includeNumbers');
    const includeSymbols = document.getElementById('includeSymbols');
    const generateButton = document.getElementById('generateButton');

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    // Atualiza o valor do comprimento da senha conforme o slider é movido
    passwordLength.addEventListener('input', () => {
        lengthValue.textContent = passwordLength.value;
    });

    // Função para gerar a senha
    function generatePassword() {
        let characters = '';
        let generatedPassword = '';
        const length = parseInt(passwordLength.value);

        if (includeUppercase.checked) characters += uppercaseChars;
        if (includeLowercase.checked) characters += lowercaseChars;
        if (includeNumbers.checked) characters += numberChars;
        if (includeSymbols.checked) characters += symbolChars;

        if (characters === '') {
            passwordOutput.value = 'Selecione pelo menos um tipo de caractere!';
            return;
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPassword += characters[randomIndex];
        }

        passwordOutput.value = generatedPassword;
    }

    // Gerar senha quando o botão é clicado
    generateButton.addEventListener('click', generatePassword);

    // Copiar senha para a área de transferência
    copyButton.addEventListener('click', () => {
        if (passwordOutput.value) {
            navigator.clipboard.writeText(passwordOutput.value).then(() => {
                alert('Senha copiada para a área de transferência!');
            }).catch(err => {
                console.error('Erro ao copiar senha: ', err);
                alert('Não foi possível copiar a senha.');
            });
        }
    });

    // Gerar uma senha inicial ao carregar a página
    generatePassword();
});