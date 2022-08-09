import {useContext, useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authContext } from "../context/authContext";

function Signup() {
const navigate = useNavigate();

const { success, authSignup } = useContext(authContext);
const [username, setUsername] =useState("")
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

useEffect(() => {
  if (success) {
  navigate("/");
  }
}, [success]);
  
const handleSubmit = (e) => {
  e.preventDefault();
  authSignup(username, email, password);
};




  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div className="col-sm12 col-md-6 col-lg-4 col-xl-4 m-3 p-3 bg-info">
        <div className="form-group m-2">
          <label htmlFor="username">username</label>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group m-2">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary m-2">
         signup
        </button>
        <div className="row">
          I already have an account
          <Link to="/Login" className="raf">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Signup