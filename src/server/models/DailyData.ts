import { Schema, model, models } from 'mongoose';
import BaseSchema from '.';
import { collections } from '../../constants';

const DailyDataSchema = new Schema({
    ...BaseSchema,
    qtdCasosDiarios: {
        type: Number,
        require: true,
    },
    qtdCasosMasc: {
        type: Number,
        require: true,
    },
    qtdCasosFem: {
        type: Number,
        require: true,
    },
    qtdObitos: {
        type: Number,
        require: true,
    },
    qtdCurados: {
        type: Number,
        require: true,
    },
    totalCasosAteHoje: {
        type: Number,
        require: true,
    },
    qtdCasosZonaUrbana: {
        type: Number,
        require: true,
    },
    qtdCasosZonaRural: {
        type: Number,
        require: true,
    },
    municipioId: {
        type: Schema.Types.ObjectId,
        ref: 'Municipio',
        require: true,
    },
    referenceAt: {
        type: Date,
        default: Date.now,
    },
});

const DailyData =
    models.DailyData ||
    model('DailyData', DailyDataSchema, collections.dailyData);

export default DailyData;
