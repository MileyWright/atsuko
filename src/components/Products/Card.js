import './Card.css';

const Card = (props) => {
    
    return(
        <div className='card'>
            <img src={props.item.photo} alt={props.item.name}/>
            <p>{props.item.name}</p>
            <p>${props.item.price}</p>
        </div>
    )
}
export default Card;