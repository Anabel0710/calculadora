// Función para mostrar el menú y solicitar una operación
function mostrarMenu() {
    return prompt("Selecciona una operación:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Funciones Math\n6. Salir");
}

// Función para ingresar los números
function ingresarNumero(mensaje) {
    return parseFloat(prompt(mensaje));
}

// Funciones básicas
function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { return b !== 0 ? a / b : "Error: No se puede dividir por 0"; }

// Funciones Math
function funcionesMath() {
    let opcionMath = prompt("Selecciona una función:\n1. Raíz Cuadrada\n2. Potencia\n3. Valor Absoluto");
    let num = ingresarNumero("Ingresa un número:");

    switch (opcionMath) {
        case '1': return Math.sqrt(num);
        case '2': 
            let exponente = ingresarNumero("Ingresa el exponente:");
            return Math.pow(num, exponente);
        case '3': return Math.abs(num);
        default: return "Opción inválida";
    }
}

// Programa principal
function calculadora() {
    let opcion;
    
    do {
        opcion = mostrarMenu();
        let num1, num2, resultado;

        switch (opcion) {
            case '1': // Suma
                num1 = ingresarNumero("Ingresa el primer número:");
                num2 = ingresarNumero("Ingresa el segundo número:");
                resultado = sumar(num1, num2);
                alert("El resultado de la suma es: " + resultado);
                break;
            case '2': // Resta
                num1 = ingresarNumero("Ingresa el primer número:");
                num2 = ingresarNumero("Ingresa el segundo número:");
                resultado = restar(num1, num2);
                alert("El resultado de la resta es: " + resultado);
                break;
            case '3': // Multiplicación
                num1 = ingresarNumero("Ingresa el primer número:");
                num2 = ingresarNumero("Ingresa el segundo número:");
                resultado = multiplicar(num1, num2);
                alert("El resultado de la multiplicación es: " + resultado);
                break;
            case '4': // División
                num1 = ingresarNumero("Ingresa el primer número:");
                num2 = ingresarNumero("Ingresa el segundo número:");
                resultado = dividir(num1, num2);
                alert("El resultado de la división es: " + resultado);
                break;
            case '5': // Funciones Math
                resultado = funcionesMath();
                alert("El resultado es: " + resultado);
                break;
            case '6': // Salir
                alert("Gracias por usar la calculadora.");
                break;
            default:
                alert("Opción inválida. Inténtalo de nuevo.");
                break;
        }
    } while (opcion !== '6');
}
