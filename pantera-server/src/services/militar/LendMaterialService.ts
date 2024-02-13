import prismaClient from "../../prisma"

interface materialMilitarData {
    quantity: number,
    militarID: number,
    materialID: number
}

interface materialIDType{
    materialID: number
}

class LendMaterialService{
    async execute({ militarID, materialID, quantity }: materialMilitarData){
        const relation = await prismaClient.militar_Material.create({
            data: {
                military: {
                    connect:{
                        id: militarID
                    }
                },
                quantity,
                material: {
                    connect: {
                        id: materialID
                    }
                }
            }
        })
        this.alterQuantity({militarID, materialID, quantity})
        
        return {relation}
    }

    async alterQuantity({ militarID, materialID, quantity }: materialMilitarData){
        let current_quantity = await this.getCurrentQuantity({materialID})
        if(current_quantity){
            current_quantity = current_quantity - quantity
        }
        const discountSquaddMaterial = await prismaClient.material.update({
            where: {id: materialID},
            data: {
                current_quantity: current_quantity
            }
        })
    }

    async getCurrentQuantity({materialID}: materialIDType){

        const material = await prismaClient.material.findFirst({
            where:{id: materialID}
        })

        const current_quantity = material?.current_quantity
        
        return current_quantity
    }
}


export { LendMaterialService }