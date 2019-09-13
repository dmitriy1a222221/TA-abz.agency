import React from 'react';

import { ReactComponent as Logo } from 'assets/img/logo/logo.svg';
import { ReactComponent as LineMenu } from 'assets/img/icons/line-menu.svg';
import { ReactComponent as SignOutIcon } from 'assets/img/icons/sign-out.svg';
import UserAvatar from 'assets/img/user-superstar-2x.jpg';

import '00-components/Layout/components/Header/styles/style.scss';
import '00-components/Layout/components/Header/styles/media.scss';

export default ({ headerUser : { email, name, photo }}) => (
    <header
        id="header"
        className='b-wap w-header'
    >
        <div className="b-main b-header">
            <Logo
                width={135}
                className="b-header__logo"
            />
            <LineMenu
                className="b-hamburger"
                width={23}
            />
            <div className="b-header__tools">
                <nav className="b-header__nav-list">
                    <a
                        href="#aboutMe"
                        className="b-header__nav-item nav-link link-3 aboutMe"
                    >
                        About me
                    </a>
                    <a
                        href="#relationships"
                        className="b-header__nav-item nav-link link-3 relationships"
                    >
                        Relationships
                    </a>
                    <a
                        href="#requirements"
                        className="b-header__nav-item nav-link link-3 requirements"
                    >
                        Requirements
                    </a>
                    <a
                        href="#users"
                        className="b-header__nav-item nav-link link-3 users"
                    >
                        Users
                    </a>
                    <a
                        href="#signUp"
                        className="b-header__nav-item nav-link link-3 signUp"
                    >
                        Sign Up
                    </a>
                </nav>
                <div className="b-header__user-info">
                    <div>
                        <p className="b-header__user-name">
                            { name ? name : 'Superstar' }
                        </p>
                        <p className="b-header__user-email">
                            { email ? email : 'Superstar@gmail.com' }
                        </p>
                    </div>
                    <img
                        src={ photo ? photo : UserAvatar }
                        alt="user avatar"
                        className="b-header__user-avatar"
                    />
                    <SignOutIcon />
                </div>
            </div>
        </div>
    </header>
)
