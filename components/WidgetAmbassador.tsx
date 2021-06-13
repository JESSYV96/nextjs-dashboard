import styles from '../styles/components/widgetAmbassador.module.scss'

interface WidgetAmbassadorProps {
    title: string;
    content: string;
    isGrowing?: boolean;
}

const WidgetAmbassador = ({ title, content }: WidgetAmbassadorProps) => {
    return (
        <div className={styles.widgetAmbassadorContainer}>
            <p className={styles.content}>{content}</p>
            <span className={styles.title}>{title}</span>
        </div>
    )
}

export default WidgetAmbassador
