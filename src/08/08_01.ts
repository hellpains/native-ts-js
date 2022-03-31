export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

type usersType={
    [key:string]:{id:number,name:string}
}

export const users:usersType = {
    '101': {id: 101, name: 'Dimych'},
    '43534543': {id: 43534543, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}
// users["1"]

var user={id:100500,name:'Igor'}

users[user.id]=user;

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 43534543, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'},
]

usersArray.push(user)

// usersArray.find(e=>e.id===1)