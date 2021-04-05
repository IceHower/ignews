import styles from '../styles/components/signinbutton.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useState } from 'react';


export function SingInButton() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return isLoggedIn ? (
        <button type="button" className={styles.signInButton}>
            <FaGithub color='#04d361'/>
            <p>Vinicius Telles</p>
            <FiX color='#737380' className={styles.closeIcon}/>
        </button>
    ) : (
        <button type="button" className={styles.signInButton}>
            <FaGithub color='#EBA417'/>
            <p>Sign in with github</p>
        </button>
);
    
}