---
title: Como hacer un servidor con NodeJs y Express
description: Aqui encontraras una guia para crear un servidor desde cero con NodeJs y Express
publishedDate: '10/3/2023'
tags: ['nodejs', 'express', 'javascript', 'server', 'backend', 'web', 'dev']
image: https://s6.imgcdn.dev/ZLDeq.png
slug: server-nodejs-express
---

# Como hacer un servidor con NodeJs y Express

## Introduccion
NodeJs a sido una de las tecnologias mas usadas en los ultimos años, y es que con NodeJs podemos hacer muchas cosas, desde un servidor hasta una aplicacion de escritorio, en este articulo aprenderemos a crear un servidor con NodeJs y Express.

## Que es NodeJs?
NodeJs es un entorno de ejecucion de JavaScript, esto quiere decir que podemos ejecutar JavaScript en el servidor, y esto es posible gracias a que NodeJs esta construido sobre el motor de JavaScript V8 de Chrome.

## Que es Express?
Express es un framework de NodeJs que nos permite crear aplicaciones web y APIs de una manera mas sencilla, Express nos permite crear un servidor con NodeJs de una manera mas sencilla.

## Creando el servidor
Para crear el servidor primero debemos crear una carpeta, y dentro de esta carpeta crearemos un archivo llamado `index.js`, este archivo sera el archivo principal de nuestro servidor, y dentro de este archivo escribiremos el siguiente codigo:

```js
const express = require('express'); // Importamos express
const app = express(); // Creamos una instancia de express

app.listen(3000, () => { // Iniciamos el servidor en el puerto 3000
	console.log('Servidor iniciado en el puerto 3000');
});
```

Ahora para iniciar el servidor debemos ejecutar el siguiente comando en la terminal:

```bash
node index.js
```

Si todo salio bien, deberiamos ver el siguiente mensaje en la terminal:

```bash
Servidor iniciado en el puerto 3000
```

## Creando una ruta
Ahora que ya tenemos nuestro servidor funcionando, vamos a crear una ruta, para esto vamos a crear un archivo llamado `routes.js`, y dentro de este archivo escribiremos el siguiente codigo:

```js
const express = require('express'); // Importamos express
const router = express.Router(); // Creamos una instancia de express.Router()

router.get('/', (req, res) => { // Creamos una ruta GET
	res.send('Hola mundo'); // Enviamos un mensaje
});

module.exports = router; // Exportamos el router
```

Ahora en el archivo `index.js` vamos a importar el archivo `routes.js` y vamos a usar el router que creamos, para esto vamos a escribir el siguiente codigo:

```js

const express = require('express'); // Importamos express
const app = express(); // Creamos una instancia de express

const routes = require('./routes'); // Importamos el archivo routes.js

app.use(routes); // Usamos el router

app.listen(3000, () => { // Iniciamos el servidor en el puerto 3000
	console.log('Servidor iniciado en el puerto 3000');
});
```

Ahora si vamos a la ruta `http://localhost:3000/` deberiamos ver el mensaje `Hola mundo`.

## Creando una ruta con parametros
Ahora vamos a crear una ruta con parametros, para esto vamos a modificar el archivo `routes.js` y vamos a escribir el siguiente codigo:

```js
const express = require('express'); // Importamos express
const router = express.Router(); // Creamos una instancia de express.Router()

router.get('/', (req, res) => { // Creamos una ruta GET
	res.send('Hola mundo'); // Enviamos un mensaje
});

router.get('/hola/:nombre', (req, res) => { // Creamos una ruta GET con parametros
	const { nombre } = req.params; // Obtenemos el parametro nombre
	res.send(`Hola ${nombre}`); // Enviamos un mensaje
});

module.exports = router; // Exportamos el router
```

Ahora si vamos a la ruta `http://localhost:3000/hola/` deberiamos ver el mensaje `Hola mundo`, y si vamos a la ruta `http://localhost:3000/hola/John` deberiamos ver el mensaje `Hola John`.

Como pueden ver en cada endpoint tenemos dos obejtos req y res que significan request y response, estos objetos nos permiten obtener informacion de la peticion y enviar una respuesta.
