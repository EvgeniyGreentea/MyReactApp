import React, {useState} from 'react'

export default function Counter() {
    const [likes, setLikes] = useState(0);
    const [text, setText] = useState('Text')

    function Update() {
        setLikes(likes + 1)
    };

    function Min() {
        setLikes(likes - 1)
    };

    return (
        <div>
            <h1>{likes}</h1>
            <h1>{text}</h1>
            <input
                type='text'
                value={text}
                onChange={(event) => { setText(event.target.value) }}
            />
            <button onClick={Update}>Add</button>
            <button onClick={Min}>Min</button>
        </div>
    )
}
