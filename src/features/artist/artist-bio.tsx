import {useArtistFromProvider} from "@/providers/artist-provider.tsx";

// interface ArtistBioProps {
//     bio: string;
// }

const ArtistBio = () => { // { bio }: ArtistBioProps
    const {artist} = useArtistFromProvider()

    return (
        <div className="flex flex-col p-4">
            <span>The bio is {artist?.strBiographyEN}</span>
        </div>
    )
}

export default ArtistBio
