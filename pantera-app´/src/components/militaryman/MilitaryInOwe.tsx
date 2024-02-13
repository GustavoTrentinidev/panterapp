import { MdAdd } from "react-icons/md";
import "./MilitaryInOwe.scss"

export function MilitaryInOwe(){
    const Predador = {
        
    }
    return (
        <div className="military-in-owe">
            <div className="add-military-button"><MdAdd size={25}></MdAdd>Adicionar militar na cautela</div>
            <div className="title">Militares devendo material</div>
        </div>
    )
}