import React, { useRef } from 'react';

import { BigH1, FooterWrapper } from './styled';

import FooterQR from '../../assets/images/footer-qr.png';
import useInView from '../hooks/useInView';
import TextSplitter from '../components/TextSplitter';

const Footer = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  const line1Visible = useInView(line1Ref);
  const line2Visible = useInView(line2Ref);
  const line3Visible = useInView(line3Ref);

  return (
    <FooterWrapper>
      <section className="ramos-footer">
        <div ref={line1Ref} className="footer-top">
          <ul
            className={`footer-nav ${line1Visible ? 'animate__animated animate__fadeInUp' : 'hidden'}`}
          >
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

          <h2
            className={`ramos-footer-email ${line1Visible ? 'animate__animated animate__fadeInUp' : 'hidden'}`}
          >
            <a href="mailto:hello@ramos.com">hello@ramos.com</a>
          </h2>
        </div>
        <div ref={line2Ref} className="ramos-footer-middle">
          <div
            className={`ramos-footer-address ${line2Visible ? 'animate__animated animate__fadeInUp' : 'hidden'}`}
          >
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
          <div
            className={`ramos-footer-social ${line2Visible ? 'animate__animated animate__fadeInUp' : 'hidden'}`}
          >
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
        <div className="ramos-footer-bottom" ref={line3Ref}>
          <BigH1
            color="var(--white)"
            className={line3Visible ? 'animate-heading' : ''}
          >
            <span className="block">
              <TextSplitter
                text={'Ramos'}
                appendedMarkup={<sup className="ramos-sup">&#174;</sup>}
              />
            </span>
          </BigH1>
          <a
            className={`${line3Visible ? 'animate__animated animate__fadeInUp' : 'hidden'}`}
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className={`${line3Visible ? 'animate__animated animate__fadeInUp' : 'hidden'}`}
            href="#"
          >
            License agreement
          </a>
          <img
            className={`footer-qr ${line3Visible ? 'animate__animated animate__zoomIn' : 'hidden'}`}
            src={FooterQR}
            alt="qr-code"
          />
        </div>
      </section>
    </FooterWrapper>
  );
};

export default Footer;
