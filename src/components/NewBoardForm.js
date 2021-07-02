import React, { useState } from 'react';
import axios from 'axios';

// FUNCTION that DEFINES the NewBoardForm Component // A Component function should: 1. be named after the component 2. return one JSX object that represents how to render this component
const NewBoardForm = () => {
    const [formFields, setFormFields] = useState({                  // << This sets the FORM's state
        title: '',    // this initial value?
        owner: ''
    });     
    
    const addNewBoard = (event) => {
        event.preventDefault();
        console.log(formFields)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, formFields)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const wrapUpdate = (event) => {                                // WHY -- You gotta wrap the formFields to Manage their current state/content at the time of the onSubmit event 
        if (event.target.name === 'title') {
            setFormFields({
                title: event.target.value,
                owner: formFields.owner
            })
        } else {
            setFormFields({
                title: formFields.title,
                owner: event.target.value
            })
        }
    }

    return (
        <form onSubmit={addNewBoard} > 
        <div>
                <label htmlFor="boardTitle">Board Title</label>
                <input 
                    name="title" type="text"
                    value={formFields.title} onChange={wrapUpdate}/>
        </div>
        <div> 
                <label htmlFor="boardOwner">Board Owner</label>
                <input 
                    name="owner" type="text"
                    value={formFields.owner} onChange={wrapUpdate}/>
        </div>
        <div>
                <button>Submit Now!</button>
        </div>
        </form>
    );    
}

export default NewBoardForm;

/*
STEP 1: Plan the Component 
We want to have the following UI displayed via the NewBoardForm Component:
    ** The input "title" input "Owners Name"
    // This component is presentational
*/

/*
STEP 2: Define Component:
To define a component, we will follow these steps:
    1. Create a new file (**check**)
    2. Import React, and any other dependencies
    3. Create a function
    4. Export the component (**check**) 
        What other components depend on this one? How?

    EXTRA STUFF
    5. Props?
    6. State?
    7. Events / Handling?
*/
///////////////////////////////////////////////////////////////////////////
///////////////////////// API CALL FUNCTIONS //////////////////////////////
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
/////////////////////// EVENT-HANDLING-FUNCTIONS //////////////////////////
///////////////////////////////////////////////////////////////////////////

// EVENT2: User Clicks the Show/Hide button(s) for New Board Form
// EVENT3: User Submits the New Board Form

///////////////////////////////////////////////////////////////////////////
/////////////////////////// STATE SITUATIONS //////////////////////////////
///////////////////////////////////////////////////////////////////////////

////////////////////////////
//////// show/hide ////////
////////////////////////////
// const toggler = () => {
//     setToggler(!toggle);
// }

// const buttonText = toggle === true ? "Hide" : "Show";

// let newBoard;
// if(toggle) {
//     newBoard = <NewBoardForm></NewBoardForm>
// } else {
//     newBoard = null;
// }


