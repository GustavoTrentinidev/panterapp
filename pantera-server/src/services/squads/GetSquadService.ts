import prismaClient from "../../prisma"

interface requestParams{
    id?: string 
}


class GetSquadServices{
    async get({id}: requestParams){
        if(id){
            const numberId = parseInt(id)

            const [squad] = await prismaClient.squad.findMany({
                where: {id: numberId},
            })

            if(squad){
                return squad
            }
            return {error: "This id doesn't represents any squad."}
        }
        const squads = await prismaClient.squad.findMany()
        return squads
    }
}

export { GetSquadServices }