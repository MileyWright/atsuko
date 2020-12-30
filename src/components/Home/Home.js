

const Home = (props) => {
console.log(props)
    return (
        <>
            <img src={process.env.PUBLIC_URL + props.item.photo}/>
            {props.item.name}
            Price: ${props.item.price}
        </>
    )
}

export default Home;