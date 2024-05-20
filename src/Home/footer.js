import React from 'react';

import { BigH1, FooterWrapper } from './styled';

import FooterQR from '../../assets/images/footer-qr.png';

const Footer = () => {
  return (
    <FooterWrapper>
      <section className="ramos-footer">
        <div className="footer-top">
          <ul className="footer-nav">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Why Us</a>
            </li>
            <li>
              <a href="#">Platform</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>

          <h2 className="ramos-footer-email">
            <a href="mailto:hello@ramos.com">hello@ramos.com</a>
          </h2>
        </div>
        <div className="ramos-footer-middle">
          <div className="ramos-footer-address">
            <div>
              <h5>Warrensville Heights</h5>
              <p className="light">
                14418 Vineyard Drive. NC
                <br />
                44128
              </p>
            </div>
            <div>
              <h5>Saint Louis</h5>
              <p className="light">
                1366 Penn Street
                <br />
                63101
              </p>
            </div>
          </div>
          <div className="ramos-footer-social">
            <ul>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ramos-footer-bottom">
          <BigH1 color="var(--white)">
            Ramos<sup className="ramos-sup">&#174;</sup>
          </BigH1>
          <a href="#">Privacy Policy</a>
          <a href="#">License agreement</a>
          <img className="footer-qr" src={FooterQR} alt="qr-code" />
        </div>
      </section>
    </FooterWrapper>
  );
};

export default Footer;
