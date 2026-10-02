function prepararAreaReservas(req, res, next) {
  res.locals.seccion = "Reservas de salas";

  next();
}

function validarReserva(req, res, next) {
  const estudiante = req.body.estudiante?.trim() || "";
  const email = req.body.email?.trim() || "";
  const sala = req.body.sala?.trim() || "";
  const fecha = req.body.fecha?.trim() || "";
  const turno = req.body.turno?.trim() || "";
  const personas = Number(req.body.personas);

  const salasValidas = ["Sala Norte", "Sala Sur", "Sala Multimedia"];

  const turnosValidos = ["Mañana", "Tarde", "Noche"];

  let error = "";

  if (
    !estudiante ||
    !email ||
    !sala ||
    !fecha ||
    !turno ||
    req.body.personas === ""
  ) {
    error = "Todos los campos son obligatorios.";
  } else if (!salasValidas.includes(sala)) {
    error = "La sala seleccionada no es válida.";
  } else if (!turnosValidos.includes(turno)) {
    error = "El turno seleccionado no es válido.";
  } else if (!email.includes("@")) {
    error = "El email debe contener @.";
  } else if (!Number.isInteger(personas) || personas < 1 || personas > 6) {
    error = "La cantidad de personas debe ser un número entero entre 1 y 6.";
  }

  if (error) {
    return res.status(400).render("reservas/nueva", {
      titulo: "Nueva reserva",
      error: error,
      datos: {
        estudiante: estudiante,
        email: email,
        sala: sala,
        fecha: fecha,
        turno: turno,
        personas: req.body.personas,
      },
    });
  }

  req.reservaValidada = {
    estudiante: estudiante,
    email: email,
    sala: sala,
    fecha: fecha,
    turno: turno,
    personas: personas,
  };

  next();
}

module.exports = {
  prepararAreaReservas,
  validarReserva,
};
