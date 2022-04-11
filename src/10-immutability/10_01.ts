export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type UserWithLaptopType = UserType & {
    laptop: { title: string }
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type UserWithSkillsLevelType = UserType & UserWithBooksType & UserWithLaptopType & {
    skillsLevel: Array<number>
}
export type CompanyType = { id: number, title: string }


export type WithCompaniesType = {
    companies: Array<CompanyType>
}


export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {...u.address, city}
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {...u.address, house}
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {...u.laptop, laptop}
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string) {
    return {
        ...u,
        books: [...u.books, u.books.push(newBooks)]
    }
}

export function updateJsToTs(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}

export function updateSkillsLevel(u: UserWithSkillsLevelType, newLevel: number) {
    return {
        ...u,
        skillsLevel: u.skillsLevel.filter(l => l < newLevel)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, book: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== book)
    }
}

export function addNewCompanyToUser(u: UserWithLaptopType & WithCompaniesType, newCompany: CompanyType) {
    return {
        ...u,
        companies: [...u.companies, u.companies.push(newCompany)]
    }
}

export function updateCompanyToUser(u: WithCompaniesType, id: number, title: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title} : c)
    }
}

export function updateCompanyToUser2(companies: { [key: string]: Array<CompanyType> },
                                     userName: string,
                                     companyId: number,
                                     title: string) {

    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title} : c)

    return companyCopy
}













