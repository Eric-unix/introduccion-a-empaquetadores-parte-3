 import React, {useCallback,  useState} from 'react';


 const App = (props: {message: string}) => {
    const [count, setCount]= useState(0);

    const Increment = useCallback(() => {
        setCount((count) => count +1);
    }, [count]);
    return(
        <>
            <h1>{props.message}</h1>
            <h2>Count: {count}</h2>
            <button>Increment</button>
        </>
    )
 };

 export default App;