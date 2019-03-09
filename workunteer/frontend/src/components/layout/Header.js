import React, { Component } from 'react';

export class Header extends Component {
	render() {
		return (
			<div id="wrapper">
				<header id="header-container" className="fullwidth dashboard-header not-sticky">
					<div id="header">
						<div className="container">
							<div className="left-side">
							
								<div id="logo">
									<a href="index.html"><img src="static/images/logo.png" alt=""></img></a>
								</div>


								<nav id="navigation">
									<ul id="responsive">

										<li><a href="#">Home</a>
											<ul className="dropdown-nav">
												<li><a href="index.html">Home 1</a></li>
												<li><a href="index-2.html">Home 2</a></li>
												<li><a href="index-3.html">Home 3</a></li>
											</ul>
										</li>

										<li><a href="#">Find Work</a>
											<ul className="dropdown-nav">
												<li><a href="#">Browse Jobs</a>
													<ul className="dropdown-nav">
														<li><a href="jobs-list-layout-full-page-map.html">Full Page List + Map</a></li>
														<li><a href="jobs-grid-layout-full-page-map.html">Full Page Grid + Map</a></li>
														<li><a href="jobs-grid-layout-full-page.html">Full Page Grid</a></li>
														<li><a href="jobs-list-layout-1.html">List Layout 1</a></li>
														<li><a href="jobs-list-layout-2.html">List Layout 2</a></li>
														<li><a href="jobs-grid-layout.html">Grid Layout</a></li>
													</ul>
												</li>
												<li><a href="#">Browse Tasks</a>
													<ul className="dropdown-nav">
														<li><a href="tasks-list-layout-1.html">List Layout 1</a></li>
														<li><a href="tasks-list-layout-2.html">List Layout 2</a></li>
														<li><a href="tasks-grid-layout.html">Grid Layout</a></li>
														<li><a href="tasks-grid-layout-full-page.html">Full Page Grid</a></li>
													</ul>
												</li>
												<li><a href="browse-companies.html">Browse Companies</a></li>
												<li><a href="single-job-page.html">Job Page</a></li>
												<li><a href="single-task-page.html">Task Page</a></li>
												<li><a href="single-company-profile.html">Company Profile</a></li>
											</ul>
										</li>

										<li><a href="#">For Employers</a>
											<ul className="dropdown-nav">
												<li><a href="#">Find a Freelancer</a>
													<ul className="dropdown-nav">
														<li><a href="freelancers-grid-layout-full-page.html">Full Page Grid</a></li>
														<li><a href="freelancers-grid-layout.html">Grid Layout</a></li>
														<li><a href="freelancers-list-layout-1.html">List Layout 1</a></li>
														<li><a href="freelancers-list-layout-2.html">List Layout 2</a></li>
													</ul>
												</li>
												<li><a href="single-freelancer-profile.html">Freelancer Profile</a></li>
												<li><a href="dashboard-post-a-job.html">Post a Job</a></li>
												<li><a href="dashboard-post-a-task.html">Post a Task</a></li>
											</ul>
										</li>

										<li><a href="#" className="current">Dashboard</a>
											<ul className="dropdown-nav">
												<li><a href="dashboard.html">Dashboard</a></li>
												<li><a href="dashboard-messages.html">Messages</a></li>
												<li><a href="dashboard-bookmarks.html">Bookmarks</a></li>
												<li><a href="dashboard-reviews.html">Reviews</a></li>
												<li><a href="dashboard-manage-jobs.html">Jobs</a>
													<ul className="dropdown-nav">
														<li><a href="dashboard-manage-jobs.html">Manage Jobs</a></li>
														<li><a href="dashboard-manage-candidates.html">Manage Candidates</a></li>
														<li><a href="dashboard-post-a-job.html">Post a Job</a></li>
													</ul>
												</li>
												<li><a href="dashboard-manage-tasks.html">Tasks</a>
													<ul className="dropdown-nav">
														<li><a href="dashboard-manage-tasks.html">Manage Tasks</a></li>
														<li><a href="dashboard-manage-bidders.html">Manage Bidders</a></li>
														<li><a href="dashboard-my-active-bids.html">My Active Bids</a></li>
														<li><a href="dashboard-post-a-task.html">Post a Task</a></li>
													</ul>
												</li>
												<li><a href="dashboard-settings.html">Settings</a></li>
											</ul>
										</li>

										<li><a href="#">Pages</a>
											<ul className="dropdown-nav">
												<li><a href="pages-blog.html">Blog</a></li>
												<li><a href="pages-pricing-plans.html">Pricing Plans</a></li>
												<li><a href="pages-checkout-page.html">Checkout Page</a></li>
												<li><a href="pages-invoice-template.html">Invoice Template</a></li>
												<li><a href="pages-user-interface-elements.html">User Interface Elements</a></li>
												<li><a href="pages-icons-cheatsheet.html">Icons Cheatsheet</a></li>
												<li><a href="pages-login.html">Login & Register</a></li>
												<li><a href="pages-404.html">404 Page</a></li>
												<li><a href="pages-contact.html">Contact</a></li>
											</ul>
										</li>

									</ul>
								</nav>
								<div className="clearfix"></div>


							</div>




							<div className="right-side">

								<div className="header-widget">
									<a href="#sign-in-dialog" className="popup-with-zoom-anim log-in-button"><i className="icon-feather-log-in"></i> <span>Log In / Register</span></a>
								</div>

								
								<span className="mmenu-trigger">
									<button className="hamburger hamburger--collapse" type="button">
										<span className="hamburger-box">
											<span className="hamburger-inner"></span>
										</span>
									</button>
								</span>

							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default Header;
