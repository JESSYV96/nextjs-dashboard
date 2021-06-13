import Link from 'next/link';
import styles from '../styles/components/sidebar.module.scss';

const Sidebar = () => {
    return (
        <nav className={styles.navContainer}>
            <span className={styles.title}>JessyV96</span>
            <div className={styles.menuContainer}>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/projects"><a>Referred Projects</a></Link> <span>0</span></li>
                    <li>Resources</li>
                    <li>Store Feedback</li>
                </ul>
                <div className={styles.withdraw}>
                    <span>93,34€</span>
                    <div>Withdraw</div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar