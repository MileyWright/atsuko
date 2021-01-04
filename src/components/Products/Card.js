import './Card.css';

const Card = (props) => {
    console.log(props.item.media.source)
    return(
        <div className='card'>
            <img src={props.item.media.source} alt={props.item.name}/>
            <p>{props.item.name}</p>
            <p>{props.item.price.formatted_with_symbol}</p>
        </div>
    )
}
export default Card;