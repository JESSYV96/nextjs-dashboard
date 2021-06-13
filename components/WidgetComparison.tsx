import { FiCalendar } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import styles from '../styles/components/widgetComparison.module.scss'
const WidgetComparison = () => {
    return (
        <div className={styles.comparisonContainer}>
            <div className={styles.monthWidget}>
                <FiCalendar size={18} />
                <span>Last Month</span>
                <MdKeyboardArrowDown />
            </div>
            <p>compared to Oct-1-Oct-30, 2020</p>
        </div>
    )
}

export default WidgetComparison
