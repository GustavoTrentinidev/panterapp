import { SquadContext } from "../../contexts/SquadContext"
import { useContext } from "react"
import "./SquadMaterial.scss"


export function SquadMaterial(){
    const selectedSquad = useContext(SquadContext)
    const PredadorMaterial = [
        {name: "Mochilas", totalAmount: 45, currentAmount: 36},
        {name: "Ponchos", totalAmount: 51, currentAmount: 21},
        {name: "Isolante Térmico", totalAmount: 21, currentAmount: 21},
        {name: "Bandoleiras", totalAmount: 50, currentAmount: 10},
        {name: "Cinto e Suspensório", totalAmount: 60, currentAmount: 25},
        {name: "Marmita", totalAmount: 50, currentAmount: 50},
        {name: "Caneco", totalAmount: 50, currentAmount: 50},
        
    ]
    return (
        <div className="squadmaterial">
            <div className="squad-title">
                <span className="squad-name">
                    {selectedSquad.squad}</span> - Material Carga     
            </div>
            <div className="divider">
                <span>///////////</span><hr className="line"/>
            </div>
            <div className="materials">
                {
                    PredadorMaterial.map((material)=>{
                        return (
                            <div className="material-item">
                                <div className="material-name">{material.name}</div>
                                <div className="material-amount">
                                    {material.currentAmount} 
                                    <div className="material-amount-bar-outside">
                                        <div className="material-amount-bar-inside" style={
                                            {width: (material.currentAmount * 100 / material.totalAmount)  + "%",
                                                backgroundColor: selectedSquad.squad == "Predador" ? "#006634" : "#44BBFF"
                                            }}>
                                        </div>
                                    </div>
                                    {material.totalAmount}
                                </div>
                            </div>
                        )
                    })  
                }
            </div>
        </div>
    ) 
}