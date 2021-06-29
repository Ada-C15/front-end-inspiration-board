import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Board from './components/Board';
import Card from './components/Card';
import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import BoardList from './components/BoardList';

function App() {
  // state of the list of boards
  const [boardData, setBoardData] = useState([]);
  // state of the current board (state is the same structure as the response in flask)
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    board_id: null
  });

  // this loads the list of boards from the Flask API ONCE, after the object renders
  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
  //   }).then((response) => {
  //     setBoardData(response.data);
  //     console.log(response.data)
  //   })
  // }, []);
  // // console.log);

//   return (<article>
//     <h2 className="student-list__header yellow-big">Student</h2>
//     <ul className={componentClass}>
//     {studentComponents}
//     </ul>
// </article>)
// }

  const getBoards = () => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
    .then((response) => {
      console.log(response.data);
      const newData = response.data
      setBoardData(newData);
    })
    // .catch((error) => {
    //   console.log('error.response.data');
    // });
  }

  useEffect(() => {
    getBoards();
  }, [])

  return (
    <div className="page__container">
      <div className="content__container">
        <h1>Inspiration Board</h1>
        <section className="boards__container">
          <section>
            <h2>Boards</h2>
            <BoardList boardData={boardData} />
          </section>
          <section>
            <h2>Selected Board</h2>
            <p>(Selected Board Title Placeholder)</p>
          </section>
          <section className="new-board-form__container">
            <h2>Create a New Board</h2>
            <form className="new-board-form__form">
              <label>Title </label>
              <input type="text" class="invalid-form-input" value="title" />
              <label>Owner's Name </label>
              <input type="text" className="invalid-form-input" value="name" />
              <p>Preview: </p>
              <input type="Submit" className="new-board-form__form-submit-btn" />
            </form>
            <span className="new-board-form__toggle-btn">Hide New Board Form</span>
          </section>
        </section>
        <section className="cards__container">
          <section>
            <h2>Cards for (board placeholder)</h2>
            <div className="card-items__container">
              <div className="card-item">
                <p className="card-item__message">(message placeholder)</p>
              </div>
            </div>
          </section>
        <section className="new-card-form__container">
          <h2>Create a New Card</h2>
          <form className="new-card-form__form">
            <label>Message</label>
            <input type="text" className="invalid-form-input" value="message" />
            <p>Preview: </p>
            <input type="Submit" className="new-card-form__form-submit-btn" />
          </form>
        </section>
        </section>
      </div>
      <footer>
        <span>Copyright 2021 Just a Flask Wound</span>
      </footer>
    </div>
  );
}

export default App;
