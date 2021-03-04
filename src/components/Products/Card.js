import './Card.css';

const Card = (props) => {
    console.log(props.item.name)
    return(
        <div className={`card ${props.miniTop}`} id={props.mini} >
            <img src={props.item.photo} alt={props.item.name}/>
            <p>{props.item.name}</p>
            <p>{props.item.price}</p>
        </div>
    )
}
export default Card;