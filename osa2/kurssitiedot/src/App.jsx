

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header name={props.course.name}/>
      <Content course={props.course}/>
    </div>
  )
}

const Header = (props) => (
    <div>
      <h1>{props.name}</h1>
    </div>
)

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map(part =>
        <Part key={part.id} part={part}/>
      )}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.course.parts[0].exercises + 
      props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  )
}

export default App
