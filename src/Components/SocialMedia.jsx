import React from 'react';
import { FaGithub, FaLinkedin,FaEnvelope , FaWhatsapp } from 'react-icons/fa';

function SocialMedia() {
  return (
    <ul style={{ display: 'flex', flexWrap:"wrap", gap: '2rem' }} aria-label="Social media">
      <li>
        <a
          href="https://github.com/tahirkamal19"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={44} color="#0e76a8" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/tk19"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
         <FaLinkedin size={44} color="#0e76a8"/>
        </a>
      </li>
      <li>
        <a
          href="mailto:tahirkamal6@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope size={44} color="#0e76a8"/>
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/03366562329"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={44} color="#0e76a8" />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
