import React, { useEffect, useContext, useState } from 'react';
import { connect } from 'react-redux';

import SelectField from '00-components/SelectField';

import { getPositions } from '03-actions/users';
import { selectFieldJsCtx } from 'utils/selectField';

const SelectFieldContainer = ({ positionUser, getPosition, setState, state, className }) => {
    const [selectId, changeSelectId] = useState(null);
    const { selectFieldLogic } = useContext(selectFieldJsCtx);
    useEffect(() => {
        getPosition();
        selectFieldLogic('select-dropdown', 'dropdown-content', selectId, changeSelectId);
    }, []);

    const onSelectClick = () => {
        setState({ ...state, position_id: selectId});
    };

    return(
        <SelectField
            className={className}
            onSelectClick={onSelectClick}
            positions={positionUser ? positionUser.positions : staticPosition}
        />
    )
};

const staticPosition = [
    { id: 1, name: "Lawyer" },
    { id: 2, name: "Content manager" },
    { id: 3, name: "Security" },
    { id: 4, name: "Designer" },
];

const mapStateToProps = ({ users }) => ({
    positionUser: users.positionUser
});

const mapDispatchToProps = dispatch => ({
    getPosition: () => dispatch(getPositions())
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectFieldContainer);
