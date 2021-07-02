import styled from 'styled-components'
import React from 'react';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLED COMPONENTS  ///////////////////////////////////////////////////////////
const BoardContainer = styled.section`
    margin: 20px auto;
    font-family: 'Annie Use Your Telescope';
    background:#666;
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
    transform: rotate(-6deg);
    transition: transform .15s linear;
    `

// FUNCTION that DEFINES the Board Component // A Component function should: 1. be named after the component 2. return one JSX object that represents how to render this component
const Board = ({title, owner}) => {                                 // {title, owner} are ??props?? passed in  App.js with title={selectedBoardItem.title} owner={selectedBoardItem.owner}
    return(
        <BoardContainer>
            <h3>{title} - {owner}</h3> 
        </BoardContainer>
    )
};

export default Board;




//  background-color: lightblue;







/*
STEP 1: Plan the Component: The Board Component is a presentation component - 
it provides the structure for presenting the Selected Boards Title and Owner via the App.js (That renders everything)
When a Board component is rendered, what data is presented? -Title and Owner (of the Board That is currently seleceted from the DropDown Menu)

We want to have the following UI displayed via the Board Component:
    ** The Board Title and THe Board Owner
    ** ^^ These details are generated from the Boardlist Component and stored in the App.js - selectedBoardItem - state  
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

///////////////////////////////////////////////////////////////////////////
/////////////////////////// STATE SITUATIONS //////////////////////////////
///////////////////////////////////////////////////////////////////////////