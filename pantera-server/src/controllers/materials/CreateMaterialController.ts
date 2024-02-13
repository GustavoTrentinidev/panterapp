import { Request, Response } from "express"

import { CreateMaterialService } from "../../services/materials/CreateMaterialService";

class CreateMaterialController {
    async handle(req: Request, res: Response){
        const { name, total_quantity, squadID } = req.body;

        const creatematerialService = new CreateMaterialService()

        const material = await creatematerialService.execute({name, total_quantity, squadID})

        return res.json(material)
    }
}

export { CreateMaterialController }