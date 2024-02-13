import { Request, Response } from "express"
import { CreateMilitarService } from "../../services/militar/CreateMilitarService"


class CreateMilitarController {
    async handle(req: Request, res: Response){
        const { name, graduation } = req.body

        const CREATEMILITARSERVICE = new CreateMilitarService()

        const militar = await CREATEMILITARSERVICE.execute({name,graduation})

        return res.json(militar)
    }
}

export { CreateMilitarController }