import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home, Apparel, ProductPage} from './components';
import * as Routes from './Constants/Routes';

const App = () => {
    
    return(
        <Router>
            <Switch>
                <Route exact path={Routes.HOME} component={Home} />
                <Route path={Routes.COLLECTION} component={Apparel}/>
                <Route path='/collections/anime-clothing-apparel/products/:id' component={ProductPage}/>
            </Switch>
        </Router>
    )
}

export default App;