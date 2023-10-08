import {Numbers} from "../components/Numbers";
import {useState} from "react";

export function FavoriteNumberPage(props) {
    const {numbers} = props;
    const [favorite, setFavorite] = useState(undefined);

    const setNumber = (number) => setFavorite(number);

    return (
        <div className="mx-3" >
            <Numbers numbers={numbers} title="alle getallen" initOpen={true} onSelectNumber={setNumber} markedNumber={favorite} />
            Mijn favoriete getal is {favorite!==undefined ? favorite : "(niet gekozen)"}
        </div>
    );
}