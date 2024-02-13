interface MaterialData{
    name: string;
    quantity: number;
    squad_owner: SquadData;

}

interface Military {
    name: string;
    grade: string;   
}

interface SquadData {
    // barracaiglu: MaterialData;
    // poncho: MaterialData;
    // bandoleira: MaterialData;
    // cinto: MaterialData;
    // suspensorio: MaterialData;
    // isolante: MaterialData;
    militares_devendo?: Military[];
}

const Trentini: Military = {
    grade: "SD",
    name: "Trentini"
}


const Predador: SquadData = {
    militares_devendo: [Trentini]
}