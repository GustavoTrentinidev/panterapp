import { Request, Response } from "express"

class ReturnMaterialController{ 
    async handle(req: Request, res: Response){
        const { militarID, materialID, quantity } = req.body
    }
}

export { ReturnMaterialController }