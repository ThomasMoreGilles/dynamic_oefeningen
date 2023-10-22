import Avatar from "boring-avatars";
import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export function PersonFormEdit({ person, onSavePerson, onHide }) {
  const [personToEdit, setPersonToEdit] = useState(person);

  const handleSave = () => {
    onSavePerson(personToEdit);
    onHide();
  };

  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Avatar
            name={personToEdit.name}
            colors={["#A3A948", "#EDB92E", "#F85931", "#CE1836", "#009989"]}
          />
          Edit Person
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={personToEdit.name}
              onChange={(e) =>
                setPersonToEdit({ ...personToEdit, name: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              value={personToEdit.age}
              onChange={(e) =>
                setPersonToEdit({ ...personToEdit, age: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              value={personToEdit.city}
              onChange={(e) =>
                setPersonToEdit({ ...personToEdit, city: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
