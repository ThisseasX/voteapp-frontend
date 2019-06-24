import React from 'react';
import Form from '../Form/Form';

export default ({ match }) => {

    // Fields
    const id       = { key: 1, name: 'id'      , type: 'number'  , placeholder: 'ID'              , required: true };
    const name     = { key: 2, name: 'name'    , type: 'text'    , placeholder: 'Name'            , required: true };
    const surname  = { key: 3, name: 'surname' , type: 'text'    , placeholder: 'Surname'         , required: true };
    const password = { key: 4, name: 'password', type: 'password', placeholder: 'Password'        , required: true };
    const confirm  = { key: 5, name: 'confirm' , type: 'password', placeholder: 'Confirm Password', required: true };

    // Buttons
    const login    = { variant: 'success', text: 'Log In'   };
    const register = { variant: 'info'   , text: 'Register' };

    // Forms
    const loginForm = {
        fields: [id, password],
        submit: login
    };

    const registerForm = {
        fields: [id, name, surname, password, confirm],
        submit: register
    };

    // Child props
    const form = match.path === '/login'
        ? loginForm
        : registerForm;

    const upperCaseNameAndSurname = (fieldName, value) =>
        [name.name, surname.name].includes(fieldName)
            ? value.toUpperCase()
            : value;

    return (
        <Form form={form} transformationCallback={upperCaseNameAndSurname} />
    );
};
