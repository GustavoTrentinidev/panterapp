import "./Header.scss"
import { useState, useRef, useEffect, useContext } from "react"
import { SquadContext } from "../../contexts/SquadContext"


export default function Header(){
    const squadContext = useContext(SquadContext)
    const [squadSelected, setSquad ] = useState(0)
    const ball = useRef<HTMLDivElement>(null)

    function toggleSquad(){
        squadSelected ? setSquad(0) : setSquad(1)
        squadContext.toggleSquad()
    }
    function insertAnimation(){
        const ballElement= ball.current 
        ballElement?.classList.add("sizeanimation")
        setTimeout(()=>{
            ballElement?.classList.remove("sizeanimation")
        }, 250)
    }

    useEffect(()=>{
        insertAnimation()
    },[squadSelected])
    return (
        <div className="header">
            <div className="header-title">PANTERApp </div>
            <div className="change-input" onClick={()=>{toggleSquad()}}>
                <div className={`background ${squadSelected ? "blue" : "green"}`}></div>
                <div ref={ball} className={`changer ${squadSelected ? "right" : "left"}`}>
                </div>
            </div>

        </div>
    )
} 