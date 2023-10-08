import PropTypes from "prop-types";
import {COLORS} from "../data/data";
import {Section} from "./Section";
import {MyCard} from "./MyCard";
import {Element} from "./Element";

function Car(props) {
    const { car } = props;
    let style = {};
    if (car.color) {
        style = { color: COLORS.find(c => c.nl===car.color)["color"], backgroundColor: COLORS.find(c => c.nl===car.color)["background"]};
    }

    return <MyCard title={car.name}>
            <h5>{car.name}</h5>
            <Element name="merk" value={car.brand} />
            <Element name="type" value={car.type} />
            <Element name="opm" value={car.note} />
            <Element name="kleur" value={car.color} style={style}/>
        </MyCard>;
}

export function Cars(props) {
    const {cars, title, initOpen} = props
    return <Section title={title} initOpen={initOpen} >
        {cars.map(c => <Car key={c.id} car={c} />)}
    </Section>;
}

Cars.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
};