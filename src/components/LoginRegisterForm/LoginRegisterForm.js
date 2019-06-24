import React from 'react';
import Form from '../Form/Form';

export default ({ match }) => {

    // Fields
    const id = { key: 1, name: 'id', type: 'number', placeholder: 'ID' };
    const name = { key: 2, name: 'name', type: 'text', placeholder: 'Name' };
    const surname = { key: 3, name: 'surname', type: 'text', placeholder: 'Surname' };
    const password = { key: 4, name: 'password', type: 'password', placeholder: 'Password' };
    const confirm = { key: 5, name: 'confirm', type: 'password', placeholder: 'Confirm Password' };

    // Buttons
    const login = { variant: 'success', text: 'Log In' };
    const register = { variant: 'info', text: 'Register' };

    // Forms
    const loginForm = {
        fields: [id, password],
        submit: login
    };

    const registerForm = {
        fields: [id, name, surname, password, confirm],
        submit: register
    };

    const form = match.path === '/login'
        ? loginForm
        : registerForm;

    return (
        <Form form={form} />
    );
}
