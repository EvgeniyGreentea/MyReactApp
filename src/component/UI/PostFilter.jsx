import React from 'react'
import MyInput from './input/MyInput'
import MySelect from './MySelect/MySelect'

function PostFilter({ filter, setFilter }) {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={event => setFilter({ ...filter, query: event.target.value })}
                placeholder='Поиск...'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue='Сортировка'
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' }
                ]}
            />
        </div>
    )
}

export default PostFilter
