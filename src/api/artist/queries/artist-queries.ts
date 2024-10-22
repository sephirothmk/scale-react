import {useQuery} from "@tanstack/react-query";
import {getArtist} from "@/api/artist/artist-api.ts";

export function useArtistQuery(artistId: string) {
    return useQuery({
        queryFn: () => getArtist(artistId),
        queryKey: [`artist_${artistId}`],
        // refetchInterval: 5000
    })
}
