import React from 'react'
import PostsList from './app/features/posts/PostsList'
import AddPostForm from './app/features/posts/AddPostForm'

const App = () => {

  return (
    <main>
      <AddPostForm />
      <PostsList />
    </main>
  )
}

export default App
