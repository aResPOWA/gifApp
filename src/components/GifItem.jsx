export const GifItem = ({title, url}) => {
    return (
        <div className="card">
            <figure>
                <img src={url} alt={title} />
                <figcaption>{title}</figcaption>
            </figure>
        </div>
    )
}
