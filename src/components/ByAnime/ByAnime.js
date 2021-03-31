import { useState, useEffect } from 'react';
import {Nav, Footer, Card} from '../index';
import '../Apparel/Apparel.css';
import {apparel, homegoods, techAccessories} from '../../seed';
import { Pagination, Select } from 'antd';
import { Link } from 'react-router-dom';

const { Option } = Select;
const combineProduct = apparel.concat(homegoods).concat(techAccessories).filter(item=> {
    return item.keywords.includes('Attack On Titan') + item.keywords.includes('Darling In The Franxx') + item.keywords.includes('Demon Slayer')
    + item.keywords.includes('Death Note') + item.keywords.includes('Jojos Bizarre') + item.keywords.includes('Tokyo Ghoul')
    + item.keywords.includes('Dragon Ball Z') + item.keywords.includes('Hunter X Hunter') + item.keywords.includes('My Hero Academia')
    + item.keywords.includes('My Neighbor Totoro') + item.keywords.includes('Naruto') + item.keywords.includes('One Piece')
    + item.keywords.includes('Sailor Moon')
});

const initialState = combineProduct.sort((a, b) => {
    if (a.id < b.id) {
        return -1
    }
    if (a.id > b.id) {
        return 1
    }
    return 0
});
const ByAnime = () => {
    const numOnEachPage = 18;
    const [data, setData] = useState(initialState);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(numOnEachPage);
    console.log(combineProduct)
    useEffect(()=> {
        
    })
    const filterOnChange = value => { 
        if(value === 'All'){
            return setData(initialState)
        } else{
            const filteredData = initialState;
            const filter = filteredData.filter(item => {
                return item.keywords.includes(value)});
            return setData(filter);
        }
      }
     
    const sortByOnChange = value => {
        if(value === 'Best selling'){
            const sorting = data.sort((a, b) => {
                if (a.id < b.id) {//sort string ascending
                    return -1
                } 
                if (a.id > b.id){
                    return 1
                }
                return 0;
            })
            const newArr=[]
            for(let i = 0; i < sorting.length; i++){
                newArr.push(sorting[i])
            }
            setData(newArr)
        } else if (value === 'Alphabetically, A-Z') {
            const sorting = data.sort((a, b) => {
                const nameA= a.name.toLowerCase(), nameB= b.name.toLowerCase();
                if (nameA < nameB){ //sort string ascending
                    return -1 }
                if (nameA > nameB){
                    return 1}
                return 0;
            })
            const newArr=[]
            for(let i = 0; i < sorting.length; i++){
                newArr.push(sorting[i])
            }
            setData(newArr)
        } else if (value === 'Alphabetically, Z-A') {
            const sorting = data.sort((a, b) => {
                const nameA= a.name.toLowerCase(), nameB= b.name.toLowerCase();
                if (nameA > nameB) //sort string descending
                    return -1 
                if (nameA < nameB)
                    return 1
                return 0;
            })
            const newArr=[]
            for(let i = 0; i < sorting.length; i++){
                newArr.push(sorting[i])
            }
            setData(newArr)
        } else if (value === 'Price, low to high') {
            const sorting = data.sort((a, b) => {
                if (a.price < b.price) //sort string ascending
                    return -1 
                if (a.price > b.price)
                    return 1
                return 0;
            })
            const newArr=[...sorting]
            setData(newArr)
        } else if (value === 'Price, high to low') {
            const sorting = data.sort((a, b) => {
                if (a.price > b.price) //sort string descending
                    return -1 
                if (a.price > b.price)
                    return 1
                return 0;
            })
            const newArr = [...sorting]
            setData(newArr)
        } else{
            console.log("no")
        }
    }   
    const handleChange = value => {
        if (value <= 1) {
            setMinValue(0)
            setMaxValue(numOnEachPage)
        } else {
            setMinValue((value-1) * numOnEachPage) 
            setMaxValue(value*numOnEachPage)
        }
    }

    return (
        <>
            <Nav/>
            <div className='product_page'>
                <div className='title'> By Anime</div>

                <div className='filter'>Filter by 
                    <Select defaultValue="All" style={{ width: 320 }} onChange={filterOnChange} className='select'>
                        <Option value="All">All</Option>
                        <Option value="Attack On Titan">Attack On Titan</Option>
                        <Option value="Darling In The Franxx">Darling In The Franxx</Option>
                        <Option value="Death Note">Death Note</Option>
                        <Option value="Demon Slayer">Demon Slayer</Option>
                        <Option value="Dragon Ball Z">Dragon Ball Z</Option>
                        <Option value="Hunter X Hunter">Hunter X Hunter</Option>
                        <Option value="Jojos Bizarre Adventure">Jojos Bizarre Adventure</Option>
                        <Option value="Kawaii">Kawaii</Option>
                        <Option value="My Hero Academia">My Hero Academia</Option>
                        <Option value="Naruto">Naruto</Option>
                        <Option value="NSFW">NSFW</Option>
                        <Option value="One Piece">One Piece</Option>
                        <Option value="Sad Aesthetic">Sad Aesthetic</Option>
                        <Option value="Sad Girl">Sad Girl</Option>
                        <Option value="Sailor Moon">Sailor Moon</Option>
                        <Option value="Tokyo Ghoul">Tokyo Ghoul</Option>
                        <Option value="Vaporwave">Vaporwave</Option>
                        <Option value="Waifu">Waifu</Option>
                    </Select>
                </div>
                <div className='sortBy'> Sort by
                <Select defaultValue="Best selling" style={{ width: 170 }} onChange={sortByOnChange} className='select' >
                        <Option value="Best selling">Best selling</Option>
                        <Option value="Alphabetically, A-Z">Alphabetically, A-Z</Option>
                        <Option value="Alphabetically, Z-A">Alphabetically, Z-A</Option>
                        <Option value="Price, low to high">Price, low to high</Option>
                        <Option value="Price, high to low">Price, high to low</Option>
                    </Select>
                </div>
                <div className='container'>
                    {data && data.length > 0 &&
                    data.slice(minValue, maxValue).map(item => {
                        const productUrl = item => {
                            if (item.category === 'apparel'){
                                if(item.keywords.includes('Vaporwave')){
                                    return 'vaporwave-aesthetic-clothing-tees-hoodies-merch'
                                } else if(item.keywords.includes('Sad Aesthetic')){
                                    return 'sad-aesthetic'
                                } else if(item.keywords.includes('NSFW')){
                                    return 'nsfw-anime-merch'
                                } else if(item.keywords.includes('Kawaii')){
                                    return 'kawaii-livestyle-accessories'
                                } else if(item.keywords.includes('Senpai')){
                                    return 'japanese-senpai-shirts-and-hoodies'
                                } else if(item.keywords.includes('Waifu')){
                                    return 'japanese-waifu-shirts-and-hoodies'
                                } else if(item.keywords.includes('Cosplay')){
                                    return 'anime-weeb-cosplay-accessories'
                                } else if(item.keywords.includes('Shirt')){
                                    return 'anime-tee-shirts'
                                } else if(item.keywords.includes('Hoodie')){
                                    return 'anime-hoodies-and-sweatshirts'
                                } else if(item.keywords.includes('Socks')){
                                    return 'anime-socks'
                                }
                            
                            } else if (item.category === 'homegoods'){
                                if (item.keywords.includes('Lights')){
                                    return '3d-led-anime-bedroom-lights-lamps'
                                } else if (item.keywords.includes('Pillow')){
                                    return 'anime-kawaii-cartoon-bedroom-pillows'
                                }
                            } else if (item.category === 'techAccessories'){
                                if (item.keywords.includes('Airpod')){
                                    return 'anime-airpod-1-2-pro-cases'
                                } else if (item.keywords.includes('Phone')){
                                    return 'anime-phone-cases'
                                }
                            }
                        }
                        return(
                            <Link to={`/collections/${productUrl(item)}/products/${item.id}`} className='link overlay'key={item.id}>
                                <Card className='product_card 'item={item} key={item.id}/>
                            </Link>
                        )
                    })}
                </div>
                <Pagination
                    className='pagination'
                    defaultPageSize={numOnEachPage}
                    showSizeChanger={false}
                    onChange={handleChange}
                    total={data.length}
                />
            </div>
            <Footer/>
        </>
    )
}

export default ByAnime;