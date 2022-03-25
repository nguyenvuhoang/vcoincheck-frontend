import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { loadingToggleAction,loginAction,
} from '../../store/actions/AuthActions';

//
import logo from '../../images/Logo450x450.svg'
import login from "../../images/bg-login2.png";
import loginbg from "../../images/bg-login.jpg";

function Login (props) {
    const [username, setUsername] = useState('admin01');
    let errorsObj = { username: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('123456');
    const dispatch = useDispatch();

    function onLogin(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (username === '') {
            errorObj.username = 'Username is Required';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }
        setErrors(errorObj);
        if (error) {
			return ;
		}
		dispatch(loadingToggleAction(true));	
        dispatch(loginAction(username, password, props.history));
    }

  return (
        <div className="login-main-page" style={{backgroundImage:"url("+ loginbg +")"}}>
            <div className="login-wrapper">
                <div className="login-aside-left" style={{backgroundImage:"url("+ login +")"}}>
                    <Link className="login-logo">
                        <img src={logo} alt="" className="mr-2"/>
                      </Link>
                    <div className="login-description">
                        <div className="mt-5">
                            <Link to={"#"} className="text-black mr-4">Privacy Policy</Link>
                            <Link to={"#"} className="text-black mr-4">Contact</Link>
                            <Link to={"https://www.vknight.io/"} className="text-black">© 2021 vKnightHub</Link>
                        </div>
                    </div>
                </div>
                <div className="login-aside-right gradient_one">
                    <div className="row m-0 justify-content-center h-100 align-items-center">
                      <div className="col-xl-7 col-xxl-7">
                        <div className="authincation-content">
                          <div className="row no-gutters">
                            <div className="col-xl-12">
                              <div className="auth-form-1">
                                <div className="mb-4">
                                    <h3 className="text-white mb-1">Welcome to vCoincheck</h3>
                                    <p className="text-white">Sign in by entering information below</p>
                                </div>
                                {props.errorMessage && (
                                    <div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
                                        {props.errorMessage}
                                    </div>
                                )}
                                {props.successMessage && (
                                    <div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
                                        {props.successMessage}
                                    </div>
                                )}
                                <form onSubmit={onLogin}>
                                    <div className="form-group">
                                        <label className="mb-2 ">
                                          <strong className="text-white">Username</strong>
                                        </label>
                                        <input type="text" className="form-control"
                                          value={username}
                                          onChange={(e) => setUsername(e.target.value)}
                                        />
                                      {errors.username && <div className="text-danger fs-12">{errors.username}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-2 "><strong className="text-white">Password</strong></label>
                                        <input
                                          type="password"
                                          className="form-control"
                                          value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        {errors.password && <div className="text-danger fs-12">{errors.password}</div>}
                                    </div>
                                  <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                    <div className="form-group">
                                      <div className="custom-control custom-checkbox ml-1 ">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          id="basic_checkbox_1"
                                        />
                                        <label
                                          className="form-check-label text-white"
                                          htmlFor="basic_checkbox_1 "
                                        >
                                          Remember my preference
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-center">
                                    <button
                                      type="submit"
                                      className="btn bg-dark text-light btn-block"
                                    >
                                      Sign In
                                    </button>
                                  </div>
                                  <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                    <div className="nav-item">
                                        <Link className="ai-icon" to="page-register">
                                            <svg
                                                id="icon-logout"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="text-success"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                                <polyline points="16 17 21 12 16 7" />
                                                <line x1={21} y1={12} x2={9} y2={12} />
                                            </svg>
                                            <a className="ml-2"> Register user here</a>
                                        </Link>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
            
    )
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};
export default connect(mapStateToProps)(Login);