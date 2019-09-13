import React from 'react';

import '00-components/PrimaryBtn/styles/style.scss';

export default ({ href, children, className, onClick, disable }) => {

    return(
        <a
            onClick={disable ? (e) => {e.preventDefault(); return}  : onClick}
            href={href ? href : '#'}
            className={`${className} ${disable && 'disable'} primaryBtn`}
        >
            {children}
        </a>
    )
}