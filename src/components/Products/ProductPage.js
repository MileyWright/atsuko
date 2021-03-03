import {useState} from 'react';
import { useParams } from 'react-router-dom';
import {apparel} from '../../seed';
import {Nav, Footer} from '../index';
import {Link} from 'react-router-dom';
import {Modal, Radio, Table } from 'antd';
import {renderContent, columns, tShirtData, longTShirtData, sweatshirtData} from './ModalData';
import './ProductPage.css';

const ProductPage = () => {
    const {id} = useParams();
    const [size, setSize] = useState();
    const [visible, setVisible] = useState(false);

    const filteredProduct = apparel.find(item=> {
        return item.id == id
        })
    console.log(filteredProduct)

    const handleChange = value => {
        setSize(value.target.value)
    }
    console.log(size)

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
                <div className='bottom_right'>
                <Link to='/'>Checkout</Link>
                </div>
            </div>
        </div> 
        <Footer/> 
        </>
    )
}

export default ProductPage;