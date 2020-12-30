import React, {useState} from 'react';
import Home from './components/Home/Home';
import { apparel } from './seed';
const App = () => {
    const [data]= useState(apparel)
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