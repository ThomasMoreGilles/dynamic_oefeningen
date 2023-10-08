import {Section} from "./Section";
import {Button} from "react-bootstrap";

export function EventDemo(props) {
    const {title, initOpen} = props;
    return <Section title={title} initOpen={initOpen} >
            <button className="m-3" onClick={() => alert("button is clicked")}>click me please!</button>
            <Button className="m-3" onClick={() => alert("bootstrap button is clicked")}>click me please!</Button>
            <div className="mb-3" style={{backgroundColor: "pink"}} onClick={() => alert('div is clicked')}>
                <p>Dit is een div</p>
                <a href="http://www.thomasmore.be"
                   onClick={(e) => {e.preventDefault();alert('link is clicked');e.stopPropagation()}}>
                    dit is een link met een href
                </a>
                &nbsp;- en -&nbsp;
                <button onClick={(e) => {alert('button is clicked');e.stopPropagation()}}>dit is een button</button>
            </div>
        </Section>
}