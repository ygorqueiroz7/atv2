function multiplicar() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;

    const resultado = num1 * num2 * num3;

    document.getElementById('resultado').innerHTML = "O resultado é: " + resultado;
}