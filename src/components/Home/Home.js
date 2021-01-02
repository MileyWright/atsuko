import {useState} from 'react';
import Nav from '../Nav/Nav';
import './Home.css';
import { Link } from 'react-router-dom';
import accessories from '../../assets/sailor-moon-cat-airpod-cases.jpg';
import teeshirt from '../../assets/naruto-kakashi-hatake-shirt.jpg';
import hoodie from '../../assets/attack-on-titan-logo-hoodie.jpg';
import ledlight from '../../assets/hunter-x-hunter-killua-led-lamp.jpg';
import pillow from '../../assets/kawaii-baby-panda-body-pillow.jpg';
import sadaesthetic from '../../assets/darling-in-the-franxx-zero-two-smile-hoodie.jpg';
import vaporwave from '../../assets/vaporwave-girl-hoodie.png';
import nsfw from '../../assets/sailor-moon-bondage-shirt.png';
import kawaii from '../../assets/boba-tea-plush-pillow.png';
import waifu from '../../assets/rascal-does-not-dream-of-bunny-girl-senpai-led-lamp.jpg';
import { Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Form, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
};

const validateMessages = {
    types: {
      email: 'Please enter a valid email.',
    }
};
const intialState= false;
const Home = () => {
    const [subscribed, setSubscribed] = useState(intialState);


    const onChange = () => {
        setSubscribed(!subscribed);
        
    }

    console.log(subscribed)

    return (
        <>
            <Nav />
            <div className='hero_container'>
                <div className='hero_container_title'>
                    <p>Stay Sugoi ツ</p>
                    <p>Only the best anime merch and inspiration</p>
                    <Link to='/collection/anime-clothing-apparel' className='btn'>Treat Yourself </Link>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/images/2aa82214d9c3552fe1b25e0184978373.jpg'} style={{backgroundPosition: "center", backgroundSize: 'center'}} alt='hero_img_girl'/>
            </div>

            <div className='main_container'>

                <div className='merch_container'>
                    <p>atsuko merch</p>
                    <div className='merch_grid first-row'>
                        <div className='grid_item overlay'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link '>
                                <img src={teeshirt} alt='kakashi_hoodie' />
                                    <div className='collection_grid_text-wrapper'>
                                        <h3 className='collection_grid-title'>tee shirts</h3>
                                    </div> 
                            </Link>
                        </div>
                        <div className='grid_item overlay'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link'>
                                <img src={accessories} alt='sailor_moon_case'/>
                                    <div className='collection_grid_text-wrapper'>
                                        <h3 className='collection_grid-title'>accessories</h3>
                                    </div> 
                            </Link>
                        </div>
                    </div>
                    <div className='merch_grid second-row'>
                        <div className='grid_item overlay'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link'>
                                <img src={hoodie} alt='attack_on_titan_hoodie'/>
                                    <div className='collection_grid_text-wrapper'>
                                        <h3 className='collection_grid-title'>hoodies</h3>
                                    </div> 
                            </Link>
                        </div>
                        <div className='grid_item overlay'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link'>
                                <img src={ledlight} alt='hunter_x_hunter_led_light'/>
                                    <div className='collection_grid_text-wrapper'>
                                        <h3 className='collection_grid-title'>led lights</h3>
                                    </div> 
                            </Link>
                        </div>
                        <div className='grid_item overlay'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link'>
                                <img src={pillow} alt='panda_pillow'/>
                                    <div className='collection_grid_text-wrapper'>
                                        <h3 className='collection_grid-title'>pillows, plushies, and blankets</h3>
                                    </div> 
                            </Link>
                        </div>
                    </div>
                    <div className='break'></div>
                    <p>shop by aesthetic</p>
                    <div className='merch_grid first-row'>
                        <div className='grid_item overlay'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link '>
                                <img src={sadaesthetic} alt='darling_in_the_franxx_hoodie' />
                                    <div className='collection_grid_text-wrapper'>
                                        <h3 className='collection_grid-title'>sad aesthetic</h3>
                                    </div> 
                            </Link>
                        </div>
                        <div className='grid_item overlay'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link'>
                                <img src={vaporwave} alt='vaporwave_hoodie'/>
                                    <div className='collection_grid_text-wrapper'>
                                        <h3 className='collection_grid-title'>vaporwave</h3>
                                    </div> 
                            </Link>
                        </div>
                    </div>
                    <div className='merch_grid second-row'>
                        <div className='grid_item overlay'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link'>
                                <img src={nsfw} alt='sailor_moon_bandage'/>
                                    <div className='collection_grid_text-wrapper'>
                                        <h3 className='collection_grid-title'>nsfw</h3>
                                    </div> 
                            </Link>
                        </div>
                        <div className='grid_item overlay'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link'>
                                <img src={kawaii} alt='boba_pillow'/>
                                    <div className='collection_grid_text-wrapper'>
                                        <h3 className='collection_grid-title'>kawaii</h3>
                                    </div> 
                            </Link>
                        </div>
                        <div className='grid_item overlay'>
                            <Link to='/collections/anime-tee-shirts' className='grid_link'>
                                <img src={waifu} alt='bunny_girl_led_light'/>
                                    <div className='collection_grid_text-wrapper'>
                                        <h3 className='collection_grid-title'>waifu</h3>
                                    </div> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='subscribe'>
                <p>Subscribe To Our Newsletter</p>
                <p>We promise to only send you cool stuff. And a coupon for 15% off your first order!</p>
                {subscribed ? <div className='subscribed'><MailOutlined/> Thanks for subscribing</div> : <Form {...layout} onFinish={onChange}  validateMessages={validateMessages} >
                    <Form.Item className='subscribeform' name="email"   rules={[{ type: 'email' }]}>
                        <Input placeholder="your email"/>   
                    </Form.Item>
                    <Button type="primary" >
                        <MailOutlined />
                    </Button>
                </Form> }
                
            </div>
        </>
    )
}

export default Home;