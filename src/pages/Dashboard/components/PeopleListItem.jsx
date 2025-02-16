import { Link, useParams } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props

  console.log(person)
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`/view/${person.id}`}>View profile</Link>
    </li>
  )
}

export default PeopleListItem
