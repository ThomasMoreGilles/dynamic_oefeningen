import { Container, Row, Col } from 'react-bootstrap';
import { MenuProduct } from './MenuProduct';

export function MenuCard(props) {
    const { products } = props;
    return (
        <Container>
            <h1>Menu</h1>
            <Row>
                {products.map((p, key) => (
                    <Col md={4} key={'p' + key}>
                        <MenuProduct product={p} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}