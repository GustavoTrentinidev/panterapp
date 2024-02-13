import { ReactNode, createContext, useState } from "react";

interface squadContextData {
    squad: string
    toggleSquad: () => void
}

export const SquadContext = createContext<squadContextData>({squad: "Predador", toggleSquad: () => {}})

export const SquadProvider = (props: {children: ReactNode} ) =>{
    const [squad, setSquad] = useState("Predador")
    const toggleSquad = () => {
        setSquad((prevSquad) => prevSquad == "Predador" ? "Manitu" : "Predador" )
    }
    return(
        <SquadContext.Provider value={{squad, toggleSquad }}>
            {props.children}
        </SquadContext.Provider>
    )
}