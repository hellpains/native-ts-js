import {
    addNewBooksToUser, addNewCompanyToUser, CompanyType,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateCompanyToUser, updateCompanyToUser2, updateJsToTs, updateSkillsLevel,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, UserWithSkillsLevelType, WithCompaniesType
} from "./10_01";

test('reference type test', () => {
    let user: UserType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: 'Gro'
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})


test('change address', () => {
    let user: UserWithLaptopType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: 'Gro',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Moscow')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Moscow')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: 'Gro',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const userCopy = upgradeUserLaptop(user, 'macbook')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('macbook')
    expect(user.laptop.title).toBe('ZenBook')
})
test('move user to to other house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: 'Gro',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99)


    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address.house).toBe(99)
})


test('add new book to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: 'Gro',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, 'ts')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.books[4]).toBe('ts')
    expect(user.books[5]).toBe('rest api')
})


test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: 'Gro',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateJsToTs(user, 'js', 'ts')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})


test('update skills level', () => {
    let user: UserWithSkillsLevelType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: 'Gro',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react'],
        skillsLevel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    const userCopy = updateSkillsLevel(user, 5)


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).toBe(userCopy.books)
    expect(userCopy.skillsLevel.length).toBe(4)
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: 'Gro',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = removeBook(user, 'js')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books.length).toBe(3)
})

test('add company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: 'Gro',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'IT-INCUBATOR'},
        ]
    }

    const userCopy = updateCompanyToUser(user, 1, 'EPAM') as UserWithLaptopType & WithCompaniesType


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies.length).toBe(2)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test('update company', () => {

    let companies = {
        'Dimych': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Artem:': [{id: 2, title: 'IT-INCUBATOR'}]
    }


    const copy = updateCompanyToUser2(companies, 'Dimych', 1, 'EPAM')


    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('EPAM')

})
