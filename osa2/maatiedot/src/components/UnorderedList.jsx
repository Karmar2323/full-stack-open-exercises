
const UnorderedList = ({langObj}) => (
  Object.keys(langObj).map(item => 
    <li key={item}>
      {langObj[item]}
    </li>
  )
)
export default UnorderedList
