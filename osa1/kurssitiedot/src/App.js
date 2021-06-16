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
      <Content osa1={part1} osa2={part2} osa3={part3} osia1={exercises1} osia2={exercises2} osia3={exercises3}/>
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
    <>
      <Part osa={props.osa1} osia={props.osia1}/>
      <Part osa={props.osa2} osia={props.osia2}/>
      <Part osa={props.osa3} osia={props.osia3}/>
    </>
  )
}

const Total = (props) => {

  return (
    <p>Number of exercises {props.osia}</p>
  )
}

const Part = (props) => {

  return (
    <p>{props.osa} {props.osia}</p>
  )
} 
export default App;
