const express = require("express");

const {
  prepararAreaReservas,
  validarReserva,
} = require("../middleware/reservas");

function crearRouterReservas(controlador) {
  const router = express.Router();

  router.use(prepararAreaReservas);

  router.get("/", controlador.listarReservas);

  router.get("/nueva", controlador.mostrarFormulario);

  router.get("/:id", controlador.mostrarDetalle);

  router.post("/", validarReserva, controlador.crearReserva);

  return router;
}

module.exports = {
  crearRouterReservas,
};
