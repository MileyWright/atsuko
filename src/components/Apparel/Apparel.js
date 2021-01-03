import {Nav, Footer, Card} from '../index';
import './Apparel.css';
import {apparel} from '../../seed';

const Apparel = () => {
    console.log(apparel)
    return (
        <>
            <Nav/>
            <div className='title'> Apparel</div>
            {apparel.map(item => <Card item={item} key={item.id}/>)}
            <Footer/>
        </>
    )
}

export default Apparel;