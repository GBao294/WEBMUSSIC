import React, {useState} from 'react';
import "../styles/register.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase-config";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            navigate('/Bay');
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
      };

    return (
        <div>
            <title>NerdyGrooves Login</title>
            <div>
                <section>
                    {/* <div className="background2"></div> */}
<<<<<<< HEAD
                    <div className="form-box form2">
                        <div className="button-box">
                            <div className="form-value">
                                <form action="" onSubmit={signIn}>
                                    <h2 className='Register-head'>Login</h2>
=======
                    <div className="form-box">
                        <div className="button-box">
                            <div className="form-value">
                                <form action="" onSubmit={signIn}>
                                    <h2>Login</h2>
>>>>>>> 1c466ff79c3a804b1b7bb6a9e19c701291ea5c69
                                    <div className="inputbox">
                                        <ion-icon name="mail-outline"></ion-icon>
                                        <input type="email" required
                                               value={email}
                                               onChange={(e) => setEmail(e.target.value)}  />
                                        <label htmlFor="">Email</label>
                                    </div>
                                    <div className="inputbox">
                                        <ion-icon name="lock-closed-outline"></ion-icon>
                                        <input type="password" required
                                               value={password}
                                               onChange={(e) => setPassword(e.target.value)}  />
                                        <label htmlFor="">Password</label>
                                    </div>
                                    <div className="remember">
<<<<<<< HEAD
                                        <label htmlFor=""><input type="checkbox" /> Remember Me</label>
                                    </div>
                                    {error && <div className="error-message">{error}</div>}
=======
                                        <label htmlFor=""><input type="checkbox" />Remember Me</label>
                                    </div>
>>>>>>> 1c466ff79c3a804b1b7bb6a9e19c701291ea5c69
                                    <button type="submit">Login</button>
                                    <div className="register">
                                        <p>Or <a href="/Register">Register</a> if you do not have an account</p>
                                    </div>
                                </form>
<<<<<<< HEAD
=======
                                {error && <div className="error-message">{error}</div>}
>>>>>>> 1c466ff79c3a804b1b7bb6a9e19c701291ea5c69
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export  default SignIn;
