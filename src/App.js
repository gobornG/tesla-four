import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <body>
        <div className="App">
          <div>
            <div className="fullscreen-bg">
              <video autoPlay loop className="fullscreen-bg__video">
                <source data-src="https://www.tesla.com/ns_videos/homepage-video-summer-2017.mp4?20170808" media="(min-width: 640px)" src="https://www.tesla.com/ns_videos/homepage-video-summer-2017.mp4?20170808" />
                <source data-src="https://www.tesla.com/ns_videos/homepage-video-summer-2017.m4v?20170808" media="(min-width: 640px)" src="https://www.tesla.com/ns_videos/homepage-video-summer-2017.m4v?20170808" />
                <source data-src="https://www.tesla.com/ns_videos/homepage-video-summer-2017.ogv?20170808" media="(min-width: 640px)" src="https://www.tesla.com/ns_videos/homepage-video-summer-2017.ogv?20170808" />
                <source data-src="https://www.tesla.com/ns_videos/homepage-video-summer-2017.webm?20170808" media="(min-width: 640px)" src="https://www.tesla.com/ns_videos/homepage-video-summer-2017.webm?20170808" />
              </video>
            </div>
          </div>
          <div className="header-container">
            <div className="navbar-logo-header">
              <h2>Logo place</h2>
            </div>
            <div className="middle-nav-container">
              <ul className="list-unstyled">
                <li className="tsla-header-nav--list_link"><a href="#">Model S</a></li>
                <li className="tsla-header-nav--list_link"><a href="#">Model X</a></li>
                <li className="tsla-header-nav--list_link"><a href="#">Model 3</a></li>
                <li className="tsla-header-nav--list_link"><a href="#">Energy</a></li>
                <li className="tsla-header-nav--list_link sign-in"><a href="#">Sign In</a></li>
              </ul>
            </div>
            <div className="header-right-nav-container">
              <h3>right nav</h3>
            </div>
          </div>
          <div className="main-nav-container">
            <div className="title-container">
              <h1>Quickest Acceleration.</h1>
              <br />
              <h1>Longest Range. The Safest Cars Ever.</h1>
            </div>
          </div>
          <div className="promoContainer clearfix">
            <ul className="list-inline">
              <li className="col-sm-3"><a href="#">Link</a></li>
              <li className="col-sm-3"><a href="#">Link</a></li>
              <li className="col-sm-3"><a href="#">Link</a></li>
              <li className="col-sm-3"><a href="#">Link</a></li>
            </ul>
          </div>
          <div className="footer-container">
            <div>
              <ul className="list-unstyled">
                <li className="footer-list"><a href="#">Tesla 2017</a></li>
                <li className="footer-list"><a href="#">Privacy Legal</a></li>
                <li className="footer-list"><a href="#">Contact</a></li>
                <li className="footer-list"><a href="#">Careers</a></li>
                <li className="footer-list"><a href="#">Forums</a></li>
                <li className="footer-list"><a href="#">Locations</a></li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
