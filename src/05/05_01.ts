import {GovernmentBuildingType, HousesType} from "../02/02_02";

export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 33},
]

const dimychTransformator = (man: ManType) => ({
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
})

const devs = [
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Andrew', lastName: "Ivanov"
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Alexander', lastName: "Petrov"
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry', lastName: "Sidorov"
    },
]

const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const devs3 = people.map(dimychTransformator)
const devs4 = people.map(man => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
}))


const messages=people.map(man=> `Hello ${man.name.split(' ')[0]}. Welcom to IT`)

export const createGreetingMessage=(people:Array<ManType>)=>{
    return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcom to IT`)
}


export const getStreetsTitlesOfGovermentBuildings= (streetsNames: Array<GovernmentBuildingType>)=>{
    return streetsNames.map(s => s.address.street.title)
}


export const getStreetsTitlesOfHouses= (houses: Array<HousesType>)=>{
    return houses.map(h => h.address.street.title)
}


export const createMessages= (houses: Array<HousesType>)=>{

    let callbackfn = (h:HousesType) => {
        debugger
       return `Hello guys from ${h.address.street.title}`
    }

    let newArray= houses.map(callbackfn)
    return newArray
}















