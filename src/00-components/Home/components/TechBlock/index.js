import React from 'react';

import { ReactComponent as HtmlIcon } from 'assets/img/html.svg';
import { ReactComponent as CssIcon } from 'assets/img/css.svg';
import { ReactComponent as JSIcon } from 'assets/img/javascript.svg';

import '00-components/Home/components/TechBlock/styles/style.scss';
import '00-components/Home/components/TechBlock/styles/media.scss';

export default () => (
    <div
        id="relationships"
        className="w-tech b-wrap commonClass"
    >
        <div className="b-tech b-main">
            <h2 className="b-tech__title title-h2-m title-h2-d-t">
                About my relationships with <span className="i-not-mobile"><br/></span>
                web-development
            </h2>
            <ul className="b-tech__content">
                <li className="b-tech__content-item b-tech__content-item_1">
                    <HtmlIcon className="b-tech__item-icon"/>
                    <div className="b-tech__item-text">
                        <h3 className="b-tech__item-title title-h3-m title-h3-d-t">
                            I'm in love with HTML
                        </h3>
                        <p className="b-tech__item-descr paragraph-2">
                            Hypertext Markup Language (HTML) <span className="i-only-mobile"><br/></span>
                            is the standard markup
                            language for creating web
                            pages and web applications.
                        </p>
                    </div>
                </li>
                <li className="b-tech__content-item b-tech__content-item_2">
                    <CssIcon className="b-tech__item-icon"/>
                    <div className="b-tech__item-text">
                        <h3 className="b-tech__item-title title-h3-m title-h3-d-t">
                            CSS is my best friend
                        </h3>
                        <p className="b-tech__item-descr paragraph-2">
                            Cascading Style Sheets (CSS)&nbsp; <span className="i-only-desk"><br/></span>
                            is a style sheet&nbsp; <span className="i-only-2k"><br/></span> language used
                            for describing the presentation&nbsp; <span  className="i-only-2k"><br/></span>
                            of a&nbsp; <span className="i-only-desk"><br/></span>
                            document written in a markup <span className="i-only-desk"><br/></span>
                            language&nbsp; <span className="i-only-2k"><br/></span> like HTML.
                        </p>
                    </div>
                </li>
                <li className="b-tech__content-item b-tech__content-item_3">
                    <JSIcon className="b-tech__item-icon"/>
                    <div className="b-tech__item-text">
                        <h3 className="b-tech__item-title title-h3-m title-h3-d-t">
                            JavaScript is my passion
                        </h3>
                        <p className="b-tech__item-descr paragraph-2">
                            JavaScript is a high-level,
                            interpreted programming language.&nbsp; <span className="i-only-table"><br/></span>
                            It is
                            a language which is also characterized
                            as dynamic, weakly typed, prototype-based
                            and &nbsp;
                            <span className="i-not-table"><br/></span>
                            multi-paradigm.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
);
