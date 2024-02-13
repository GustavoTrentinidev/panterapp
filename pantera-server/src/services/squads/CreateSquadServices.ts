import prismaClient from "../../prisma"

interface userRequestBodyValues{
    name: string,
}

class CreateSquadServices {
    async execute({ name }: userRequestBodyValues){
        const alreadyCreatedSquads = (await prismaClient.squad.findMany()).length
        if(alreadyCreatedSquads >= 2){
            return {error: "The squads of the company are already createds."} 
        }
        if(name){
            const squad = await prismaClient.squad.create({
                data: {
                    name,
                }
            })
            return squad
        }
        return {error: "You need to set a name for the squad."} 
    } 
}

export { CreateSquadServices }