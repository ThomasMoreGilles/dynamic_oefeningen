import {collection, orderBy, query} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {MenuCard} from "../components/MenuCard";

const menuProductConverter = {
    toFirestore: undefined, //we will do this later
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};

export function MenuFromDbPage() {
    const collectionRef = collection(firestoreDB, 'menuproducts').withConverter(menuProductConverter);
    const queryRef = query(collectionRef, orderBy("sequence"));
    const [values, loading, error] = useCollectionData(queryRef);

    console.log({values, loading, error});
    return (
        <div className="mx-3">
            <MenuCard products={values}/>
        </div>
    );
}