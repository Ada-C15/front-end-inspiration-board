import Card from "./Card"

const CardList = (props) => {

    const listCards = props.oneBoard.cards.map(card => {
        
        return (
        <li key={card.id}>
            <Card id={card.id} message={card.messageData}/> 
        </li>)
    })

    return (
        <section>
            <h2>Cards List</h2>
            <ul>{listCards}</ul>
        </section>
        
    )
}

export default CardList;