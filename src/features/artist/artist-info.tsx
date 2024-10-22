// import {Artist} from "@/api/artist/artist-api.ts";
import ArtistBio from "@/features/artist/artist-bio.tsx";
import ArtistImage from "@/features/artist/artist-image.tsx";
import {useArtistQuery} from "@/api/artist/queries/artist-queries.ts";
import {useParams} from "react-router-dom";
// import {useArtistFromProvider} from "@/providers/artist-provider.tsx";

// interface ArtistInfoProps {
//     artist: Artist;
// }

const ArtistInfo = () => { // { artist }: ArtistInfoProps
    // const {artist} = useArtistFromProvider()
    const { artistId } = useParams();

    const { data: artist } = useArtistQuery(artistId || "")

    return (
        <div className="flex flex-col p-4">
            <span>The current artist is {artist?.[0]?.strArtist}</span>
            <span>The label is {artist?.[0]?.strLabel}</span>
            <ArtistImage />
            <ArtistBio />
        </div>
    )
}

export default ArtistInfo
