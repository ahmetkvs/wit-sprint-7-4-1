import React, { useState, useEffect} from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import axios from "axios";

const initalForm = {
    email: '',
    password: '',
    terms: false,
};

const errorMessages = {
    email: 'please enter a valid email address',
    password: `Choose a stronger password,
    At least 8 characters long
    At least one uppercase (English) letter
    At least one lowercase (English) letter
    At least one digit
    At least one special charcter`,
};

const strongPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Login() {

    return (
        <p>Helloooo</p>
    );
}