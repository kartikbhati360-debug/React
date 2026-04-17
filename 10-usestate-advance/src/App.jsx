import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user: 'Kartik', age: 27})

  const btnClicked = () => {
    setNum(prev => ({...prev, age: prev.age + 1, user: 'Rahul'}))
  }
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div> 
  )
}

export default App