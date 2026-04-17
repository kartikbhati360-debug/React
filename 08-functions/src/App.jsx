import React from 'react'

const App = () => {
  function btnClicked() {
    console.log('Lyo isme bhe meri galti');
    
  }




  return (
    <div>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App