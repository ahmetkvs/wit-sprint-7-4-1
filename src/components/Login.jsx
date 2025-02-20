import React, { useState, useEffect} from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormFeedback
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import axios from "axios";

const initialForm = {
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
    At least one digit`,
};

const strongPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Login() {
    let history = useHistory();
    const [formData, setFormData] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState({});

    useEffect(() => {
        const newErrors = {};
        if (!emailRegex.test(formData.email)) {
          newErrors.email = errorMessages.email;
        }
        if (!strongPasswordRegex.test(formData.password)){
          newErrors.password = errorMessages.password;
        }
        if (!formData.terms) {
          newErrors.terms = 'You must accept the terms';
        }
        setErrors(newErrors);
        setIsValid(Object.keys(newErrors).length === 0);
    }, [formData]);

    const handleChange = (event) => {
        let { name, value, type, checked } = event.target;
        value = (type === 'checkbox') ? checked : value;
        setFormData({...formData, [name]: value});
        //console.log(value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isValid) return;
    /*Denemek için
    "password": "Hs9FVCKFrqf1mdH",
    "email": "Marcelo89@yahoo.com",
    */
        axios 
          .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
          .then((res) => {
            const user = res.data.find(
              (item) => item.password ===formData.password && item.email === formData.email
            );
            if (user) {
              setFormData(initialForm);
              history.push('/success');
            } else {
              history.push('/error');
            }
        });
    };

        return (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  onChange={handleChange}
                  value={formData.email}
                  invalid={!!errors.email}
                />
                {errors.email && <FormFeedback>{errors.email}</FormFeedback>}
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  onChange={handleChange}
                  value={formData.password}
                  invalid={!!errors.password}
                />
                {errors.password && <FormFeedback>{errors.password}</FormFeedback>}
              </FormGroup>
              <FormGroup check>
                <Input
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  type="checkbox"
                  onChange={handleChange}
                />{' '}
                <Label htmlFor="terms" check>
                  I agree to terms of service and privacy policy
                </Label>
                {errors.terms && <div className="text-danger">{errors.terms}</div>}
              </FormGroup>
              <FormGroup>
                <Button disabled={!isValid}>
                  Sign In
                </Button>
              </FormGroup>
            </Form>
          );
}