import React from 'react'
import PostItem from './PostItem'
import { TransitionGroup,CSSTransition } from 'react-transition-group'

function PostList({ posts, removePost }) {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Посты не найдены
            </h1>
        )
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Список постов</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem number={index + 1} post={post} removePost={removePost} id={post.id}/>

                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList
