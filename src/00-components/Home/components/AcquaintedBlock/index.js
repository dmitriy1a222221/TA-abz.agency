import React from 'react';

import { ReactComponent as ManMobile } from 'assets/img/man-mobile.svg';

import '00-components/Home/components/AcquaintedBlock/styles/style.scss';
import '00-components/Home/components/AcquaintedBlock/styles/media.scss';

export default () => (
    <div
        id="aboutMe"
        className="w-acquainted b-wrap commonClass"
    >
        <div className="b-acquainted b-main">
            <h2 className="b-acquainted__title title-h2-m title-h2-d-t">
                Let's get acquainted
            </h2>
            <div className="b-acquainted__content">
                <ManMobile className="b-acquainted__content-avatar"/>
                <div className="b-acquainted__content-text">
                    <h3 className="b-acquainted__content-title title-h3-m title-h3-d-t">
                        I am cool frontend <span className="i-only-mobile"><br/></span>
                        developer
                    </h3>
                    <p className="b-acquainted__content-descr">
                        When real users have a slow experience
                        on mobile, they're much less likely to
                        find what they are looking for or purchase
                        from you in the future. For many sites
                        this equates to a huge missed opportunity,
                        especially when more than half of visits
                        are abandoned if a mobile page takes over
                        3 seconds to load.
                    </p>
                    <p className="b-acquainted__content-descr">
                        Last week, Google Search and Ads teams
                        announced two new speed initiatives to
                        help improve user-experience on the web.
                    </p>
                    <a
                        href="#signUp"
                        className="b-acquainted__content-link link-1 title-h4-d-t-m nav-link"
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    </div>
);
