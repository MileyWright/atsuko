import Nav from '../Nav/Nav';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <Nav />
            <div className='hero_container'>
                <div className='hero_container_title'>
                    <p>Stay Sugoi ツ</p>
                    <p>Only the best anime merch and inspiration</p>
                    <Link to='/collection/anime-clothing-apparel' className='btn'>Treat Yourself 
                    {/* <img className='arrow' src={process.env.PUBLIC_URL+'/assets/images/button-arrow.png'}/> */}
                    </Link>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/images/2aa82214d9c3552fe1b25e0184978373.jpg'} />
            </div>
        </>
    )
}

export default Home;