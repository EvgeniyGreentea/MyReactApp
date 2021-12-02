
import React, { useState, useEffect, useRef } from 'react';
import PostService from '../API/PostService';
import { useFetching } from '../component/hook/useFetching';
import { usePosts } from '../component/hook/usePosts';
import PostList from '../component/PostList';
import MyButton from '../component/UI/button/MyButton';
import Loader from '../component/UI/Loader/Loader';
import MyModal from '../component/UI/MyModal/MyModal';
import Pagination from '../component/UI/pagination/Pagination';
import PostFilter from '../component/UI/PostFilter';
import PostForm from '../component/UI/PostForm';
import { getPageCount } from '../utils/pages';
import '../style/Posts.css';
import useObserver from '../component/hook/useObserver';
import MySelect from '../component/UI/MySelect/MySelect';


const Posts = (props) => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const lastElement = useRef()

  const [fetchPosts, isPostsLoading, Posterror] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }



  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])

  const changePage = (page) => {
    setPage(page)

  }

  return (
    <div className='App' >
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {Posterror &&
        <h1>Ошибка</h1>
      }
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue='Кол-во элементов на странице'
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Показать все' },
        ]}
      />
      <PostList posts={sortedAndSearchedPosts} removePost={removePost} />
      <div ref={lastElement} style={{ height: 20, background: 'red' }}></div>
      {isPostsLoading &&
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}> <Loader /> </div>
      }

      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />

    </div>
  );
}

export default Posts;
