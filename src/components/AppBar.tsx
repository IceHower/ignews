import styles from '../styles/components/appbar.module.scss';
import { SingInButton } from './SingInButton';

export function AppBar() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/assets/logo.svg" alt="Logo ignews"/>
                <nav>
                    <a className={styles.active} href="#">Home</a>
                    <a href="#">Posts</a>
                </nav>

                <SingInButton />
                
            </div>
        </header>
    )
}