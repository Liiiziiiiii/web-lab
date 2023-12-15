import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal';

const Login = () => {
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Ім\'я не може бути порожнім'),
        password: Yup.string().required('Пароль не може бути порожнім'),
    });

    const openModal = (message) => {
        setModalMessage(message);
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
        setModalMessage('');
    }

    const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
        try {
            const response = await fetch("http://localhost:5500/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (data.status === "ok") {
                console.log("Login successful");

                window.localStorage.setItem("token", data.data);
                window.localStorage.setItem("loggedIn", true);


                navigate("/");
            } else {
                console.log("Login failed:", data.message || "Unknown error");
                setFieldError('notFoundUser', 'Ім\'я чи пароль не правильні');
                openModal('Ім\'я чи пароль не правильні');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div>
            <h2>Вхід</h2>
            <Formik
                initialValues={{ firstName: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <label>
                        Ім'я:
                        <Field
                            type="text"
                            name="firstName"
                        />
                    </label>
                    <ErrorMessage name="firstName" component="div" />
                    <br />
                    <label>
                        Пароль:
                        <Field
                            type="password"
                            name="password"
                        />
                    </label>
                    <ErrorMessage name="password" component="div" />
                    <br />
                    <ErrorMessage name="notFoundUser" component="div" /> {/* Display error for notFoundUser */}
                    <br />
                    <button type="submit">Увійти</button>
                    <br />
                    <Link to="/register">Зареєструватися</Link>
                </Form>
            </Formik>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
            >
                <h2>Помилка</h2>
                <p>{modalMessage}</p>
                <button onClick={closeModal}>Закрити</button>
            </Modal>
        </div>
    );
};

export default Login;
