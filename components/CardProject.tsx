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
        </div>
    )
}

export default CardProject
