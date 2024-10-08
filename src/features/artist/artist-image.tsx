interface ArtistImageProps {
    img: string;
}

const ArtistImage = ({ img }: ArtistImageProps) => {
    return (
        <div className="flex flex-col p-4">
            <img alt="Artist image" src={img} />
        </div>
    )
}

export default ArtistImage
