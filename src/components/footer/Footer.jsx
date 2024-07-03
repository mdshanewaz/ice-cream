import React from "react";
import classes from './Footer.module.css';

const Footer = () => {
    return(
        <footer>
            <div className={['container', classes.container].join(' ')}>
                <div>Copyright &copy; 2020.</div>
                <div className="TextRight">
                    Built with <span>&hearts;</span> by 
                    <a href="https:\\linkedin.com" target="_blank">Create React App</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;