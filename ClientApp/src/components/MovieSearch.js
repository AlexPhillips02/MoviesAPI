import React, {useState} from "react";
import FetchMovies from "./FetchMovies";
import useDebounce from "./hooks/useDebounce";

const MovieSearch = () => {
    const defaultValue = "Toy Story";

    const [input, setInput] = useState(defaultValue);
    const value = useDebounce(input, 500); //After .5 seconds, set value from input

    function handleChange(e) 
    {
        const newInputValue = e.target.value;
        setInput(newInputValue);

        console.log("Actual Value: " + newInputValue);
        console.log("Debounced Value: " + value);
    }

    return (
    <div>
        <input type="text" defaultValue={defaultValue} onChange={handleChange}/>
        <FetchMovies title={value} />
    </div>)
}

export default MovieSearch;