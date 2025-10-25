const express = require('express');
const os = require('os');
const router = express.Router();
const pokeneas = require('../data/pokeneas');

// Route 1: Return JSON with id, name, height, ability and container id
router.get('/pokenea', (req, res) => {
  const randomIndex = Math.floor(Math.random() * pokeneas.length);
  const pokenea = pokeneas[randomIndex];
  
  res.json({
    id: pokenea.id,
    nombre: pokenea.nombre,
    altura: pokenea.altura,
    habilidad: pokenea.habilidad,
    containerId: os.hostname()
  });
});

// Route 2: Display image and philosophical phrase on screen
router.get('/pokenea-image', (req, res) => {
  const randomIndex = Math.floor(Math.random() * pokeneas.length);
  const pokenea = pokeneas[randomIndex];
  
  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pokenea</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          margin: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container {
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        .pokenea-image {
          width: 300px;
          height: 300px;
          border-radius: 10px;
          margin: 20px auto;
          object-fit: cover;
        }
        .phrase {
          font-size: 24px;
          font-style: italic;
          margin: 20px 0;
          max-width: 500px;
        }
        .container-id {
          margin-top: 20px;
          font-size: 14px;
          opacity: 0.8;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${pokenea.nombre}</h1>
        <img src="${pokenea.imagen}" alt="${pokenea.nombre}" class="pokenea-image">
        <p class="phrase">"${pokenea.fraseFilosofica}"</p>
        <p class="container-id">Container ID: ${os.hostname()}</p>
      </div>
    </body>
    </html>
  `;
  
  res.send(html);
});

module.exports = router;

