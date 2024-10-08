import axios from 'axios';

export interface Artist {
    strArtist: string;
    strLabel: string;
    strBiographyEN: string;
    strArtistThumb: string;
}

interface ArtistRequest {
    artists?: Artist[]
}

export const getArtist = async (artistId: string): Promise<Artist[] | undefined> => {
    return (await axios.get<ArtistRequest>(`/artist.php?i=${artistId}`)).data.artists
}
