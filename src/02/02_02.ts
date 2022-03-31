export type StreetType={
    title:string
}
export type AddressType ={
    number?:number
    street:StreetType
}
export type HousesType={
    buildedAt:number
    repaired:boolean
    address:AddressType
    id?:number
}

export type GovernmentBuildingType={
    type:"HOSPITAL"|"FIRE-STATION"
    budget:number
    staffCount:number
    address:AddressType
}

export type CityType={
    title:'rus'
    houses:Array<HousesType>
    governmentBuildings:Array<GovernmentBuildingType>
    citizensNumber:number
}



