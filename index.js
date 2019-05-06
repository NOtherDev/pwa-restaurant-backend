const express = require('express')

const PORT = process.env.PORT || 3300

express()
    .get('/', (req, res) => res.send("Hello from the backend"))
    .listen(PORT, () => console.log(`Listening on ${PORT}`))