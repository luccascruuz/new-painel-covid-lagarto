import { NextApiRequest, NextApiResponse } from 'next';
import { municipio } from '../../constants';
import connectDb from '../../server/middlewares/dbMiddleware';
import DailyData from '../../server/models/DailyData';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log(req.headers);
        const dailyDatas = await DailyData.aggregate([
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: '$qtdCasosDiarios',
                    },
                },
            },
            {
                $project: {
                    _id: null,
                    [`totalCasos${municipio}`]: '$total',
                },
            },
        ]);

        if (dailyDatas) {
            res.status(200).json(dailyDatas);
        }
    } catch (e) {
        res.status(401).send(e);
    }
}

export default connectDb(handler);
