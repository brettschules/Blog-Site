import React from 'react'

const NewlyCreatedBlogs = (props) => {
  debugger
    return (
      <div>
        <div>
          <h1>{props.blogtitle}</h1>
          <h1>{props.imageUrl}</h1>
        </div>
        <div>
          <h1>{props.content}</h1>
        </div>
      </div>
    )
  }

export default NewlyCreatedBlogs
