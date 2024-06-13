import React from 'react';
import {Form, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from "axios";
import {HOST_NAME, LOGIN_PAGE} from "../../constants";

const LogIn = props => {

    const logIn = async () => {
        axios.get(`${HOST_NAME}/${LOGIN_PAGE}`,{

        })
    }

    return (
        <div className="w-75 flex flex-column align-items-center">
            <Form.Label>
                email
            </Form.Label>
            <Form.Control
                id="email"
            />
            <Form.Label>
                password
            </Form.Label>
            <Form.Control
                id="password"
            />
            <Button
                onClick={logIn}
            >
                Войти
            </Button>
        </div>
    );
};

LogIn.propTypes = {

};

export default LogIn;
