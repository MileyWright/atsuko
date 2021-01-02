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
                    <Link to='/collection/anime-clothing-apparel' className='btn'>Treat Yourself </Link>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/images/2aa82214d9c3552fe1b25e0184978373.jpg'} style={{backgroundPosition: "center", backgroundSize: 'center'}}/>
            </div>

            <div className='main_container'>

                <div className='merch_container'>
                    <p>atsuko merch</p>
                    <div className='merch_grid first-row'>
                        <div className='grid_item overlay'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link '>
                                <img src={process.env.PUBLIC_URL + '/assets/images/apparel/naruto-kakashi-hatake-shirt.jpg'} />
                                    <div className='collection_grid_text-wrapper'>
                                        <h3 className='collection_grid-title'>tee shirts</h3>
                                    </div> 
                            </Link>
                        </div>
                        <div className='grid_item'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link'>
                                <img src={process.env.PUBLIC_URL + '/assets/images/apparel/naruto-kakashi-hatake-shirt.jpg'} />
                                    <div className='collection_grid_text-wrapper'>
                                        <h3 className='collection_grid-title'>accessories</h3>
                                    </div> 
                            </Link>
                        </div>
                    </div>
                    <div className='merch_grid second-row'>
                        <div className='grid_item'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link'>
                                <img src={process.env.PUBLIC_URL + '/assets/images/apparel/naruto-kakashi-hatake-shirt.jpg'} />
                                    <div className='collection_grid_text-wrapper'>
                                        <h3 className='collection_grid-title'>hoodies</h3>
                                    </div> 
                            </Link>
                        </div>
                        <div className='grid_item'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link'>
                                <img src={process.env.PUBLIC_URL + '/assets/images/apparel/naruto-kakashi-hatake-shirt.jpg'} />
                                    <div className='collection_grid_text-wrapper'>
                                        <h3 className='collection_grid-title'>led lights</h3>
                                    </div> 
                            </Link>
                        </div>
                        <div className='grid_item'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link'>
                                <img src={process.env.PUBLIC_URL + '/assets/images/apparel/naruto-kakashi-hatake-shirt.jpg'} />
                                    <div className='collection_grid_text-wrapper'>
                                        <h3 className='collection_grid-title'>pillows, plushies, and blankets</h3>
                                    </div> 
                            </Link>
                        </div>
                    </div>
                </div>
                        {/* <div className='grid_item first'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link'>
                                    
                                            <div className='collection_grid_text-wrapper'>
                                                <h3 className='collection_grid-title'>Tee Shirts</h3>
                                            </div>
                                     
                            </Link>
                        </div>
                        <div className='grid_item'>
                            <Link to='/collections/anime-tee-shirts'>
                                    <div className='collection_grid_item overlay first'>
                                        <div className='collection_grid_inner'>
                                            <div className='collection_grid_text-wrapper'>
                                                <h3 className='collection_grid-title'>Tee Shirts</h3>
                                            </div>
                                        </div>
                                    </div>
                            </Link>
                        </div>
                        <div className='grid_item'>
                            <Link to='/collections/anime-tee-shirts'>
                                    <div className='collection_grid_item row_two overlay'>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/apparel/naruto-kakashi-hatake-shirt.jpg'} />
                                        <div className='collection_grid_inner'>
                                            <div className='collection_grid_text-wrapper'>
                                                <h3 className='collection_grid-title'>Tee Shirts</h3>
                                            </div>
                                        </div>
                                    </div>
                            </Link>
                        </div>
                        <div className='grid_item'>
                            <Link to='/collections/anime-tee-shirts'>
                                    <div className='collection_grid_item row_two overlay'>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/apparel/naruto-kakashi-hatake-shirt.jpg'} />
                                        <div className='collection_grid_inner'>
                                            <div className='collection_grid_text-wrapper'>
                                                <h3 className='collection_grid-title'>Tee Shirts</h3>
                                            </div>
                                        </div>
                                    </div>
                            </Link>
                        </div>
                        <div className='grid_item'>
                            <Link to='/collections/anime-tee-shirts'>
                                    <div className='collection_grid_item row_two overlay'>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/apparel/naruto-kakashi-hatake-shirt.jpg'} />
                                        <div className='collection_grid_inner'>
                                            <div className='collection_grid_text-wrapper'>
                                                <h3 className='collection_grid-title'>Tee Shirts</h3>
                                            </div>
                                        </div>
                                    </div>
                            </Link>
                        </div> */}
                    
                
            </div>
        </>
    )
}

export default Home;