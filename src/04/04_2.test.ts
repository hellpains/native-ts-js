import {CityType} from "../02/02_02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_2";

let city: CityType;


beforeEach(() => {
    city = {
        title: 'rus',
        houses: [
            {
                id:1, buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                id:2, buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy street'}}
            },
            {
                id:3, buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'Happy street'}}
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
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

// 01. дополните тип HeaderType (добавьте порядковый номер id от 1 и по возр)
// 02. создайте в том же файле еще одну функцию, чтобы тесты прошли
test("Houses should be destroyed",()=>{
    demolishHousesOnTheStreet(city,"Happy street")


    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})



// 02. создайте в том же файле еще одну функцию, чтобы тесты прошли
test('building with correct staff count',()=>{
    let buildings=getBuildingsWithStaffCountGreaterThen(city.governmentBuildings,500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');



})







