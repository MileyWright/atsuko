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
                    <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
                </Menu>

            </Drawer>
            <Link to='/' className='logo'>atsuko</Link>

            <nav className='nav_links' >
                <Dropdown overlay={apparel} className='nav_link'>
                    <Link to='/collections/anime-clothing-apparel'>
                    Apparel <DownOutlined className='arrow'/>
                    </Link>
                </Dropdown>
                <Dropdown overlay={homegoods} className='nav_link'>
                    <Link to='/collections/anime-homegoods'>
                    Homegoods <DownOutlined className='arrow'/>
                    </Link>
                </Dropdown>
                <Dropdown overlay={lifestyle} className='nav_link'>
                    <Link to='/collections/vaporwave-aesthetic-clothing-tees-hoodies-merch'>
                    Lifestyle <DownOutlined className='arrow'/>
                    </Link>
                </Dropdown>
                <Dropdown overlay={techAccessories} className='nav_link'>
                    <Link to='/collections/anime-tech-accessories'>
                    Tech Accessories <DownOutlined className='arrow'/>
                    </Link>
                </Dropdown>
                <Dropdown overlay={byAnime} className='nav_link'>
                    <Link to='/collections/all-anime-merch'>
                    By Anime <DownOutlined className='arrow'/>
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