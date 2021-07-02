import styled from 'styled-components'
import React from 'react';
import axios from 'axios';
import dotenv from  'dotenv'
import { useState, useEffect } from 'react';  


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLED COMPONENTS  ///////////////////////////////////////////////////////////
const DropDownContainer = styled.select`
    margin: 20px auto;
    font-family: 'Annie Use Your Telescope';
    color:#fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-decoration:none;
    color:#000;
    background:#ffc;
    display:block;
    height:10em;
    width:10em;
    padding:1em;
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    transform:rotate(5deg);
    position:relative;
    top:-10px;
    `

const OptionContainer = styled.option`

    `

// FUNCTION that DEFINES the Board Component // A Component function should: 1. be named after the component 2. return one JSX object that represents how to render this component
const BoardList = ({onBoardSelectCallback}) => {

    const [boardItems, setBoardItems] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
        .then((response) => {
            setBoardItems(response.data.boards_list)
        })
        .catch((error) => {
            console.log(error)
        });
    }, []);

    const onBoardSelectChange = (event) => {                       // event handler
        const selectedItemId = event.target.value                  // assign the value of  ' event.target.value '  to  variable selectedItemId 
        const item = boardItems.find(i => i.id == selectedItemId)  // item holds the value of boardItems (which is the list of board objects retrieved from the get request {title: '', owner: ''})
        onBoardSelectCallback(item)                                // .find built-in function returns the value of the first element in the provided array that satisfies the provided testing function
    }                                                              // in this case - the .find is searching the list for selectedItemId (aka the event.target.value of the selected option)

    const generateBoardListItemComponents = (items) => {
        return <DropDownContainer className="boardItems" onChange={onBoardSelectChange}>
            <OptionContainer default>Select Your Board</OptionContainer>
            {items.map((item) => { 
                return <OptionContainer key={item.id} value={item.id}>{item.title}</OptionContainer> 
            })}
        </DropDownContainer>
    }
    return generateBoardListItemComponents(boardItems)
};

export default BoardList;








/*
STEP 1: Plan the Component 
BoardList is a container component
We want to have the following UI displayed via the BoardList Component:
    ** The BoardList should be a drop down or scroll menu that a user can select a board from
    ** The BoardList should have an array --  List of Boards -- and renders the boardTitles as a dropdown element
    ** https://www.newline.co/@andreeamaco/react-dropdown-tutorial-for-beginners-create-a-dropdown-menu-from-scratch--9831d197
    ** GET (s) from the DB via a function like getAllBoards -- and presents all the titles
        ** Where should the function getAllBoards live?? App.js??
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
// EVENT1: User Select a Board from the BoardList

///////////////////////////////////////////////////////////////////////////
/////////////////////////// STATE SITUATIONS //////////////////////////////
///////////////////////////////////////////////////////////////////////////

// const setSelectedBoard = (boardId) => {
//     // set selected board
//     setActiveBoardId(boardID)
// }

// SETTING STATE // const [pieceOfState, setPieceOfState] = useState('Initial value for pieceOfState.');
// UPDATING STATE // setPieceOfState('New value of pieceOfState.');