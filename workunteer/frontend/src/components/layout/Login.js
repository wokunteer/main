import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";


export class Login extends Component {

    state = {
        username: "",
        password: ""
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };
    
    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }
    const { username, password } = this.state;
    return (
        <div className="popup-tab-content" id="Login">
                        
                        
        <div className="welcome-text">
            <h3>We're glad to see you again!</h3>
            <span>Don't have an account? <a href="#" className="register-tab">Sign Up!</a></span>
        </div>
            
        
        <form id="login-form" onSubmit={this.onSubmit}>
            <div className="input-with-icon-left">
                <i className="icon-material-baseline-mail-outline"></i>
                <input type="text" className="input-text with-border" name="username" id="username" onChange={this.onChange} value={username} placeholder="Username" required/>
            </div>

            <div className="input-with-icon-left">
                <i className="icon-material-outline-lock"></i>
                <input type="password" className="input-text with-border" name="password" id="password" onChange={this.onChange} value={password} placeholder="Password" required/>
            </div>
            <a href="#" className="forgot-password">Forgot Password?</a>
        </form>
        
        
        <button className="button full-width button-sliding-icon ripple-effect" type="submit" form="login-form">Log In <i className="icon-material-outline-arrow-right-alt"></i></button>
        
        
        <div className="social-login-separator"><span>or</span></div>
        <div className="social-login-buttons">
            <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Log In via Facebook</button>
            <button className="google-login ripple-effect"><i className="icon-brand-google-plus-g"></i> Log In via Google+</button>
        </div>

    </div>
    )
  }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(
mapStateToProps,
{ login }
)(Login);
  
