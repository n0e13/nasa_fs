/**
 * @author Noemy García
 * @module controllers/nea_controller
 * @exports nea
 * @namespace Neas
 */


const neaDB = require('../models/nea_api_model');


/** Función que comprueba si llegan parámetros de consulta y dependiendo del tipo llama a una función u otra
 * @memberof Neas
 * @method getByQuery
 * @async
 * @param {Object} req Puede ser req.query.class, req.query.from y req.query.to
 * @param {Object} res Respuesta con el estado, el listado y el mensaje apropiado de lo ocurrido 
 * @returns {JSON}
 * @throws {error}
 */
const getByQuery = async (req, res) => {
    if (Object.keys(req.query).length !== 0) {
        if (req.query.class) {
            getByClass(req.query.class, res);
        } else if (req.query.from || req.query.to) {
            getByDate(req.query, res);
        }
    } else {
        res.status(400).json({ message: 'No hay parámetros' });
    }
}


/** Función que devuelve un listado de neas cuya clase sea la recibida por parámetro
 * @memberof Neas
 * @method getByClass
 * @async
 * @param {String} nea_class Clase de las neas por las que buscar
 * @param {Object} res Respuesta con el estado, el listado y el mensaje apropiado de lo ocurrido 
 * @returns {JSON}
 * @throws {error}
 */
const getByClass = async (nea_class, res) => {
    try {
        const allNeas = await neaDB.getByClass(nea_class);
        res.status(200).json(allNeas);
    }
    catch (error) {
        res.status(400).json({ message: error });
    }
}


/** Función que devuelve un listado de neas con las fechas recibidas
 * @memberof Neas
 * @method getByDate
 * @async
 * @param {Object} query Recibe el parámetro desde getByQuery con las fechas query.from y query.to
 * @param {Object} res Respuesta con el estado, el listado y el mensaje apropiado de lo ocurrido 
 * @returns {JSON}
 * @throws  {error}
 */
const getByDate = async (query, res) => {
    try {
        const allNeas = await neaDB.getByDate(query.from, query.to);
        res.status(200).json(allNeas);
    }
    catch (error) {
        res.status(400).json({ message: error });;
    }
}


/** Función que crea una nea con los datos recibidos
 * @memberof Neas
 * @method createNea
 * @async
 * @param {Object} req Recibe en el req.body los datos de la nueva nea
 * @param {Object} res Respuesta con el estado, el listado y el mensaje apropiado de lo ocurrido 
 * @returns {JSON}
 * @throws {error}
 */
const createNea = async (req, res) => {
    if (Object.keys(req.body).length !== 0) {
        try {
            await neaDB.createNea(req.body);
            res.status(201).json({ message: 'Nea creada correctamente' });
        }
        catch (error) {
            res.status(400).json({ message: error });
        }
    } else {
        res.status(400).json({ message: 'No hay datos para crear una nea' });
    }
}


/** Función que actualiza una nea
 * @memberof Neas
 * @method updateNea
 * @async
 * @param {Object} req Recibe en el req.body los datos de la nea a actualizar. Lo hace por designation
 * @param {Object} res Respuesta con el estado, el listado y el mensaje apropiado de lo ocurrido 
 * @returns {JSON}
 * @throws {error}
 */
const updateNea = async (req, res) => {
    if (Object.keys(req.body).length !== 0) {
        try {
            await neaDB.updateNea(req.body);
            res.status(202).json({ message: 'Nea actualizada correctamente' });
        }
        catch (error) {
            res.status(400).json({ message: error });
        }
    } else {
        res.status(400).json({ message: 'No hay datos para actualizar una nea' });
    }
}


/** Función que borra una nea
 * @memberof Neas
 * @method deleteNea
 * @async
 * @param {Object} req Recibe por req.body la nea a borrar. Lo hace por designation
 * @param {Object} res Respuesta con el estado, el listado y el mensaje apropiado de lo ocurrido 
 * @returns {JSON}
 * @throws {error}
 */
const deleteNea = async (req, res) => {
    if (Object.keys(req.body).length !== 0) {
        try {
            await neaDB.deleteNea(req.body);
            res.status(202).json({ message: 'Nea borrada correctamente' });
        }
        catch (error) {
            res.status(400).json({ message: error });
        }
    } else {
        res.status(400).json({ message: 'No hay datos para borrar una nea' });
    }
}


const nea = {
    getByQuery,
    createNea,
    updateNea,
    deleteNea
};

module.exports = nea;