import React from 'react'
import { selectAllPosts } from './postSlice'
import { useSelector } from 'react-redux'

const PostsList = () => {
   const posts = useSelector(selectAllPosts)
   
  return (
    <section className='m-6'>
      <h2 className='text-4xl text-red-400 mb-4'>Posts</h2>
      <div className='flex flex-wrap gap-4'>
     { posts.map(post => (
         <article key={post.id} className='p-4 w-full border rounded-xl '>
            <h3 className='text-xl mb-2 font-semibold text-red-200'>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
         </article>
      ))} 
      </div>
    </section>
  )
}

export default PostsList
