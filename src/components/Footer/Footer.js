import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'

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
                
            </div>
        </>
    )
}

export default Footer;