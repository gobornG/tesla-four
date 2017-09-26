import React, { Component } from 'react';
import './App.css';
import teslaLogo from './tesla.svg';
import { slide as Menu } from 'react-burger-menu';
import Forum from './Forum';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// const DrawerApp = () => (
//   <MuiThemeProvider>
//     <MyAwesomeReactComponent />
//   </MuiThemeProvider>
// )


class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <body>
          <div className="App">
            <div className="header-container">
              <div className="navbar-logo-header">
                <h1>
                  <img src="tesla.svg" />
                </h1>
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
                {/* <h3>right nav</h3> */}
                <div>
                  <Forum />
                </div>
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
                <li className="col-sm-3"><a href="#">Order yours</a></li>
                <li className="col-sm-3"><a href="#">new inventory</a></li>
                <li className="col-sm-3"><a href="#">used inventory</a></li>
                <li className="col-sm-3"><a href="#">test drive</a></li>
              </ul>
            </div>
            <div className="newsletter-container">
              <a href="#" title="get the newsletter">Get the newsletter</a>
            </div>
            <div>
              <div className="footer-container">
                <ul className="list-unstyled">
                  <li className="footer-list"><a href="#">Tesla 2017</a></li>
                  <li className="footer-list"><a href="#">Privacy Legal</a></li>
                  <li className="footer-list"><a href="#">Contact</a></li>
                  <li className="footer-list"><a href="#">Careers</a></li>
                  <li className="footer-list"><a href="#">Forums</a></li>
                  <li className="footer-list"><a href="#">Locations</a></li>
                </ul>
              </div>
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
            </div>
          </div>
        </body>
      </MuiThemeProvider>
    );
  }
}

export default App;
