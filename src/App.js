import React, {useState} from 'react';
import Home from './components/Home/Home';
import { homegoods } from './seed';
const App = () => {
    const [data]= useState(homegoods)
    console.log(data)
    return(
        <>
        
        {data.map(item=>( 
            <Home item={item}/>
        ))}
        
        </>
    )
}

export default App;