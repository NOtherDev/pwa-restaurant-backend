import * as Express from "express"

export function catchErrors(handler: Express.Handler) {
    return async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
        try {
            await handler(req, res, next)
        } catch (err) {
            next(err)
        }
    }
}