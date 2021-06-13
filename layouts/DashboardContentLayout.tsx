import styles from '../styles/layouts/dashboardContent.module.scss'

interface ContentLayoutProps {
    children: any
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
    return (
        <div className={styles.dashboardContent}>
            {children}
        </div>
    )
}

export default ContentLayout
