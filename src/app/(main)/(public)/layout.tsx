'use client';

import { ReactNode, useState } from 'react';
import styles from './layout.module.scss';
import Navbar from '@/UI/organisms/navbar/Navbar';
import Button from '@/UI/atoms/button/Button';
import { Icons } from '@/UI/atoms/icons/Icons';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleToggleRegisterForm = () => setShowRegisterForm(!showRegisterForm);
    const handleToggleLoginForm = () => setShowLoginForm(!showLoginForm);
    const handleCloseForms = () => {
        setShowRegisterForm(false);
        setShowLoginForm(false);
    };

    return (
        <div className={styles.layoutContainer}>
            <Navbar>
                <div className={styles.buttons}>
                    <Button variant='transparent' onClick={handleToggleLoginForm}>Iniciar sesión</Button>
                    <Button variant='transparent' onClick={handleToggleRegisterForm}>Registrarse</Button>
                </div>
            </Navbar>

            {/* Aquí se agregarán los formularios cuando estén listos */}
            {showRegisterForm && (
                <div className={styles.modalContainer}>
                    <button className={styles.closeButton} onClick={handleCloseForms}>{Icons.close}</button>
					<div className={styles.formContainer}>
                       {/* <RegisterForm onSuccess={handleCloseForms} /> */}
                    </div>
                </div>
            )}
            {showLoginForm && (
                <div className={styles.modalContainer}>
                    <button className={styles.closeButton} onClick={handleCloseForms}>{Icons.close}</button>
                    {/* <LoginForm onSuccess={handleCloseForms} /> */}
                </div>
            )}
        </div>
    );
};

export default Layout;
