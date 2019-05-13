import {RequestHandler} from "express"

declare global {
    namespace Express {
        interface Request {
            userId: string
        }
    }
}

const authMiddleware: RequestHandler = (req, res, next) => {
    const authHeader = req.header("Authorization")

    if (!authHeader) {
        res.status(401).send("Please specify the token in Authorization header")
    } else {
        req.userId = authHeader
        next()
    }
}

export default authMiddleware