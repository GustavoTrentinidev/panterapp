import prismaClient from "../../prisma"

interface getParams{
    id: string
}

class GetMilitarService{
    async get({id}: getParams){
        const intId = parseInt(id)
        const militar = await prismaClient.militar.findFirst({
            relationLoadStrategy: 'join',
            where: {id: intId},
            select: {
                name: true,
                graduation: true,
                material: {
                    select: {
                        material: {
                            select: {
                                name: true,
                            }
                        },
                        quantity: true
                    }
                }
            }
        }) 
        return militar
    }
}

export { GetMilitarService }