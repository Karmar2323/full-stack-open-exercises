

const App = () => {
  const courses = [
    {
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Courses courses={courses}/>
    </div>
  )
}

const Courses = (props) => {
  return (
    <div>    
      {props.courses.map(course => 
        <Course key={course.id} course={course}/>
      )}
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header2 name={props.course.name}/>
      <Content course={props.course}/>
      <Total parts={props.course.parts}></Total>
    </div>
  )
}

const Header2 = (props) => (
    <div>
      <h2>{props.name}</h2>
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
