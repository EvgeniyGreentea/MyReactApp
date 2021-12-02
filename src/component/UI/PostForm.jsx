import React,{useState} from 'react'
import MyButton from './button/MyButton'
import MyInput from './input/MyInput'


function PostForm({create}) {
    const [post, setPost] = useState({ title: '', body: '' })

    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
      }

    return (
        <form>
        <MyInput
          value={post.title}
          onChange={e => { setPost({ ...post, title: e.target.value }) }}
          type='text'
          placeholder='Название поста'
        />
        <MyInput
          value={post.body}
          onChange={e => { setPost({ ...post, body: e.target.value }) }}
          type='text'
          placeholder='Описание'
        />
        <MyButton onClick={addPost}>Создать пост</MyButton>
      </form>
    )
}

export default PostForm
