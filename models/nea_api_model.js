/**
 * @author Noemy García
 * @module models/nea_api_model
 * @exports neaAPI
 * @namespace NeaAPI
 */
const Nea = require('./nea_schema_model');
const myRgx = require('../utils/validateDate');


/** Obtiene todas las Neas y su información ​
 * Ejemplo: /astronomy/neas?class=aten​
 * @memberof NeaAPI
 * @method getAll
 * @async
 * @returns {JSON}
 * @throws {error}
 */
 const getAll = async () => {
    try {
        const allNeas = await Nea.find();
        return allNeas;
    } catch (error) {
        throw error;
    }
}


/** Obtiene la designación y el período anual en base a la clase orbital del asteroide (con query params)​
 * Ejemplo: /astronomy/neas?class=aten​
 * @memberof NeaAPI
 * @method getByClass
 * @async
 * @param {String} orbit Clase dada
 * @returns {JSON}
 * @throws {error}
 */
const getByClass = async (orbit) => {
    try {
        const agg = [{
            '$project': {
                '_id': 0,
                'designation': 1,
                'period_yr': 1,
                'orbit_class': 1
            }
        }, {
            '$match': { '$expr': { '$eq': ['$orbit_class', orbit] } }
        }
        ]
        const allNeas = await Nea.aggregate(agg);
        return allNeas;
    } catch (error) {
        throw error;
    }
}


/** Obtiene designación, fecha y período anual de todos los asteroides que cumplan el filtro de fechas dadas​
 * /astronomy/neas?from=2010&to=2015
 * /astronomy/neas?from=2010
 * /astronomy/neas?to=2015
 * En este caso, además, podremos poner la fecha más específica si quisiéramos:
 * YYYY-MM-DD
 * YYYY-MM
 * YYYY
 * El endpoint debe ser compatible con los 3 casos
 * @memberof NeaAPI
 * @method getByDate
 * @async
 * @param {String} fromDate Fecha inicial
 * @param {String} toDate Fecha final
 * @returns {JSON}
 * @throws {error}
 */
const getByDate = async (fromDate, toDate) => {
    let fromValidate = false;
    let toValidate = false;

    if (fromDate
        && myRgx.regexDate(fromDate)
        && (fromDate.length === 10
            || fromDate.length === 7
            || fromDate.length === 4)) {
        fromValidate = true;
    }

    if (toDate
        && myRgx.regexDate(toDate)
        && (toDate.length === 10
            || toDate.length === 7
            || toDate.length === 4)) {
        toValidate = true;
    }

    try {
        const agg = [
            {
                '$project': {
                    '_id': 0,
                    'designation': 1,
                    'discovery_date': 1,
                    'period_yr': 1
                }
            }
        ];

        const allNeas = await Nea.aggregate(agg);
        let inDate = [];
        allNeas.forEach(neaItem => {
            if (neaItem.discovery_date) {

                let neaDate = neaItem.discovery_date.substr(0, 10);

                if (fromValidate && toValidate) {
                    if (myRgx.compareDates(fromDate, neaDate) && myRgx.compareDates(neaDate, toDate)) {
                        inDate.push(neaItem);
                    }
                } else if (fromDate && toDate && (fromValidate !== toValidate)) {
                    throw "Formato incorrecto. Usar YYYY-MM-DD / YYYY-MM / YYYY";
                } else if (fromValidate) {
                    if (myRgx.compareDates(fromDate, neaDate)) {
                        inDate.push(neaItem);
                    }
                } else if (toValidate) {
                    if (myRgx.compareDates(neaDate, toDate)) {
                        inDate.push(neaItem);
                    }
                } else {
                    throw "Formato incorrecto. Usar YYYY-MM-DD / YYYY-MM / YYYY";
                }
            }
        });
        return inDate;
    } catch (error) {
        throw error;
    }
}


/** Crea un nuevo NEA en el sistema. El objeto a crear tendrá los mismos campos como los documentos proporcionandos en MongoDB como ejemplo:
 * {
 *      "designation": "(2014 CY4)",
 *      "discovery_date": "2014-02-04T00:00:00.000",
 *      "h_mag": "21.1",
 *      "moid_au": "0.042",
 *      "q_au_1": "0.48",
 *      "q_au_2": "4.82",
 *      "period_yr": "4.32",
 *      "i_deg": "15.02",
 *      "pha": "Y",
 *      "orbit_class": "Apollo"
 * }
 * Ejemplo: /astronomy/neas/create
 * @memberof NeaAPI
 * @method createNea
 * @async
 * @param {Object} nea Objeto para crear un nueva NEA
 * @throws {error}
 */
const createNea = async (nea) => {
    try {
        const newNea = new Nea(nea);
        await Nea.create(newNea);
    } catch (error) {
        throw error;
    }
}

 
/** Para editar un NEA en el sistema. Búsqueda para editar por designation. El objeto a editar tendrá los mismos campos como los documentos proporcionandos en MongoDB como ejemplo.
 * Ejemplo: /astronomy/neas/edit
 * @memberof NeaAPI
 * @method updateNea
 * @async
 * @param {Object} nea Objeto para actualizar el NEA
 * @throws {error}
 */
const updateNea = async (nea) => {
    try {
        const newNea = Nea(nea);
        const oldNea = await Nea.findOne({ designation: nea.designation });
        oldNea.overwrite(newNea);
        oldNea.save();
    } catch (error) {
        throw error;
    }
}


/** Para borrar un NEA del sistema. Búsqueda para borrar por designation.
 * Ejemplo: /astronomy/neas/delete
 * @memberof NeaAPI
 * @method deleteNea
 * @async
 * @param {Object} nea Objeto para actualizar el NEA
 * @throws {error}
 */
const deleteNea = async (nea) => {
    try {
        await Nea.findOneAndDelete({ designation: nea.designation });
    } catch (error) {
        throw error;
    }
}

const neaAPI = {
    getAll,
    getByClass,
    getByDate,
    createNea,
    updateNea,
    deleteNea
}

module.exports = neaAPI;
