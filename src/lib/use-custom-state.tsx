import {useState} from "react";

const useCustomState = (defaultValue: number) => {
    const [counter, setCounter] = useState<number>(defaultValue);
    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)

    return { counter, increment, decrement }
}

export default useCustomState;
