import React from 'react';

import '00-components/SecondaryBtn/styles/style.scss';

export default ({ href, children, onClick, className, disable }) => {

    return(
        <a
            onClick={disable ? (e) => {e.preventDefault(); return} : onClick}
            href={href ? href : '#'}
            className={`${className} ${disable && 'disable'} secondaryBtn`}
        >
            {children}
        </a>
    )
};
