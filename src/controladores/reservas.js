function crearControladorReservas(servicio) {
  function listarReservas(req, res) {
    const reservas = servicio.listar();

    res.render("reservas/lista", {
      titulo: "Reservas",
      reservas: reservas,
    });
  }

  function mostrarFormulario(req, res) {
    res.render("reservas/nueva", {
      titulo: "Nueva reserva",
      error: "",
      datos: {},
    });
  }

  function mostrarDetalle(req, res) {
    const id = Number(req.params.id);
    const reserva = servicio.buscarPorId(id);

    if (!reserva) {
      return res.status(404).render("no-encontrado", {
        titulo: "Reserva no encontrada",
      });
    }

    res.render("reservas/detalle", {
      titulo: "Detalle de reserva",
      reserva: reserva,
    });
  }

  function crearReserva(req, res) {
    servicio.crear(req.reservaValidada);

    res.redirect("/reservas");
  }

  function contarReservas() {
    return servicio.contar();
  }

  return {
    listarReservas,
    mostrarFormulario,
    mostrarDetalle,
    crearReserva,
    contarReservas,
  };
}

module.exports = {
  crearControladorReservas,
};
