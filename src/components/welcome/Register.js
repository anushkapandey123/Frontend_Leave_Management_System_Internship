import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
// import './styles/lr.css';




const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
};

const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str}`;
};

const validationSchema = Yup.object({
    name: Yup.string("Enter name")
        .required("Name is required")
        .matches(/^[\s]*[^\s]+.*[\s]*$/, "Name is required"),
    email: Yup.string("Enter email")
        .email("Please enter valid email")
        .required("Email is required"),
    phoneNumber: Yup.string("Enter mobile number")
        .required("Mobile number is required")
        .min(10, "Enter a valid mobile number")
        .max(10, "Enter a valid mobile number")
        .matches(/^[6-9][0-9]*$/, "Enter a valid mobile number"),
    password: Yup.string("Enter password")
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long")
        .max(64, "Password must be at most 64 characters long")
        .matches(/[0-9]/, getCharacterValidationError("number"))
        .matches(/[A-Z]/, getCharacterValidationError("uppercase character"))
        .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, getCharacterValidationError("special character")),
    confirmPassword: Yup.string("Re-enter password")
        .required("Confirm password is required")
        .oneOf([Yup.ref('password'), null], 'Password and confirm password do not match'),
});

const Register = ({ setToLogin }) => {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };


    const handleRegister = async (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
        const { name, email, phoneNumber, password } = values;

        try {
            const response = await axios.post('http://localhost:8080/signup', { 
                name, 
                email, 
                phone_number: parseInt(phoneNumber), 
                password 
            });

            if (response.status === 201) {
                setStatus({ success: 'User registered successfully' });
                enqueueSnackbar('Signup successful 😍', { variant: 'success' });
                resetForm();
                setToLogin();
                // navigate('/');
            }
        } catch (error) {
            setErrors({ submit: 'Failed to register user' });
            enqueueSnackbar('Signup failed 😅', { variant: 'error' });
        }

        setSubmitting(false);
    };

    return (
        <div className="form-container sign-up">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleRegister}
            >
                {({ isSubmitting, status, errors, touched }) => (
                    <Form>
                        <div className="form-content">
                            <h1>Sign Up</h1>
                        </div>
                        <div className="logo-container">
                            <img src="/logo.png" alt="Logo" className="logo" />
                        </div>
                        <div className="form-group">
                            <Field 
                                type="text" 
                                name="name" 
                                placeholder="Name"
                                className={`input-field ${touched.name && errors.name ? 'input-error' : ''}`} 
                            />
                            <ErrorMessage name="name" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <Field 
                                type="email" 
                                name="email" 
                                placeholder="Email"
                                className={`input-field ${touched.email && errors.email ? 'input-error' : ''}`} 
                            />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <Field 
                                type="text" 
                                name="phoneNumber" 
                                placeholder="Phone Number"
                                className={`input-field ${touched.phoneNumber && errors.phoneNumber ? 'input-error' : ''}`} 
                            />
                            <ErrorMessage name="phoneNumber" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <Field 
                                type="password" 
                                name="password" 
                                placeholder="Password"
                                className={`input-field ${touched.password && errors.password ? 'input-error' : ''}`} 
                            />
                            <ErrorMessage name="password" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <Field 
                                type="password" 
                                name="confirmPassword" 
                                placeholder="Confirm Password"
                                className={`input-field ${touched.confirmPassword && errors.confirmPassword ? 'input-error' : ''}`} 
                            />
                            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
                        </div>
                        <button type="submit" disabled={isSubmitting} className="submit-button">Sign Up</button>
                        {errors.submit && <div className="error">{errors.submit}</div>}
                        {status && status.success && <div className="message">{status.success}</div>}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;