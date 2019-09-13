import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from '00-components/Layout/components/Header';

import { getHeaderUser } from '03-actions/users';

const HeaderContainer = ({ headerUser, getHeaderUser }) => {

    useEffect(() => {
        getHeaderUser(1);
    }, []);

    return(
        <Header
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
