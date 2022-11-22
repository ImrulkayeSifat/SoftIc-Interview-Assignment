/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useStoreState } from 'easy-peasy';
const Post = () => {
  const router = useRouter()
  const {id,name,username,email,address,phone,website,company} = router.query
  const todos = useStoreState((state) => state.todos);
  const singlePost = todos[0]?.text;
  const {userId,id:postIdP,title,body} = singlePost;

  const comments = useStoreState((state)=>state.comment);
  const comment = comments[0]?.text;
  const commentArray=[];

  comment?.map((data)=>{
    if(data.postId==postIdP){
      commentArray.push(data);
    }
  })
  
  return (
  <>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div  className="p-10">  
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">User Info : </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Id : {id}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">name : {name} </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">user name : {username} </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">email : {email} </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">address : {address} </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">phone : {phone} </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">website : {website} </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">name : {name} </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">company : {company} </span>
          </div>
        </div>
      </div>

      <div  className="p-10">  
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Post Info : </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">userId : {userId}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">postIdP : {postIdP} </span>
            <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">title : {title} </span>
            <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">body : {body} </span>
          </div>
        </div>
      </div>

      <div  className="p-10">  
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Comment Info : </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            {
              commentArray?.map((data)=>{
                return (
                  <span key={data.id} className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CommentId : {data.id} Comment : {data.body}</span>
                )
                
              })
            }
            
          </div>
        </div>
      </div>
    </div>

  </>)
}

export default Post