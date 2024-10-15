import {useCallback, useMemo, useState} from "react";
import useCustomState from "@/lib/use-custom-state.tsx";
// import {useArtist} from "@/api/artist/queries/use-artist.tsx";
// import {useParams} from "react-router-dom";
import ArtistInfo from "@/features/artist/artist-info.tsx";
import {useArtistFromProvider} from "@/providers/artist-provider.tsx";

const ArtistPage = () => {
    // const { artistId } = useParams();
    const { counter, increment, decrement } = useCustomState(35);
    const [secondCounter, setSecondCounter] = useState(2)
    // const {artist, artistLoading, artistError, fetch} = useArtist(artistId)

    const {artist, artistLoading, artistError} = useArtistFromProvider()

    function veryDemandingFunction() {
        console.log(secondCounter);
        return secondCounter + 15;
    }

    const expensiveCalculationValue = useMemo(() => counter + 10, [counter])

    const expensiveFunction = useCallback(veryDemandingFunction, [secondCounter])

    return (
        <>
            <div className="flex flex-col p-4">
                <h1>Artist</h1>
                <span>Our counter is {counter}</span>
                <button className="border-2 w-32 border-black" onClick={() => increment()}>Increment
                </button>
                <button className="border-2 w-32 border-black" onClick={() => decrement()}>Decrement
                </button>

                <span>Our second counter is {secondCounter}</span>
                <button className="border-2 w-32 border-black"
                        onClick={() => setSecondCounter(secondCounter + 5)}>Increment
                </button>
            </div>

            <div className="flex flex-col p-4">
                {artistLoading && <span>Loading artist...</span>}
                {artistError && <span>{artistError.message}</span>}

                {artist && <ArtistInfo />}

                {/*<button className="border-2 w-32 border-black" onClick={() => fetch()}>Refetch</button>*/}

                <span>The current value of our expensive calculation is {expensiveCalculationValue}</span>
                <span>The current value of our expensive function is {expensiveFunction()}</span>
            </div>
        </>
    )
}

export default ArtistPage;
