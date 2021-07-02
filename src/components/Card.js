
const Card = (props) => {
    console.log("Props from Card: ",props)

    return (<div className='card-item'>
        
      
      <p className='card-item__message'>{props.card.message}</p>
      <ul className='card-item__controls'>
        <li><p>{props.card.likes_count} 🌻</p></li>
        <li><p onClick={() => props.plusOneCard(props.card)}>+1</p></li>
        <li><p className='card-item__delete' onClick={() => props.deleteCard(props.card)}>Delete</p></li>
      </ul>
    </div>);
};

export default Card;
