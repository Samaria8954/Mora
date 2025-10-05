import { Footer } from "../components/UI/Footer";
import { LoginNav } from "../components/UI/LoginNav";

export const LoginPage = () => {
    return (

        <>
            <div className="login-nav">
                <LoginNav />
            </div>
            <div className="login-image">
                <div className="login-text">
                    <h2>Mora</h2>
                    <h1>Account</h1>
                    <h6>Brighten someone’s day with fresh, handpicked flowers delivered to their doorstep. From romantic roses to cheerful sunflowers, find the perfect bloom for every moment.</h6>
                </div>
            </div>
            <div className="Login-form">
                <div className="upper-img">
                    <img src="images/6.png" alt="" />
                </div>
                <div className="form-content">
                    <form>
                        <div className="login-heading">
                            <h1>Login/Create</h1>
                            <h6>Sign in with your email address</h6>
                        </div>

                        <div className="input-box">
                            <label>Email Address</label>
                            <input
                                type="email"
                                required
                                placeholder="Enter Your Email Address"
                            />
                        </div>

                        <div className="continue">
                            <button type="submit">Continue</button>
                        </div>

                        <div className="vector-box">
                            <label>
                                <img src="images/Vector.png" alt="" />
                            </label>
                        </div>

                        <div className="google">
                            <button type="submit">
                                <i className="fa-brands fa-google"></i> Continue with Google
                            </button>
                        </div>

                        <div className="google">
                            <button type="submit">
                                <i className="fa-brands fa-apple"></i> Continue with Apple
                            </button>
                        </div>
                        <h6>By proceed your agreed our terms & condition</h6>
                    </form>
                </div>

                <div className="lower-img">
                    <img src="images/3.png" alt="" />
                </div>
            </div >
             <Footer bgImage="/images/footer-img.png"/>
        </>
    );
};