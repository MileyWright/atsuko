import { apparel, homegoods, lifestyle, techAccessories, byAnime } from './Dropdown';
import './Nav.css';
import { Link } from 'react-router-dom';
import { Dropdown } from 'antd';
import { DownOutlined, SearchOutlined, HeartFilled, createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', //icon-shoppingcart
    ],
  });
  
const Nav = () => {
    
    return (
        <div className='nav_container'>
            <Link to='/' className='logo'>atsuko</Link>

            <nav className='nav_links'>
                <Dropdown overlay={apparel} className='nav_link'>
                    <Link to='/collection/anime-clothing-apparel'>
                    Apparel <DownOutlined className='arrow'/>
                    </Link>
                </Dropdown>
                <Dropdown overlay={homegoods} className='nav_link'>
                    <Link to='/collections/anime-homegoods'>
                    Homegoods <DownOutlined className='arrow'/>
                    </Link>
                </Dropdown>
                <Dropdown overlay={lifestyle} className='nav_link'>
                    <Link to='/collection/vaporwave-aesthetic-clothing-tees-hoodies-merch'>
                    Lifestyle <DownOutlined className='arrow'/>
                    </Link>
                </Dropdown>
                <Dropdown overlay={techAccessories} className='nav_link'>
                    <Link to='/collection/anime-tech-accessories'>
                    Tech Accessories <DownOutlined className='arrow'/>
                    </Link>
                </Dropdown>
                <Dropdown overlay={byAnime} className='nav_link'>
                    <Link to='/collection/all-anime-merch'>
                    By Anime <DownOutlined className='arrow'/>
                    </Link>
                </Dropdown>
            </nav>

            <div className='nav_icons'>
                <SearchOutlined className='nav_icon'/>
                <HeartFilled className='nav_icon'/>
                <IconFont type="icon-shoppingcart" className='nav_icon'/>
            </div>
        </div>
    )
}

export default Nav;