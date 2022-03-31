import {CityType} from "../02/02_02";
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;


beforeEach(() => {
    city = {
        title: 'rus',
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy street'}}
            },
            {
                buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'Happy street'}}
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200 ,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }],
        citizensNumber: 1000000
    }
})


test('Budget should be changed for HOSPITAL',()=>{
    addMoneyToBudget(city.governmentBuildings[0],100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)
})
test('Budget should be changed for FIRE',()=>{
    addMoneyToBudget(city.governmentBuildings[1],-100000);

    expect(city.governmentBuildings[1].budget).toBe(400000)
})
test('staff should be repared',()=>{
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy()
})
test('House should be repared',()=>{
    toFireStaff(city.governmentBuildings[0],20);

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})


test('House should be repared',()=>{
    toHireStaff(city.governmentBuildings[0],20);

    expect(city.governmentBuildings[0].staffCount).toBe(220)
})





















