class Calculadora {
  Somar(num1, num2) {
    console.log("Entrou na Funcao");
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Favor informar números");
    }
    const resultado = num1 + num2;

    return resultado;
  }

  Subtrair(num1, num2) {
    console.log("Entrou na Funcao");
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Favor informar números");
    }
    const resultado = num1 - num2;

    return resultado;
  }

  Multiplicar(num1, num2) {
    console.log("Entrou na Funcao");
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Favor informar números");
    }
    const resultado = num1 * num2;

    return resultado;
  }

  Dividir(num1, num2) {
    console.log("Entrou na Funcao");
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Favor informar números");
    }
    const resultado = num1 / num2;

    return resultado;
  }

  Potencia(num1, num2) {
    console.log("Entrou na Funcao");
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Favor informar números");
    }
    const resultado = Math.pow(num1, num2);

    return resultado;
  }
}

module.exports = Calculadora;
