import Person from './Person'
import BasicButton from './BasicButton'

const PersonList = (props) => (
  props.persons.map(person => (
    <div key={person.name}>
      <Person contact={person}
        basicButton={<BasicButton text='delete' handleClick={() => props.deleteName(person.id)}/>}
      />
    </div>
    )
  )
)
export default PersonList
