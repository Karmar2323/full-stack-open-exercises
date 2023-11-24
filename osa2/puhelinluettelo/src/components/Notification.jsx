
const Notification = ({message, color}) => {
  const messageStyle = {
    color: color,
    background: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    fontStyle: 'italic',
    fontSize: 15
  }

  if (message === null) {
    return null
  }

  return (
    <div style={messageStyle}>
      {message}
    </div>
  )
}
export default Notification
