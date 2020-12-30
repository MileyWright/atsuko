import { Help } from '@material-ui/icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './components';
import * as Routes from './Constants/Routes';

const App = () => {
    
    return(
        <Router>
            <Switch>
                <Route path={Routes.HOME} component={Home} />
            </Switch>
        </Router>
    )
}

export default App;