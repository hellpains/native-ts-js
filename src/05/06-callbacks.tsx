import React, {ChangeEvent, MouseEvent} from "react";


export const User = () => {

    const search = (event: MouseEvent<HTMLButtonElement>) => {
        event.button.toFixed()
    }
    const onNameChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log('name changed')
    }
    const focusLostHandler = () => {
        alert('focus lost')
    }

    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log('age changed:' + event.currentTarget.value)
    }


    return <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Rustam</textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name='delete' onClick={search}>search</button>
    </div>
}

 