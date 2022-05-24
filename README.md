#  ☄️ NASA
Proyecto fullstack MERN sobre meteoritos y asteroides.

**Backend**: Realizado con NodeJS + Express. Los datos de los meteoritos y asteroides están almacenados en una BBDD NoSQL con MongoDB. Para almacenar los usuarios que se registran en la app se usa una BBDD en MySQL. Para la documentación, tanto del código como de la API, se usaron las libretías JDocs y Swagger respectivamente.

**Front**: Hecho con componentes funcionales en ReactJS. Para los estilos se usaron las librerías MUI y SASS.

# 💻 Librerías
**Backend**
```javascript
  "dependencies": {
     "bcrypt": "^5.0.1",
     "cors": "^2.8.5",
     "dotenv": "^16.0.0",
     "express": "^4.17.3",
     "helmet": "^5.0.2",
     "jsonwebtoken": "^8.5.1",
     "mongoose": "^6.2.10",
     "mysql2": "^2.3.3",
     "nodemailer": "^6.7.5",
     "nodemon": "^2.0.15",
     "pm2": "^5.2.0",
     "sequelize": "^6.19.2",
     "swagger-jsdoc": "^6.2.1",
     "swagger-ui-express": "^4.3.0"
  },
  "devDependencies": {
     "jsdoc": "^3.6.10"
  }
  ```
  
  **Frontend**
  ```javascript
    "dependencies": {
       "@emotion/react": "^11.9.0",
       "@emotion/styled": "^11.8.1",
       "@mui/icons-material": "^5.6.2",
       "@mui/material": "^5.7.0",
       "@testing-library/jest-dom": "^5.16.4",
       "@testing-library/react": "^13.1.1",
       "@testing-library/user-event": "^13.5.0",
       "axios": "^0.27.2",
       "create-react-component-folder": "^0.3.7",
       "leaflet": "^1.8.0",
       "material-ui-popup-state": "^3.1.1",
       "normalize.css": "^8.0.1",
       "react": "^18.1.0", 
       "react-dom": "^18.1.0",
       "react-hook-form": "^7.31.1",
       "react-leaflet": "^4.0.0",
       "react-router-dom": "^6.3.0",
       "react-scripts": "5.0.1",
       "sass": "^1.51.0",
       "uuid": "^8.3.2",
       "web-vitals": "^2.1.4"
  }
  ```
  
  # 🚀 Instalación
  Desde tu terminal, clona en local el repositorio
  ```
  git clone https://github.com/n0e13/nasa_fs.git
  ```
  El proyecto tiene el cliente y el servidor juntos. Te recomiendo que abras dos terminales.
  
  Entra en la carpeta del proyecto:
  ```
  cd nasa_fs
  ```
  E instala todas las dependencias del servidor con:
  ```
  npm i
  ```
  Luego entra en la carpeta del cliente:
  ```
  cd client
  ```
  E instala todas sus dependencias:
  ```
  npm i
  ```
  Para lanzar la app, escribe en **ambas terminarles**:
  ```
  npm start
  ```
  
  # ⚙️ Configuración
  Crea un archivo ```.env``` en la carpeta raíz para configurar el servidor y rellena con tus datos los siguientes campos:
  ```javascript

//Puerto por el que lanzar el servidor, por defecto es 5000
PORT= 

// URI de Mongo Atlas
DBMONGO_URI= 

// Datos para conectar con la BBDD MySQL que almacena los datos de los usuarios registrados
DBMYSQL_HOST=
DBMYSQL_USER=
DBMYSQL_PASSWORD=
DBMYSQL_DATABASE=
DBMYSQL_DIALECT=

// Entorno de trabajo
NODE_ENV=

// JWT
JWT_EXPIRATION=
SECRET=

// Configuración para el envío de correos con nodemailer para recuperar contraseña
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
FROM_MAIL=
```

Ahora, dentro de ```client``` crea un archivo ```.env.local``` y configura la app con tu API KEY de la Nasa
```javascript
REACT_APP_API_KEY=
```

# ✨ Demo
Puedes ver una [demo aquí](https://nasa-fs-n0e.herokuapp.com/) (Hay cositas que pulir aún 😅)

# 📃 Documentación
Puedes leer la documentación del **código del backend** en ```http://localhost:5500/jsondocs/LandingAPI.html``` una vez tengas el servidor arrancado.

Para la documentación de la **API** puedes verla en local en ```http://localhost:5000/api-docs/``` (o en el puerto que lo lances) o [aquí](https://nasa-fs-n0e.herokuapp.com/api-docs/)

  
