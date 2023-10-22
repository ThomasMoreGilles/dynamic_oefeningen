import {
  addDoc,
  collection,
  orderBy,
  query,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestoreDB } from "../services/firebase";
import { Persons } from "../components/Persons";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { MyButton } from "../components/MyButton";
import { PersonFormEdit } from "../components/PersonFormEdit";

const personConverter = {
  toFirestore: function (dataInApp) {
    return {
      name: dataInApp.name,
      age: Number(dataInApp.age),
      city: dataInApp.city,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return { ...data, id: snapshot.id, ref: snapshot.ref };
  },
};

export function PersonsFromDbPage() {
  const collectionRef = collection(firestoreDB, "persons").withConverter(
    personConverter
  );
  const queryRef = query(collectionRef, orderBy("name"));
  const [values, loading, error] = useCollectionData(queryRef);
  const [search, setSearch] = useState("");

  console.log({ values, loading, error });

  async function addDummyPerson() {
    const newPerson = { name: "DUMMY", age: 19, city: "Mechelen" };
    try {
      await addDoc(collectionRef, newPerson);
      console.log("add dummy person done");
    } catch {
      console.log("ERROR add dummy person NOT done");
    }
  }

  async function incrementAllAges(increment = 1) {
    try {
      Promise.all(
        values.map((person) =>
          updateDoc(person.ref, { age: person.age + increment })
        )
      );
      console.log(`increment ages with ${increment} for all persons done`);
    } catch (e) {
      console.log(`ERROR add increment ages NOT done correctly: ${e}`);
    }
  }

  async function deletePerson(person) {
    try {
      await deleteDoc(person.ref);
      console.log(`delete person ${person.name} done`);
    } catch (e) {
      console.log(
        `ERROR delete person ${person.name} NOT done correctly: ${e}`
      );
    }
  }

  function editPerson(person) {
    setPersonSelected(person);

    console.log(`edit person ${person.name}`);
  }
  const [personSelected, setPersonSelected] = useState(undefined);
  async function editPersonSave(personToEdit) {
    try {
      await updateDoc(personToEdit.ref, {
        name: personToEdit.name,
        age: personToEdit.age,
        city: personToEdit.city,
      });
      console.log(`update person ${personToEdit.name} done`);
    } catch (e) {
      console.log(
        `ERROR update person ${personToEdit.name} NOT done correctly: ${e}`
      );
    }
  }
  return (
    <div className="mx-3">
      <Form>
        <Form.Label>search</Form.Label>
        <Form.Control
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>

      <MyButton onClick={() => addDummyPerson()}>+dummy</MyButton>
      <MyButton onClick={() => incrementAllAges(-1)}>age-1</MyButton>
      <MyButton onClick={() => incrementAllAges()}>age+1</MyButton>
      <Persons
        title="Personen uit database"
        persons={values?.filter((p) => p.name.includes(search))}
        isInitiallyOpen={true}
        onDeletePerson={deletePerson}
        onEditPerson={editPerson}
      />
      {personSelected && (
        <PersonFormEdit
          person={personSelected}
          onSavePerson={editPersonSave}
          onHide={() => setPersonSelected(undefined)}
        />
      )}
    </div>
  );
}
