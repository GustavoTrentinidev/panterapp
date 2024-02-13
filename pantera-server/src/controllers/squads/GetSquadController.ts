import {Request, Response} from "express"
import { GetSquadServices } from "../../services/squads/GetSquadService"

class GetSquadController{
    async handle(req: Request, res: Response){
        const {id} = req.params;
    
        const getSquadService = new GetSquadServices()

        const requestReturn = await getSquadService.get({id})
        
        return res.json(requestReturn)
    }
}

export { GetSquadController }