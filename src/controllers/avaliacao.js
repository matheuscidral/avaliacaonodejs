const Calculadora = require("../services/avaliacao");
const servico = new Calculadora();

class controllerCalculadora {
  Somar(req, res) {
    try {
      const result = servico.Somar(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Probleminha" });
    }
  }

  Subtrair(req, res) {
    try {
      const result = servico.Subtrair(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Probleminha" });
    }
  }

  Multiplicar(req, res) {
    try {
      const result = servico.Multiplicar(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Probleminha" });
    }
  }

  Dividir(req, res) {
    try {
      const result = servico.Dividir(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Probleminha" });
    }
  }

  Potencia(req, res) {
    try {
      const result = servico.Potencia(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Probleminha" });
    }
  }
}

module.exports = controllerCalculadora;
