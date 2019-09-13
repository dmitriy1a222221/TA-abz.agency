import React from 'react';

import PrimaryBtn from '00-components/PrimaryBtn';

import '00-components/Home/components/TABlock/styles/style.scss';
import '00-components/Home/components/TABlock/styles/media.scss';

export default () => (
    <div className="w-TABlock b-wrap">
        <div className="b-TABlock b-main">
            <h1 className="b-TABlock__title-h1 title-h1-m title-h1-t title-h1-d">
                Test assignment for <br/>
                Frontend Developer <br/>
                position
            </h1>
            <p className="b-TABlock__paragraph-2 paragraph-2">
                We kindly remind you that your test assignment
                should be submitted
                as a link to github/bitbucket repository.&nbsp;
                <span className="b-TABlock__not-mobile">
                    Please be patient, we consider
                    and respond to every application that
                    meets minimum requirements. We look forward
                    to your submission.
                    Good luck!
                </span>
            </p>
            <PrimaryBtn
                href="#signUp"
                className="nav-link"
            >
                Sign Up
            </PrimaryBtn>
        </div>
    </div>
);
