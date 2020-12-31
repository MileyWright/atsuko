import { Help } from '@material-ui/icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home, Shop} from './components';
import * as Routes from './Constants/Routes';

const App = () => {
    
    return(
        <Router>
            <Switch>
                <Route exact path={Routes.HOME} component={Home} />
                <Route path={Routes.COLLECTION} component={Shop}/>
            </Switch>
        </Router>
    )
}

export default App;