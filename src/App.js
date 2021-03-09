import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Apparel, HoodieProductPage, TeeShirts, ShirtProductPage, Hoodies} from './components';
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
                <Route path={Routes.APPARELCOLLECTION} component={Apparel}/>
                <Route path={Routes.APPARELHOODIECOLLECTION} component={Hoodies} />
                <Route path={Routes.APPARELTSHIRTCOLLECTION} component={TeeShirts}/>
                
            </Switch> 
            </ScrollToTop>
        </Router>
    )
}

export default App;