import { Section } from "./Section";
import * as PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import { MyCard } from "./MyCard";

function Person(props) {
  const { person, onDeletePerson, onEditPerson } = props;
  return (
    <Col xs={6} sm={4} md={3} lg={2}>
      <MyCard title={person.name}>
        <div>{person.age}</div>
        <div>{person.city}</div>
        {onDeletePerson && (
          <div className="border-top align-items-center p-2">
            <button
              className="btn btn-primary me-2"
              onClick={() => onDeletePerson(person)}
            >
              delete
            </button>
            <button
              className="btn btn-primary me-2"
              onClick={() => onEditPerson(person)}
            >
              edit
            </button>
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
