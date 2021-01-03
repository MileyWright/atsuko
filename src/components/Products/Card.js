import './Card.css';

const Card = (props) => {
    return(
        <div className='card'>
            <img src={props.item.photo} alt={props.item.name}/>
        </div>
    )
}
export default Card;