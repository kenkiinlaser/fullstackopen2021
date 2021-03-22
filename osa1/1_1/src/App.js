import React from 'react'

const Header = (props) => {
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
}

const Content  = (props) => {
  //console.log(props);
  return (
    <div>
        <Part part={props.part1} />
        <Part part={props.part2} />
        <Part part={props.part3} />
    </div>
  )
}

const Total  = (props) => {
  return (
    <div>
      <p>Number of exercises {props.part1.exercises + props.part1.exercises + props.part1.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3}/>
    </div>
  )
}

export default App