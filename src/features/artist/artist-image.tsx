// import {useArtistFromProvider} from "@/providers/artist-provider.tsx";
import {useParams} from "react-router-dom";
import {useArtistQuery} from "@/api/artist/queries/artist-queries.ts";

// interface ArtistImageProps {
//     img: string;
// }

const ArtistImage = () => { //{ img }: ArtistImageProps
    // const {artist} = useArtistFromProvider()

    const { artistId } = useParams();

    const { data: artist } = useArtistQuery(artistId || "")

    return (
        <div className="flex flex-col p-4">
            <img alt="Artist image" src={artist?.[0]?.strArtistThumb} />
        </div>
    )
}

export default ArtistImage
