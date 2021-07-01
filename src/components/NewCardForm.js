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
        props.createNewCard(formFields);
        console.log(formFields)
        if (setFormFields.message === null){
            alert("invalid input")
        } else{
        setFormFields({ messsage: "" })
        alert('💗 Thank you for your message! 💗')
    }
      };
    
    // const check_form = (event) =>{
    //     if (event.target.value.length === 0){
    //         alert('invalid input')
    //     }
    // }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="message">Enter Message:</label>
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
                // onClick={check_form}
                // onClick={clearForm}
            />
        </form>
    );
};

export default NewCardForm;