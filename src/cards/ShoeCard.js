
export const ShoeCard = ({ img, title, category, newPrice }) => {
    
    const truncateTitle = title.length > 15 ? title.slice(0, 15) + "..." : title
    return (
        <div className="card">
            <img src={img} alt={title} />
            <h1>{truncateTitle}</h1>
            <h4>{category}</h4>
            <h3>{`$${newPrice}`}</h3>
        </div>
    )
}
