import express, * as Express from 'express'
import "reflect-metadata"
import {ConnectionOptions, createConnection} from "typeorm"
import bodyParser from 'body-parser'

import * as ORMConfig from "../ormconfig.json"

import {getDishes} from './seed'
import menuApi from './api/menu/menuApi'
import Dish from './entity/Dish'
import orderApi from './api/order/orderApi'
import authMiddleware from './api/auth'

const PORT = process.env.PORT || 3300

const connectionOptions: ConnectionOptions = {
    ...ORMConfig,
    type: "postgres",

    extra: {
        ssl: !!process.env.DATABASE_URL,
    },

    url: process.env.DATABASE_URL || "postgres://localhost:5432/pwa-restaurant",
}

createConnection(connectionOptions).then(async connection => {
    const [, count] = await connection.manager.findAndCount(Dish)

    if (!count) {
        const seed = [...getDishes()]
        await connection.manager.save(seed)
    }

    const app = express()
    app.use(bodyParser.json())
    app.use(authMiddleware)

    app.get('/', (req, res) => res.send("Hello from the backend"))

    menuApi(app, connection.manager)
    orderApi(app, connection.manager)

    app.use((error: Error, req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
        console.error(error)
        res.status(500).send({error: error.message})
    })

    app.listen(PORT, () => console.log(`Listening on ${PORT}`))

}).catch(error => console.log(error))

