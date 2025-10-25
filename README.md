# Proyecto Pokeneas

Aplicación web desarrollada en Express.js que muestra información sobre los Pokeneas, criaturas inspiradas en la cultura antioqueña.

## Descripción

Los Pokeneas son criaturas nacidas en Antioquia, cada una con características únicas que representan elementos de la cultura paisa. Este proyecto expone dos rutas principales para consultar información sobre estos personajes de manera aleatoria.

## Características de los Pokeneas

Cada Pokenea tiene:
- **ID**: Identificador único
- **Nombre**: Nombre inspirado en la cultura antioqueña
- **Altura**: Altura en metros
- **Habilidad**: Poder especial del Pokenea
- **Imagen**: Almacenada en Google Cloud Storage
- **Frase filosófica**: Pensamiento característico del Pokenea

## Rutas disponibles

### 1. `/pokenea` (JSON)
Retorna información en formato JSON de un Pokenea aleatorio.

**Respuesta:**
```json
{
  "id": 1,
  "nombre": "Bandejón",
  "altura": 1.8,
  "habilidad": "Servir bandejas paisa gigantes",
  "containerId": "abc123def456"
}
```

### 2. `/pokenea-image` (HTML)
Muestra una página web con:
- Imagen del Pokenea
- Frase filosófica
- ID del contenedor donde se ejecuta la aplicación

## Estructura del proyecto

```
pokeneas/
├── data/
│   └── pokeneas.js          # Array con los 8 Pokeneas
├── routes/
│   └── pokeneaRoutes.js     # Definición de las rutas
├── index.js                 # Archivo principal de la aplicación
├── package.json             # Dependencias del proyecto
├── Dockerfile               # Configuración para contenedor Docker
└── README.md                # Documentación
```

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar la aplicación:
```bash
node index.js
```

La aplicación estará disponible en `http://localhost:80`

## Ejecución con Docker

1. Construir la imagen:
```bash
docker build -t pokeneas .
```

2. Ejecutar el contenedor:
```bash
docker run -p 80:80 pokeneas
```

## Pokeneas disponibles

1. **Bandejón** - Experto en bandejas paisa
2. **Arequipón** - Maestro del arequipe
3. **Cafeterito** - Guardián del café colombiano
4. **Arrieriux** - Resistente como los arrieros
5. **Silletero** - Creador de flores mágicas
6. **Parcerón** - El más amigable de todos
7. **Empanador** - Especialista en empanadas
8. **Guapeador** - El más valiente


## Notas

- Las imágenes están almacenadas en un bucket de Google Cloud Platform
- El ID del contenedor se obtiene usando `os.hostname()`
- Cada petición retorna un Pokenea aleatorio del arreglo