import {useArtistFromProvider} from "@/providers/artist-provider.tsx";

// interface ArtistImageProps {
//     img: string;
// }

const ArtistImage = () => { //{ img }: ArtistImageProps
    const {artist} = useArtistFromProvider()

    return (
        <div className="flex flex-col p-4">
            <img alt="Artist image" src={artist?.strArtistThumb} />
        </div>
    )
}

export default ArtistImage
