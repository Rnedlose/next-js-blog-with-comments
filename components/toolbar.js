import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';

export const Toolbar = () => {
    const router = useRouter();

    return(
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => window.location.href = 'https://twitter.com/Nrod0784'}>Twitter</div>
            <div onClick={() => window.location.href = 'https://nrod0784.itch.io'}>Itch</div>
            <div onClick={() => window.location.href = 'https://www.drivethrurpg.com/browse/pub/22003/Rodney-Nedlose'}>DriveThruRpg</div>
        </div>
    )
};