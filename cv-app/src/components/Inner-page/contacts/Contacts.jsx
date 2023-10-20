import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Contacts.scss";

import {
  faSkype,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Contacts() {
  return (
    <section className="contacts-container">
      <article>
        <a href="tel:500342342">
          <div className="icon-txt">
            <FontAwesomeIcon icon={faPhone} className="socials-icon" />
            <span>500 342 342</span>
          </div>
        </a>
      </article>

      <article>
        <a href="mailto:office@kamsolutions.pl">
          <div className="icon-txt">
            <FontAwesomeIcon icon={faEnvelope} className="socials-icon" />
            <span>office@kamsolutions.pl</span>
          </div>
        </a>
      </article>

      <article>
        <a
          href="https://twitter.com/wordpress"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-txt">
            <FontAwesomeIcon icon={faTwitter} className="socials-icon" />
            <div>
              <span>Twitter</span>
              <p>https://twitter.com/wordpress</p>
            </div>
          </div>
        </a>
      </article>

      <article>
        <a
          href="https://facebook.com/wordpress"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-txt">
            <FontAwesomeIcon icon={faFacebook} className="socials-icon" />
            <div>
              <span>Facebook</span>
              <p>https://facebook.com/wordpress</p>
            </div>
          </div>
        </a>
      </article>

      <article>
        <a
          href="skype:kamsolutions.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-txt">
            <FontAwesomeIcon icon={faSkype} className="socials-icon" />
            <div>
              <span>Skype</span>
              <p>skype:kamsolutions.pl</p>
            </div>
          </div>
        </a>
      </article>
    </section>
  );
}

export default Contacts;
