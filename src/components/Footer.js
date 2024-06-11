import React from 'react';
import './Footer.css';

const Footer = () => {
  const certificates = ["Certified in Responsible Service of Alcohol (RSA)"];
  const socialMedia = {
    linkedIn: "https://www.linkedin.com/in/hiroki-fujii",
    github: "https://github.com/hiroki-fujii",
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>証明書・認定資格</h3>
          <p>{certificates.join(", ")}</p>
        </div>
        <div className="footer-section">
          <h3>ソーシャルメディア</h3>
          <p>
            <a href={socialMedia.linkedIn}>LinkedIn</a> | <a href={socialMedia.github}>GitHub</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
