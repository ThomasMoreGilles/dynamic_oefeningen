import {collection} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Cars} from "../components/Cars";

const carConverter = {
    toFirestore: undefined, //we will do this later
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};

export function CarsFromDbPage() {
    const collectionRef = collection(firestoreDB, 'cars').withConverter(carConverter);
    const [values, loading, error] = useCollectionData(collectionRef);

    console.log({values, loading, error});
    return (
        <>
            <Cars title="Auto's uit database" cars={values} isInitiallyOpen={true}/>
        </>
    );
}