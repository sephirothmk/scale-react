import axios from 'axios';

export interface Artist {
    strArtist: string;
}

interface ArtistRequest {
    artists?: Artist[]
}

export const getArtist = async (artistId: number): Promise<Artist[] | undefined> => {
    return (await axios.get<ArtistRequest>(`/artist.php?i=${artistId}`)).data.artists
}
