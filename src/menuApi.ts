import {Express} from 'express'
import {Repository} from 'typeorm'
import groupBy from 'lodash.groupby'
import {Dish} from './entity/Dish'

export default function menuApi(app: Express, repository: Repository<Dish>) {
    app.get('/menu', async (req, res) => {
        res.send(groupBy(await repository.find(), 'group'))
    })
}