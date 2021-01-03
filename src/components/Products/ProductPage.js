import { useParams } from 'react-router-dom';
import {apparel} from '../../seed';

const ProductPage = () => {
    const {id} = useParams();

    const filteredProduct = apparel.find(item=> {
        return item.id === id
    })

    return(
        <>
        product
        <img src={filteredProduct.photo}/>
        {filteredProduct.name}
        </>
    )
}

export default ProductPage;