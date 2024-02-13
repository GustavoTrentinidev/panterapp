import prismaClient from "../../prisma";

interface MaterialNeeds {
    name: string
    total_quantity: number
    squadID: number
}

class CreateMaterialService{
    async execute({name, total_quantity, squadID}: MaterialNeeds){
        if(!name){
            return {error: "You need to pass the material name in json."}
        }
        if(!total_quantity){
            return {error: "You need to pass the total quantity of the material in json."}
        }
        if(!squadID){
            return {error: "You need to pass the squad of the material in json."}
        }
        const material = await prismaClient.material.create({
            data:{
                name,
                total_quantity,
                squad: {
                    connect:{ id :squadID }
                },
                current_quantity: total_quantity
            }
        })
        return material
    }
}

export { CreateMaterialService }