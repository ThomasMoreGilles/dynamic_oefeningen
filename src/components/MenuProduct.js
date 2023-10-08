import PropTypes from "prop-types";
import {Col, Row} from "react-bootstrap";

function ProductSize(props) {
    if (!props?.product?.size) return null;

    return <span className="productSize" style={{
        color: "blue",
        borderBottom: "1px solid blue"
    }}>{" - " + props.product.size + "cl"}</span>;
}

function ProductNote(props) {
    if (!props?.product?.note) return null;

    return <Row className="fs-6 text-primary">
        <Col>
            {props.product.note}
        </Col>
    </Row>
}

MenuProduct.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        size: PropTypes.number,
        note: PropTypes.string
    }).isRequired,
}

export function MenuProduct(props) {
    const {product} = props;
    if (!product.name) return null;

    return (
        <div>
            <Row className="fs-3">
                <Col>
                    {product.name}
                    <ProductSize product={product}/>
                </Col>
                <Col>
                    {product.price} &euro;
                </Col>
            </Row>
            <ProductNote product={product}/>
        </div>
    );
}