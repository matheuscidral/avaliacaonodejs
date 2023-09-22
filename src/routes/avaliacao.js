const express = require("express");
const ControllerCalculadora = require("../controllers/avaliacao");

const controller = new ControllerCalculadora();
const router = express.Router();

router.get("/api/avaliacao", (req, res) => {
  res.status(200).json({
    message: "Você as seguintes operações: Adição, Subtração, Multiplicação, Divisão",
  });
});

router.post("/api/avaliacao/Somar", controller.Somar);
router.post("/api/avaliacao/Subtrair", controller.Subtrair);
router.post("/api/avaliacao/Multiplicar", controller.Multiplicar);
router.post("/api/avaliacao/Dividir", controller.Dividir);
router.post("/api/avaliacao/Potencia", controller.Potencia);

module.exports = router;
