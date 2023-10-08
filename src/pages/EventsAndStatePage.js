import {EventDemo} from "../components/EventDemo";
import {StateDemo} from "../components/StateDemo";

export function EventsAndStatePage() {

    return (
        <div className="mx-3" >
            <EventDemo title="events" initOpen={true} />
            <StateDemo title="state" />
        </div>
    );
}