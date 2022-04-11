function icreaseAge(u: UserType) {
    u.age += 1
}

type UserType = {
    name: string
    age: number
    address: { title: string }
}

test('git reference type test', () => {
    let user = {
        name: 'Rustam',
        age: 18,
        address: {
            title: 'rus'
        }
    }

    icreaseAge(user)


    expect(user.age).toBe(19)


    const superman = user;

    superman.age = 1000


    expect(user.age).toBe(1000)
})
test('array test', () => {
    let users = [
        {name: 'Rustam', age: 18},
        {name: 'arbi', age: 17}
    ]
    let admins = users
    admins.push({name: 'Ban', age: 10})


    expect(users[2]).toEqual({name: 'Ban', age: 10})

    // icreaseAge(user)
    //
    //
    // expect(user.age).toBe(19)
    //
    //
    // const superman = user;
    //
    // superman.age = 1000
    //
    //
    // expect(user.age).toBe(1000)
})

test('reference type test', () => {
    const address={
        title:'Gro'
    }

    let user: UserType = {
        name: 'Rustam',
        age: 18,
        address: address
    }
    // let addr = user.address

    let user2: UserType = {
        name: 'Natasha',
        age: 20,
        address: address
    }
    address.title='Gro City'

    expect(user.address).toBe(user2.address)
    expect(user2.address.title).toBe('Gro City')
})


test('array reference test', () => {
    let users = [
        {name: 'Rustam', age: 18},
        {name: 'arbi', age: 17}
    ]
    let admins = users
    admins.push({name: 'Ban', age: 10})


    expect(users[2]).toEqual({name: 'Ban', age: 10})

    // icreaseAge(user)
    //
    //
    // expect(user.age).toBe(19)
    //
    //
    // const superman = user;
    //
    // superman.age = 1000
    //
    //
    // expect(user.age).toBe(1000)
})

test('value type test', () => {
    let usersCount = 100
    let adminsCount = usersCount


    adminsCount += 200


    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(300)


})




test('reference type array test', () => {
    const address={
        title:'Gro'
    }

    let user: UserType = {
        name: 'Rustam',
        age: 18,
        address: address
    }
    // let addr = user.address

    let user2: UserType = {
        name: 'Natasha',
        age: 20,
        address: address
    }

    const users=[user,user2,{name:'Misha',age:4 ,address:address}]
    const admins=[user,user2]

    admins[0].name='Sadulaev'

    address.title='Gro City'

    expect(users[0].name).toBe('Sadulaev')
    expect(user2.address.title).toBe('Gro City')
})