import {Persons} from "../components/Persons";
import {Form} from "react-bootstrap";
import {useState} from "react";

export function SearchPersonsPage(props) {
    const {persons} = props;
    const [search, setSearch] = useState("");

    return <div className="mx-3" >
        <div className="m-3">
            <Form>
                <Form.Label>search</Form.Label>
                <Form.Control value={search} onChange={(e) => setSearch(e.target.value)} />
            </Form>
        </div>
        <Persons persons={persons} title="search" initOpen={true} search={search} />
    </div>
}