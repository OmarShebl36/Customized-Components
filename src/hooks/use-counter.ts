import { useState, useEffect } from "react";

function useCounter(initialCount: number) {
    const [count, setcount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    }, [count]);

    const increment = () => {
        setcount(count + 1);
    };
    return { count, increment };
}

export default useCounter;
