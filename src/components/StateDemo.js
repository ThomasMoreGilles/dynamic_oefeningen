import {useState} from "react";
import {Section} from "./Section";
import {MyButton} from "./MyButton";
import {Counter} from "./Counter";
import {OnOffDemo} from "./OnOffDemo";

function DemoValue(props) {
    const {demoValue, setDemoValue} = props;

    return <div className="border border-secondary m-3 p-3">
        <div>de waarde van demoValue is {demoValue}</div>
        <div>de waarde van demoValue is {demoValue}</div>
        <div>
            <MyButton onClick={() => setDemoValue(0)}> SET 0 </MyButton>
            <MyButton onClick={() => setDemoValue(77)}> SET 77 </MyButton>
            <MyButton onClick={() => setDemoValue(184)}> SET 184 </MyButton>
        </div>
    </div>
}

function DemoValueReadOnly(props) {
    const {demoValue} = props;
    return <div className="border border-secondary m-3 p-3">
        <div>de waarde van demoValue is {demoValue}</div>
    </div>
}

function DemoValueIncrement(props) {
    const {demoValue, setDemoValue} = props;
    return <div className="border border-secondary m-3 p-3">
        <MyButton onClick={() => setDemoValue(demoValue + 1)}> demoValue increment </MyButton>
    </div>
}

export function StateDemo(props) {
    const {title, initOpen} = props;
    const [demoValue, setDemoValue] = useState(0);

    return <Section title={title} initOpen={initOpen} >
        <DemoValue demoValue={demoValue} setDemoValue={setDemoValue} />
        <Counter name="counter1" />
        <Counter name="counter2" />
        <OnOffDemo />
        <DemoValueReadOnly demoValue={demoValue} />
        <DemoValueIncrement demoValue={demoValue} setDemoValue={setDemoValue} />
    </Section>
}