import { Request, Response } from "express"
import { GetMilitarService } from "../../services/militar/GetMilitarService"


class GetMilitarController{
    async handle(req: Request, res: Response){
        const {id} = req.params

        const GETMILITARSERVICE = new GetMilitarService()

        const militar = await GETMILITARSERVICE.get({id})

        return res.json(militar)
    }
}

export { GetMilitarController }