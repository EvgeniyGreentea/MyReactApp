import React from 'react'
import style from './MyInput.module.css'
function MyInput(props) {
    return (
        <input {...props} className={style.inpt}/>
    )
}

export default MyInput
