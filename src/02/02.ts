type LocalCityType={
    title:string
    countryTitle:string
}
type AddressType={
    streetTitle:string
    city:LocalCityType
}
type TechType={
    id:number
    title:string
}
export type StudentType={
    id:number
    name:string
    age:number
    isActive:boolean
    address:AddressType
    technologies:Array<TechType>
}


export const student:StudentType={
    id:1,
    name:"Rustam",
    age:18,
    isActive:true,
    address:{
        streetTitle:'Kom52',
        city:{
            title:'gro',
            countryTitle:'rus',
        }
    },
    technologies:[
        {
            id:1,
            title:"HTML",
        },{
            id:2,
            title:"CSS",
        },
        {
            id:3,
            title:"React",
        }
    ]
}





































