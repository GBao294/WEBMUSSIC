import React from 'react';
import "../styles/register.css";

function Register() {
    return (
        <div>
            <title>NerdyGrooves Register</title>
            <div>
                <section>
                    {/* <div className="background2"></div> */}
                    <div className="form-box">
                        <div className="button-box">
                            <div className="form-value">
                                <form action="">
                                    <h2>Register</h2>
                                    <div className="inputbox">
                                        <ion-icon name="mail-outline"></ion-icon>
                                        <input type="email" required />
                                        <label htmlFor="">Email</label>
                                    </div>
                                    <div className="inputbox">
                                        <ion-icon name="lock-closed-outline"></ion-icon>
                                        <input type="password" required />
                                        <label htmlFor="">Password</label>
                                    </div>
                                    <div className="inputbox">
                                        <ion-icon name="lock-closed-outline"></ion-icon>
                                        <input type="password" required />
                                        <label htmlFor="">Confirm Password</label>
                                    </div>
                                    <div className="remember">
                                        <label htmlFor=""><input type="checkbox" />Remember Me</label>
                                    </div>
                                    <button type="submit">Register</button>
                                    <div className="register">
                                        <p>Or <a href="#">LOGIN</a> if you already have an account</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export { Register };
