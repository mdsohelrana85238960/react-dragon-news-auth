

import { Link } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";



const Register = () => {

  const {createUser} = useContext(AuthContext);

   const handleRegister = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    console.log(email,password,name,photo);

    createUser(email,password)
    .then(result => {console.log(result.user)
    })
    .catch(error => console.error(error))
   }
    return (
        <div>

            <Navbar></Navbar>
            <div>
                
            <div className="card flex-shrink-0 mt-28 mx-auto w-full  max-w-md shadow-2xl bg-base-100">
            <h2 className="text-center text-2xl pt-4">Please Register</h2>
      <form onSubmit={handleRegister}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center pb-4" > have an account <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p> 
    </div>
            </div>
        </div>
    );
};

export default Register;