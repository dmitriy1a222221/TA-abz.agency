import React from 'react';

import UserItem from '00-components/Home/components/UsersItem';
import SecondaryBtn from '00-components/SecondaryBtn';

import '00-components/Home/components/UsersBlock/styles/style.scss';
import '00-components/Home/components/UsersBlock/styles/media.scss';

export default ({ users, showMore, userEnd }) => (
    <div
        id="users"
        className="w-users b-wrap commonClass"
    >
        <div className="b-users b-main">
            <h2 className="b-users__title title-h2-m title-h2-d-t">
                Our cheerful users
            </h2>
            <h5 className="b-users__subtitle title-h5-m title-h5-d-t">
                Attention! Sorting users <span className="i-only-mobile"><br/></span>
                by registration date
            </h5>
            <div className="b-users__content">
                {
                    users ?
                        users.map(user => {
                            const { email, id, name, phone, photo, position } = user;

                            return(
                                <UserItem
                                    key={id}
                                    className="b-users__user-item"
                                    name={name}
                                    vector={position}
                                    email={email}
                                    phone={phone}
                                    imgUrl={photo}
                                />
                            )
                        })
                        : 'Data not found'
                }
            </div>
            <SecondaryBtn
                className="b-users__btn"
                disable={userEnd}
                onClick={(e) => showMore(e)}
            >
                Show more
            </SecondaryBtn>
        </div>
    </div>
);
