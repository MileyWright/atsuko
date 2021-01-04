import {useState} from 'react';
import { useParams } from 'react-router-dom';
import {apparel} from '../../seed';
import {Nav, Footer} from '../index';
import {Link} from 'react-router-dom';

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
            <img src={filteredProduct.photo}/>
            <div>
                <div className='top_right'>
                    <h1>{filteredProduct.name}</h1>
                    <p>{filteredProduct.price}</p>
                </div>
                <div className='bottom_right'>
                <Link>Checkout</Link>
                </div>
            </div>
        </div> 
        <Footer/> 
        </>
    )
}

export default ProductPage;