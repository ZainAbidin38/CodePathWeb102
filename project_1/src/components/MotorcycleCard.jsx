import '../MotorcycleCard.css'

const MotorcycleCard = ({ image, title, description, link }) => {
    return (
        <div className="motorcycle-card">
            <img src={image} alt={title} className="motorcycle-image" />
            <div className="motorcycle-title">{title}</div>
            <div className="motorcycle-description">{description}</div>
            {link ? (
                <a href={link} className='details-button' target='_blank' rel='noopener noreferrer'>
                    View Details
                </a>
            ) : (
                <button className='details-button' disabled>
                    Details Coming Soon
                </button>
            )}
        </div>
    )
}

export default MotorcycleCard;