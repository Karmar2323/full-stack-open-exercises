

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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
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
      <Total parts={props.course.parts}></Total>
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
  const initialValue = 0
  const total = props.parts.reduce(
    (accumulator, currentValue) =>
    accumulator + currentValue.exercises, initialValue
  )
  return(
    <strong>total of {total} exercises</strong>
  )
}

export default App
