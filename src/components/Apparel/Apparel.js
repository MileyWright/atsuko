import { useState } from 'react';
import {Nav, Footer, Card} from '../index';
import './Apparel.css';
import {apparel} from '../../seed';
import { Pagination, Select } from 'antd';
import { Link } from 'react-router-dom';
const { Option } = Select;

const intialState = apparel
const Apparel = () => {
    const numEachPage = 18;
    const [data, setData] = useState(intialState);
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(numEachPage)

    const onChange = value => {
        if(value === 'All'){
            return setData(intialState)
        } else{
        const filter = apparel.filter(item=> {
            return item.keywords.includes(value)})
        setData(filter)
        }
      }
    console.log(data)
    const handleChange = value => {
        if (value <= 1) {
            setMinValue(0)
            setMaxValue(numEachPage)
        } else {
            setMinValue((value-1) * numEachPage) 
            setMaxValue(value*numEachPage)
            
        }
    }
    return (
        <>
            <Nav/>
            <div className='product_page'>
                <div className='title'> Apparel</div>

                <div className='filter'>Filter By: 
                    <Select defaultValue="All" style={{ width: 320 }} onChange={onChange}>
                        <Option value="All">All</Option>
                        <Option value="Attack On Titan">Attack On Titan</Option>
                        <Option value="Cosplay">Cosplay</Option>
                        <Option value="Darling In The Franxx">Darling In The Franxx</Option>
                        <Option value="Death Note">Death Note</Option>
                        <Option value="Demon Slayer">Demon Slayer</Option>
                        <Option value="Dragon Ball Z">Dragon Ball Z</Option>
                        <Option value="Hunter X Hunter">Hunter X Hunter</Option>
                        <Option value="Jojos Bizarre Adventure">Jojos Bizarre Adventure</Option>
                        <Option value="Junji Ito">Junji Ito</Option>
                        <Option value="Kawaii">Kawaii</Option>
                        <Option value="My Hero Academia">My Hero Academia</Option>
                        <Option value="Naruto">Naruto</Option>
                        <Option value="Nekomancer">Nekomancer</Option>
                        <Option value="NSFW">NSFW</Option>
                        <Option value="One Piece">One Piece</Option>
                        <Option value="Sad Aesthetic">Sad Aesthetic</Option>
                        <Option value="Sad Girl">Sad Girl</Option>
                        <Option value="Sailor Moon">Sailor Moon</Option>
                        <Option value="Senpai">Senpai</Option>
                        <Option value="Tokyo Ghoul">Tokyo Ghoul</Option>
                        <Option value="Vaporwave">Vaporwave</Option>
                        <Option value="Waifu">Waifu</Option>
                    </Select>
                </div>
                <div className='container'>
                    {data && data.length > 0 &&
                    data.slice(minValue, maxValue).map(item => 
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
                    total={data.length}
                />
            </div>
            <Footer/>
        </>
    )
}

export default Apparel;