import React, { PureComponent } from 'react';
import Header from './Header';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <div className="outer">
      <div className="middle">
        <div className="card">
          <Header />
          <div className="heroWrapper">
                    <section className="landingHero grid themeLight">
                        <div className="gridContent">
                            <h1 className="themeHeader">
                                Get ready for the change.
                            </h1>
                            <p className="blurb">
                                Website coming soon. Please check back to know more. Shoot us an email if you're curious.
                            </p>
                            <div className="buttonsWrapper">
                                <div className="buttons">
                                    <a className="downloadNow buttonBase themeDefault" alt="Download" href="mailto:positronxpn@gmail.com">
                                      <span>
                                        Send us an email
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="bottom">
            <div className="blurb2">
                &copy; 2018 Positron Holdings, LLC. All rights reserved.
              </div>
              <div className="blurb2r">
                Designed with ❤ using React
              </div>
            </div>
        </div>
        </div>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
