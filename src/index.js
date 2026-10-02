const { obtenerConfiguracion } = require("./configuracion");
const { crearServicioReservas } = require("./servicios/reservas");
const { crearControladorReservas } = require("./controladores/reservas");
const { crearApp } = require("./app");

const configuracion = obtenerConfiguracion();

const datosIniciales = [
  {
    id: 1,
    estudiante: "Juan Pérez",
    email: "juan@gmail.com",
    sala: "Sala Norte",
    fecha: "2026-09-25",
    turno: "Mañana",
    personas: 2,
  },
  {
    id: 2,
    estudiante: "María López",
    email: "maria@gmail.com",
    sala: "Sala Sur",
    fecha: "2026-09-25",
    turno: "Tarde",
    personas: 4,
  },
  {
    id: 3,
    estudiante: "Pedro Gómez",
    email: "pedro@gmail.com",
    sala: "Sala Multimedia",
    fecha: "2026-09-26",
    turno: "Noche",
    personas: 3,
  },
  {
    id: 4,
    estudiante: "Lucía Fernández",
    email: "lucia@gmail.com",
    sala: "Sala Norte",
    fecha: "2026-09-27",
    turno: "Mañana",
    personas: 1,
  },
];

const servicio = crearServicioReservas(datosIniciales);

const controlador = crearControladorReservas(servicio);

const app = crearApp({
  controlador,
  entorno: configuracion.entorno,
});

app.listen(configuracion.puerto, () => {
  console.log(
    `Servidor funcionando en http://localhost:${configuracion.puerto}`,
  );
});
