import { useState } from "react";

export const useCounter = (initialState) => {
    const [counter, setCounter] = useState(initialState);

    const handleNext = () => {
        setCounter(counter + 1);
    };

    const handlePrevious = () => {
        if (counter >= 1) {
            setCounter(counter - 1);
        }
    };

    return {
        counter, 
        handleNext, 
        handlePrevious
    };
};