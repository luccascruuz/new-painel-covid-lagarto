import { Schema, model, models } from 'mongoose';

import BaseSchema from '.';

const MunicipioSchema = new Schema({
    ...BaseSchema,
    nome: {
        type: String,
        require: true,
    },
    codigoIbge: {
        type: String,
        require: true,
    },
    estado: {
        type: String,
        require: true,
    },
});

const Municipio = models.Municipio || model('Municipio', MunicipioSchema);

export default Municipio;
