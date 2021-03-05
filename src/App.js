import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Apparel, ProductPage} from './components';
import * as Routes from './Constants/Routes';
import ScrollToTop from './ScrollToTop';

const App = () => {
    return(
        <Router>
            <ScrollToTop>
            <Switch>
                <Route exact path={Routes.HOME} component={Home} />
                <Route path={Routes.APPARELCOLLECTIONPRODUCT} component={ProductPage}/>
                <Route path={Routes.APPARELCOLLECTION} component={Apparel}/>
                
            </Switch> 
            </ScrollToTop>
        </Router>
    )
}

export default App;