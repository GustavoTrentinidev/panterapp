import { Router } from 'express';
import { CreateSquadController } from "./controllers/squads/CreateSquadController"
import { GetSquadController } from "./controllers/squads/GetSquadController"
import { CreateMaterialController } from './controllers/materials/CreateMaterialController';
import { ListMaterialBySquad } from './controllers/materials/ListMaterialBySquad';
import { CreateMilitarController } from './controllers/militar/CreateMilitarController';
import { GetMilitarController } from './controllers/militar/GetMilitarController';
import { LendMaterialController } from './controllers/militar/LendMaterialController';

const router = Router()

class Routes{}

router.post("/squads", new CreateSquadController().handle)
router.get("/squads/", new GetSquadController().handle)
router.get("/squads/:idw", new GetSquadController().handle)
router.get("/squads/:squad/materials", new ListMaterialBySquad().handle)

router.post("/materials", new CreateMaterialController().handle)

router.post("/militar", new CreateMilitarController().handle)
router.get("/militar/:id", new GetMilitarController().handle)

router.get("/militar/:id", new GetMilitarController().handle)

router.post("/militar/lendmaterial", new LendMaterialController().handle)

export {router}