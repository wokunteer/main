import React from 'react'
import View_tab from './view_tab'

export default function sidebar() {

  return (
        <div className="full-page-container">
            <div className="full-page-sidebar">
                <div className="full-page-sidebar-inner" data-simplebar>
                    <div className="sidebar-container">
                        
                        
                        <div className="sidebar-widget">
                            <h3>Location</h3>
                            <div className="input-with-icon">
                                <div id="autocomplete-container">
                                    <input id="autocomplete-input" type="text" placeholder="Location"/>
                                </div>
                                <i className="icon-material-outline-location-on"></i>
                            </div>
                        </div>

                        
                        <div className="sidebar-widget">
                            <h3>Category</h3>
                            <select className="selectpicker default" multiple data-selected-text-htmlformat="count" data-size="7" title="All Categories" >
                                <option>Admin Support</option>
                                <option>Customer Service</option>
                                <option>Data Analytics</option>

                            </select>
                        </div>

                        
                        <div className="sidebar-widget">
                            <h3>Keywords</h3>
                            <div className="keywords-container">
                                <div className="keyword-input-container">
                                    <input type="text" className="keyword-input" placeholder="e.g. task title"/>
                                    <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
                                </div>
                                <div className="keywords-list"></div>
                                <div className="clearfix"></div>
                            </div>
                        </div>


                        
                        <div className="sidebar-widget">
                            <h3>Hourly Rate</h3>
                            <div className="margin-top-55"></div> 
                            <input className="range-slider" type="text" defaultValue="" data-slider-currency="$" data-slider-min="10" data-slider-max="250" data-slider-step="5" data-slider-value="[10,250]"/>
                        </div>

                        
                        <div className="sidebar-widget">
                            <h3>Skills</h3>

                            <div className="tags-container">
                                <div className="tag">
                                    <input type="checkbox" id="tag1"/>
                                    <label htmlFor="tag1">front-end dev</label>
                                </div>
                                <div className="tag">
                                    <input type="checkbox" id="tag2"/>
                                    <label htmlFor="tag2">angular</label>
                                </div>
                                <div className="tag">
                                    <input type="checkbox" id="tag3"/>
                                    <label htmlFor="tag3">react</label>
                                </div>
                                <div className="tag">
                                    <input type="checkbox" id="tag4"/>
                                    <label htmlFor="tag4">vue js</label>
                                </div>
                                <div className="tag">
                                    <input type="checkbox" id="tag5"/>
                                    <label htmlFor="tag5">web apps</label>
                                </div>
                                <div className="tag">
                                    <input type="checkbox" id="tag6"/>
                                    <label htmlFor="tag6">design</label>
                                </div>
                                <div className="tag">
                                    <input type="checkbox" id="tag7"/>
                                    <label htmlFor="tag7">wordpress</label>
                                </div>
                            </div>
                            <div className="clearfix"></div>

                            
                            <div className="keywords-container margin-top-20">
                                <div className="keyword-input-container">
                                    <input type="text" className="keyword-input" placeholder="add more skills"/>
                                    <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
                                </div>
                                <div className="keywords-list"></div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="clearfix"></div>

                        <div className="margin-bottom-40"></div>

                    </div>
                    

                    
                    <div className="sidebar-search-button-container">
                        <button className="button ripple-effect">Search</button>
                    </div>
                    

                </div>
            </div>
            
            
            
            <div className="full-page-content-container" data-simplebar>
                <div className="full-page-content-inner">

                    <h3 className="page-title">Search Results</h3>

                    <div className="notify-box margin-top-15">
                        <div className="switch-container">
                            <label className="switch"><input type="checkbox"/><span className="switch-button"> </span><span className="switch-text">Turn on email alerts htmlFor this search</span></label>
                        </div>

                        <div className="sort-by">
                            <span>Sort by:</span>
                            <select className="selectpicker hide-tick">
                                <option>Relevance</option>
                                <option>Newest</option>
                                <option>Oldest</option>
                                <option>Random</option>
                            </select>
                        </div>
                    </div>

                    
                    
                        
                        <View_tab />
                    
                                        
                    <div className="clearfix"></div>
                    <div className="pagination-container margin-top-20 margin-bottom-20">
                        <nav className="pagination">
                            <ul>
                                <li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
                                <li><a href="#" className="ripple-effect">1</a></li>
                                <li><a href="#" className="ripple-effect current-page">2</a></li>
                                <li><a href="#" className="ripple-effect">3</a></li>
                                <li><a href="#" className="ripple-effect">4</a></li>
                                <li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
  )
}
