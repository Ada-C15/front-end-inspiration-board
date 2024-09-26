import './App.css';
import BoardForm from './components/boardForm.js';
import Board from './components/board.js';
import CardList from './components/cardList.js'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [boardsData, setBoardsData] = useState([]);

    const [selectedBoard, setSelectedBoard] = useState({
        title: '',
        owner: '',
        id: null
    });
    
    const [chosen, setChosen] = useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
        }).then((response) => {
            setBoardsData(response.data);
            
        })
    }, []);

    const currentBoard = (board) => { setSelectedBoard(board) };

    const deleteBoard = (board_id) => {
        if (board_id) {
            axios.delete(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}`).then((response) => {
                const newBoardsData = boardsData.filter((existingBoard) => {
                    return existingBoard.id !== board_id;
                });
                setBoardsData(newBoardsData);
                setSelectedBoard({
                    title: '',
                    owner: '',
                    id: null
                })
            }).catch((error) => {
                console.log('Error:', error);
                alert('Couldn\'t delete the card.');
            });
        }
    };
    
    const boardsElements = boardsData.map((board, index) => {
        return (
                <Board
                        key={index}
                        index={index + 1}
                        board={board}
                        currentBoard={currentBoard}
                        active={board.title === chosen}
                        deleteBoard={deleteBoard}
                        onClick={() => setChosen(board.title)}        
                />);          
        }
    );
    
    const createNewBoard = (newBoard) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard).then((response) => {
            console.log("Response:", response.data.board);
            const boards = [...boardsData];
            boards.push(response.data.board);
            setBoardsData(boards);
        }).catch((error) => {
            console.log('Error:', error);
            alert('Couldn\'t create a new board.');
        });
    }

    return (
        <div>
            <h1 className='board-header'>Lucky 7th Inspiration Board</h1>
            <section className='board-sec'>
                <div>
                    <div className='board-list-header'>
                        <h2>Boards</h2>
                        <div 
                            onClick={() => {deleteBoard(selectedBoard.id)}} 
                            className='delete-board-icon'>🗑</div>
                    </div>
                    <div className="board-list">
                        {boardsElements}
                    </div>
                </div>
                <div>
                    <h2>Create a New Board</h2>
                    <BoardForm createNewBoard={createNewBoard}></BoardForm>
                </div>
            </section>
            <section>
                {selectedBoard.id ? <CardList selectedBoard={selectedBoard}></CardList> : ''}
            </section>
        </div>
    );
}
export default App;