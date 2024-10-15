import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { delay } from "@/lib/utilities.ts";
import {Artist, getArtist} from "@/api/artist/artist-api.ts";
import {useParams} from "react-router-dom";

type ArtistProviderProps = {
    children: ReactNode
}

type ArtistProviderState = {
    artist: Artist | undefined
    artistError: Error | undefined
    artistLoading: boolean
}

const initialState: ArtistProviderState = {
    artist: undefined,
    artistError: undefined,
    artistLoading: false
}

const ArtistProviderContext = createContext<ArtistProviderState>(initialState)

export function ArtistProvider({ children, ...props }: ArtistProviderProps) {
    const { artistId } = useParams();

    const [artist, setArtist] = useState<Artist>();
    const [artistError, setError] = useState<Error>();
    const [artistLoading, setLoading] = useState(false);

    const fetchArtist = async () => {
        setLoading(true);

        if (artist) {
            console.log('Artist is cached')
            return
        }

        try {
            await delay(3000)
            if (artistId) {
                const artistResult = await getArtist(artistId)
                if (artistResult) setArtist(artistResult[0])
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log('from provider')
        fetchArtist();
    }, [])

    const value = {
        artist,
        artistError,
        artistLoading
    }

    return (
        <ArtistProviderContext.Provider {...props} value={value}>
            {children}
        </ArtistProviderContext.Provider>
    )
}

export const useArtistFromProvider = () => {
    const context = useContext(ArtistProviderContext)
    if (context === undefined) throw new Error('useArtist must be used within a ArtistProvider')
    return context
}
