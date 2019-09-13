import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Header from '00-components/Layout/components/Header';

import { getHeaderUser } from '03-actions/users';

const HeaderContainer = ({ headerUser, getHeaderUser }) => {
    const [ openMenu, setOpenMenu ] = useState(false);
    useEffect(() => {
        getHeaderUser(1);
    }, []);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    };

    return(
        <Header
            mobActive={openMenu}
            onClickBtn={toggleMenu}
            headerUser={headerUser ? headerUser : {} }
        />
    )
};

const mapStateToProps = ({ users }) => ({
    headerUser: users.headerUser
});

const mapDispatchToProp = dispatch => ({
    getHeaderUser: (params) => dispatch(getHeaderUser(params))
});

export default connect(mapStateToProps, mapDispatchToProp)(HeaderContainer);
