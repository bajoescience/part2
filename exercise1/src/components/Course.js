import React from 'react'

const Part = (props) => {
    console.log('parts are', props);
    return (
      <>
        <p>
          {props.part.name} {props.part.exercises}
        </p>
      </>
    )
  }
  
  const Header = (props) => {
    return (
      <>
        <h2>{props.name}</h2>
      </>
    )
  }
  
  const Content = ({ parts }) => { 
    console.log(parts);
    return (
      <>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </>
    )
  }
  
  const Total = ({ parts }) => {
    // Calculate the sum of the initial snd final values
    const exercises = parts.map(part => part.exercises);
  
    const sum = exercises.reduce((i, c) => i + c)
    return (
      <b><p>total of {sum} exercises</p></b>
    )
  }
  
  const Course = ({ course }) => {
    console.log('The whole course data is', course);
    console.log('course exercise part 1 is ', course.parts[0].exercises)
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  export default Course;