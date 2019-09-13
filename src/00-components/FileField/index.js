import React from 'react';

import { ReactComponent as Upload } from 'assets/img/icons/upload.svg';

import '00-components/FileField/styles/style.scss';
import '00-components/FileField/styles/media.scss';

export default ({ className, onChange, placeholder }) => (
    <div className={`${className} wrap-file-field`}>
        <div className="file-field input-field">
            <div className="file-path-wrapper">
                <input
                    className="file-path paragraph_2"
                    type="text"
                    placeholder={placeholder ? placeholder : 'Upload your photo'}
                />
            </div>
            <div className="file-btn">
                <span>Upload</span>
                <Upload className="upload"/>
                <input
                    className="item-check"
                    type="file"
                    id="photo"
                    onChange={onChange}
                    name="file"
                />
            </div>

        </div>
        <p className="assistive">
            File format jpg  up to 5 MB, the minimum size of 70x70px
        </p>
    </div>
);
