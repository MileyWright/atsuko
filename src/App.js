import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Apparel, HoodieProductPage, TeeShirts, ShirtProductPage, Hoodies, Socks, Cosplay, SockProductPage, CosplayProductPage, Homegoods, Lights, Pillows, LightProductPage, PillowProductPage, Vaporwave, VaporwaveProductPage, SadAesthetic, SadAestheticProductPage, NSFW, NSFWProductPage, Kawaii, KawaiiProductPage, Waifu, WaifuProductPage, SenpaiProductPage, Senpai, TechAccessories, AirpodCase, AirpodCaseProductPage, PhoneCase, PhoneCaseProductPage, ByAnime, AttackOnTitan} from './components';
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
                <Route path={Routes.LIFESTYLEVAPORWAVECOLLECTIONPRODUCT} component={VaporwaveProductPage}/>
                <Route path={Routes.LIFESTYLESADAESTHETICCOLLECTIONPRODUCT} component={SadAestheticProductPage}/>
                <Route path={Routes.LIFESTYLENSFWCOLLECTIONPRODUCT} component={NSFWProductPage}/>
                <Route path={Routes.LIFESTYLEKAWAIICOLLECTIONPRODUCT} component={KawaiiProductPage}/>
                <Route path={Routes.LIFESTYLESENPAICOLLECTIONPRODUCT} component={SenpaiProductPage}/>
                <Route path={Routes.LIFESTYLEWAIFUCOLLECTIONPRODUCT} component={WaifuProductPage}/>
                <Route path={Routes.TECHACCESSORIESAIRPODCASECOLLECTIONPRODUCT} component={AirpodCaseProductPage}/>
                <Route path={Routes.TECHACCESSORIESPHONECASECOLLECTIONPRODUCT} component={PhoneCaseProductPage}/>

                <Route path={Routes.APPARELCOLLECTION} component={Apparel}/>
                <Route path={Routes.APPARELHOODIECOLLECTION} component={Hoodies} />
                <Route path={Routes.APPARELTSHIRTCOLLECTION} component={TeeShirts}/>
                <Route path={Routes.APPARELSOCKSCOLLECTION} component={Socks}/>
                <Route path={Routes.APPARELCOSPLAYCOLLECTION} component={Cosplay}/>
                <Route path={Routes.HOMEGOODSCOLLECTION} component={Homegoods}/>
                <Route path={Routes.HOMEGOODSLIGHTSCOLLECTION} component={Lights}/>
                <Route path={Routes.HOMEGOODSPILLOWSCOLLECTION} component={Pillows}/>
                <Route path={Routes.LIFESTYLEVAPORWAVECOLLECTION} component={Vaporwave}/>
                <Route path={Routes.LIFESTYLESADAESTHETICCOLLECTION} component={SadAesthetic}/>
                <Route path={Routes.LIFESTYLENSFWCOLLECTION} component={NSFW}/>
                <Route path={Routes.LIFESTYLEKAWAIICOLLECTION} component={Kawaii}/>
                <Route path={Routes.LIFESTYLESENPAICOLLECTION} component={Senpai}/>
                <Route path={Routes.LIFESTYLEWAIFUCOLLECTION} component={Waifu}/>
                <Route path={Routes.TECHACCESSORIESCOLLECTION} component={TechAccessories}/>
                <Route path={Routes.TECHACCESSORIESAIRPODCASECOLLECTION} component={AirpodCase}/>
                <Route path={Routes.TECHACCESSORIESPHONECASECOLLECTION} component={PhoneCase}/>
                <Route path={Routes.BYANIMECOLLECTION}  component={ByAnime}/>
                <Route path={Routes.ATTACKONTITANCOLLECTION} component={AttackOnTitan}/>

            </Switch> 
            </ScrollToTop>
        </Router>
    )
}

export default App;