
const Course = (props) => (
  <div>
    <Header2 name={props.course.name}/>
    <Content course={props.course}/>
    <Total parts={props.course.parts}></Total>
  </div>
)

const Header2 = ({name}) => (
  <div>
    <h2>{name}</h2>
  </div>
)

const Content = (props) => (
  <div>
    {props.course.parts.map(part =>
      <Part key={part.id} part={part}/>
    )}
  </div>
)

const Part = (props) => (
  <div>
    <p>{props.part.name} {props.part.exercises}</p>
  </div>
)

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

export default Course
