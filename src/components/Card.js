// card is just presentational
    // all calls to api in cardlist
    // card takes in props
    // card needs:
    //     -message
    //     - button with addLike callback 
    //     -button with delete feature callback
    
const Card = (props) => {
    return(
        <section>
            <h2>{props.card.newMessage}</h2> 
            <button onclick={()=> props.addLikeToCard(props.card)}>🖤
                <div>{props.card.likeCount}</div>
            </button>
            <button onClick={() => props.deleteCard(props.card)}>Delete</button>
        </section>
        
    )
};

export default Card;

