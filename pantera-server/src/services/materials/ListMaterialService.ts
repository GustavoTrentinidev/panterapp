import prismaClient from "../../prisma"


interface listMaterialParameter{
    squad: number
}

class ListMaterialService{
    async listMaterial({squad}: listMaterialParameter){
        const materials = await prismaClient.material.findMany({
            where: {
                squadID: squad
            }
        }) 
        if(materials.length){
            return materials
        }
        return {error: "You need to pass a valid squad parameter to get the material list of a squad."}
    }
}

export { ListMaterialService }