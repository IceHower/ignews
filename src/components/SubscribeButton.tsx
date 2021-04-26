import { useSession, signIn } from 'next-auth/client';
import styles from '../styles/components/subscribebutton.module.scss';


interface SubscribreButtonProps {
    priceId: string,
}
export function SubscribeButton({ priceId } : SubscribreButtonProps) {
    const [session] = useSession();

    function handleSubscribe() {
        if(!session) {
            signIn('github')
            return;
        }

        // Criação da checkout session
        
    }

    return (
        <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
            Subscribe Now
        </button>
    );
}