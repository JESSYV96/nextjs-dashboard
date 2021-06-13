import { RiMedalLine } from 'react-icons/ri';

import styles from '../styles/components/ambassadorLevel.module.scss'

const AmbassadorLevel = () => {
    return (
        <div className={styles.levelContainer}>
            <div className={styles.medalContainer}>
                <RiMedalLine
                    size={20}
                    color="#e3b709" />
            </div>

            <span>Level 2 Ambassador</span>
            <span>45543.80€<span>/100k€</span></span>
        </div>
    )
}

export default AmbassadorLevel
