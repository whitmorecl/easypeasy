import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
	const [date, setDate] = useState("");
	const [categoryId, setcategoryId] = useState("");
	const [contactId, setContactId] = useState("");
	const [memo, setMemo] = useState("");
	const [amount, setAmount] = useState("");
	const [transactionList, settransactionList] = useState([]);

	useEffect(() => {
		const cards = document.querySelectorAll(".card");
		const buckets = document.querySelectorAll(".bucket");

		cards.forEach((card) => {
			card.addEventListener("dragstart", (e) => {
				card.classList.add("dragging");
				console.log("drag start");
				console.log(e.target);
			});
			card.addEventListener("dragend", () => {
				card.classList.remove("dragging");
				console.log("drag end");
			});
		});

		buckets.forEach((bucket) => {
			bucket.addEventListener("dragover", (e) => {
				e.preventDefault();
				console.log("drag over");
			});
			bucket.addEventListener("dragenter", (e) => {
				e.preventDefault();
				bucket.classList.add("hovered");
				console.log(e.target);
			});
			bucket.addEventListener("dragleave", (e) => {
				e.preventDefault();
				bucket.classList.remove("hovered");
				console.log("drag leave");
			});
			bucket.addEventListener("drop", (e) => {
				e.preventDefault();
				bucket.classList.remove("hovered");
				console.log("drop");
			});
		});
	}, [transactionList]);

	useEffect(() => {
		Axios.get("http://localhost:3001/api/get").then((response) => {
			settransactionList(response.data);
		});
	}, []);

	const submittransaction = () => {
		Axios.post("http://localhost:3001/api/insert", {
			date,
			categoryId,
			contactId,
			memo,
			amount,
		});

		settransactionList([
			...transactionList,
			{
				date: date,
				categoryId: categoryId,
				contactId: contactId,
				memo: memo,
				amount: amount,
			},
		]);
	};

	return (
		<div className="App">
			<h1>EASY PEASY ACCOUNTING SQUEEZY</h1>

			<div className="transaction">
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
					name="categoryId"
					onChange={(e) => {
						setcategoryId(e.target.value);
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

				<button onClick={submittransaction}>Submit</button>
			</div>

			<div className="middleSection">
				<div className="transactionList">
					{transactionList.map((val) => {
						return (
							<div className="card" draggable="true">
								Date:{val.date}| Memo: {val.memo}| Amount: {val.amount}
							</div>
						);
					})}
				</div>

				<div className="bucketList">
					<div className="bucket">Office Expense</div>
					<div className="bucket">Bucket</div>
					<div className="bucket">Bucket</div>
					<div className="bucket">Bucket</div>
				</div>
			</div>
		</div>
	);
}

export default App;
