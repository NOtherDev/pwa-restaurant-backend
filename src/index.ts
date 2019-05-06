import express from 'express'

import "reflect-metadata"
import {ConnectionOptions, createConnection} from "typeorm"
import * as ORMConfig from "../ormconfig.json"
import {User} from "./entity/User"

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

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await connection.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await connection.manager.find(User)
    console.log("Loaded users: ", users)

    express()
        .get('/', (req, res) => res.send("Hello from the backend"))
        .listen(PORT, () => console.log(`Listening on ${PORT}`))

}).catch(error => console.log(error))

