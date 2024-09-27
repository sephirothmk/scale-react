import {useState} from "react";

const HomePage = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 className="text-3xl font-bold underline">Vite + React</h1>
            <div>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>

            </div>
        </>
    )
}

export default HomePage;
