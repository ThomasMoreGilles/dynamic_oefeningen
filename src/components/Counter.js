import {useState} from "react";
import {MyButton} from "./MyButton";

export function Counter(props) {
    const {name} = props;
    const [counter, setCounter] = useState(0);
    return <div className="border border-secondary m-3 p-3">
        <div>de waarde van {name} is {counter}</div>
        <div>
            <MyButton onClick={() => setCounter(0)}> CLEAR </MyButton>
            <MyButton onClick={() => setCounter(counter - 1)}> - </MyButton>
            <MyButton onClick={() => setCounter(counter + 1)}> + </MyButton>
        </div>
    </div>
}