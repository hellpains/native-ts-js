test('should take old men older then 90',()=>{
    const ages = [18, 20, 22, 1, 100, 90, 14];


    const oldAges=ages.filter(ages => ages > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})

test('should take cheap courses chipper 169 ',()=>{
    type CourseType = {
        title: string
        price: number
    }
    const courses = [
        {title: 'css', price: 120},
        {title: 'js', price: 200},
        {title: "react", price: 150},
    ]

    const cheapCourse=courses.filter(course => course.price < 160)

    expect(cheapCourse.length).toBe(2)
    expect(cheapCourse[0].price).toBe(120)
    expect(cheapCourse[1].price).toBe(150)
    expect(cheapCourse[0].title).toBe('css')
    expect(cheapCourse[1].title).toBe('react')

})
test('get only completed tasks',()=>{
    const tasks = [
        {id:1,title:"Bread",isDone:false},
        {id:2,title:"Milk",isDone:true},
        {id:3,title:"solt",isDone:false},
        {id:4,title:"Sugar",isDone:true},
    ]

    const completedTasks =tasks.filter(t=>t.isDone===true)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})
test('get only uncompleted tasks',()=>{
    const tasks = [
        {id:1,title:"Bread",isDone:false},
        {id:2,title:"Milk",isDone:true},
        {id:3,title:"salt",isDone:false},
        {id:4,title:"Sugar",isDone:true},
    ]

    let a =  tasks[0].isDone
    let b =  !tasks[0].isDone
    const uncompletedTasks =tasks.filter(t=>t.isDone===false)

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(3)
})