import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {apparel} from '../../seed';
import {Nav, Footer} from '../index';
import {Link} from 'react-router-dom';
import {Modal, Radio, Table} from 'antd';
import {HeartOutlined} from '@ant-design/icons';
import {columns, tShirtData, longTShirtData, sweatshirtData} from './ModalData';
import './ProductPage.css';

const intialState = {dayName:null, month: null, dayNumber: null};
const ProductPage = () => {
    const {id} = useParams();
    const [size, setSize] = useState();
    const [visible, setVisible] = useState(false);
    const [standardShipping, setStandardShipping] = useState(intialState);
    const [overnightShipping, setOvernightShipping] = useState(intialState);

    const filteredProduct = apparel.find(item=> {
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

    useEffect(() => {
        setStandardShipping({dayName: dayOfTheWeek(standardDay), month: standardMonth, dayNumber: standard.getDate()})
    }, [])

    useEffect(() => {
        setOvernightShipping({dayName: dayOfTheWeek(overnightDay), month: overnightMonth, dayNumber: overnight.getDate()})
    }, [])

    return(
        <>
        <Nav />
        <div className='product_container'>  
            <img src={filteredProduct.photo} className='product_image'/>
            <div className='right'>
                <div className='top_right'>
                    <p>{filteredProduct.name}</p>
                    <p>${filteredProduct.price} USD</p>
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
                        Get it by {standardShipping.dayName}, {standardShipping.month} {standardShipping.dayNumber}
                    </p>
                    <p>
                        <img src={process.env.PUBLIC_URL + '/assets/icons/rocket.svg'} alt='rocket'/>
                        Get it by {overnightShipping.dayName}, {overnightShipping.month} {overnightShipping.dayNumber}
                    </p>
                </div>
            </div>
        </div> 
        <Footer/> 
        </>
    )
}

export default ProductPage;