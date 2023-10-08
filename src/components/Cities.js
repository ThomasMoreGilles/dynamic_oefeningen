import {MyCard} from "./MyCard";
import {Element} from "./Element";
import {Section} from "./Section";
import PropTypes from "prop-types";

function City(props) {
    const { city } = props;

    return <MyCard title={city.name}>
        <h5>{city.name}</h5>
        <Element value={city.numberOfPersons} />
    </MyCard>;
}

export function Cities(props) {
    const {cities, title, initOpen} = props
    return <Section title={title} initOpen={initOpen} >
        {cities.map(c => <City key={c.name} city={c} />)}
    </Section>;
}

Cities.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
};