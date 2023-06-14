import React from 'react'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Write = () => {
  const [value, setValue] = useState('')
  console.log(value)
  return (
    <div className='add'>
      <div className='content'>
        <input type='text' placeholder='Title' />
        <div className='editorContainer'>
          <ReactQuill
            className='editor'
            theme='snow'
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b>
            Draft
          </span>
          <span>
            <b>Visibility: </b>
            Public
          </span>
          <input type='file' id='file' placeholder='' />
          <label className='file' htmlFor='file'>
            Upload Image
          </label>
          <div className='buttons'>
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='cat'>
            <input type='radio' name='cat' value='tech' id='tech'></input>
            <label htmlFor='tech'>Tech</label>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='art' id='art'></input>
            <label htmlFor='tech'>Art</label>
          </div>

          <div className='cat'>
            <input type='radio' name='cat' value='design' id='design'></input>
            <label htmlFor='tech'>Design</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
