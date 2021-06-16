import React from 'react'

const Hello = (propsi) => {
  return (
    <div>
      <p>Hello {propsi.name}, you are {propsi.age} years old</p>
    </div>
  )
}

const App = () => {
  const nimi = "Nuutti"
  const age = 18

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={nimi} age={age}/>
    </div>
  )
}




 
export default App
