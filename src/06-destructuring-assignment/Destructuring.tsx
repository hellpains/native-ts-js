import React, {useState} from "react";

type LessonType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<{title:string;name?:string} >
    address: { street: { title:string} }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}


const useRustamState = (m:string) => {
  return [m,function (){}]
}


export const ManComponent: React.FC<PropsType> = ({title, man: {name}, ...props}) => {
    // const {title,man:{name}}=props;


    const [message, setMessage] = useState('hello')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.car.model}
        </div>
        <div>
            {name}
        </div>
    </div>
}

