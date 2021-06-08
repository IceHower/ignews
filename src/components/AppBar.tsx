import styles from '../styles/components/appbar.module.scss';
import { SingInButton } from './SingInButton';

import { ActiveLink } from './ActiveLink';

export function AppBar() {


    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/assets/logo.svg" alt="Logo ignews"/>
                <nav>
                    <ActiveLink activeClassName={styles.active} href='/'>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href='/posts'>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SingInButton />
                
            </div>
        </header>
    )
}