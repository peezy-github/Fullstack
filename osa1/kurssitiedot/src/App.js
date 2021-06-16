import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course}/>
      <Content osa={part1} osia={exercises1}/>
      <Content osa={part2} osia={exercises2}/>
      <Content osa={part3} osia={exercises3}/>
      <Total osia={exercises1 + exercises2 + exercises3}/>
      
    </div>
  )
}

const Header = (props) => {

  return (
    <h1>{props.title}</h1>
  )
}

const Content = (props) => {

  return (
    <p>{props.osa} {props.osia}</p>
  )
}

const Total = (props) => {

  return (
    <p>Number of exercises {props.osia}</p>
  )
}
 
export default App;
