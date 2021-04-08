import styles from '../styles/components/signinbutton.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';


export function SingInButton() {
    const [session] = useSession();
    console.log(session);
    return session ? (
        <button type="button" className={styles.signInButton}>
            <img src={session.user.image} alt=""/>
            <p>{session.user.name}</p>
            <FiX color='#737380' className={styles.closeIcon} onClick={() => signOut()}/>
        </button>
    ) : (
        <button type="button" className={styles.signInButton} onClick={() => signIn('github')}>
            <FaGithub color='#EBA417'/>
            <p>Sign in with github</p>
        </button>
);
    
}