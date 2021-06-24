import React, {useState, useEffect, memo } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

const [date, setDate] = useState('');
const [memo, setMemo] = useState('');
const [amount, setAmount] = useState('');
const [entryList, setEntryList] = useState([]);

useEffect(() => {
Axios.get('http://localhost:3001/api/get').then((response) => {
  setEntryList (response.data);
})
}, [])


const submitEntry = () => {

  Axios.post('http://localhost:3001/api/insert', {
    date: date, 
    memo: memo,
    amount: amount
  })

    setEntryList([
      ...entryList, 
      {date: date, memo: memo, amount: amount}
    ]);
};
  
  return (
    <div className="App">
    <h1>EASY PEASY ACCOUNTING SQUEEZY</h1>

    <div className= "entry">

      <label>Date</label>
      <input type = "text" name = "date" onChange= { (e)=> {
        setDate(e.target.value)
      }}/>

      <label>Contact</label>
      <input type = "text" name = "contact" />

      <label>Category</label>
      <input type = "text" name = "category" />

      <label>Memo</label>
      <input type = "text" name = "memo" onChange= { (e)=> {
        setMemo(e.target.value)
      }}/>

      <label>Amount</label>
      <input type = "text" name = "amount" onChange= { (e)=> {
        setAmount(e.target.value)
      }}/>

      <button onClick= {submitEntry}>Submit</button>

    </div>

    <div className = 'entryList'>
      {entryList.map((val) => {
        return (
        <div className= 'card'>
          Date:{val.date} 
          | Memo: {val.memo} 
          | Amount: {val.amount}

        </div>
        );
      })}

    </div>

    </div>
  );
}

export default App;
