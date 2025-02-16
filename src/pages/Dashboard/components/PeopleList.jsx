import { Link, useParams } from 'react-router-dom'
import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people } = props
  //const {id} = useParams();
/*<Link to={`/view/${person.id}`}>View profile</Link>*/

//console.log(people)
  return (
    <ul>
      {people && 
      people.map((person, index) => {
        console.log(person)
        return <PeopleListItem key={index} person={person} />

})}
    </ul>
  )
}

export default PeopleList
