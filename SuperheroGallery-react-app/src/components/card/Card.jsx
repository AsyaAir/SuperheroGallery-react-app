import './Card.css';

const Card = ({ card }) => {
    return (
        <div className="card">
            <img src={card.url} alt={card.name} className="card__image" />
            <div className="card__content">
            <h2 className="card__title">{card.name}</h2>
            <p><strong>Вселенная:</strong> {card.universe}</p>
            <p><strong>Альтер эго:</strong> {card.alterego}</p>
            <p><strong>Профессия:</strong> {card.occupation}</p>
            <p><strong>Друзья:</strong> {card.friends}</p>
            <p><strong>Суперспособности:</strong> {card.superpowers}</p>
            <p className="card__info">{card.info}</p>
            </div>
        </div>
        );
    };
    
export default Card;