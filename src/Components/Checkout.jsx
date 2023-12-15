import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const ErrorMessage = ({ message }) => <div style={{ color: 'red' }}>{message}</div>;

const Checkout = () => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is a required field'),
        lastName: Yup.string().required('Last name is a required field'),
        email: Yup.string().email('Email is incorrect').required('Email is a required field'),
        phone: Yup.string()
            .matches(/^\d+$/, 'Only numbers are allowed')
            .required('Phone number is a required field'),
        address: Yup.string().required('Address is a required field'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Form submitted successfully!', values);
            navigate('/success'); // Use navigate for programmatic navigation
        },
    });

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                        <ErrorMessage message={formik.errors.firstName} />
                    )}
                </div>

                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                        <ErrorMessage message={formik.errors.lastName} />
                    )}
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <ErrorMessage message={formik.errors.email} />
                    )}
                </div>

                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                        <ErrorMessage message={formik.errors.phone} />
                    )}
                </div>

                <div>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                    />
                    {formik.touched.address && formik.errors.address && (
                        <ErrorMessage message={formik.errors.address} />
                    )}
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
