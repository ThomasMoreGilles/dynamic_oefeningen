import { Section } from "./Section";
import * as PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import { MyCard } from "./MyCard";
import { MdEdit, MdDelete } from "react-icons/md";
import { Avatar } from "boring-avatars";

function Person(props) {
  const { person, onDeletePerson, onEditPerson } = props;
  return (
    <Col xs={6} sm={4} md={3} lg={2}>
      <MyCard title={person.name}>
        {/* <Avatar
          name={person.name}
          colors={["#A3A948", "#EDB92E", "#F85931", "#CE1836", "#009989"]}
        /> */}
        <div>{person.age}</div>
        <div>{person.city}</div>
        {onDeletePerson && (
          <div className="border-top align-items-center p-2">
            <div
              className="border border-primary rounded text-primary p-2 mx-auto"
              onClick={() => onDeletePerson(person)}
            >
              <MdDelete />
            </div>
            <div
              className="border border-primary rounded text-primary p-2 mx-auto"
              onClick={() => onEditPerson(person)}
            >
              <MdEdit />
            </div>
          </div>
        )}
      </MyCard>
    </Col>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
  }),
};

export function Persons(props) {
  const { persons, title, isInitiallyOpen, onDeletePerson } = props;
  return (
    <Section title={title} isInitiallyOpen={isInitiallyOpen}>
      {persons?.map((p) => (
        <Person key={p.id} person={p} onDeletePerson={onDeletePerson} />
      ))}
    </Section>
  );
}

Persons.propTypes = {
  persons: PropTypes.array,
  title: PropTypes.string,
};
