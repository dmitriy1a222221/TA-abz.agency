import React from 'react';

import PrimaryBtn from '00-components/PrimaryBtn';
import TextField from '00-components/TextField';
import SelectFieldContainer from '01-containers/SelectFieldContainer';
import FileField from '00-components/FileField';

import '00-components/Home/components/RegisterBlock/styles/style.scss';
import '00-components/Home/components/RegisterBlock/styles/media.scss';

export default ({ state, onChange, onSubmit, onBlur, setState }) => {
    const { name, email, phone, photo, dataIsReady } = state;

    return(
        <div
            id="signUp"
            className="w-register b-wrap commonClass"
        >
            <div className="b-register b-main">
                <h2 className="b-register__title title-h2-m title-h2-d-t">
                    Register to get a work
                </h2>
                <h5 className="b-register__subtitle title-h5-m title-h5-d-t">
                    Attention! After successful registration and alert,
                    update the list of users <span className="i-only-mobile"><br/></span>
                    in the block from the top
                </h5>
                <form action="#" className="b-register__contact-form contact-form">
                    <div className="b-register__form-row form-row">
                        <TextField
                            className="b-register__input"
                            legendName="Name"
                            id="name"
                            dataId="name"
                            placeholder="Your name"
                            type="text"
                            ariaInvalid={false}
                            assistiveText="The name field is invalid"
                            value={name}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                        <TextField
                            className="b-register__input"
                            legendName="Email"
                            id="email"
                            dataId="email"
                            placeholder="Your email"
                            type="text"
                            ariaInvalid={false}
                            assistiveText="The email field is invalid"
                            value={email}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                        <TextField
                            className="b-register__input"
                            legendName="Phone"
                            id="phone"
                            dataId="phoneNumber"
                            placeholder="+38 (___)  ___ __ __"
                            type="text"
                            ariaInvalid={false}
                            assistiveText="The phone field is invalid"
                            value={phone}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                    </div>
                    <div className="b-register__form-row form-row">
                        <SelectFieldContainer
                            setState={setState}
                            state={state}
                            className="b-register__select-input"
                        />
                        <FileField
                            className="b-register__file-input"
                            placeholder={photo.name}
                            onChange={onChange}
                        />
                    </div>
                    <PrimaryBtn
                        onClick={onSubmit}
                        disable={!dataIsReady}
                        className="b-register__btn"
                    >
                        Sign Up
                    </PrimaryBtn>
                </form>
            </div>
        </div>
    )
};
