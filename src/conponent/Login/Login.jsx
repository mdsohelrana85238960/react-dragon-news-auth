import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";



const Login = () => {
  
  const {singIn} = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);


    singIn(email,password)
    .then(result => {
      console.log(result.user);
      navigate(location?.state ? location.state : '/')
    })
    .catch(error => console.error(error))

   }
  
    return (
        <div>

            <Navbar></Navbar>
            <div>
                
            <div className="card flex-shrink-0 mt-28 mx-auto w-full  max-w-md shadow-2xl bg-base-100">
            <h2 className="text-center text-2xl pt-4">Please Login</h2>
      <form  onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center pb-4" >Do not have an account <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p> 
    </div>
            </div>
        </div>
    );
};

export default Login;