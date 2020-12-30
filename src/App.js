import React, {useState} from 'react';
import Home from './components/Home/Home';
import { techAccessories } from './seed';
const App = () => {
    const [data]= useState(techAccessories)
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