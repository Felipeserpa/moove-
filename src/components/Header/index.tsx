/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useLayoutEffect, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagramSquare,
} from 'react-icons/fa';
import Container from './styles';
import { FaWhatsapp } from 'react-icons/fa';
export default function Header() {
  const [active, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!active);
  };

  useLayoutEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [active]);

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <Container>
      <header className={navbar ? 'header active' : 'header'}>
        <nav>
          <div id="logo">
            <a href="/">
              <img
                src="/logo.png"
                alt=""
                style={{
                  width: 120,
                }}
              />
            </a>
          </div>
          <div className={active ? 'nav-menu  active' : 'nav-menu '}>
            <ul
              onClick={() => {
                setMode(false);
              }}
            >
              <li>
                <a href="#inicio">HOME</a>
              </li>
              <li>
                <a href="#cliente">MISSÂO</a>
              </li>

              <li>
                <a href="#skills">SERVIÇOS</a>
              </li>
              <li>
                <a href="#contact">CONTATO</a>
              </li>
            </ul>

            <div
              className="social-links"
              onClick={() => {
                setMode(false);
              }}
            >
              <a
                href=" https://wa.me/message/VOG6YD5POXPPG1"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/moove_transportes?utm_source=qr&igsh=MXY3NXVyOTA2d2lyYg=="
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div
            className={active ? 'hamburger active' : 'hamburger'}
            id="one"
            onClick={toggleMode}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </nav>
      </header>
    </Container>
  );
}
