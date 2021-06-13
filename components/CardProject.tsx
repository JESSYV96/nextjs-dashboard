import styles from '../styles/components/card.module.scss'

interface CardProps {
    title: string,
    content: string | Number,
}

const CardProject = ({ title, content }: CardProps) => {
    return (
        <div className={styles.card}>
            <p className={styles.title}>{title}</p>
            <span className={styles.content}>{content}</span>
            <div className={styles.cardBody}>
                <div className={styles.cardText}>
                    <span>Unique referral URL</span>
                </div>
                <div className={styles.cardItem}>
                    <span>34</span>
                    <span>12%</span>
                </div>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardText}>
                    <span>Unique referral URL</span>
                </div>
                <div className={styles.cardItem}>
                    <span>34</span>
                    <span>12%</span>
                </div>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardText}>
                    <span>Unique referral URL</span>
                </div>
                <div className={styles.cardItem}>
                    <span>34</span>
                    <span>12%</span>
                </div>
            </div>
        </div>
    )
}

export default CardProject
