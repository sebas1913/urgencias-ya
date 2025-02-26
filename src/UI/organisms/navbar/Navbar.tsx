import Link from 'next/link';
import styles from './navbar.module.scss';


interface NavbarProps {
    children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    return (
        <nav className={styles.navContainer}>
            <div>
                <Link className={styles.link} href={'/'}>
                    <img src='/images/urgenciasYa-white.png' alt='Logo UrgenciasYa' className={styles.image} />
                </Link>
            </div>
            <nav className={styles.navContainer}>
                {children}
            </nav>
        </nav>
    );
};

export default Navbar;
