import prismaClient from "../../prisma"

interface returnMaterialData {
    relationID: number,
    returnedQuantity: number
}

interface materialData{
    materialID: number
}

class ReturnMaterialService {
    async execute({ relationID, returnedQuantity }: returnMaterialData){
        const lendedQuantity = await this.getRelationQuantity({relationID, returnedQuantity})
        
        if( returnedQuantity > lendedQuantity){
            return {error: `You don't have this quantity to return, you're owing ${lendedQuantity} units of this material.`}
        }
        
        this.updateMaterialQuantity({relationID, returnedQuantity})

        if(lendedQuantity == returnedQuantity){
            const deleteRelation = await prismaClient.militar_Material.delete({
                where: {id : relationID}
            })
            return deleteRelation
        }
        
        const newQuantity = lendedQuantity - returnedQuantity

        const updateRelation = await prismaClient.militar_Material.update({
            where: {id: relationID},
            data: {
                quantity: newQuantity
            }
        })
        return updateRelation


    }
    
    async getRelationQuantity({ relationID }: returnMaterialData){
        const relationAccessed = await prismaClient.militar_Material.findUnique({
            where: { id: relationID },
            select: { quantity: true }
        })
        return relationAccessed?.quantity || 0
    }

    async getCurrentQuantity({materialID}: materialData){

        const material = await prismaClient.material.findFirst({
            where:{id: materialID}
        })

        const current_quantity = material?.current_quantity
        
        return current_quantity
    }


    // ALTERAR VALOR DO MATERIAL APOS RETORNAR

    async getMaterialIdOfRelation({ relationID }: returnMaterialData){
        const material = prismaClient.militar_Material.findFirst({
            where: {
                id: relationID
            },
            select: {materialID: true}
        })
        return material 
    }


    async updateMaterialQuantity({ relationID, returnedQuantity }: returnMaterialData){
        const materialID = await this.getMaterialIdOfRelation({relationID, returnedQuantity}) 
        
        const current_quantity = await this.getCurrentQuantity({materialID: materialID!.materialID}) || 0

        const newQuantity = current_quantity + returnedQuantity 

        const material = await prismaClient.material.update({
            where: {id: materialID?.materialID},
            data: {
                current_quantity: newQuantity
            }
        })
        
        return material

    }
}

export { ReturnMaterialService }