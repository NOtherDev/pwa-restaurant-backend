import {Express} from 'express'
import {EntityManager} from 'typeorm'
import groupBy from 'lodash.groupby'

import Dish from '../../entity/Dish'
import {catchErrors} from '../../routingUtils'

export default function menuApi(app: Express, entities: EntityManager) {
    app.get('/menu', catchErrors(async (req, res) => {
        res.send(groupBy(await entities.find(Dish), 'group'))
    }))
}