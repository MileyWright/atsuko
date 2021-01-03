import { useState } from 'react';
import {Nav, Footer, Card} from '../index';
import './Apparel.css';
import {apparel} from '../../seed';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
const Apparel = () => {
    const numEachPage = 18;
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(numEachPage)

    
    const handleChange = value => {
        if (value <= 1) {
            setMinValue(0)
            setMaxValue(numEachPage)
        } else {
            setMinValue((value-1) * numEachPage) 
            setMaxValue(value*numEachPage)
            
        }
    }
    console.log(apparel)
    return (
        <>
            <Nav/>
            <div className='product_page'>
                <div className='title'> Apparel</div>
                <div className='container'>
                    {apparel && apparel.length > 0 &&
                    apparel.slice(minValue, maxValue).map(item => 
                        <Link to={`/collections/anime-clothing-apparel/products/${item.id}`} className='link overlay'>
                            <Card className='product_card 'item={item} key={item.id}/>
                        </Link>
                    )}
                </div>
                <Pagination
                    className='pagination'
                    defaultCurrent={1}
                    defaultPageSize={numEachPage}
                    showSizeChanger={false}
                    onChange={handleChange}
                    total={apparel.length}
                />
            </div>
            <Footer/>
        </>
    )
}

export default Apparel;