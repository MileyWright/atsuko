import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {apparel, homegoods, techAccessories} from '../../seed';
import {Nav, Footer, Card} from '../index';
import {Link} from 'react-router-dom';
import {Modal, Radio, Table} from 'antd';
import {HeartOutlined} from '@ant-design/icons';
import {columns, tShirtData, longTShirtData, sweatshirtData} from './ModalData';
import ScrollTo from 'react-scroll-into-view';
import './ProductPage.css';
import '../Nav/Nav.css';

const intialState = {dayName:null, month: null, dayNumber: null};

var combineProduct = apparel.concat(homegoods);
var combineProduct = combineProduct.concat(techAccessories)

const ProductPage = () => {
    const {id} = useParams();
    const [size, setSize] = useState();
    const [visible, setVisible] = useState(false);
    const [standardShipping, setStandardShipping] = useState(intialState);
    const [overnightShipping, setOvernightShipping] = useState(intialState);

    const filteredProduct = apparel.find(item => {
        return item.id == id
        })
    

    const handleChange = value => {
        setSize(value.target.value)
    }

    const today = new Date()
    var standard = new Date(today)
    standard.setDate(standard.getDate() + 5)
    
    var overnight = new Date(today)
    overnight.setDate(overnight.getDate() + 1)

    var standardDay = standard.getDay();
    var overnightDay = overnight.getDay();

    const dayOfTheWeek = (value) => {
        if(value === 0){
            return 'Sun'
        } else if (value === 1){
            return 'Mon'
        } else if(value === 2){
            return 'Tues'
        } else if(value === 3){
            return 'Wed'
        } else if(value === 4){
            return 'Thur'
        } else if(value === 5){
            return 'Fri'
        } else if(value === 6){
            return 'Sat'
        }
    } 
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    let standardMonth = monthNames[standard.getMonth()];
    let overnightMonth = monthNames[overnight.getMonth()];
    let standardDate = standard.getDate();
    
    useEffect(() => {
        setStandardShipping({dayName: dayOfTheWeek(standardDay), month: standardMonth, dayNumber: standardDate})
    }, [standardDay, standardMonth])

    useEffect(() => {
        setOvernightShipping({dayName: dayOfTheWeek(overnightDay), month: overnightMonth, dayNumber: overnight.getDate()})
    }, [overnightDay, overnightMonth])

   // Shuffle array
    const shuffled = combineProduct.sort(() => 0.5 - Math.random());

    // Get sub-array of first 6 elements after shuffled
    let selected = shuffled.slice(0, 6);
    
    const randomApparel = apparel.sort(() => 0.5 - Math.random()).slice(0,4);

    return(
        <>
        <Nav />
        <div className='product_container'>  
            <img src={filteredProduct.photo} className='product_image'/>
            <div className='right'>
                <div className='top_right'>
                    <p>{filteredProduct.name}</p>
                    <p>${filteredProduct.price} USD</p>
                    <p className='fourPayments'> 
                       <quadpay-widget className='quadpay' logoColor="#1d75ec"/>
                    </p>
                    <div className='size_container'>
                        <p className='size'>Size: {size} </p>
                        <div className='size_container_right'>
                            <img src={process.env.PUBLIC_URL + '/assets/icons/ruler.svg'} alt='ruler'/>
                            <button onClick={() => setVisible(true)}>
                                Size Chart
                            </button>
                            <Modal
                                className='modal'
                                footer={null}
                                centered
                                visible={visible}
                                onCancel={() => setVisible(false)}
                                width={1000}
                                
                            >
                                <div className='modal_tables' style={{ height: '500'}}>
                                <div className='modal_table'>
                                    <h2 className='modal_header'> Adult Tee Size Chart </h2>
                                    <Table columns={columns} dataSource={tShirtData} bordered pagination={false}/>
                                </div>
                                <div className='modal_table'>
                                    <h2 className='modal_header'> Adult Long-Sleeve Tee Size Chart </h2>
                                    <Table columns={columns} dataSource={longTShirtData} bordered pagination={false}/>
                                </div>
                                <div className='modal_table'>
                                    <h2 className='modal_header'> Adult Hooded Sweatshirt Size Chart </h2>
                                    <Table columns={columns} dataSource={sweatshirtData} bordered pagination={false}/>
                                </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                    
                    <Radio.Group className='radio_button' buttonStyle="solid" onChange={handleChange}>
                        <Radio.Button value="XS">XS</Radio.Button>
                        <Radio.Button value="S">S</Radio.Button>
                        <Radio.Button value="M">M</Radio.Button>
                        <Radio.Button value="L">L</Radio.Button>
                        <Radio.Button value="XL">XL</Radio.Button>
                        <Radio.Button value="1X">1X</Radio.Button>
                        <Radio.Button value="2X">2X</Radio.Button>
                        <Radio.Button value="3X">3X</Radio.Button>
                    </Radio.Group>
                </div>
                <div className='cart_container'>
                    <Link to='/' className='cart_button'>ADD TO CART</Link>
                    <button className='heart_button'>
                        <HeartOutlined className='heart'/>
                    </button>
                </div>
                <div className='shipping'>
                    <p>
                        <img src={process.env.PUBLIC_URL + '/assets/icons/travelling.svg'} alt='traveling'/>
                        Get it by {standardShipping.dayName}, {standardShipping.month} {standardShipping.dayNumber} with standard shipping
                    </p>
                    <p>
                        <img src={process.env.PUBLIC_URL + '/assets/icons/rocket.svg'} alt='rocket'/>
                        Get it by {overnightShipping.dayName}, {overnightShipping.month} {overnightShipping.dayNumber} with overnight shipping
                    </p>
                </div>
            </div>
        </div>
        
        <div className='random_product'>
            <div className='title'> You may also like</div>
            <p>Customers who brought this item also brought</p>

            <div className='container'>
                    {selected.map(item => {
                        const productUrl = item => {
                            if (item.category === 'apparel'){
                            return 'anime-clothing-apparel'
                            } else if (item.category === 'homegoods'){
                                return 'anime-homegoods'
                            } else if (item.category === 'techAccessories'){
                                return 'anime-tech-accessories'
                            }
                        }
                        return(
                        
                            <Link to={`/collections/${productUrl(item)}/products/${item.id}`} className='link overlay'key={item.id}>
                                <ScrollTo selector={`#product`}><Card className='product_card' item={item} key={item.id}/></ScrollTo>
                            </Link>
                        
                    )})}
            </div> 
        </div>
        
        <div className='similar_products'>
            <div className='title'> Similar Products</div>
            <p>Customers who viewed this item also viewed</p>
            
            <div className='container'>
                    {randomApparel.map(item => {
                        const productUrl = item => {
                            if (item.category === 'apparel'){
                            return 'anime-clothing-apparel'
                            } else if (item.category === 'homegoods'){
                                return 'anime-homegoods'
                            } else if (item.category === 'techAccessories'){
                                return 'anime-tech-accessories'
                            }
                        }
                        return(
                        <Link to={`/collections/${productUrl(item)}/products/${item.id}`} className='link overlay'key={item.id}>
                            <ScrollTo selector={`#product`}><Card className='product_card' item={item} key={item.id}/></ScrollTo>
                        </Link>
                    )})}
            </div>
        </div>
        <Footer/> 
        </>
    )
}

export default ProductPage;