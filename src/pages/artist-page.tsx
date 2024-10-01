import {Artist, getArtist} from "@/api/artist-api.ts";
import {useCallback, useEffect, useMemo, useState} from "react";

const ArtistPage = () => {
    const [counter, setCounter] = useState(7)
    const [secondCounter, setSecondCounter] = useState(2)

    const [artist, setArtist] = useState<Artist>()

    async function fetchArtist() {
        try {
            const artistResult = await getArtist(112024)
            if (artistResult) {
                console.log(artistResult[0])
                setArtist(artistResult[0])
            }
        } catch (e) {
            console.log(e);
        }
    }

    function veryDemandingFunction() {
        console.log(secondCounter);
        return secondCounter + 15;
    }

    useEffect(() => {
        fetchArtist()
    }, [counter])

    const expensiveCalculationValue = useMemo(() => counter + 10, [counter])

    const expensiveFunction = useCallback(veryDemandingFunction, [secondCounter])

    return (
        <>
            <div>
                <h1>Artist</h1>
                <span>Our counter is {counter}</span>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>

                <span>Our second counter is {secondCounter}</span>
                <button onClick={() => setSecondCounter(secondCounter + 5)}>Increment</button>
            </div>

            <div>
                <span>The current artist is {artist?.strArtist}</span>
                <span>The current value of our expensive calculation is {expensiveCalculationValue}</span>
                <span>The current value of our expensive function is {expensiveFunction()}</span>
            </div>
        </>
    )
}

export default ArtistPage;
