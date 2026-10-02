let siguienteSolicitud = 1;

function identificarSolicitud(req, res, next) {
  const solicitudId = `BIB-${String(siguienteSolicitud).padStart(4, "0")}`;

  siguienteSolicitud++;

  res.locals.solicitudId = solicitudId;

  next();
}

function medirDuracion(req, res, next) {
  const inicio = Date.now();

  res.on("finish", () => {
    const duracion = Date.now() - inicio;

    console.log(
      `[${res.locals.solicitudId}] ${req.method} ${req.originalUrl} ${res.statusCode} ${duracion}ms`,
    );
  });

  next();
}

module.exports = {
  identificarSolicitud,
  medirDuracion,
};
