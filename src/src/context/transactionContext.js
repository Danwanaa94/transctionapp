import { createContext, useContext, useState } from "react";
import { authContext } from "./authContext";


const transactionContext = createContext();


const TransactionProvider = transactionContext.Provider;

const TransactionContextProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([])
const [isPending, setisPending] =useState(false)
    const [error, setError] = useState(null)
    
    const { user } = useContext(authContext)
    
    async function getALLtransactions() {
        setisPending(true);
        await fetch("http://localhost:5000", {
            method: "GET" ,
            headers: {
                "Content-Type": "application/json", 
               
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTransactions(data);
            })
            .catch((err) => {
                setError(err);
            })
        setisPending(false);
    }


    return <TransactionProvider value={{ isPending, transactions, error, getALLtransactions }}>{children}</TransactionProvider>
}

export{transactionContext, TransactionContextProvider}