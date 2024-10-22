// import {useArtistFromProvider} from "@/providers/artist-provider.tsx";
import {useParams} from "react-router-dom";
import {useArtistQuery} from "@/api/artist/queries/artist-queries.ts";

// interface ArtistBioProps {
//     bio: string;
// }

const ArtistBio = () => { // { bio }: ArtistBioProps
    // const {artist} = useArtistFromProvider()

    const { artistId } = useParams();

    const { data: artist } = useArtistQuery(artistId || "")

    return (
        <div className="flex flex-col p-4">
            <span>The bio is {artist?.[0]?.strBiographyEN}</span>
        </div>
    )
}

export default ArtistBio
