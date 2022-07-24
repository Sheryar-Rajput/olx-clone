import React from 'react';
// import './style.css';
// import './responsive.css';
import Logo from '../images/logo.png';
import sell from '../images/sell.svg'
function Navbar() {
  return (
    <>
   
    
          <header>
            <div className="top">
              <div className="container">
                <div className="left">
                  <div className="mainLogo">
                      <img  src={Logo} />
                  </div>
                  <div className="location">
                    {/* <i class="fas fa-globe-europe"></i> */}
                    <input type="text" placeholder="Location.." />
                  </div>
                  <div className="search">
                    <div className="searchFieldDiv">
                      <input type="text" placeholder="Search.." id="searchField" />
                    </div>
                    <div className="searchBtnDiv">
                      <button id="searchBtn"><i className="fas fa-search" /></button>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="signinBtnDiv">
                    <div className="dropdown">
                      <button id="signinBtn" className="showSignoutBtnHover">Sign in</button>
                      <div className="dropdownContent" id="dropdownContent">
                        <a href="javascript:void(0)" id="myAds">My Ads</a>
                        <a href="javascript:void(0)" id="favorites">Favorites</a>
                        <a href="javascript:void(0)" id="signoutBtn">Sign out</a>
                      </div>
                    </div>
                  </div>
                  <div className="sellBtnDiv">
                   <img  src={sell}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="container">
                <div className="dropdown">
                  <a href="javascript:void(0)" id="browseCategories">Browse by Categories &nbsp; <i className="fas fa-angle-down" /></a>
                  <div className="dropdownContent">
                    <a href="Javascript:void(0)" onclick="filter('All')">All Categories</a>
                    <a href="Javascript:void(0)" onclick="filter('Mobiles')">Mobiles</a>
                    <a href="Javascript:void(0)" onclick="filter('Vehicles')">Vehicles</a>
                    <a href="Javascript:void(0)" onclick="filter('Electronics')">Electronics</a>
                    <a href="Javascript:void(0)" onclick="filter('Bikes')">Bikes</a>
                    <a href="Javascript:void(0)" onclick="filter('Services')">Services</a>
                    <a href="Javascript:void(0)" onclick="filter('Furniture')">Furniture</a>
                  </div>
                </div>
              </div>
            </div>
          </header>
      





</>


  )
}

export default Navbar