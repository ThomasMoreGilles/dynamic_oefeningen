import {Button, Container, Row} from "react-bootstrap";
import {useState} from "react";

export function Section(props) {
    const {children, title, initOpen} = props
    const [isOpen, setIsOpen] = useState(initOpen);
    return (
        <div className="mt-3 mb-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <h2 className="text-center">{title}
                <Button variant="outline-primary" className="ms-3" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? " - " : " + "}
                </Button>
            </h2>
            <Container className={isOpen ? "" : "d-none"}>
                <Row className="w-100">
                    {children}
                </Row>
            </Container>
        </div>
    );
}