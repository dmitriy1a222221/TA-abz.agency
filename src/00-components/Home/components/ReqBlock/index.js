import React from 'react';

import { ReactComponent as ManLaptop_1 } from 'assets/img/man-laptop-v1.svg';
import { ReactComponent as ManLaptop_2 } from 'assets/img/man-laptop-v2.svg';

import '00-components/Home/components/ReqBlock/styles/style.scss';
import '00-components/Home/components/ReqBlock/styles/media.scss';

export default () => (
    <div
        id="requirements"
        className="w-req b-wrap commonClass"
    >
        <div className="b-req b-main">
            <h2 className="b-req__title title-h2-m title-h2-d-t">
                General requirements <span className="i-not-desk"><br/></span>
                for the test task
            </h2>
            <div className="b-req__content">
                <ManLaptop_1 className="b-req__content-icon b-req__content-icon_1" />
                <ManLaptop_2 className="b-req__content-icon b-req__content-icon_2" />
                <div className="b-req__content-text">
                    <p className="b-req__content-descr paragraph-2">
                        Users want to find answers to
                        their questions quickly and data
                        shows that people really care
                        about how quickly their pages load.
                        The Search team announced speed would
                        be a ranking signal for desktop searches
                        in 2010 and as of this month (July 2018),
                        page speed will be a ranking factor for
                        mobile searches too.
                    </p>
                    <p className="b-req__content-descr paragraph-2">
                        If you're a developer working
                        on a site, now is a good time
                        to evaluate your performance using
                        our speed tools. Think about how performance
                        affects the user experience of your pages
                        and <span className="i-only-desk"><br/></span>
                        consider measuring a variety of real-world&nbsp;
                        <span className="i-only-mobile"><br/></span>
                        user-centric performance metrics.
                    </p>
                    <p className="b-req__content-descr paragraph-2">
                        Are you shipping too much JavaScript?
                        Too many images? Images and JavaScript
                        are the most significant contributors to the
                        page weight that affect page load time based
                        on data from HTTP Archive and the Chrome User
                        Experience Report - our public dataset for key
                        UX metrics as experienced by Chrome users under&nbsp;
                        <span className="i-only-mobile"><br/></span>
                        real-world conditions.
                    </p>
                </div>
            </div>
        </div>
    </div>
)
