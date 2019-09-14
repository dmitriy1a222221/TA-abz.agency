import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import UsersBlock from '00-components/Home/components/UsersBlock';

import { getUsers } from '03-actions/users';
import { updateUsers } from '03-actions/updateUsers';

const UsersBlockContainer = ({ getUsers, users, data, updateUsersState, changeUpdateUsers }) => {
    const [state, setState] = useState({
        page: 1,
        countItems: 6,
        countItemsPlus: 6,
        userEnd: false
    });

    useEffect(() => {
        const { page, countItems } = state;

        getUsers({
            page: page,
            count: countItems
        });
        disablingBtn();

    }, [state.countItems]);

    useEffect(() => {
        const { page, countItemsPlus } = state;

        if(updateUsersState) {
            setState({...state, countItems: countItemsPlus});
            getUsers({
                page: page,
                count: 6
            });
            changeUpdateUsers(false);
        }
    }, [users, updateUsersState]);

    const showMore = (e) => {
        e.preventDefault();
        const { countItems } = state;
        setState({...state, countItems: countItems + 6});
    };

    const disablingBtn = () => {
        if (!data) return;
        const { total_users } = data;
        const { countItems } = state;

        if(countItems >= total_users - 12) {
            setState({...state, userEnd: true});
        } else {
            setState({...state, userEnd: false});
        }
    };

    return(
        <UsersBlock
            users={users}
            showMore={showMore}
            userEnd={state.userEnd}
        />
    )
};

const mapStateToProps = ({ users }) => ({
    data: users.data,
    users: users.users,
    updateUsersState: users.updateUsers
});

const mapDispatchToProps = dispatch => ({
    getUsers: (params) => dispatch(getUsers(params)),
    changeUpdateUsers: (state) => dispatch(updateUsers(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersBlockContainer);
