import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Apparel, HoodieProductPage, TeeShirts, ShirtProductPage, Hoodies, Socks, Cosplay, SockProductPage, CosplayProductPage, Homegoods, Lights, Pillows, LightProductPage, PillowProductPage, Vaporwave} from './components';
import * as Routes from './Constants/Routes';
import ScrollToTop from './ScrollToTop';

const App = () => {
    return(
        <Router>
            <ScrollToTop>
            <Switch>
                <Route exact path={Routes.HOME} component={Home} />
                <Route path={Routes.APPARELHOODIECOLLECTIONPRODUCT} component={HoodieProductPage}/>
                <Route path={Routes.APPARELTSHIRTCOLLECTIONPRODUCT} component={ShirtProductPage}/>
                <Route path={Routes.APPARELSOCKSCOLLECTIONPRODUCT} component={SockProductPage}/>
                <Route path={Routes.APPARELCOSPLAYCOLLECTIONPRODUCT} component={CosplayProductPage}/>
                <Route path={Routes.HOMEGOODSLIGHTSCOLLECTIONPRODUCT} component={LightProductPage}/>
                <Route path={Routes.HOMEGOODSPILLOWSCOLLECTIONPRODUCT} component={PillowProductPage}/>

                <Route path={Routes.APPARELCOLLECTION} component={Apparel}/>
                <Route path={Routes.APPARELHOODIECOLLECTION} component={Hoodies} />
                <Route path={Routes.APPARELTSHIRTCOLLECTION} component={TeeShirts}/>
                <Route path={Routes.APPARELSOCKSCOLLECTION} component={Socks}/>
                <Route path={Routes.APPARELCOSPLAYCOLLECTION} component={Cosplay}/>
                <Route path={Routes.HOMEGOODSCOLLECTION} component={Homegoods}/>
                <Route path={Routes.HOMEGOODSLIGHTSCOLLECTION} component={Lights}/>
                <Route path={Routes.HOMEGOODSPILLOWSCOLLECTION} component={Pillows}/>
                <Route path={Routes.LIFESTYLEVAPORWAVECOLLECTION} component={Vaporwave}/>
            </Switch> 
            </ScrollToTop>
        </Router>
    )
}

export default App;