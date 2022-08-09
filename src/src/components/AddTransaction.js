import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { transactionContext } from "../context/transactionContext";

const AddTransaction = () => {
  const [data, setData] = useState({
    party: "",
    amount: "",
    transactionType: "",
    status: "",
  });
  const { setFilteredTransactions, setAllTransactions, getAllTransactions } =useContext(transactionContext)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch("http://localhost:5000", data);

      const transactions = await getAllTransactions();

      setAllTransactions(transactions);
      setFilteredTransactions(transactions);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-sm12 col-md-6 col-lg-4 col-xl-4 m-3 p-3 bg-info">
      <h1 className="block text-lg">Add Transaction</h1>
      <div className="form-group m-2">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="party" className="block text-lg">
              Party
            </label>
            <input
              type="party"
              name="party"
              id="party"
              value={data.party}
              onChange={handleChange}
              className="input_file"
            />
          </div>
          <div>
            <label htmlFor="amount" className="block text-lg">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={data.amount}
              onChange={handleChange}
              className="col-6 m-2 mb-2"
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-lg mb-2">
              Transaction Type
            </label>
            <select
              name="transactionType"
              id="transactionType"
              className="border-2 p-2 w-full"
              onChange={handleChange}
            >
              <option value="">Select Transaction Type</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
              <option value="Reversal">Reversal</option>
            </select>
          </div>
          <div className="mt-5">
            <label htmlFor="status" className="block text-lg mb-2">
              Status
            </label>
            <select
              name="status"
              id="status"
              className="border-2 p-2 w-full"
              onChange={handleChange}
            >
              <option value="">Select Transaction Status</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
              <option value="Success">Success</option>
            </select>
          </div>

          <button type="submit" className=" btn btn-primary m-2">
          Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
