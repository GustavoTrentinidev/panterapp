import prismaClient from "../../prisma"

interface militarRequestBodyData{
    name: string,
    graduation: string
} 

class CreateMilitarService {
    async execute({name, graduation}: militarRequestBodyData){
        const militar = await prismaClient.militar.create({
            data: {
                name,
                graduation
            }
        }) 
        return militar
    }
}

export { CreateMilitarService } 