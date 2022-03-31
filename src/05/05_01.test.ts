import {createGreetingMessage, ManType} from "./05_01";


let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 33},
    ]
})


test('should get array of greeting messages', () => {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrew. Welcom to IT')
    expect(messages[1]).toBe('Hello Alexander. Welcom to IT')
    expect(messages[2]).toBe('Hello Dmitry. Welcom to IT')
})