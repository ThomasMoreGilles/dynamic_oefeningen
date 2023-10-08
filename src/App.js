import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import {CAR_DATA, NUMBER_DATA, PERSON_DATA, PRODUCTS_DATA} from "./data/data";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";
import {NumbersPage} from "./pages/NumbersPage";
import {CarsPage} from "./pages/CarsPage";
import {PersonsPage} from "./pages/PersonsPage";
import {EventsAndStatePage} from "./pages/EventsAndStatePage";
import {FavoriteNumberPage} from "./pages/FavoriteNumberPage";
import {InputPage} from "./pages/InputPage";
import {SearchPersonsPage} from "./pages/SearchPersonsPage";

function App() {
    return <Tabs>
        <TabList>
            <Tab>menu</Tab>
            <Tab>pics</Tab>
            <Tab>numbers</Tab>
            <Tab>cars</Tab>
            <Tab>persons</Tab>
            <Tab>events&state</Tab>
            <Tab>fav numbers</Tab>
            <Tab>input</Tab>
            <Tab>search</Tab>
        </TabList>

        <TabPanel>
            <MenuCardPage products={PRODUCTS_DATA} />
        </TabPanel>
        <TabPanel>
            <PicturesPage/>
        </TabPanel>
        <TabPanel>
            <NumbersPage numbers={NUMBER_DATA} />
        </TabPanel>
        <TabPanel>
            <CarsPage cars={CAR_DATA} />
        </TabPanel>
        <TabPanel>
            <PersonsPage persons={PERSON_DATA} />
        </TabPanel>
        <TabPanel>
            <EventsAndStatePage />
        </TabPanel>
        <TabPanel>
            <FavoriteNumberPage numbers={NUMBER_DATA} />
        </TabPanel>
        <TabPanel>
            <InputPage />
        </TabPanel>
        <TabPanel>
            <SearchPersonsPage persons={PERSON_DATA} />
        </TabPanel>
    </Tabs>
}

export default App;
