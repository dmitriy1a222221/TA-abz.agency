import React from 'react';

import Avatar from 'assets/img/user-alexander-2x.jpg';

import '00-components/Home/components/UsersItem/styles/style.scss';
import '00-components/Home/components/UsersItem/styles/media.scss';

export default ({ className, name, imgUrl, vector, email, phone }) => (
    <div className={`${className} b-user-item`}>
        <img
            className="b-user-item__icon"
            src={imgUrl ? imgUrl : Avatar}
            alt="user avatar"
        />
        <div className="b-user-item__content">
            <div className="b-tooltip">
                <h4
                    className="b-user-item__content-title title-h4-d-t-m"
                    data-tooltip={name ? name : 'Noah'}
                >
                    {name ? name : 'Noah'}
                </h4>
            </div>
            <div className="b-tooltip">
                <p
                    className="b-user-item__content-descr b-user-item__content-descr_1 paragraph-3"
                    data-tooltip={vector ? vector : 'Leading specialist of the Control Department'}
                >
                    {vector ? vector : 'Leading specialist of the Control Department'}
                </p>
            </div>
            <div className="b-tooltip">
                <p
                    className="b-user-item__content-descr b-user-item__content-descr_2 paragraph-3"
                    data-tooltip={email ? email : 'noah.controldepartment@gmail...'}
                >
                    {email ? email : 'noah.controldepartment@gmail...'}
                </p>
            </div>
            <div className="b-tooltip">
                <p
                    className="b-user-item__content-descr b-user-item__content-descr_3 paragraph-3"
                    data-tooltip={phone ? phone : '+38 (050) 678 03 24'}
                >
                    {phone ? phone : '+38 (050) 678 03 24'}
                </p>
            </div>
        </div>
    </div>
);
