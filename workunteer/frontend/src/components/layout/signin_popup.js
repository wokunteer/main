import React, { Component,Fragment } from 'react'
import Login from './Login'
import Register from './register'


export class signin_popup extends Component {
  render() {
    return (
      <div>
          <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs">

            
            <div className="sign-in-form">

                <ul className="popup-tabs-nav">
                    <li><a href="#Login">Log In</a></li>
                    <li><a href="#register">Register</a></li>
                </ul>

                <div className="popup-tabs-container">
                    <Fragment>
						<Login />
						<Register />
					</Fragment>
                </div>
            </div>
            </div>
      </div>
    )
  }
}

export default signin_popup
