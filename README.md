# DrupalCamp Spain 2025

Este proyecto es una demostración para la DrupalCamp Spain 2025, que muestra una landing page sobre Santiago de Compostela utilizando tecnologías modernas de desarrollo frontend.

## 📚 Documentación del Proyecto

En la raíz del proyecto encontrarás:
- `general-rules.txt`: Archivo de configuración con el prompt general de reglas para Cursor AI
- `DrupalCampSpain2025_CursorAI.pptx`: Presentación que se utilizará durante la jornada

## 🚀 Tecnologías

- HTML5
- SASS/SCSS
- JavaScript/jQuery
- Gulp
- Bootstrap 4.6.0

## 📁 Estructura del Proyecto

```
.
├── DrupalCampSpain2025_CursorAI.pptx     # Presentación de la jornada
├── general-rules.txt                     # Prompt general para Cursor AI
├── LICENSE                               # Archivo de licencia
├── README.md                             # Este archivo
└── example/                              # Proyecto de demostración
    ├── src/
    │   ├── fonts/          # Archivos de fuentes
    │   ├── images/         # Imágenes del proyecto
    │   ├── js/            # Scripts de JavaScript
    │   │   ├── image-lightbox.js
    │   │   ├── nav.js
    │   │   └── scroll-to-top.js
    │   └── sass/          # Archivos SCSS
    │       └── styles.scss
    ├── gulpfile.js        # Configuración de tareas Gulp
    ├── package.json       # Dependencias del proyecto
    └── index.html         # Página principal
```

## 🛠️ Instalación

1. Asegúrate de tener [Node.js](https://nodejs.org/) y [Yarn](https://yarnpkg.com/) instalados
2. Clona este repositorio
3. Navega al directorio `example`
4. Instala las dependencias:
   ```bash
   yarn install
   ```

## 📦 Scripts Disponibles

- `yarn default` o `yarn build`: Compila todos los assets
- `yarn watch`: Observa cambios en los archivos y recompila automáticamente
- `yarn clean`: Limpia el directorio de distribución

## 🔧 Tareas de Gulp

El proyecto utiliza Gulp para automatizar las siguientes tareas:

- Compilación de SASS a CSS con autoprefixer
- Minificación de JavaScript
- Optimización de imágenes
- Copia de fuentes
- Generación de sourcemaps

## 🌐 Compatibilidad con Navegadores

El proyecto está configurado para soportar:
- Las últimas 3 versiones de los navegadores principales (Chrome, Firefox, Edge, Safari)
- No soporta navegadores obsoletos o sin mantenimiento
- No soporta Internet Explorer 11

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## ✨ Características

- Diseño responsive
- Lightbox para imágenes
- Navegación suave
- Botón de scroll to top
- Optimizado para rendimiento

## 👥 Autor

Desarrollado por Isaac Pavón (Cocomore) para la DrupalCamp Spain 2025.
