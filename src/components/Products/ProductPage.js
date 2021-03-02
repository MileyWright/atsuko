import {useState} from 'react';
import { useParams } from 'react-router-dom';
import {apparel} from '../../seed';
import {Nav, Footer} from '../index';
import {Link} from 'react-router-dom';
import {Radio} from 'antd';
import './ProductPage.css';

const ProductPage = () => {
    const {id} = useParams();
    const filteredProduct = apparel.find(item=> {
        
        return item.id == id
        })
console.log(filteredProduct)
    return(
        <>
        <Nav />
        <div className='product_container'>  
            <img src={filteredProduct.photo} className='product_image'/>
            <div className='right'>
                <div className='top_right'>
                    <p>{filteredProduct.name}</p>
                    <p>${filteredProduct.price} USD</p>
                    <p className='size'>Size:</p>
                    <Radio.Group buttonStyle="solid">
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