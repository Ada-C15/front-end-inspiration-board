import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';


const Card = (props) => {

    const [newMessage, setNewMessage] = useState({'message': ''});

    const [showEditBox, setShowEditBox] = useState(false)

    const editButtonClick = () => {
        setShowEditBox(!showEditBox);
    }

    const upvoteClick = () => {
        const selectedCardId = props.id
        props.upvoteCard(selectedCardId);

    };

    const deleteCardClick = () => {
        const selectedCardId = props.id
        props.deleteCard(selectedCardId)
    };

    const onMessageChange = (message) => {
        setNewMessage({
            ...newMessage,
            'message': message.target.value
        })
    }

    const onSubmitMessage = () => {
        props.editCard(props.id, newMessage);
        setShowEditBox(!showEditBox)
    };

    return (

      <section>
          <ul>
              <li>Sticky Note: { props.id }</li>
              <li>Board ID: { props.boardId }</li>
              <button type='button' onClick={upvoteClick}> Upvote: {props.likesCount}</button>
              <button type='button' onClick={deleteCardClick}>Delete</button>
              <>
                  {showEditBox ? (
                  <>
                      <textarea defaultValue={props.message} onChange={ onMessageChange }></textarea>
                      <button onClick={() => onSubmitMessage(newMessage)}>Save</button>
                  </>
                  ) : <li>Message: { props.message }</li>}
                  </>
              <button type='button' onClick={editButtonClick}>Edit</button>
          </ul>
      </section>

    )
}

export default Card;


Card.propTypes = {
id: PropTypes.number.isRequired,
message: PropTypes.string.isRequired,
likesCount: PropTypes.number.isRequired,
boardId: PropTypes.number.isRequired,
upvoteCard: PropTypes.func.isRequired,
deleteCard: PropTypes.func.isRequired

}

