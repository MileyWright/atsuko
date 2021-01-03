import { useState } from 'react';
import {Nav, Footer, Card} from '../index';
import './Apparel.css';
import {apparel} from '../../seed';
import { Pagination } from 'antd';

const Apparel = () => {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)

    const numEachPage = 5;
    const handleChange = value => {
        if (value <= 1) {
            setMinValue(0)
            setMaxValue(5)
        } else {
            setMinValue((value-1) * numEachPage) 
            setMaxValue(value*numEachPage)
            
        }
    }
    console.log(apparel)
    return (
        <>
            <Nav/>
            <div className='title'> Apparel</div>
            {apparel && apparel.length > 0 &&
            apparel.slice(minValue, maxValue).map(item => <Card item={item} key={item.id}/>)}
            <Pagination
          defaultCurrent={1}
          defaultPageSize={numEachPage}
          showSizeChanger={false}
          onChange={handleChange}
          total={apparel.length}
        />
            <Footer/>
        </>
    )
}

export default Apparel;