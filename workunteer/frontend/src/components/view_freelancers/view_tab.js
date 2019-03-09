import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getstudent } from "../../actions/student";

export class view_tab extends Component {
    static propTypes = {
        student: PropTypes.array.isRequired
      };

      componentDidMount() {
        this.props.getstudent();
      }
    
  render() {
    return (
        <div className="freelancers-container freelancers-grid-layout margin-top-35">
            {this.props.student.map(stu => (
                <div className="freelancer">
                    <div className="freelancer-overview">
                        <div className="freelancer-overview-inner">
                            <span className="bookmark-icon"></span>

                            <div className="freelancer-avatar">
                                <div className="verified-badge"></div>
                                <a href="single-freelancer-profile.html"><img src="images/user-avatar-big-01.jpg" alt=""></img></a>
                            </div>

                            
                            <div className="freelancer-name">
                                <h4><a href="single-freelancer-profile.html">{stu.fname} {stu.lname}<img className="flag" src="images/flags/gb.svg" alt="" title="United Kingdom" data-tippy-placement="top"></img></a></h4>
                                <span>{stu.email}</span>
                            </div>

                            
                            <div className="freelancer-rating">
                                <div className="star-rating" data-rating="4.9"></div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="freelancer-details">
                        <div className="freelancer-details-list">
                            <ul>
                                <li>Location <strong><i className="icon-material-outline-location-on"></i> London</strong></li>
                                <li>Rate <strong>$60 / hr</strong></li>
                                <li>Job Success <strong>95%</strong></li>
                            </ul>
                        </div>
                        <a href="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
                    </div>
                </div>
            ))}
        </div>
    )
  }
}

const mapStateToProps = state => ({
    student: state.student.student
  });

export default connect(mapStateToProps,{ getstudent})(view_tab);
