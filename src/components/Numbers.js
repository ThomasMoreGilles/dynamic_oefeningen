import PropTypes from "prop-types";
import {Section} from "./Section";
import {MyCard} from "./MyCard";

function Number(props) {
    const {nr, onSelect, extraClass} = props;
    return <MyCard onSelect={onSelect} extraClass={extraClass}>{nr}</MyCard>;
}

export function Numbers(props) {
    const {numbers, title, initOpen, onSelectNumber, markedNumber} = props
    return <Section title={title} initOpen={initOpen} >
        {numbers.map((n, i) => <Number key={i} nr={n} onSelect={onSelectNumber && (() => onSelectNumber(n))} extraClass={n===markedNumber ? "bg-warning" : ""} />)}
    </Section>;
}

Numbers.propTypes = {
    numbers: PropTypes.arrayOf(PropTypes.number),
    title: PropTypes.string
};