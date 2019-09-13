import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import RegisterBlock from '00-components/Home/components/RegisterBlock';

import { updateUsers } from '03-actions/updateUsers'
import { postDataUser } from '03-actions/users/index';
import { validationLogic } from 'utils/validation';

const RegisterBlockContainer = ({ changeUpdateUsers, postDataUser, registerInfo }) => {
    const [state, setState] = useState({
        position_id: '',
        name: '',
        email: '',
        phone: '',
        photo: '',
        dataIsReady: false
    });
    const [allFieldSuccsses, setStateAllFieldSuccsses] = useState(false);

    useEffect(() => {
        validationLogic();

        checkFilling();
    },[state.position_id, state.name, state.email, state.phone, state.photo]);

    useEffect(() => {
        changeUpdateUsers(true);
    }, [registerInfo]);

    const onChange = (e) => {
        if(e.target.id === "photo") {
            setState({ ...state, [e.target.id]: e.target.files[0] })
        } else {
            setState({ ...state, [e.target.id]: e.target.value });
        }

        onBlur();
    };

    const onBlur = () => {
        const input = document.querySelector('.text-field-block_error');
        setStateAllFieldSuccsses(Boolean(!input));
    };

    const checkFilling = () => {
        const { position_id, name, email, phone, photo } = state;

        if(Boolean(name) && Boolean(email) && Boolean(phone) && Boolean(position_id) && Boolean(photo) && Boolean(allFieldSuccsses)) {
            setState({ ...state, dataIsReady: true })
        } else {
            setState({ ...state, dataIsReady: false })
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const { position_id, name, email, phone, photo, dataIsReady } = state;

        if(!dataIsReady) return;

        let formData = new FormData();

        formData.append('position_id', position_id);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('photo', photo);

        postDataUser(formData);

        setState({
            position_id: '',
            name: '',
            email: '',
            phone: '',
            photo: '',
            dataIsReady: false
        });
    };

    return(
        <RegisterBlock
            state={state}
            onChange={onChange}
            onSubmit={onSubmit}
            onBlur={onBlur}
            setState={setState}
        />
    )
};

const mapStateToProps = ({ users }) => ({
    registerInfo: users.registerInfo
});

const mapDispatchToProps = dispatch => ({
    postDataUser: (data) => dispatch(postDataUser(data)),
    changeUpdateUsers: (state) => dispatch(updateUsers(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterBlockContainer);
