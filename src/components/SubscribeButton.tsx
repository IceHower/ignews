import styles from '../styles/components/subscribebutton.module.scss';

export function SubscribeButton() {
    return (
        <button type="button" className={styles.subscribeButton}>
            Subscribe Now
        </button>
    );
}