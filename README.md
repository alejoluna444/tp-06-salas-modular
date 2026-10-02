# TP 06 - Salas Modular

Aplicación web para gestionar reservas de salas de estudio.

## Tecnologías

* Node.js
* Express
* EJS
* express-ejs-layouts
* Morgan
* ESLint
* Prettier

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm start
```

La aplicación queda disponible en:

http://localhost:3000

## Variables de entorno

Se incluye un archivo `.env.example` con la siguiente configuración:

```env
PORT=3000
NODE_ENV=development
```

## Comandos

```bash
npm start
npm run format
npm run format:check
npm run lint
npm run check
```

## Funcionamiento

La aplicación permite:

* Ver la página de inicio.
* Consultar el estado de la aplicación.
* Listar las reservas.
* Ver el detalle de una reserva.
* Crear nuevas reservas.
* Validar los datos de una reserva.
* Mostrar páginas de error 404.

Las reservas se almacenan en memoria, por lo que las nuevas reservas desaparecen al reiniciar el servidor.
