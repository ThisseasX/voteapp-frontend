import React, { Component } from 'react';
import Form from '../Form/Form';

export default class LoginRegisterForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: { key: 1, name: 'id', type: 'number', placeholder: 'ID', value: '' },
            name: { key: 2, name: 'name', type: 'text', placeholder: 'Name', value: '' },
            surname: { key: 3, name: 'surname', type: 'text', placeholder: 'Surname', value: '' },
            password: { key: 4, name: 'password', type: 'password', placeholder: 'Password', value: '' },
            confirm: { key: 5, name: 'confirm', type: 'password', placeholder: 'Confirm Password', value: '' }
        };

        this.buttons = {
            login: { variant: 'success', text: 'Log In' },
            register: { variant: 'info', text: 'Register' }
        }
    }

    handleChange = (name, value) => {
        if (name === 'name' || name === 'surname') {
            value = value && value.toUpperCase();
        }

        this.setState(prevState => ({
            [name]: {
                ...prevState[name],
                value
            }
        }));
    }

    handleSubmit = () => {
        console.log(this.state);
    }

    render() {
        const loginForm = {
            fields: [
                this.state.id,
                this.state.password
            ],
            submit: this.buttons.login
        };

        const registerForm = {
            fields: [
                this.state.id,
                this.state.name,
                this.state.surname,
                this.state.password,
                this.state.confirm,
            ],
            submit: this.buttons.register
        };

        const form = this.props.match.path === '/login'
            ? loginForm
            : registerForm;

        return (
            <Form form={form} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        );
    }
}