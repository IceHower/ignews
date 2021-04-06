import styles from '../styles/components/subscribebutton.module.scss';


interface SubscribreButtonProps {
    priceId: string,
}
export function SubscribeButton({ priceId } : SubscribreButtonProps) {
    return (
        <button type="button" className={styles.subscribeButton}>
            Subscribe Now
        </button>
    );
}