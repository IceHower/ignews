import styles from '../styles/components/signinbutton.module.scss';
import { FaGithub } from 'react-icons/fa';


export function SingInButton() {
    return(
        <button type="button" className={styles.signInButton}>
            <FaGithub />
            <p>Sign in with github</p>
        </button>
    )
}