import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import {CAR_DATA, NUMBER_DATA, PERSON_DATA, PRODUCTS_DATA, WIKI_TEST1_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {NumbersPage} from "./pages/NumbersPage";
import {CarsPage} from "./pages/CarsPage";
import {PersonsPage} from "./pages/PersonsPage";
import {WikiPage} from "./pages/WikiPage";
import {EventAndStatePage} from "./pages/EventAndStatePage";
import {FavoriteNumberPage} from "./pages/FavoriteNumberPage";
import {InputPage} from "./pages/InputPage";
import {SearchPersonsPage} from "./pages/SearchPersonsPage";
import "./services/firebase";
import {PersonsFromDbPage} from "./pages/PersonsFromDbPage";
import {CarsFromDbPage} from "./pages/CarsFromDbPage";
import {MenuFromDbPage} from "./pages/MenuFromDbPage";

function App() {
    return (
        <Tabs defaultIndex={10}>
            <TabList>
                <Tab>menu</Tab>
                <Tab>pics</Tab>
                <Tab>numbers</Tab>
                <Tab>cars</Tab>
                <Tab>persons</Tab>
                <Tab>wiki</Tab>
                <Tab>events&state</Tab>
                <Tab>fav numbers</Tab>
                <Tab>input</Tab>
                <Tab>search</Tab>
                <Tab>Persons@Db</Tab>
                <Tab>Cars@Db</Tab>
                <Tab>Menu@Db</Tab>
            </TabList>
            <TabPanel>
                <MenuCardPage products={PRODUCTS_DATA}/>
            </TabPanel>
            <TabPanel>
                <PicturesPage/>
            </TabPanel>
            <TabPanel>
                <NumbersPage numbers={NUMBER_DATA}/>
            </TabPanel>
            <TabPanel>
                <CarsPage cars={CAR_DATA}/>
            </TabPanel>
            <TabPanel>
                <PersonsPage persons={PERSON_DATA}/>
            </TabPanel>
            <TabPanel>
                <WikiPage wikidata={WIKI_TEST1_DATA}/>
            </TabPanel>
            <TabPanel>
                <EventAndStatePage/>
            </TabPanel>
            <TabPanel>
                <FavoriteNumberPage numbers={NUMBER_DATA}/>
            </TabPanel>
            <TabPanel>
                <InputPage/>
            </TabPanel>
            <TabPanel>
                <SearchPersonsPage persons={PERSON_DATA}/>
            </TabPanel>
            <TabPanel>
                <PersonsFromDbPage/>
            </TabPanel>
            <TabPanel>
                <CarsFromDbPage/>
            </TabPanel>
            <TabPanel>
                <MenuFromDbPage/>
            </TabPanel>
        </Tabs>
    );
}

export default App;
