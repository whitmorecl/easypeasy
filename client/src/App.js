import './App.css';

function App() {


  
  return (
    <div className="App">
    <h1>EASY PEASY ACCOUNTING SQUEEZY</h1>

    <div className= "entry">
      <label>Date</label>
      <input type = "text" name = "date" />
      <label>Contact</label>
      <input type = "text" name = "contact" />
      <label>Category</label>
      <input type = "text" name = "category" />
      <label>Memo</label>
      <input type = "text" name = "memo" className =  "memo"/>
      <label>Amount</label>
      <input type = "text" name = "amount" />
      <button>Submit</button>

    </div>
    
    </div>
  );
}

export default App;
