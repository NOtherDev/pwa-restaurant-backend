import express from 'express'
import "reflect-metadata"
import {ConnectionOptions, createConnection} from "typeorm"
import * as ORMConfig from "../ormconfig.json"

import {getDishes} from './seed'
import menuApi from './menuApi'
import {Dish} from './entity/Dish'

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

    app.get('/', (req, res) => res.send("Hello from the backend"))

    menuApi(app, connection.manager.getRepository(Dish))

    app.listen(PORT, () => console.log(`Listening on ${PORT}`))

}).catch(error => console.log(error))

