

constant contacts = ({list}) => {
  return (
    <div>
      {list.map(element => 
        <div key={element.id}>{element.name} {element.number}</div>
      )}
    </div>
  )
}

export default contacts