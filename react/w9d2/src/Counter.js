
export default function Counter ({counter, setCounter} ) {

    
    const addCount = () => {
        setCounter(counter + 1)
    };
    const subtractCount = () => {
        setCounter(counter - 1)
    };
    return(
    <>
       <span>Current Count: {counter}</span> 
       <section>
            <button onClick = {addCount}> +</button>
            <button onClick = {subtractCount}> - </button>
       </section>
    </>
    )
}