import Link from 'next/link';
import { FiTrendingUp } from 'react-icons/fi';
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
                    <span className={styles.amountCommission}>93,34€</span>
                    <div>
                        <FiTrendingUp color="white" size={20} />
                        <span>Withdraw</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar