import React from "react";


import company from'../../../imgs/company.png';
import Face from '../../../imgs/Face.png';
import In from '../../../imgs/In.png';
import Insta from '../../../imgs/Insta.png';


import './Styles.css';


const Footer = () => {


    return (
        <div id="Footer">
            <ul>
                <li><a href="https://www.wpp.com/" target="_blank" rel="noreferrer"><img id="Company" src={company} alt="company"/></a></li>
                <li><a href="https://www.facebook.com/agencia.jussi" target="_blank" rel="noreferrer"><img id="Face" className="social" src={Face} alt="facbook" /></a></li>
                <li><a href="https://www.instagram.com/jussi/" target="_blank" rel="noreferrer"><img id="Insta" className="social" src={Insta} alt="insta" /></a></li>
                <li><a href="https://www.linkedin.com/company/agencia-jussi/" target="_blank" rel="noreferrer"><img id="In" className="social" src={In} alt="linkedin" /></a></li>
            </ul>
        </div>

    )
}

export default Footer;