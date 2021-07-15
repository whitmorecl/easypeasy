import React, { useState, useEffect, memo } from "react";
import "./App.css";
import Axios from "axios";

function App() {
	const [date, setDate] = useState("");
	const [accountId, setAccountId] = useState("");
	const [contactId, setContactId] = useState("");
	const [memo, setMemo] = useState("");
	const [amount, setAmount] = useState("");
	const [entryList, setEntryList] = useState([]);

	useEffect(() => {
		Axios.get("http://localhost:3001/api/get").then((response) => {
			setEntryList(response.data);
		});
	}, []);

	const submitEntry = () => {
		Axios.post("http://localhost:3001/api/insert", {
			date,
			accountId,
			contactId,
			memo,
			amount,
		});

		setEntryList([
			...entryList,
			{
				date: date,
				accountId: accountId,
				contactId: contactId,
				memo: memo,
				amount: amount,
			},
		]);
	};

	return (
		<div className="App">
			<h1>EASY PEASY ACCOUNTING SQUEEZY</h1>

			<div className="entry">
				<label>Date</label>
				<input
					type="text"
					name="date"
					onChange={(e) => {
						setDate(e.target.value);
					}}
				/>

				<label>Contact</label>
				<input
					type="text"
					name="contactId"
					onChange={(e) => {
						setContactId(e.target.value);
					}}
				/>

				<label>Category</label>
				<input
					type="text"
					name="accountId"
					onChange={(e) => {
						setAccountId(e.target.value);
					}}
				/>

				<label>Memo</label>
				<input
					type="text"
					name="memo"
					onChange={(e) => {
						setMemo(e.target.value);
					}}
				/>

				<label>Amount</label>
				<input
					type="text"
					name="amount"
					onChange={(e) => {
						setAmount(e.target.value);
					}}
				/>

				<button onClick={submitEntry}>Submit</button>
			</div>

			<div className="middleSection">
				<div className="entryList">
					{entryList.map((val) => {
						return (
							<div className="card">
								Date:{val.date}| Contact: {val.contactId}| Category:{" "}
								{val.accountId}| Memo: {val.memo}| Amount: {val.amount}
							</div>
						);
					})}
				</div>

				<div className="bucketList">
					<div className="bucket">Bucket</div>
					<div className="bucket">Bucket</div>
					<div className="bucket">Bucket</div>
					<div className="bucket">Bucket</div>
					<div className="bucket">Bucket</div>
					<div className="bucket">Bucket</div>
					<div className="bucket">Bucket</div>
					<div className="bucket">Bucket</div>
					<div className="bucket">Bucket</div>
					<div className="bucket">Bucket</div>
					<div className="bucket">Bucket</div>
					<div className="bucket">Bucket</div>
					<div className="bucket">Bucket</div>
					<div className="bucket">Bucket</div>
				</div>
			</div>
		</div>
	);
}

export default App;
