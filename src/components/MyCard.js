import {Card, Col} from "react-bootstrap";

export function MyCard(props) {
    const {children, onSelect, extraClass} = props;
    return <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className={"text-center "}>
        <Card className={`m-2 p-2 shadow-sm ${extraClass}`} onClick={onSelect} >
            {children}
        </Card>
    </Col>;
}