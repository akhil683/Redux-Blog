import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postSlice'
import { selectedAllUsers } from '../users/userSlice'

const AddPostForm = () => {

   const dispatch = useDispatch()
   const [ title, setTitle ] = useState('')
   const [ content, setContent ] = useState('')
   const [ userId, setUserId ] = useState('')


   const users = useSelector(selectedAllUsers);

   const onTitleChanged = e => setTitle(e.target.value)
   const onContentchanged = e => setContent(e.target.value)
   const onAuthorchanged = e => setUserId(e.target.value)

   const onSavePostClicked = (e) => {
      e.preventDefault();
      if (title && content) {
         dispatch(
            postAdded(title, content, userId))
         setTitle("")
         setContent("")
   }
}

const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

const usersOptions = users.map(user => (
   <option key={user.id} value={user.id}>
      {user.name}
   </option>
))

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
               className='w-full mb-4 text-black rounded-md py-1 mt-2'
            />
            <label htmlFor='postAuthor'>Author: </label>
            <select id='postAuthor' value={userId} onChange={onAuthorchanged} className=' text-black' >
               <option value=""></option>
               {usersOptions}
            </select>
            <label htmlFor='postContent'>Content: </label>
            <input 
               type="text"
               id='postContent'
               name='postContent'
               value={content}
               onChange={onContentchanged}
               className='w-full mb-4 text-black py-1 mt-2 rounded-md'
            />
            <button 
               className='px-4 py-2 rounded-xl bg-blue-500' 
               type='submit' 
               disabled={!canSave}>
                  Save Post
            </button>
         </form>
   </section> 
  )
}
export default AddPostForm
