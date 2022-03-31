import {student, StudentType} from "../02/02";
import exp from "constants";
import {CityType, GovernmentBuildingType, HousesType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b
}

export function sum2(a: number, b: number) {
    return a + b
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, city: string) => {
    return student.address.city.title ===city;
}


export function addMoneyToBudget(building: GovernmentBuildingType, budget: number){
    building.budget+=budget
}


export function repairHouse(housesType: HousesType){
    housesType.repaired=true
}

export function toFireStaff(building: GovernmentBuildingType, staffCountToFire: number){
    building.staffCount-=staffCountToFire
}

export function toHireStaff(building: GovernmentBuildingType, staffCountToHire: number){
    building.staffCount+=staffCountToHire
}



































