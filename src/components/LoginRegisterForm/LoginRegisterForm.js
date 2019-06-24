import React, { Component } from 'react';
import Form from '../Form/Form';

export default class LoginRegisterForm extends Component {

    constructor(props) {
        super(props);

        this.fields = {
            id: { key: 1, name: 'id', type: 'number', placeholder: 'ID' },
            name: { key: 2, name: 'name', type: 'text', placeholder: 'Name' },
            surname: { key: 3, name: 'surname', type: 'text', placeholder: 'Surname' },
            password: { key: 4, name: 'password', type: 'password', placeholder: 'Password' },
            confirm: { key: 5, name: 'confirm', type: 'password', placeholder: 'Confirm Password' }
        };

        this.buttons = {
            login: { variant: 'success', text: 'Log In' },
            register: { variant: 'info', text: 'Register' }
        }
    }

    render() {
        const { id, name, surname, password, confirm } = this.fields;
        const { login, register } = this.buttons;

        const loginForm = {
            fields: [id, password],
            submit: login
        };

        const registerForm = {
            fields: [id, name, surname, password, confirm],
            submit: register
        };

        const form = this.props.match.path === '/login'
            ? loginForm
            : registerForm;

        return (
            <Form form={form} />
        );
    }
}