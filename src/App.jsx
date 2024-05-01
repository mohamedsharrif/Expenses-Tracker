import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalaProvider } from "./context/GlobalState";
import { useEffect, useState } from "react";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState("");
  useEffect(() => {
    document.title = user ? `${user}'s  feed'` : "Please Login";
  }, [user, pass]);
  if (!user) return <Login setUser={setUser} setPass={setPass} />
  return (
    <GlobalaProvider>
      <Header user={user}/>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalaProvider>
  );
}

export default App;
