import {useState} from "react";
import {MyButton} from "./MyButton";

export function OnOffDemo() {
    const [isOn, setIsOn] = useState(false);
    return <div className="border border-secondary m-3 p-3">
        <div>huidige waarde van isOn is {isOn ? "ON" : "OFF"}</div>
        <div className="m-2">
            <MyButton onClick={() => setIsOn(false)}> OFF </MyButton>
            <MyButton onClick={() => setIsOn(true)}> ON </MyButton>
            <MyButton onClick={() => setIsOn(!isOn)}> toggle </MyButton>
        </div>
        <div>huidige waarde van isOn is {isOn ? "ON" : "OFF"}</div>
    </div>
}