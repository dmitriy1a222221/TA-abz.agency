import React from 'react';

import '00-components/SelectField/styles/style.scss';
import '00-components/SelectField/styles/media.scss';

export default ({ className, positions, onSelectClick }) => (
    <div className={`${className} select-wrapper`}>
        <input
            className="select-dropdown item-check"
            type="text"
            placeholder="Select your position"
        />
        <ul
            className="dropdown-content"
        >
            {
                positions.map(pos => (
                    <li
                        key={pos.id}
                        id={pos.id}
                        onClick={onSelectClick}
                    >
                        <span>{pos.name}</span>
                    </li>
                ))
            }
        </ul>
        <svg
            className="caret"
            height="60"
            viewBox="0 0 24 24"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M7 10l5 5 5-5z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
    </div>
);
