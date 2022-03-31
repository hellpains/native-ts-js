const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (ages: number) => {
    return ages > 90;
}

const old = []; //>90
type CourseType = {
    title: string
    price: number
}
const courses = [
    {title: 'css', price: 120},
    {title: 'js', price: 200},
    {title: "react", price: 150},
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160;
}

const cheapCourse=[
    {title: 'css', price: 120},
    {title: "react", price: 150},
]