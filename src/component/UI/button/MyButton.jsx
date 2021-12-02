import React from 'react'
import style from './MyButton.module.css'
function MyButton({children, ...props}) {
    return (
        <button className={style.bttn} {...props}>
            {children}
        </button>
    )
}

export default MyButton
