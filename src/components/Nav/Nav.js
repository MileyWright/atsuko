import {useState} from 'react';
import { apparel, homegoods, lifestyle, techAccessories, byAnime } from './Dropdown';
import './Nav.css';
import { Link } from 'react-router-dom';
import { Dropdown, Drawer, Input, Menu } from 'antd';
import { DownOutlined, SearchOutlined, HeartFilled, createFromIconfontCN, UserOutlined, MenuOutlined } from '@ant-design/icons';
import {SearchInput} from './Style';
const IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', //icon-shoppingcart
    ],
  });
const { Search } = Input;
const { SubMenu } = Menu;
const Nav = () => {
    const [searchActive, SetSearchActive] = useState(false);
    const [searchTerm, SetSearchTerm] = useState([]);
    const [visible, setVisible] = useState(false);

    const onSearch  = e => console.log(e);
    const showDrawer = () => {
        setVisible(true);
    }

    const onClose = () => {
        setVisible(false);
    }

    const search = (e) => {
        e.preventDefault();
    }

    return (
        <div className='nav_container' id='product'>
            <MenuOutlined className='nav_drawer'onClick={showDrawer}/>
            <Drawer placement="left" onClose={onClose} visible={visible}>
                <div className='drawerSearch'>
                    <Search 
                        placeholder='Search'
                        allowClear 
                        onSearch={onSearch} 
                        style={{ width: 200 }} 
                    />
                </div>
                <Menu
                    style={{ width: 220 }}
                    mode="inline"
                >
                    <SubMenu key='sub1' title="Shop">
                        <Menu.Item key="1"><Link to='/collections/anime-clothing-apparel'>Best Selling</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/collections/anime-tee-shirts'>Tee Shirts</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/collections/anime-hoodies-and-sweatshirts'>Hoodies</Link></Menu.Item>
                        <Menu.Item key="4"><Link to='/collections/anime-socks'>Socks</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key='sub2' title="Accessories">
                        <Menu.Item key="1"><Link to='/collections/anime-phone-cases'>Phone Cases</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/collections/anime-airpod-1-2-pro-cases'>AirPod Cases</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key='sub3' title="Home Goods">
                        <Menu.Item key="1"><Link to='/collections/anime-homegoods'>All Homegoods</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/collections/3d-led-anime-bedroom-lights-lamps'>3D LED Lights</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/collections/anime-kawaii-cartoon-bedroom-pillows'>Pillows</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key='sub4' title="Collections">
                        <Menu.Item key="1"><Link to='/collections/sad-aesthetic'>Sad Aesthetic</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/collections/vaporwave-aesthetic-clothing-tees-hoodies-merch'>Vaporwave</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/collections/nsfw-anime-merch'>NSFW</Link></Menu.Item>
                        <Menu.Item key="4"><Link to='/collections/kawaii-livestyle-accessories'>Kawaii</Link></Menu.Item>
                        <Menu.Item key="5"><Link to='/collections/japanese-senpai-shirts-and-hoodies'>Senpai</Link></Menu.Item>
                        <Menu.Item key="6"><Link to='/collections/japanese-waifu-shirts-and-hoodies'>Waifu</Link></Menu.Item><Menu.Item key="3"><Link to='/collections/nsfw-anime-merch'>NSFW</Link></Menu.Item>
                        <Menu.Item key="7"><Link to='/collections/anime-weeb-cosplay-accessories'>Cosplay</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key='sub5' title="Official Merch">
                        <Menu.Item key="1"><Link to='/collections/all-anime-merch'>Best Selling</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/collections/attack-on-titan-anime-merch'>Attack On Titan</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/collections/darling-in-the-franxx-anime-weeb-merch'>Darling In The Franxx</Link></Menu.Item>
                        <Menu.Item key="4"><Link to='/collections/demon-slayer-anime-merch'>Demon Slayer</Link></Menu.Item>
                        <Menu.Item key="5"><Link to='/collections/dragon-ball-z-anime-merch'>Dragon Ball Z</Link></Menu.Item>
                        <Menu.Item key="6"><Link to='/collections/hunter-x-hunter-anime-merch'>Hunter X Hunter</Link></Menu.Item>
                        <Menu.Item key="7"><Link to='/collections/my-hero-academia-anime-merch'>My Hero Academia</Link></Menu.Item>
                        <Menu.Item key="8"><Link to='/collections/my-neighbor-totoro-anime-merch'>My Neighbor Totoro</Link></Menu.Item>
                        <Menu.Item key="9"><Link to='/collections/naruto-anime-merch'>Naruto</Link></Menu.Item>
                        <Menu.Item key="10"><Link to='/collections/one-piece-anime-merch'>One Piece</Link></Menu.Item>
                        <Menu.Item key="11"><Link to='/collections/sailor-moon-anime-merch'>Sailor Moon</Link></Menu.Item>
                    </SubMenu>
                </Menu>

            </Drawer>
            <Link to='/' className='logo'>atsuko</Link>

            <nav className='nav_links' >
                <Dropdown overlay={apparel} className='nav_link'>
                    <Link to='/collections/anime-clothing-apparel'>
                    Shop <DownOutlined className='arrow'/>
                    </Link>
                </Dropdown>
                <Dropdown overlay={homegoods} className='nav_link'>
                    <Link to='/collections/anime-homegoods'>
                    Homegoods <DownOutlined className='arrow'/>
                    </Link>
                </Dropdown>
                <Dropdown overlay={byAnime} className='nav_link'>
                    <Link to='/collections/all-anime-merch'>
                    Brands <DownOutlined className='arrow'/>
                    </Link>
                </Dropdown>
                <Dropdown overlay={lifestyle} className='nav_link'>
                    <Link to='/collections/vaporwave-aesthetic-clothing-tees-hoodies-merch'>
                    Collections <DownOutlined className='arrow'/>
                    </Link>
                </Dropdown>
                <Dropdown overlay={techAccessories} className='nav_link'>
                    <Link to='/collections/anime-tech-accessories'>
                    Tech Accessories <DownOutlined className='arrow'/>
                    </Link>
                </Dropdown>
            </nav>
            <div className='search'>
                    <SearchOutlined className='search_icon' onClick={() => SetSearchActive((searchActive) => !searchActive)}/>
                    <SearchInput 
                        className="searchInput"
                        value={searchTerm}
                        // onChange={({target}) => SetSearchActive(target.value)}
                        placeholder="Search"
                        active={searchActive}
                        onSubmit={search}
                    />
            </div>
            <div className='nav_icons'>
               
                <UserOutlined className='nav_icon stay'/>
                <HeartFilled className='nav_icon stay'/>
                <IconFont type="icon-shoppingcart" className='nav_icon stay'/>
            </div>
        </div>
    )
}

export default Nav;