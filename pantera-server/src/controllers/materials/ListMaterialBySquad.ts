import { Request, Response } from "express"

import { ListMaterialService } from "../../services/materials/ListMaterialService"

class ListMaterialBySquad{
    async handle(req: Request, res: Response){
        const { squad } = req.params
        
        const LISTMATERIALSERVICE = new ListMaterialService()
        
        const materialList = await LISTMATERIALSERVICE.listMaterial({
            squad: parseInt(squad)
        })

        return res.json(materialList)
    }
}

export { ListMaterialBySquad }