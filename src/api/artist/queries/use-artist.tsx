import {useEffect, useState} from "react";
import {Artist, getArtist} from "@/api/artist/artist-api.ts";
import {delay} from "@/lib/utilities.ts";

export const useArtist = (artistId: string | undefined) => {
    const [artist, setArtist] = useState<Artist>()
    const [artistLoading, setArtistLoading] = useState<boolean>(false)
    const [artistError, setArtistError] = useState<Error>()
    const [fetchAgain, setFetchAgain] = useState<number>(0);

    async function fetchArtist() {
        setArtistLoading(true)

        if (artist) {
            console.log('Artist is cached')
            setArtistLoading(false);
            return
        }

        try {
            await delay(3000)
            if (artistId) {
                const artistResult = await getArtist(artistId)
                if (artistResult) setArtist(artistResult[0])
            }
        } catch (err) {
            if (err instanceof Error) {
                setArtistError(err);
            }
        } finally {
            setArtistLoading(false)
        }
    }

    const fetch = () => {
        setArtistLoading(true)
        setFetchAgain(fetchAgain + 1)
    }

    useEffect(() => {
        fetchArtist()
    }, [fetchAgain])

    return { artist, artistError, artistLoading, fetch }
}
