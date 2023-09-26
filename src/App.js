import './App.css';
import 'normalize.css';
import MenuCardPage from './pages/MenuCardPage';
import PicturesPage from './pages/PicturesPage';
import { PRODUCTS_DATA } from './data/data';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>menu</Tab>
                <Tab>pics</Tab>
            </TabList>

            <TabPanel>
                <MenuCardPage products={PRODUCTS_DATA} />
            </TabPanel>
            <TabPanel>
                <PicturesPage />
            </TabPanel>
        </Tabs>
    );
}

export default App;