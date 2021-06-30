import React, {useState} from 'react';
import axios from "axios";

//need to connect NewCardForm to Selected Board & BoardsList
const NewCardForm = (props) => {
    const [message, setTitle] = useState("");
    
    const newCard = (board_id) => {
        // alert(title);
        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}/cards`, {"message":message})
            .then((response) => {
            console.log(
                "...",
                response.data
            );
        })

        //.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}/cards’ ….


        // .catch((error) => {
        // console.log(
        //     "...",
        //     error.response.status
        // );
        // console.log(
        //     "...",
        //     error.response.data
        // );
        // });
    };
    
    return (
        <form>
            {/* Message Input
            Submit button */}

        <input
        name="message"
        id="message"
        value={message}
        onChange={(event) => setTitle(event.target.value)}
        />
        
        <button onClick={newCard}>SUBMIT</button>
        
        </form>

    );

};

export default NewCardForm;

