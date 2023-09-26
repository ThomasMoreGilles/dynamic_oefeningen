import PropTypes from "prop-types";

function ProductSize(props) {
    const { product } = props;
    if (!product.size) return;
    return <span className="productSize" >{product.size ? " - " + product.size + "cl" : ""} </span>
}
function ProductNote(props) {
    const { product } = props;
    if (!product.note) return;
    return <span className="note" >{product.note ? product.note : ""} </span>
}
export function MenuProduct(props) {
    const { product } = props;
    if (!product?.name) return;
    return <container>
        <div className="menuProduct">
            <div>{product.name}
                <ProductSize product={product} />
            </div>
            <div>&euro; {product.price}</div>
        </div>
        <ProductNote product={product} />
    </container>
}

MenuProduct.propTypes = {
    products: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        size: PropTypes.string,
        note: PropTypes.string
    }).isRequired
}