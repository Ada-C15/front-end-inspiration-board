import { useState } from 'react';

const NewCardForm = (props) => {

    const [formFields, setFormFields] = useState({
        message: ''
    });

    const onMessageChange = (event) => {
        setFormFields({
            ...formFields,
            message: event.target.value
        })
    };

    const onSubmit= (event) => {
        event.preventDefault();
        // console.log(formFields)
        if (formFields.message === ''){
            alert("Invalid input. Please write something.")
        } else {
            alert('💗 Thank you for your message! 💗')
            props.createNewCard(formFields);
    }
        // setFormFields({ messsage: '' })
      };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="message">Enter Message: </label>
                <input name="message"
                    value={formFields.message}
                    onChange={onMessageChange}
                />
            </div>
            <div>
                <p>Message Preview:</p> 
                <p className="preview">{formFields.message}</p>
            </div>
            <input className='add_card_btn'
                type="submit"
                value="Add Card"
                // required 
                // minLength="1" 
                // maxLength="40"
                // disabled={(formFields.message.length === 0) || (formFields.message.length > 40)}
                // disabled={formFields.message === ''}
            />
        </form>
    );
};

export default NewCardForm;