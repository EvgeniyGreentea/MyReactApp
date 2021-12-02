import React from 'react'
import MyButton from './UI/button/MyButton'
import { useNavigate} from 'react-router-dom'

function PostItem(props) {
    
    const router = useNavigate()
   
    return (
        <div className='post'>
            <div className='post_content'>
                <strong>{props.id} {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post_btn'>
                <MyButton onClick={()=>{props.removePost(props.post)}}>Удалить</MyButton>
                <MyButton onClick={ async()=>router(`/posts/${props.post.id}`)}>Открыть</MyButton>
                
            </div>
        </div>
    )
}

export default PostItem
