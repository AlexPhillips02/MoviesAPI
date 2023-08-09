import { useEffect, useState } from "react";

function useDebounce(value, delay) {
    const [debouncedValue,setDebouncedValue] = useState()

    useEffect(() => {
        //If end of delay, set value
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);

        //Clear the timeout if value changes
        return () => {
            clearTimeout(handler)
        }
    }, [value,delay])

    return debouncedValue;
}

export default useDebounce;