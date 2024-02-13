import { Request, Response } from "express"
import { CreateSquadServices } from "../../services/squads/CreateSquadServices"


class CreateSquadController {
    async handle(req: Request, res: Response ){
        const name  = req.body.name

        const squadServices = new CreateSquadServices()

        const squad = await squadServices.execute({name})

        return res.json(squad)
    }
}

export {CreateSquadController}