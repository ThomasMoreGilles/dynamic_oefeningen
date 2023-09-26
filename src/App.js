import './App.css';
import 'normalize.css';
import MenuCardPage from './pages/MenuCardPage';
import PicturesPage from './pages/PicturesPage';
import { PRODUCTS_DATA } from './data/data';

function App() {
    return (
        <>
            <MenuCardPage products={PRODUCTS_DATA} />
            <PicturesPage />
        </>
    );
}

export default App;