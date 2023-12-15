import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';  
import axios from 'axios';
import * as Yup from 'yup';


const Signup = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            phoneNumber: '',
            location: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Поле не може бути порожнім'),
            lastName: Yup.string().required('Поле не може бути порожнім'),
            password: Yup.string().required('Поле не може бути порожнім'),
            email: Yup.string().email('Введіть коректний email').required('Поле не може бути порожнім'),
            phoneNumber: Yup.string().required('Поле не може бути порожнім'),
            location: Yup.string().required('Поле не може бути порожнім'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post('http://localhost:5500/api/create_user', values);
                console.log('Response:', response);
                navigate("/login");
            } catch (error) {
                console.error('Error:', error);
            }
        },
    });


    return (
        <div>
            <h2>Реєстрація</h2>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    Ім'я:
                    <input
                        type="text"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                    />
                </label>
                <div className="error-message">{formik.errors.firstName}</div>
                <br />
                <label>
                    Прізвище:
                    <input
                        type="text"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                    />
                </label>
                <div className="error-message">{formik.errors.lastName}</div>
                <br />

                <label>
                    Пароль:
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </label>
                <div className="error-message">{formik.errors.password}</div>

                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </label>
                <div className="error-message">{formik.errors.email}</div>

                <br />
                <label>
                    Номер телефону:
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                    />
                </label>
                <div className="error-message">{formik.errors.phoneNumber}</div>

                <br />
                <label>
                    Місце знаходження:
                    <input
                        type="text"
                        name="location"
                        value={formik.values.location}
                        onChange={formik.handleChange}
                    />
                </label>
                <div className="error-message">{formik.errors.location}</div>

                <br />
                <button type="submit">Зареєструватися</button>
            </form>
        </div>
    );
};

export default Signup;
