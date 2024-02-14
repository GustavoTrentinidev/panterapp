import { Request, Response } from "express"

import { ReturnMaterialService } from "../../services/militar/ReturnMaterialService"


class ReturnMaterialController{ 
    async handle(req: Request, res: Response){
        const { returnedQuantity, relationID } = req.body
    
        const RETURNMATERIALSERVICE = new ReturnMaterialService

        const returnedMaterial = await RETURNMATERIALSERVICE.execute({relationID, returnedQuantity})

        return res.json(returnedMaterial)
    }
}

export { ReturnMaterialController }