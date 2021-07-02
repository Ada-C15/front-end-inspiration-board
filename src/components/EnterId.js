// import React, { useState } from 'react';
// import axios from 'axios';

// // Event Handling Functions

// // FUNCTION that DEFINES the NewBoardForm Component // A Component function should: 1. be named after the component 2. return one JSX object that represents how to render this component
// const EndterId = () => {

//     const [formFields, setFormFields] = useState ({ 
//         id: '',
//     });

//     const addId = (event) => {
//         event.preventDefault();
//         axios.post(`${process.env.REACT_APP_BACKEND_URL}/user_id`, {formFields})
//     }
// // name is a part of the React system - it's what it expects
//     const wrapUpdate = (event) => {
//         if (event.target.name === 'id') {
//             setFormFields({
//                 id: event.target.value,
//                 owner: formFields.owner
//             })
//         }
//     }

//     return (
//         <form onSubmit={addId} > 
//         <div>
//                 <lable htmlFor="slackId">Stack ID</lable>
//                 <input 
//                     name="id" type="text"
//                     value={formFields.id} onChange={wrapUpdate}/>
//         </div>

//                 <button>Submit Now!</button>
//         </div>
//         </form>
//     );    
// }

// export default EnterId;