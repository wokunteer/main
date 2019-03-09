import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        password2: ""
      };

    onSubmit = e => {
        e.preventDefault();
        console.log('Submit')
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, email, password, password2 } = this.state;
    return (
        <div className="popup-tab-content" id="register">
                        
                        
        <div className="welcome-text">
            <h3>Let's create your account!</h3>
        </div>

        
        <div className="account-type">
            <div>
                <input type="radio" name="account-type-radio" id="freelancer-radio" className="account-type-radio" checked/>
                <label for="freelancer-radio" className="ripple-effect-dark"><i className="icon-material-outline-account-circle"></i> Freelancer</label>
            </div>

            <div>
                <input type="radio" name="account-type-radio" id="employer-radio" className="account-type-radio"/>
                <label for="employer-radio" className="ripple-effect-dark"><i className="icon-material-outline-business-center"></i> Employer</label>
            </div>
        </div>
            
        
        <form id="register-account-form" onSubmit={this.onSubmit}>
            <div className="input-with-icon-left">
                <i className="icon-material-baseline-mail-outline"></i>
                <input type="text" className="input-text with-border" name="username" id="username" onChange={this.onChange} value={username} placeholder="Username" required/>
            </div>

            <div className="input-with-icon-left">
                <i className="icon-material-baseline-mail-outline"></i>
                <input type="email" className="input-text with-border" name="email" id="email" onChange={this.onChange} value={email} placeholder="Email Address" required/>
            </div>

            <div className="input-with-icon-left" title="Should be at least 8 characters long" data-tippy-placement="bottom">
                <i className="icon-material-outline-lock"></i>
                <input type="password" className="input-text with-border" name="password" id="password" onChange={this.onChange} value={password} placeholder="Password" required/>
            </div>

            <div className="input-with-icon-left">
                <i className="icon-material-outline-lock"></i>
                <input type="password" className="input-text with-border" name="password2" id="password2" onChange={this.onChange} value={password2} placeholder="Repeat Password" required/>
            </div>
        </form>
        
        
        <button className="margin-top-10 button full-width button-sliding-icon ripple-effect" type="submit" form="register-account-form">Register <i className="icon-material-outline-arrow-right-alt"></i></button>
        
        
        <div className="social-login-separator"><span>or</span></div>
        <div className="social-login-buttons">
            <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Register via Facebook</button>
            <button className="google-login ripple-effect"><i className="icon-brand-google-plus-g"></i> Register via Google+</button>
        </div>

    </div>

    )
  }
}

export default register
