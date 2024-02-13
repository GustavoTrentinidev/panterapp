import { Request, Response } from "express"
import { LendMaterialService } from "../../services/militar/LendMaterialService"



class LendMaterialController {
    async handle(req: Request, res: Response){
        const { militarID, materialID, quantity } = req.body

        const material_militar = new LendMaterialService()

        const relation = await material_militar.execute({ militarID, materialID, quantity })

        return res.json(relation)
    }
}

export { LendMaterialController }