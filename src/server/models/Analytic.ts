import { Schema, model, models } from 'mongoose';
import BaseSchema from '.';

const AnalyticSchema = new Schema({
    ...BaseSchema,
    tipo: {
        type: String,
        require: true,
    },
    descricao: {
        type: String,
        require: false,
    },
});

const Analytic = models.Analytic || model('Analytic', AnalyticSchema);

export default Analytic;
