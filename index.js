/**
 * @author Noemy García
 */

const express = require('express');

const { app: { PORT } } = require('./configs/env_config');
const connectMongoDB = require('./configs/mongodb_config');
const {connectMySQL} = require("./configs/mysql_config");

const helmet = require('helmet');
const cors = require('cors');
const path = require('path');//Añadido para conectar front y back
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./configs/swagger.json');


// Middlewares
const notFound = require('./middlewares/notFound');

const landingRouter = require('./routes/landing_routes');
const neaRouter = require('./routes/nea_routes');
const authRouter = require('./routes/auth_routes');

const port = PORT || 5000;

const app = express();

// Middlewares
app.use(helmet());
app.use(cors(
    {
        origin: ["https://nasa-fs-n0e.herokuapp.com/", "https://api.nasa.gov/planetary/apod"],
        //methods:['GET','PUT', 'POST', 'DELETE'],
        allowedHeaders:['Content-Type'],
        //exposedHeaders: [],
        //credentials:true,
        //maxAge:18,
        //preflightContinue:true,
        //optionsSuccessStatus:
    }
    ));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Front + back
app.use(express.static(path.join(__dirname, 'client/build')));

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/astronomy/landings', landingRouter);
app.use('/api/astronomy/neas', neaRouter); 
app.use('/api/auth', authRouter);

// Middlewares
app.use(notFound);


// Front + back
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + 'client/build/index.html'))
})

/**
 * Función inicial que conecta a la BBDD y lanza el servidor
 * @async
 */

const init = async () => {
    try {
        await connectMongoDB();
        //await connectMySQL();
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        })
    }
    catch (error) {
        console.log(error);
    }
}

init();
