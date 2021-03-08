import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Apparel, ApparelProductPage, TeeShirts, ShirtProductPage} from './components';
import * as Routes from './Constants/Routes';
import ScrollToTop from './ScrollToTop';

const App = () => {
    return(
        <Router>
            <ScrollToTop>
            <Switch>
                <Route exact path={Routes.HOME} component={Home} />
                <Route path={Routes.APPARELCOLLECTIONPRODUCT} component={ApparelProductPage}/>
                <Route path={Routes.APPARELTSHIRTCOLLECTIONPRODUCT} component={ShirtProductPage}/>
                <Route path={Routes.APPARELCOLLECTION} component={Apparel}/>
                
                <Route path={Routes.APPARELTSHIRTCOLLECTION} component={TeeShirts}/>
                
            </Switch> 
            </ScrollToTop>
        </Router>
    )
}

export default App;