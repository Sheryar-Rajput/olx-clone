import React from 'react'
import './style.css';
import './responsive.css';
import BannerImg from '../images/banner.jpg';
import Image from 'react-bootstrap/Image'
function Banner() {

  return (
   
    
    <div class="mainBanner" id="mainBanner">
<Image src={BannerImg} fluid={true}  />
</div>
 
    )
}

export default Banner