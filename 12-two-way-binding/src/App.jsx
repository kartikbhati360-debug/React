import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form submited', title);

    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)

      }}>
        <input type="text" placeholder='Enter Name Here'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App