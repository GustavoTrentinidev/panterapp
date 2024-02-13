import "./Home.scss"
import { SquadMaterial } from "../squadmaterial/SquadMaterial"
import { MilitaryInOwe } from "../militaryman/MilitaryInOwe"

export default function Home(){
    return (
        <div className="home-app">
            <SquadMaterial></SquadMaterial>
            <MilitaryInOwe></MilitaryInOwe>

        </div>
    )
} 