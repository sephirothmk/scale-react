interface ArtistBioProps {
    bio: string;
}

const ArtistBio = ({ bio }: ArtistBioProps) => {
    return (
        <div className="flex flex-col p-4">
            <span>The bio is {bio}</span>
        </div>
    )
}

export default ArtistBio
