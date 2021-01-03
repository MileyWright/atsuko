import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';


import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <>
            <div className='shipping_notice_container'>
                <FontAwesomeIcon icon={faShippingFast} className='icon' />
                <p>Shipping Delay Notice</p>
                <p>Due to Covid delays, orders may take 2 - 3 weeks to arrive.  We hope you still love us.</p>
                <p><strong>(づ｡◕‿‿◕｡)づ</strong></p>
            </div>
            
            <div className='footer'>
                <div className='grid_list'>
                    <div className='box_item'>Quick Links</div>
                    <Link to='/shipping-and-returns-refund-policy' className='box_item link'>Shipping Info</Link>
                    <Link to='/pages/contact-us' className='box_item link'>Contact Us</Link>
                    <Link to='/policies/refund-policy' className='box_item link'>Refund Policy</Link>
                    <Link to='/policies/privacy-policy' className='box_item link'>Privacy Policy</Link>
                    <Link to='/policies/terms-of-service' className='box_item link'>Terms of Service</Link>
                </div>
                <div className='grid_list'>
                    <div className='box_item'>Follow Us</div>
                    <Link to='/' className='box_item link'> <FontAwesomeIcon icon={faFacebookF} className='icon' /> Facebook</Link>
                    <Link to='/' className='box_item link'><FontAwesomeIcon icon={faInstagram} className='icon' /> Instagram</Link>
                </div>
                <div className='grid_list'>
                    <div className='box_item'>Subscribe To Our Newsletter</div>
                    <p>We'll only send you coupons and cool stuff. We swear.</p>
                </div>
                <div className='grid_list'>
                    <div className='box_item'>Contact Us</div>
                    <p>Hit us up!</p>
                </div>
            </div>
        </>
    )
}

export default Footer;