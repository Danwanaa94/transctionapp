import React, {useContext} from 'react'
import {authContext} from "../context/authContext"
import Header from "../components/Header";
import { transactionContext } from '../context/transactionContext';
import { useNavigate } from 'react-router-dom';



function Home() { 
  const { user, success } = useContext(authContext);
  const { isPending, transactions, error, getALLtransactions} = useContext(transactionContext)
  
  const navigate = useNavigate()
  React.useEffect(() => {
    getALLtransactions();
  }, []);


  React.useEffect(() => {
    if (!success) {
      navigate("/");
    }
  }, [success, navigate]);


  return (
      <>
      <Header />
      {isPending && <h2>loading...</h2>}
  {error && <h2>{error.toString()}</h2>}
      <div className='container'>

        {transactions.map((transaction) =>(
          <div key={transaction._id} className="card border-primary m-3 p-2">
            <div className='card-header'>
              <h4 className='text-primary'>{transaction.app}</h4>
            </div>
            <h4>{transaction.type}</h4>
            <h4>{transaction.time}</h4>
            <div className='reference-container'>
              {transaction.reference.map((ref) => (
                <span className='badge bg-primary m-2'>{ref}</span>
 ))}
            </div>
            <div className='status-container'>
              {transaction.status.map((sta) => (
                <span className='badge bg-primary m-2'>{sta}</span>
              ))}
            </div>
            <div className='party-container'>
              {transaction.party.map((par) => (
                <span className='badge bg-primary m-2'>{par}</span>
              ))}
            </div>
            <div className='amount-container'>
              {transaction.amount.map((amo) => (
                <span className='badge bg-primary m-2'>{amo}</span>
              ))}
            </div>
            </div>
        ))}
          </div>
      </>
  )
}

export default Home