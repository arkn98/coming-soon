import React from 'react';
import './Header.css';
import logomark from './assets/logo/logofull_wire.svg';
import twittersvg from './assets/twitter.svg';
import fbsvg from './assets/fb.svg';
import instasvg from './assets/instagram.svg';
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem';

const header = (props) => {
    return (
        <div className="absolute headerTransparent headerForeground">
           {/*  <div className="wrapperVisible"> */}
                <header className="header">
                    <nav className="headerInner">
                        <div className="headerLogo">
                            <NavLink to="/" exact>
                                <div className="flex flexHorizontal flexJustifyStart flexAlignStretch flexNowrap" style={{flex: '1 1 auto'}}>
                                <img style={{'flex-grow': '0', 'flex-shrink': '0'}} className="clyde logo2 flexChild" src={logomark} alt="Positron"
                                        itemProp="logo" height="36" width="130" />
                                </div>
                            </NavLink>
                        </div>
                        {/*<ul className="headerNav">
                                {/* <NavItem exact to="/features">Features</NavItem>
                                <NavItem exact to="/download">Download</NavItem>
                                <NavItemMore exact to="/aa">
                                </NavItemMore>
                        </ul> */}
                        <ul className="headerNavRight">
                            <li class="listItemInactive listItem listItemSocialMedia">
                                <a class="rightNavLink navLink" href="//www.twitter.com/discordapp" rel="noopener noreferrer" target="_blank">
                                   
                                </a>
                            </li>
                            <NavItem target="_blank" alt="Twitter" href="https://twitter.com/positronglobal"> <img src={twittersvg} alt="Twitter"/></NavItem>
                            <NavItem target="_blank" alt="Facebook" href="https://fb.com/positronglobal"> <img src={fbsvg} alt="Facebook"/></NavItem>
                            <NavItem target="_blank" alt="Instagram" href="https://instagram.com/positronglobal"> <img src={instasvg} alt="Instagram"/></NavItem>
                        </ul>
                    </nav>
                </header>
           {/*  </div> */}
        </div>  
    );
}

export default header;