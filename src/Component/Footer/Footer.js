import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faLinkedinIn, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer pt-5">
            <div className="custom-icon pb-4 mt-5 d-flex justify-content-center">
            
                <a href="https://www.facebook.com/profile.php?id=100028062492401" target="_blank"><FontAwesomeIcon  icon={faFacebookSquare}/></a>
                <a href="" target="_blank"><FontAwesomeIcon  icon={faYoutubeSquare}/></a>
                <a href="" target="_blank"><FontAwesomeIcon  icon={faInstagram}/></a>
                <a href="https://www.linkedin.com/in/shoman-miah-91bb05210/" target="_blank"><FontAwesomeIcon  icon={faLinkedinIn} /></a>
            </div>
            <div className="pb-3 d-flex justify-content-center coustom-copyright">
            
                <small className=""> ©2021. All rights reserved, Shoman, Dhaka, Bangladesh. </small>
            </div>
        </div>
    );
};

export default Footer;