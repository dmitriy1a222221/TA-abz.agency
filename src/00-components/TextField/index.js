import React from 'react';

import '00-components/TextField/styles/style.scss';
import '00-components/TextField/styles/media.scss';

export default (props) => {

    const {
        legendName,
        id,
        dataId,
        placeholder,
        className,
        type,
        ariaInvalid,
        assistiveText,
        value,
        onChange,
        onBlur
    } = props;

    return(
        <div className={`${className} text-field-block`}>
            <div className="field-wrap">
                <fieldset aria-hidden="true" className="fieldset">
                    <legend className="legend"><span>{legendName}</span></legend>
                </fieldset>
                <input
                    id={id}
                    data-id={dataId}
                    placeholder={placeholder}
                    className={`${className} text-field paragraph-2 item-check`}
                    type={type}
                    aria-invalid={ariaInvalid}
                    value={value || ''}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>
            <p className="assistive">{assistiveText}</p>
        </div>
    )
};
