import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './postSlice'

const AddPostForm = () => {
   const [ title, setTitle ] = useState('')
   const [ content, setContent ] = useState('')

   const dispatch = useDispatch()

   const onTitleChanged = e => setTitle(e.target.value)
   const onContentchanged = e => setContent(e.target.value)


   const onSavePostClicked = (e) => {
      e.preventDefault();
      if (title && content) {
         dispatch(
            postAdded({
               id: nanoid(),
               title,
               content
            }))
         setTitle("")
         setContent("")
   }
}

  return (
   <section className='flex flex-col gap-6 m-6'>
      <h2 className='text-xl text-red-400'>Add a New Post</h2>
         <form onSubmit={(e) => onSavePostClicked(e)}>
            <label htmlFor='postTitle'>Post Title: </label>
            <input 
               type="text"
               id='postTitle'
               name='postTitle'
               value={title}
               onChange={onTitleChanged}
               className='w-full mb-4 text-black'
            />
            <label htmlFor='postContent'>Content: </label>
            <input 
               type="text"
               id='postContent'
               name='postContent'
               value={content}
               onChange={onContentchanged}
               className='w-full mb-4 text-black'
            />
            <button className='px-4 py-2 rounded-xl bg-blue-500' type='submit'>Save Post</button>
         </form>
   </section> 
  )
}
export default AddPostForm
