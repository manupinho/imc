function imc () {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if ( altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'Abaixo do Peso.';
        }else if (valorIMC < 25) {
            classificacao = 'Peso Normal.';
        }else if (valorIMC < 30){
            classificacao = 'Sobrepeso.';
        }else if (valorIMC < 35){
            classificacao = 'Obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'Obesidade grau II';
        }else {
            classificacao = 'Obesidade grau III.';
        }
        resultado.textContent = `Seu IMC é ${valorIMC}: ${classificacao}`;
    }else {
        resultado.textContent = 'Preencha todos os campos!';
    }
}
calcular.addEventListener('click', imc);