import React from 'react';

import { ReactComponent as LogoFooter } from 'assets/img/logo/logo.svg';
import { ReactComponent as Mail } from 'assets/img/icons/mail.svg';
import { ReactComponent as Phone } from 'assets/img/icons/phone.svg';
import { ReactComponent as CellPhone } from 'assets/img/icons/cellphone.svg';
import { ReactComponent as Facebook } from 'assets/img/icons/facebook.svg';
import { ReactComponent as LinkedIn } from 'assets/img/icons/linkedin.svg';
import { ReactComponent as Instagram } from 'assets/img/icons/instagram.svg';
import { ReactComponent as Twitter } from 'assets/img/icons/twitter.svg';
import { ReactComponent as Pinterest } from 'assets/img/icons/pinterest.svg';

import '00-components/Layout/components/Footer/styles/style.scss';
import '00-components/Layout/components/Footer/styles/media.scss';

export default () => (
    <footer className="w-footer b-wrap">
        <div className="b-footer b-main b-footer__top-content">
            <LogoFooter className="b-footer__logo-footer" />
            <nav className="b-footer__nav-list">
                <a
                    href="#"
                    className="b-footer__nav-item link-2"
                >
                    About me
                </a>
                <a
                    href="#"
                    className="b-footer__nav-item link-2"
                >
                    Relationships
                </a>
                <a
                    href="#"
                    className="b-footer__nav-item link-2"
                >
                    Requirements
                </a>
                <a
                    href="#"
                    className="b-footer__nav-item link-2"
                >
                    Users
                </a>
                <a
                    href="#"
                    className="b-footer__nav-item link-2"
                >
                    Sign Up
                </a>
            </nav>
        </div>
        <div className="divider"/>
        <div className="b-footer b-main b-footer__bottom-content">
            <div className="b-footer__b-contacts">
                <ul className="b-footer__contacts">
                    <li className="b-footer__contact">
                        <Mail className="b-footer__contact-icon"/>
                        <p className="b-footer__contact-descr">
                            work.of.future@gmail.com
                        </p>
                    </li>
                    <li className="b-footer__contact">
                        <Phone className="b-footer__contact-icon"/>
                        <p className="b-footer__contact-descr">
                           +38 (050) 789 24 98
                        </p>
                    </li>
                    <li className="b-footer__contact">
                        <CellPhone className="b-footer__contact-icon"/>
                        <p className="b-footer__contact-descr">
                            +38 (095) 556 08 45
                        </p>
                    </li>
                </ul>
                <nav className="b-footer__nav-link-list">
                    <div className="b-footer__nav-part">
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            News
                        </a>
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            Blog
                        </a>
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            Partners
                        </a>
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            Shop
                        </a>
                    </div>
                    <div className="b-footer__nav-part">
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            Overview
                        </a>
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            Design
                        </a>
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            Code
                        </a>
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            Collaborate
                        </a>
                    </div>
                    <div className="b-footer__nav-part">
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            Tutorials
                        </a>
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            Resources
                        </a>
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            Guides
                        </a>
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            Examples
                        </a>
                    </div>
                    <div className="b-footer__nav-part">
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            FAQ
                        </a>
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            Terms
                        </a>
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            Conditions
                        </a>
                        <a
                            href="#"
                            className="b-footer__nav-link-item paragraph-2 link-2"
                        >
                            Help
                        </a>
                    </div>
                </nav>
            </div>
            <div className="b-footer__b-copiright">
                <p className="b-footer__copiright">
                    © abz.agency specially for the test task
                </p>
                <div className="b-footer__b-social">
                    <a
                        href="#"
                        className="b-footer__social-item"
                    >
                        <Facebook className="b-footer__social-item-img"/>
                    </a>
                    <a
                        href="#"
                        className="b-footer__social-item"
                    >
                        <LinkedIn className="b-footer__social-item-img"/>
                    </a>
                    <a
                        href="#"
                        className="b-footer__social-item"
                    >
                        <Instagram className="b-footer__social-item-img"/>
                    </a>
                    <a
                        href="#"
                        className="b-footer__social-item"
                    >
                        <Twitter className="b-footer__social-item-img"/>
                    </a>
                    <a
                        href="#"
                        className="b-footer__social-item"
                    >
                        <Pinterest className="b-footer__social-item-img"/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
)