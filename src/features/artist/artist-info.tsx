import {Artist} from "@/api/artist/artist-api.ts";
import ArtistBio from "@/features/artist/artist-bio.tsx";
import ArtistImage from "@/features/artist/artist-image.tsx";

interface ArtistInfoProps {
    artist: Artist;
}

const ArtistInfo = ({ artist }: ArtistInfoProps) => {
    return (
        <div className="flex flex-col p-4">
            <span>The current artist is {artist.strArtist}</span>
            <span>The label is {artist.strLabel}</span>
            <ArtistImage img={artist.strArtistThumb} />
            <ArtistBio bio={artist.strBiographyEN} />
        </div>
    )
}

export default ArtistInfo
